import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";
import styled from "styled-components";

import Heading from "../components/Heading";
import Text from "../components/Text";
import StyledLink from "../components/StyledLink";
import ListItem from "../components/ListItem";

const Posts = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <section>
        <Heading level={1}>Blog</Heading>
        <Posts>
          {allPostsData.map(({ id, date, title }) => (
            <ListItem level="md" key={id}>
              <StyledLink href={`/posts/${id}`} name={title} />
              <Text level="xs">
                <Date dateString={date} />
              </Text>
            </ListItem>
          ))}
        </Posts>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
