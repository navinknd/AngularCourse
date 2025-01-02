import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'besant-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {

  userEmail: string = "";

  constructor() { }

  ngOnInit(): void {
  }

  submitEmail(element: HTMLInputElement) {
    const value = element.value
    this.userEmail = value
    console.log(value);
    console.log(this.userEmail);
  }
}
