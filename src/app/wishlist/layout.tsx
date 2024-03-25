import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function WishListLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    )
}