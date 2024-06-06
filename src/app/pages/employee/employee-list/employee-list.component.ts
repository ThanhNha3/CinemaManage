import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
