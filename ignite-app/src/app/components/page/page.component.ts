import {Component, OnInit, Inject, ComponentRef, ComponentFactoryResolver, ViewContainerRef} from '@angular/core';
import {UpdateformComponent} from "../updateform/updateform.component";
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Books } from "../../interfaces/books";
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  comp: ComponentRef<UpdateformComponent> = null;
  Books: Books[];
  constructor(
    private router: Router,
    private bookservice: DataService,
    private resolver: ComponentFactoryResolver,
    private location: ViewContainerRef
  ) { }
  //Hetkel ei lisanud mingisugust limitit muutujana. Oleks võimalik asendada hardcoded limit palju inputiga
  ngOnInit() {
    this.bookservice.getBooks(1).subscribe(data => {
      this.Books = data;
    });
  }
  getMore(){
    var page = this.Books[this.Books.length-1]['id'];
    if(this.Books.length > 3){
      this.bookservice.getBooks(page).subscribe(data => {
        this.Books = data;
      });
    }

  }
  getPrev(){
    var page = this.Books[0]['id']-3
    this.bookservice.getBooks(page).subscribe(data => {
      this.Books = data;
    })
  }
  checkPrev(){
    if(this.Books[0]['id'] > 1){
      return true;
    }else{
      return false;
    }
  }

  //Form stuff
  displayForm(){
    document.getElementById("new").style.display = "block";
  }
  hideForm(Bool){
    if(!Bool){
      document.getElementById("new").style.display = "none";
    }
  }

  editBook(title, autor, id){
    const factory = this.resolver.resolveComponentFactory(UpdateformComponent);
    const component = this.location.createComponent(factory);
    component.instance.autor = autor;
    component.instance.pealkiri = title;
    component.instance.post.subscribe(data => {
      this.bookservice.editBook(id, data).subscribe(editedBook => {
        this.Books.filter(book => {
          if(book['id'] === editedBook['id']){
            var index = this.Books.indexOf(book);
            this.Books[index] = editedBook;
          }
        })
        console.log(this.Books);
        component.destroy();
      });
    })
    component.instance.close.subscribe(d =>{
      component.destroy();
    })
  }


  submitForm(FG: FormGroup){
    var body = FG.value;
    body['innerId'] = body['autor'].slice(3) + body['pealkiri'].slice(3);
    this.bookservice.postBook(FG.value).subscribe(response => {
      this.hideForm(false);
      this.Books = response;
    });
  }
}
