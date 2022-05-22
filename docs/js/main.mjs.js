
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

// import hljs from './modules_lib/highlight.js/lib/core';
// import javascript from './modules_lib/highlight.js/lib/languages/javascript';
// hljs.registerLanguage('javascript', javascript);

import hljs from './modules_lib/Highlight_11.5.0_.mjs.js';
import javascript from './modules_lib/Highlight_11.5.0_lang_javascript.mjs.js';
import json from './modules_lib/Highlight_11.5.0_lang_json.mjs.js';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('json', json);

const RootComponent = {
  setup() {

    const mkd = marked;

    const myTokenizer = {};

    const myRenderer = {

      // code(code, infostring, escaped) {

      //   console.log(code);

      //   const lang = (infostring || '').match(/\S*/)[0];
      //   if (this.options.highlight) {
      //     const out = this.options.highlight(code, lang);
      //     if (out != null && out !== code) {
      //       escaped = true;
      //       code = out;
      //     }
      //   }

      //   code = code.replace(/\n$/, '') + '\n';

      //   if (!lang) {
      //     return '<pre><code>'
      //       + (escaped ? code : escape(code, true))
      //       + '</code></pre>\n';
      //   }

      //   return '<pre><code class="'
      //     + this.options.langPrefix
      //     + escape(lang, true)
      //     + '">'
      //     + (escaped ? code : escape(code, true))
      //     + '</code></pre>\n';
      // },


      /**
       * @param {string} text
       * @param {string} level
       * @param {string} raw
       * @param {any} slugger
       */
      heading(text, level, raw, slugger) {
        const mm = {
          // "1": "mt-5 mb-4",
          // "2": "mt-4 mb-3",
          // "3": "mt-3 mb-2",
          // "4": "mt-2 mb-1",
          // "5": "my-1",
          // "6": "my-1",
        };
        let idText = "";
        if (this.options.headerIds) {
          const id = this.options.headerPrefix + slugger.slug(raw);
          idText = ` id="${id}"`;
        }
        return `<h${level} class="h${level} ${mm[level]}"${idText}>${text}</h${level}>\n`;
      },

      /**
       * @param {string} header
       * @param {string} body
       */
      table(header, body) {
        if (body) {body = `<tbody>${body}</tbody>`;};
        return `<div class="table-wrap"><table class="table table-bordered">\n`
          + `<thead>\n${header}</thead>\n`
          + body
          + `</table></div>\n`;
      },

    };

    const myExtension = {
      tokenizer: myTokenizer,
      renderer: myRenderer,
    };

    mkd.use(myExtension);

    mkd.use({
      pedantic: false,
      gfm: true,
      breaks: true,
      headerIds: true,
      // highlight: true,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      xhtml: true,
    });

    // 一个 axios 实例，方便在控制台调试
    const anAxios = axios.create({
      headers: {'Cache-Cotrol': 'no-cache'},
    });

    const localData = reactive({
      pageName: "",
      mdContent: "",
    });

    onMounted(()=>{updateMD()});

    const pageNames = ['index', 'news'];

    const pageName = () => {
      let tmpLL = location.pathname.split("/").filter(it=>it.length);
      console.log(tmpLL);
      let that = tmpLL[tmpLL.length-1].replace(/\.html$/g, "");
      console.log(that);
      if (!pageNames.includes(that)) {that = "index"};
      return that;
    };

    // 更新 MD
    const updateMD = async () => {
      const map = {
        '': "md/index.md",
        'index': "md/index.md",
        'news': "md/news.md",
      };
      localData.pageName = pageName();

      let mdUrl = map[localData.pageName] ?? map[''];

      let wrap;
      try {
        let response = await anAxios.request({
          url: mdUrl,
          method: 'get',
        });
        wrap = (response.data);
        // console.log(wrap);
        localData.mdContent = mkd.parse(wrap);
        await updateHLJS();
      } catch (error) {
        throw error;
        return;
      };
    };

    const updateHLJS = async () => {
      console.log("highlight");
      setTimeout(()=>{
        document.querySelectorAll('pre code').forEach((el) => {
          hljs.highlightElement(el);
        }, 0);
      });
    };

    watch(()=>localData.mdContent, async ()=>{
      console.log("11");
      await updateHLJS();
      console.log("22");
    });



    return {
      //
      mkd,
      hljs,
      axios,
      anAxios,
      localData,
      pageName,
      //
    };
  },
  template: `
    <div class="page-main">
      <div class="container">
        <main class="container main my-4 pt-3 pb-5 rounded">
          <!--<div class="row text-center">
            <div class="col">
              <div class="rounded overflow-hidden"><img src="./images/banner.png"></div>
            </div>
          </div>-->
          <div class="row text-center">
            <div class="col">
              <div class="rounded overflow-hidden py-4 text-light" style="background:#4188bb">
                <div class="h1 fw-bold m-0 p-0">SpaCE2022</div>
                <div>第二届中文空间语义理解评测</div>
              </div>
            </div>
          </div>
          <div class="row my-2">
            <div class="col">
              <ul class="nav nav-pills justify-content-center">
                <li class="nav-item">
                  <a class="nav-link" :class="{active: pageName()=='index'}" href="./index">首页</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" :class="{active: pageName()=='news'}" href="./news">最新消息</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="row">
            <div class="col">
              <div class="md-wrap p-2" v-html="localData.mdContent"></div>
            </div>
          </div>
        </main>
      </div>
    </div>
  `,
};

const the_app = Vue_createApp(RootComponent);

const app = the_app.mount('#bodywrap');
window.app = app;

export default app;
