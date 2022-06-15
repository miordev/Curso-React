import PropTypes from 'prop-types';

export const FirstApp = ({ title, subtitle }: any) => {
  return (
    <>
      <h3>{title}</h3>
      <p>{subtitle}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired,
};
