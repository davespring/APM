import { Component, OnChanges, Input, Output, EventEmitter, OnInit } from 'angular2/core';

@Component({
    selector: 'ai-star',
    templateUrl: 'app/shared/star.component.html',
    styleUrls: ['app/shared/star.component.css']
})

export class StarComponent implements OnChanges, OnInit {
    @Input() rating: number;
    starWidth: number;
    
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    onClick(): void{
        this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
    }
    
    ngOnChanges(): void {
        this.starWidth = this.rating * 200 / 5;
    }
    
    ngOnInit(): void {
        console.log("Star Component Initialized");
    }
}