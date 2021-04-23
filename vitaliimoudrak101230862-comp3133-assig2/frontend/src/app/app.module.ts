import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpLinkModule } from 'apollo-angular-link-http';
import { HomeComponent } from './home/home.component';
import { LoginsetupComponent } from './loginsetup/loginsetup.component';
import { RegistersetupComponent } from './registersetup/registersetup.component';
//import { ApolloModule, Apollo } from 'apollo-angular';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginsetupComponent,
    RegistersetupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    HttpLinkModule
=======
    GraphQLModule,
    HttpClientModule
>>>>>>> parent of ffed8d2 (updated backend)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
