import API from "@/lib/axios";
import Cookies from "js-cookie";

const getProducts = async () => {
   try {
      const response = await API.get('users', {
         headers: {
            Authorization: 'Bearer ' + Cookies.get('token')
         }
      });
      return response.data.data;
   } catch ( error ) {
      return Promise.reject(error)
   }
}

const getProduct = async (productId: string) => {
   try {
      const response = await API.get(`users/${productId}`, {
         headers: {
            Authorization: 'Bearer ' +  Cookies.get('token')
         }
      });
      return response.data.data;
   } catch ( error ) {
      return Promise.reject(error)
   }
}

export default {
   getProducts,
   getProduct
}