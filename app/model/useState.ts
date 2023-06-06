/*
 * 自定义state hooks
 * 可以根据参数自定义查询state
 * 也可以先查询其他state的数据，根据数据值再查询想要的数据
 *
 * */
import { useStore } from './createStore'
import { shallow } from 'zustand/shallow'

// 体现shallow的作用，可以尝试去掉shallow参数，去Shallow页面点击修改userId和userName的按钮，
// 查看控制台打印值，对比二者的打印值，体会shallow的左右（浅比较在性能优化方面的作用）
//
export const useAccountAndTokenList = (type?: string) =>
  useStore(({ accountInfo, tokenList }) => {
    if (type && type === 'account') {
      return {
        address: accountInfo.address,
        isConnected: accountInfo.isConnected,
      }
    } else {
      return {
        tokenList,
      }
    }
  }, shallow)

export const useAccount = () => useStore(({ accountInfo }) => accountInfo)
export const useTokenList = () => useStore(({ tokenList }) => tokenList)
