/* eslint-disable */

import { useEffect, useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  const [articleTitle, setArticleTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [likeCount, setlikeCount] = useState([]);
  const [modalActive, setModalActive] = useState(false);

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
          <button onClick={() => {
            let tempArticleTitle = [...articleTitle];
            tempArticleTitle[0] = '여자코트 추천';
            setArticleTitle(tempArticleTitle);
          }}>글변경</button>
          <button onClick={() => {
            let copyTitle = [...articleTitle];
            let sortCopyTitle = copyTitle.sort();
            setArticleTitle(sortCopyTitle);
          }}>가나다순정렬</button>
        </div>
        {
          articleTitle.map((item, index) =>
            <div className="list" key={index}>
              <h4 onClick={() => {
                setModalActive(!modalActive);
              }}>{item} <span onClick={(e) => {
                let tempCountArray = [...likeCount];
                tempCountArray[index]++;
                setlikeCount(tempCountArray);
              }}>❤️</span> {likeCount[index]} </h4>
              <p>2월 17일 발행</p>
            </div>
          )
        }

        {
          modalActive ? <DetailModal /> : null
        }



      </div>
    </>
  )
}


function DetailModal() {
  return (
    <>
      <div className="modal">
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App
