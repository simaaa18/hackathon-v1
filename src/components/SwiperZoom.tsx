"use client"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { Navigation, EffectCoverflow, Pagination } from 'swiper/modules';
import TestimoniBox from './TestimoniBox';
import { Icon } from '@iconify/react/dist/iconify.js';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef } from 'react';

export default function SwiperZoom({ children, show_navigation = true }: { children: React.ReactNode, show_navigation?: boolean }) {
    const swiperRef: any = useRef();

    return (
        <>
            <div className='flex justify-between gap-10'>
                {
                    show_navigation && <div className='self-center'>
                        <ChevronLeft className='text-white cursor-pointer' style={{ userSelect: "none" }} onClick={() => swiperRef.current?.slidePrev()} size={80} />
                    </div>
                }

                <Swiper navigation={true} className="mySwiper w-full" effect='coverflow'
                    coverflowEffect={{
                        rotate: 0,
                        stretch: -10,
                        depth: 50,
                        modifier: 4,
                        slideShadows: false,
                    }}
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    onBeforeInit={(swiper: any) => {
                        swiperRef.current = swiper;
                    }}
                    grabCursor={true}
                    centeredSlides={true}
                    modules={[EffectCoverflow, Pagination, Navigation]}>
                    {children}
                </Swiper>
                {
                    show_navigation && <div className='self-center'>
                        <ChevronRight className='text-white cursor-pointer' style={{ userSelect: "none" }} onClick={() => swiperRef.current?.slideNext()} size={80} />
                    </div>
                }

            </div>
        </>
    )
}