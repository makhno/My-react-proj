import React from "react"
import {fireEvent, render, wait, waitFor} from "@testing-library/react"
import {MemoryRouter} from "react-router-dom"
import configureMockStore from "redux-mock-store"
import thunk from "redux-thunk"
import { expect } from "chai"
import axios from 'axios'
import sinon from "sinon"

import {Provider} from "react-redux"
import AxiosExample from "./AxiosExample"

describe("Axios page class implementation", () => {

    let container: HTMLElement
    const mockStore = configureMockStore([thunk])

    const store = mockStore()

    beforeEach(() => {

        container = render(
            <Provider store={store}>
              <MemoryRouter>
                  <AxiosExample/>
              </MemoryRouter>
            </Provider>
        ).container
    })

    it("shows the heading", async () => {
        expect(container.querySelector("h1")).to.exist
        expect(container.querySelectorAll("h1").length).to.eq(1)
        expect(container.querySelector("h1")!.textContent).to.equal("Axios Example")
    })

    it("loads from server", async () => {
        const expectedResponse = {data: [{id: 1, name: "bob"}, {id:2, name: "bill"}]}
        const aStub = sinon.stub(axios, "get").resolves(Promise.resolve(expectedResponse))

        expect(container.querySelector("button#load_persons")).to.exist
        expect(container.querySelectorAll("button#load_persons").length).to.eq(1)

        fireEvent.click(document.querySelector("button#load_persons")!)

        expect(container.querySelector("ul#person_list")).to.exist
        expect(container.querySelectorAll("ul#person_list").length).to.eq(1)

        await waitFor(() => { expect(container.querySelectorAll("ul#person_list li").length).to.eq(2) })
        expect(container.querySelectorAll("ul#person_list li")[0].innerHTML).to.eq("bob")
        expect(container.querySelectorAll("ul#person_list li")[1].innerHTML).to.eq("bill")
    })
})



