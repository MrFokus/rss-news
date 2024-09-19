import { NewsApi } from "~/api/news";

export const NewsService = {
  async getAllNewsForMainPage() {
    let result = await NewsApi.getNews();
    if (result.error.value) {
      console.error(result.error.value);
      return;
    }
    console.log(result);

    result.data.value.items = result.data.value.items.map((news: any) => ({
      ...news,
      date: new Date(news.created),
      img:
        news.enclosures[0] && news.enclosures[0].url
          ? news.enclosures[0].url
          : null,
    }));
    return result;
  },
  async getDetailNews(id: string) {
    return (await this.getAllNewsForMainPage())?.data.value.items.find(el=>el.id == id);
  },
};
