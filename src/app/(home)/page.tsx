import { auth } from '@clerk/nextjs/server'
import Navbar from '../_components/nav-bar'

const HomePage = async () => {
  const { userId } = await auth()
  if (userId) {
    // redirect('/fornecedor')
  }
  return (
    <>
      <Navbar />

      <div className="flex h-full flex-col space-y-6 overflow-hidden p-6"></div>
    </>
  )
}

export default HomePage
