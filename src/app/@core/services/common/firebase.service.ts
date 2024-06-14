import { Injectable } from '@angular/core';
import {
  Storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  deleteObject,
} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private basePath = '/movie';

  constructor(private storage: Storage) {}

  pushFileToStorage(fileUpload: any): {
    progress: Observable<number>;
    downloadURL: Observable<string>;
  } {
    const filePath = `${this.basePath}/${fileUpload.name}`;
    const storageRef = ref(this.storage, filePath);
    const uploadTask = uploadBytesResumable(storageRef, fileUpload);

    const progress = new Observable<number>((observer) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          observer.next(percentage);
        },
        (error) => observer.error(error),
        () => observer.complete()
      );
    });

    const downloadURL = new Observable<string>((observer) => {
      uploadTask.on('state_changed', null, null, () => {
        getDownloadURL(uploadTask.snapshot.ref)
          .then((url) => {
            observer.next(url);
            observer.complete();
          })
          .catch((error) => observer.error(error));
      });
    });

    return { progress, downloadURL };
  }

  deleteFile(fileUrl: string): Observable<void> {
    const storageRef = ref(this.storage, fileUrl);
    return from(deleteObject(storageRef));
  }
}
