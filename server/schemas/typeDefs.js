const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Profile {
    _id: ID
    name: String
    email: String
    password: String
    skills: [String]!
  }

  type Product {
    _id: ID
    title: String
    description: String
    imageURL: String
    price: Float
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID!
    profile: Profile
  }

  type Query {
    profiles: [Profile]!
    products: [Product]!
    profile(profileId: ID!): Profile
    # Because we have the context functionality in place to check a JWT and decode its data, we can use a query that will always find and return the logged in user's data
    me: Profile
    checkout(products: [ID]!): Checkout

  }

  type Mutation {
    addProfile(name: String!, email: String!, password: String!): Auth
    addProduct(title: String!, description: String!, imageURL: String!, price: Float!): Product
    login(email: String!, password: String!): Auth

    addSkill(profileId: ID!, skill: String!): Profile
    removeProfile: Profile
    removeSkill(skill: String!): Profile
  }
`;

module.exports = typeDefs;
