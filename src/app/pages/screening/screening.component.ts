import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-screening',
  template:
    '<app-screening-list (deleteRequested)="openDeleteConfirmation()"></app-screening-list>',
  styleUrls: ['./screening.component.scss'],
})
export class ScreeningComponent {
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
