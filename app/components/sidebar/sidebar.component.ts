import { Component, Input, OnInit } from '@angular/core';

import { SidebarService } from '../../shared/sidebar.service';
import { Contact, IContact } from '../../shared/contact.model';

@Component({
    moduleId: module.id,
    selector: 'sidebar',
    templateUrl: 'sidebar.component.html',
    styleUrls: ['../../../styles.css', 'sidebar.component.css']
})
export class SidebarComponent {
    
}