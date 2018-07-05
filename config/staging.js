/* eslint no-process-env: "off" */

module.exports = {
  env: {
    name: 'staging'
  },
  server: {
    port: parseInt(process.env.PORT, 10)
  },
  pages: {
    notFound: {
      maxAge: 1000 * 60,
      dotfiles: 'deny'
    },
    serverError: {
      maxAge: 1000 * 60,
      dotfiles: 'deny'
    },
    index: {
      maxAge: 1000 * 60 * 10,
      dotfiles: 'deny'
    }
  },
  assets: {
    styles: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      headers: {}
    },
    static: {
      maxAge: 1000 * 60 * 60 * 24 * 365,
      headers: {}
    }
  }
};