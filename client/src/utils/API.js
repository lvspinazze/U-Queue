import axios from 'axios';

export default {
  // Gets all books
  getQueue: function() {
    return axios.get('/api/queue');
  },
  // Gets the book with the given id
  getGuest: function(id) {
    return axios.get('/api/queue/' + id);
  },
  // Deletes the book with the given id
  deleteGuest: function(id) {
    return axios.delete('/api/queue/' + id);
  },
  // Saves a book to the database
  saveGuest: function(guestData) {
    return axios.post('/api/queue', guestData);
  },
  pushToHistory: function(guestData) {
    return axios.post('/api/history', guestData);
  }
};
