
import api from './axios';


// 전체 맛집 목록
export const getPlaces = async () => {
  try {
    const response = await api.get('/places');
    return response.data.places;
  } catch (error) {
    console.error(" Loading Fail ... ", error)
    return []
  }
};

// 찜한 맛집 목록
export const getUserPlaces = async () => {
  try {
    const response = await api.get('/users/places');
  return response.data.places;
  } catch (error) {
    console.error(" Loading Fail ... ", error)
    return []
  }
}


export const saveUserPlace = async (place) => {
  try {
    const response = await api.post('/users/places', { place });
    return response.data.places;
  } catch (error) {
      console.error(" Loading Fail ... ", error)
      return []
  }
};


export const deleteUserPlace = async (id) => {
  try {
    const response = await api.delete(`/users/places/${id}`);
    return response.data.places;
} catch (error) {
    console.error(" Loading Fail ... ", error)
    return []
}
};