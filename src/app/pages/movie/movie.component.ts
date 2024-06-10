import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';

@Component({
  selector: 'app-movie',
  templateUrl: `./movie.component.html`,
})
export class MovieComponent {
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
