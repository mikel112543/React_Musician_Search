import {axiosClient} from "../config/axiosClient";
import {useEffect, useRef, useState} from "react";

export const AxiosRequest = (url, method, payload, params) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState("")
    const [loaded, setLoaded] = useState(false)
    const controllerRef = useRef(new AbortController());

    const cancel = () => {
        controllerRef.current.abort();
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axiosClient.request({
                    url: url,
                    method: method,
                    params: params,
                    payload: payload
                });
                setData(response.data)
            } catch (error) {
                setError(error.message);
            } finally {
                setLoaded(true)
            }
        })();
    }, []);

    return {cancel, artist: data, error, loaded}
}