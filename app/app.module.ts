import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelFunctionsComponent } from './components/sidebar/panel-functions/panel-functions.component';
// import { SearchFunctionComponent } from './components/sidebar/search-function/search-function.component';
import { ContactsListComponent } from './components/sidebar/contacts-list/contacts-list.component';
import { ContactItemComponent } from './components/sidebar/contact-item/contact-item.component';

import { DataService } from './shared/data.service';
import { SidebarService } from './shared/sidebar.service';
import { DisplayDirective} from './shared/display.directive';


import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule],
  declarations: [
    AppComponent,
    DisplayDirective,
    SidebarComponent,
    PanelFunctionsComponent,
   // SearchFunctionComponent,
    ContactsListComponent,
    ContactItemComponent,
    FilterSearchPipe],
  providers: [DataService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
