import { useState } from "react"
import { useEffect } from "react"
import ReactPaginate from "react-paginate"
import customAxios from "../api/customAxios"
import { TV_SERIES_URL } from "../api/Urls"
import Card from "../components/Card"
import SkeletonF from "../components/Skeleton"

function Series() {

  const [series, setSeries] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    (async () => {
      setLoading(true)
      const res = await customAxios(TV_SERIES_URL)
      const data = await res.data.results
      setSeries(data)
      setLoading(false)
    })()
  }, [])

  // Pagination
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerpage = 8

  const endOffset = itemOffset + itemsPerpage;
  const currentItems = series.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(series.length / itemsPerpage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerpage) % series.length;
    setItemOffset(newOffset);
  };


  return (
    <div>
      <h1 className='text-2xl text-white text-center my-5'>DISCOVER SERIES</h1>
      {
        loading ?
          <SkeletonF />
          :
          <>
            <div className='grid grid-cols-[repeat(auto-fit,minmax(auto,342px))] justify-center gap-5 mb-10'>
              {currentItems.map(series => <Card key={series.id} {...series} />)}
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

export default Series