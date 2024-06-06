import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-employee',
  template:
    '<app-employee-list (deleteRequested)="openDeleteConfirmation()"></app-employee-list>',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  constructor(private dialogService: NbDialogService) {}

  openDeleteConfirmation() {
    this.dialogService.open(DialogConfirmComponent, {
      context: {
        title: 'Xác nhận xóa',
        content: 'Bạn có chắc chắn muốn xóa?',
      },
    });
  }
}
