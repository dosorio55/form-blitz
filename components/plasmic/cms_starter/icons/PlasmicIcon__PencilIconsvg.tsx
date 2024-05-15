// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type PencilIconsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function PencilIconsvgIcon(props: PencilIconsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 100 100"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M80.333.912a3.125 3.125 0 00-4.419 0L65.62 11.207l23.17 23.169 10.293-10.288a3.126 3.126 0 000-4.424L80.333.913zm4.037 37.882L61.202 15.625 20.577 56.25h1.293a3.125 3.125 0 013.125 3.125V62.5h3.125a3.125 3.125 0 013.125 3.125v3.125h3.125a3.125 3.125 0 013.125 3.125V75h3.125a3.125 3.125 0 013.125 3.125v1.294L84.37 38.794zM37.695 85.469a3.143 3.143 0 01-.2-1.094V81.25H34.37a3.125 3.125 0 01-3.125-3.125V75H28.12a3.125 3.125 0 01-3.125-3.125V68.75H21.87a3.125 3.125 0 01-3.125-3.125V62.5H15.62c-.373 0-.744-.069-1.093-.2l-1.12 1.113c-.297.3-.53.657-.687 1.05L.22 95.713a3.125 3.125 0 004.063 4.062l31.25-12.5c.393-.156.75-.39 1.05-.688l1.112-1.118z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PencilIconsvgIcon;
/* prettier-ignore-end */
