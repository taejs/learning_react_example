import React from 'react';
import {Store} from './store';

export default function App() {
    const {state, dispatch} = React.useContext(Store);

    const fetchDataAction = async () => {
      const data = await fetch('https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes');
      const dataJSON = await data.json();
      return dispatch({
        type : 'FETCH_DATA',
        payload : dataJSON._embedded.episodes
      })
    }

    React.useEffect(() => {
      state.episodes.length === 0 && fetchDataAction();
    })

  const toggleFavAction = episode=> {
    const episodInFavorites = state.favorites.filter(fav => fav.id !== episode.id);
    let dispatchObj = {
      type : 'ADD_FAVORITE',
      payload : episode.id
    };
    if(episodInFavorites) {
      const favoriteWithoutEpisode = state.favorites.filter(fav => fav.id !== episode.id)
      dispatchObj = {
        type : 'REMOVE_FAVORITE',
        payload : favoriteWithoutEpisode
      };
    }
    return dispatch(dispatchObj);

  }

    return (
    <React.Fragment>
      {console.log(state)}
      <div className={"header"}>
        <h1>Ricky and Morty</h1>
        <p>pick your favorite episode</p>
      </div>
      <section class="episode-layout">
          {state.episodes.map(episode => {
            return (
              <section class="episode-box" key={episode.id}
              onClick={_=>toggleFavAction(episode)}>
                <img
                  src={episode.image.medium}
                  alt={`Rick and Morty ${episode.name}`}
                />
                <div>{episode.name}</div>
                <section>
                  <div>
                    Season: {episode.season} Number: {episode.number}
                  </div>
                </section>
              </section>
            );
          })}
        </section>
    </React.Fragment>
  )
}