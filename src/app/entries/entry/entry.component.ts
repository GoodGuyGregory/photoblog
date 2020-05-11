import { Component } from '@angular/core';


@Component({
    selector: 'app-entry',
    templateUrl: 'entry.component.html',
    styleUrls: ['entry.component.css']
})

export class EntryComponent {
    // Adds Properties to the component object
    title: string = 'My first photo'
    photo: string = 'http://placehold.it/800x500?text=AngularBasics';
    description: string = 'A Description of first photo';
    comments: any[] = [
        { name: "John ", comment: "A Comment" },
        { name: "Jacob ", comment: "A Comment" },
        { name: "Jingle ", comment: "A Comment" },
        { name: "Heimenshmit ", comment: "A Comment" },
    ]
}