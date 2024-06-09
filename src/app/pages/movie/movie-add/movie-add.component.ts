import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.scss'],
})
export class MovieAddComponent {
  addMoiveForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.addMoiveForm = new FormGroup({
      name: new FormControl('', Validators.required),
      type: new FormControl('', [Validators.required]),
      capacity: new FormControl('', [Validators.required]),
      director: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    if (this.addMoiveForm.valid) {
      console.log(this.addMoiveForm.value);
    }
  }
}
