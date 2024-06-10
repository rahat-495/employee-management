
import { Rating } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const Testimonial = () => {

    const {data : review = []} = useQuery({
        queryKey : ['review'] ,
        queryFn : async () => {
            const {data} = await axios.get('http://localhost:5555/reviews') ;
            return data ;
        }
    })

    return (
        <div className="mt-40">

            <h1 className="gro text-5xl text-center font-semibold">Testimonials</h1>

            <div className="">
                <Swiper
                    navigation={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    className="mySwiper flex flex-col items-center justify-center  "
                >

                    {
                        review.map((slide) => <SwiperSlide key={slide._id} className="flex flex-col items-center justify-center px-36 my-14">
                            <p className="text-center gro text-orange-600 font-semiboldm text-xl">{slide.name}</p>
                            <p className="text-center gro w-1/2 mx-auto mt-5">{slide.details}</p>
                            <Rating className="mx-auto flex items-center mt-2 justify-center text-3xl" value={slide.rating} readonly />
                        </SwiperSlide>)
                    }

                </Swiper>
            </div>
        </div>
    );
};

export default Testimonial;
