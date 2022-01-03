import { Routes } from "@angular/router";
import { Error404Component } from "./errors/404.component";
import { EventDetailsComponent } from "./event-details/event-detailes.component";
import { EnventRouteActivator } from "./event-details/event-router-activator.service";
import { CreateEventComponent } from "./events/creat.event.component";
import { EventsListComponent } from "./events/events-list.component";

export const appRoutes:Routes =[
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},   
    {path: 'events', component: EventsListComponent},
    {path: 'events/:id', component: EventDetailsComponent, canActivate: [EnventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch:'full'},
    
]