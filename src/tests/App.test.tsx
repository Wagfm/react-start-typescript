import React from "react";

import {render} from "@testing-library/react";

import App from "../components/App";


test("Must pass", async function () {
    const {container} = render(<App/>);
    expect(container).toBeTruthy();
    const paragraph = container.querySelector("p");
    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent).toEqual("Hello, World!");
});

test("Must fail to assure jest is working properly", async function () {
    const {container} = render(<App/>);
    expect(container).toBeTruthy();
    const paragraph = container.querySelector("p");
    expect(paragraph).toBeTruthy();
    expect(paragraph?.textContent).toEqual("Goodbye, World!");
});