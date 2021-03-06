import { Injectable } from '@angular/core';
import { IContact } from "./contact.model";
import { Http } from '@angular/http'
import { Response } from '@angular/http'



import { Contact } from "./contact.model";

@Injectable()
export class MainService {

  private apiUrl = 'api/contacts';
  contacts: Contact[] = [];

  constructor(private http: Http) { }

  getContacts(): Promise<Contact[]> {
    console.log("first  from main service")
    return this.http.get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(contacts => { console.log(contacts);  
        return this.contacts = contacts;})
      .catch(this.handleError);
      
  }

  // getContacts(){
  //   return contacts;
  // }

  private handleError(error: any) {
    console.error('Произошла ошибка', error);
    return Promise.reject(error.message || error);
  }

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