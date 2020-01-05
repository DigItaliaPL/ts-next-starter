// ------------------------------------------------
// PAGE Main Section
// ------------------------------------------------
import React, { ReactNode } from "react";
import { MetaTags } from "../../components";
import { TMetaTags } from "../../interfaces";

type MainProps = {
  id: string;
  children: ReactNode;
  metaTags?: TMetaTags;
};

const PageMain = ({ id, children, metaTags }: MainProps) => {
  return (
    <>
      {metaTags && <MetaTags tags={metaTags} />}
      <main id={id}>{children}</main>
    </>
  );
};

export default PageMain;
