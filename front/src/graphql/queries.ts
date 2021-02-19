import gql from 'graphql-tag';

// TODO Переделать эту хуйню
export const addOrder = gql`
  mutation AddOrder($fullName: String!,
                    $email: String!
                    $phone: String!
                    $totalPrice: Float
                    $products: [Int!]
    ) {
    addOrder(fullName: $fullName,
             email: $email,
             phone: $phone,
             totalPrice: $totalPrice,
             products: $products

    ) {
      id
      full_name
      email
      total_price
    }
  }
`;

export const nulluble = null;
