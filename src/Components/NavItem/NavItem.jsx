import PropTypes from "prop-types";
export const NavItem = ({ text, action }) => {
  return (
    <button
      onClick={action}
      className="transition-all duration-300 hover:underline hover:text-gray-200">
      {text}
    </button>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};
