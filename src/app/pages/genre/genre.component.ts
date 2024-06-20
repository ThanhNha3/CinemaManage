import { Component, OnInit, OnDestroy } from '@angular/core';
import { NbDialogService, NbThemeService } from '@nebular/theme';
import { Subscription } from 'rxjs';

import { API_BASE_URL, API_ENDPOINT } from 'app/@core/config/api-endpoint.config';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
})
export class GenreComponent implements OnInit, OnDestroy {
  apiUrl: string = API_BASE_URL + API_ENDPOINT.genre;
  currentPage: number = 0;
  totalPage: number = 0;
  data = [];
  isDarkTheme: boolean = false; // Initialize to false by default
  themeSubscription: Subscription;

  constructor(
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private service: GenreService,
    private themeService: NbThemeService // Inject NbThemeService
  ) {}

  updateData(res: any): void {
    this.data = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  ngOnInit() {
    // Check initial theme
    this.isDarkTheme = this.themeService.currentTheme === 'dark';

    // Subscribe to theme changes
    this.themeSubscription = this.themeService.onThemeChange()
      .subscribe(theme => {
        this.isDarkTheme = theme?.name === 'dark'; // Adjust 'dark' based on your theme names
      });

    // Get data for Genres
    this.service.getAll().subscribe((res) => {
      if (res) {
        this.data = res.data;
        this.currentPage = res.currentPage;
        this.totalPage = res.totalPages;
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe from theme changes to prevent memory leaks
    if (this.themeSubscription) {
      this.themeSubscription.unsubscribe();
    }
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
              if (res) {
                this.toastr.success('Xóa thành công', 'Thông báo');
                this.service.getAll().subscribe((res) => {
                  this.data = res.data;
                  this.currentPage = res.currentPage;
                  this.totalPage = res.totalPages;
                });
              }
            },
            (error) => {
              this.toastr.error('Xóa thất bại', 'Thông báo');
            }
          );
        }
      });
  }
}
