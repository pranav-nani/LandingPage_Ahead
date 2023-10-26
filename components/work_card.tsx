import React from 'react'

interface WorkCardProps {
    heading: string;
    text: string;
}

const Work_card: React.FC<WorkCardProps> = (props) => {
    return (
      <div className='w-[55%] p-7 bg-white rounded-xl mb-5'>
          <p className='font-bold'>{props.heading}</p>
          <p className='text-[12px] pt-3 text-[#555558]'>{props.text}</p>
      </div>
    );
}

export default Work_card