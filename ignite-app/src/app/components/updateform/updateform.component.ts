import {Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {
  @Input('pealkiri') pealkiri: String;
  @Input("autor") autor: String;
  bookForm = new FormGroup({
    pealkiri: new FormControl('', Validators.required),
    autor: new FormControl('', Validators.required)
  });
  @Output('post') post = new EventEmitter();
  @Output('close') close = new EventEmitter();
  constructor() { }

  ngOnInit() {
    this.bookForm.get("pealkiri").setValue(this.pealkiri);
    this.bookForm.get("autor").setValue(this.autor);
  }

  saveBook(){
    if(this.bookForm.valid){
      this.post.emit(this.bookForm.value);
    }
  };

  cancel(){
    this.close.emit(null);
  }


}
