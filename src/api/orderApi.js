import { URL_API } from "../constants"
import axiosClient from "../services/axios"



const orderApi = {
  postOrder: (order) => {
    const url = `${URL_API}/order/create`
    return axiosClient.post(url, order)
  }
}
export default orderApi