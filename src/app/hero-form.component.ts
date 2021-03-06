import {Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import { Hero } from './hero';
@Component({
  selector: 'hero-form',
  templateUrl: 'app/hero-form.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible',
            'Super Hot', 'Weather Changer'];
  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() { this.submitted = true; }
}