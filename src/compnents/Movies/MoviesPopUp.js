/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { MovieContext } from '../../Context/MovieContext';
import { useContext } from 'react';


const MoviesPopUp = () => {
  const { openPopUp, popUp, popUpItems} = useContext(MovieContext);
  return (
    <div>{popUp ? <div css  = {styles} className = "popUp"> 
    <div id = "left">
    <img onClick ={() => { 
      console.log(popUpItems)
    }}
    src = {`https://image.tmdb.org/t/p/w400/${popUpItems.poster_path}`} alt = "Poster"/>
    </div>
    <div id = "right">
    <button id = "close" onClick = {() =>{
    console.log("hello")
    openPopUp(false)
    }}>X</button>
    <h1 id = "Title">{popUpItems.original_title}</h1>
    <h5 id= "tagline">"{popUpItems.tagline}"</h5>
    <h5 id = "overview_Title">Overview:</h5>
    <p id = "overview">{popUpItems.overview}</p>
    <p id = "rating">Rating: {popUpItems.vote_average}</p>
    <p id = "release">Release Date: {popUpItems.release_date}</p>
    <p id = "run">Runtime: {popUpItems.runtime} Minutes</p>
    </div>
  </div>  : null}</div>);
};

const styles = css`
display: flex;
background-color: #fff;
color: #fff;
background: #212229;
position: absolute;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
width: 85%;
height: 81.4999vh;
border-radius: 15px;
box-shadow: 4px 4px 4px 4px #DC234D;
#overview_Title{
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 25px;
  
}
#overview{
  margin-bottom: 20px;
  font-size: 18px;
  margin-left: 5%;
  width: 90%;
  

}
#left{
  width: 30%;
  float: left;
  margin-left: 10px;

}
#right{
  width: 70%;
  float: right;
  align-items: center;
  justify-content: center;
  text-align: center;
}
#Title{
  color: #DC234D;
  font-size: 55px;
  
  
}
#tagline{
  color: #DC234D;
  font-size: 25px;
}
#close{
  cursor: pointer;
  padding: 0;
  background: #DC234D;
  color: #fff;
  border: none;
  width: 2%;
  position: absolute;
  top: 20px;
  right: 20px;
  justify-content: center;
  align-items: center;
  z-index: 10;

}
#popUp{

  background-color: red;
}
img{
  width: 100%;
  max-width: 312px;
  height: 468px;
  margin: 10px 0;
  border: 2px;
  border-radius: 15px;
  box-shadow: 4px 4px 8px 0 rgb(0 0 0 / 20%);
  transition: 1s ease;
}
img:hover , img:focus{   
  -webkit-transform: scale(0.8);
  -ms-transform: scale(0.8);
  transform: scale(0.8);
  transition: 1s ease;
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

export default MoviesPopUp;