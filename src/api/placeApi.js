import api from './axios';

export const getPlaces = async () => {
  const response = await api.get('/places');
  return response.data.places;
};

export const getUserPlaces = async () => {
  const response = await api.get('/users/places');
  return response.data.places;
};

export const saveUserPlace = async (place) => {
  const response = await api.post('/users/places', { place });
  return response.data.places;
};

export const deleteUserPlace = async (id) => {
  const response = await api.delete(`/users/places/${id}`);
  return response.data.places;
};