import {
  REQUEST_DRONS,
  FETCH_DRONS,
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_ERROR,
  ADD_PREVIEW,
} from './types';

export const requestDrons = () => {
  return {
    type: REQUEST_DRONS,
  };
};

export const fetchDrons = (arr) => {
  const payload = arr.filter((dron) => !dron.preview);
  return {
    type: FETCH_DRONS,
    payload,
  };
};

export const addPreview = (arr) => {
  let previewObj = {};
  arr.forEach((dron) => {
    if (dron.preview) {
      previewObj = dron;
    }
  });
  return {
    type: ADD_PREVIEW,
    payload: previewObj,
  };
};

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const showError = () => {
  return {
    type: SHOW_ERROR,
  };
};
