import { Component, OnInit } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import {
  API_BASE_URL,
  API_ENDPOINT,
} from 'app/@core/config/api-endpoint.config';
import { TicketService } from 'app/@core/services/apis/ticket.service';
import { UtilsService } from 'app/@core/utils/currency.util';
import { DialogConfirmComponent } from 'app/@theme/components/dialog-confirm/dialog-confirm.component';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  tickets: any[] = [];
  apiUrl: string = API_BASE_URL + API_ENDPOINT.ticket;
  currentPage: number = 0;
  totalPage: number = 0;

  constructor(
    private dialogService: NbDialogService,
    private ticketService: TicketService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketService.getAll().subscribe((res) => {
      this.tickets = res.data.map((ticket) => ({
        ...ticket,
        price: UtilsService.formatCurrency(ticket.price),
      }));
      this.currentPage = res.currentPage;
      this.totalPage = res.totalPages;
    });
  }

  updateData(res: any): void {
    this.tickets = res.data;
    this.currentPage = res.currentPage;
    this.totalPage = res.totalPages;
  }

  openDeleteConfirmation(id: string) {
    this.dialogService
      .open(DialogConfirmComponent, {
        context: {
          title: 'Xác nhận xóa',
          content: 'Bạn có chắc chắn muốn xóa?',
        },
        autoFocus: false,
      })
      .onClose.subscribe((result) => {
        if (result) {
          this.ticketService.remove(id).subscribe(() => {
            this.toastr.success('Xóa thành công', 'Thông báo');
            this.getAllTickets();
          });
        }
      });
  }
}
