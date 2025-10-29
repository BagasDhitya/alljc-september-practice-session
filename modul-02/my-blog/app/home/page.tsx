import ArticleList from "@/components/ArticleList";
import ProtectionPage from "@/components/ProtectionPage";
import { getArticles } from "@/lib/api";

export default async function page() {
    const articles = await getArticles() // fetching pakai SSR
    return (
        <ProtectionPage>
            <ArticleList initArticles={articles} />
        </ProtectionPage>
    )
}
