import { Injectable, OnInit } from '@angular/core';
import { Response } from '@angular/http';

import { IContact } from "./contact.model";
import { contacts } from "./contact.data";


import { DataService } from "./data.service";

export class DeltaContact {

    constructor(public index: number, public deltaContact: IContact, public deltaReport: string) { }
}


@Injectable()
export class SidebarService {
    deltaContacts: DeltaContact[] = [new DeltaContact(0, null, "none")];

    contacts: IContact[] = JSON.parse(localStorage.getItem("ContactsBook.contacts")); //ВЫнести в отдельный сервис, чтобы были отдельные методы для получения записи и проверки. СДелать подобие БД в сервисе с localstorage.
    checkCount: number = 0;
    matchedCount: number = this.contacts.length;
    isAllChecked: boolean = false;
    searchText: string = "";

    localLanguage: string = "ENG";

    constructor(private dataService: DataService) {
    }


    getContacts(): IContact[] {
        //  dataService.getContacts().subscribe(
        //     contacts=> {this.contacts=contacts;console.log(contacts); console.log(this.contacts); },
        //     error => {console.log(error); }
        // );
        //localStorage.setItem("ContactsBook.contacts",JSON.stringify(this.contacts));


        this.contactsSort();
        return this.contacts;
    }


    getLocalLanguage(): string {
        return this.localLanguage;
    }


    search(searchText: string): void {
        this.searchText = searchText;
        this.checkCount = 0;
        this.isAllChecked = false;
        this.contacts.forEach(contact => {
            contact.choosen = false;
            this.isContactMatched(contact);
        });
    }

    isContactMatched(contact: IContact): void {
        if (this.searchText === '' || this.searchText === undefined || this.searchText === null) {
            if (!contact.matched) this.matchedCount++;
            contact.matched = true;
            return;
        }
        if (
            (contact.firstName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) ||
            (contact.lastName.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1) ||
            (contact.phone.toLowerCase().indexOf(this.searchText.toLowerCase()) !== -1)
        ) {
            if (!contact.matched) this.matchedCount++;
            contact.matched = true;
            return;
        }

        if (contact.matched) this.matchedCount--;
        contact.matched = false;
        return;
    }


    checkContact(contact: IContact): void {
        contact.choosen = !contact.choosen;
        contact.choosen ? this.checkCount++ : this.checkCount--;
        if (this.checkCount === this.contacts.length || this.checkCount === this.matchedCount) {
            this.isAllChecked = true;
        } else {
            this.isAllChecked = false;
        }
    }

    checkAllContacts(): boolean {
        if (this.checkCount === this.contacts.length || this.checkCount === this.matchedCount) {
            this.contacts.forEach(element => { element.choosen = !element.choosen; });
            this.checkCount = 0;
            this.isAllChecked = false;
            return false;
        }
        else {
            this.contacts.forEach(element => { element.matched ? element.choosen = true : element.choosen = false });
            this.checkCount = this.matchedCount;
            this.isAllChecked = true;
            return true;
        }
    }

    mailContact(contact: IContact): void { }

    mailMatchedContacts(): void { }

    phoneContact(contact: IContact): void { }

    phoneMatchedContacts(): void { }

    deleteContact(contact: IContact): void {
        if (confirm("Do you want to delete " + contact.firstName + " " + contact.lastName + "?")) {
            for (let i = 0; i < this.contacts.length; i++) {
                if (this.contacts[i].id === contact.id) {
                    this.deltaContactPush(this.contacts[i], "delete");
                    if (contact.choosen) {
                        this.checkCount--;
                    }
                    this.matchedCount--;
                    this.contacts.splice(i, 1);
                    if (this.checkCount === 0) this.isAllChecked = false;
                    console.log(this.checkCount + "  " + this.matchedCount);
                    break;
                }
            }
        }
    }

    deleteMatchedContacts(): void {
        if (confirm("Do you want to delete ALL CHECKED CONTACTS ?")) {
            while (this.checkCount !== 0) {
                for (let i = 0; i < this.contacts.length; i++) {
                    if (this.contacts[i].choosen) {
                        this.deltaContactPush(this.contacts[i], "delete");
                        this.contacts.splice(i, 1);
                        this.checkCount--;
                        this.matchedCount--;
                        if (this.checkCount === 0) this.isAllChecked = false;
                    }
                }
            }
        }
    }


    groupMatchedContacts() {

    }


    undoChangedContact(): void {
        this.search("");


        if (this.deltaContacts.length > 0) {
            let deltaContact = this.deltaContacts[this.deltaContacts.length - 1];
            if (deltaContact.deltaReport === "delete") {
                deltaContact.deltaContact.choosen = false;
                this.contacts.push(deltaContact.deltaContact);
                this.deltaContacts.splice(this.deltaContacts.length - 1, 1);

                this.matchedCount = this.contacts.length;
            }
        }
        this.contactsSort();
    }

    deltaContactPush(deltaContact: IContact, deltaReport: string): void {
        this.deltaContacts.push(new DeltaContact(1, deltaContact, deltaReport));
    }


    contactsSort(): void {
        this.contacts.sort((a: IContact, b: IContact) => {
            if (a.lastName === b.lastName) {
                if (a.firstName > b.firstName) return 1;
                if (a.firstName < b.firstName) return -1;
            }
            if (a.lastName > b.lastName) return 1;
            if (a.lastName < b.lastName) return -1;
        });
    }

}