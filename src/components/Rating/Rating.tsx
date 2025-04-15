import { useState } from 'react'

import star from '../../assets/images/icon-star.svg'
import ratingPicture from '../../assets/images/illustration-thank-you.svg'


export const Rating: React.FC = () => {
   const [grade, setGrade] = useState<number>(0)
   const [submitted, setSubmited] = useState<boolean>(false)

   const ratings = [1, 2, 3, 4, 5]


   return (
      <>
         {!submitted ?
            (
               <main className="bg-gray-900 rounded-lg mx-7 my-7 max-w-lg px-7 py-9">
                  <img
                     src={star}
                     alt="Decorative Star"
                     className='inline-block bg-white/5 rounded-full p-3'
                  />

                  <h1 className='text-2xl text-white font-bold my-5'>How did we do?</h1>

                  <p className='text-white opacity-70 leading-6'>
                     Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
                  </p>

                  <div className='flex flex-wrap my-7 justify-center'>
                     {ratings.map((rate => (
                        <button
                           key={rate}
                           className={`btn ${grade === rate && "!bg-white !text-gray-950 !opacity-100"}`}
                           type='button'
                           onClick={() => setGrade(rate)}
                           aria-label={`Rate: ${rate} out of 5`}
                           aria-pressed={grade === rate}
                        >
                           {rate}
                        </button>
                     )))}
                  </div>

                  <button
                     className={`uppercase text-center w-full bg-primary-500 rounded-3xl font-semibold py-2 hover:bg-white hover:text-gray-950 transition-colors duration-300 ease-in-out ${grade === 0 && "opacity-10 cursor-not-allowed"}`}
                     type='submit'
                     onClick={() => setSubmited(true)}
                     disabled={grade === 0}
                  >
                     submit
                  </button>
               </main>
            ) : (
               <main className='bg-gray-900 rounded-lg mx-7 my-7 max-w-lg px-7 py-9'>
                  <img
                     className='block mx-auto'
                     src={ratingPicture}
                     alt="Credit card machine printing paper and simulating a card swipe."
                  />

                  <h2 className='text-primary-500 bg-white/5 opacity-80 rounded-xl mx-auto my-7 w-48 py-1 px-4 text-center'>
                     You selected {grade} out of 5
                  </h2>

                  <p className='text-3xl font-medium text-white text-center my-3'>Thank you!</p>

                  <p className='text-white text-center opacity-70 font-light leading-6'>
                     We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
                  </p>
               </main>
            )}
      </>
   )
}
