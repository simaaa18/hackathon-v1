import Link from "next/link";
import InnerContainer from "./InnerContainer";
import BoxProduct from "./BoxProduct";
import { ChevronRight } from "lucide-react";

export default function PropertiPopuler() {
    return (
        <>
            <InnerContainer>
                <div className="flex flex-col gap-8 my-24">
                    <div className="flex justify-between w-full">
                        <h3 className="font-bold text-2xl">Properti terpopuler</h3>
                        <Link href={""} className="flex text-sm self-center">Lihat Semua <ChevronRight className="text-muted-foreground self-center" size={18} /></Link>
                    </div>
                    <div className="grid grid-cols-3 gap-5">
                        <BoxProduct width="w-full" />
                        <BoxProduct width="w-full" />
                        <BoxProduct width="w-full" />
                    </div>
                </div>
            </InnerContainer>
        </>
    )
}