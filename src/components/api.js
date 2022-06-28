import axios from 'axios'

export const fetchData = async () => {
  const response = await axios.get('http://192.168.0.105:8084/purchase/getAllProducts?startPosition=0&maxResult=10');
  console.log('response data is ', response.data.model);
  return response.data.model
}