import React, { useState, useEffect } from "react";

const ArticleHeadline = (props) => {
  const [time, setTime] = useState();

  useEffect(() => {
    // get elapsed time since publishing in msec
    let timeInSec = Date.now() - new Date(props.publishedAt).getTime();
    // calculate elapsed time in hs:min ad return in string
    const getElapsedTime = (secs) => {
      let hs = Math.floor(secs / 1000 / 60 / 60);
      let mins = Math.floor((secs / 1000 / 60) % 60);
      return hs < 24
        ? `${hs.toString()} hs ${mins.toString()} mins ago`
        : undefined;
    };

    setTime(getElapsedTime(timeInSec));
  }, []);

  return (
    <div className="art-main" onClick={() => window.open(props.url)}>
      <p className="time">{time}</p>
      <h3 className="art-main-title">{props.title}</h3>
      <img className="art-main-img" src={props.img} alt="" />
      <p className="art-main-desc">{props.description}</p>
    </div>
  );
};

export default ArticleHeadline;
