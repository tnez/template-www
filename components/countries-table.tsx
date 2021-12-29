import * as React from 'react'
import { useQuery, gql } from '@apollo/client'
import { Text, Table, Thead, Tbody, Th, Tr, Td } from '@chakra-ui/react'

type CountriesTableProps = Record<string, never>

type Country = {
  code: string
  name: string
  emoji: string
}

const QUERY = gql`
  query Countries {
    countries(filter: { continent: { eq: "EU" } }) {
      code
      name
      emoji
    }
  }
`

export const CountriesTable: React.FC<CountriesTableProps> = () => {
  const { data, loading, error } = useQuery<{ countries: Country[] }>(QUERY)

  if (error) {
    console.error(error)
    return <Text color="red">{error.message}</Text>
  }

  if (loading) {
    return <Text>loading...</Text>
  }

  return (
    <Table id="countries-table">
      <Thead>
        <Tr>
          <Th>Code</Th>
          <Th>Name</Th>
          <Th>Emoji</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data?.countries.slice(0, 10).map((country) => (
          <Tr key={country.code}>
            <Td>{country.code}</Td>
            <Td>{country.name}</Td>
            <Td>{country.emoji}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  )
}
