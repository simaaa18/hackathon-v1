"use client"
import { SwiperSlide } from "swiper/react";
import SwiperZoom from "./SwiperZoom";

export default function Banner3() {
    return (
        <>
            <div className="my-24">
                <SwiperZoom show_navigation={false}>
                    {
                        Array.from({ length: 6 }).map((el, i: number) => {
                            return <SwiperSlide key={i}>
                                <img src="/banner.png" className="rounded-lg" alt="" />
                            </SwiperSlide>
                        })
                    }
                </SwiperZoom>
            </div>
        </>
    )
}