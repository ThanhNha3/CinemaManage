import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ShowtimeService } from 'app/@core/services/apis/showtime.service';
import { TicketService } from 'app/@core/services/apis/ticket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.scss'],
})
export class AddTicketComponent implements OnInit {
  addTicketForm!: FormGroup;
  showtimes: any[] = [];
  seats: String[] = [
    'A1',
    'A2',
    'A3',
    'A4',
    'A5',
    'A6',
    'A7',
    'A8',
    'A9',
    'B1',
    'B2',
    'B3',
    'B4',
    'B5',
    'B6',
    'B7',
    'B8',
    'B9',
    'C1',
    'C2',
    'C3',
    'C4',
    'C5',
    'C6',
    'C7',
    'C8',
    'C9',
  ];

  constructor(
    private fb: FormBuilder,
    private showtimeService: ShowtimeService,
    private ticketService: TicketService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.addTicketForm = this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      showtimeId: ['', Validators.required],
      seatNumber: ['', Validators.required],
    });
    this.getAllShowtime();
  }

  getAllShowtime(): void {
    this.showtimeService.getAll().subscribe((res) => {
      this.showtimes = res.data;
    });
  }

  onSubmit(): void {
    if (this.addTicketForm.valid) {
      const data = {
        ...this.addTicketForm.value,
        price: Number(this.addTicketForm.value.price),
      };
      this.ticketService.create(data).subscribe((res) => {
        this.toastr.success('Thêm mới thành công', 'Thông báo');
        this.router.navigate(['/pages/ticket']);
      });
    }
  }
}
