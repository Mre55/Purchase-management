import axios from 'axios'

export const fetchData = async () => {
  const response = await axios.get('http://192.168.0.105:8084/purchase/getAllProducts?startPosition=0&maxResult=10');
  return response.data.model
}

export const fetchPurchaseDetail = async (productId) => {
  const response = await axios.get(`http://192.168.0.105:8084/purchase/purchaseDetailOfProduct/${productId}`);
  return response.data
}

export const createPurchase = async (productId, quantity, pricePerPiece) => {
  const response = await axios({
    method: 'post',
    url: `http://192.168.0.105:8084/purchase/create/${productId}`,
    headers: {},
    data: {
      "quantity": `${quantity}`,
      "pricePerPiece": `${pricePerPiece}`
    }
  });
  // const response = await axios.post(`http://192.168.0.105:8084/purchase/create/${productId}`);
  console.log('response is ', response.msg);
  return response.msg
}