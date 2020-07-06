import React from "react"
import {fireEvent, render, wait, waitFor} from "@testing-library/react"
import {MemoryRouter, Route, Switch} from "react-router-dom"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { expect } from "chai"

import AboutFunction from "./AboutFunc"
import {Provider} from "react-redux"
import {DUMMY_ACTION} from "./Actions"

describe("About page function implementation", () => {

    let container: HTMLElement
    const mockStore = configureMockStore([thunk])

    // See https://stackoverflow.com/questions/41642041/redux-how-to-update-the-store-in-unit-tests
    let storeState = {pet: "dog"}
    const store = mockStore(() => storeState)

    beforeEach(() => {

        container = render(
            <Provider store={store}>
              <MemoryRouter>
                  <Switch>
                      <Route
                          exact
                          path="/"
                          render={() => (
                              <AboutFunction passedProp = "hello world"/>
                          )}
                      />
                      <Route
                          exact
                          path="/demo"
                          render={() => (
                              <h6>Dummy demo</h6>
                          )}
                      />
                  </Switch>
              </MemoryRouter>
            </Provider>
        ).container
    })

    it("shows headings", async () => {
        expect(container.querySelector("h1")).to.exist
        expect(container.querySelectorAll("h1").length).to.eq(1)
        expect(container.querySelector("h1")!.textContent).to.equal("About Demo")

        expect(container.querySelector("h2")).to.exist
        expect(container.querySelectorAll("h2").length).to.eq(1)
        expect(container.querySelector("h2")!.textContent).to.equal("hello world")
    })

    it("redirects to demo", async () => {
        expect(container.querySelector("button#switch_to_demo")).to.exist
        expect(container.querySelectorAll("button#switch_to_demo").length).to.eq(1)
        fireEvent.click(document.querySelector("button#switch_to_demo")!)

        expect(container.querySelector("h6")!.textContent).to.eq("Dummy demo")
    })

    it("calls dummy action when button pressed", async () => {
        expect(container.querySelector("button#update_redux_val")).to.exist
        expect(container.querySelectorAll("button#update_redux_val").length).to.eq(1)

        expect(container.querySelector("input#input_box")).to.exist
        expect(container.querySelectorAll("input#input_box").length).to.eq(1)

        fireEvent.change(container.querySelector("input#input_box")!, { target: { value: 'cat' } })
        fireEvent.click(document.querySelector("button#update_redux_val")!)

        const actions = store.getActions()
        expect(actions.length).to.eq(1)
        expect(actions[0].type).to.eq("DUMMY_ACTION")
        expect(actions[0].str).to.eq("cat")
    })

    it("updates view on store property change", async () => {
        expect(container.querySelector("span#info_span")).to.exist
        expect(container.querySelectorAll("span#info_span").length).to.eq(1)
        expect(container.querySelector("span#info_span")!.innerHTML).to.eq('dog')

        // See https://stackoverflow.com/questions/41642041/redux-how-to-update-the-store-in-unit-tests
        storeState = {pet: "cat"}
        store.dispatch({ type: 'ANY_ACTION' })
        expect(container.querySelector("span#info_span")!.innerHTML).to.eq('cat')
    })
})
