import React, { useState, createContext, useEffect } from "react";
export const  MovieContext= createContext();
export const  MovieState = ({ children }) => {
  const API_KEY = "be40827c051ac4a52c0c81f1e2c24108";

  const [hiddenMenu, setHiddenMenu] = useState(true);
  const [activateLink, setActiveLink] = useState("Popular Movies");
  const [popMovies, setPopMovies] = useState([]);
  //Pop shows:
  const [popShows, setPopShows] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  //current page for shows:
  const [currentPageShow, setCurrentPageShow] = useState(1);
  const [movies, setMovies] = useState([]);
  // get shows:
  const [shows, setShows] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showPage, setShowPage] = useState(true);
  // set show page:
  const [showPageShow, setShowPageShow] = useState(true);
  // add pop-up
  const [popUp, setPopUp] = useState(false);
  const [popUpItems, setPopUpItems] = useState({});
  const [showpopUp, showsetPopUp] = useState(false);
  const [showpopUpItems, showsetPopUpItems] = useState({});
  const openPopUp = () =>{
    setPopUp(prev => !prev);
    //console.log(prev);
  }
  const openShowPopUp = () => {
    showsetPopUp(prev => !prev);
  
  }
  const getPopMovies = async () =>{
    const popMovieResponse = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    const popMoviesData = await popMovieResponse.json();
    setPopMovies(popMoviesData);
    console.log(popMoviesData)
  };
  //get pop Shows:
  const getPopShows = async () => {
    const popShowResponse = await fetch( `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_original_language=en&with_watch_monetization_types=flatrate`);
    const popShowsData = await popShowResponse.json();
    setPopShows(popShowsData);
  }
  const getMovies = async () => {
    const response =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&region=US&sort_by=vote_count.desc&include_adult=true&include_video=true&page=${currentPage}`
    );
    const data = await response.json();
    //console.log(data)
    if(search.trim() === "") {
      setMovies(data); // use this to set shows and people
    }
  };
  // get shows
  const getShows = async () => {
    const response =  await fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&sort_by=vote_count.desc&page=${currentPageShow}&timezone=America%2FNew_York&with_original_language=en&with_watch_monetization_types=flatrate`
    );
    const data = await response.json();
    //console.log(data)
    if(search.trim() === "") {
      setShows(data); // use this to set shows and people
    }
  };
  const handleSearch = async (e) =>{
    e.preventDefault();
    if(search.trim === '') {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${search}&page=1`

    );
    const searchData = await searchResponse.json();
    setMovies(searchData);
    setShowPage(false);
  }
  const handleSearchShow = async (e) =>{
    e.preventDefault();
    if(search.trim === '') {
      return;
    }
    const searchResponse = await fetch(
      `https://api.themoviedb.org/3/search/tv?api_key=${API_KEY}&language=en-US&query=${search}&page=1`

    );
    const searchData = await searchResponse.json();
    setShows(searchData);
    setShowPageShow(false);
  }
  const newPage = (direction) => {
    if (direction === "Next") {
      setCurrentPage(currentPage + 1);
      setIsLoading(true);
    } else if (direction === "Previous" && currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const newPageShow = (direction) => {
    if (direction === "Next") {
      setCurrentPageShow(currentPageShow + 1);
      setIsLoading(true);
    } else if (direction === "Previous" && currentPageShow !== 1) {
      setCurrentPageShow(currentPageShow - 1);
    }
  };
  useEffect(() =>{
    if (search.trim() === "") {
      setShowPage(true);
    }
    getMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search, currentPage]);
  useEffect(() =>{
    if (search.trim() === "") {
      setShowPageShow(true);
    }
    getShows();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[search, currentPageShow]);

  useEffect(() =>{
    getPopMovies();
    getPopShows();
  }, []);
  useEffect(() =>{
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(loadingTimeout);
  }, [movies, currentPage, currentPageShow])
  return (
    <MovieContext.Provider 
      value={{ 
        hiddenMenu, 
        setHiddenMenu,
        activateLink, 
        setActiveLink, 
        popMovies, 
        search, 
        setSearch,
        currentPage,
        isLoading, 
        setIsLoading,
        setCurrentPage,
        movies, 
        setMovies,
        getPopMovies,
        getMovies,
        handleSearch,
        handleSearchShow,
        showPage, 
        setShowPage,
        showPageShow, 
        setShowPageShow,
        newPage,
        newPageShow,
        popShows, 
        setPopShows,
        shows, 
        setShows,
        currentPageShow, 
        setCurrentPageShow,
        //Image PopUp setup
        popUp, 
        setPopUp,
        openPopUp,
        //popup fetch
        //handleSearchPopUp,
        popUpItems, 
        setPopUpItems,
        showpopUp, 
        showsetPopUp,
        showpopUpItems, 
        showsetPopUpItems,
        openShowPopUp,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};