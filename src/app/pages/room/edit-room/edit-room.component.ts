import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from 'app/@core/services/apis/room.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-room',
  templateUrl: './edit-room.component.html',
  styleUrls: ['./edit-room.component.scss'],
})
export class EditRoomComponent implements OnInit {
  editRoomForm!: FormGroup;
  id: number;

  constructor(
    private fb: FormBuilder,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.editRoomForm = this.fb.group({
      name: ['', [Validators.required]],
      type: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      status: ['', Validators.required],
    });
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getRoomById(this.id);
  }

  onSubmit(): void {
    if (this.editRoomForm.valid) {
      const data = {
        ...this.editRoomForm.value,
        capacity: Number(this.editRoomForm.value.capacity),
        status: Number(this.editRoomForm.value.status),
      };
      this.roomService.update(this.id, data).subscribe((res) => {
        this.toastr.success('Cập nhật thành công', 'Thông báo');
        this.router.navigate(['/pages/room']);
      });
    }
  }

  getRoomById(id: number): void {
    this.roomService.getById(id).subscribe((res) => {
      const data = {
        ...res,
        status: String(res.status),
      };
      this.editRoomForm.patchValue(data);
    });
  }
}
