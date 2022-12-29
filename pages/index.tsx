import { NoAuthLayout } from '../components/layouts/no-auth/no-auth.layout'
import { Home } from '../components/pages_related/home/home'
import { COOKIE_NAME } from '../utils/set-cookie'

export default function HomePage() {
  return (
    <NoAuthLayout>
      <Home />
    </NoAuthLayout>
  )
}

export async function getServerSideProps({ req }) {
  // const session = await getSession({ req })
  const cookie = req.cookies[COOKIE_NAME]

  console.log(cookie)
  return { props: { start: true } }
}
