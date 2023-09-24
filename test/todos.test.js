import { render, screen } from "@testing-library/react";

import Todos from "../components/Todos";
import { Provider } from "react-redux";
import store from "../Reducers/store";

describe("<Todos />", () => {
  it("Display button", () => {
    render(
      <Provider store={store}>
        <Todos />
      </Provider>
    );
    const addBtn = screen.getByRole("button");
    expect(addBtn).toBeInTheDocument();
  });

  
  it("display input", () => {
    render(
        <Provider store={store}>
          <Todos />
        </Provider>
      );
      const inputTest=screen.getByLabelText("Add todos");
  expect(inputTest).toBeInTheDocument();
  });
});
