import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { RoomService } from 'app/@core/services/apis/room.service';
import { ShowtimeService } from 'app/@core/services/apis/showtime.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-screening-edit',
  templateUrl: './screening-edit.component.html',
  styleUrls: ['./screening-edit.component.scss'],
})
export class ScreeningEditComponent implements OnInit {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  roomList: any[] = [];
  movieList: any[] = [];
  screeningEdit: FormGroup;
  dataShowtime: any = {};

  constructor(
    private showtimeService: ShowtimeService,
    private movieService: MovieService,
    private roomService: RoomService,
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.screeningEdit = new FormGroup({
      movieId: new FormControl('', [Validators.required]),
      roomId: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
    });

    const id = this.route.snapshot.params['id'];
    this.showtimeService.getById(id).subscribe((res) => {
      this.dataShowtime = res;
      this.patchFormValues(this.dataShowtime);
    });

    this.loadData();
  }

  onSubmit(): void {
    if (this.screeningEdit.valid) {
      const formData = this.screeningEdit.value;
      this.showtimeService.edit(this.dataShowtime.id, formData).subscribe({
        next: (res) => {
          this.toastr.success('Cập nhật thành công', 'Thông báo');
          this.router.navigate(['/pages/screening']);
        },
        error: (error) => {
          console.error('Error updating showtime:', error);
        },
      });
    }
  }

  onReset(): void {
    this.patchFormValues(this.dataShowtime);
  }

  onDeleteRequested(): void {
    this.deleteRequested.emit();
  }

  private patchFormValues(showtimeData: any): void {
    if (showtimeData) {
      this.screeningEdit.patchValue({
        movieId: showtimeData.movieId,
        roomId: showtimeData.roomId,
        startTime: new Date(showtimeData.startTime),
        endTime: new Date(showtimeData.endTime),
      });
    }
  }

  private loadData(): void {
    forkJoin([this.movieService.getAll(), this.roomService.getAll()]).subscribe(
      ([movies, rooms]) => {
        this.movieList = movies.data;
        this.roomList = rooms.data;
      },
      (error) => {
        console.error('Error loading data:', error);
      }
    );
  }
}
