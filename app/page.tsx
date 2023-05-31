'use client'

import { useEffect } from 'react'
import useStore from './model/useStore'
import dynamic from 'next/dynamic'

const DynamicExchange = dynamic(() => import('./components/Exchange'), { ssr: false })
const HomePage: React.FC = () => {
  const { accountStat } = useStore()

  return (
    <>
      <div className='w-11/12 mt-8'>
        <DynamicExchange accountStat={accountStat} tokenList='' />
      </div>
    </>
  )
}

export default HomePage
