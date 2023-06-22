import axios from "axios";

const API_BASE_URL = "https://bbackend.onrender.com"; // Add your backend link here

export default {
  // Gets books from the Google API
  getBooks: function(q) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${q}`);
  },
  // Gets all saved books
  getSavedBooks: function() {
    return axios.get(`${API_BASE_URL}/api/books`);
  },
  // Deletes the saved book with the given id
  deleteBook: function(id) {
    return axios.delete(`${API_BASE_URL}/api/books/${id}`);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post(`${API_BASE_URL}/api/books`, bookData);
  }
};
