import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';
import { API_KEY, API_URL } from '../../utils';


export interface Author {
  twitter_username?: string,
  instagram_username?: string,
  name?: string,
  location?: string
}

export interface Image {
  alt_description?: string,
  urls?: any,
  user?: Author
}

interface ImagesState {
  currentImage: Image | null,
  liked?: string[] | null,
  images: Image[] | null,
  loading: boolean,
  hasErrors: boolean,
  filterImages: boolean
}

const imagesSlice = createSlice({
  name: 'images',
  initialState: {
    currentImage: null,
    liked: [],
    images: null,
    loading: false,
    hasErrors: false,
    filterImages: false
  } as ImagesState,
  reducers: {
    setCurrentImage: (state, action) => {
      state.currentImage = action.payload
    },
    setDislike: (state, {payload}) => {
      state.liked = state.liked?.filter((like: string) => like !== payload)
    },
    setLike: (state, {payload}) => {
      state.liked?.push(payload)
    },
    getImages: (state) => {
      state.loading = true
    },
    getImagesSuccess: (state, { payload }) => {
      state.images = payload
      state.loading = false
      state.hasErrors = false
    },
    getImagesFailure: (state) => {
      state.loading = false
      state.hasErrors = true
    },
    setFilter: (state, {payload}) => {
      state.filterImages = payload
    },
  }
});

export const imagesSelector = (state: any) => state.images
export const { setCurrentImage, setLike, setDislike, getImagesFailure, getImages, getImagesSuccess, setFilter } = imagesSlice.actions;
export default imagesSlice.reducer;

export function fetchImages() {
  return async (dispatch: any) => {
    dispatch(getImages())

    try {
      const res = await axios.get(API_URL, {
        headers: {
          Authorization: `Client-ID ${API_KEY}`,
        },
      });
      console.log('res', res.data)
      dispatch(getImagesSuccess(res.data));
    } catch (error) {
      dispatch(getImagesFailure())
    }
  }
}

const KEY = "images";
export function loadState() {
  try {
    const serializedState = localStorage.getItem(KEY);
    if (!serializedState) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    return undefined;
  }
}

export async function saveState(state: any) {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(KEY, serializedState);
  } catch (e) {
    // Ignore
  }
}