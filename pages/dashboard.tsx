import { AuthLayout } from '../components/layouts/auth/auth.layout'
import { Dashboard } from '../components/pages_related/dashboard/dashboard'
import { loginTwitch } from '../services/login-twitch'

export default function DashboardPage({ session }) {
  return (
    <AuthLayout session={session}>
      <Dashboard />
    </AuthLayout>
  )
}

export async function getServerSideProps({ req }) {
  return await loginTwitch(req)
}
