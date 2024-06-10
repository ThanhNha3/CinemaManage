import { Component } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {
  API_BASE_URL,
  API_ENDPOINT,
} from 'app/@core/config/api-endpoint.config';
import { RoomService } from 'app/@core/services/apis/room.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss'],
})
export class RoomComponent {
  rooms: any[] = [];
  apiUrl: string = API_BASE_URL + API_ENDPOINT.room;
  currentPage: number = 0;
  totalPage: number = 0;

  constructor(
    private dialogService: NbDialogService,
    private roomService: RoomService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllRooms();
  }

  getAllRooms() {
    this.roomService.getAll().subscribe((res) => {
      this.rooms = res.data;
      this.currentPage = res.currentPage;
      this.totalPage = res.totalPages;
    });
  }

  updateData(res: any): void {
    this.rooms = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  openDeleteConfirmation(roomId: number) {
    this.dialogService
      .open(DialogConfirmComponent, {
        context: {
          title: 'Xác nhận xóa',
          content: 'Bạn có chắc chắn muốn xóa phòng này không?',
        },
        autoFocus: false,
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.roomService.remove(roomId).subscribe(() => {
            this.toastr.success('Xóa thành công', 'Thông báo');
            this.getAllRooms();
          });
        }
      });
  }
}
