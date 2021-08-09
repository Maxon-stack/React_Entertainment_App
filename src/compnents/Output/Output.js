/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../ReusuableComponents/Container';
import Popular from '../Popular/Popular';
import Movies from '../Movies/Movies';
import MoviePage from '../Movies/MoviePage';
import ShowPage from '../Movies/ShowPage';
import PopularShows from '../Popular/PopularShows';
import Shows from '..//Movies/Shows'
import MoviesPopUp from '../Movies/MoviesPopUp';
import ShowsPopUp from '../Popular/ShowsPopUp';

const Output = () => {

  const {activateLink, popUp, setPopUp, showpopUp, showsetPopUp, } = useContext(MovieContext);

  return(
      <div css = {styles} className = "output">
        {activateLink === "Popular Movies" && (
          <Container>
            <MoviesPopUp popUp = {popUp} setPopUp = {setPopUp}/>
            <Popular/>
          </Container>
        )}
        {activateLink === "All Movies" && (
        <Container>
        <React.Fragment>
          <MoviesPopUp popUp = {popUp} setPopUp = {setPopUp}/>
          <Movies />
          <MoviePage />
        </React.Fragment>
      </Container>
        )}
        {activateLink === "All Shows" && (
        <Container>
        <React.Fragment>
          <ShowsPopUp showpopUp = {showpopUp} showsetPopUp = {showsetPopUp}/>
          <Shows/>
          <ShowPage />
        </React.Fragment>
      </Container>
        )}
        {activateLink === "Popular Shows" && (
          <Container>
            <ShowsPopUp showpopUp = {showpopUp} showsetPopUp = {showsetPopUp}/>
            <PopularShows/>
          </Container>
        )}
      </div>
  );
};

const styles = css`
  width: 100%;
  min-height: calc(100vh - 80px);
  display: flex;
  .Container{
    display: flex';
    flex-direction: column;
    justify-content: space-evenly;
  }
  @media(max-width: 1365px){
    .Container{
      max-width: 90%
    }
  }
`;

export default Output;