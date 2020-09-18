import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-picture',
  templateUrl: './add-picture.component.html',
  styleUrls: ['./add-picture.component.scss']
})
export class AddPictureComponent implements OnInit {
  public form: FormGroup;
  constructor(private _changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      image: new FormControl('', [Validators.required])
    });

  }
  onSubmit() {

  }
  onFileChange(event) {
    const reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.form.patchValue({
          file: reader.result
        });

        // need to run CD since file load runs outside of zone
        this._changeDetectorRef.markForCheck();
      };
    }
  }
}
