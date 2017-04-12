import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from "@angular/router";
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import {EventThumbnailComponent} from "./events/event-thumbnail.component";
import {EventService} from "./shared/event.service";
import {ToastrService} from "./common/toastr.service";
import {EventDetailsComponent} from "./events/event-detail/event-detail.component";
import {appRoutes} from "./route";
import {CreateEventComponent} from "./create-event.component";
import {Error404Component} from "./errors/404.component";
import {EventRouteActivator} from "./events/event-route-activator.service";
import {EventListResolver} from "./event-list-resolver.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventService,
        ToastrService,
        EventRouteActivator,
        EventListResolver,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
    ],
    bootstrap: [EventsAppComponent]
})

export class AppModule {}

function checkDirtyState(component:CreateEventComponent) {
    if(component.isDirty) {
        return window.confirm('You have not saved the event,' +
            'do you really want to cancel?')
    }
    return true;
}