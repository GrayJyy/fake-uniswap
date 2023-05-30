import Exchange from './components/Exchange'

const HomePage: React.FC = () => {
  return (
    <>
      <div className='w-11/12 mt-8'>
        <Exchange account='' tokenList='' />
      </div>
    </>
  )
}

export default HomePage
