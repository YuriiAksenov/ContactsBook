import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/in-memory-data.service';


import { AppComponent } from './app.component';
/*
      Sidebar part od application
*/
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PanelFunctionsComponent } from './components/sidebar/panel-functions/panel-functions.component';
// import { SearchFunctionComponent } from './components/sidebar/search-function/search-function.component';
import { ContactsListComponent } from './components/sidebar/contacts-list/contacts-list.component';
import { ContactItemComponent } from './components/sidebar/contact-item/contact-item.component';
/*
      Middle part od application
*/
import { MiddleComponent } from './components/middle/middle.component';
import { ContactFormComponent } from './components/middle/contact-form/contact-form.component';


import { MainService } from './shared/main.service';
import { SidebarService } from './shared/sidebar.service';
import { DisplayDirective } from './shared/display.directive';


import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DisplayDirective,
    SidebarComponent,
    MiddleComponent,
    ContactFormComponent,
    PanelFunctionsComponent,
    // SearchFunctionComponent,
    ContactsListComponent,
    ContactItemComponent,
    FilterSearchPipe],
  providers: [MainService, SidebarService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
