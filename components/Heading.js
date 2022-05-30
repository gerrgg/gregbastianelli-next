import styled from "styled-components";

const handleHeadingFontSize = (level) => {
  switch (level) {
    case 1:
      return "2.369rem";
    case 2:
      return "1.777rem";
    case 3:
      return "1.333rem";
    case 4:
      return "1rem";
    case 5:
      return "0.75rem";
    case 6:
      return "10px";
  }
};

const Heading = styled.div`
  font-family: "Permanent Marker", cursive;
  font-size: ${({ level }) => handleHeadingFontSize(level)};
`;

export default Heading;
