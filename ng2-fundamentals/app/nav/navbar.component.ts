import {Component} from "@angular/core";
import {AuthService} from "../user/auth.service";
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";
@Component({
    selector: 'nav-bar',
    templateUrl: 'app/nav/navbar.component.html',
    styles: [`
        li > a.active { color: #F97924; }
    `]
})
export class NavBarComponent{
    searchTerm: string = ""
    foundSessions: ISession[]

    constructor(private auth:AuthService,
                private eventService: EventService)
    {}

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(sessions => {
            this.foundSessions = sessions
            console.log(this.foundSessions)
        })
    }

}