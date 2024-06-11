import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.scss'],
})
export class GenreEditComponent {
  editGenreForm!: FormGroup;
  id!: number;

  currentGenre: number;
  currentDescription: string;

  constructor(
    private service: GenreService,
    private toastr: ToastrService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editGenreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });

    this.id = Number(this.route.snapshot.params['id']);
    this.service.getById(this.id).subscribe((res) => {
      if (res) {
        this.editGenreForm.patchValue(res);
      }
    });
  }
  onSubmit() {
    if (this.editGenreForm.valid) {
      this.service.edit(this.id, this.editGenreForm.value).subscribe(
        (res) => {
          if (res) {
            this.toastr.success('Cập nhật thành công', 'Thông báo');
            this.router.navigate(['/pages/genre']);
          }
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}
