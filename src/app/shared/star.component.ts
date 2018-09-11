import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input() rating = 0;
  starWidth = 0;
 
  @Output() notify :EventEmitter<String> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }
  
  OnClick() :void{
    console.log("je viens d'emmetre mon evenement");
    this.notify.emit(`the rating + ${this.rating} + was clicked`);
    
  }
}