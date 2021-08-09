/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';
import Container from '../ReusuableComponents/Container';
import HeroNavLogo from './HeroNavLogo';
import HeroNavMenu from './HeroNavMenu';
import HeroNavSearch from './HeroNavSearch';
import HeroNavSearchShow from './HeroNavSearchShow';

const HeroNav = () => {
  const {hiddenMenu, setHiddenMenu} = useContext(MovieContext);
    return(
        <nav css = {styles}>
          <Container>
            <div className = "wrapper">
              <HeroNavLogo />
              <HeroNavMenu />
            </div>
            <HeroNavSearch/>
            <HeroNavSearchShow/>
            <i 
            onClick = {()=> setHiddenMenu(!hiddenMenu)} 
            id = "burgerMenu" 
            className = {hiddenMenu ? "fas fa-bars" : "fas fa-times"}
            ></i>
          </Container>
        </nav>
    );
};
const styles = css`
  width: 100%;
  min-height:80px;
  padding: 20px 0;
  background: #212229;
  .Container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .wrapper{
      display: flex;
      align-items: center;
    }
    #burgerMenu{
      color: #f9a5ff;
      cursor: pointer;
      display: none;
    }
  }
  @media(max-width:860px){
    .Container{
      #burgerMenu{
        display: block;
      }
    }
  }

  @media(max-width: 1365px){
    .Container{
      max-width: 90%;
    }
  }


`;
export default HeroNav;