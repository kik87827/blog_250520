/* eslint-disable */

import React, { useEffect, useState } from 'react';
import './App.css'

function App() {

  let post = '강남 우동 맛집';
  const [articleTitle, setArticleTitle] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [articleDate, setArticleDate] = useState(['2월 17일', '2월 18일', '2월 19일']);
  const [likeCount, setlikeCount] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [clickIndex, setClickIndex] = useState(0);
  const [inputValue, setInputValue] = useState('');

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
                setClickIndex(index);
                if (clickIndex !== index) {
                  setModalActive(true);
                } else {
                  setModalActive(!modalActive);
                }
                
              }}>{item} <span onClick={(e) => {
                e.stopPropagation();
                let tempCountArray = [...likeCount];
                tempCountArray[index]++;
                setlikeCount(tempCountArray);
              }}>❤️</span> {likeCount[index]} </h4>
              <p>{articleDate[index]} 발행</p>
              <div>
                <button onClick={() => {
                  //setArticleTitle();
                  let tempArticleTitle = [...articleTitle];
                  tempArticleTitle.splice(index, 1);
                  setArticleTitle(tempArticleTitle);
                }}>삭제</button>
              </div>
            </div>
          )
        }

        <div>
          <input type="text" onChange={(e) => { 
            setInputValue(e.target.value);
          }} />
          <button onClick={() => {
            let tempArticleTitle = [...articleTitle];
            let tempArticleDate = [...articleDate];
            if (inputValue.length === 0) { return; }
            tempArticleTitle.unshift(inputValue);
            tempArticleDate.unshift(dateNowPrint());
            setArticleTitle(tempArticleTitle);
            setArticleDate(tempArticleDate);
          }}>작성</button>
        </div>

        {
          modalActive ? <DetailModal propsTitle={articleTitle[clickIndex]} propsFunc={() => {
            let tempArticleTitle = [...articleTitle];
            tempArticleTitle[0] = '여자코트 추천';
            setArticleTitle(tempArticleTitle);
          }} /> : null
        }

        <ModalOld />

      </div>
    </>
  )
}

function dateNowPrint() {
  const today = new Date();
  const month = today.getMonth() + 1; // 0~11 이라 +1
  const date = today.getDate();

  return `${month}월 ${date}일`;
}


function DetailModal({ propsTitle, propsFunc }) {
  return (
    <>
      <div className="modal">
        <h4>{ propsTitle }</h4>
        <p>날짜</p>
        <p>상세내용</p>
        <div><button onClick={propsFunc}>글수정</button></div>
      </div>
    </>
  )
}

class ModalOld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'kim',
      age : 20
    }
  }
  render() {
    return (
      <div>
        안녕 {this.state.name} {this.state.age}
        <button onClick={()=>{ this.setState({age : 21})}}>버튼</button>
      </div>
    )
  }
}

export default App
