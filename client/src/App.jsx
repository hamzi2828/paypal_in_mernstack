import axios from 'axios'

function App() {

  const HandleSubmit = async (e) =>{
    e.preventDefault()

    let res = await axios.post('http://localhost:8000/payment' )

    console.log(res)
    if(res && res.data){

      let link = res.data.links[1].href
      window.location.href = link
      
    }

  }

  return (
    <>
    <button onClick={HandleSubmit}>Buy Now !</button>
    </>
  )
}

export default App
