import React, { useState, useEffect } from "react";

function NewsList() {
  const [like, setLike] = useState(false);

  const [news, setNews] = useState([
    {
      id: Date(),
      author: "Doron Levin",
      title:
        "Ford: Battery Plant, Chip Shortage May Have Electrocuted Early Restoration Of Dividend",
      description:
        "Ford may delay its cash dividend indefinitely because of the cost of its new battery plant and the ongoing semiconductor shortage. Read more about F stock here.",
      likes: 10,
      date: new Date(),
    },
    {
      id: Date(),
      author: "Johan Larsson",
      title:
        "Arvinas Among Top Shorts Today As Dow, S&P 500, And Nasdaq Climb For Another Consecutive Day",
      description:
        "The Dow Jones climbed 220 points, the S&P 500 gained 0.8%, and the Nasdaq recovered another 1%. If you’re looking for a way to play this market, the deep learning algorithms at Q.ai have crunched the data to find today's top shorts.",
      likes: 21,
      date: new Date(),
    },

    {
      id: Date(),
      author: "Ahmed Mukhtar",
      title: "Cathie Wood: The Big Risk Is Deflation, Not Inflation",
      description:
        "The founder of Ark Invest laid out potential market winners and losers if her prediction pans out.",
      likes: 1,
      date: new Date(),
    },
    {
      id: Date(),
      author: "Pete Evans",
      title: "Cathie Wood: The Big Risk Is Deflation, Not Inflation",
      description:
        "Bitcoin was heading on Friday for its worst week since February, while dogecoin leapt by a quarter, as the latest tweets on cryptocurrencies from Tesla boss Elon Musk sent the digital coins on a wild ride.",
      likes: "19k",
      date: new Date(),
    },

    {
      id: Date(),
      author: "Rich Dvorak",
      title: "Nasdaq, Bitcoin, Inflation – FinTwit Trends to Watch Next Week",
      description:
        "Inflation has been the talk of town this past week and stands to be a dominant theme going forward. Nasdaq and Bitcoin extend their slides and are two trending markets on FinTwit worth watching.",
      likes: "15",
      date: new Date(),
    },
  ]);
  useEffect(() => {
    fetch("http://localhost:5000/news-api/news")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-3 col-md-12">
          <h3>Våra skribenter</h3>
          {news.map((link) => {
            return (
              <ul className="list-group">
                <li className="list-group-item">{link.author}</li>
              </ul>
            );
          })}
        </div>
        <div className="col-lg-9 col-md-12">
          {news.map((post) => {
            let time = new Date(post.date);
            return (
              <div className="card p-4">
                <img className="card-img-top" src="holder.js/100x180/" alt="" />
                <div className="card-body">
                  <h1 className="card-title">{post.title}</h1>
                  <p className="card-text">{post.description}</p>
                  <div className="row">
                    <div className="col" id="post-info">
                      <span className=" h4 text-info">
                        <i className="far fa-user"></i>
                        Skrevs av {post.author}
                      </span>

                      <span className="text-success">
                        <i className="far fa-clock"></i>
                        {time.toDateString()}
                      </span>
                      <span className="text-black">
                        <i className="fas fa-thumbs-up "></i>
                        {post.likes} likes
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NewsList;
