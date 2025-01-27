import { Component, OnInit, ViewChild } from '@angular/core';
import { DiUserService } from './DI/di-user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  // providers: [DiUserService]
})

export class AppComponent {
  observableData1: any
  subjectData1: any
  observableData2: any
  subjectData2: any

  myData: any[] = []
  // subject = new Subject();
  // subject = new ReplaySubject(2); // memroy data
  subject = new BehaviorSubject(0); //initial value


  getObservableData() {
    console.log("getObservableData");

    let myObserable = new Observable<any>(observer => {
      // observer.next("data emited from the myObserable")
      observer.next(Math.floor(Math.random() * 99) + 1)
    })

    myObserable.subscribe(data => {
      this.observableData1 = data
    })
    myObserable.subscribe(data => {
      this.observableData2 = data
    })
  }
  getSubjectData() {
    console.log("getSubjectData");

    let mySubject = new Subject()

    mySubject.subscribe(data => {
      this.subjectData1 = data
    })
    mySubject.subscribe(data => {
      this.subjectData2 = data
    })
    // mySubject.next("data emited from the mySubject");
    mySubject.next(Math.floor(Math.random() * 99) + 1)
  }

  emitData() {
    console.log("emitData");
    this.subject.next(1);
    setTimeout(() => {
      this.subject.next(2);
    }, 3000);
    setTimeout(() => {
      this.subject.next(3);
    }, 6000);
    setTimeout(() => {
      this.subject.next(4);
    }, 9000);
    setTimeout(() => {
      this.subject.next(5);
    }, 1200);
  }
  getData() {
    this.subject.subscribe(data => {
      console.log("getData", data);
      this.myData.push(data)
    })
  }

  getValue(event: any) {
    console.log(event?.target?.value);
  }
}
