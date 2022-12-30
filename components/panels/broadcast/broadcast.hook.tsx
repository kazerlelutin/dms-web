import { BroadCastResult } from './broadcast'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { BroadcastContext } from './broadcast.context'
import { useSocketTrigger } from '../../socket/socket-trigger.hook'

export const useBroadcast = (): BroadCastResult => {
  const router = useRouter(),
    { broadcast } = router.query,
    { data } = useContext(BroadcastContext)

  console.log(data)

  useSocketTrigger(`broadcast-${broadcast}`, (msg) => {
    console.log('_______', msg)
  })

  return {}
}
