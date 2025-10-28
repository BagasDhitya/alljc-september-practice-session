'use client'
import { useState } from "react"
import ArticleCard from "./ui/ArticleCard"
import SearchBar from "./ui/SearchBar"

export default function ArticleList({ initArticles }: { initArticles: any[] }) {

    const [filtered, setFiltered] = useState<any[]>(initArticles)

    function handleSearch(query: string) {
        if (!query.trim()) {
            return setFiltered(initArticles)
        }

        const q = query.toLowerCase()
        const result = initArticles.filter((a) =>
            a.title.toLowerCase().includes(q) ||
            a.content.toLowerCase().includes(q) ||
            a.author.toLowerCase().includes(q)
        )

        setFiltered(result)
    }

    return (
        <section>
            <h1 className="text-2xl font-bold mb-4 text-center">
                Latest Articles
            </h1>
            <SearchBar onSearch={handleSearch} />
            <div className="p-5 grid grid-cols-3 gap-3">
                {
                    filtered.length > 0 ? (
                        filtered?.map((article, key) => (
                            <ArticleCard
                                key={key}
                                article={article}
                            />
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No articles found</p>
                    )
                }
            </div>
        </section>
    )
}
