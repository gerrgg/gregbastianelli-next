import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

const light = {
  background: "#efefef",
  body: "#333",
  linkColor: "#0DA4CE",
};

const dark = {
  background: "#333",
  body: "#efefef",
  linkColor: "#FFEA00",
  linkHoverColor: "#29C5F4",
};

export const siteTitle = "Fullstack Developer - Greg Bastianelli";

const Body = styled.div`
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.body};
  min-height: 100vh;
  margin: 0;
  padding: 0;
`;

const Wrap = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 0 15px;
`;

export default function Layout({ children, home }) {
  return (
    <ThemeProvider theme={dark}>
      <Body>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Anonymous+Pro:wght@400;700&family=Permanent+Marker&display=swap"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
          <title>{siteTitle}</title>
          <meta
            name="description"
            content="Learn how to build a personal website using Next.js"
          />
          <meta
            property="og:image"
            content={`https://og-image.vercel.app/${encodeURI(
              siteTitle
            )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
          />
          <meta name="og:title" content={siteTitle} />
          <meta name="twitter:card" content="summary_large_image" />
        </Head>
        <header></header>
        <Wrap>{children}</Wrap>
        {!home && (
          <div>
            <Link href="/">
              <a>← Back to home</a>
            </Link>
          </div>
        )}
      </Body>
    </ThemeProvider>
  );
}
