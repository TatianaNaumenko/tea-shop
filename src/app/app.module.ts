// import { TaaSearchService } from './services/taa-search.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TeaCatalogService } from './shared/services/tea-catalog.service';
import { TeaDataService } from './shared/services/tea-data.service';

import { SharedModule } from './shared/shared.module';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,



  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    AppRoutingModule,


  ],
  providers: [
    TeaCatalogService,
    TeaDataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
