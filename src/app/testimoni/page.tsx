"use client"
import FormGroup from "@/components/FormGroup";
import InnerContainer from "@/components/InnerContainer";
import TestimoniBox from "@/components/TestimoniBox";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { URL_BACKEND } from "@/lib/utils";
import { ChevronLeft, Loader, Loader2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import useGetTestimoni from "../hooks/useGetTestimoni";
import { Skeleton } from "@/components/ui/skeleton";
import { ComboboxDaerah } from "./ComboboxDaerah";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function TestimoniPage() {
    const random_char = (Math.random() + 1).toString(36).substring(7);
    const [image, setImage] = useState<any>(null);
    const [previewImage, setPreviewImage] = useState<any>(`https://avatar.vercel.sh/${random_char}.png`);

    const [rating, setRating] = useState<number>(5);
    const [loading, setLoading] = useState<boolean>(false);

    const [data_testi, loading_testi, fetchData]: any = useGetTestimoni({ hit_first: true });

    const [data, setData] = useState<{
        name: string,
        jabatan: string,
        message: string
    }>({
        name: "",
        jabatan: "",
        message: ""
    });

    const reset_all = () => {
        setData((prevState: any) => ({
            ...prevState,
            name: "",
            message: "",
        }));

        setRating(5);
        setImage(null);
        setPreviewImage(`https://avatar.vercel.sh/${random_char}.png`)
    }

    const onSubmit = async () => {
        if (!data.name || !data.jabatan || !data.message) {
            alert("Nama, Jabatan, dan Kota Asal harus diisi.");
            return;
        }

        try {
            setLoading(true);
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("jabatan", data.jabatan);
            formData.append("message", data.message);
            formData.append("image", image || 'null');
            formData.append("rating", rating.toString());


            const res = await fetch(URL_BACKEND + "testimoni/", {
                method: "POST",
                body: formData
            });

            setLoading(false);

            if (res.status === 201) {
                alert("Testimoni berhasil dikirim.");
                reset_all();
                fetchData();
            } else {
                alert("Terjadi Kesalahan saat mengirim testimoni.")
                reset_all();
            }
        } catch (err) {
            alert("Terjadi Kesalahan saat mengirim testimoni.")
            reset_all();
            setLoading(false);
        }
    }

    const change_image = (e: any) => {
        if (e.target.files.length !== 0) {
            const objUrl = URL.createObjectURL(e.target.files[0]);
            setPreviewImage(objUrl);
            setImage(e.target.files[0])
        } else {
            setPreviewImage(`https://avatar.vercel.sh/${random_char}.png`);
            setImage(null)
        }
    }

    const [data_da, setDataDa] = useState<Array<any>>([]);

    const get_kota = async () => {
        try {
            const res = await fetch("/regencies.json", {
                method: "GET"
            });

            const data_daerah = await res.json();

            if (res.status) {
                setDataDa(data_daerah);
            }
        } catch (err) {

        }
    }

    useEffect(() => {
        get_kota();
    }, []);

    return (
        <>
            <div className="w-full min-h-screen bg-gradient">
                <InnerContainer className="py-20">
                    <div className="flex flex-col gap-3">
                        <div className="flex gap-3 text-white">
                            <Button size={"icon"} variant={"ghost"}>
                                <Link href={"/"}>
                                    <ChevronLeft size={30} />
                                </Link>
                            </Button>
                            <p className="text-2xl font-bold self-center">Ulasan</p>
                        </div>

                        <div className="mx-16 mt-5">
                            <Card>
                                <CardContent className="py-[45px] px-[89px]">
                                    <div className="flex gap-20">
                                        <div className="flex flex-col gap-2">
                                            <div className="flex ">
                                                <img src={previewImage} className="max-w-[180px] rounded-full aspect-square" />
                                            </div>
                                            <Input type="file" className="my-3" onChange={change_image} />
                                            <FormGroup>
                                                <FormGroup.FormLabel className={"!text-sm"}>Nama</FormGroup.FormLabel>
                                                <Input onChange={(e) => setData((prevState: any) => ({
                                                    ...prevState,
                                                    name: e.target.value
                                                }))} value={data.name} />
                                            </FormGroup>
                                            <FormGroup>
                                                <FormGroup.FormLabel className={"!text-sm"}>Jabatan</FormGroup.FormLabel>
                                                <Select onValueChange={(value) => setData((prevState: any) => ({
                                                    ...prevState,
                                                    jabatan: value
                                                }))} value={data.jabatan}>
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Pilih Kota Asal" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectGroup>
                                                            <SelectLabel>Kota</SelectLabel>
                                                            {
                                                                data_da.map((el, i: number) => {
                                                                    return <SelectItem value={el.name} key={i}>{el.name}</SelectItem>
                                                                })
                                                            }
                                                        </SelectGroup>
                                                    </SelectContent>
                                                </Select>
                                            </FormGroup>
                                        </div>

                                        <div className="flex flex-col gap-5 flex-1">
                                            <div className="ranting">
                                                <Rating initialValue={rating} showTooltip={true} onClick={(rate) => setRating(rate)} size={35} fillColor="#ffe500" />
                                            </div>

                                            <Textarea className="w-full min-h-[300px] bg-[#dee9f2]" onChange={(e) => setData((prevState: any) => ({
                                                ...prevState,
                                                message: e.target.value
                                            }))} value={data.message} placeholder="Ketik ulasan anda..." />

                                            <div className="flex justify-end">
                                                <Button className="px-10" onClick={onSubmit} disabled={loading}>
                                                    {
                                                        loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Kirim</> : "Kirim"
                                                    }
                                                </Button>
                                            </div>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="flex flex-col gap-3 mx-14 mt-10">
                            <p className="text-2xl font-bold text-white mb-5">Ulasan Lainnya</p>

                            {
                                loading_testi ? <div className="grid grid-cols-3 gap-3">
                                    <Skeleton className="h-[333px] w-[400px]" />
                                    <Skeleton className="h-[333px] w-[400px]" />
                                    <Skeleton className="h-[333px] w-[400px]" />
                                </div> : <div className="grid grid-cols-4 gap-5">
                                    {
                                        data_testi.map((el: any, i: number) => {
                                            return <TestimoniBox data={el} key={i} />
                                        })
                                    }
                                </div>
                            }
                        </div>

                    </div>
                </InnerContainer>
            </div>
        </>
    )
}