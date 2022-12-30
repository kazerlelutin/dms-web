import { FC, ReactNode } from 'react'
import { ChannelProvider } from '../../channel/channel.provider'
import { Chat } from '../../chat/chat'
import { ChatForm } from '../../chat/chat-form/chat-form'
import { ChatProvider } from '../../chat/chat.provider'
import { Header } from '../../header/header'
import { NavigationProvider } from '../../navigation/navigation.provider'
import { Session, SessionProvider } from '../../session/session.provider'
import { SocketProvider } from '../../socket/socket.provider'
import { Card } from '../../ui/card/card'
import { Col } from '../../ui/col/col'
import { Gridbox } from '../../ui/grid-box/grid-box'
import styles from './auth.module.css'

interface AuthLayoutProps {
  session: Session
  children: ReactNode
}

export const AuthLayout: FC<AuthLayoutProps> = ({ session, children }) => (
  <SessionProvider session={session}>
    <ChannelProvider channel={session.current_channel}>
      <ChatProvider>
        <SocketProvider>
          <div className={styles.container}>
            <Header />
            <div className={styles.content}>
              <div className={styles.aside}>
                <Gridbox>
                  <Col>
                    <Card title="Medias">mes medias</Card>
                  </Col>
                </Gridbox>
              </div>
              <NavigationProvider>
                <main className={styles.main}>{children}</main>
              </NavigationProvider>
              <div className={styles.chat}>
                <Gridbox>
                  <Chat />
                </Gridbox>
                <ChatForm />
                <div className="sm">
                  <Card title="Messages enregistrés">
                    Les messages pré-écrits
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </SocketProvider>
      </ChatProvider>
    </ChannelProvider>
  </SessionProvider>
)
