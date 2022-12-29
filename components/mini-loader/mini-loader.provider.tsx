import { ReactNode, useState } from 'react'
import { MiniLoader } from './mini-loader'
import { MiniLoaderContext } from './mini-loader.context'

interface MiniLoaderProps {
  children: ReactNode
}

export const MiniLoaderProvider: React.FC<MiniLoaderProps> = ({ children }) => {
  const ctx = useState<boolean>(false)

  return (
    <MiniLoaderContext.Provider value={ctx}>
      {ctx[0] && <MiniLoader />}
      {children}
    </MiniLoaderContext.Provider>
  )
}
