import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

@Component({
 
  templateUrl: 'app/customer.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class CustomerComponent {
  public title="customer view";

}