import React from "react";
import { Button } from "./Button";

import { storiesOf } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import { withActions, actions } from "@storybook/addon-actions";

const eventsHandlers = actions({ onClick: "clicked", onMouseOver: "hovered" });

storiesOf("Button", module)
  // .addDecorator(withActions("mouseover", "click .btn"))
  // .add("with actions", () => (
  //   <div>
  //     Clicks on this button will be logged:{" "}
  //     <button className="btn" type="button">
  //       Button
  //     </button>
  //   </div>
  // ));
  .addDecorator(
    withInfo(
      `
        description or documentation about my component, supports markdown

        ~~~js
        <Button>Click Here</Button>
        ~~~
      `,
      () => <Button>Click the "?" mark at top-right to view the info</Button>
    )
  )
  .add(
    "with Emoji",
    () => (
      <Button {...eventsHandlers}>
        <span role="img" aria-label="so cool">
          😀 😎 👍 💯
        </span>
      </Button>
    ),
    { info: { inline: true, header: false } } // Make your component render inline with the additional info
  )
  .add(
    "with Text",
    () => <Button {...eventsHandlers}>Hello Button</Button>,
    { info: "☹️ no emojis" } // Add additional info text directly
  );
