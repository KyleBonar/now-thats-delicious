import * as React from "react";
import Link from "next/link";
import styled from "../../theme/styled-components";

interface LinkProps {
  children:
    | string
    | Element
    | JSX.Element
    | Array<string | Element | JSX.Element>;
  to?: string;
  href?: string;
  className?: string;
}

const Link2: React.SFC<LinkProps> = props => {
  return (
    <Link href={props.to || props.href || "#"}>
      <a className={props.className}> {props.children}</a>
    </Link>
  );
};

const StyledLink = styled(Link2)`
  text-decoration: none;
  font-family: FuturaMedium;
  color: ${props => props.theme.secondaryThemeColor};

  &:hover,
  &:focus {
    color: ${props => props.theme.primaryThemeColor};
  }
`;

export { StyledLink as Link };
