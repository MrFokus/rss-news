import rss from 'rss-to-json';
export default defineEventHandler((event) => {    
    return rss.parse('http://static.feed.rbc.ru/rbc/logical/footer/news.rss')
})