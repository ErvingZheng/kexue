export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    'postcss-pxtorem': {
      rootValue: 384,
      propList: ['*'],
      exclude: '/node_modules/element-plus',
    },
  },
};
