import { useRouter } from 'next/router'
import React from 'react'

type Props = {}

export default function Doc (props: Props) {
  const router = useRouter()
  const {params = []} = router.query
  
  if (params.length === 2){
    return (
      <h1>
        Viewing docs for feature {params[0]} and concept {params[1]}
      </h1>
    )
  }else if (params.length === 1) {
    return <h1>
      Viewing docs for featur {params[0]}
    </h1>
  }
  
  return (
    <h1>Docs Home {params}</h1>
  )
}

