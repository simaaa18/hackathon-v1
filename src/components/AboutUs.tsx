import InnerContainer from "./InnerContainer";

export default function AboutUs() {
    return (
        <>
            <div className="w-full bg-gradient py-20">
                <InnerContainer>
                    <div className="grid grid-cols-2 gap-20">
                        <div className="flex-1">
                            <div className="bg-[url('/aboutus.jpeg')] h-[700px] w-full bg-center bg-cover rounded-[50px]"></div>
                        </div>
                        <div className="flex flex-col gap-20 self-center">
                            <h1 className="text-4xl text-white font-bold">Tentang Kami</h1>
                            <p className="text-lg text-white font-medium">Homespot adalah platform teknologi berbasis web base dengan sistem one-stop housing marketplace. Homespot menghubungkan antara pembeli, penjual dan penyewa dengan masyarakat yang membutuhkan layanan informasi jual beli dan memudahkan untuk memperoleh hunian sesuai dengan impian.</p>
                        </div>
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}