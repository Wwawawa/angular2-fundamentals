import {Component, Input} from "@angular/core";
import {ISession} from "../shared/event.model";
@Component({
    selector: 'session-list',
    templateUrl: 'app/events/event-detail/session-list.component.html'
})
export class SessionList {
    @Input() sessions:ISession[]
}