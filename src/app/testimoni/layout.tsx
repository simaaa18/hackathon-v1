import Navbar from "@/components/Navbar";

export default function TestimoniLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="relative">
                <Navbar />
                {children}
            </div>
        </>
    )
}