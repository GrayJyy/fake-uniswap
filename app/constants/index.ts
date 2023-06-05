import ERC20_BOO from './ERC20Boo.json'
import ERC20_XDD from './ERC20Xdd.json'
import SWAP_MULTIHOP from './SwapMultihop.json'
import SWAP_TOKEN from './SwapToken.json'
const NAV_ITEMS = [
  { name: 'Swap', url: '/' },
  { name: 'Tokens', url: '/tokens' },
  { name: 'Pools', url: '/pools' },
]
const SWAP_TOKEN_ABI = SWAP_TOKEN.abi
const SWAP_MULTIHOP_ABI = SWAP_MULTIHOP.abi
const ERC20_BOO_ABI = ERC20_BOO.abi
const ERC20_XDD_ABI = ERC20_XDD.abi
const ADDRESSES = {
  31337: {
    booToken: '0x687bB6c57915aa2529EfC7D2a26668855e022fAE',
    xddToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
    multiSwapToken: '0xAe2563b4315469bF6bdD41A6ea26157dE57Ed94e',
    swapToken: '0x49149a233de6E4cD6835971506F47EE5862289c1',
  },
}
export { NAV_ITEMS, ADDRESSES, ERC20_BOO_ABI, ERC20_XDD_ABI, SWAP_MULTIHOP_ABI, SWAP_TOKEN_ABI }
