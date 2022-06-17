import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle, name }: any) => {
  return (
    <>
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

FirstApp.defaultProps = {
  title: 'There is not title',
  subtitle: 'There is not subtitle',
  name: 'Miguel Ordoñez',
};
