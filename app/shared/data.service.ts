import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Response } from '@angular/http'


import { Contact } from "./contact.model";
import { contacts } from "./contact.data";

@Injectable()
export class DataService {



  constructor(private http: Http) { }

getContactsFromLocalStorage() {

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
function supports_html5_storage() {
  try {
    return 'localStorage' in window && window['localStorage'] !== null;
  } catch (e) {
    return false;
  }
}