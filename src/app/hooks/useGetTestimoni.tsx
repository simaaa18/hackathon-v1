import { URL_BACKEND } from "@/lib/utils";
import { useEffect, useState } from "react";

export default function useGetTestimoni({ hit_first = true }: { hit_first?: boolean }) {
    const [loading, setLoading] = useState<boolean>(true);
    const [data, setData] = useState<Array<any>>([]);

    const get_testimoni = async () => {
        try {
            setLoading(true);
            const res = await fetch(URL_BACKEND + "testimoni/", {
                method: "GET",
            });

            const data_testi = await res.json();
            setLoading(false);

            if (res.status === 200) {
                setData(data_testi.data.testimoni);

                return data_testi.data.testimoni
            } else {
                alert("Terjadi kesalahan saat mengambil data testimoni");
                return []
            }

        } catch (err) {
            setLoading(false);
            alert("Terjadi kesalahan saat mengambil data testimoni");
            return []
        }
    }

    useEffect(() => {
        if (hit_first) {
            get_testimoni();
        }
    }, [hit_first]);


    return [data, loading, get_testimoni]
}