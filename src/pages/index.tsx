import React from "react";
import { NextPage } from "next";

// Page Layout
import Page from "../containers/Main";

// Page Components
import { Button } from "../components";

interface Props {
  userAgent?: string;
}

const Index: NextPage<Props> = ({ userAgent }) => (
  <Page id="index">
    <div className="bx--grid">
      <div className="bx--row">
        <section className="bx--col-lg-12">
          <h2
            style={{
              fontWeight: "bold",
              margin: "30px 0",
              fontSize: "20px"
            }}
          >
            User Agent
          </h2>
          <p style={{ lineHeight: "20px" }}>Your user agent: {userAgent}</p>
          <h2
            style={{
              fontWeight: "bold",
              margin: "30px 0",
              fontSize: "20px"
            }}
          >
            Heading 2
          </h2>
          <p style={{ lineHeight: "20px" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <Button onClick={() => {}}>Test</Button>
      </div>
    </div>
  </Page>
);

Index.getInitialProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] : navigator.userAgent;
  return { userAgent };
};

export default Index;
