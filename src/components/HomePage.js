import React, { useEffect } from 'react'
import { fetchData } from '../components/api'

const HomePage = () => {

  const [data, setData] = React.useState([])

  useEffect(() => {
    fetchData()
      .then(data => setData(data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div>
      {
        data.map(item => (
          <div key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
          </div>
        ))
      }
    </div>
  )
}

export default HomePage