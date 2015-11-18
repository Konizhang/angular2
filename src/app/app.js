var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var hero_form_component_1 = require('./hero-form.component');
var router_1 = require('angular2/router');
var home_component_1 = require('./home.component');
var customer_component_1 = require('./customer.component');
var Hero = (function () {
    function Hero() {
    }
    return Hero;
})();
var Weathermap = (function () {
    function Weathermap() {
    }
    return Weathermap;
})();
var AppComponent = (function () {
    function AppComponent(http, router, location) {
        var _this = this;
        this.title = 'Tour of Heroes';
        this.heroes = HEROES;
        this.router = router;
        this.location = location;
        http.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=2de143494c0b295cca9337e1e96b00e0').map(function (res) { return res.json(); }).subscribe(function (res) {
            _this.weathermap = res;
            console.log(_this.weathermap);
            _this.title2 = 'hellomotor';
        });
    }
    AppComponent.prototype.getLinkStyle = function (path) {
        return this.location.path() === path;
    };
    AppComponent.prototype.onSelect = function (hero) { this.selectedHero = hero; };
    AppComponent = __decorate([
        angular2_1.Component({
            selector: 'my-app',
            viewProviders: [http_1.HTTP_PROVIDERS],
            templateUrl: 'temp.html',
            directives: [angular2_1.FORM_DIRECTIVES, angular2_1.CORE_DIRECTIVES, hero_form_component_1.HeroFormComponent, home_component_1.HomeComponent, router_1.RouterLink, router_1.RouterOutlet, customer_component_1.CustomerComponent]
        }),
        router_1.RouteConfig([
            new router_1.Route({ path: '/home', component: home_component_1.HomeComponent, as: 'Home' }),
            new router_1.Route({ path: '/customer', component: customer_component_1.CustomerComponent, as: 'Customer' })
        ]), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router, router_1.Location])
    ], AppComponent);
    return AppComponent;
})();
var HEROES = [
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
angular2_1.bootstrap(AppComponent, [router_1.ROUTER_PROVIDERS, angular2_1.provide(router_1.LocationStrategy, { useClass: router_1.HashLocationStrategy })]);
//# sourceMappingURL=app.js.map