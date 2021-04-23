import { Component, Input, OnInit } from '@angular/core';
import gql from 'graphql-tag';
import { Observable } from 'rxjs';

const GET_HOTELS = gql`
  {
    hotels {
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
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input('data') data: any;
  hotels: Observable<any> | undefined;
  constructor() {}
  ngOnInit(): void {}
}
