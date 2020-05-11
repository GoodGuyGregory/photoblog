import { Entry } from './entry.model';
// allows for the injectable decoration to dictate it will be doing 
// dependency injection for app as a provider
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

    constructor(private http: Http) {

    }

    getEntries(): Promise<Entry[]> {
        // grabs the local put requests and retrives them over the Http module
        return this.http.get('/app/entries')
            .toPromise()
            .then(response => response.json().data as Entry[]);
    }
}