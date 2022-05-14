# 介绍
需要配置config.js,
eg:
```
module.exports = {
  "keywords": "switch日版", // 要爬取的商品关键词
  "maxGoodsNumber": 3, //要爬取的某东搜索词搜出来的关联商品，因为搜索首页最多展示30个商品，所以这里最大为30
  "maxPageSize": 10 // 某个商品要爬取的评论页数，一页的评论数量固定为10个，注意有的商品可能评论没那么多页
}
```
# 运行
```
npm i
node index
```

# 注意
执行次数多了某东会直接封你的ip，方案：
1. 后期考虑sleep无规律减慢下爬虫的执行
2. 保存好数据，存入mongo中，系统使用离线数据

# for Qi