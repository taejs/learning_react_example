import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import Timeline from './Timeline';

const historicDatesForSkiing = [{
  year:1879,
  event : '스키 생산 시작'
},{
  year:1882,
  event : '미국 스키 클럽 창설'
},{
  year:1924,
  event : '제 1회 겨울 올림픽 개최'
},{
  year:1926,
  event : '첫번 째 미국 스키샵이 문을 염'
},{
  year:1032,
  event : '북아메리카 최초로 견인 로프 작동시작'
},{
  year:1936,
  event : '스쿼벨리, 매드리버 글렌 개장'
}]

ReactDOM.render(<Timeline name="스키의 여사" data={historicDatesForSkiing} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
