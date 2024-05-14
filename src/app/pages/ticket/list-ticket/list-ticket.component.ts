import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-ticket',
  templateUrl: './list-ticket.component.html',
  styleUrls: ['./list-ticket.component.scss'],
})
export class ListTicketComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
