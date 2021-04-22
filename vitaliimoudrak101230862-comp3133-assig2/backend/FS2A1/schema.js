//this file is for graphql

const { gql } = require('apollo-server-express');

exports.typeDefs = gql `
type Hotel{
    hotel_id: ID!
    hotel_name: String!
    street: String!
    city: String!
    postal_code: String!
    price: Int!
    email: String!
    user_id: ID!
}

type User{
    user_id: ID!
    username: String!
    password: String!
    email: String!
}

type Book{
    hotel_id: ID!
    booking_date: String!
    booking_start: String!
    booking_end: String!
    user_id: ID!
}

type Query {
    getHotel: [Hotel]
    getHotelByCity(city: String!): [Hotel]
    getHotelByName(hotel_name: String!): [Hotel]
    getBook: [Book]
    getUser: [User]
}

type Mutation {
    addHotel(hotel_id: ID!
        hotel_name: String!
        street: String!
        city: String!
        postal_code: String!
        price: Int!
        email: String!
        user_id: ID!
        ): Hotel

    addUser(user_id: ID!
        username: String!
        password: String!
        email: String!
        ): User

    addBook(hotel_id: ID!
        booking_date: String!
        booking_start: String!
        booking_end: String!
        user_id: ID!
        ): Book
}
`