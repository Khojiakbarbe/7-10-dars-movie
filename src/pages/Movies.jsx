import React, { useEffect } from 'react'
import { useState } from 'react'
import ReactPaginate from 'react-paginate'
import customAxios from '../api/customAxios'
import { MOVIES_URL } from '../api/Urls'
import Card from '../components/Card'
import Skeleton from '../components/Skeleton'

function Movies() {

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await customAxios(MOVIES_URL)
      const data = await res.data.results
      setMovies(data)
      setLoading(false)
    })()
  }, [])

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerpage = 8

  const endOffset = itemOffset + itemsPerpage;
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerpage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % movies.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <h1 className='text-2xl text-white text-center my-5'>DISCOVER MOVIES</h1>

      {
        loading ? <Skeleton /> :
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

export default Movies