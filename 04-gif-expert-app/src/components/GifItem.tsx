import PropTypes from 'prop-types';

export const GifItem = ({ url, title }: any) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
      <p data-testid="test-title">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
