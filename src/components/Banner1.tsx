"use client"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import InputGroup from "./InputGroup";
import { Search } from "lucide-react";


export default function Banner1({ className = "" }: { className?: string }) {
    const getPermissionGeo = () => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;
                    console.log("Latitude: " + latitude + ", Longitude: " + longitude);
                },
                function (error) {
                    switch (error.code) {
                        case error.PERMISSION_DENIED:
                            alert("User denied the request for Geolocation.")
                            break;
                        case error.POSITION_UNAVAILABLE:
                            alert("Location information is unavailable.")
                            break;
                        case error.TIMEOUT:
                            alert("The request to get user location timed out.")
                            break;
                    }
                }
            );
        } else {
            alert("Geolocation is not supported by this browser.")
        }
    }

    return (
        <>
            <div className="w-screen h-screen relative bg-[url('/banner1.png')] bg-cover bg-center">
                <div className="absolute top-0 left-0">
                    <div className="grid place-content-center w-screen h-screen">
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-6 text-center">
                                <h1 className="text-5xl font-bold text-white">Temukan Rumah Impian Anda Hanya di Homespot </h1>
                                <p className="text-2xl font-bold text-white">Solusi rumah impian anda</p>
                            </div>
                            <div className="flex justify-center">
                                <Card className="bg-card/50 border-0 min-w-[85%]">
                                    <CardContent className="p-5">
                                        <div className="flex justify-between gap-3">
                                            <div>
                                                <Select>
                                                    <SelectTrigger className="w-[180px]">
                                                        <SelectValue placeholder="Pilih Tipe" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Semua</SelectLabel>
                                                            <SelectItem value="apple">Rumah</SelectItem>
                                                            <SelectItem value="banana">Apartemen</SelectItem>
                                                            <SelectItem value="blueberry">Villa</SelectItem>
                                                            <SelectItem value="grapes">Ruko</SelectItem>
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="flex-1">
                                                <div className="relative">
                                                    <div className="absolute top-[9px] left-3">
                                                        <Search className="text-primary" size={20} />
                                                    </div>
                                                    <Input placeholder="Cari Lokasi dan nama properti" onClick={getPermissionGeo} className="w-full pl-10" />
                                                </div>
                                            </div>
                                            <div>
                                                <Button className="w-full px-10">Cari</Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}