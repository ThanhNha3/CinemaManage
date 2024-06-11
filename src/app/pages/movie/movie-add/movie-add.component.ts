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
    });
    this.genreService.getAll().subscribe((res) => {
      this.genres = res.data;
    });
  }

  onSubmit() {
    if (this.addMoiveForm.valid) {
      this.service.create(this.addMoiveForm.value).subscribe(
        (res) => {
          this.toastr.success('Thêm thành công', 'Thông báo');
          this.router.navigate(['/pages/movie']);
        },
        (err) => {
          this.toastr.error('Thêm thất bại', 'Thông báo');
        }
      );
    }
  }
}
