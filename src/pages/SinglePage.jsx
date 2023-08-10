import { useLocation, useNavigate } from 'react-router-dom'


function SinglePage() {

  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <>
    <button onClick={() => navigate(-1)} className='bg-blue-700 px-5 py-2 rounded-full cursor-pointer hover:bg-slate-500 transition duration-500 text-white'>Back</button>
      <div className='grid md:grid-cols-[auto_1fr] relative gap-9 py-5'>
        <img className='mx-auto rounded-lg' src={state.img} />
        <div className='text-white p-2'>
          {state.data.media_type && <span className='bg-blue-600 rounded-full md:absolute top-[-1%] right-0 text-white px-5 py-2'>{state.data.media_type}</span>}
          <h2 className='text-2xl md:text-5xl lg:text-6xl my-5'>{state.data.title || state.data.name}</h2>
          <h4 className='md:text-xl lg:text-4xl'>{state.data.overview}</h4>
          <div className='lg:flex justify-between md:text-2xl lg:text-3xl shadow-lg px-10 py-2 my-5 gap-5'>
            <p >⭐: {state.data.vote_average}</p>
            <p>Year : {state.data.release_date || state.data.first_air_date}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SinglePage