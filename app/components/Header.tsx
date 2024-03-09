import ChurchIcon from '@mui/icons-material/Church';
import MovieIcon from '@mui/icons-material/Movie';


function Header() {
  return (
    <header className='shadow-lg shadow-cyan-500/50 flex items-center justify-around bg-gradient-to-r from-blue-500'>
      
      <MovieIcon className='cursor-pointer hover:shadow-lg shadow-black-700/50 flex justify-end mr-5  ml-2 h-9 w-9 hover:h-10 hover:w-10' />
      
      <h1 className='flex text-white text-5xl font-extrabold justify-center'>* G~A~M~E *</h1>
      <ChurchIcon className='cursor-pointer hover:shadow-lg shadow-black-700/50 flex justify-end mr-5  ml-2 h-9 w-9 hover:h-10 hover:w-10' />
    </header>
  )
}

export default Header;