const fs = require('fs');
var request = require('request');
var cheerio = require('cheerio');

const all = {};
const allImage = [];
const imageType = ['jpg', 'jpeg', 'png', 'gif'];
const END_TYPE = '.jpeg';

const config_ = {
  "0.Async": "http://www.zhufengpeixun.com/plan/index.html",
  "0.editor": "http://www.zhufengpeixun.com/plan/html/0.editor.html",
  "0.module": "http://www.zhufengpeixun.com/plan/html/0.module.html",
  "1.ES2015": "http://www.zhufengpeixun.com/plan/html/1.ES2015.html",
  "2.Promise": "http://www.zhufengpeixun.com/plan/html/2.Promise.html",
  "3.Node": "http://www.zhufengpeixun.com/plan/html/3.Node.html",
  "4.NodeInstall": "http://www.zhufengpeixun.com/plan/html/4.NodeInstall.html",
  "5.REPL": "http://www.zhufengpeixun.com/plan/html/5.REPL.html",
  "6.NodeCore": "http://www.zhufengpeixun.com/plan/html/6.NodeCore.html",
  "7.module&amp;NPM": "http://www.zhufengpeixun.com/plan/html/7.module&amp;NPM.html",
  "8.Encoding": "http://www.zhufengpeixun.com/plan/html/8.Encoding.html",
  "9.Buffer": "http://www.zhufengpeixun.com/plan/html/9.Buffer.html",
  "10.fs": "http://www.zhufengpeixun.com/plan/html/10.fs.html",
  "11.Stream-1": "http://www.zhufengpeixun.com/plan/html/11.Stream-1.html",
  "11.Stream-2": "http://www.zhufengpeixun.com/plan/html/11.Stream-2.html",
  "11.Stream-3": "http://www.zhufengpeixun.com/plan/html/11.Stream-3.html",
  "11.Stream-4": "http://www.zhufengpeixun.com/plan/html/11.Stream-4.html",
  "12-Network-2": "http://www.zhufengpeixun.com/plan/html/12-Network-2.html",
  "12.NetWork-3": "http://www.zhufengpeixun.com/plan/html/12.NetWork-3.html",
  "12.Network-1": "http://www.zhufengpeixun.com/plan/html/12.Network-1.html",
  "13.tcp": "http://www.zhufengpeixun.com/plan/html/13.tcp.html",
  "14.http-1": "http://www.zhufengpeixun.com/plan/html/14.http-1.html",
  "14.http-2": "http://www.zhufengpeixun.com/plan/html/14.http-2.html",
  "15.compress": "http://www.zhufengpeixun.com/plan/html/15.compress.html",
  "16.crypto": "http://www.zhufengpeixun.com/plan/html/16.crypto.html",
  "17.process": "http://www.zhufengpeixun.com/plan/html/17.process.html",
  "18.yargs": "http://www.zhufengpeixun.com/plan/html/18.yargs.html",
  "19.cache": "http://www.zhufengpeixun.com/plan/html/19.cache.html",
  "20.action": "http://www.zhufengpeixun.com/plan/html/20.action.html",
  "21.https": "http://www.zhufengpeixun.com/plan/html/21.https.html",
  "22.cookie": "http://www.zhufengpeixun.com/plan/html/22.cookie.html",
  "23.session": "http://www.zhufengpeixun.com/plan/html/23.session.html",
  "24.express-1": "http://www.zhufengpeixun.com/plan/html/24.express-1.html",
  "24.express-2": "http://www.zhufengpeixun.com/plan/html/24.express-2.html",
  "24.express-3": "http://www.zhufengpeixun.com/plan/html/24.express-3.html",
  "24.express-4": "http://www.zhufengpeixun.com/plan/html/24.express-4.html",
  "25.koa-1": "http://www.zhufengpeixun.com/plan/html/25.koa-1.html",
  "26.webpack-1-basic": "http://www.zhufengpeixun.com/plan/html/26.webpack-1-basic.html",
  "26.webpack-2-optimize": "http://www.zhufengpeixun.com/plan/html/26.webpack-2-optimize.html",
  "26.webpack-3-file": "http://www.zhufengpeixun.com/plan/html/26.webpack-3-file.html",
  "26.webpack-4.tapable": "http://www.zhufengpeixun.com/plan/html/26.webpack-4.tapable.html",
  "26.webpack-5-AST": "http://www.zhufengpeixun.com/plan/html/26.webpack-5-AST.html",
  "26.webpack-6-sources": "http://www.zhufengpeixun.com/plan/html/26.webpack-6-sources.html",
  "26.webpack-7-loader": "http://www.zhufengpeixun.com/plan/html/26.webpack-7-loader.html",
  "26.webpack-8-plugin": "http://www.zhufengpeixun.com/plan/html/26.webpack-8-plugin.html",
  "26.webpack-9-hand": "http://www.zhufengpeixun.com/plan/html/26.webpack-9-hand.html",
  "26.webpack-10-prepare": "http://www.zhufengpeixun.com/plan/html/26.webpack-10-prepare.html",
  "28.redux": "http://www.zhufengpeixun.com/plan/html/28.redux.html",
  "28.redux-jwt-back": "http://www.zhufengpeixun.com/plan/html/28.redux-jwt-back.html",
  "28.redux-jwt-front": "http://www.zhufengpeixun.com/plan/html/28.redux-jwt-front.html",
  "29.mongodb-1": "http://www.zhufengpeixun.com/plan/html/29.mongodb-1.html",
  "29.mongodb-2": "http://www.zhufengpeixun.com/plan/html/29.mongodb-2.html",
  "29.mongodb-3": "http://www.zhufengpeixun.com/plan/html/29.mongodb-3.html",
  "29.mongodb-4": "http://www.zhufengpeixun.com/plan/html/29.mongodb-4.html",
  "29.mongodb-5": "http://www.zhufengpeixun.com/plan/html/29.mongodb-5.html",
  "29.mongodb-6": "http://www.zhufengpeixun.com/plan/html/29.mongodb-6.html",
  "30.cms-1-mysql": "http://www.zhufengpeixun.com/plan/html/30.cms-1-mysql.html",
  "30.cms-2-mysql": "http://www.zhufengpeixun.com/plan/html/30.cms-2-mysql.html",
  "30.cms-3-mysql": "http://www.zhufengpeixun.com/plan/html/30.cms-3-mysql.html",
  "30.cms-4-nunjucks": "http://www.zhufengpeixun.com/plan/html/30.cms-4-nunjucks.html",
  "30.cms-5-mock": "http://www.zhufengpeixun.com/plan/html/30.cms-5-mock.html",
  "30.cms-6-egg": "http://www.zhufengpeixun.com/plan/html/30.cms-6-egg.html",
  "30.cms-7-api": "http://www.zhufengpeixun.com/plan/html/30.cms-7-api.html",
  "30.cms-8-roadhog": "http://www.zhufengpeixun.com/plan/html/30.cms-8-roadhog.html",
  "30.cms-9-yaml": "http://www.zhufengpeixun.com/plan/html/30.cms-9-yaml.html",
  "30.cms-10-umi": "http://www.zhufengpeixun.com/plan/html/30.cms-10-umi.html",
  "30.cms-12-dva": "http://www.zhufengpeixun.com/plan/html/30.cms-12-dva.html",
  "30.cms-13-dva-ant": "http://www.zhufengpeixun.com/plan/html/30.cms-13-dva-ant.html",
  "30.cms-14-front": "http://www.zhufengpeixun.com/plan/html/30.cms-14-front.html",
  "30.cms-15-deploy": "http://www.zhufengpeixun.com/plan/html/30.cms-15-deploy.html",
  "31.dva": "http://www.zhufengpeixun.com/plan/html/31.dva.html",
  "31.cms-13-dva-antdesign": "http://www.zhufengpeixun.com/plan/html/31.cms-13-dva-antdesign.html",
  "33.redis": "http://www.zhufengpeixun.com/plan/html/33.redis.html",
  "34.unittest": "http://www.zhufengpeixun.com/plan/html/34.unittest.html",
  "35.jwt": "http://www.zhufengpeixun.com/plan/html/35.jwt.html",
  "36.websocket-1": "http://www.zhufengpeixun.com/plan/html/36.websocket-1.html",
  "36.websocket-2": "http://www.zhufengpeixun.com/plan/html/36.websocket-2.html",
  "38.chat-api-1": "http://www.zhufengpeixun.com/plan/html/38.chat-api-1.html",
  "38.chat-api-2": "http://www.zhufengpeixun.com/plan/html/38.chat-api-2.html",
  "38.chat-3": "http://www.zhufengpeixun.com/plan/html/38.chat-3.html",
  "38.chat-api-3": "http://www.zhufengpeixun.com/plan/html/38.chat-api-3.html",
  "38.chat": "http://www.zhufengpeixun.com/plan/html/38.chat.html",
  "38.chat2": "http://www.zhufengpeixun.com/plan/html/38.chat2.html",
  "39.crawl-0": "http://www.zhufengpeixun.com/plan/html/39.crawl-0.html",
  "39.crawl-1": "http://www.zhufengpeixun.com/plan/html/39.crawl-1.html",
  "39.crawl-2": "http://www.zhufengpeixun.com/plan/html/39.crawl-2.html",
  "40.deploy": "http://www.zhufengpeixun.com/plan/html/40.deploy.html",
  "41.safe": "http://www.zhufengpeixun.com/plan/html/41.safe.html",
  "42.test": "http://www.zhufengpeixun.com/plan/html/42.test.html",
  "43.nginx": "http://www.zhufengpeixun.com/plan/html/43.nginx.html",
  "44.enzyme": "http://www.zhufengpeixun.com/plan/html/44.enzyme.html",
  "45.docker": "http://www.zhufengpeixun.com/plan/html/45.docker.html",
  "46.elastic": "http://www.zhufengpeixun.com/plan/html/46.elastic.html",
  "47.oauth": "http://www.zhufengpeixun.com/plan/html/47.oauth.html",
  "48.wxpay": "http://www.zhufengpeixun.com/plan/html/48.wxpay.html",
  "index": "http://www.zhufengpeixun.com/plan/html/index.html",
  "52.UML": "http://www.zhufengpeixun.com/plan/html/52.UML.html",
  "53.design": "http://www.zhufengpeixun.com/plan/html/53.design.html",
  "54.linux": "http://www.zhufengpeixun.com/plan/html/54.linux.html",
  "57.ts": "http://www.zhufengpeixun.com/plan/html/57.ts.html",
  "56.react-ssr": "http://www.zhufengpeixun.com/plan/html/56.react-ssr.html",
  "58.ts_react": "http://www.zhufengpeixun.com/plan/html/58.ts_react.html",
  "59.ketang": "http://www.zhufengpeixun.com/plan/html/59.ketang.html",
  "59.ketang2": "http://www.zhufengpeixun.com/plan/html/59.ketang2.html",
  "61.1.devops-linux": "http://www.zhufengpeixun.com/plan/html/61.1.devops-linux.html",
  "61.2.devops-vi": "http://www.zhufengpeixun.com/plan/html/61.2.devops-vi.html",
  "61.3.devops-user": "http://www.zhufengpeixun.com/plan/html/61.3.devops-user.html",
  "61.4.devops-auth": "http://www.zhufengpeixun.com/plan/html/61.4.devops-auth.html",
  "61.5.devops-shell": "http://www.zhufengpeixun.com/plan/html/61.5.devops-shell.html",
  "61.6.devops-install": "http://www.zhufengpeixun.com/plan/html/61.6.devops-install.html",
  "61.7.devops-system": "http://www.zhufengpeixun.com/plan/html/61.7.devops-system.html",
  "61.8.devops-service": "http://www.zhufengpeixun.com/plan/html/61.8.devops-service.html",
  "61.9.devops-network": "http://www.zhufengpeixun.com/plan/html/61.9.devops-network.html",
  "61.10.devops-nginx": "http://www.zhufengpeixun.com/plan/html/61.10.devops-nginx.html",
  "61.11.devops-docker": "http://www.zhufengpeixun.com/plan/html/61.11.devops-docker.html",
  "61.12.devops-jekins": "http://www.zhufengpeixun.com/plan/html/61.12.devops-jekins.html",
  "61.13.devops-groovy": "http://www.zhufengpeixun.com/plan/html/61.13.devops-groovy.html",
  "61.14.devops-php": "http://www.zhufengpeixun.com/plan/html/61.14.devops-php.html",
  "61.15.devops-java": "http://www.zhufengpeixun.com/plan/html/61.15.devops-java.html",
  "61.16.devops-node": "http://www.zhufengpeixun.com/plan/html/61.16.devops-node.html",
  "61.17.devops-k8s": "http://www.zhufengpeixun.com/plan/html/61.17.devops-k8s.html",
  "62.1.react-basic": "http://www.zhufengpeixun.com/plan/html/62.1.react-basic.html",
  "62.2.react-state": "http://www.zhufengpeixun.com/plan/html/62.2.react-state.html",
  "62.3.react-high": "http://www.zhufengpeixun.com/plan/html/62.3.react-high.html",
  "62.4.react-optimize": "http://www.zhufengpeixun.com/plan/html/62.4.react-optimize.html",
  "62.5.react-hooks": "http://www.zhufengpeixun.com/plan/html/62.5.react-hooks.html",
  "62.6.react-immutable": "http://www.zhufengpeixun.com/plan/html/62.6.react-immutable.html",
  "62.7.react-mobx": "http://www.zhufengpeixun.com/plan/html/62.7.react-mobx.html",
  "62.8.react-source": "http://www.zhufengpeixun.com/plan/html/62.8.react-source.html",
  "63.1.redux": "http://www.zhufengpeixun.com/plan/html/63.1.redux.html",
  "63.2.redux-middleware": "http://www.zhufengpeixun.com/plan/html/63.2.redux-middleware.html",
  "63.3.redux-hooks": "http://www.zhufengpeixun.com/plan/html/63.3.redux-hooks.html",
  "63.4.redux-saga": "http://www.zhufengpeixun.com/plan/html/63.4.redux-saga.html",
  "63.5.redux-saga-hand": "http://www.zhufengpeixun.com/plan/html/63.5.redux-saga-hand.html",
  "64.1.router": "http://www.zhufengpeixun.com/plan/html/64.1.router.html",
  "64.2.router-connected": "http://www.zhufengpeixun.com/plan/html/64.2.router-connected.html",
  "65.1.typescript": "http://www.zhufengpeixun.com/plan/html/65.1.typescript.html",
  "65.2.typescript": "http://www.zhufengpeixun.com/plan/html/65.2.typescript.html",
  "65.3.typescript": "http://www.zhufengpeixun.com/plan/html/65.3.typescript.html",
  "65.4.antd": "http://www.zhufengpeixun.com/plan/html/65.4.antd.html",
  "65.4.definition": "http://www.zhufengpeixun.com/plan/html/65.4.definition.html",
  "66-1.vue-base": "http://www.zhufengpeixun.com/plan/html/66-1.vue-base.html",
  "66-2.vue-component": "http://www.zhufengpeixun.com/plan/html/66-2.vue-component.html",
  "66-3.vue-cli3.0": "http://www.zhufengpeixun.com/plan/html/66-3.vue-cli3.0.html",
  "66-4.$message组件": "http://www.zhufengpeixun.com/plan/html/66-4.$message%E7%BB%84%E4%BB%B6.html",
  "66-5.Form组件": "http://www.zhufengpeixun.com/plan/html/66-5.Form%E7%BB%84%E4%BB%B6.html",
  "66-6.tree": "http://www.zhufengpeixun.com/plan/html/66-6.tree.html",
  "66-7.vue-router-apply": "http://www.zhufengpeixun.com/plan/html/66-7.vue-router-apply.html",
  "66-8.axios-apply": "http://www.zhufengpeixun.com/plan/html/66-8.axios-apply.html",
  "66-9.vuex-apply": "http://www.zhufengpeixun.com/plan/html/66-9.vuex-apply.html",
  "66-10.jwt-vue": "http://www.zhufengpeixun.com/plan/html/66-10.jwt-vue.html",
  "66-11.vue-ssr": "http://www.zhufengpeixun.com/plan/html/66-11.vue-ssr.html",
  "66-12.nuxt-apply": "http://www.zhufengpeixun.com/plan/html/66-12.nuxt-apply.html",
  "66-13.pwa": "http://www.zhufengpeixun.com/plan/html/66-13.pwa.html",
  "66-14.vue单元测试": "http://www.zhufengpeixun.com/plan/html/66-14.vue%E5%8D%95%E5%85%83%E6%B5%8B%E8%AF%95.html",
  "66-15.权限校验": "http://www.zhufengpeixun.com/plan/html/66-15.%E6%9D%83%E9%99%90%E6%A0%A1%E9%AA%8C.html",
  "67-1-network": "http://www.zhufengpeixun.com/plan/html/67-1-network.html",
  "68-2-wireshark": "http://www.zhufengpeixun.com/plan/html/68-2-wireshark.html",
  "7.npm2": "http://www.zhufengpeixun.com/plan/html/7.npm2.html",
  "69-hooks": "http://www.zhufengpeixun.com/plan/html/69-hooks.html",
  "70-deploy": "http://www.zhufengpeixun.com/plan/html/70-deploy.html",
  "71-hmr": "http://www.zhufengpeixun.com/plan/html/71-hmr.html",
  "72.deploy": "http://www.zhufengpeixun.com/plan/html/72.deploy.html",
  "73.import": "http://www.zhufengpeixun.com/plan/html/73.import.html",
  "74.mobile": "http://www.zhufengpeixun.com/plan/html/74.mobile.html",
  "75.webpack-1.文件分析": "http://www.zhufengpeixun.com/plan/html/75.webpack-1.%E6%96%87%E4%BB%B6%E5%88%86%E6%9E%90.html",
  "75.webpack-2.loader": "http://www.zhufengpeixun.com/plan/html/75.webpack-2.loader.html",
  "75.webpack-3.源码流程": "http://www.zhufengpeixun.com/plan/html/75.webpack-3.%E6%BA%90%E7%A0%81%E6%B5%81%E7%A8%8B.html",
  "75.webpack-4.tapable": "http://www.zhufengpeixun.com/plan/html/75.webpack-4.tapable.html",
  "75.webpack-5.prepare": "http://www.zhufengpeixun.com/plan/html/75.webpack-5.prepare.html",
  "75.webpack-6.resolve": "http://www.zhufengpeixun.com/plan/html/75.webpack-6.resolve.html",
  "75.webpack-7.loader": "http://www.zhufengpeixun.com/plan/html/75.webpack-7.loader.html",
  "75.webpack-8.module": "http://www.zhufengpeixun.com/plan/html/75.webpack-8.module.html",
  "75.webpack-9.chunk": "http://www.zhufengpeixun.com/plan/html/75.webpack-9.chunk.html",
  "75.webpack-10.asset": "http://www.zhufengpeixun.com/plan/html/75.webpack-10.asset.html",
  "75.webpack-11.实现": "http://www.zhufengpeixun.com/plan/html/75.webpack-11.%E5%AE%9E%E7%8E%B0.html",
  "76.react_optimize": "http://www.zhufengpeixun.com/plan/html/76.react_optimize.html",
  "77.ts_ketang_back": "http://www.zhufengpeixun.com/plan/html/77.ts_ketang_back.html",
  "77.ts_ketang_front": "http://www.zhufengpeixun.com/plan/html/77.ts_ketang_front.html",
  "78.vue-domdiff": "http://www.zhufengpeixun.com/plan/html/78.vue-domdiff.html",
  "79.grammar": "http://www.zhufengpeixun.com/plan/html/79.grammar.html",
  "80.tree": "http://www.zhufengpeixun.com/plan/html/80.tree.html",
  "81.axios": "http://www.zhufengpeixun.com/plan/html/81.axios.html",
  "82.1.react": "http://www.zhufengpeixun.com/plan/html/82.1.react.html",
  "82.2.react-high": "http://www.zhufengpeixun.com/plan/html/82.2.react-high.html",
  "82.3.react-router": "http://www.zhufengpeixun.com/plan/html/82.3.react-router.html",
  "82.4.redux": "http://www.zhufengpeixun.com/plan/html/82.4.redux.html",
  "82.5.redux_middleware": "http://www.zhufengpeixun.com/plan/html/82.5.redux_middleware.html",
  "82.6.connected": "http://www.zhufengpeixun.com/plan/html/82.6.connected.html",
  "82.7.saga": "http://www.zhufengpeixun.com/plan/html/82.7.saga.html",
  "82.8.dva": "http://www.zhufengpeixun.com/plan/html/82.8.dva.html",
  "82.8.dva-source": "http://www.zhufengpeixun.com/plan/html/82.8.dva-source.html",
  "82.9.roadhog": "http://www.zhufengpeixun.com/plan/html/82.9.roadhog.html",
  "82.10.umi": "http://www.zhufengpeixun.com/plan/html/82.10.umi.html",
  "82.11.antdesign": "http://www.zhufengpeixun.com/plan/html/82.11.antdesign.html",
  "82.12.ketang-front": "http://www.zhufengpeixun.com/plan/html/82.12.ketang-front.html",
  "82.12.ketang-back": "http://www.zhufengpeixun.com/plan/html/82.12.ketang-back.html",
  "83.upload": "http://www.zhufengpeixun.com/plan/html/83.upload.html",
  "84.graphql": "http://www.zhufengpeixun.com/plan/html/84.graphql.html",
  "85.antpro": "http://www.zhufengpeixun.com/plan/html/85.antpro.html",
  "86.1.uml": "http://www.zhufengpeixun.com/plan/html/86.1.uml.html",
  "86.2.design": "http://www.zhufengpeixun.com/plan/html/86.2.design.html",
  "87.postcss": "http://www.zhufengpeixun.com/plan/html/87.postcss.html",
  "88.react16-1": "http://www.zhufengpeixun.com/plan/html/88.react16-1.html",
  "89.nextjs": "http://www.zhufengpeixun.com/plan/html/89.nextjs.html",
  "90.react-test": "http://www.zhufengpeixun.com/plan/html/90.react-test.html",
  "91.react-ts": "http://www.zhufengpeixun.com/plan/html/91.react-ts.html",
  "92.rbac": "http://www.zhufengpeixun.com/plan/html/92.rbac.html",
  "93.tsnode": "http://www.zhufengpeixun.com/plan/html/93.tsnode.html",
  "94.1.JavaScript": "http://www.zhufengpeixun.com/plan/html/94.1.JavaScript.html",
  "94.2.JavaScript": "http://www.zhufengpeixun.com/plan/html/94.2.JavaScript.html",
  "94.3.MODULE": "http://www.zhufengpeixun.com/plan/html/94.3.MODULE.html",
  "94.4.EventLoop": "http://www.zhufengpeixun.com/plan/html/94.4.EventLoop.html",
  "94.5.文件上传": "http://www.zhufengpeixun.com/plan/html/94.5.%E6%96%87%E4%BB%B6%E4%B8%8A%E4%BC%A0.html",
  "94.6.https": "http://www.zhufengpeixun.com/plan/html/94.6.https.html",
  "94.7. nginx": "http://www.zhufengpeixun.com/plan/html/94.7.%20nginx.html",
  "95.1. react": "http://www.zhufengpeixun.com/plan/html/95.1.%20react.html",
  "95.2.react": "http://www.zhufengpeixun.com/plan/html/95.2.react.html",
  "96.1.react16": "http://www.zhufengpeixun.com/plan/html/96.1.react16.html",
  "96.2.fiber": "http://www.zhufengpeixun.com/plan/html/96.2.fiber.html",
  "96.3.fiber": "http://www.zhufengpeixun.com/plan/html/96.3.fiber.html",
  "97.serverless": "http://www.zhufengpeixun.com/plan/html/97.serverless.html",
  "98.websocket": "http://www.zhufengpeixun.com/plan/html/98.websocket.html",
  "100.1.react-basic": "http://www.zhufengpeixun.com/plan/html/100.1.react-basic.html",
  "101.1.monitor": "http://www.zhufengpeixun.com/plan/html/101.1.monitor.html",
  "101.2.monitor": "http://www.zhufengpeixun.com/plan/html/101.2.monitor.html",
  "102.java": "http://www.zhufengpeixun.com/plan/html/102.java.html",
  "103.1.webpack-usage": "http://www.zhufengpeixun.com/plan/html/103.1.webpack-usage.html",
  "103.2.webpack-bundle": "http://www.zhufengpeixun.com/plan/html/103.2.webpack-bundle.html",
  "103.3.webpack-ast": "http://www.zhufengpeixun.com/plan/html/103.3.webpack-ast.html",
  "103.4.webpack-flow": "http://www.zhufengpeixun.com/plan/html/103.4.webpack-flow.html",
  "103.5.webpack-loader": "http://www.zhufengpeixun.com/plan/html/103.5.webpack-loader.html",
  "103.6.webpack-tapable": "http://www.zhufengpeixun.com/plan/html/103.6.webpack-tapable.html",
  "103.7.webpack-plugin": "http://www.zhufengpeixun.com/plan/html/103.7.webpack-plugin.html",
  "103.8.webpack-optimize1": "http://www.zhufengpeixun.com/plan/html/103.8.webpack-optimize1.html",
  "103.9.webpack-optimize2": "http://www.zhufengpeixun.com/plan/html/103.9.webpack-optimize2.html",
  "103.10.webpack-hand": "http://www.zhufengpeixun.com/plan/html/103.10.webpack-hand.html",
  "103.11.webpack-hmr": "http://www.zhufengpeixun.com/plan/html/103.11.webpack-hmr.html",
  "103.13.webpack5": "http://www.zhufengpeixun.com/plan/html/103.13.webpack5.html",
  "103.14.webpack-sourcemap": "http://www.zhufengpeixun.com/plan/html/103.14.webpack-sourcemap.html",
  "103.15.webpack-compiler1": "http://www.zhufengpeixun.com/plan/html/103.15.webpack-compiler1.html",
  "103.15.webpack-compiler2": "http://www.zhufengpeixun.com/plan/html/103.15.webpack-compiler2.html",
  "103.16.vite.basic": "http://www.zhufengpeixun.com/plan/html/103.16.vite.basic.html",
  "103.16.vite.source": "http://www.zhufengpeixun.com/plan/html/103.16.vite.source.html",
  "104.1.binary": "http://www.zhufengpeixun.com/plan/html/104.1.binary.html",
  "104.2.binary": "http://www.zhufengpeixun.com/plan/html/104.2.binary.html",
  "105.skeleton": "http://www.zhufengpeixun.com/plan/html/105.skeleton.html",
  "106.1.react": "http://www.zhufengpeixun.com/plan/html/106.1.react.html",
  "106.2.react_hooks": "http://www.zhufengpeixun.com/plan/html/106.2.react_hooks.html",
  "106.3.react_router": "http://www.zhufengpeixun.com/plan/html/106.3.react_router.html",
  "106.4.redux": "http://www.zhufengpeixun.com/plan/html/106.4.redux.html",
  "106.5.redux_middleware": "http://www.zhufengpeixun.com/plan/html/106.5.redux_middleware.html",
  "106.6.connected-react-router": "http://www.zhufengpeixun.com/plan/html/106.6.connected-react-router.html",
  "106.7.redux-saga": "http://www.zhufengpeixun.com/plan/html/106.7.redux-saga.html",
  "106.8.dva": "http://www.zhufengpeixun.com/plan/html/106.8.dva.html",
  "106.9.umi": "http://www.zhufengpeixun.com/plan/html/106.9.umi.html",
  "106.10.antpro": "http://www.zhufengpeixun.com/plan/html/106.10.antpro.html",
  "107.fiber": "http://www.zhufengpeixun.com/plan/html/107.fiber.html",
  "108.http": "http://www.zhufengpeixun.com/plan/html/108.http.html",
  "109.1.webpack_usage": "http://www.zhufengpeixun.com/plan/html/109.1.webpack_usage.html",
  "109.2.webpack_source": "http://www.zhufengpeixun.com/plan/html/109.2.webpack_source.html",
  "109.3.dll": "http://www.zhufengpeixun.com/plan/html/109.3.dll.html",
  "110.nest.js": "http://www.zhufengpeixun.com/plan/html/110.nest.js.html",
  "111.xstate": "http://www.zhufengpeixun.com/plan/html/111.xstate.html",
  "112.Form": "http://www.zhufengpeixun.com/plan/html/112.Form.html",
  "113.redux-saga": "http://www.zhufengpeixun.com/plan/html/113.redux-saga.html",
  "114.react+typescript": "http://www.zhufengpeixun.com/plan/html/114.react+typescript.html",
  "115.immer": "http://www.zhufengpeixun.com/plan/html/115.immer.html",
  "116.pro5": "http://www.zhufengpeixun.com/plan/html/116.pro5.html",
  "117.css-loader": "http://www.zhufengpeixun.com/plan/html/117.css-loader.html",
  "118.1.umi-core": "http://www.zhufengpeixun.com/plan/html/118.1.umi-core.html",
  "119.2.module-federation": "http://www.zhufengpeixun.com/plan/html/119.2.module-federation.html",
  "119.1.module-federation": "http://www.zhufengpeixun.com/plan/html/119.1.module-federation.html",
  "120.create-react-app": "http://www.zhufengpeixun.com/plan/html/120.create-react-app.html",
  "121.react-scripts": "http://www.zhufengpeixun.com/plan/html/121.react-scripts.html",
  "122.react-optimize": "http://www.zhufengpeixun.com/plan/html/122.react-optimize.html",
  "123.jsx-runtime": "http://www.zhufengpeixun.com/plan/html/123.jsx-runtime.html",
  "124.next.js": "http://www.zhufengpeixun.com/plan/html/124.next.js.html",
  "106.11.ketang": "http://www.zhufengpeixun.com/plan/html/106.11.ketang.html",
  "125.1.linux": "http://www.zhufengpeixun.com/plan/html/125.1.linux.html",
  "125.2.linux-vi": "http://www.zhufengpeixun.com/plan/html/125.2.linux-vi.html",
  "125.3.linux-user": "http://www.zhufengpeixun.com/plan/html/125.3.linux-user.html",
  "125.4.linux-auth": "http://www.zhufengpeixun.com/plan/html/125.4.linux-auth.html",
  "125.5.linux-shell": "http://www.zhufengpeixun.com/plan/html/125.5.linux-shell.html",
  "125.6.linux-install": "http://www.zhufengpeixun.com/plan/html/125.6.linux-install.html",
  "125.7.linux-system": "http://www.zhufengpeixun.com/plan/html/125.7.linux-system.html",
  "125.8.linux-service": "http://www.zhufengpeixun.com/plan/html/125.8.linux-service.html",
  "125.9.linux-network": "http://www.zhufengpeixun.com/plan/html/125.9.linux-network.html",
  "125.10.nginx": "http://www.zhufengpeixun.com/plan/html/125.10.nginx.html",
  "125.11.docker": "http://www.zhufengpeixun.com/plan/html/125.11.docker.html",
  "125.12.ci": "http://www.zhufengpeixun.com/plan/html/125.12.ci.html",
  "126.11.react-1": "http://www.zhufengpeixun.com/plan/html/126.11.react-1.html",
  "125.13.k8s": "http://www.zhufengpeixun.com/plan/html/125.13.k8s.html",
  "125.14.k8s": "http://www.zhufengpeixun.com/plan/html/125.14.k8s.html",
  "125.15.k8s": "http://www.zhufengpeixun.com/plan/html/125.15.k8s.html",
  "125.16.k8s": "http://www.zhufengpeixun.com/plan/html/125.16.k8s.html",
  "126.12.react-2": "http://www.zhufengpeixun.com/plan/html/126.12.react-2.html",
  "126.12.react-3": "http://www.zhufengpeixun.com/plan/html/126.12.react-3.html",
  "127.frontend": "http://www.zhufengpeixun.com/plan/html/127.frontend.html",
  "128.rollup": "http://www.zhufengpeixun.com/plan/html/128.rollup.html",
  "129.px2rem-loader": "http://www.zhufengpeixun.com/plan/html/129.px2rem-loader.html",
  "130.health": "http://www.zhufengpeixun.com/plan/html/130.health.html",
  "131.hooks": "http://www.zhufengpeixun.com/plan/html/131.hooks.html",
  "126.12.react-4": "http://www.zhufengpeixun.com/plan/html/126.12.react-4.html",
  "132.keepalive": "http://www.zhufengpeixun.com/plan/html/132.keepalive.html",
  "133.vue-cli": "http://www.zhufengpeixun.com/plan/html/133.vue-cli.html",
  "134.react18": "http://www.zhufengpeixun.com/plan/html/134.react18.html",
  "135.function": "http://www.zhufengpeixun.com/plan/html/135.function.html",
  "136.toolkit": "http://www.zhufengpeixun.com/plan/html/136.toolkit.html"
}

function optionsConfig(url) {
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36",
    }
  };

  return options;
}


const keys = Object.keys(config_);
let i = 0;

const getType = (url) => {
  if (!url) return '__NO'
  const list = url.split('.');

  const type = list.pop();

  return type ? type : '__NO'
}

const getName = (url) => {
  if (!url) return ''
  const is = isImage(url);

  if (is) {
    return url.split('/').pop();
  }

  return url.split('/').pop() + END_TYPE;
}

const isImage = (url) => {
  if (!url) return false;
  const type = getType(url);

  const is = imageType.includes(type);

  return is;
}

const streamImg = (imgURL, fn) => {
  try {
    request(imgURL, () => {
      i += 1;
      fn && fn()
    })
      .pipe(
        fs.createWriteStream('./' + getName(imgURL))).on('finish', function() {
          console.error('写入已完成');

          fn && fn();
        }).catch(e => {
          console.log('xxxxx', e);
        });
  } catch (error) {
    console.log('xxxxxxxx', imgURL);
    // console.log(error);
  }
}

function getListHtml() {
  const name = keys[i];
  const url = config_[name]

  const options = optionsConfig(url);

  if (!name) {
    fs.writeFile(`./all/all.config.js`, JSON.stringify(all), (err) => {
      if (err) {
        console.error(err)
        return
      }
    })

    fs.writeFile(`./all/all.images.js`, JSON.stringify(allImage), (err) => {
      if (err) {
        console.error(err)
        return
      }
    })
    return console.log('over');
  }

  request(options, function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      getdom(body, name)
    }
  });

  if (keys.length >= i) {
    i += 1
    // setTimeout(getListHtml, 1000 * 1)

    console.log( i / keys.length * 100 +  '%');
    setTimeout(getListHtml, 100 * 4)
  }
}

const getdom = (html, name) => {
  var $ = cheerio.load(html);
  const mainContent = $('.content');

  mainContent.find('img').each(function (index, el) {
    var imgurl = $(this).attr("src");

    $(this).attr('src', './img/' + getName(imgurl));

    allImage.push(imgurl);
  });

  const content = mainContent.html();
  all[name] = content;

  // emit(content, name);
}

function emit(content, name) {
  // fs.writeFile(`./all/${name}.html`, content, (err) => {
  //   if (err) {
  //     console.error(err)
  //     return
  //   }
  // })
}



getListHtml();
