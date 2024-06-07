import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books.component';
import { WebService } from './web.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { BookComponent } from './book.component';
import { AuthModule } from '@auth0/auth0-angular';
import { NavComponent } from './nav.component';
import { ReactiveFormsModule } from '@angular/forms';

var routes: any = [
  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'books',
    component: BooksComponent
    },

    {

      path: 'book/:id',
      component: BookComponent
      }


];

@NgModule({
  declarations: [
    AppComponent, BookComponent, HomeComponent, BookComponent, NavComponent
  ],
  imports: [
    BrowserModule, 
     HttpClientModule,
     RouterModule.forRoot(routes),
    AppRoutingModule,
    ReactiveFormsModule,
    AuthModule.forRoot( {
      
      domain:'dev-twgroinkl6lod0nb.us.auth0.com',
      clientId: 'eXVzQoaSjit1gIZKU2KdLkVByU9CSAIZ',
      
     
      })
  ],
  providers: [WebService],
  bootstrap: [AppComponent]
})
export class AppModule { }
