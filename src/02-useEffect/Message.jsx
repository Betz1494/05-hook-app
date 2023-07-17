import { useState, useEffect } from "react"

export const Message = () => {
    const [coords, setCoords] = useState({x:0, y:0});

    const onMouseMove = ({ x, y }) => { //destructurin event y obtenemos x,y
        //const coords = { x, y };
        setCoords({ x, y });
        console.log({ x, y });
    }

    useEffect(() => {
      //console.log('Componente Montado')
      window.addEventListener('mousemove', onMouseMove);
    
      return () => {
       // console.log('Componente UnMounted')
       window.removeEventListener('mousemove', onMouseMove);
      }
    }, [])
    

  return (
    <>
            <h3>¡Usuario ya existe!</h3>
            { JSON.stringify(coords) }
    </>
  )
}
