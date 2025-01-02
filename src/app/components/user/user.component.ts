import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';

export type TUser = { name: string }
@Component({
  selector: 'besant-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class UserComponent implements OnInit {

  @Input('date') currrentDate: Date = new Date();

  @Input() UserName: string = "";

  @Output() sendDate: EventEmitter<TUser> = new EventEmitter<TUser>();

  constructor() { }

  ngOnInit(): void {
  }

  sendDateFromChildToParent() {
    const obj = {
      name: this.UserName
    }
    this.sendDate.emit(obj)
  }

}
