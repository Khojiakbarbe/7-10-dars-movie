import axios from "axios";

const customAxios = axios.create({
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhY2Y5NWUzYzkyMDQ4NTY4ZmU4MTA3YTMyOGE1Yjk0YyIsInN1YiI6IjY0Y2JmMmM0NzA2ZTU2MDEwYjBhZjNhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.iiv1pvzvxcx63UdnUDuz5CbxCtC4Lw_CrPp7g4XA-fE`
    }
})

export default customAxios