import {combineReducers} from 'redux';
import update_Reducer from './update_Reducer';
import getList_Reducer from './getList_Reducer';
import getOne_Reducer from './getOne_Reducer';

const reducers = combineReducers(
    {
        getList_Reducer,
        update_Reducer,
        getOne_Reducer,
    });

export default reducers;
