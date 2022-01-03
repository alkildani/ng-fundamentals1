import { style } from "@angular/animations";
import { Component , Input, Output , OutputDecorator , EventEmitter} from "@angular/core";

@Component({
    selector: 'event-thumbnail',
    template: `
        <div [routerLink]="['/events',event.id]" class= "well hoverwell thumbnail">
            <h2> {{event?.name + event?.date}}</h2>
            <div> date: {{event?.date}} </div>
            <div [ngClass]="getStartedTimeClass()" [ngSwitch]="event?.time" >
                time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div> date: \${{event?.price}} </div>
            <div [hidden]="!event.location">  
               <span> Location: {{event?.location?.address}} </span>
               <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}} </span>
            </div>
            <div *ngIf="event?.onlineUrl">
                online url: {{event?.onlineUrl}}
            </div>
        </div>
    `,
    styles:[`

        .green {
            color: #003300 !important;
        }
        .bold {
            font-weight: bold;
        }
        .yellow {
            color: yellow !important;
        }
        .red {
            color: red !important;
        }
        .thumbnail {
            min-height:230px;  
        }
        .pad-left {
            margin-left:10px;
            }
        .well div {
            color: #bbb;
            }
        
        `
    ]
})

export class EventThumbnailComponent {
    @Input() event:any 
    // Input: tells angulat that this event will be passed in from another component
    // we put it when we want to get values from another class or file

    getStartedTimeClass(){
        if (this.event && this.event.time === '8:00 am')
            return ['green', 'bold']
        else if (this.event && this.event.time === '10:00 am')
            return ['red', 'bold']
        return['yellow', 'bold']
    }
}