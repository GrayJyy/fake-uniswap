'use client'

import { useAccount } from './model/useState'
import dynamic from 'next/dynamic'

const DynamicExchange = dynamic(() => import('./components/Exchange'), { ssr: false })
const HomePage: React.FC = () => {
  const accountInfo = useAccount()

  return (
    <>
      <div className='w-11/12 mt-8'>
        <DynamicExchange accountInfo={accountInfo} tokenList={[]} />
      </div>
    </>
  )
}

export default HomePage
