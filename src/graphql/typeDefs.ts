import { gql } from "apollo-server-lambda";

const typeDefs = gql`
  type CustomField {
    description: String
    value: String
    isLocked: Boolean
  }
  type Order {
    id: ID!
    reference: String
    advertiser: CustomField
    brand: CustomField
    versions: Versions
  }

  type Version {
    id: ID!
    clock: CustomField
    title: CustomField
    duration: CustomField
  }

  type Versions {
    count: Int
    versions: [Version]
    campaignId: ID!
  }

  type Query {
    orders: [Order]
    order(campaignId: ID!): Order
    versions(campaignId: ID!): Versions
    version(versionId: ID!): Version
  }

  # type Mutation {
  #   postComment(subject: String, comment: String): Comment!
  # }
`;

export default typeDefs;
