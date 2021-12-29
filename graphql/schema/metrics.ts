import { gql } from 'apollo-server-express'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = gql`
  type Metric {
    id: ID!
    name: String!
    value: Float!
  }

  type Query {
    """
    Fetch mocked metrics.
    """
    metrics: [Metric!]!
  }
`

const resolvers = {
  Metric: {
    value: (metric: any) => Math.random() * metric.maxValue,
  },
  Query: {
    metrics: () => [
      { id: '01', name: 'speed', maxValue: 100 },
      { id: '02', name: 'mpg', maxValue: 40 },
      { id: '03', name: 'rpm', maxValue: 10_000 },
    ],
  },
}

export default makeExecutableSchema({
  typeDefs,
  resolvers,
})
