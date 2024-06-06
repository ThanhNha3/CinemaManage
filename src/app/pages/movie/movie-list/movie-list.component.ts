import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();

  onDeleteRequested() {
    this.deleteRequested.emit();
  }
}
