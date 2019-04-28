import React, {Children} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Expandable from './Expandable';
import MenuButton from './MenuButton';

const Letter = /./g
const ShowHideMessage = ({children, collapsed, expandCollapse}) =>
    <p onClick={expandCollapse}>
        {(collapsed) ? children.replace(Letter, 'x') : children}
    </p>
const HiddenMessage = Expandable(ShowHideMessage);

const PopupButton = Expandable(MenuButton);

ReactDOM.render(
    <React.Fragment>
        <HiddenMessage >
        방가방가
        </HiddenMessage>
        <PopupButton hidden={true} txt="팝업 토글">
            <h1>숨겨진 콘텐츠</h1>
            <p>이 콘텐츠는 처음에 숨겨져있습니다.</p>
        </PopupButton>
    </React.Fragment>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
