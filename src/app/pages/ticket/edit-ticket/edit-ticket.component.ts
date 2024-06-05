import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss'],
})
export class EditTicketComponent implements OnInit {
  editTicketForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.editTicketForm = this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      screenId: ['', Validators.required],
      seatId: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.editTicketForm.valid) {
      console.log(this.editTicketForm.value);
      // Xử lý logic khi form hợp lệ
    } else {
      // Xử lý logic khi form không hợp lệ
      console.log('Form không hợp lệ');
    }
  }
}
