/* eslint-disable indent */
// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: [
        // eslint-disable-next-line indent, import/no-extraneous-dependencies, global-require
        require("tailwindcss"),
        // eslint-disable-next-line indent
        // eslint-disable-next-line indent
        // eslint-disable-next-line indent, import/no-extraneous-dependencies, global-require
        require("autoprefixer"),
        // eslint-disable-next-line indent
      ],
      // eslint-disable-next-line indent
    },
    // eslint-disable-next-line indent
  },
  // eslint-disable-next-line indent, eol-last
};
