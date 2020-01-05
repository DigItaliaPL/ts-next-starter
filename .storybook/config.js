import { addParameters, configure } from "@storybook/react";
import { themes } from "@storybook/theming";

addParameters({
  options: {
    /**
     * theme storybook, see link below
     */
    theme: themes.dark // default : undefined
  }
});

configure(require.context("../src", true, /\.stories\.(js|ts)x?$/), module);
