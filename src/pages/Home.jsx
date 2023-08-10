import { Link, Outlet } from 'react-router-dom'

function Home() {
    return (
        <div className='container mx-auto px-5'>
            <nav className='flex justify-around text-xs md:text-2xl text-white py-5 shadow-lg mb-5 gap-5'>
                <Link to='/'>Trending</Link>
                <Link to='/movies'>Movies</Link>
                <Link to='/series'>TV Series</Link>
                <Link to='/search'>Search</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default Home