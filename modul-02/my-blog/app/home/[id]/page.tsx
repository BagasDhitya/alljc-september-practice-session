import { getArticleById } from "@/lib/api"
import Image from "next/image"
import Link from "next/link"

interface ArticleDetailProps {
    params: {
        id: string
    }
}

export default async function page({ params }: ArticleDetailProps) {
    const { id } = await params
    let article: any = null

    try {
        article = await getArticleById(id)
        console.log('test : ', article)
    } catch (error) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen">
                <h2 className="text-2xl font-bold mb-2">Article Not Found</h2>
                <p className="text-gray-600 mb-4">The article you're looking for doesn't exist or has been removed</p>
                <Link href='/home' className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">Back to Home</Link>
            </div>
        )
    }

    return (
        <div className="max-w-4xl mx-auto px-6 py-10">
            <Link href='/home' className="text-blue-600 hover:underline mb-4 inline-block">Back to Home</Link>

            {article?.image && (
                <div className="relative w-full h-80 mb-6 rounded-lg overflow-hidden shadow">
                    <Image
                        src={article.image}
                        alt={article.title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}

            <h1 className="text-4xl font-bold mb-4">{article.title}</h1>

            <div className="text-gray-500 text-sm mb-6">
                <p>
                    By <span className="font-medium text-gray-700">{article.author}</span>{" "}
                    .{new Date(article.created).toLocaleDateString('id-ID', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                    })}
                </p>
            </div>

            <div className="prose prose-lg max-w-none">
                {
                    article.content.split("\n").map((paragraph: string, i: number) => (
                        <p key={i}>{paragraph}</p>
                    ))
                }
            </div>
        </div>
    )
}
