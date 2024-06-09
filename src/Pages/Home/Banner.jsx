
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
                            <div className="max-w-lg">
                                
                                <h1 className="mb-5 text-5xl font-bold">Celebrating 10 Years of Excellence</h1>
                                <p className="mb-5">A decade of innovation, growth, and success. Thank you for being part of our journey!</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-[70vh] rounded-b-lg" style={{backgroundImage: 'url(https://img.freepik.com/premium-photo/young-man-white-shirt-giving-thumbs-up-sign_889056-253853.jpg?size=626&ext=jpg)'}}>
                        <div className="hero-overlay bg-opacity-30 rounded-b-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                
                                <h1 className="mb-5 text-5xl font-bold">Over 1 Million Happy Customers</h1>
                                <p className="mb-5">We are proud to have served over a million satisfied customers around the globe.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="hero min-h-[70vh] rounded-b-lg" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D)'}}>
                        <div className="hero-overlay bg-opacity-30 rounded-b-lg"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-lg">
                                
                                <h1 className="mb-5 text-5xl font-bold">Award-Winning Solutions</h1>
                                <p className="mb-5">Recognized for our outstanding contributions to industry innovation and customer satisfaction.</p>
                                
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    );
};

export default Banner;
