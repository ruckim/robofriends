import * as actions from "./actions"
import {CHANGE_SEARCHFIELD, REQUEST_ROBOTS_PENDING, REQUEST_ROBOTS_SUCCESS} from "./constants";
import configureMockStore from "redux-mock-store"
import thunkMiddleware from "redux-thunk"
import moxios from "moxios"
import {apiCall} from "./api/api";

const mockStore = configureMockStore([thunkMiddleware])

describe("creating actions",()=>{
    beforeEach(()=> moxios.install())
    afterEach(()=> moxios.uninstall())
    const mockRobot = [{name: "name", mail: "mail", id:"id"}]
    it("should create action to search robots",()=>{
        const expectedAction = {
            type: CHANGE_SEARCHFIELD,
            payload: "some searched text"
        }

        expect(actions.setSearchField("some searched text")).toEqual(expectedAction)
    })

    it("handle requesting robots pending",()=>{
        const expectedAction = {
            type: REQUEST_ROBOTS_PENDING,
        }
        const store = mockStore();
        store.dispatch(actions.requestRobots());
        const action = store.getActions();
        expect(action[0]).toEqual(expectedAction)
    })

    // it("handle requesting robots success",()=>{
    //     const expectedAction = {type: REQUEST_ROBOTS_SUCCESS, payload: mockRobot }
    //     const store = mockStore();
    //     moxios.wait(()=>{
    //         const request = moxios.requests.mostRecent()
    //         request.respondWith(mockRobot)
    //     })
    //
    //     store.dispatch(actions.requestRobots()).then(()=>{
    //         const actual = store.getActions()
    //         expect(actual).toEqual(expectedAction)
    //     });
    //
    // })

})
