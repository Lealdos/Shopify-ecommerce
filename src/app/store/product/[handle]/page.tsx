"use client"
import { useParams, useSearchParams } from "next/navigation"


export default function ProductPage(){
  const params = useParams()
  const searchParams = useSearchParams()

  console.log('params', params)
  console.log('searchParams', searchParams)
  const id = searchParams.get("id")

  console.log('searchParams', id)
  return <h1>Product Page</h1>
}