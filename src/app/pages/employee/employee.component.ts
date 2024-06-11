import { Component, EventEmitter, Output } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {
  API_BASE_URL,
  API_ENDPOINT,
} from 'app/@core/config/api-endpoint.config';
import { UserService } from 'app/@core/services/apis/user.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  userList: [] = [];

  apiUrl: string = API_BASE_URL + API_ENDPOINT.user;
  currentPage: number = 0;
  totalPage: number = 0;

  constructor(
    private dialogService: NbDialogService,
    private userServer: UserService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getAllUser();
  }
  updateData(res: any): void {
    this.userList = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  getAllUser() {
    this.userServer.getAll().subscribe((res) => {
      this.userList = res.data.map((showtime: any) => {
        return {
          ...showtime,
        };
      });
      this.currentPage = res.currentPage;
      this.totalPage = res.totalPages;
    });
  }

  openDeleteConfirmation(id: string) {
    this.dialogService
      .open(DialogConfirmComponent, {
        context: {
          title: 'Xác nhận xóa',
          content: 'Bạn có chắc chắn muốn xóa?',
        },
        autoFocus: false,
      })
      .onClose.subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.userServer.delete(id).subscribe(() => {
            this.toastr.success('Xóa thành công', 'Thông báo');
            this.getAllUser();
          });
        }
      });
  }
}
