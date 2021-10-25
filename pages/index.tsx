import { GetServerSideProps } from 'next'
import { Box, Text } from '@chakra-ui/react'
import { sayHello } from '../utils'

type HomePageProps = {
  greeting: string
}

export default function HomePage(props: HomePageProps) {
  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="4xl" fontWeight="bold" color="blue.400">
        {props.greeting}
      </Text>
    </Box>
  )
}

export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context,
) => {
  const name = context.query.name?.toString() ?? 'Larry'
  return {
    props: {
      greeting: `${sayHello(name)}!`,
    },
  }
}
