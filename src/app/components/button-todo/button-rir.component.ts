import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-todo',
  templateUrl: './button-rir.component.html',
  styleUrls: ['./button-rir.component.css']
})
export class ButtonRirComponent implements OnInit {

  constructor() { }

  @Input() text="";
  @Input() color="";

  @Output() btnClick = new EventEmitter()

  ngOnInit(): void {
  }


    onClick(){
    this.btnClick.emit();
    }
}
