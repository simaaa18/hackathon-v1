import InnerContainer from "./InnerContainer";
import { NavbarItem } from "./NavbarItem";
import { Button } from "./ui/button";

export default function Navbar({ className = "" }: { className?: string }) {
    return (
        <>
            <div className="border-b sticky top-0 bg-background p-3 py-4 z-[99] shadow-sm">
                <InnerContainer>
                    <div className="flex justify-between">
                        <div>
                            <img src="/logo.png" className="w-[180px]" alt="" />
                        </div>
                        <div>
                            <NavbarItem />
                        </div>
                        <div className="flex gap-3">
                            <Button size={"sm"} variant={"outline"}>Masuk</Button>
                            <Button size={"sm"}>Daftar</Button>
                        </div>
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}