"use client"
import { SwiperSlide } from "swiper/react";
import InnerContainer from "./InnerContainer";
import SwiperZoom from "./SwiperZoom";
import { Button } from "./ui/button";
import TestimoniBox from "./TestimoniBox";
import Link from "next/link";
import useGetTestimoni from "@/app/hooks/useGetTestimoni";
import { Skeleton } from "./ui/skeleton";

export default function Testimoni() {
    const [data_testi, loading_testi, fetchData]: any = useGetTestimoni({ hit_first: true });

    return (
        <>
            <div className="px-4 py-20 bg-gradient-to-br from-sky-700 to-sky-500 flex flex-col gap-10 text-center">
                <h1 className="text-white font-bold text-3xl">Menurut para pelanggan, kami...</h1>
                <div>

                    <SwiperZoom>
                        {
                            loading_testi ? Array.from({ length: 3 }).map((el, i: number) => {
                                return <SwiperSlide key={i}><Skeleton className="h-[333px] w-[500px]" /></SwiperSlide>
                            }) : data_testi.map((el: any, i: number) => {
                                return <SwiperSlide key={i}>
                                    <TestimoniBox data={el} />
                                </SwiperSlide>
                            })
                        }
                    </SwiperZoom>
                </div>
                <InnerContainer>
                    <Link href={"/testimoni"}>
                        <Button className="w-full bg-[#2684d9] hover:bg-[#2684d9] text-white rounded-full py-7 text-sm" size={"lg"}>Tulis Ulasan</Button>
                    </Link>
                </InnerContainer>
            </div>
        </>
    )
}