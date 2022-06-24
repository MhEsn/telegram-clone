//mock only for axon test
const mode = 'dev'; // dev or prod

const env = {
  mode: mode,
  servers: {
    api: {
      url: `https://${mode === 'dev' ? 'sandbox' : 'api'}.axon.me/`,
    },
  },
};

export default env;
