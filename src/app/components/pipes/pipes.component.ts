import { Component, OnInit } from '@angular/core';

type TList = {
  userId: string;
  id: number;
  title: string;
  completed: boolean;
  date?: Date;
  price: number;
  role: string
}

@Component({
  selector: 'besant-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {
  list: TList[] = [
    {
      "userId": "DIA001",
      "id": 1,
      "title": "delectus aut autem",
      "completed": false,
      "date": new Date(),
      "role": "user",
      "price": 2500
    },
    {
      "userId": "DIA002",
      "id": 2,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
      "date": new Date(),
      "role": "admin",
      "price": 1000
    },
    {
      "userId": "DIA003",
      "id": 3,
      "title": "fugiat veniam minus",
      "completed": false,
      "date": new Date(),
      "role":  "admin",
      "price": 500
    },
    {
      "userId": "DIA004",
      "id": 4,
      "title": "et porro tempora",
      "completed": true,
      "date": new Date(),
      "role": "user",
      "price": 5000
    },
    {
      "userId": "DIA005",
      "id": 5,
      "title": "quis ut nam facilis et officia qui",
      "completed": false,
      "date": new Date(),
      "role": "admin",
      "price": 3000
    },
    {
      "userId": "DIA006",
      "id": 6,
      "title": "fugiat veniam minus",
      "completed": false,
      "date": new Date(),
      "role": "user",
      "price": 1000
    },
    {
      "userId": "DIA007",
      "id": 7,
      "title": "et porro tempora",
      "completed": true,
      "date": new Date(),
      "role":  "admin",
      "price": 3600
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
