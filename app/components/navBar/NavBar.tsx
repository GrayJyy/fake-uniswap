'use client'

import { NAV_ITEMS } from '@/app/constants'
import { Uni } from '@web3uikit/icons'
import Link from 'next/link'
import { Input, InputGroup, InputRightElement, Tooltip, useBoolean, useMediaQuery } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Connector from './Connector'
import { BsCoin } from 'react-icons/bs'
import TokenList from './TokenList'
import { useAccount } from 'wagmi'
import { useStore } from '@/app/model/createStore'
import { useEffect } from 'react'

const NavBarPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [visible, setVisible] = useBoolean(false)
  const { isConnected, address } = useAccount()
  const { setAccountStat } = useStore()
  useEffect(() => {
    setAccountStat({ accountInfo: { address, isConnected } })
  }, [address, isConnected, setAccountStat])

  return (
    <div className='grid grid-cols-7 justify-between items-center gap-4 mx-auto my-8 w-11/12'>
      <div className=' grid grid-cols-2 justify-between items-center col-span-3'>
        <Uni fontSize='100px' className='hidden md:block' title='Uniswap' />
        <div className='hidden md:block'>
          <div className='grid grid-cols-3 justify-between items-center gap-1'>
            {isLargerThan768
              ? NAV_ITEMS.map(i => (
                  <Link href={i.url} key={i.url}>
                    <div className='hover:text-rose-500 truncate'>{i.name}</div>
                  </Link>
                ))
              : NAV_ITEMS.map(i => (
                  <Tooltip key={i.url} label={i.name} bg='red.500' hasArrow>
                    <Link href={i.url}>
                      <div className='hover:text-rose-500 truncate'>{i.name}</div>
                    </Link>
                  </Tooltip>
                ))}
          </div>
        </div>
      </div>
      <InputGroup className='hidden md:block col-span-2'>
        <Input placeholder='Searching everything you want...' />
        <InputRightElement>
          <Search2Icon />
        </InputRightElement>
      </InputGroup>
      <div className={`${isConnected ? '' : 'col-span-2 col-end-8 md:ml-32'}`}>
        <Connector />
      </div>
      {isConnected && (
        <div className='cursor-pointer relative w-[30px] col-start-9'>
          <div className='rounded-md bg-neutral-300'>
            <BsCoin fontSize={30} color='#ea337a' onMouseEnter={setVisible.on} onMouseLeave={setVisible.off} />
          </div>
          <div className=' absolute top-[30px] right-[0px]'>
            <TokenList visible={visible} onClose={setVisible.off} onOpen={setVisible.on} data={{}} />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBarPage
