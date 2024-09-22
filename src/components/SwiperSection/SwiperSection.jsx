import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//local css
import "./SwiperSection.css"

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const SwiperSection = () => {
    const [swiperRef, setSwiperRef] = useState(null);
  
  return (
    <>
    <Swiper
      onSwiper={setSwiperRef}
      slidesPerView={3}
      centeredSlides={true}
      spaceBetween={30}
      pagination={{
        type: 'fraction',
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide><div className="slideSwiper">
        <div className="sect1">
            <div className="imgsect">
                <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="descSect">
                <h2>Robert A. Voltaire</h2>
                <p>Store Link</p>
                <div className="stars">
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="sect2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non saepe impedit vitae at odit ex repellat perferendis dolorem debitis quas, nostrum eligendi optio incidunt tempora voluptatum officia beatae possimus!</p>
        </div>
        </div></SwiperSlide>
      <SwiperSlide>
      <div className="slideSwiper">
        <div className="sect1">
            <div className="imgsect">
                <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="descSect">
                <h2>Robert A. Voltaire</h2>
                <p>Store Link</p>
                <div className="stars">
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="sect2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non saepe impedit vitae at odit ex repellat perferendis dolorem debitis quas, nostrum eligendi optio incidunt tempora voluptatum officia beatae possimus!</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="slideSwiper">
        <div className="sect1">
            <div className="imgsect">
                <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="descSect">
                <h2>Robert A. Voltaire</h2>
                <p>Store Link</p>
                <div className="stars">
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="sect2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non saepe impedit vitae at odit ex repellat perferendis dolorem debitis quas, nostrum eligendi optio incidunt tempora voluptatum officia beatae possimus!</p>
        </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><div className="slideSwiper">
        <div className="sect1">
            <div className="imgsect">
                <img src="https://plus.unsplash.com/premium_photo-1689977968861-9c91dbb16049?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8fDA%3D" alt="" />
            </div>
            <div className="descSect">
                <h2>Robert A. Voltaire</h2>
                <p>Store Link</p>
                <div className="stars">
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                    <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" /> <img src="https://printify.com/pfh/media/star-S46SZESO.svg" alt="" />
                </div>
            </div>
        </div>
        <div className="sect2">
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum non saepe impedit vitae at odit ex repellat perferendis dolorem debitis quas, nostrum eligendi optio incidunt tempora voluptatum officia beatae possimus!</p>
        </div>
        </div></SwiperSlide>
    </Swiper>

  </>
  )
}

export default SwiperSection