import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NbDialogService } from '@nebular/theme';
import { GenreService } from 'app/@core/services/apis/genre.service';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
})
export class MovieEditComponent {
  editMovieForm!: FormGroup;
  id!: number;
  genres: [];
  constructor(
    private dialogService: NbDialogService,
    private toastr: ToastrService,
    private service: MovieService,
    private genreService: GenreService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.params['id']);
    this.editMovieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      genreId: new FormControl('', [Validators.required]),
      duration: new FormControl('', [
        Validators.required,
        Validators.pattern(/^-?(0|[1-9]\d*)?$/),
      ]),
      director: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });

    this.genreService.get().subscribe((res) => {
      this.genres = res.data;
      console.log(this.genres);
      
    });

    this.id = Number(this.route.snapshot.params['id']);
    Promise.all([]).then(() => {});
    this.service.getByid(this.id).subscribe((res) => {
      if (res) {
        this.genreService.getByid(res.genreId);
        this.editMovieForm.patchValue(res);
      }
    });
  }

  onSubmit() {
    if (this.editMovieForm.valid) {
      this.service.edit(this.id, this.editMovieForm.value).subscribe(
        (res) => {
          if (res) {
            this.toastr.success('Sửa thành công', 'Thông báo');
          }
        },
        (error) => {}
      );
    }
  }
}
