import {Component, EventEmitter, Input, Output} from '@angular/core'


@Component({
    selector: 'event-thumbnail',
    template: `
        
        <div class="well hoverwell thumbnail">
            <h2><p>{{event.name}}</p></h2>    
            <div>Date: {{event?.date }} </div>
            <div [ngClass]="getStartTimeClass()" [ngSwitch]="event?.time">
                Time: {{event?.time}}
                <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
                <span *ngSwitchCase="'10:00 am'" >(Late Start)</span>
                <span *ngSwitchDefault>(Normal Start)</span>
            </div>
            <div>Price: \${{event?.price}} </div>
            <div *ngIf="event?.location">
                <span>
                    Location: {{event?.price}}
                </span>
                <span class="pad-left">{{event?.location?.city}},
                    {{event?.location?.country}}
                </span>
            </div>
            <div *ngIf="event?.onlineUrl">
                Online Url: {{event?.onlineUrl}}
            </div>
        
        
        </div>
        
        
        
        
        
        
        <button class="btn btn-primary" (click)='handleClickMe()'>Click Me</button>
    `
})
export class EventThumbnailComponent {4
    @Input() event:any
    @Output() eventClick = new EventEmitter()

    handleClickMe() {
        this.eventClick.emit('foo')
    }

    logFoo(){
        console.log('foo2')
    }

    getStartTimeClass(){
        const isEarlyStart = this.event && this.event.time === '8:00 am'
        return console.log('hello green')
    }
}