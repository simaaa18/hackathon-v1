import { URL_BE_BASE } from "@/lib/utils";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Card, CardContent } from "./ui/card";
import { Rating } from 'react-simple-star-rating'

export default function TestimoniBox({ data }: { data: any }) {

    return (
        <>
            <Card className="h-[333px]">
                <CardContent className="p-7 text-start h-full">
                    <div className="flex flex-col gap-5 h-full">
                        <div className="ranting">
                            <Rating initialValue={data?.rating || 0} readonly={true} size={30} fillColor="#ffe500" />
                        </div>
                        <p className="font-medium text-lg">{data?.message}</p>

                        <div className="grid content-end h-full">
                            <div className="flex gap-3">
                                <img src={URL_BE_BASE + data?.image} className="w-[85px] rounded-full" alt="" />
                                <div className="flex flex-col gap-1 self-center">
                                    <h3 className="text-xl font-bold">{data?.name}</h3>
                                    <p className="font-medium capitalize">{data?.jabatan.toLowerCase()}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}