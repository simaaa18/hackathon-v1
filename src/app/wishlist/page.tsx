import BoxProduct from "@/components/BoxProduct";
import InnerContainer from "@/components/InnerContainer";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function WishListPage() {
    return (
        <>
            <InnerContainer className="min-h-screen my-16">
                <div className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Button size={"icon"} variant={"ghost"}>
                            <Link href={"/"}>
                                <ChevronLeft size={30} />
                            </Link>
                        </Button>
                        <p className="text-2xl font-bold self-center">Daftar Keinginan</p>
                    </div>

                    <div className="grid grid-cols-3 gap-10 mt-20">
                        {
                            Array.from({ length: 10 }).map((el, i: number) => {
                                return <BoxProduct width="w-full" key={i} />
                            })
                        }
                    </div>
                </div>
            </InnerContainer>
        </>
    )
}