import {
    CHANGE_SEARCHFIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants"
import * as reducers from "./reducers"

describe("searchRobots", ()=> {
    const initialStateSearch = {
        searchField: ""
    };
    it("should return the initial state",()=>{
        expect(reducers.searchRobots(undefined, {})).toEqual({
            searchField: ""
        })
    })

    it("should handle search event",()=>{
        expect(reducers.searchRobots(initialStateSearch, {type: CHANGE_SEARCHFIELD, payload: "search term"})).toEqual({
            searchField: "search term"
        })
    })
})

describe("requestRobots", ()=> {
    const initialStateRobots = {
        isPending: false,
        robots: [],
        error: ""
    };
    it("should return the initial state",()=>{
        expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots)
    })

    it("should handle REQUEST_ROBOTS_PENDING action",()=>{
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_PENDING })).toEqual({
            isPending: true,
            robots: [],
            error: ""
        })
    })

    it("should handle REQUEST_ROBOTS_SUCCESS action",()=>{
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_SUCCESS, payload: [{id: "id",name:"name",email:"email"}]})).toEqual({
            isPending: false,
            robots: [{id: "id",name:"name",email:"email"}],
            error: ""
        })
    })

    it("should handle REQUEST_ROBOTS_FAILED action",()=>{
        expect(reducers.requestRobots(initialStateRobots, {type: REQUEST_ROBOTS_FAILED, payload: "error happened"})).toEqual({
            isPending: false,
            robots: [],
            error: "error happened"
        })
    })
})