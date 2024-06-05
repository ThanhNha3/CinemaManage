import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
})
export class AddTicketComponent implements OnInit {
  addTicketForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addTicketForm = this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      screenId: ['', Validators.required],
      seatId: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.addTicketForm.valid) {
      console.log(this.addTicketForm.value);
      // Xử lý logic khi form hợp lệ
    } else {
      // Xử lý logic khi form không hợp lệ
      console.log('Form không hợp lệ');
    }
  }
}
