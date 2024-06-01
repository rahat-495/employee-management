
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

const Banner = () => {
    return (
        <div className='mb-16'>
            <Swiper
                className="mySwiper"
                spaceBetween={0}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <div className="hero min-h-[70vh] rounded-b-lg" style={{backgroundImage: 'url(https://assets-global.website-files.com/627a7356ad04a22fd1133827/650849544a05f67c8cac86ec_Panenco%20at%20Healthcare%20Excellence%20Through%20Technology.jpg)'}}>
                        <div className="hero-overlay bg-opacity-30 rounded-b-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-[70vh] rounded-b-lg" style={{backgroundImage: 'url(https://assets-global.website-files.com/627a7356ad04a22fd1133827/650849544a05f67c8cac86ec_Panenco%20at%20Healthcare%20Excellence%20Through%20Technology.jpg)'}}>
                        <div className="hero-overlay bg-opacity-30 rounded-b-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-[70vh] rounded-b-lg" style={{backgroundImage: 'url(https://assets-global.website-files.com/627a7356ad04a22fd1133827/650849544a05f67c8cac86ec_Panenco%20at%20Healthcare%20Excellence%20Through%20Technology.jpg)'}}>
                        <div className="hero-overlay bg-opacity-30 rounded-b-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-md">
                                <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                                <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                                <button className="btn btn-primary">Get Started</button>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
