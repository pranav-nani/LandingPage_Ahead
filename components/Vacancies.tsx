import React from 'react'
import { vacancyData } from '@/pages/vacancy'
import Vacancy_card from '@/components/Vacancy_card'

const Vacancies = () => {
  return (
    <div className='w-[70%] ml-auto mr-auto pt-20 pb-20'>
        <p className='text-[50px] font-bold pb-10'>Open vacanies</p>
        <div className='flex justify-between'>
          {vacancyData.map((content, index) =>(
            <Vacancy_card 
              key={index}
              heading={content.heading}
              one={content.one}
              two={content.two}
              three={content.three}
            />
          ))}
        </div>
    </div>
  )
}

export default Vacancies

        