import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-edit',
  templateUrl: './movie-edit.component.html',
  styleUrls: ['./movie-edit.component.scss'],
})
export class MovieEditComponent {
  editMovieForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.editMovieForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.editMovieForm.valid) {
      console.log(this.editMovieForm.value);
    }
  }
}
