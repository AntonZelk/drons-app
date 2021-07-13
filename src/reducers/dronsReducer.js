import {
  ADD_PREVIEW,
  FETCH_DRONS,
  HIDE_LOADER,
  SHOW_ERROR,
  SHOW_LOADER,
} from '../actions/types';

const initialState = {
  drons: [],
  preview: null,
  isLoading: false,
  isError: false,
};

export const dronsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isLoading: true };
    case HIDE_LOADER:
      return { ...state, isLoading: false };
    case SHOW_ERROR:
      return { ...state, isError: true };
    case FETCH_DRONS:
      return { ...state, drons: action.payload };
    case ADD_PREVIEW:
      return { ...state, preview: action.payload };

    default:
      return state;
  }
};
