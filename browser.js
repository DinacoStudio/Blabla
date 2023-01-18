var fetch = require('node-fetch');

fetch("https://yandex.ru/lab/api/yalm/text3", {
  "headers": {
    "accept": "*/*",
    "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
    "content-type": "application/json",
    "device-memory": "8",
    "downlink": "10",
    "dpr": "0.9",
    "ect": "4g",
    "rtt": "100",
    "sec-ch-ua": "\"Chromium\";v=\"108\", \"Opera\";v=\"94\", \"Not)A;Brand\";v=\"99\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "sec-gpc": "1",
    "viewport-width": "736",
    "x-requested-with": "XMLHttpRequest",
    "x-retpath-y": "https://yandex.ru/lab/yalm?style=0&input=%D0%9F%D0%BE%D1%82%D0%BE%D0%BC+%D0%BE%D0%BD%D0%B8+%D0%BF%D0%BE%D1%88%D0%BB%D0%B8+%D0%B3%D1%83%D0%BB%D1%8F%D1%82%D1%8C.+%D0%98+%D0%9C%D0%B8%D1%88%D0%B0+%D1%81%D0%BF%D1%80%D0%BE%D1%81%D0%B8%D0%BB%3A%0A%E2%80%94+%D0%90+%D0%BF%D0%BE%D0%BC%D0%BD%D0%B8%D1%88%D1%8C%2C+%D0%BA%D0%B0%D0%BA+%D0%BC%D1%8B+%D1%81+%D1%82%D0%BE%D0%B1%D0%BE%D0%B9+%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D0%BA%D0%BE%D0%BC%D0%B8%D0%BB%D0%B8%D1%81%D1%8C%3F%0A%E2%80%94+%D0%9F%D0%BE%D0%BC%D0%BD%D1%8E.%0A%E2%80%94+%D0%A2%D1%8B+%D1%82%D0%BE%D0%B3%D0%B4%D0%B0+%D0%B5%D1%89%D0%B5+%D1%81%D0%BE+%D1%81%D0%B2%D0%BE%D0%B8%D0%BC+%D0%9A%D0%BE%D1%81%D1%82%D0%B5%D0%B9+%D1%81%D0%B8%D0%B4%D0%B5%D0%BB%D0%B0.%0A%E2%80%94+%D0%94%D0%B0%2C+%E2%80%94+%D1%81%D0%BA%D0%B0%D0%B7%D0%B0%D0%BB%D0%B0+%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0.+%E2%80%94+%D0%AF+%D0%B5%D0%B3%D0%BE+%D0%BF%D0%BE%D0%BC%D0%BD%D1%8E.%0A%D0%95%D0%BC%D1%83+%D0%B1%D1%8B%D0%BB%D0%BE+%D0%BF%D1%80%D0%B8%D1%8F%D1%82%D0%BD%D0%BE%2C+%D1%87%D1%82%D0%BE+%D0%9D%D0%B0%D1%82%D0%B0%D1%88%D0%B0+%D0%BF%D0%BE%D0%BC%D0%BD%D0%B8%D1%82+%D0%9A%D0%BE%D1%81%D1%82%D1%8E.&skipCurtain=1",
    "cookie": "yandexuid=4006368381667914913; gdpr=0; device_id=b9ceccb5e03cb99e2ec2573cf5dffc5fb5000357b; active-browser-timestamp=1667987968452; font_loaded=YSv1; gdpr=0; yabs-sid=990390831668533407; skid=3665916281669211227; is_gdpr=0; is_gdpr_b=CPWjShCRmQEoAg==; yandex_gid=41; my=YysBKQA=; i=ePrk7KmjJX/SSLPCChiabV3W4V2AQIrWavs5a7ca4lfgD6brXvtU+CcF5vWYAZsPoHuhO5LtHWIzokxn1zrLjLDniKA=; KIykI=1; L=XBBVSEBXRU5+WGFeegFyVHRTUllyS2RcABMFFiJEPhkDAQA8LA==.1673600864.15221.339056.b5c7c5912bd58152b9dfc256b8ddfaae; yandex_login=mamontovitchm; Cookie_check=16739375040370.19117316573850252; Session_id=3:1673937504.5.2.1667989265983:oeCpiA:53.1.2:1|1421668869.5611279.2.2:5611279|1100468599.5611477.2.2:5611477|1549525555.5611599.2.2:5611599|3:10264215.648997.tHGy8ND9GkwsLYWla5Ph4vLU9n0; sessionid2=3:1673937504.5.2.1667989265983:oeCpiA:53.1.2:1|1421668869.5611279.2.2:5611279|1100468599.5611477.2.2:5611477|1549525555.5611599.2.2:5611599|3:10264215.648997.fakesign0000000000000000000; yuidss=4006368381667914913; ymex=1989315252.yrts.1673955252#1983274913.yrtsi.1667914913; ys=udn.cDptYW1vbnRvdml0Y2ht#wprid.1673955757576735-16601600101891857672-vla1-0246-vla-l7-balancer-8080-BAL-5860#c_chck.154411959; yabs-frequency=/5/0000000000000000/73ly8PcUbtHmIYFT_4lBOD0FPt1A8zkkSJW9v7f6NKf70W00/; yp=1989315757.pcs.1#1674560141.mcv.0#1674560141.mcl.cjau1f#1674560141.szm.1:1920x1080:1880x939#1705491341.p_sw.1673955340; _yasc=gNkoIRmEccuYm/C/hI4/rk3PviWWWULaqKtBF5c/oZY4/W0G3uigxS9ZKk/pfE3/0iN6LCPInQ==",
    "Referer": "https://yandex.ru/lab/yalm?style=0",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "{\"query\":\"Потом они пошли гулять. И Миша спросил:\\n— А помнишь, как мы с тобой познакомились?\\n— Помню.\\n— Ты тогда еще со своим Костей сидела.\\n— Да, — сказала Наташа. — Я его помню.\\nЕму было приятно, что Наташа помнит Костю.\",\"intro\":0,\"filter\":1}",
  "method": "POST"
});