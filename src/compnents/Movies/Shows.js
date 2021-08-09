/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../ReusuableComponents/Container';
import Loader from '../ReusuableComponents/Loader';

const Shows = () => {
  const API_KEY = "be40827c051ac4a52c0c81f1e2c24108";
  const {shows, isLoading, openShowPopUp, showsetPopUpItems, showPopUpItems} = useContext(MovieContext);
  const handleSearchPopUp = async (id) =>{
    if(id.trim === '') {
      return;
    }
    const searchIdResponse = await fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${API_KEY}&language=en-US`

    );
    const searchData = await searchIdResponse.json();
    showsetPopUpItems(searchData);
    console.log(searchData);
    console.log(showPopUpItems)
    //setShowPage(false);
  }
    return(
        <div css = {styles} className = "movies">
          <Container>
            {shows.results && shows.results.length === 0 &&(
              <h1 className = "error">No Results</h1>
            )}
            {!isLoading ? (
              shows.results && shows.results.map((showItem, index) => (
                <img onClick ={() => { 
                  const id = shows.results[index].id;
                  //setSearchId(popMovies.results[index].id);
                  openShowPopUp();
                  console.log("Clicked Popular Show Image ");
                  //console.log(popMovieItem.poster_path);
                  console.log(shows.results[index].id)
                  
                  console.log(id)
    
                  handleSearchPopUp(shows.results[index].id);
    
                  
    
    
                }} 
                key = {index} src = {`https://image.tmdb.org/t/p/w400/${showItem.poster_path}`} alt = "poster"/>
              ))
            ) : (
              <Loader />
            )}
          </Container>
        </div>
    );
};

const styles = css`
width: 100%;
.Container{
  &:nth-of-type(1){
    height: 78vh;
    overflow-y: scroll;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    &:: -webkit-scrollbar{
      width: 0;
    }
  }
  img{
    width: 100%;
    max-width: 240px;
    height: 360px;
    margin: 10px 0;
    border: 2px;
    border-radius: 15px;
    box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 20%);
    transition: 1s ease;
    
    
  }

}

@media(max-width: 600px){
  .Container {
    img{
      max-width: 100%;
      height: 500px;
    }
  }
}


@media(min-width: 601px) and (max-width: 854px){
  .Container {
    img{
      max-width: 48%;
    }
  }
}


@media(min-width: 855px) and (max-width: 1144px){
  .Container {
    img{
      max-width: 31%;
    }
  }
}


@media(min-width: 1145px) and (max-width: 1365px){
  .Container {
    img{
      max-width: 23.4%;
    }
  }
}



`;

export default Shows;