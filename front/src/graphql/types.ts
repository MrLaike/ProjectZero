import gql from 'graphql-tag';

export default gql`
  type Order {
    id: ID!
    fullName: String!
    phone: String!
    email: String!
    address: String!
    totalPrice: Float!
  }

  type Mutation {
    AddOrder(
            fullName: String!,
            email: String!
            phone: String!
            totalPrice: Float): Order!
  }
`;
