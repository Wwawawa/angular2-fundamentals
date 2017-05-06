import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from "@angular/router";
import {HttpModule} from "@angular/http";

import {
    EventsListComponent, EventThumbnailComponent, EventService,
    EventDetailsComponent, CreateEventComponent, EventListResolver,
    CreateSessionsComponent, LocationValidator, EventsAppComponent
    }   from './events/index'
import { UpvoteComponent, VoterService,
         SessionList }
         from "./events/event-detail/index";
import {TOASTR_TOKEN, Toastr,
        JQ_TOKEN, ModalTriggerDirective,
        CollapsibleWellComponent, SimpleModalComponent
        } from "./common/index";

import { NavBarComponent } from './nav/navbar.component';
import {appRoutes} from "./route";
import {Error404Component} from "./errors/404.component";
import {AuthService} from "./user/auth.service";
import {DurationPipe} from "./events/shared/duration.pipe";
import {EventResolver} from "./events/event-detail/event-resolver.service";

declare let toastr : Toastr
declare let jQuery : Object

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
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
        LocationValidator,
        UpvoteComponent,
        DurationPipe
    ],
    providers: [
        EventService,
        {provide: TOASTR_TOKEN, useValue: toastr },
        {provide: JQ_TOKEN, useValue: jQuery },
        EventListResolver,
        EventResolver,
        VoterService,
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