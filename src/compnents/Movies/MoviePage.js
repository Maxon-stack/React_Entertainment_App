/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
import React, { useContext } from 'react';
import Container from '../ReusuableComponents/Container';
import { MovieContext } from '../../Context/MovieContext';

const MoviePage = () => {
  const { newPage, currentPage, showPage } = useContext(MovieContext);
  return(
    <div css={styles} className="moviesPage">
    {showPage && (
      <Container>
        <React.Fragment>
          <button
            style={{
              cursor: currentPage !== 1 ? "pointer" : "not-allowed",
              background: currentPage !== 1 ? "#32de57" : "#303847",
            }}
            onClick={() => newPage("Previous")}
          >
            Prev Page
          </button>
          <button onClick={() => newPage("Next")}>Next Page</button>
        </React.Fragment>
      </Container>
    )}
  </div>
  );
};

const styles = css`

width: 100%;
.Container {
  &:nth-of-type(1) {
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
      border: none;
      outline: none;
      background: #32de57;
      color: #fff;
      font-size: 20px;
      font-weight: 600;
      border-radius: 4px;
      width: 160px;
      padding: 10px 0;
      cursor: pointer;
      user-select: none;
      margin: 0 10px;
      transition: background 500ms ease-in-out;
      &:hover {
        background: #259a3e;
      }
    }
  }
}
  
`;
export default MoviePage;