module.exports = {
  presets: [
    '@babel/preset-env', // For compiling modern JavaScript (ES6+)
    '@babel/preset-react', // For compiling JSX syntax in React
  ],
  // Add this if you need to support JSX parsing in `.jsx` files
  plugins: ['@babel/plugin-transform-react-jsx'],
};
