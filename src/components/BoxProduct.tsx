import { Heart } from "lucide-react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

export default function BoxProduct({ width = "w-[350px]" }: { width?: string }) {
    return (
        <>
            <Card className={cn(`${width} p-0 hover:-translate-y-1 cursor-pointer transition-all duration-500`)}>
                <CardHeader className="!p-0">
                    <div className="relative">
                        <div className="absolute top-0 flex justify-between p-3 w-full">
                            <div>
                                <button className="bg-white flex gap-1 font-medium p-1 rounded-full px-2 text-xs"><img src="/icons/view_in_ar.png" width={20} /> <span className="self-center">Virtual 360</span></button>
                            </div>
                            <div>
                                <Heart className="cursor-pointer" />
                            </div>
                        </div>
                        <div className="w-full h-[233px] bg-[url('/2.jpg')] bg-cover bg-center rounded-t-2xl"></div>
                    </div>
                </CardHeader>
                <CardContent className="flex flex-col gap-3 p-3">
                    <div>
                        <h3 className="font-bold text-xl">Permata Hijau Mansion</h3>
                        <p className="text-sm mt-1 text-muted-foreground font-medium">DKI Jakarta</p>
                    </div>
                    <h3 className="font-medium text-lg">Rp 3.4 M - Rp 3.8 M</h3>
                    <div className="flex gap-4">
                        <div className="flex gap-2">
                            <Badge className="bg-[#e8e8e8] hover:bg-[#e8e8e8]"><img src="/icons/bed.png" width={20} alt="" /></Badge>
                            <p className="text-md self-center font-medium">4</p>
                        </div>
                        <div className="flex gap-2">
                            <Badge className="bg-[#e8e8e8] hover:bg-[#e8e8e8]"><img src="/icons/bathtub.png" width={20} alt="" /></Badge>
                            <p className="text-md self-center font-medium">4</p>
                        </div>
                        <div className="flex gap-2">
                            <Badge className="bg-[#e8e8e8] hover:bg-[#e8e8e8]"><img src="/icons/square_foot.png" width={20} alt="" /></Badge>
                            <p className="text-md self-center font-medium">4</p>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}