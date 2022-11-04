import {axiosClient} from "../../config/axiosClient";

export function getArtist() {
    return axiosClient.get('/artists/12')
}