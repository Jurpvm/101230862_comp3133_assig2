import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

import gql from 'graphql-tag';

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
  hotels: Observable<any> | undefined;
  public selectedHotel: any;
  constructor(private apollo: Apollo) {}

  ngOnInit() {
     this.hotels = this.apollo
      .watchQuery({
        query: GET_HOTELS,
      })
      .valueChanges.pipe(
        map((result: any) => {
          console.log(result);
          return result.data.getHotel;
        })
      );
  }

  onChosen(selectedHotel: any): void {
    this.selectedHotel = selectedHotel;
  }
}
