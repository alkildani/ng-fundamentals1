import { Component, OnInit } from "@angular/core";
import { ToastrService } from "../common/toastr.service";
import { EventService } from "./shared/event.serves";


@Component({

    template: `
    <div>
        <h1>angular events</h1>
        <hr>
        <div class="row">
            <div class="col-md-5" *ngFor="let event of events">
                <event-thumbnail (click)="handleThumbnainClick(event.name)" [event]="event"></event-thumbnail>
            </div>
        </div>
    </div>
    `
})
// we will pass the values from event1 in this class to [event] that is located in event-thumbnail.component.ts class
export class EventsListComponent implements OnInit {
    events:any[]
    constructor (private eventService: EventService, private toastr: ToastrService) {
        
    }

    ngOnInit(){
        this.events=this.eventService.getEvents()
    }

    handleThumbnainClick(eventName){
        this.toastr.success(eventName)
        
    }
}