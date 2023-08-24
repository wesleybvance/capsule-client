import { clientCredentials } from '../client';

const endpoint = clientCredentials.databaseURL;

const getSingleOutfitItem = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfit_items/${id}`, {
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
  fetch(`${endpoint}/outfit_items`, {
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

const getOutfitItemsByOutfitID = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfits_items?outfitId=${id}`, {
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

const deleteOutfitItem = (id) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfit_items/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(resolve)
    .catch(reject);
});

const createOutfitItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfit_items`, {
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

const updateOutfitItem = (payload) => new Promise((resolve, reject) => {
  fetch(`${endpoint}/outfit_items/${payload.id}`, {
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
  getSingleOutfitItem, getAllOutfits, getOutfitItemsByOutfitID, deleteOutfitItem, createOutfitItem, updateOutfitItem,
};
