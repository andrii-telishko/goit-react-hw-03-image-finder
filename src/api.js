import axios from 'axios';

const KEY = '21283413-606cd1182a523c739b6934f12';
  
const fetchData = ({ searchQuery = '', currentPage = 1, pageSize = 15 }) => {
  return axios
    .get(
      `https:pixabay.com/api/?q=${searchQuery}&page=${currentPage}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${pageSize}`
    )
    .then(response => response.data.hits);
};

export default  fetchData;


