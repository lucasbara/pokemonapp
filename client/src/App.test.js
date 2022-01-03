import { render, screen } from "@testing-library/react";
import React from "react";
import App from "./App";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Landing from "./components/Landing/Landing";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/*describe("<Home />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
    it("should render a <Header /> component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });
    it("should render a <Footer /> component", () => {
      expect(wrapper.find(Header)).toHaveLength(1);
    });
  }; */

describe("App", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Home />);
  });
  it("deberia renderizar un componente <Footer />", () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });
});

/*describe("Landing", () => {
  test("It renders a Landing page", () => {
    render(<Landing />);
  });
});

describe("Loading", () => {
  test("renders Loading component", () => {
    render(<Loading />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    // screen.debug();
  });
});*/
