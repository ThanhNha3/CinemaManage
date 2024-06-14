import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FirebaseService } from 'app/@core/services/common/firebase.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
})
export class ImageUploadComponent {
  @Input() control!: FormControl;
  @Input() imageUrl: string | undefined;
  @Output() imageChanged = new EventEmitter<string>();
  uploadProgress: number | undefined;

  constructor(private firebaseService: FirebaseService) {}

  onFileSelected(event: any): void {
    const file: File = event.target.files[0];
    if (file) {
      const uploadTask = this.firebaseService.pushFileToStorage(file);
      uploadTask.progress.subscribe((progress) => {
        this.uploadProgress = progress;
      });
      uploadTask.downloadURL
        .pipe(
          finalize(() => {
            this.uploadProgress = undefined;
          })
        )
        .subscribe(
          (url) => {
            if (url) {
              this.imageUrl = url;
              this.control.setValue(url);
              this.imageChanged.emit(url);
            }
          },
          (error) => {
            console.error(error);
          }
        );
    }
  }

  deleteImage(): void {
    if (this.imageUrl) {
      this.firebaseService.deleteFile(this.imageUrl).subscribe(
        () => {
          this.imageUrl = undefined;
          this.control.setValue(null);
          this.imageChanged.emit('');
        },
        (error) => {
          console.error('Error deleting file', error);
        }
      );
    }
  }

  getUploadProgress(): number {
    return this.uploadProgress || 0;
  }
}
