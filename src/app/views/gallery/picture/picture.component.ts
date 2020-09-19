
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Picture } from '../../../shared/models/picture'

@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.scss']
})
export class PictureComponent implements OnInit {
  @Input() data: Picture;
  @Output() deleteId = new EventEmitter<string>();
  constructor() { }
  ngOnInit(): void {
  }
  onDelete(id: string) {
    this.deleteId.emit(id);
  }
}
