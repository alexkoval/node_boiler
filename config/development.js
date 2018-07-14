module.exports = {
  env: {
    name: 'development'
  },
  server: {
    port: parseInt(process.env.PORT, 10) || 3001 // eslint-disable-line no-process-env
  },
  pages: {
    notFound: {
      maxAge: 0,
      dotfiles: 'deny'
    },
    serverError: {
      maxAge: 0,
      dotfiles: 'deny'
    },
    index: {
      maxAge: 0,
      dotfiles: 'deny'
    }
  },
  assets: {
    styles: {
      maxAge: 0,
      headers: {}
    },
    static: {
      maxAge: 0,
      headers: {}
    }
  }
};