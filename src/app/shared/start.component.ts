import { Component, OnChanges, Input, Output, EventEmitter } from '../../../node_modules/@angular/core';


@Component({
    selector : 'pm-start',
    templateUrl : './star.component.html',
    styleUrls : ['./star.component.css']
})
export class StartComponent implements OnChanges {
@Input()
rating: number ;
starWidth: number;
@Output()
notify: EventEmitter<string> = new EventEmitter<string>();

ngOnChanges(): void {
   this.starWidth =  this.rating * 75 / 5;
}

// tslint:disable-next-line:eofline

onClick(): void{
    this.notify.emit(`le rating est ${this.rating}`);
}
}