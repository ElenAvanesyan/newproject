import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { CalendarModule } from 'angular-calendar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MessageComponent } from './components/message/message.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing, CalendarModule.forRoot() ],
  declarations: [ AppComponent, HomeComponent, MessageComponent, AppointmentComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
