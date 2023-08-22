
const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div>
            <div className="card">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning">{source}</span>
                <img
                    className="card-img-top"
                    src={imageUrl ? imageUrl : "https://www.livemint.com/lm-img/img/2023/08/19/600x338/ANI-20230818029-0_1692452620447_1692452634933.jpg"}
                    alt=""
                />

                <div className="card-body">
                    <h5 className="card-title">{title}

                        <span className="visually-hidden">unread messages</span>
                    </h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted text-warning">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-sm btn-dark">
                        Read More
                    </a>

                </div>
            </div>
        </div>
    )

}

export default NewsItem
