
// 基本信息 变量
const APP_NAME = "SpaCE2022";
const APP_VERSION = "22-0518-1956";
const PROJ_DESC = "SpaCE2022";
const PROJ_PREFIX = "Sp22";

// 开发环境 和 生产环境 的 控制变量
const DEVELOPING = location?.hostname=="2030nlp.github.io" ? 0 : 1;
if (DEVELOPING) {
  console.log("DEVELOPING");
} else {
  console.log("PRODUCTION");
};
const DEVELOPING_LOCAL = 0;
const API_BASE_DEV_LOCAL = "http://127.0.0.1:5000";
const DEV_HOSTS = ["http://192.168.124.5:8888", "http://192.168.1.100:8888", "http://10.1.108.200:8888/", "http://10.0.55.176:8888/", "http://10.1.124.56:8888/"];
const API_BASE_DEV = DEV_HOSTS[0];
const API_BASE_PROD = "https://sp22.nlpsun.cn";
const API_BASE = DEVELOPING ? API_BASE_DEV : API_BASE_PROD;

// 引入依赖的模块

import {
  reactive,
  // readonly,
  // ref,
  // toRef,
  toRefs,
  computed,
  onMounted,
  // onUpdated,
  createApp as Vue_createApp,
  watch,
  // h,
} from './modules_lib/vue_3.2.31_.esm-browser.prod.min.js';
import axios from './modules_lib/axios_0.26.1_.mjs.js';
import __Wrap_of_marked__ from './modules_lib/marked_4.0.2_.min.mjs.js';

const RootComponent = {
  setup() {

    const mkd = marked;

    // 一个 axios 实例，方便在控制台调试
    const anAxios = axios.create({
      headers: {'Cache-Cotrol': 'no-cache'},
    });

    const localData = reactive({
      pageName: "",
      mdContent: "",
    });

    onMounted(()=>{updateMD()});

    // 更新 MD
    const updateMD = async () => {
      const map = {
        '': "md/index.md",
        'index': "md/index.md",
      };
      let tmpLL = location.pathname.split("/").filter(it=>it.length);
      console.log(tmpLL);
      localData.pageName = tmpLL[tmpLL.length-2];


      let mdUrl = map[localData.pageName] ?? map[''];

      let wrap;
      try {
        let response = await anAxios.request({
          url: mdUrl,
          method: 'get',
        });
        wrap = (response.data);
        console.log(wrap);
        localData.mdContent = mkd.parse(wrap);
      } catch (error) {
        throw error;
        return;
      };
    };



    return {
      //
      mkd,
      axios,
      anAxios,
      localData,
      //
    };
  },
};

const the_app = Vue_createApp(RootComponent);

const app = the_app.mount('#bodywrap');
window.app = app;

export default app;
