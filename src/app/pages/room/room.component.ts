import { Component } from '@angular/core';
import { NbDialogService, NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';
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
  isDarkTheme: boolean = false;
  themeSubscription: Subscription;
  constructor(
    private dialogService: NbDialogService,
    private roomService: RoomService,
    private toastr: ToastrService,
    private themeService: NbThemeService 
  ) {}

  ngOnInit() {
     // Check initial theme
     this.isDarkTheme = this.themeService.currentTheme === 'dark';

     // Subscribe to theme changes
     this.themeSubscription = this.themeService.onThemeChange()
       .subscribe(theme => {
         this.isDarkTheme = theme?.name === 'dark'; // Adjust 'dark' based on your theme names
       });
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
