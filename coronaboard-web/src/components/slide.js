import React from "react";
import { css } from "@emotion/react";

export const Slide = ({ title, children }) => (
  <div
    css={css`
      text-align: center;
      border-top: 1px solid #aaa;
      padding-top: 40px;
      padding-bottom: 60px;
    `}
  >
    <h2>{title}</h2>
    <div>{children}</div>
  </div>
);
