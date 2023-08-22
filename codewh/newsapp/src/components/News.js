import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(true)
    const [totalResults, setTotalResults] = useState(0)


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles));
        setTotalResults(parsedData.totalResults);
        setLoading(false);
    };

    const updateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
        setLoading(false);
        let data = await fetch(url);
        props.setProgress(30);
        let parsedData = await data.json();
        props.setProgress(60);
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setLoading(false);
        props.setProgress(100);
    }


    const Capitalize=(str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    useEffect(() => {
        updateNews();
    }, [])

    return (
        <>
            <h1 className='text-center mb-3' style={{ marginTop: '90px' }}>NewsMonkey - Top {Capitalize(props.category)} HeadLines</h1>
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className='container'>
                    <div className='row'>

                        {
                            articles.map((element, index) => {
                                const sourceName = element.source && element.source.name ? element.source.name : "Unknown Source";
                                return (
                                    <div className='col-md-4' key={element.url + index}>
                                        <NewsItem
                                            title={element.title ? element.title : ""}
                                            description={element.description ? element.description : ""}
                                            imageUrl={element.urlToImage}
                                            newsUrl={element.url}
                                            author={element.author}
                                            date={element.publishedAt}
                                            source={element.source ? element.source.name : "Unknown Source"}
                                        />
                                    </div>
                                );
                            })
                        }

                    </div>
                </div>
            </InfiniteScroll>

        </>
    )
}
News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general',
}
News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}
export default News
