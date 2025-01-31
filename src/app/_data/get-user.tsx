import { clerkClient } from '@clerk/nextjs/server'

export async function getAllUser() {
  const response = await clerkClient()
  const users = await response.users.getUserList()

  console.log(users)
}
