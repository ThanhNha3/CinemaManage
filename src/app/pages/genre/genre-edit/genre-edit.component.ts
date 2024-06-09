import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.scss'],
})
export class GenreEditComponent {
  editGenreForm!: FormGroup;

  ngOnInit(): void {
    this.editGenreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.editGenreForm.valid) {
      console.log(this.editGenreForm.value);
    }
  }
}
