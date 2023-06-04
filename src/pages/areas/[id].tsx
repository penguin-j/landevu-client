import { useRouter } from 'next/router'

export default function Area() {
  const router = useRouter()
  const { id } = router.query

  return <h1>{id} 東京</h1>
}
