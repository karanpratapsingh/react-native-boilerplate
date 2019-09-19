import { SAMPLE_TYPE } from '../actions/Actions.Types';

const initialState = {};

const Reducer = (state = initialState, action) => {

    switch (action.type) {

    case SAMPLE_TYPE:
        return {
            ...state
        };

    default:
        return state;
    };
};

export default Reducer;