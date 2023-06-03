import Headings from "../../../Components/Headings/Headings";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div>
            <Headings
                subHeading={'What our Clients say'}
                heading={'Testimonials'}></Headings>
            <div className="md:max-w-[1320px] mx-auto">
                <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className="m-20">
                                <Rating className="mx-auto"
                                    style={{ maxWidth: 180 }}
                                    value={review.rating}
                                    readOnly
                                />
                                <FaQuoteLeft className="text-6xl text-black my-4 mx-auto" />
                                <p className="text-center">{review.details}</p>
                                <h1 className="text-center text-3xl text-yellow-600">{review.name}</h1>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;