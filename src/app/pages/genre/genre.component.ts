import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-genre',
  template: `
    <app-genre-list
      (deleteRequested)="openDeleteConfirmation()"
    ></app-genre-list>
  `,
})
export class GenreComponent {
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
