import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

import img1 from "../../../assets/home/slide1.jpg"
import img2 from "../../../assets/home/slide2.jpg"
import img3 from "../../../assets/home/slide3.jpg"
import img4 from "../../../assets/home/slide4.jpg"
import img5 from "../../../assets/home/slide5.jpg"
import Headings from "../../../Components/Headings/Headings";


const SlidCat = () => {
    return (
        <div className="max-w-[1320px] mx-auto mb-8">
            <Headings
            heading={"ORDER ONLINE"}
            subHeading={"From 11:00am to 10:00pm"}
            ></Headings>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide><img src={img1} alt="" />
                <p className="md:text-3xl text-white -mt-20 uppercase text-center">Salads</p>
                </SwiperSlide>
                <SwiperSlide><img src={img2} alt="" />
                <p className="md:text-3xl text-white -mt-20 uppercase text-center">Soups</p>
                </SwiperSlide>
                <SwiperSlide><img src={img3} alt="" />
                <p className="md:text-3xl text-white -mt-20 uppercase text-center">Pizzas</p>
                </SwiperSlide>
                <SwiperSlide><img src={img4} alt="" />
                <p className="md:text-3xl text-white -mt-20 uppercase text-center">Desserts</p>
                </SwiperSlide>
                <SwiperSlide><img src={img5} alt="" />
                <p className="md:text-3xl text-white -mt-20 uppercase text-center">Salads</p>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SlidCat;