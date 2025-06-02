import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchApi = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const callApi = async (url) => {
        setLoading(true);
        const res = await axios.get(url);
        setData(res.data.data);
        setLoading(false);
    }

    const refetch = async (url) => {
        callApi(url);
    }

    useEffect(()=>{
        callApi(url);
    }, []);

    return {data, loading, refetch};
}