import { NoAuthLayout } from '../components/layouts/no-auth/no-auth.layout'
import { Twitch } from '../components/pages_related/twitch/twitch'

export default function HomePage() {
  return (
    <NoAuthLayout>
      <Twitch />
    </NoAuthLayout>
  )
}
