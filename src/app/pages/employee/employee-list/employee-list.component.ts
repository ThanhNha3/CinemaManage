import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'app/@core/services/apis/user.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getAll().subscribe((res) => {
      console.log(res);
    });
  }

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
