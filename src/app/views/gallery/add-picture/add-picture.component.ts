import { GalleryService } from '../../../shared/services/gallery.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent implements OnInit {
  public form: FormGroup;
  public error: string;
  public message: string;
  public spinner: boolean;
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
  async onSubmit() {
    this.spinner = true;
    try {
      const response = await this._galleryService.addPicture(this.form.value);
      if (response) {
        this.spinner = false;
        this._router.navigate(['/gallery']);
      }
    } catch (error) {
      this.error = 'alert-warning';
      this.message = 'Error: Image not uploaded..'
      this.spinner = false;
      console.log(error);
    }
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
}
