import React from 'react'
import { useRef, useEffect, useState} from 'react'
import gsap from 'gsap'
import "./App.css"

const App = () => {

  const [direction, setDirection] = useState(1)
   const position = direction<0 ? '0%' : '-131%';
   

  const stripe = useRef(null);
  useEffect( () => {

    gsap.to(stripe.current,{
      x:`${50 * direction}%`,
      duration:10,
      repeat:-1,
      ease:'linear',

    })

  },[])

  // window.addEventListener('scroll',()=> {
  //   let currentscroll = window.scrollY + 1;
  //   let current = window.scrollY -1;
  //   if(currentscroll > currentscroll)
  //   {
  //     direction=1;
  //   }
  //   else{
  //     direction=-1;
  //   }
  //   console.log(currentscroll,window.scrollY,current);
  // })



  return (
    <div className='main'>

      <div className="page1">
        <div ref={stripe} className='stripe' style={{left:position}}>
          <h1>- dennis snellenberg </h1>
          <h1>- dennis snellenberg </h1>
        </div>
      </div>

      <div className='page2'>

      </div>
    </div>
  )
}

export default App