import React from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import { useState, useEffect } from 'react'

export default function News() {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchArticles() {

            const everything = `https://newsapi.org/v2/everything?q=India&from=2025-11-16&sortBy=publishedAt&apiKey=5b654367e87242948da1b2a6f9e0179e&page=${page}&pageSize=24`;
            const con = `https://newsapi.org/v2/top-headlines/sources?country=us&apiKey=5b654367e87242948da1b2a6f9e0179e&page=${page}&pageSize=24`;
            setLoading(true);
            const res = await fetch(everything);
            const data = await res.json();
            setLoading(false);
            setArticles(data.articles);
        }
        fetchArticles();
    }, [page])
    const handlePrev = async () => {

        setPage(page - 1);

    }
    const handleNext = async () => {
        setPage(page + 1);
    }

    return (
        <>
            <div className="container my-3">
                <h2 style={{ textAlign: "center" }}>Top Headlines</h2>
                {loading && <Spinner />}
                <div className="row">
                    {!loading && articles.map((article, index) => (
                        <div className="col-md-4" key={index}>
                            <NewsItem
                                title={article.title}
                                description={article.description.slice(0, 88)}
                                image={article.urlToImage}
                                readMore={article.url}
                            />
                        </div>
                    ))}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={handlePrev}>&larr; Prev</button>
                    <button disabled={page + 1 > Math.ceil(articles.totalResults / 24)} type="button" className="btn btn-dark" onClick={handleNext}>Next &rarr;</button>
                </div>
            </div>
        </>
    )
}
