export const NewsApi = {
    async getNews(){
        return await useFetch("/api/news");
    }
}