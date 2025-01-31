'use client'
import { useUser } from '@clerk/nextjs'

export default function GetUserName() {
  const { user } = useUser()

  return (
    <>
      {user?.firstName}
      {user?.lastName}
    </>
  )
}
