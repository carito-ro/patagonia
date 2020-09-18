import { PersonService } from './../services/person.service';
import { Person } from './../models/person';
import { HardcodeService } from './../services/hardcode.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit, OnDestroy {
  personSubj: Subscription;
  public person: Person;
  public error: boolean;
  constructor(
    private _hardcodeService: HardcodeService,
    private _personService: PersonService
  ) {
    this.error = false;
    this.person = this._hardcodeService.person;
  }

  ngOnInit(): void {
    // this.getPerson();
  }
  /**
   *  Recupera los datos de la personal, parte del supuesto que está logiado
   *
   * @memberof PersonalComponent
   */
  getPerson() {
    this.personSubj = this._personService.requestPersonData$('_id=1')
      .subscribe(
        data => {
          this.person = data;
        }, error => {
          this.error = true;
          console.log(error);
        }
      );
  }
  ngOnDestroy() {
    this.personSubj ? this.personSubj.unsubscribe() : '';
  }
}
