import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
const url = 'https://course-api.com/react-tours-project'
function App() {
 const[loading,setLoading]=useState(false)
 const[tours,setTours] = useState([])
 const removeTour=(id)=>{
  const  newTours = tours.filter(tour=>tour.id !== id)
  setTours(newTours)
 }
 const fetchTours= async() =>{
      setLoading(true)
   try {
    const response = await fetch(url)
    const tours = await response.json()
     setTours(tours)
   } catch (error) {
    console.log(error)
   } finally {
    setLoading(false)
   }
 }
 useEffect(()=>{fetchTours()},[])
 if (tours.length === 0){
  return<button className='btn' onClick={fetchTours}>refresh</button>
 }
 if(loading)return<main className='loading'><Loading /></main>
  return <main>
    <Tours tours={tours} removeTour={removeTour}/>
  </main> 
}

export default App
 