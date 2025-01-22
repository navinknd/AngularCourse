import { Component, OnInit, ViewChild } from '@angular/core';
import { DiUserService } from './DI/di-user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [DiUserService]
})

export class AppComponent {
  users: { name: string, status: string, id?: number }[] = []

  constructor(private userService: DiUserService, private router: Router) { }

  ngOnInit(): void {
    this.users = this.userService.users
    console.log(this.users);
  }

  getStatus(status: string) {
    console.log(status, "from getStatus fun");
  }

  goToPage(route: string, queryParams: string, params?: number) {
    if (queryParams) {
      this.router.navigate([route], { queryParams: { userName: queryParams } })
    } else if (params) {
      this.router.navigate([route, params])
    } else {
      this.router.navigate([route])
    }
  }
}
