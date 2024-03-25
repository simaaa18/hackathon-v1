"use client"
import InnerContainer from "./InnerContainer";
import { Card, CardContent } from "./ui/card";
import { Icon } from '@iconify/react';

interface IDataWhy {
    icon: string,
    desc: string,
    is_icon: boolean
}

const data_why: Array<IDataWhy> = [
    {
        icon: "carbon:piggy-bank",
        desc: "Pilihan suku bunga yang variatif dan kompetitif",
        is_icon: true,
    },
    {
        icon: "game-icons:take-my-money",
        desc: "Down Payment atau uang muka mulai dari 10%",
        is_icon: true,
    },
    {
        icon: "/icons/hand.png",
        desc: "Pilihan suku bunga yang variatif dan kompetitif",
        is_icon: false,
    },
]

export default function WhySection() {
    return (
        <>
            <InnerContainer className="!px-[220px]">
                <div className="flex flex-col gap-12 my-24">
                    <h1 className="text-4xl font-bold text-center">Mengapa pilih homespot.id?</h1>
                    <div className="grid grid-cols-3 gap-[100px]">
                        {
                            data_why.map((el, i: number) => {
                                return <Card key={i}>
                                    <CardContent className="p-10 px-20">
                                        <div className="flex flex-col gap-4 text-center">
                                            <div className="flex justify-center">
                                                {
                                                    el.is_icon ? <Icon icon={el.icon} width={180} /> : <img src={el.icon} width={230} alt="" />
                                                }

                                            </div>
                                            <p className="text-xl font-medium">{el.desc}</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            })
                        }

                    </div>
                </div>
            </InnerContainer>
        </>
    )
}