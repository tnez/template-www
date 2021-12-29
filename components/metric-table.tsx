import * as React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Text, Table, Thead, Tbody, Th, Tr, Td } from '@chakra-ui/react'

type MetricTableProps = Record<never, never>

type Metric = {
  id: string
  name: string
  value: number
}

const QUERY = gql`
  query Metrics {
    metrics {
      id
      name
      value
    }
  }
`

export const MetricTable: React.FC<MetricTableProps> = () => {
  const { data, loading, error } = useQuery<{ metrics: Metric[] }>(QUERY)

  if (error) {
    console.error(error)
    return <Text color="red">{error.message}</Text>
  }

  if (loading) {
    return <Text>loading...</Text>
  }

  return (
    <Table id="metrics-table">
      <Thead>
        <Tr>
          <Th>Id</Th>
          <Th>Name</Th>
          <Th>Value</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.metrics.map((metric) => (
          <Tr key={metric.id}>
            <Td>{metric.id}</Td>
            <Td>{metric.name}</Td>
            <Td>{metric.value}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
