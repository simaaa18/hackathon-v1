import Link from "next/link";
import InnerContainer from "./InnerContainer";

export default function Footer() {
    return (
        <>
            <div className="w-full py-14 mt-auto">
                <InnerContainer>
                    <div className="grid grid-cols-5 gap-3">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-[#354764]">Kantor Pusat</h1>
                            <p>PT. Bringin Inti Teknologi (BIT) Intiland Tower Lt 12A Jalan Jenderal Sudirman No. 32 Jakarta Pusat 10220 Indonesia</p>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-[#354764]">Dukungan</h1>
                            <div className="flex flex-col gap-1">
                                <Link href={"#"} className="underline">Kebijakan privasi</Link>
                                <Link href={"#"} className="underline">Syarat dan Ketentuan</Link>
                            </div>
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-[#354764]">Hubungi Kami</h1>
                            <div className="flex flex-col gap-1">
                                <p><b className="font-semibold text-[#354764]">Whatsapp:</b> <Link className="hover:underline" href={"tel:+6281389001162"}>+62 813-8900-1162</Link></p>
                                <p><b className="font-semibold text-[#354764]">Email:</b> <Link className="hover:underline" href={"mailto:support@homespot.id"}>support@homespot.id</Link></p>
                            </div>

                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-[#354764]">Homespot by:</h1>
                            <img src="/bit.png" alt="" className="w-[170px]" />
                        </div>
                        <div className="flex flex-col gap-5">
                            <h1 className="text-2xl font-bold text-[#354764]">Powered by:</h1>
                            <img src="/bri.png" className="w-[130px]" alt="" />
                        </div>
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}