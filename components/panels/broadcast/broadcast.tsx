import { useFetch } from '../../hooks/fetch.hook'
import { Factory } from '../../layouts/factory'
import { BroadcastContext } from './broadcast.context'
import { BroadcastView } from './broadcast.view'
import { useBroadcast } from './broadcast.hook'
import { useRouter } from 'next/router'

export interface BroadCastResult {}
const BroadCastFactory = Factory<unknown, BroadCastResult>(
  useBroadcast,
  BroadcastView
)

export const Broadcast: React.FC = () => {
  const router = useRouter(),
    { broadcast } = router.query,
    id = typeof broadcast === 'string' ? parseInt(broadcast) : undefined,
    ctx = useFetch('broadcast/broadcast', { id })

  return (
    <BroadcastContext.Provider value={ctx}>
      <BroadCastFactory />
    </BroadcastContext.Provider>
  )
}
