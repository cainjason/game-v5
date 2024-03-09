import ChurchIcon from '@mui/icons-material/Church';

function Header() {
  return (
    <header className='flex justify-end bg-gradient-to-r from-blue-500 to-pink-500'>
      <ChurchIcon className='mr-5  ml-2 h-9 w-9' />
    </header>
  )
}

export default Header;
