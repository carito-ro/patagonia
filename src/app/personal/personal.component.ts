import { Person } from './../models/person';
import { HardcodeService } from './../services/hardcode.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  public person: Person;
  constructor(
    private _hardcodeService: HardcodeService
  ) {
    this.person = this._hardcodeService.person;
  }

  ngOnInit(): void {
  }

}
