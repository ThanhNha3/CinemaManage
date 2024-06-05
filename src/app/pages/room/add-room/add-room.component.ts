import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  addRoomForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addRoomForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      roomStatus: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addRoomForm.valid) {
      console.log(this.addRoomForm.value);
      // Xử lý logic khi form hợp lệ
    } else {
      // Xử lý logic khi form không hợp lệ
      console.log('Form không hợp lệ');
    }
  }
}
