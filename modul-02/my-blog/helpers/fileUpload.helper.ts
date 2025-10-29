import axios from "axios"

export async function uploadImage(file: File, baseUrl: string) {
    const formData = new FormData()
    formData.append("file", file)

    const response = await axios.post(baseUrl + 'files/images/' + file.name,
        formData,
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }
    )

    return response.data.fileURL
}