import { Component, EventEmitter, Output, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService, NbThemeService } from '@nebular/theme';
import { API_BASE_URL, API_ENDPOINT } from 'app/@core/config/api-endpoint.config';
import { UserService } from 'app/@core/services/apis/user.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent implements OnInit, OnDestroy {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  userList: any[] = [];

  apiUrl: string = API_BASE_URL + API_ENDPOINT.user;
  currentPage: number = 0;
  totalPage: number = 0;
  isDarkTheme: boolean = false;
  themeSubscription: Subscription;

  constructor(
    private dialogService: NbDialogService,
    private userService: UserService,
    private toastr: ToastrService,
    private themeService: NbThemeService
  ) {}

  ngOnInit(): void {
    // Check initial theme
    this.isDarkTheme = this.themeService.currentTheme === 'dark';

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.onThemeChange()
      .subscribe(theme => {
        this.isDarkTheme = theme.name === 'dark';
      });

    // Fetch initial user data
    this.getAllUser();
  }

  getAllUser() {
    this.userService.getAll().subscribe((res) => {
      this.userList = res.data.map(user => ({ ...user }));
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
          this.userService.delete(id).subscribe(() => {
            this.toastr.success('Xóa thành công', 'Thông báo');
            this.getAllUser(); // Refresh user data after deletion
          });
        }
      });
  }

  ngOnDestroy(): void {
    // Unsubscribe from theme change subscription
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }

  // Define updateData method to handle paginator event
  updateData(event: any): void {
    this.userList = event.data;
    this.currentPage = event.currentPage;
    this.totalPage = event.totalPages;
  }
}
