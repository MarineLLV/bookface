import axios, { Axios } from "axios";

const uploadPic = async (media) => {
    try {
        const form = new FormData()
        form.append('file', media)
        form.append('upload', 'bookface') // name of the upload preset in Cloudinary
        form.append('cloud_name', 'dhi5y1obn')

        // POST request with Axios
        const res = await axios.post(process.env.CLOUDINARY_URL, form)
        return res.data.url;


    } catch (error) {
        return;
    }
}

export default uploadPic;