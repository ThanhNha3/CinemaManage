import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-room',
  template:
    '<app-list-room (deleteRequested)="openDeleteConfirmation()"></app-list-room>',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  constructor(private dialogService: NbDialogService) {}

  openDeleteConfirmation() {
    this.dialogService
      .open(DialogConfirmComponent, {
        context: {
          title: 'Xác nhận xóa',
          content: 'Bạn có chắc chắn muốn xóa?',
        },
      })
      .onClose.subscribe((result) => {
        console.log('result', result);
      });
  }
}
