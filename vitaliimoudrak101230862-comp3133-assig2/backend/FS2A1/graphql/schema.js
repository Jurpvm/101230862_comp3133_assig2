const { buildSchema } = require('graphql');

module.exports = buildSchema(`
    type Hotel {
        _id: ID!
        user_id: String!
        hotel_id: String!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Number!
        email: String!
    }
    type HotelData {
        hotels: [Hotel!]!
    }
    type RootQuery {
        hotels: HotelData!
    }
    schema {
        query:RootQuery
    }
`)
