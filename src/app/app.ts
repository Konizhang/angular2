import {bootstrap, Component, FORM_DIRECTIVES, CORE_DIRECTIVES, provide,View } from 'angular2/angular2';
import {Http, HTTP_PROVIDERS} from 'angular2/http';
import {HeroFormComponent} from './hero-form.component'
import {ROUTER_DIRECTIVES, RouteConfig, Router, Location, Route,ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy,RouterLink,RouterOutlet } from 'angular2/router';
import {HomeComponent} from './home.component'
import {CustomerComponent} from './customer.component'



class Hero {
  id: number;
  name: string;
}

class Weathermap {
    id: number;
	nase:string;
	dt:number;
	name:string;
}

@Component({
  selector: 'my-app',
   viewProviders: [HTTP_PROVIDERS],
  templateUrl:'temp.html',
  directives: [FORM_DIRECTIVES, CORE_DIRECTIVES ,HeroFormComponent,HomeComponent,RouterLink,RouterOutlet,CustomerComponent]
})




@RouteConfig([
  
  new Route({ path: '/home', component: HomeComponent, as: 'Home' }),

  new Route({ path: '/customer', component: CustomerComponent, as: 'Customer' })
])


class AppComponent {
    
    public title = 'Tour of Heroes';


    

public weathermap: Weathermap  ;

public title2 ; 
  

public heroes = HEROES;

public selectedHero : Hero;

router: Router;
    location: Location;

constructor(http: Http,router: Router, location: Location) {
  this.router = router;
        this.location = location;
   
    	http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=2de143494c0b295cca9337e1e96b00e0').map((res) => res.json()).subscribe(res => { 
         	this.weathermap = res;
         	console.log(this.weathermap);
         	this.title2 = 'hellomotor';
         });
 }
	
   
 getLinkStyle(path) {
        return this.location.path() === path;
    }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}

var HEROES: Hero[] = [
  { "id": 11, "name": "Mr. Nice" },
  { "id": 12, "name": "Narco" },
  { "id": 13, "name": "Bombasto" },
  { "id": 14, "name": "Celeritas" },
  { "id": 15, "name": "Magneta" },
  { "id": 16, "name": "RubberMan" },
  { "id": 17, "name": "Dynama" },
  { "id": 18, "name": "Dr IQ" },
  { "id": 19, "name": "Magma" },
  { "id": 20, "name": "Tornado" }
];

bootstrap(AppComponent,[ROUTER_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);

