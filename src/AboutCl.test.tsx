import React from "react";
import {fireEvent, render, wait} from "@testing-library/react"
import { MemoryRouter } from "react-router-dom";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk"
import { expect } from "chai"

import AboutCl from "./AboutCl"
import {Provider} from "react-redux"

describe("About page class implementation", () => {

    let container: HTMLElement
    const mockStore = configureMockStore([thunk])

    const store = mockStore({})

    beforeEach(() => {

        container = render(
            <Provider store={store}>
              <MemoryRouter>
                <AboutCl/>
              </MemoryRouter>
            </Provider>
        ).container
    })

    it("shows a heading", async () => {
        expect(container.querySelector("h1")).to.exist;
        expect(container.querySelectorAll("h1").length).to.eq(1);
        expect(container.querySelector("h1")!.textContent).to.equal("About Demo")
    })
})
