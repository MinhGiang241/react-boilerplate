import React from "react";
import { shallow } from "enzyme";
import DashboardPage from "../../components/DashboardPage";
import toJSON from "enzyme-to-json";

test("should render ExpenseDashboardPage correctly", () => {
  const wrapper = shallow(<DashboardPage />);
  expect(toJSON(wrapper)).toMatchSnapshot();
});
