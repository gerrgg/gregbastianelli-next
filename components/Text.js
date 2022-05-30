import styled from "styled-components";

const handleHeadingFontSize = (level) => {
  switch (level) {
    case "lg":
      return "2.2rem";
    case "md":
      return "1.5rem";
    case "sm":
      return "18px";
    case "xs":
      return "14px";
    default:
      return "18px";
  }
};

const Text = styled.p`
  font-family: "Anonymous Pro", monospace;
  font-size: ${({ level }) => handleHeadingFontSize(level)};
  padding-bottom: 0.5rem;
  margin: 0;

  &:last-of-type {
    padding: 0;
  }
`;

export default Text;
