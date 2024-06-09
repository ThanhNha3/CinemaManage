import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-genre-add',
  templateUrl: './genre-add.component.html',
  styleUrls: ['./genre-add.component.scss'],
})
export class GenreAddComponent {
  addGenreForm!: FormGroup;

  ngOnInit(): void {
    this.addGenreForm = new FormGroup({
      name: new FormControl('', Validators.required),
      description: new FormControl('', [Validators.required]),
    });
  }
  onSubmit() {
    if (this.addGenreForm.valid) {
      console.log(this.addGenreForm.value);
    }
  }
}
