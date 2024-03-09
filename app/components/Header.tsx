import ChurchIcon from '@mui/icons-material/Church';
import MovieIcon from '@mui/icons-material/Movie';
import Link from 'next/link';

function Header() {
  return (
    <header className='shadow-lg shadow-cyan-500/50 flex items-center justify-around bg-gradient-to-r from-blue-500'>
      
      <MovieIcon className='cursor-pointer hover:bg-blue-200 flex justify-end mr-5  ml-2 h-9 w-9' />
      
      <h1 className='flex text-white text-5xl font-extrabold justify-center'>* G~A~M~E *</h1>
      <ChurchIcon className='cursor-pointer hover:bg-blue-200 flex justify-end mr-5  ml-2 h-9 w-9' />
    </header>
  )
}

export default Header;
