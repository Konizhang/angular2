import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
 
  templateUrl: 'app/home.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HomeComponent {
  public title="home view";

}