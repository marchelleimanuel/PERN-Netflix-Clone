import { useNavigate } from "react-router-dom";
import { BASE_URL, get_private, REFRESH_ACCESS_TOKEN } from "../../common/urlPath";
import axios from "axios";
import api from "../../common/axiosInterceptor";

const Home = () => {

    const navigate = useNavigate();

    const tesJWT = async () => {
        try {
            const response = await api.get(get_private);

            if (response.data.response === "berhasil kok") {
            console.log("ini data dari backend:", response.data.data);
            navigate("/private-page");
            }
        } catch (error) {
            if(error.response?.data?.response_message.includes('Refresh Token')) navigate('/login');
            console.log("❌ Request failed:", error.response?.data?.response_message);
        }
    };

    // const tesJWT = async () => {
    //     try {
    //         const config = {
    //             method: 'get',
    //             url: BASE_URL + get_private,
    //             withCredentials: true
    //         }

    //         const response = await axios(config);
    //         if(response.data.response === 'berhasil kok') {
    //             console.log('ini data dari backend', response.data.data);
    //             navigate('/private-page');
    //         }

    //     } catch (error) {
    //         console.log(error.response.data.response_message)
    //         try {
    //             const config = {
    //                 method: 'post',
    //                 url: BASE_URL + REFRESH_ACCESS_TOKEN,
    //                 withCredentials: true
    //             }

    //             const response = await axios(config);
    //             if(response.data.response_code === 'SUCCESS') {
    //                 console.log(response.data.response_message);

    //                 try {
    //                     const response = await axios({
    //                         method: 'get',
    //                         url: BASE_URL + get_private,
    //                         withCredentials: true
    //                     });
    
    //                     if(response.data.response === 'berhasil kok') {
    //                         navigate('/private-page');
    //                     }
    //                 } catch (error) {
    //                     console.log(error.response.data.response_message)
    //                 }
    //             }
    //         } catch (error) {
    //             console.log(error.response.data.response_message)
    //         }
    //     }
    // }

    return (
        <>
            <h1>INI HOME</h1>
            <button className="text-2xl cursor-pointer border-1 border-black" onClick={tesJWT}>Private Page</button>
            <br></br>
            <button className="text-2xl cursor-pointer border-1 border-black" onClick={() => navigate('/public')}>Public Page</button>
        </>
    )
}

export default Home;