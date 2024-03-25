import FormGroup from "./FormGroup";
import InnerContainer from "./InnerContainer";
import InputGroup from "./InputGroup";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export default function CalculatorSection() {
    return (
        <>
            <div className="bg-gradient w-full py-[50px] mb-14">
                <InnerContainer>
                    <div className="flex gap-16">
                        <div className="flex flex-col gap-5">
                            <h1 className="text-3xl text-white font-bold">Kalkulator KPR</h1>
                            <img src="/icons/rumah.png" className="w-full max-w-[500px]" alt="" />
                        </div>
                        <div className="flex-1">
                            <div className="grid grid-cols-2 gap-5">
                                <div className="flex flex-col gap-6">
                                    <FormGroup>
                                        <FormGroup.FormLabel className="text-white">Harga Properti</FormGroup.FormLabel>
                                        <InputGroup icon={"Rp"} />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormGroup.FormLabel className="text-white">Uang Muka</FormGroup.FormLabel>
                                        <InputGroup icon={"Rp"} />
                                        <small className="text-white">Minimal 5% dari harga properti</small>
                                    </FormGroup>
                                </div>
                                <div className="flex flex-col gap-6">
                                    <FormGroup>
                                        <FormGroup.FormLabel className="text-white">Jumlah Pinjaman</FormGroup.FormLabel>
                                        <InputGroup icon={"Rp"} />
                                    </FormGroup>
                                    <FormGroup>
                                        <FormGroup.FormLabel className="text-white">Masa Kredit Fix</FormGroup.FormLabel>
                                        <InputGroup icon={"Rp"} />
                                    </FormGroup>
                                </div>
                            </div>

                            <div className="grid grid-cols-3 gap-3 mt-10">
                                <FormGroup>
                                    <FormGroup.FormLabel className="text-white">Suku Bunga</FormGroup.FormLabel>
                                    <Select>
                                        <SelectTrigger className="bg-transparent text-white border-2">
                                            <SelectValue placeholder="Pilih Program Suku Bunga " />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="1">KPP Event REI Seulsel Property EXPO 2024 RO Makassar SB 6% Fixed 5 tahun</SelectItem>
                                            <SelectItem value="2">KPP Event REI Seulsel Property EXPO 2024 RO Makassar SB 5% Fixed 3 tahun</SelectItem>
                                            <SelectItem value="3">KPP Refinancing SB 12% All Tenor</SelectItem>
                                            <SelectItem value="4">KPP Nasabah Private dan Prioritas Paket 2 SB 8,25% FIXED 5 TAHUN</SelectItem>
                                            <SelectItem value="5">KPP CST 2024 SB 4,65% FIXED 3 TAHUN</SelectItem>
                                            <SelectItem value="6">KPP Nasabah Private dan Prioritas Paket 1 SB 5,65% FIXED 5 TAHUN</SelectItem>
                                            <SelectItem value="7">KPP CST 2024 SB 5,65% FIXED 5 TAHUN</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormGroup>
                                <FormGroup>
                                    <FormGroup.FormLabel className="text-white">Nominal Suku Bunga</FormGroup.FormLabel>
                                    <InputGroup icon={"%"} position="right" />
                                </FormGroup>
                                <FormGroup>
                                    <FormGroup.FormLabel className="text-white">Lama Pinjaman</FormGroup.FormLabel>
                                    <InputGroup icon={"Tahun"} position="right" />
                                </FormGroup>

                            </div>
                            <div className="my-4 text-white">
                                <small>*Catatan: Perhitungan ini adalah hasilperkiraan aplikasi KPR secara umum dengan menggunakanjangka waktu suku bungan 3 tahun. Data perhitungan di atas dapat berbeda dengan perhitungan bank. Untuk perhitungan yang akurat, silahkan hubungi kantor cabang kami.</small>
                            </div>

                            <div>
                                <Button className="w-full" size={"lg"} disabled>Lihat Kalkulasi</Button>
                            </div>
                        </div>
                    </div>
                </InnerContainer>
            </div>
        </>
    )
}