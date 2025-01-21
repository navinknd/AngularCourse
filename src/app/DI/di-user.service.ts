import { Injectable } from '@angular/core';
import { EventEmitter } from "@angular/core"

@Injectable({
  providedIn: 'root'
})

export class DiUserService {

  users: { name: string, status: string }[] = [
    {
      name: "Navin",
      status: "active"
    },
    {
      name: "Anbu",
      status: "active"
    },
    {
      name: "Kishore",
      status: "active"
    }
  ]

  statusUpdated = new EventEmitter<{ status: string, index: number }>();

  constructor() { }


  addUser(name: string, status: string) {
    this.users.push({ name, status })
  }

  updateStatus(index: number, status: string) {
    this.users[index].status = status;
    const user = {
      status, index
    }
    this.statusUpdated.emit(user)
  }
}
