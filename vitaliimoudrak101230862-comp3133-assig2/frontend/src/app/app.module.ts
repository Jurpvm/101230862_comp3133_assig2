import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule } from 'apollo-angular-link-http';
<<<<<<< HEAD
<<<<<<< HEAD
import { HomeComponent } from './home/home.component';
import { LoginsetupComponent } from './loginsetup/loginsetup.component';
import { RegistersetupComponent } from './registersetup/registersetup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './auth.service';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginsetupComponent,
    RegistersetupComponent,
    HeaderComponent
=======
//import { ApolloModule, Apollo } from 'apollo-angular';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of 9445bbb (added 3 components)
=======
//import { ApolloModule, Apollo } from 'apollo-angular';

@NgModule({
  declarations: [
    AppComponent
>>>>>>> parent of 9445bbb (added 3 components)
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    GraphQLModule,
    HttpClientModule,
    NgbModule,
    AuthService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
