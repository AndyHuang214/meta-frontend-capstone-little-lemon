module.exports = {
  ...jest.requireActual('react-router-dom'), // Use the actual module for other exports
  useNavigate: () => jest.fn(),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
};