import { useState } from 'react'
import { uploadFiles } from '../services/imageServices'
import { ToastContainer } from 'react-toastify'

const ImageUpload = () => {
    const [files, setFiles] = useState([])
    
    const handleFileChange = (e) => {
        const selectedFiles = e.target.files
        setFiles([...files, ...selectedFiles])
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        uploadFiles(1, files)
        console.log("Uploaded files: ", files)
    }
    
  return (
    <div className="flex justify-center mt-4">
        <ToastContainer />
        <form className="flex items-center p-4 rounded-lg bg-slate-900" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="flex items-center gap-2">
            <label
                htmlFor="image"
                className="block text-sm font-medium text-white"
            >
                Image
            </label>
            <input type="file" name="files" className="mt-1 text-white" onChange={handleFileChange} multiple  />
            <div className='flex justify-center'>
                    <button
                        type="submit"
                        className="px-4 py-2 font-medium text-white bg-pink-800 rounded hover:bg-pink-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                    >
                        Submit
                    </button>
                </div>
        </div>
</form>
    </div>
  )
}

export default ImageUpload