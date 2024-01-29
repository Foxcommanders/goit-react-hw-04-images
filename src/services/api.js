import axios from 'axios';

export const requestImages = async (tag, page) => {
  const { data } = await axios.get(`https://pixabay.com/api/`, {
    params: {
      key: '37591930-7d732b17549968c758f6fdf27',
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      q: tag,
      per_page: 12,
      page: page,
    },
  });
  return data;
};
