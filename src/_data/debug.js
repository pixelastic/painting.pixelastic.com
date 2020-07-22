const getPosts = require('../../lib/getPosts.js');

module.exports = async () => {
  const posts = await getPosts();
  return posts.allWithoutWip[0];
};
