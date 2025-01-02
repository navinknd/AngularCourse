import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'besant-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss'],
  encapsulation: ViewEncapsulation.Emulated
})

export class AddUserComponent implements OnInit {

  @Input() userName: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
