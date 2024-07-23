const redis = require("../config/cache");

exports.getFromCache = async (key) => {
  const data = await redis.get(key);
  return JSON.parse(data);
};

exports.setToCache = async (key, value) => {
  await redis.set(key, JSON.stringify(value));
};
