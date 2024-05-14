import { Component } from '@angular/core';

@Component({
  selector: 'app-screening-list',
  templateUrl: './screening-list.component.html',
  styleUrls: ['./screening-list.component.scss']
})
export class ScreeningListComponent {
  confirmDelete(): void {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa?');
    if (confirmed) {
      console.log('Item deleted');
    } else {
      console.log('Delete action canceled');
    }
  }
}
