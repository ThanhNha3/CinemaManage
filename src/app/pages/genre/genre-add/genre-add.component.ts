import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.scss'],
})
export class GenreAddComponent {
  addGenreForm!: FormGroup;

  constructor(
    private service: GenreService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.addGenreForm.valid) {
      this.service.create(this.addGenreForm.value).subscribe(
        (res) => {
          this.toastr.success('Thêm mới thành công', 'Thông báo');
          this.router.navigate(['/pages/genre']);
        },
        (err) => {
          this.toastr.error('Thêm thất bại', 'Thông báo');
        }
      );
    }
  }
}
