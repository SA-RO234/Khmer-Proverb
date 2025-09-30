import React from 'react'
import Itemcard from './item-card';

const Category_Container = () => {
  return (
    <div className='wfull pb-10 '>
      <h1 className='text-3xl font-righteous pb-5 font-bold text-pink'>Category</h1>
      <div className='w-full flex flex-wrap gap-5'>
          <Itemcard />
          <Itemcard />
          <Itemcard />
           <Itemcard />
            <Itemcard />
             <Itemcard />
              <Itemcard />
               <Itemcard />
                <Itemcard />
                 <Itemcard />
                  <Itemcard />
      </div>
    </div>
  )
}

export default Category_Container;