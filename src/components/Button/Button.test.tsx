import * as React from "react";
import Enzyme, { shallow, ShallowWrapper } from "enzyme";
import { create, ReactTestRenderer } from "react-test-renderer";

import { Button } from "../Button";

let wrapper: ShallowWrapper;
let snapshot: ReactTestRenderer;

beforeEach(() => {
  const button = <Button children={"Hello!"} />;

  wrapper = shallow(button);
  snapshot = create(button);
});

describe("<Button />", () => {
  describe("Snapshot test", () => {
    test("Snapshot test", () => {
      expect(snapshot.toJSON()).toMatchSnapshot();
    });
  });

  describe("Interaction testing", () => {
    it("it should toggle button label after click event", () => {
      expect(wrapper.text()).toEqual("Hello!");

      wrapper.find("button").simulate("click");

      expect(wrapper.text()).toEqual("Goodbye");
    });
  });
});
