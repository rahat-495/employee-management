
import { Rating } from "@material-tailwind/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useQuery } from "@tanstack/react-query";
import useAxiosCommon from "../../Hooks/useAxiosCommon";

const Testimonial = () => {

    const axiosCommon = useAxiosCommon() ;

    const {data : review = []} = useQuery({
        queryKey : ['review'] ,
        queryFn : async () => {
            const {data} = await axiosCommon.get('https://assignment-12-server-omega-three.vercel.app/reviews') ;
            return data ;
        }
    })

    return (
        <div className="mt-40 w-full overflow-x-hidden">

            <h1 className="gro text-5xl text-center font-semibold">Testimonials</h1>

            <div className="hidden lg:flex overflow-x-hidden">
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

            <div className="flex lg:hidden md:hidden overflow-x-hidden">
            <Swiper
                breakpoints={{
                    576: {
                    width: 576,
                    slidesPerView: 1,
                    },
                    768: {
                    width: 768,
                    slidesPerView: 1,
                    },
                }}
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    review.map((slide) => <SwiperSlide key={slide._id} className="flex flex-col items-center justify-center px-36 my-14">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-center gro text-orange-600 font-semiboldm text-xl">{slide.name}</p>
                            <p className="text-center gro w-4/5 mx-auto mt-5">{slide.details.slice(0,57) + '...'}</p>
                            <Rating className="mx-auto flex items-center mt-2 justify-center text-3xl" value={slide.rating} readonly />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>

            <div className="hidden md:flex lg:hidden overflow-x-hidden">
            <Swiper
                breakpoints={{
                    576: {
                    width: 576,
                    slidesPerView: 1,
                    },
                    768: {
                    width: 768,
                    slidesPerView: 1,
                    },
                }}
                pagination={{
                dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    review.map((slide) => <SwiperSlide key={slide._id} className="flex flex-col items-center justify-center px-36 my-14">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <p className="text-center gro text-orange-600 font-semiboldm text-xl">{slide.name}</p>
                            <p className="text-center gro w-4/5 mx-auto mt-5">{slide.details}</p>
                            <Rating className="mx-auto flex items-center mt-2 justify-center text-3xl" value={slide.rating} readonly />
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
            </div>

        </div>
    );
};

export default Testimonial;
