import axios from 'axios'
import { toast } from 'react-toastify'

export const uploadFiles = (id, files) => {
    const formData = new FormData()

    if(files.length > 4) {
        toast.error('Maximum upload of 4 files exceeded')
    }
    
    files.forEach((file) => {
        formData.append('files', file)
    })
    
    formData.append('id', id)
    
    axios
        .post('api/v1/upload', formData)
        .then((res) => {
            toast.success("Image Successfully Uploaded !")
            return res
        })
        .catch((err) => {
            console.log(err)
            toast.error("Image don't upload!")
            return err
        })
}