import { PersonService } from '../../shared/services/person.service';
import { Person } from '../../shared/models/person';
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
  public spinner: boolean;
  constructor(
    private _personService: PersonService
  ) {
    this.error = false;
  }

  ngOnInit(): void {
    this.getPerson();
  }
  /**
   * Recupera los datos de la personal, parte del supuesto que está logiado
   * recuperando el usuario pasando un ID
   *
   * @memberof PersonalComponent
   */
  getPerson() {
    this.spinner = true;
    this.personSubj = this._personService.getPerson$("IAILGsSbBSLHUXpOXxTq")
      .subscribe(
        data => {
          this.person = data.payload.data();
          this.spinner = false;
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
