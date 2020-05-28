import React from "react";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";
 
const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const Loader = (loading) =>{
    return (
        <div className="sweet-loading">
          <RingLoader
            css={override}
            size={60}
            color={"#123abc"}
            loading={loading}
          />
        </div>
      );  
}

export default Loader
