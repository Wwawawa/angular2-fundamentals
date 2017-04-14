import {Component} from "@angular/core";
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent{}