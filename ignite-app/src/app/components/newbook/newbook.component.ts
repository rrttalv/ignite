import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-newbook',
  templateUrl: './newbook.component.html',
  styleUrls: ['./newbook.component.css']
})
export class NewbookComponent implements OnInit {
  bookForm = new FormGroup({
    pealkiri: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required)
  });
  @Output() sendForm: EventEmitter<FormGroup> = new EventEmitter();
  @Output() cancel: EventEmitter<Boolean> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  submit(){
    if(this.bookForm.valid){
      this.sendForm.emit(this.bookForm);
    }
  }
  nobook(){
    this.cancel.emit(false);
  }
}
