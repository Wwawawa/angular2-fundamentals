import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
    EventsListComponent,
    EventThumbnailComponent,
    EventService,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventListResolver,
    CreateSessionsComponent
} from './events/index'

import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from "@angular/router";
import { EventsAppComponent } from './events/events-app.component';
import {TOASTR_TOKEN, Toastr, JQ_TOKEN, ModalTriggerDirective, CollapsibleWellComponent, SimpleModalComponent
        } from "./common/index";
import {appRoutes} from "./route";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {SessionList} from "./events/event-detail/session-list.component";
import {DurationPipe} from "./events/shared/duration.pipe";

declare let toastr : Toastr
declare let jQuery : Object

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        EventDetailsComponent,
        NavBarComponent,
        CreateEventComponent,
        CreateSessionsComponent,
        Error404Component,
        SessionList,
        CollapsibleWellComponent,
        SimpleModalComponent,
        ModalTriggerDirective,
        DurationPipe
    ],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr },
        {provide: JQ_TOKEN, useValue: jQuery },
        EventRouteActivator,
        EventListResolver,
        AuthService,
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