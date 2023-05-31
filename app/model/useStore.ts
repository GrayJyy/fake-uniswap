import { create } from 'zustand'

export type AccountProps = { address?: string; isConnected: boolean }
type State = { accountStat: AccountProps }
type Actions = {
  setAccountStat: (qty: AccountProps) => void
}
const accountStat: AccountProps = { address: undefined, isConnected: false }

const useStore = create<State & Actions>()(set => ({
  accountStat,
  setAccountStat: ({ address, isConnected }) => {
    set(() => ({
      accountStat: { address, isConnected },
    }))
  },
}))

export default useStore
