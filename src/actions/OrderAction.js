import orderApi from "../api/orderApi"



export const actionPostOrder = (order) => {

  return async (dispatch) => {
    try {
      const res = await orderApi.postOrder(order)
      console.log(res);
      return res
    }
    catch (err) {
      return err
    }
  }
}