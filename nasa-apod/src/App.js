import React from 'react';
import ViewerTemplate from './components/ViewerTemplate';
import SpaceNavigator from './components/SpaceNavigator';
import Viewer from './components/Viewer';
import * as api from './lib/api';
import moment from 'moment';

class App extends React.Component {
  state = {
    loading : false,
    maxDate : null,
    date : null,
    url : null,
    mediaType : null
  };

  getAPOD = async (date) => {

    if(this.state.loading) return;

    this.setState({
      loading : true
    });

    try {
      const response = await api.getAPOD(date);
      const { date : retrievedDate, url, media_type : mediaType} = response.data;
      if(!this.state.maxDate) {
        this.setState({
          maxData : retrievedDate
        });
      }

      this.setState({
        date : retrievedDate,
        mediaType,
        url
      })
    }catch (e) {
      console.log(e);
    }

    this.setState({
      loading : false
    });
  }

  componentDidMount() {
    this.getAPOD();
  }

  calcDate(number) {
    const date = moment(this.state.date).add(number, 'days').format('YYYY-MM-DD');
    return date;
  }

  render() {
    const {url, mediaType, loading} = this.state;
    return (
      <ViewerTemplate
        spaceNavigator={<SpaceNavigator onNext={this.getAPOD.bind(this, this.calcDate(1))} onPrev={this.getAPOD.bind(this, this.calcDate(-1))}/>}
        viewer={(
          <Viewer
            url={url}
            mediaType={mediaType}
            loading={loading}/>
        )}
      />
    )
  }
}

export default App;
