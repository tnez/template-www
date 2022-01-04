import * as React from 'react'

import { CountriesTable } from '../components'

type CountriesPageProps = Record<never, never>

export const CountriesPage: React.FC<CountriesPageProps> = () => {
  return <CountriesTable />
}

export default CountriesPage
