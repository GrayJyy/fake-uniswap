'use client'

import { NAV_ITEMS } from '@/app/constants'
import { Uni } from '@web3uikit/icons'
import Link from 'next/link'
import { Input, InputGroup, InputRightElement, Tooltip, useMediaQuery } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Connector from './Connector'

const NavBarPage = () => {
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  return (
    <div className='w-9/10 mx-auto my-8 '>
      <div className='grid grid-cols-3 justify-between items-center gap-4'>
        <div className=' grid grid-cols-2 justify-between items-center'>
          <Uni fontSize='100px' className='hidden md:block' title='Uniswap' />
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
        <InputGroup className='hidden sm:block'>
          <Input placeholder='Search Tokens' />
          <InputRightElement>
            <Search2Icon />
          </InputRightElement>
        </InputGroup>
        <Connector />
      </div>
    </div>
  )
}

export default NavBarPage
