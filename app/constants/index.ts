import ERC20_BOO from './ERC20Boo.json'
import ERC20_XDD from './ERC20Xdd.json'
import SWAP_MULTIHOP from './SwapMultihop.json'
import SWAP_TOKEN from './SwapToken.json'
import IWETH from './IWeth.json'

const NAV_ITEMS = [
  { name: 'Swap', url: '/' },
  { name: 'Tokens', url: '/tokens' },
  { name: 'Pools', url: '/pools' },
]
const SWAP_TOKEN_ABI = SWAP_TOKEN.abi
const SWAP_MULTIHOP_ABI = SWAP_MULTIHOP.abi
const ERC20_BOO_ABI = ERC20_BOO.abi
const ERC20_XDD_ABI = ERC20_XDD.abi
const IWETH_ABI = IWETH.abi

type AddressesProps = {
  hardhat: {
    booToken: `0x${string}`
    xddToken: `0x${string}`
    multiSwapToken: `0x${string}`
    swapToken: `0x${string}`
    IWeth: `0x${string}`
  }
  sepolia: {
    booToken: `0x${string}`
    xddToken: `0x${string}`
    multiSwapToken: `0x${string}`
    swapToken: `0x${string}`
    IWeth: `0x${string}`
  }
  mainnet: {
    booToken: `0x${string}`
    xddToken: `0x${string}`
    multiSwapToken: `0x${string}`
    swapToken: `0x${string}`
    IWeth: `0x${string}`
  }
}
const ADDRESSES: AddressesProps = {
  hardhat: {
    booToken: '0x687bB6c57915aa2529EfC7D2a26668855e022fAE',
    xddToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    multiSwapToken: '0xAe2563b4315469bF6bdD41A6ea26157dE57Ed94e',
    swapToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  sepolia: {
    booToken: '0x687bB6c57915aa2529EfC7D2a26668855e022fAE',
    xddToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    multiSwapToken: '0xAe2563b4315469bF6bdD41A6ea26157dE57Ed94e',
    swapToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  mainnet: {
    booToken: '0x687bB6c57915aa2529EfC7D2a26668855e022fAE',
    xddToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    multiSwapToken: '0xAe2563b4315469bF6bdD41A6ea26157dE57Ed94e',
    swapToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
}
export { NAV_ITEMS, ADDRESSES, ERC20_BOO_ABI, ERC20_XDD_ABI, SWAP_MULTIHOP_ABI, SWAP_TOKEN_ABI, IWETH_ABI }
