import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'besant-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.scss']
})
export class LifecycleComponent implements OnInit {

  @Input() emailId!: string;

  course: string = "Angular";
  skill: string[] = ["Typescript", "Scss", "Rxjs", "Git"]
  products: any[] = []
  constructor() {
    console.log("LifecycleComponent constructor called");
    // console.log(this.emailId, "emailID");
    // console.log(this.course, "course");
    // console.log(this.skill, "skill");
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes, "ngOnChanges");
  }

  ngOnInit(): void {
    console.log("LifecycleComponent ngOnInit called");
    // console.log(this.emailId, "emailID");
    // console.log(this.course, "course");
    // console.log(this.skill, "skill");

    // fetch the products bind in the products variable
    this.products = [{
      "userId": 1,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }, {
      "userId": 2,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }, {
      "userId": 3,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }, {
      "userId": 4,
      "id": 10,
      "title": "optio molestias id quia eum",
      "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    }]
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log("ngDoCheck called");
  }

  handleClick() {
    console.log("handleClick called");

  }

}
