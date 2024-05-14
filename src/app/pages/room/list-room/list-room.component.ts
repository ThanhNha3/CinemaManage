import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-list-room',
  templateUrl: './list-room.component.html',
  styleUrls: ['./list-room.component.scss'],
})
export class ListRoomComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
