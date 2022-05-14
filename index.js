const axios = require(axios);
let productId;

axios.get(`https://club.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98&productId=25175059796&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1`)