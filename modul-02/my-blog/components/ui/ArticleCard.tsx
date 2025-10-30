'use client'
import { useRouter } from "next/navigation"

interface ArticleProps {
    objectId: string,
    title: string,
    image?: string,
    content: string,
    author: string,
    created: string
    onClick?: () => void
}

export default function ArticleCard({ article }: { article: ArticleProps }) {
    const router = useRouter()
    const date = new Date(article.created).toLocaleDateString(
        'id-ID', {
        day: "2-digit",
        month: "long",
        year: "numeric"
    }
    )

    return (
        <div
            onClick={() => router.push(`/home/${article.objectId}`)}
            className="bg-white shadow-sm rounded-lg p-4 mb-4 hover:shadow-md">
            {
                article.image && (
                    <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-52 object-cover rounded-md mb-3"
                    />
                )
            }
            <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{article.content}</p>
            <div className="text-xs text-gray-500 flex justify-between">
                <span>By {article.author}</span>
                <span>{date}</span>
            </div>
        </div>
    )
}
