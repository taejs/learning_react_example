import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

class CountryList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countryNames : [],
            loading : false
        }
    }

    componentDidMount() {
        this.setState({loading : true})
        var a = fetch('https://restcountries.eu/rest/v1/all')
            .then(response => response.json())
            .then(json => json.map(country => country.name))
            .then(countryNames =>
                this.setState({countryNames, loading : false})
            );
        setTimeout(a, 5000);
    }

    render() {
        const {countryNames , loading} = this.state
        return (loading) ? 
            <div>나라 이름 로딩중..</div> :
            (!countryNames.length) ? 
            <div>나라 이름이 없습니다.</div> :
                <ul>
                    {countryNames.map(
                        (x, i) => <li key={i}>{x}</li>
                    )}
                </ul>
    }
}

export default CountryList;