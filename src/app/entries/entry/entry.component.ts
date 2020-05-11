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
}