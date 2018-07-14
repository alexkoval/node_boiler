module.exports = {
  env: {
    name: 'production'
  },
  server: {
    port: parseInt(process.env.PORT, 10) // eslint-disable-line no-process-env
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