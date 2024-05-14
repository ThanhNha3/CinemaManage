import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-ticket',
  template:
    '<app-list-ticket (deleteRequested)="openDeleteConfirmation()"></app-list-ticket>',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent {
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
