import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MovieService } from 'app/@core/services/apis/movie.service';
import { RoomService } from 'app/@core/services/apis/room.service';
import { ShowtimeService } from 'app/@core/services/apis/showtime.service';
import { forkJoin } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-screening-add',
  templateUrl: './screening-add.component.html',
  styleUrls: ['./screening-add.component.scss'],
})
export class ScreeningAddComponent implements OnInit {
  @Output() deleteRequested: EventEmitter<void> = new EventEmitter<void>();
  roomList: any[] = [];
  movieList: any[] = [];
  screeningAdd: FormGroup;

  constructor(
    private showtimeService: ShowtimeService,
    private movieService: MovieService,
    private roomService: RoomService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.screeningAdd = new FormGroup({
      movieId: new FormControl('', [Validators.required]),
      roomId: new FormControl('', [Validators.required]),
      startTime: new FormControl('', [Validators.required]),
      endTime: new FormControl('', [Validators.required]),
    });

    this.loadData();
  }

  onSubmit() {
    if (this.screeningAdd.valid) {
      console.log(this.screeningAdd.value);
      this.createShowtime();
    } else {
      this.screeningAdd.markAllAsTouched();
    }
  }

  onDeleteRequested() {
    this.deleteRequested.emit();
  }

  protected handleError(error) {
    console.log(error);
  }

  protected loadData(): void {
    forkJoin([this.movieService.getAll(), this.roomService.getAll()]).subscribe(
      ([movies, rooms]) => {
        this.movieList = movies.data;
        this.roomList = rooms.data;
        console.log(this.movieList, this.roomList);
      }
      // (error) => {
      //   console.error('Error:', error);
      // }
    );
  }

  createShowtime() {
    const formData = this.screeningAdd.value;
    this.showtimeService.create(formData).subscribe({
      next: (res) => {
        this.toastr.success('Thêm mới suất chiếu thành công!');
        this.screeningAdd.reset();
        this.router.navigate(['/pages/screening']);
      },
      error: (error) => {
        // console.error('Error:', error);
        // this.handleError(error);
        this.toastr.error('Có lỗi xảy ra, vui lòng thử lại.');
      },
    });
  }
}
