import React from 'react'

const Carouselbg = () => {
  return (
<div
  id="carouselExampleSlidesOnly"
  className="relative"
  data-twe-carousel-init
  data-twe-ride="carousel">
  {/* <!--Carousel items--> */}
  <div
    className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
    {/* <!--First item--> */}
    <div
      className="relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item
      data-twe-carousel-active>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
        className="block w-full"
        alt="Wild Landscape" />
    </div>
    {/* <!--Second item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
        className="block w-full"
        alt="Camera" />
    </div>
    {/* <!--Third item--> */}
    <div
      className="relative float-left -mr-[100%] hidden w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none"
      data-twe-carousel-item>
      <img
        src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
        className="block w-full"
        alt="Exotic Fruits" />
    </div>
  </div>
</div>
  )
}

export default Carouselbg