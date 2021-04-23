import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

const GET_HOTELS = gql`

   query gethotel {

    gethotel {
      hotel_id
      hotel_name
      street
      city
      postal_code
      price
      email
      user_id
    }
  }
`;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public loading: boolean;
  private querySubscription: Subscription | undefined;
  hotels: any | undefined;
  public selectedHotel: any;
  constructor(private apollo: Apollo) {
    this.loading = true;
  }

  ngOnInit() {

     this.querySubscription  = this.apollo.watchQuery<any>({
      query:GET_HOTELS}).valueChanges.subscribe(({data, loading})=>{
        this.loading = loading;
        this.hotels = data.getHotel
      })
  }

  onChosen(selectedHotel: any): void {
    this.selectedHotel = selectedHotel;
  }
}
