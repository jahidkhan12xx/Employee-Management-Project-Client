import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https:/server11-psi.vercel.app/api/v1'
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;