'use client'

import { Button } from './ui/button'
import { SignInButton } from '@clerk/nextjs'

const SignIn = () => {
  return (
    <SignInButton>
      <Button variant="ghost">Logar</Button>
    </SignInButton>
  )
}

export { SignIn }
