import { GalleryService } from './../../services/gallery.service';
import { ChangeDetectorRef, Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent implements OnInit, OnDestroy {
  public form: FormGroup;
  public error: string;
  public message: string;
  imageSubj: Subscription;
  constructor(
    public _router: Router,
    private _changeDetectorRef: ChangeDetectorRef,
    private _galleryService: GalleryService
  ) {
    this.error = '';
    this.message = '';
  }
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });
  }
  onSubmit() {
    this.imageSubj = this._galleryService.requestAddImage$(this.form.value)
      .subscribe(
        data => {
          if (!data) {
            this.error = 'alert-danger';
            this.message = 'Image not uploaded..'
          } else {
            // this._router.navigate(['/gallery']);
          }
        }, error => {
          this.error = 'alert-warning';
          this.message = 'Error: Image not uploaded..'
          console.log(error);
        }
      );
  }
  onImageChange(event) {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.form.patchValue({
          image: reader.result
        });
        this._changeDetectorRef.markForCheck();
      };
    }
  }
  ngOnDestroy() {
    this.imageSubj ? this.imageSubj.unsubscribe() : '';
  }
}
