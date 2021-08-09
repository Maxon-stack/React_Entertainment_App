/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react';
//import React from 'react';

const Container = ({ children }) =>(
   <div css = {styles} className="Container">{children}</div>
);

const styles = css`
  width: 100%;
  max-width: 1300px;
  margin: 0 auto; 
`;

export default Container;
