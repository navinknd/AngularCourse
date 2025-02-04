import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'besant-dad',
  templateUrl: './dad.component.html',
  styleUrls: ['./dad.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DadComponent implements OnInit {
  arr: number[] = []
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      // this.arr = [Math.random()]
      this.arr.push(Math.random())
    }, 1000);
  }
  dad() {
    console.log('dad');
    return 'dad'
  }

}
