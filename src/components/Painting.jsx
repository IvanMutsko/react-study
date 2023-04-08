import PropTypes from 'prop-types';
import defaultImage from '../image/default.jpg';

export default function Painting(props) {
  const {
    imgUrl = defaultImage,
    title,
    price,
    authorName = 'noname',
    authorUrl,
    quantity,
  } = props;
  return (
    <div>
      <img src={imgUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Author: <a href={authorUrl}>{authorName}</a>
      </p>
      <p>Price: {price} credits</p>
      <p>Available: {quantity > 10 ? 'available' : 'not available'}</p>
      <button type="button">Add to basket</button>
    </div>
  );
}

Painting.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  authorName: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
};
