import { useRouter } from 'next/router'

export const useCreateLink = () => {
  const { locale } = useRouter()
  return (url: string) =>
    `${window.location.protocol}//${window.location.host}/${locale}/${url}`
}
