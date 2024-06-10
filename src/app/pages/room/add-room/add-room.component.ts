import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomService } from 'app/@core/services/apis/room.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.scss'],
})
export class AddRoomComponent implements OnInit {
  addRoomForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addRoomForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      status: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addRoomForm.valid) {
      const data = {
        ...this.addRoomForm.value,
        capacity: Number(this.addRoomForm.value.capacity),
        status: Number(this.addRoomForm.value.status),
      };
      this.roomService.create(data).subscribe((res) => {
        this.toastr.success('Thêm mới thành công', 'Thông báo');
        this.router.navigate(['/pages/room']);
      });
    }
  }
}
