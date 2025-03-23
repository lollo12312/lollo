import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './1.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { Pagination, Navigation, EffectCoverflow, Autoplay } from 'swiper/modules';

const images = [
    'https://img.redocn.com/sheji/20231213/xingganmeinv_13189106.jpg',
    'https://img-baofun.zhhainiao.com/fs/mobile/live/b257ba33be3ba4b4c6084a016c69417d_preview.jpg',
    'https://img-baofun.zhhainiao.com/fs/mobile/live/b257ba33be3ba4b4c6084a016c69417d_preview.jpg',
    'https://img-baofun.zhhainiao.com/fs/mobile/live/b257ba33be3ba4b4c6084a016c69417d_preview.jpg',
    'https://img-baofun.zhhainiao.com/fs/mobile/live/b257ba33be3ba4b4c6084a016c69417d_preview.jpg',
    'https://img-baofun.zhhainiao.com/fs/mobile/live/b257ba33be3ba4b4c6084a016c69417d_preview.jpg'
];

const AdvancedSwiper = () => {
    const [showNavButtons, setShowNavButtons] = useState(false);

    return (
        <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={2}
            spaceBetween={10}
            initialSlide={1}
            coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            autoplay={{
                delay: 1000,
                disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                hiddenClass: showNavButtons ? '' : 'hidden',
            }}
            loop={true}
            modules={[Pagination, Navigation, EffectCoverflow, Autoplay]}
            className="mySwiper"
            onMouseEnter={() => setShowNavButtons(true)}
            onMouseLeave={() => setShowNavButtons(false)}
        >
            {images.map((image, index) => (
                <SwiperSlide key={index}>
                    <img src={image} alt={`Slide ${index + 1}`} />
                </SwiperSlide>
            ))}
            <div className={`swiper-button-next ${showNavButtons ? '' : 'hidden'}`}></div>
            <div className={`swiper-button-prev ${showNavButtons ? '' : 'hidden'}`}></div>
        </Swiper>
    );
};

export default AdvancedSwiper;    