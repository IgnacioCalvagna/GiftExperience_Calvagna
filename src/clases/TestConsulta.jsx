import React, { useEffect, useState } from 'react'
import { doc, getDoc,getFirestore} from 'firebase/firestore'
const TestConsulta = () => {

    const [prod, setProd] = useState([])

    useEffect(() => {
      
        const db = getFirestore()

        const productos = doc(db,'productos','QYreqYK8X8tlKMHfWM8r')
        getDoc(productos).then(res=>{
            if(res.data()){

            }
        })


    }, [])
    


  return (
    <>
    
        <h1>algooo</h1>








    </>
  )
}

export default TestConsulta
