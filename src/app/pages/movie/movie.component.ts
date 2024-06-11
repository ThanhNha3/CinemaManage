import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import {
  API_BASE_URL,
  API_ENDPOINT,
} from 'app/@core/config/api-endpoint.config';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie',
  templateUrl: `./movie.component.html`,
})
export class MovieComponent {
  apiUrl: string = API_BASE_URL + API_ENDPOINT.movie;
  currentPage: number = 0;
  totalPage: number = 0;
  data = [];

  constructor(
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private service: MovieService
  ) {}

  updateData(res: any): void {
    this.data = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  ngOnInit() {
    // Get dữ liệu Genres
    this.service.get().subscribe((res) => {
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
        console.log('result', result);
        if (result) {
          this.service.remove(id).subscribe(
            (res) => {
              this.toastr.success('Xóa thành công', 'Thông báo');
            },
            (error) => {
              this.toastr.error('Xóa thất bại', 'Thông báo');
            }
          );
        }
      });
  }
}
