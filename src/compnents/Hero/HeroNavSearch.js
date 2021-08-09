/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import { useContext } from 'react';
import { MovieContext } from '../../Context/MovieContext';


const HeroNavSearch = () => {
  const { search, setSearch, handleSearch, activateLink } = useContext(
    MovieContext
  );
    return(
      <form css={styles} onSubmit={handleSearch}>
      {activateLink === "All Movies" && (
        <input
          type="text"
          placeholder="Search Movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
    </form>
    );
};

const styles = css`
  height 40px;
  min-height: 40px;
  input{
    border: none;
    outline: none;
    border-radius: 50px;
    border: 1px solid #2c2f39;
    background: transparent;
    padding: 10px 16px;
    width: 260px;
    color: #DC234D;
    &::placeholder{
      color: #DC234D;
      letter-spacing: 1px;
    }
  }
  @media (max-width: 860px){
    input{
      width: 220px;
      
    }
  }
`;

export default HeroNavSearch;