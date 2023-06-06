import { usePrepareContractWrite, useContractWrite, useWaitForTransaction, useContractEvent, useNetwork } from 'wagmi'
import type { WriteContractResult, WatchContractEventCallback } from '@wagmi/core'
import { ADDRESSES, ERC20_BOO_ABI, ERC20_XDD_ABI, SWAP_TOKEN_ABI, SWAP_MULTIHOP_ABI, IWETH_ABI } from '../constants'

export type UseContractProps = {
  address?: `0x${string}`
  abi?: any[]
  functionName?: string
  value?: bigint
  args?: any[]
  eventName?: string
  listener?: WatchContractEventCallback<any[], string>
}
type ReturnValueProps = {
  write: (() => void) | undefined
  data: WriteContractResult | undefined
  isSuccess: boolean
  isFetching: boolean
  unwatch: (() => void) | undefined
}

type NetworkProps = 'hardhat' | 'sepolia' | 'mainnet'

/**
 * 用于调用智能合约的 Hook。
 *
 * @param {UseContractProps} [options={}] - 选项对象，包含如下属性：
 *   - address: 合约地址
 *   - abi: 合约 ABI
 *   - functionName: 要调用的函数名
 *   - value: 交易金额
 *   - args: 调用函数的参数
 *   - eventName: 监听的事件名
 *   - listener: 事件回调函数
 * @returns {ReturnValueProps} 返回一个包含如下属性的对象：
 *   - write: 发送交易的函数
 *   - data: 交易信息，包含 hash、status 等属性
 *   - isSuccess: 交易是否成功的状态值
 *   - isFetching: 交易是否正在发送的状态值
 *   - unwatch: 取消监听事件的函数
 */
const useContract = ({
  address,
  abi,
  functionName,
  value,
  args,
  eventName,
  listener = () => {
    console.log('listening...')
  },
}: UseContractProps): ReturnValueProps => {
  const { config } = usePrepareContractWrite({
    address,
    abi,
    functionName,
    args,
    value,
  })
  const { write, data } = useContractWrite(config)
  const { isSuccess, isFetching } = useWaitForTransaction({ hash: data?.hash })
  const unwatch = useContractEvent({ address, abi, eventName, listener })
  return { write, data, isSuccess, isFetching, unwatch }
}

const useNet = () => {
  const { chain } = useNetwork()
  return chain!.name as NetworkProps
}
const useBooContract = (params: UseContractProps) => {
  const { functionName, value, args, eventName, listener } = params
  const { write, data, isFetching, isSuccess, unwatch } = useContract({
    address: ADDRESSES[useNet()].booToken,
    abi: ERC20_BOO_ABI,
    functionName,
    value,
    args,
    eventName,
    listener,
  })
  return { write, data, isFetching, isSuccess, unwatch }
}

const useXddContract = (params: UseContractProps) => {
  const { functionName, value, args, eventName, listener } = params
  const { write, data, isFetching, isSuccess, unwatch } = useContract({
    address: ADDRESSES[useNet()].xddToken,
    abi: ERC20_XDD_ABI,
    functionName,
    value,
    args,
    eventName,
    listener,
  })
  return { write, data, isFetching, isSuccess, unwatch }
}

const useSwapTokenContract = (params: UseContractProps) => {
  const { functionName, value, args, eventName, listener } = params
  const { write, data, isFetching, isSuccess, unwatch } = useContract({
    address: ADDRESSES[useNet()].swapToken,
    abi: SWAP_TOKEN_ABI,
    functionName,
    value,
    args,
    eventName,
    listener,
  })
  return { write, data, isFetching, isSuccess, unwatch }
}

const useSwapMultihop = (params: UseContractProps) => {
  const { functionName, value, args, eventName, listener } = params
  const { write, data, isFetching, isSuccess, unwatch } = useContract({
    address: ADDRESSES[useNet()].multiSwapToken,
    abi: SWAP_MULTIHOP_ABI,
    functionName,
    value,
    args,
    eventName,
    listener,
  })
  return { write, data, isFetching, isSuccess, unwatch }
}

export { useBooContract, useXddContract, useSwapTokenContract, useSwapMultihop, useNet }
