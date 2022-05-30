import styled from "styled-components";
import Link from "next/link";

const StyledLink = styled.a`
  color: ${({ theme }) => theme.linkColor};
  display: flex;
  align-items: center;
  gap: 3px;
  font-family: "Anonymous Pro", monospace;
  font-size: inherit;
  transition: color 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.linkHoverColor};
  }
`;

export default ({ href, name }) => (
  <Link prefetch href={href} passHref>
    <StyledLink level="md">{name}</StyledLink>
  </Link>
);
