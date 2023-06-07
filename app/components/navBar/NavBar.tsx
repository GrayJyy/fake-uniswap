'use client'

import { ADDRESSES, ERC20_BOO_ABI, ERC20_XDD_ABI, IWETH_ABI, NAV_ITEMS } from '@/app/constants'
import { Uni } from '@web3uikit/icons'
import Link from 'next/link'
import { Input, InputGroup, InputRightElement, Tooltip, useBoolean, useMediaQuery } from '@chakra-ui/react'
import { Search2Icon } from '@chakra-ui/icons'
import Connector from './Connector'
import { BsCoin } from 'react-icons/bs'
import TokenList from './TokenList'
import { useAccount, useNetwork, useContractRead, useContractReads } from 'wagmi'
import { NetworkProps } from '@/app/hooks'
import { useEffect } from 'react'
import { useStore, useTokenList } from '@/app/model'
import { formatReadsResult } from '@/app/utils'
import { TokenList as TokenListType } from '@/app/model/initialState'

const NavBarPage = () => {
  const { setTokenList } = useStore()
  const tl = useTokenList()
  const [isLargerThan768] = useMediaQuery('(min-width: 768px)')
  const [visible, setVisible] = useBoolean(false)
  const { isConnected, address } = useAccount()
  const { chain } = useNetwork()
  const booTokenContract = {
    address: chain ? ADDRESSES[chain!.network as NetworkProps]?.booToken : undefined,
    abi: ERC20_BOO_ABI as any,
  }
  const xddTokenContract = {
    address: chain ? ADDRESSES[chain!.network as NetworkProps]?.xddToken : undefined,
    abi: ERC20_XDD_ABI as any,
  }
  const daiTokenContract = {
    address: chain ? ADDRESSES[chain!.network as NetworkProps]?.Dai : undefined,
    abi: IWETH_ABI as any,
  }
  const wethTokenContract = {
    address: chain ? ADDRESSES[chain!.network as NetworkProps]?.IWeth : undefined,
    abi: IWETH_ABI as any,
  }
  // const contracts = [
  //   {
  //     address: chain ? ADDRESSES[chain!.network as NetworkProps]?.booToken : undefined,
  //     abi: ERC20_BOO_ABI,
  //     functionName: 'name',
  //   },
  // ]
  // const { data } = useDaiContract({
  //   functionName: 'name',
  // })

  const { data } = useContractReads({
    contracts: [
      { ...booTokenContract, functionName: 'name' },
      { ...booTokenContract, functionName: 'symbol' },
      { ...booTokenContract, functionName: 'balanceOf', args: [address ? address : ''] },
    ],
  })
  const { data: data2 } = useContractReads({
    contracts: [
      { ...xddTokenContract, functionName: 'name' },
      { ...xddTokenContract, functionName: 'symbol' },
      { ...xddTokenContract, functionName: 'balanceOf', args: [address ? address : ''] },
    ],
  })
  const { data: data3 } = useContractReads({
    contracts: [
      { ...daiTokenContract, functionName: 'name' },
      { ...daiTokenContract, functionName: 'symbol' },
      { ...daiTokenContract, functionName: 'balanceOf', args: [address ? address : ''] },
    ],
  })
  const { data: data4 } = useContractReads({
    contracts: [
      { ...wethTokenContract, functionName: 'name' },
      { ...wethTokenContract, functionName: 'symbol' },
      { ...wethTokenContract, functionName: 'balanceOf', args: [address ? address : ''] },
    ],
  })

  // 设置当前账户的 tokenList
  useEffect(() => {
    const arr = [data, data2, data3, data4]
    const datas: TokenListType = { tokenList: [] }
    arr.forEach(i => {
      const obj = formatReadsResult(i, ['name', 'symbol', 'balance'])
      obj.balance = obj.balance?.toString()
      datas.tokenList.push(obj)
    })
    setTokenList(datas)
  }, [isConnected, data, data2, data3, data4, setTokenList])

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
            <TokenList visible={visible} onClose={setVisible.off} onOpen={setVisible.on} data={{ tokenList: tl }} />
          </div>
        </div>
      )}
    </div>
  )
}

export default NavBarPage
