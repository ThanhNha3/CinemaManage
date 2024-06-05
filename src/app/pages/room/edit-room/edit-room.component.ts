import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss'],
})
export class EditRoomComponent implements OnInit {
  editRoomForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editRoomForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      roomStatus: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.editRoomForm.valid) {
      console.log(this.editRoomForm.value);
      // Xử lý logic khi form hợp lệ
    } else {
      // Xử lý logic khi form không hợp lệ
      console.log('Form không hợp lệ');
    }
  }
}
