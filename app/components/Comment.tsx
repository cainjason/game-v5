import SearchIcon from '@mui/icons-material/Search';

function Comment() {
  return (
    <div className="flex justify-center ">
        <input 
            className="text-sm outline-none border-red-600 bg-green-200 pl-2 font-bold" 
            type="text" 
            placeholder="Where we going?"/>

            <SearchIcon />
    </div>
  )
}

export default Comment;
