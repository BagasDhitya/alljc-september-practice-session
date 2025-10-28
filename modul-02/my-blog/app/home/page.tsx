import ArticleList from "@/components/ArticleList";
import { getArticles } from "@/lib/api";

export default async function page() {
    const articles = await getArticles() // fetching pakai SSR
    return <ArticleList initArticles={articles} />
}
