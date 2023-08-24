import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getSingleOutfit = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits/${id}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const getAllOutfits = () => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const getOutfitsByUser = (uid) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits?uid=${uid}`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        resolve(Object.values(data));
      } else {
        resolve([]);
      }
    })
    .catch(reject);
});

const deleteOutfit = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const createOutfit = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then((response) => response.json())
    .then((data) => resolve(data))
    .catch(reject);
});

const updateOutfit = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits/${payload.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
    .then(resolve)
    .catch(reject);
});

export {
  getSingleOutfit, getAllOutfits, getOutfitsByUser, deleteOutfit, createOutfit, updateOutfit,
};
