import Link from "next/link";
import { CaraouselBox } from "./CaraouselBox";
import { ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import InnerContainer from "./InnerContainer";

export default function Banner2() {
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-row w-full py-9">
                    <div className="w-1/2 bg-gradient rounded-r-[50px] pl-12 pr-48 pt-10 pb-7 min-h-[450px]">
                        <div className="flex flex-col gap-10">
                            <h1 className="text-3xl font-bold text-white">Properti Baru disekitarmu</h1>
                            <p className="text-white">Rekomendasi pilihan kami untukmu. Dari rumah minimalis, ruko strategis, sampai apartemen modern semua tersedia.</p>
                            <Link href={"#"} className="flex text-white text-sm gap-1 hover:underline">
                                Lihat semua <ChevronRight className="text-white self-center" size={16} />
                            </Link>
                        </div>
                    </div>
                    <div className="w-2/3 -ml-10 self-center">
                        <CaraouselBox />
                    </div>
                </div>
                <InnerContainer>
                    <Link href={"/wishlist"}><Button className="w-full bg-[#DEE9F2] text-[#858585] hover:bg-[#cfe1ef] rounded-full py-7 text-md" size={"lg"}>Daftar Keinginan</Button></Link>
                </InnerContainer>
            </div>
        </>
    )
}