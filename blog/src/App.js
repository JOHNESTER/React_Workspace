/* eslint-disable */
import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let posts = '강남 고기 맛집';
  let [글제목, 글제목변경] = useState(['남자코트추천', '강남우동맛집','파이썬 독학하기']);
  let [좋아요, 좋아요변경] = useState(0);
  function returnhundred(){
    return 100;

  }

  function 제목바꾸기(){
    글제목변경(['여자코트추천', '강남우동맛집','파이썬 독학하기']); 
    좋아요변경(글제목[0] = '여자코트추천'); /*이렇게 쓰면안됨 */
  }

  function 제목바꾸기1(){
    /*state를 변경할 때는 DeepCopy를 이용
      같은 object형에 복사 후 수정한 뒤 다시 엎어친다
    */
    var newArray = 글제목; /*이거슨 복사가 아니라 공유다reference data type 특징 */
    var newArray = [...글제목]; 
    /*존나 신박하다... 뭔 문법이냐.. */
    newArray[0] = '여자코트추천'
    글제목변경(newArray);
  }
  return (
    <div className="App">
      <div className="black-nav">
        <div>React Blog</div>
        <button onClick={ 제목바꾸기1}>버튼</button>
        <div className ="list">
          <h3>{ 글제목[0]}<span onClick={ ()=>{ 좋아요변경(좋아요 +1)}}>😍</span> {좋아요} </h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
        <div className ="list">
          <h3>{ 글제목[1] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
        <div className ="list">
          <h3>{ 글제목[2] }</h3>
          <p>2월 17일 발행</p>
          <hr/>
        </div>
      
       <div className="modal">
         <h2>제목</h2>
         <p>날짜</p>
         <p>상세내용</p>
       </div>
      
    <Modal></Modal>  
    </div>
    </div>
  );
}

function Modal(){
  return(
    <div className="modal">
    <h2>제목</h2>
    <p>날짜</p>
    <p>상세내용</p>
    </div>
  )
}




export default App;
