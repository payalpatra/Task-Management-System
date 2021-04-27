import * as actionTypes from "./task-types";

import Data from "../../data.json"

const INITIAL_STATE = {
    Data,
    cart: [],
    currentItem: null,
};

const taskReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case actionTypes.ADD_TO_TASK:
            // Great Item data from products array
            const item = state.Data.tasks.find(
                (task) => task._id === action.payload._id
            );
            // Check if Item is in cart already
            const inCart = state.cart.find((item) =>
                item._id === action.payload._id ? true : false
            );

            return {
                ...state,
                cart: inCart
                    ? state.cart.map((item) =>
                        item._id === action.payload._id
                            ? { ...item, qty: item.qty + 1 }
                            : item
                    )
                    : [...state.cart, { ...item, qty: 1 }],
            };
        case actionTypes.REMOVE_FROM_TASK:
            return {
                ...state,
                cart: state.cart.filter((item) => item._id !== action.payload._id),
            };
        case actionTypes.ADJUST_ITEM_QTY:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item._id === action.payload._id
                        ? { ...item, qty: +action.payload.qty }
                        : item
                ),
            };
        case actionTypes.LOAD_CURRENT_ITEM:
            return {
                ...state,
                currentItem: action.payload,
            };
        default:
            return state;
    }
};

export default taskReducer;
