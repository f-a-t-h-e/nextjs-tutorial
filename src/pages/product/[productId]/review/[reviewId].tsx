import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Review (props: Props)  {
  const router = useRouter()
const {reviewId, productId} = router.query
  return (
    <h1>product {productId} review {reviewId}</h1>
  )
}
