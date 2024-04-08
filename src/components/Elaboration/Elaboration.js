import React from 'react'
import elaboration from './Images/elaboration.jpg'
import tilde from './Images/tilde.png'
import * as stylesMM from '../stylesMM'



const Elaboration = () => {
  return (

    <div className='container grid h-auto max-w-full py-5 md:px-5 grid-row-2 lg:grid lg:grid-cols-2 lg:gap-x-5'>

        <div className='flex flex-col mx-2 container-text gap-y-5 md:mx-0'>        

          <div className="flex flex-wrap font-sans:'Roboto' text-xl font-semibold container-title md:text-2xl xl:text-3xl">

            <p className="pr-2 text-green-700 pb-7">Elaboration of</p><p>Our products</p>
            
          </div>          

          <div className='flex flex-wrap mb-3 containter-text gap-y-6'>

            <div className='flex flex-nowrap '>

            <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p className='text-justify'>Our mission is to make you happy and help our community. How?</p>               

            </div>  

            <div className='flex flex-nowrap '>

              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde" /><p className='text-justify'>Making ice creams that you will enjoy eating like nothing else in the world.</p>                       

            </div>        

            <div className='flex flex-nowrap '>
              
              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Creating unique flavors that surprise everyone who tries them.</p>            

            </div>
         
            <div className='flex flex-nowrap'>
              
              <img className='w-6 h-6 pr-2 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Being inclusive by creating alternatives for everyone, from people with food intolerances to those who for ethical reasons do not want to eat products made with animal components..</p>                        

            </div>           

            <div className='flex flex-nowrap'>
              
              <img className='pr-2 w-7 h-7 lg:w-10 lg:h-10' src={tilde} alt="tilde"/><p className='text-justify'>Being inclusive by creating alternatives for everyone, from people with food intolerances to those who for ethical reasons do not want to eat products made with animal components..</p>            

            </div>

          </div>       

          <div className='mb-4'>

            <button className={stylesMM.CARD_BUTTON} >Discover Our Products</button>

          </div>

        </div>

        <div className='container-image'>

          <img className='object-cover object-center w-11/12 h-5/6'src={elaboration} alt="Preparation of our Products" />

        </div>        

    </div>

  )
}

export default Elaboration