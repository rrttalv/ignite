import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Books } from "../../interfaces/books";
import { Observable, Subject } from 'rxjs';
import { FormGroup } from '@angular/forms';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {
  Loading: Boolean = true;
  Books: Books[];
  constructor(
    private router: Router,
    private bookservice: DataService
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

  submitForm(FG: FormGroup){
    var body = FG.value;
    body['innerId'] = body['autor'].slice(3) + body['pealkiri'].slice(3);
    this.bookservice.postBook(FG.value).subscribe(response => {
      this.hideForm(false);
      this.Books = response;
    });
  }
}
