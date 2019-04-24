import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Input() HasPrev: Boolean;
  @Output() more: EventEmitter<Number> = new EventEmitter();
  @Output() loadPrevious: EventEmitter<Number> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  loadMore(){
    this.more.emit();
  }

  loadPrev(){
      if(this.HasPrev){
        this.loadPrevious.emit();
      }
  }


}
