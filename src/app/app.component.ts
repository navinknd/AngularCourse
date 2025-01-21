import { Component, OnInit, ViewChild } from '@angular/core';
import { DiUserService } from './DI/di-user.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [DiUserService]
})

export class AppComponent {
  users: { name: string, status: string }[] = []

  constructor(private userService: DiUserService) { }

  ngOnInit(): void {
    this.users = this.userService.users
  }

  getStatus(status: string) {
    console.log(status, "from getStatus fun");

  }
}
