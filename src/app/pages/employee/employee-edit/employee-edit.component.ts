import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'app/@core/services/apis/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.scss'],
})
export class EmployeeEditComponent implements OnInit {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  userEdit: FormGroup;
  userData: any = {};

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userEdit = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
    });

    const id = this.route.snapshot.params['id'];
    this.userService.getById(id).subscribe((res) => {
      this.userData = res;
      this.patchFormValues(this.userData);
    });
  }

  onSubmit(): void {
    if (this.userEdit.valid) {
      const formData = {
        ...this.userEdit.value,
        password: this.userData.password,
      };

      this.userService.edit(this.userData.id, formData).subscribe({
        next: (res) => {
          console.log('Thành công', res);
          this.toastr.success('Chỉnh sửa thành công!');
          this.router.navigate(['/pages/employee']);
        },
        error: (error) => {
          console.error('Error', error);
          this.toastr.error('Có lỗi xảy ra, vui lòng thử lại.');
        },
      });
    } else {
      this.userEdit.markAllAsTouched();
    }
  }

  private patchFormValues(userData: any): void {
    if (userData) {
      console.log(userData);
      this.userEdit.patchValue({
        username: userData.username,
        email: userData.email,
      });
    }
  }
}
