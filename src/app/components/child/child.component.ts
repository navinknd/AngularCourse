import { Component, ContentChild, ContentChildren, ElementRef, OnInit, QueryList, ViewChild } from '@angular/core';
import { CpeComponent } from '../cpe/cpe.component';

@Component({
  selector: 'besant-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {

  // @ViewChild('titleRef') titleRef!: ElementRef;

  // @ContentChild('titleRef') titleRef!: ElementRef

  // @ContentChild(CpeComponent) cpeRef!: CpeComponent
  @ContentChildren(CpeComponent) cpeRef!: QueryList<CpeComponent>

  @ContentChildren('titleRef') titleRef!: QueryList<ElementRef>;

  constructor() { }

  ngOnInit(): void {
  }
  getRef(): void {
    // console.log(this.titleRef);
    // this.titleRef.forEach((element: ElementRef) => {
    //   console.log(element.nativeElement);
    // })
    // console.log(this.cpeRef);
    this.cpeRef.forEach((component: CpeComponent) => {
      console.log(component);
    })
  }

}
