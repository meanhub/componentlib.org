import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {ComponentThumbnailComponent} from './components/component-thumbnail/component-thumbnail.component';
import {ComponentListComponent} from './components/component-list/component-list.component';
import {FiltersComponent} from './components/filters/filters.component';
import {ComponentService} from './services/component.service';
import {SafePipe} from './pipes/safe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ComponentThumbnailComponent,
    ComponentListComponent,
    FiltersComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ComponentService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
