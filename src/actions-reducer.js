import { combineReducers } from 'redux';
import initialData from './base.json';

const initialState = initialData;

const NAP = 'napping';
const EAT = 'eating';
const PLAY = 'playing';

const ACTION_NAP = NAP;
const ACTION_EAT = EAT;
const ACTION_PLAY = PLAY;

const newName = 'Rango';
const ACTION_SET_NAME = newName;


export function setActivityNap() {
    return {
        type: ACTION_NAP
    };
}
export function setActivityEat() {
    return {
        type: ACTION_EAT
    };
}
export function setActivityPlay() {
    return {
        type: ACTION_PLAY
    };
}
export function setName(Name) {
    console.log(Name)
    return {
        type: ACTION_SET_NAME,
        payload: {
            name: Name
        }
    }
}


function activity(state = initialState.activity, action = {type: ""}) {
    switch (action.type) {
        case ACTION_NAP:
            return NAP;
        case ACTION_EAT:
            return EAT;
        case ACTION_PLAY:
            return PLAY;
        default:
            return state;
    }
}

function name(state = initialState.name, action = {type: ""}) {
    switch (action.type) {
        case ACTION_SET_NAME:
            return action.payload.name;
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    activity: activity,
    name: name
});