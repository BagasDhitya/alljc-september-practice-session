'use client'
import { useState } from "react"
import { useForm } from 'react-hook-form'
import { handleUploadImage, createArticle } from "@/lib/api"
import { toast } from 'react-hot-toast'
import { useRouter } from "next/navigation"

import { ArticleForm, articleSchema } from "@/lib/validation/article.validation"
import { zodResolver } from "@hookform/resolvers/zod"

export default function page() {
    const router = useRouter()
    const [preview, setPreview] = useState<boolean>(false)
    const [imagePreview, setImagePreview] = useState<string | null>(null)

    const { register, handleSubmit, formState: { errors }, watch } = useForm<ArticleForm>({ resolver: zodResolver(articleSchema) })

    const imageFile = watch('image')

    function handlePreview() {
        if (imageFile && imageFile.length > 0) {
            const file = imageFile[0]
            const previewUrl = URL.createObjectURL(file)
            setImagePreview(previewUrl)
        }
        setPreview(true)
    }

    async function onSubmit(values: ArticleForm) {
        try {
            const fileUrl = await handleUploadImage(values.image[0])
            await createArticle({
                title: values.title,
                content: values.content,
                image: fileUrl
            })
            toast.success('Article published successfully')
            router.push('/home')
        } catch (error) {
            console.error(error)
            toast.error("Failed to create article")
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10 px-4">
            <div className="w-full max-w-2xl bg-white rounded-2xl shadow p-6">
                <h1 className="text-2xl font-semibold mb-6 text-center text-gray-800">
                    {preview ? "Preview Article" : "Create New Article"}
                </h1>

                {!preview ? (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                        {/* Title */}
                        <div>
                            <label className="block text-gray-700 mb-2">Title</label>
                            <input
                                type="text"
                                {...register("title")}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Enter your article title"
                            />
                            {errors.title && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.title.message}
                                </p>
                            )}
                        </div>

                        {/* Content */}
                        <div>
                            <label className="block text-gray-700 mb-2">Content</label>
                            <textarea
                                {...register("content")}
                                rows={6}
                                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Write your article content here..."
                            />
                            {errors.content && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.content.message}
                                </p>
                            )}
                        </div>

                        {/* Image Upload */}
                        <div>
                            <label className="block text-gray-700 mb-2">Upload Image</label>
                            <input
                                type="file"
                                accept="image/*"
                                {...register("image")}
                                className="w-full border rounded-lg p-2 bg-gray-50 cursor-pointer"
                            />
                            {errors.image && (
                                <p className="text-red-500 text-sm mt-1">
                                    {errors.image.message as string}
                                </p>
                            )}
                        </div>

                        {/* Action Buttons */}
                        <div className="flex items-center justify-between mt-6">
                            <button
                                type="button"
                                onClick={handlePreview}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                            >
                                Preview
                            </button>

                            <button
                                type="submit"
                                className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                            >
                                Publish
                            </button>
                        </div>
                    </form>
                ) : (
                    <div className="space-y-5">
                        {/* Image Preview */}
                        {imagePreview && (
                            <img
                                src={imagePreview}
                                alt="Preview"
                                className="w-full h-64 object-cover rounded-xl shadow"
                            />
                        )}

                        {/* Title */}
                        <h2 className="text-2xl font-bold text-gray-800 border-b pb-2">
                            {watch("title") || "Untitled Article"}
                        </h2>

                        {/* Content */}
                        <p className="text-gray-700 whitespace-pre-wrap">
                            {watch("content") || "No content provided yet."}
                        </p>

                        <div className="flex justify-between mt-6">
                            <button
                                type="button"
                                onClick={() => setPreview(false)}
                                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                            >
                                Back to Edit
                            </button>

                            <button
                                onClick={handleSubmit(onSubmit)}
                                className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
                            >
                                Publish Now
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
