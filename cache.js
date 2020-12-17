// const redis = require("redis");
// const client = redis.createClient();
// const { promisify } = require("util");

// const getAsync = promisify(client.get).bind(client);
// const setAsync = promisify(client.set).bind(client);

// module.exports = function (options = {}) {
//     const isJSON = options.isJSON == undefined ? true : options.isJSON;
//     return async function (req, res, next) {
//         const key = req.originalUrl;
//         const content = await getAsync(key);
//         if (content) {
//             //有缓存
//             console.log(key, "使用了缓存");
//             const body = isJSON ? JSON.parse(content) : content;
//             res.send(body);
//         } else {
//             //没有缓存
//             //如何获取后续响应中的响应体
//             //express写响应体，最终是通过res.write函数完成
//             const defaultWrite = res.write.bind(res);
//             defaultEnd = res.end.bind(res);
//             const chunks = [];
//             res.write = function (chunk, ...args) {
//                 chunks.push(chunk);
//                 defaultWrite(chunk, ...args);
//             };
//             res.end = function (chunk, ...args) {
//                 if (chunk) {
//                     chunk.push(chunk);
//                 }
//                 const body = chunks((c) => c.toString("utf-8")).join();
//                 if (ttl < 0) { 
//                     setAsync(key, body);
//                 } else {
//                     setAsync(key, body, "EX", ttl); 
//                 }
//                 defaultEnd(chunk, ...args);
//             }
//             next();  
//         }
//     } 
// }