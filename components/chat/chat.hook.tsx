import { useContext, useEffect, useState } from 'react'
import { ChatMsg, ChatResults } from './chat'
import { ChatContext } from './chat.context'
import tmi from 'tmi.js'

export const useChat = (): ChatResults => {
  const [messages, setMessages] = useState<ChatMsg[]>([])
  const client = useContext<tmi.Client>(ChatContext)

  useEffect(() => {
    if (client) {
      client.on('message', (_channel, tags, message) => {
        let newMsg = message
        const emotes = tags.emotes ? Object.keys(tags.emotes) : []

        emotes.forEach((o) => {
          if (!tags?.emotes) return
          tags.emotes[o].forEach((position: string) => {
            const splitPosition = position.split('-')
            const emoteWord = message.slice(
              parseInt(splitPosition[0]),
              parseInt(splitPosition[1]) + 1
            )
            newMsg = newMsg.replace(emoteWord, ` ${o} `)
          })
        })

        const splitMsg = newMsg.split(' ')
        if (tags['display-name']?.match(/StreamElements|nightbots/i)) return

        setMessages((prevMessages) => {
          const newMessages = [...prevMessages]
          newMessages.push({
            username: tags['display-name'] || tags.username || '',
            color: tags.color || 'var(--dms-text)',
            message: splitMsg
              .map((word: string) => {
                if (word.match(/http|www/)) {
                  return '**link**'
                }

                const isEmote = emotes.find((o) => o === word)
                if (isEmote) {
                  return `<img class="emoticon" src="http://static-cdn.jtvnw.net/emoticons/v1/${isEmote}/3.0" />`
                }
                return word
              })
              .join(' '),
          })
          //for slice, reverse before and after.
          newMessages.reverse()
          newMessages.slice(0, 100)
          return newMessages.reverse()
        })
      })

      return () => {
        setMessages([])
        client.disconnect()
      }
    }
  }, [client])

  return { messages }
}
