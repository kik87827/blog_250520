/* eslint-disable */

import { useEffect, useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  const [articleTitle, setArticleTitle] = useState(['남자코트 추천','강남 우동맛집','파이썬독학']);
  const [likeCount, setlikeCount] = useState([]);

  useEffect(() => {
    const initialLikes = new Array(articleTitle.length).fill(0);
    setlikeCount(initialLikes);
  }, []); 

  return (
    <>
      <div className="App">
        <div className="black-nav">
          <h4>ReactBlog</h4>
        </div>

        <div>
          <button onClick={()=>{
            let tempArticleTitle = [...articleTitle];
            tempArticleTitle[0] = '여자코트 추천';
            setArticleTitle(tempArticleTitle);
          }}>글변경</button>
        </div>
        {
          articleTitle.map((item,index)=> 
            <div className="list" key={index}>
              <h4>{item} <span onClick={(e)=>{
                let tempCountArray = [...likeCount];
                tempCountArray[index] ++;
                setlikeCount(tempCountArray);
              }}>❤️</span> { likeCount[index] } </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
