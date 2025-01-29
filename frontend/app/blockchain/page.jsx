import React from 'react'
import { StarBackground } from '@/components/blockchain-components/star-background'
import { BackgroundBeamsWithCollisionDemo } from '@/components/blockchain-components/exploding-beams'
import Navbar from '@/components/Navbar'
const page = () => {
  return (
    <div>
        <Navbar />
        <StarBackground />
        <BackgroundBeamsWithCollisionDemo />
    </div>
  )
}

export default page