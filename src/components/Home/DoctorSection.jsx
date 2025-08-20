import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Pagination, Navigation } from "swiper/modules";
import { RxArrowTopRight } from "react-icons/rx";
import { DoctorData } from "../../hooks/DoctorSectionData";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";
import { Link } from 'react-router-dom';

function DoctorSection() {
    const swiperRef = useRef(null);

    const handleNextClick = () => {
        if (swiperRef.current) {
            if (swiperRef.current.swiper.isEnd) {
                swiperRef.current.swiper.slideTo(0); // Go to the start
            } else {
                swiperRef.current.swiper.slideNext(); // Move to the next slide
            }
        }
    };

    const handlePrevClick = () => {
        if (swiperRef.current) {
            if (swiperRef.current.swiper.isBeginning) {
                swiperRef.current.swiper.slideTo(swiperRef.current.swiper.slides.length - 1); // Go to the end
            } else {
                swiperRef.current.swiper.slidePrev(); // Move to the previous slide
            }
        }
    };

    return (
        <div id="doctor-section" className="bg-gray-400 flex items-center justify-center flex-col max-w-full mx-auto px-4 sm:px-6 lg:px-8 mt-6">
            <h1 className="text-gray-800 text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-bold mb-6 mt-6">
                OUR DOCTORS
            </h1>

            <div className="w-full max-w-[1100px] mx-auto relative">
                <Swiper
                    ref={swiperRef}
                    breakpoints={{
                        340: { slidesPerView: 2, spaceBetween: 15 },
                        700: { slidesPerView: 3, spaceBetween: 15 },
                    }}
                    freeMode={true}
                    pagination={{ clickable: true }}
                    modules={[FreeMode, Pagination, Navigation]}
                    className="w-full"
                >
                    {DoctorData.map((Item) => (
                        <SwiperSlide key={Item.title}>
                            <Link to={Item.path} className="flex flex-col gap-4 mb-10 group relative shadow-lg text-white rounded-xl px-4 py-4 sm:px-6 sm:py-6 w-full max-w-[210px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-[350px] overflow-hidden cursor-pointer border transition-transform duration-300 transform hover:scale-105 hover:shadow-lg bg-green-500 backdrop-blur-md flex-grow">
                                <div className="flex justify-center">
                                    <img
                                        src={Item.backgroundImage}
                                        alt={Item.title}
                                        className="w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] lg:w-[150px] lg:h-[150px] rounded-full object-cover border-4 border-white mb-4"
                                    />
                                </div>
                                <div className="relative flex flex-col gap-2 mt-auto flex-1">
                                    <h1 className="text-sm sm:text-[16px] md:text-lg lg:text-[18px] font-bold text-center">{Item.title}</h1>
                                    <p className="text-xs sm:text-sm md:text-[16px] lg:text-[18px] text-center overflow-hidden text-ellipsis">
                                        {Item.content}
                                    </p>
                                </div>
                                <RxArrowTopRight className="absolute bottom-15 left-5 w-[25px] h-[25px] sm:w-[30px] sm:h-[30px] text-gray group-hover:text-blue-500 group-hover:rotate-45 duration-100" />
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-between absolute top-24 md:top-24 lg:top-32 -left-6 md:-left-8 lg:-left-9 -right-6 md:-right-8 lg:-right-9 px-4 transform -translate-y-1/2 z-20">
                    <button
                        className="bg-[#ffffff] text-backgroundColor w-10 h-8 md:w-12 md:h-9 lg:w-14 lg:h-12 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#ade9dc] hover:scale-105 transition-transform duration-300"
                        onClick={handlePrevClick}
                    >
                        <FaArrowLeft size={20} />
                    </button>
                    <button
                        className="bg-[#ffffff] text-backgroundColor w-10 h-8 md:w-12 md:h-9 lg:w-14 lg:h-12 rounded-lg shadow-lg flex items-center justify-center hover:bg-[#ade9dc] hover:scale-105 transition-transform duration-300"
                        onClick={handleNextClick}
                    >
                        <FaArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default DoctorSection;
