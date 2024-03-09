
function Navbar() {
  return (
    <nav className="flex flex-col h-full w-8 bg-red-200 text-3xl font-bold p-2">
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#home">Home</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#calendar">Calendar</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#ministries">Ministries</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#infomation">Infomation</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#contacts">Contacts</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#giving">Giving</a></p>
      <p className="text-sky-500 hover:text-sky-700 mt-5 mb-5"><a href="#media">Media</a></p>
    </nav>
  )
}

export default Navbar
