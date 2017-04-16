import {
    EventsListComponent,
    EventDetailsComponent,
    EventRouteActivator,
    EventListResolver,
    CreateEventComponent,
    CreateSessionsComponent
} from './events/index'

import { Error404Component } from './errors/404.component';
import {Routes} from "@angular/router";


export const appRoutes:Routes = [
    { path: 'events/new', component: CreateEventComponent,
      canActivate: ['canDeactivateCreateEvent'] },
    { path: 'events', component: EventsListComponent,
        resolve:{events:EventListResolver} },
    { path: 'events/:id', component: EventDetailsComponent,
      canActivate: [EventRouteActivator]  },
    { path: 'events/session/new', component: CreateSessionsComponent},
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/events', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule'}

]