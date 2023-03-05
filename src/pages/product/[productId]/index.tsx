import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function ProductDetails  (props: Props) {
  const router = useRouter()
  const {productId: id} = router.query

  return (
    <h1>ProductDetails {id}</h1>
  )
}
