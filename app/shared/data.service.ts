import { Injectable } from '@angular/core';
// import { Http } from '@angular/http'
// import { Response } from '@angular/http'

// import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';

import { IContact } from "./contact.model";
import { contacts } from "./contact.data";

@Injectable()
export class DataService{

   

    getContacts(){
        
        return contacts;
    }

    // getContacts(): Observable<Contact[]>{
        
    //     return this.http.get('app/shared/contacts.json')
    //     .map((resp: Response) => {

    //         let contactsList = resp.json().contacts;
    //         let contacts: Contact[] = [];
    //         for (let index in contactsList) {
    //             console.log(contactsList[index]);
    //             let contact = contactsList[index];
    //             contacts.push(new Contact(
    //                 contact.id,
    //                 contact.firstName,
    //                 contact.lastName,
    //                 contact.gender,
    //                 contact.phone,
    //                 contact.email))
    //         }
    //     return contacts;
    //     })
    //     .catch((error: any)=> {return Observable.throw(error)});
    // }
}