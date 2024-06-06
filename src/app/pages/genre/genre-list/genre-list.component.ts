import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.scss'],
})
export class GenreListComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
