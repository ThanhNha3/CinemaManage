import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
})
export class MovieAddComponent {
  addMoiveForm!: FormGroup;
  genres: [];
  imageUrl: string = '';

  constructor(
    private toastr: ToastrService,
    private service: MovieService,
    private genreService: GenreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addMoiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      genreId: new FormControl('', [Validators.required]),
      duration: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      director: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      poster: new FormControl('', [Validators.required]),
    });
    this.genreService.getAll().subscribe((res) => {
      this.genres = res.data;
    });
  }

  get imageControl(): FormControl | null {
    const control = this.addMoiveForm.get('poster');
    return control instanceof FormControl ? control : null;
  }

  onImageChanged(url: string): void {
    this.imageUrl = url;
  }

  onSubmit() {
    if (this.addMoiveForm.valid) {
      const data = { ...this.addMoiveForm.value, poster: this.imageUrl };

      this.service.create(data).subscribe(
        (res) => {
          this.toastr.success('Thêm mới thành công', 'Thông báo');
          this.router.navigate(['/pages/movie']);
        },
        (err) => {
          this.toastr.error('Thêm mới thất bại', 'Thông báo');
        }
      );
    }
  }
}
