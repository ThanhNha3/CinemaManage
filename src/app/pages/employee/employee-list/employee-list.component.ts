import { Component } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent {
  confirmDelete(): void {
    const confirmed = confirm('Bạn có chắc chắn muốn xóa?');
    if (confirmed) {
      // Perform delete action here
      console.log('Item deleted');
    } else {
      console.log('Delete action canceled');
    }
  }
}
