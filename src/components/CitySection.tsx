import Link from "next/link";
import InnerContainer from "./InnerContainer";
import BoxProduct from "./BoxProduct";
import { ChevronRight } from "lucide-react";
import CityBox from "./CityBox";

export default function CitySection() {
    return (
        <>
            <InnerContainer>
                <div className="flex flex-col gap-8 mt-40 mb-28">
                    <div className="flex justify-between w-full">
                        <h3 className="font-bold text-2xl">Properti Berdasarkan Kota</h3>
                        <Link href={""} className="flex text-sm self-center hover:underline">Lihat Semua <ChevronRight className="text-muted-foreground self-center" size={18} /></Link>
                    </div>
                    <div className="grid grid-cols-4 gap-5">
                        <CityBox />
                        <CityBox />
                        <CityBox />
                        <CityBox />
                    </div>
                </div>
            </InnerContainer>
        </>
    )
}