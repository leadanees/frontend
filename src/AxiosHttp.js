import axios from 'axios';


const base_url = 'http://localhost:4750/api/v1/';
//const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGU0ZDAyZDQ3NTEwMmI4YjI1NGJjNiIsInJvbGUiOiJVc2VyIiwiaWF0IjoxNzA5MTQxODA1LCJleHAiOjE3MTA4Njk4MDV9.i2zf2EoMf_fwOe3HlucZC-Vrj0PuGtG03zh7uBK_Tt4";

export const  customAxios = axios.create({
    baseURL:base_url,
    headers:{
        //Authorization:`Bearer ${authToken}`,
        //'Content-Type':'application/json',
    }
});

customAxios.interceptors.request.use(
    (config) =>{
        // const authToken = localStorage.getItem('accessToken');
        // if(authToken){
        //     config.headers.Authorization = `Bearer ${authToken}`;
        // }
        //config.data = JSON.stringify(config.data);
        return config;
    },
    (err)=>{
        return Promise.reject(err);
    }
);

customAxios.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) =>{
        let errMessage ="";
        console.log(errMessage);
        if(error.response?.status === 401){
            errMessage = "401 - UnAuthorized.";
            localStorage.clear();
        }
        return error;
    }
);
