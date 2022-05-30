import styled from "styled-components";
import Text from "./Text";

const ListItem = styled(Text)`
  list-style: none;
  margin: 0;
  padding-bottom: 1rem;

  &:last-of-type {
    padding: 0;
  }
`;

export default ListItem;
