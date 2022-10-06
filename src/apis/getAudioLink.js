import axios from 'axios';

/*const instance = axios.create({
     
});*/
export default axios.create({
  baseURL: "https://ylight-music-api.vercel.app",
});
//instance.defaults.headers.common['Authorization'] = "AIzaSyBh3IuBJGuNTYp70xeMSUpOBMmW2S5gFSA";
