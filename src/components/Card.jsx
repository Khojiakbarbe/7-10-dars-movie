import baseUrl from "../url/baseUrl"
import { useNavigate } from 'react-router-dom'


function Card(data) {
  const { media_type, name, title, release_date, first_air_date, poster_path, vote_average } = data
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate('/full_info', { state: { data: data, img: baseUrl(poster_path, "small") } })} className="bg-[#282c34] group transition duration-300 hover:bg-slate-200 grid grid-rows-[auto_1fr_auto] cursor-pointer rounded-xl p-3">
      <img
        className="rounded-lg"
        src={baseUrl(poster_path, "small")}
        alt="Img"
      />
      <h3 className="text-center mt-4 group-hover:text-slate-600 text-slate-200 text-3xl">
        {name || title}
      </h3>
      <div className="text-slate-400 px-5 group-hover:text-slate-700 py-2 text-xl flex justify-between mt-5">
        <span>{media_type}</span>
        <span className="flex gap-2">
          ⭐{vote_average.toFixed(1)}
        </span>
        <span>{release_date || first_air_date}</span>
      </div>
    </div>
  )
}

export default Card