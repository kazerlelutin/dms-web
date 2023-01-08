import { AuthLayout } from '../../components/layouts/auth/auth.layout'
import { loginTwitch } from '../../services/login-twitch'

export default function DashboardPage({ session }) {
  return <AuthLayout session={session} />
}

export async function getServerSideProps({ req }) {
  return await loginTwitch(req)
}
