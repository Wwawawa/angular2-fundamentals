import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from './events/event-detail/event-detail.component';
import { CreateEventComponent } from './create-event.component';
import { Error404Component } from './errors/404.component';
import { EventListResolver } from './event-list-resolver.component';
import {Routes} from "@angular/router";
import {EventRouteActivator} from "./events/event-route-activator.service";


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
      canActivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent,
        resolve:{events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouteActivator]  },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' }

]