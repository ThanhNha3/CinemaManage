import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ShowtimeService } from 'app/@core/services/apis/showtime.service';
import { TicketService } from 'app/@core/services/apis/ticket.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-ticket',
  templateUrl: './edit-ticket.component.html',
  styleUrls: ['./edit-ticket.component.scss'],
})
export class EditTicketComponent implements OnInit {
  editTicketForm!: FormGroup;
  id: number;
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
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.editTicketForm = this.fb.group({
      price: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      showtimeId: ['', Validators.required],
      seatNumber: ['', Validators.required],
    });
    this.id = +this.route.snapshot.paramMap.get('id')!;
    this.getAllShowtime();
    this.getTicketById(this.id);
  }

  getAllShowtime(): void {
    this.showtimeService.getAll().subscribe((res) => {
      this.showtimes = res.data;
    });
  }

  getTicketById(id: number): void {
    this.ticketService.getById(id).subscribe((res) => {
      this.editTicketForm.patchValue(res);
    });
  }

  onSubmit(): void {
    if (this.editTicketForm.valid) {
      const data = {
        ...this.editTicketForm.value,
        price: Number(this.editTicketForm.value.price),
      };
      this.ticketService.update(this.id, data).subscribe((res) => {
        this.toastr.success('Cập nhật thành công', 'Thông báo');
        this.router.navigate(['/pages/ticket']);
      });
    }
  }
}
