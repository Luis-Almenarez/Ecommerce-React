import PropTypes from "prop-types";
export const NavItem = ({ text, link }) => {
  return (
    <li className="transition-all hover:underline hover:text-gray-200">
      <a href={link}>{text}</a>
    </li>
  );
};

NavItem.propTypes = {
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
