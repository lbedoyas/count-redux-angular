import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

// NgRx
import { StoreModule } from '@ngrx/store';
import { contadorReducer } from './contador/contador.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ contador: contadorReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
