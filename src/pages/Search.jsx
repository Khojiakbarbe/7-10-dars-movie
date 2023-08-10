import { useState } from "react";
import ReactPaginate from "react-paginate";
import customAxios from "../api/customAxios";
import Card from "../components/Card";

function Search() {

  const [val, setVal] = useState('')
  const [movie, setMovie] = useState([]);

  const submit = async (e) => {
    e.preventDefault();
    const res = await customAxios(`https://api.themoviedb.org/3/search/movie?query=${val}&include_adult=false&language=en-US&page=1`)
    const data = await res.data.results
    setMovie(data)
  }

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerpage = 8

  const endOffset = itemOffset + itemsPerpage;
  const currentItems = movie.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movie.length / itemsPerpage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % movie.length;
    setItemOffset(newOffset);
  };

  return (
    <div>

      <form onSubmit={submit} className='grid  grid-cols-[1fr_auto] mb-5'>
        <input type="text" placeholder="search..." className="p-2 md:text-2xl rounded-lg bg-slate-600 text-white" onChange={(e) => setVal(e.target.value)} value={val} />
        <button className="p-2 bg-slate-500 text-white md:text-2xl rounded-lg">search</button>
      </form>

      {
        movie &&
        <>
          <div className='grid grid-cols-[repeat(auto-fit,minmax(auto,342px))] justify-center gap-5 mb-10'>
            {currentItems.map(movie => <Card key={movie.id} {...movie} />)}
          </div>

          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            containerClassName='flex justify-center items-center text-slate-400 gap-3 my-5'
            activeClassName='bg-slate-200'
            pageClassName='rounded-full h-[20px] w-[20px] p-3 flex justify-center items-center'
            pageCount={pageCount}
            previousLabel="< prev"
            renderOnZeroPageCount={null}
          />
        </>
      }


    </div>
  )
}

export default Search