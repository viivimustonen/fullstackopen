import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

const create = (noteObject) => {
  const request = axios.post(baseUrl, noteObject);
  return request.then((response) => response.data);
};

const remove = (id) => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`);
    return request.then((response) => response.data);
  };

export default { getAll, create, remove};