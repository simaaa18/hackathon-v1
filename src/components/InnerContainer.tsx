import { cn } from "@/lib/utils";

export default function InnerContainer({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <>
            <div className={cn("px-[113px]", className)}>
                {children}
            </div>
        </>
    )
}