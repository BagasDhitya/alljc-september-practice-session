import { getArticleById } from "@/lib/api";

interface HeadProps {
    params: { id: string }
}

export default async function Head({ params }: HeadProps) {
    try {
        const article = await getArticleById(params.id)

        return (
            <>
                <title>{article.title}</title>
                <meta name="description" content={article.content.slice(0, 150)} />
                <meta property="og:title" content={article.title} />
                <meta property="og:image" content={article.image} />
            </>
        )
    } catch (error) {
        return (
            <>
                <title>Article Not Found</title>
                <meta name="description" content="The article you are looking for could not be found" />
            </>
        )
    }
}
