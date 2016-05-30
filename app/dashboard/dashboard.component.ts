import { Component, OnInit } from 'angular2/core';

@Component({ 
    selector: 'dash-card',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    
    cardTitle: string;
    cardContent: string;
    
    cards: any[] = [
        {
            cardTitle: "Card One Title",
            cardContent: "Card One Content"
        },
        {
            cardTitle: "Card Two Title",
            cardContent: "Card Two Content"
        },
        {
            cardTitle: "Card Three Title",
            cardContent: "Card Three Content"
        },
        {
            cardTitle: "Card Four Title",
            cardContent: "Card Four Content"
        }
    ]
    
    ngOnInit() { }

}