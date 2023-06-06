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
    Dai: `0x${string}`
  }
  sepolia: {
    booToken: `0x${string}`
    xddToken: `0x${string}`
    multiSwapToken: `0x${string}`
    swapToken: `0x${string}`
    IWeth: `0x${string}`
    Dai: `0x${string}`
  }
  mainnet: {
    booToken: `0x${string}`
    xddToken: `0x${string}`
    multiSwapToken: `0x${string}`
    swapToken: `0x${string}`
    IWeth: `0x${string}`
    Dai: `0x${string}`
  }
}
const ADDRESSES: AddressesProps = {
  hardhat: {
    booToken: '0x64cDF2f574e9741C79E78352F79Feb8188CFa8b8',
    xddToken: '0xfdB0891c523E992c291314DBD8Bc496453acB9b8',
    multiSwapToken: '0x706113D7b56814037ab6535733684039A601B58e',
    swapToken: '0xB799834cF107e03937AF8DAAdfC13243D27ba676',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    Dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  },
  sepolia: {
    booToken: '0x64cDF2f574e9741C79E78352F79Feb8188CFa8b8',
    xddToken: '0xfdB0891c523E992c291314DBD8Bc496453acB9b8',
    multiSwapToken: '0x706113D7b56814037ab6535733684039A601B58e',
    swapToken: '0xB799834cF107e03937AF8DAAdfC13243D27ba676',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    Dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  },
  mainnet: {
    booToken: '0x64cDF2f574e9741C79E78352F79Feb8188CFa8b8',
    xddToken: '0xfdB0891c523E992c291314DBD8Bc496453acB9b8',
    multiSwapToken: '0x706113D7b56814037ab6535733684039A601B58e',
    swapToken: '0xB799834cF107e03937AF8DAAdfC13243D27ba676',
    IWeth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    Dai: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
  },
}
export { NAV_ITEMS, ADDRESSES, ERC20_BOO_ABI, ERC20_XDD_ABI, SWAP_MULTIHOP_ABI, SWAP_TOKEN_ABI, IWETH_ABI }
