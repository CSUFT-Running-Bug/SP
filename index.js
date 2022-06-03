const axios = require("axios");
const fs = require("fs");
const iconv = require("iconv-lite");
const cheerio = require("cheerio");
// const config = require("./config.js");

// let {keywords,maxGoodsNumber,maxPageSize} = config;
// console.log(config,'\n');
let keywords = 'iphone13';

// let commentsData = [];
// let productIdUrlArr = [];


async function spiderTask(keywords) {
  await getGoodsSpiderTask(keywords);
  // await writeData();
}

async function getGoodsSpiderTask(keywords) {
  const ret = await axios.get(
    `https://s.weibo.com/weibo?q=${keywords}`,
    {
      headers: {
        "user-agent": "Mozilla/5.0",
        "cookie": "_s_tentry=-; Apache=7101597169350.002.1653743952297; SINAGLOBAL=7101597169350.002.1653743952297; ULV=1653743952320:1:1:1:7101597169350.002.1653743952297:; WBtopGlobal_register_version=2022052822; appkey=; SUB=_2A25PnedkDeRhGeNN7FcY9y7FzDqIHXVs61-srDV8PUNbmtB-LVLZkW9NSYHcoRb1J5jbGg5CWL1Mg8LsUJhGyGVn; SUBP=0033WrSXqPxfM725Ws9jqgMF55529P9D9WFzrUaKblY_WibprMKi6FDW5JpX5KzhUgL.Fo-0S0-4S054S0q2dJLoIEBLxKMLBoBLBK5LxK-L1-zLB-BLxKnL12zL1hMLxKnL12zL1hMt; ALF=1685768884; SSOLoginState=1654232884; PC_TOKEN=dcfb9cf09c",
        // Referer: encodeURIComponent(
        //   `https://search.jd.com/Search?keyword=${keywords}&enc=utf-8`
        // ),
        "Referer": 'https://weibo.com/',
      },
      responseType: "arraybuffer",
    }
  );
    // console.log('ret',ret.data);
  const GBKHtml = iconv.decode(Buffer.from(ret.data), "gb2312");
    fs.writeFileSync('html.html',GBKHtml,{encoding: "utf8"})
  // var $ = cheerio.load(GBKHtml, { decodeEntities: false });
  // $("#J_goodsList .p-img a").each((idx, element) => {
  //   const productIdUrl = $(element).attr("href");
  //   productIdUrlArr.push(productIdUrl);
  // });
  // console.log('productIdUrlArr',productIdUrlArr.length)
  // for(let i = 0; i < maxGoodsNumber; i++) {
  //   console.log(`开始爬商品: ${productIdUrlArr[i]}`);
  //    // 默认爬10页的评论
  //   for (let page = 0; page < maxPageSize; page++) {
  //       // const stopSec = Math.floor(Math.random() * 10000);
  //       // setTimeout(function () {
  //       //   console.log(`暂停${stopSec / 1000}秒，防止被封ip`);
  //       // }, stopSec);
  //       console.log(`开始爬第${page}页`);
  //       await getOneGoodsCommentsSpiderTask(page, productIdUrlArr[i]);
  //       console.log(`第${page}页爬取完毕`);
  //   }
  //   console.log(`商品: ${productIdUrlArr[i]} 爬取完毕\n`);
  // }
}

// async function getOneGoodsCommentsSpiderTask(page,url) {
//   const productId = url.slice(14,-5);
//   const ret = await axios.get(
//     `https://club.jd.com/comment/productPageComments.action?callback=fetchJSON_comment98&productId=${productId}&score=0&sortType=5&page=${page}&pageSize=10&isShadowSku=0&fold=1`,
//     {
//       headers: {
//         // ":authority": "club.jd.com",
//         // ":method": "GET",
//         // ":path": "/comment/productPageComments.action?callback=fetchJSON_comment98&productId=25175059796&score=0&sortType=5&page=0&pageSize=10&isShadowSku=0&fold=1",
//         // ":scheme": "https",
//         // "cookie": "ip_cityCode=2802",
//         // "sec-ch-ua": '" Not A;Brand";v="99", "Chromium";v="101", "Google Chrome";v="101"',
//         // "sec-ch-ua-platform": "Windows",
//         "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/101.0.4951.67 Safari/537.36",
//         // Referer: "https://item.jd.com/" + productId + ".html",
//       },
//       responseType: "arraybuffer",
//     }
//   );
//   // console.log('ret',ret.data);
//   const GBKStrData = iconv.decode(Buffer.from(ret.data), "gb2312");
//   // console.log('GBKStrData',GBKStrData)
//   const jsonData = JSON.parse(GBKStrData.slice(20, -2));
//   const comments = jsonData.comments;
//   comments.forEach((item) => {
//     commentsData.push(item.content);
//   });
// }
// async function writeData() {
//   let toSaveFileStr = "";
//   commentsData.forEach((item, index) => {
//     toSaveFileStr += item;
//     if (index !== commentsData.length - 1) toSaveFileStr += "\n";
//   });
//   fs.writeFileSync("goods.txt", toSaveFileStr, { encoding: "utf8" });
// }

spiderTask(keywords);

