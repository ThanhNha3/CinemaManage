import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NbDialogService, NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';
import {
  API_BASE_URL,
  API_ENDPOINT,
} from 'app/@core/config/api-endpoint.config';
import { ShowtimeService } from 'app/@core/services/apis/showtime.service';
import { DateUtil } from 'app/@core/utils/date.util';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-screening',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
})
export class ScreeningComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  screeningList: [] = [];
  apiUrl: string = API_BASE_URL + API_ENDPOINT.showtime;
  currentPage: number = 0;
  totalPage: number = 0;
  isDarkTheme: boolean = false; // Initialize to false by default
  themeSubscription: Subscription;

  constructor(
    private dialogService: NbDialogService,
    private showtimeService: ShowtimeService,
    private toastr: ToastrService,
    private router: Router,
    private themeService: NbThemeService // Inject NbThemeService

  ) {}

  ngOnInit(): void {
    // Check initial theme
    this.isDarkTheme = this.themeService.currentTheme === 'dark';

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.onThemeChange()
      .subscribe(theme => {
        this.isDarkTheme = theme?.name === 'dark'; // Adjust 'dark' based on your theme names
      });

    this.getAllShowTime();
  }

  updateData(res: any): void {
    this.screeningList = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  onDeleteRequested() {
    this.deleteRequested.emit();
  }

  getAllShowTime() {
    this.showtimeService.getAll().subscribe((res) => {
      this.screeningList = res.data.map((showtime: any) => {
        return {
          ...showtime,
          startTime: DateUtil.formatDate(showtime.startTime),
          endTime: DateUtil.formatDate(showtime.endTime),
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
          console.log(id);
          this.showtimeService.delete(id).subscribe(() => {
            this.toastr.success('Xóa thành công', 'Thông báo');
            this.getAllShowTime();
          });
        }
      });
  }
}
