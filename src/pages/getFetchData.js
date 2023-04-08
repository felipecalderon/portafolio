import axios from "axios"

export const getfetch = async (url) => {
    try {
        const res = await axios(url)
        return res.data
    } catch (error) {
        console.log(error)
    }
}