import React, {Component} from 'react';
import PropTypes from 'prop-types';
import StarRating from './StarRating';
import './Color.css';

import { rateColor, removeColor } from './actions';

class Color extends Component {
    constructor(props){
        super(props);
        this.state = {
            status : ''
        };
    }
    //프로퍼티를 얻고 상태를 초기화 하면 호출됨. 갱신 생애주기 메소드 실행하려면 비동기 콜백 내부에서 setState호출 해야함
    componentWillMount() { 
        this.style = {backgroundColor : '#CCC'};
    }

    //컴포넌트 갱신 전에 호출된다. (주의 렌더링 전 아님)
    //자식 Color 컴포넌트 한개만 수정,혹은 삭제했을뿐인데 모든 자식 Color컴포넌트를 갱신한다.
    //아무 처리없이 평점을 매기면 색상, starating, 그안에 5개별 모두 갱신된다.
    componentWillUpdate (nextProps) {
        const {title, rating} = this.props;
        this.style = null;
        this._title.style.backgroundColor = 'red';
        this._title.style.color = 'white';
        alert(`${title} : 평점 ${rating} -> ${nextProps.rating}`);
    }

    componentDidUpdate(prevProps) {
        const {title, rating} = this.props;
        const status = (rating > prevProps.rating) ? '좋아짐' : '나빠짐';
        this._title.style.backgroundColor = '';
        this._title.style.color = 'black';
    }

    //true이면 나머지 갱신 생애주기가 발생
    shouldComponentUpdate(nextProps) {
        const {rating} = this.props;
        return rating !== nextProps.rating
    }

    componentWillReceiveProps(nextProps) {
        const {title, rating} = this.props;
        const status = (rating > nextProps.rating) ? 'minus' : 'plus';
        this.setState({status});
    }


    render() {
        const { id, title, rating, color, onRate } = this.props;
        const { status } = this.state;
        const { store } = this.context;
        return (
            <section className="color" style={this.style}>
                <h1 ref={input => this._title = input}>{title}</h1>
                <button onClick={()=>store.dispatch(removeColor(id))}></button>
                <div className="color" style={{backgroundColor : color}}></div>
                <div className={'state ' + status}>{
                    (status === 'plus') ? '올라감' : 
                    (status === 'minus') ? '떨어짐' : ''
                }</div>
                <StarRating starsSelected={rating} onRate={rating => store.dispatch(rateColor(id, rating))} />
            </section>
        );
    }

    static propTypes = {
        title : PropTypes.string,
        color : (props, propName) => {
            if(!props[propName]) new Error('컬러 코드(color)를 꼭 입력해야합니다.');
            else if(typeof props[propName] !== 'string') new Error('컬러 코드(color)는 string이어야 합니다.');
            else if(/^#.{6}/.test(props[propName])) new Error('컬러 코드(color)는 #FFFFFF 형식으로 입력해야합니다.');
        },
        rating : PropTypes.number,
        onRate : PropTypes.func
    }

    static defaultProp = {
        title : '',
        rating : 0,
        color : '#000000',
        onRate : f=>f
    }
}

Color.contextTypes = {
    store : PropTypes.object
}

export default Color;