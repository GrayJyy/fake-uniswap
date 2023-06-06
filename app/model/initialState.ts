/*
 * 负责 State —— 添加状态类型与初始化状态值
 *
 * */

// token列表
export type TokenList = { tokenList: { name: string; symbol: string; balance: string }[] }

// token列表初始值
export const initTokenList: TokenList = { tokenList: [] }

export type State = TokenList

export const initialState: State = {
  ...initTokenList,
}
