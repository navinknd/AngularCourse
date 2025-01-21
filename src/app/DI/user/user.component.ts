import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DiUserService } from '../di-user.service';

@Component({
  selector: 'besant-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  // providers: [DiUserService]
})
export class UserComponent implements OnInit {

  @Input() user!: { name: string, status: string }
  @Input() index!: number
  @Output() uStatus: EventEmitter<string> = new EventEmitter<string>();
  constructor(private userService: DiUserService) { }

  ngOnInit(): void {
  }

  onUpdateStatus(status: string) {
    // this.uStatus.emit(status)
    this.userService.updateStatus(this.index, status)
  }
}
