import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-genre',
  templateUrl: './genre.component.html',
})
export class GenreComponent {
  data = [];

  constructor(
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private service: GenreService,
  ) {}

  ngOnInit() {
    // Get dữ liệu Genres
    this.service.get().subscribe((res) => {
      if (res) {
        this.data = res.data;
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
              if (res) {
                this.toastr.success('Xóa thành công', 'Thông báo');
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
