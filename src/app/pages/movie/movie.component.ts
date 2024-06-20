import { Component, OnInit } from '@angular/core';
import { NbDialogService, NbThemeService } from '@nebular/theme';
import { API_BASE_URL, API_ENDPOINT } from 'app/@core/config/api-endpoint.config';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
})
export class MovieComponent implements OnInit {
  apiUrl: string = API_BASE_URL + API_ENDPOINT.movie;
  currentPage: number = 0;
  totalPage: number = 0;
  data = [];
  isDarkTheme: boolean = false;
  themeSubscription: any; // Store the subscription

  constructor(
    private themeService: NbThemeService,
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private service: MovieService
  ) {}

  ngOnInit() {
    // Check initial theme
    this.isDarkTheme = this.themeService.currentTheme === 'dark';

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.onThemeChange()
      .subscribe(theme => {
        this.isDarkTheme = theme.name === 'dark';
      });

    // Fetch initial movie data
    this.fetchMovieData();
  }

  fetchMovieData() {
    // Get dữ liệu Genres
    this.service.getAll().subscribe((res) => {
      if (res) {
        this.data = res.data;
        this.currentPage = res.currentPage;
        this.totalPage = res.totalPages;
      }
    });
  }

  openDeleteConfirmation(id: number) {
    this.dialogService
      .open(DialogConfirmComponent, {
        context: {
          title: 'Xác nhận xóa',
          content: 'Bạn có chắc chắn muốn xóa?',
        },
        autoFocus: false,
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.service.remove(id).subscribe(
            (res) => {
              this.toastr.success('Xóa thành công', 'Thông báo');
              this.fetchMovieData(); // Refresh movie data after deletion
            },
            (error) => {
              this.toastr.error('Xóa thất bại', 'Thông báo');
            }
          );
        }
      });
  }

  updateData(res: any): void {
    this.data = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  ngOnDestroy() {
    // Unsubscribe from theme change subscription
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
  }
}
