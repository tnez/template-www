import { GetServerSideProps } from 'next'
import { sayHello } from '../utils'

type HomePageProps = {
  greeting: string
}

export default function HomePage(props: HomePageProps) {
  return <p>{props.greeting}</p>
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
