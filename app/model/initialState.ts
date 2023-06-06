/*
 * 负责 State —— 添加状态类型与初始化状态值
 *
 * */

// 钱包账户信息
export type Account = { accountInfo: { address?: `0x${string}`; isConnected: boolean } }
// token列表
export type TokenList = { tokenList: { name: string; symbol: string; balance: string }[] }

// 钱包账户信息初始值
export const initAccount: Account = { accountInfo: { address: undefined, isConnected: false } }

// token列表初始值
export const initTokenList: TokenList = { tokenList: [] }

export type State = Account & TokenList

export const initialState: State = {
  ...initAccount,
  ...initTokenList,
}
