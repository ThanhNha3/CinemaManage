import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'app/@core/services/apis/user.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.scss'],
})
export class EmployeeAddComponent {
  userAdd: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.userAdd = new FormGroup({
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
      ]),
    });
  }

  onSubmit() {
    if (this.userAdd.valid) {
      console.log(this.userAdd.value);
      this.createUser();
    }
  }

  // protected handleError(error) {
  //   console.log(error);
  // }

  createUser() {
    const formData = this.userAdd.value;
    this.userService.create(formData).subscribe({
      next: (res) => {
        this.toastr.success('Thêm mới thành công', 'Thông báo');
        this.userAdd.reset();
        this.router.navigate(['/pages/employee']);
      },
      // error: (error) => {
      //   console.error('Error:', error);
      //   this.handleError(error);
      // },
    });
  }
}
