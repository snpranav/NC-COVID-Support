(function (e) {
  function a(a) {
    for (
      var s, o, i = a[0], l = a[1], c = a[2], d = 0, p = [];
      d < i.length;
      d++
    )
      (o = i[d]),
        Object.prototype.hasOwnProperty.call(r, o) && r[o] && p.push(r[o][0]),
        (r[o] = 0);
    for (s in l) Object.prototype.hasOwnProperty.call(l, s) && (e[s] = l[s]);
    u && u(a);
    while (p.length) p.shift()();
    return n.push.apply(n, c || []), t();
  }
  function t() {
    for (var e, a = 0; a < n.length; a++) {
      for (var t = n[a], s = !0, i = 1; i < t.length; i++) {
        var l = t[i];
        0 !== r[l] && (s = !1);
      }
      s && (n.splice(a--, 1), (e = o((o.s = t[0]))));
    }
    return e;
  }
  var s = {},
    r = { app: 0 },
    n = [];
  function o(a) {
    if (s[a]) return s[a].exports;
    var t = (s[a] = { i: a, l: !1, exports: {} });
    return e[a].call(t.exports, t, t.exports, o), (t.l = !0), t.exports;
  }
  (o.m = e),
    (o.c = s),
    (o.d = function (e, a, t) {
      o.o(e, a) || Object.defineProperty(e, a, { enumerable: !0, get: t });
    }),
    (o.r = function (e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (o.t = function (e, a) {
      if ((1 & a && (e = o(e)), 8 & a)) return e;
      if (4 & a && "object" === typeof e && e && e.__esModule) return e;
      var t = Object.create(null);
      if (
        (o.r(t),
        Object.defineProperty(t, "default", { enumerable: !0, value: e }),
        2 & a && "string" != typeof e)
      )
        for (var s in e)
          o.d(
            t,
            s,
            function (a) {
              return e[a];
            }.bind(null, s)
          );
      return t;
    }),
    (o.n = function (e) {
      var a =
        e && e.__esModule
          ? function () {
              return e["default"];
            }
          : function () {
              return e;
            };
      return o.d(a, "a", a), a;
    }),
    (o.o = function (e, a) {
      return Object.prototype.hasOwnProperty.call(e, a);
    }),
    (o.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    l = i.push.bind(i);
  (i.push = a), (i = i.slice());
  for (var c = 0; c < i.length; c++) a(i[c]);
  var u = l;
  n.push([0, "chunk-vendors"]), t();
})({
  0: function (e, a, t) {
    e.exports = t("56d7");
  },
  "0423": function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"閉じる","contact":"お問い合わせ","contactus":{"email":"Eメール","info":"このページは {1}の {0} を利用しています。ご不明な点がございましたら、 {2}までメールでお問い合わせください。"},"datahead":"データ共有に関する注意","dataprivacy":"NC COVIDサポートに関する情報は、ボランティアによって公開されたWebソースから収集されたか、事業主/リソースプロバイダーによって入力されたものです。データは、COVID-19パンデミックの際に、公共、地方企業、政府パートナー、および非営利団体を支援するために提供されます。 NC COVIDサポートの明示的な許可なしに、データを商業ベンチャーまたはその他の目的に使用しないでください。","devhelp":{"addbusiness":"ビジネスを追加","addinfo":"オンラインフォームを使用して、 {0} または {1}にアクセスしてください。","ambassadorinfo":"ノースカロライナ全体のカバレッジの拡大にご協力ください。アンバサダーは地方自治体や企業団体と協力して、NC COVIDサポートをコミュニティに提供します。開始するためのツールとリソースについては、 {0} までメールでお問い合わせください。","becomeambassador":"コミュニティアンバサダーになる","conduct":"行動規範","devnote":"開発者-GitHubで {0} と {1} を見つけてください。","dupsite":"または、自分の州のサイトを複製することもできます。","info":"これはオープンソースプロジェクトであり、他のコミュニティと共有して拡大するために構築されています。","source":"ソースコード","support":"近所の人や地元の企業をサポートしてください-私たちが成長するのを助けてください！","updatebusiness":"既存のエントリを更新する"},"getinvolved":"参加する","info":"リソースのデータベースには、次の組織が収集した情報が役立ちます。","linktext":"私たちに関しては","orgs":{"bureau":"チャペルヒル/オレンジカウンティビジターズビューロー","cfa":"アメリカのコード","chb":"チャペルヒル旅団","localistnc":"#LocalListNC","partnership":"チャペルヒルダウンタウンパートナーシップ","pittsboro-siler":"ピッツボロサイラーシティコンベンション＆ビジターズビューロー"},"partners":"情報源","title":"このサイトについて"},"category":{"childcare":"育児","family":"家族の食事の準備","farm":"農場および農民市場","food_bev":"専門食料品","grocery":"食料品","meal":"無料の食事","pet":"ペット用品","pharmacy":"薬局","restaurant":"レストラン|レストラン","school":"学校給食"},"dayofweek":{"any":"どれか","friday":"金曜日","monday":"月曜","saturday":"土曜日","sunday":"日曜日","thursday":"木曜日","tuesday":"火曜日","wednesday":"水曜日"},"label":{"address":"住所","allweek":"1週間中","backtolist":"リストに戻る","close":"閉じる","closed":"閉まっている","closed-on":"休業","closed-today":"本日休業","closedonday":"定休日（当日）","curbside":"カーブサイドピックアップ","delivery":"配達","details-last-updated":"詳細最終更新","discountmedical":"医療従事者割引|医療従事者割引","discounts":"","drivethru":"ドライブスルー","email":"Eメール","email_lowercase":"Eメール","farmersmarket":"ファーマーズマーケット|ファーマーズマーケット","farmpick-up":"農場出迎え","freegroceries":"無料の食料品店|無料の食料品店","freemeals":"無料の食事場所|無料の食事場所","freeproduce":"無料の商品の場所|無料の商品の場所","instructions":"説明書","locationhelplinktext":"もっと詳しく知る","mapkey":"マップキー","mealpublic":"食事は一般に公開されています","mealstudent":"学生のための食事","mustpreorder":"予約が必要","normalhours":"通常の時間","notes":"ノート","offers":"オファー","open":"開いた","openinghours":"営業時間","orderonline":"オンラインで注文して支払う","phone":"電話","selectacategory":"カテゴリーを選ぶ...","selected":"選択済み","seniorhours":"シニアアワー","specialhours":"シニアショッピング時間","website":"ウェブサイト"},"languages":{"ar":"アラビア語","en":"英語","es":"スペイン語","fr":"フランス語","ja":"日本人","ko":"韓国語","ms":"ビルマ語","zh":"簡体字中国語"},"locationhelp":"","sidebar":{"close-panel":"検索パネルを閉じる","info-about-us":"現在、このサイトはノースカロライナ州チャタム郡とオレンジ郡をサポートしています。と","info-end-text":"、範囲を拡大できます。","info-link-text":"あなたの助け","open-panel":"検索パネルを開く","shopsafe":"安全なショップをどうぞ！","sixfeet":"ショッピングをするときは6フィート離してください。","stayhome":"病気のときは家にいてください。","washhands":"手をよく洗ってください。","what-do-you-need":"あなたは何が必要ですか？","when-do-you-need-it":"いつそれが必要ですか？"},"title":"{0} COVIDのサポート"}'
    );
  },
  "0d1c": function (e, a, t) {
    "use strict";
    var s = t("783a"),
      r = t.n(s);
    r.a;
  },
  2011: function (e, a, t) {},
  2060: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Tutup","contact":"Hubungi Kami","contactus":{"email":"E-mel","info":"Halaman ini dikuasakan oleh {0} dari {1}. Untuk pertanyaan, sila hubungi kami melalui e-mel di {2}."},"datahead":"CATATAN PADA PERKONGSIAN DATA","dataprivacy":"Maklumat mengenai NC COVID Support telah dikumpulkan dari sumber web awam oleh sukarelawan atau dimasukkan oleh pemilik perniagaan / penyedia sumber. Data disediakan untuk membantu orang ramai, perniagaan tempatan, rakan kongsi pemerintah, dan bukan keuntungan semasa pandemik COVID-19. Data tersebut tidak boleh digunakan untuk usaha komersial atau tujuan lain tanpa kebenaran jelas dari NC COVID Support.","devhelp":{"addbusiness":"tambah perniagaan","addinfo":"Gunakan borang dalam talian kami untuk {0} atau {1}.","ambassadorinfo":"Bantu kami mengembangkan liputan di seluruh North Carolina. Duta akan bekerjasama dengan kerajaan tempatan dan persatuan perniagaan untuk membawa NC COVID Support kepada komuniti mereka. Kirimkan kami di {0} untuk alat dan sumber untuk bermula.","becomeambassador":"Menjadi duta komuniti","conduct":"Tatakelakuan","devnote":"Pemaju - cari {0} dan {1} pada GitHub.","dupsite":"Sebagai alternatif, anda boleh menduplikasi tapak untuk keadaan anda.","info":"Ini adalah projek sumber terbuka, dibina untuk berkongsi dan mengembangkan kepada komuniti lain.","source":"kod sumber","support":"Menyokong jiran anda dan perniagaan tempatan - membantu kami berkembang!","updatebusiness":"kemas kini kemasukan yang sedia ada"},"getinvolved":"Melibatkan diri","info":"Pangkalan data kami mendapat manfaat daripada maklumat yang dikumpulkan oleh organisasi-organisasi ini:","linktext":"Tentang kita","orgs":{"bureau":"Chapel Hill / Biro Pelawat Orange County","cfa":"Kod untuk Amerika","chb":"Briged Hill Chapel","localistnc":"#LocalListNC","partnership":"Perkongsian Downtown Chapel Hill","pittsboro-siler":"Biro Konvensyen & Pelawat Pittsboro-Siler City"},"partners":"Sumber Maklumat","title":"Mengenai laman web ini"},"category":{"childcare":"Penjagaan kanak-kanak","family":"Makanan keluarga yang disediakan","farm":"Pasaran Ladang & Petani","food_bev":"Makanan & minuman khas","grocery":"Groceries","meal":"Makanan percuma","pet":"Bekalan Haiwan Peliharaan","pharmacy":"Farmasi","restaurant":"Restoran","school":"Makanan sekolah"},"dayofweek":{"any":"Sebarang","friday":"Jumaat","monday":"Isnin","saturday":"Sabtu","sunday":"Ahad","thursday":"Khamis","tuesday":"Selasa","wednesday":"Rabu"},"label":{"address":"Alamat","allweek":"Sepanjang minggu","backtolist":"Kembali kepada senarai","close":"Tutup","closed":"Tertutup","closed-on":"Tutup pada","closed-today":"Tutup Hari Ini","closedonday":"Ditutup (pada hari yang dipilih semasa)","curbside":"Pengambilan Curbside","delivery":"penghantaran","details-last-updated":"Butiran terakhir dikemas kini","discountmedical":"Diskaun pekerja perubatan | diskaun pekerja perubatan |","discounts":"","drivethru":"Pandu lalu","email":"E-mel","email_lowercase":"E-mel","farmersmarket":"Pasaran Peladang | Pasaran Peladang","farmpick-up":"Pengambilan di ladang","freegroceries":"Lokasi runcit percuma | Lokasi runcit percuma","freemeals":"Lokasi makanan percuma | Lokasi makan percuma","freeproduce":"Lokasi menghasilkan percuma | Lokasi menghasilkan percuma","instructions":"Arahan","locationhelplinktext":"Ketahui lebih lanjut","mapkey":"Kunci Peta","mealpublic":"Makanan dibuka untuk orang ramai","mealstudent":"Makanan untuk pelajar","mustpreorder":"Mesti prapesan","normalhours":"Jam biasa","notes":"Nota","offers":"Tawaran","open":"Buka","openinghours":"Waktu pembukaan","orderonline":"Perintah & bayar dalam talian","phone":"Telefon","selectacategory":"Pilih kategori...","selected":"Dipilih","seniorhours":"Jam kanan","specialhours":"Waktu membeli-belah kanan","website":"Laman web"},"languages":{"ar":"Bahasa Arab","en":"Bahasa Inggeris","es":"Sepanyol","fr":"Perancis","ja":"Jepun","ko":"Korea","ms":"Burma","zh":"Bahasa Cina Ringkas"},"locationhelp":"","sidebar":{"close-panel":"Tutup panel carian","info-about-us":"Pada masa ini, laman web ini menyokong Chatham County dan Orange County, NC. Dengan","info-end-text":", kami boleh mengembangkan liputan kami.","info-link-text":"pertolongan anda","open-panel":"Buka panel carian","shopsafe":"Tolong, selamatkan!","sixfeet":"Tinggal 6 kaki apabila membeli-belah.","stayhome":"Sekiranya anda sakit, tinggal di rumah.","washhands":"Cuci tangan anda dengan kerap.","what-do-you-need":"Apa yang anda perlukan?","when-do-you-need-it":"Bilakah anda memerlukannya?"},"title":"{0} COVID Support"}'
    );
  },
  "26f3": function (e, a, t) {},
  2975: function (e, a, t) {
    "use strict";
    var s = t("8fde"),
      r = t.n(s);
    r.a;
  },
  3504: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"关","contact":"联系我们","contactus":{"email":"电子邮件","info":"该页面由 {1}的 {0} 驱动。如有疑问，请通过 {2}的电子邮件与我们联系。"},"datahead":"关于数据共享的注意事项","dataprivacy":"关于NC COVID支持的信息已由志愿者从公共Web来源收集，或由企业所有者/资源提供者输入。提供这些数据是为了在COVID-19大流行期间为公众，当地企业，政府合作伙伴和非营利组织提供帮助。未经NC COVID支持的明确许可，不得将数据用于商业活动或其他目的。","devhelp":{"addbusiness":"添加业务","addinfo":"使用我们的在线表格填写 {0} 或 {1}。","ambassadorinfo":"帮助我们扩大在北卡罗来纳州的覆盖范围。大使将与当地政府和商业协会合作，为社区提供NC COVID支持。给我们发电子邮件，地址为 {0} ，以获取入门所需的工具和资源。","becomeambassador":"成为社区大使","conduct":"行为守则","devnote":"开发人员-在GitHub上找到我们的 {0} 和 {1} 。","dupsite":"或者，您可以为您的州复制一个站点。","info":"这是一个开源项目，旨在与其他社区共享和扩展。","source":"源代码","support":"支持您的邻居和当地企业-帮助我们发展！","updatebusiness":"更新现有条目"},"getinvolved":"参与其中","info":"我们的资源数据库受益于这些组织收集的信息：","linktext":"关于我们","orgs":{"bureau":"教堂山/橙县游客管理局","cfa":"美国法典","chb":"教堂山大队","localistnc":"#LocalListNC","partnership":"教堂山市中心合作伙伴","pittsboro-siler":"皮茨伯勒-西勒市会展和旅游局"},"partners":"信息来源","title":"关于本网站"},"category":{"childcare":"育儿","family":"家庭准备饭","farm":"农场与农贸市场","food_bev":"特色食品和饮料","grocery":"杂货","meal":"免费餐","pet":"宠物用品","pharmacy":"药房","restaurant":"餐厅","school":"学校餐"},"dayofweek":{"any":"任何","friday":"星期️五","monday":"星期一","saturday":"星期️六","sunday":"星期️日","thursday":"星期️四","tuesday":"星期二","wednesday":"星期三"},"label":{"address":"地址","allweek":"整个星期","backtolist":"返回目录","close":"关","closed":"关闭","closed-on":"封闭于","closed-today":"今天休息","closedonday":"休馆（当前选定日期）","curbside":"路边捡拾","delivery":"交货","details-last-updated":"详细信息最近更新","discountmedical":"医务人员折扣|医务人员折扣","discounts":"","drivethru":"得来速","email":"电子邮件","email_lowercase":"电子邮件","farmersmarket":"农贸市场|农贸市场","farmpick-up":"农场接送","freegroceries":"免费杂货店|免费杂货店","freemeals":"免费用餐地点|免费用餐地点","freeproduce":"免费产品位置|免费产品位置","instructions":"说明","locationhelplinktext":"学到更多","mapkey":"地图键","mealpublic":"餐点向公众开放","mealstudent":"给学生的饭菜","mustpreorder":"必须预订","normalhours":"正常营业时间","notes":"笔记","offers":"优惠","open":"打开","openinghours":"营业时间","orderonline":"在线订购和付款","phone":"电话","selectacategory":"选择一个类别...","selected":"选","seniorhours":"高级时间","specialhours":"高级购物时间","website":"网站"},"languages":{"ar":"阿拉伯","en":"英语","es":"西班牙语","fr":"法国","ja":"日本","ko":"朝鲜的","ms":"缅甸语","zh":"简体中文"},"locationhelp":"","sidebar":{"close-panel":"关闭搜索面板","info-about-us":"当前，此站点支持查塔姆县和北卡罗来纳州奥兰治县。用","info-end-text":"，我们可以扩大覆盖范围。","info-link-text":"你的帮助","open-panel":"打开搜索面板","shopsafe":"请安全！","sixfeet":"购物时，相隔6英尺。","stayhome":"如果您生病了，请待在家里。","washhands":"经常洗手。","what-do-you-need":"你需要什么？","when-do-you-need-it":"您什么时候需要它？"},"title":"{0} COVID支持"}'
    );
  },
  "381b": function (e, a, t) {},
  "49f8": function (e, a, t) {
    var s = {
      "./ar.json": "af08",
      "./en.json": "edd4",
      "./es.json": "a306",
      "./fr.json": "f693",
      "./ja.json": "0423",
      "./ko.json": "dd11",
      "./ms.json": "2060",
      "./rw.json": "4ef3",
      "./zh.json": "3504",
    };
    function r(e) {
      var a = n(e);
      return t(a);
    }
    function n(e) {
      if (!t.o(s, e)) {
        var a = new Error("Cannot find module '" + e + "'");
        throw ((a.code = "MODULE_NOT_FOUND"), a);
      }
      return s[e];
    }
    (r.keys = function () {
      return Object.keys(s);
    }),
      (r.resolve = n),
      (e.exports = r),
      (r.id = "49f8");
  },
  "4cda": function (e, a, t) {},
  "4ef3": function (e) {
    e.exports = JSON.parse("{}");
  },
  5452: function (e, a, t) {
    "use strict";
    var s = t("af35"),
      r = t.n(s);
    r.a;
  },
  "56d7": function (e, a, t) {
    "use strict";
    t.r(a);
    t("e260"), t("e6cf"), t("cca6"), t("a79d");
    var s = t("2b0e"),
      r = t("5f5b"),
      n =
        (t("4160"),
        t("d3b7"),
        t("ac1f"),
        t("466d"),
        t("159b"),
        t("ddb0"),
        t("a925"));
    function o() {
      var e = t("49f8"),
        a = {};
      return (
        e.keys().forEach(function (t) {
          var s = t.match(/([A-Za-z0-9-_]+)\./i);
          if (s && s.length > 1) {
            var r = s[1];
            a[r] = e(t);
          }
        }),
        a
      );
    }
    s["default"].use(n["a"]);
    var i = new n["a"]({ locale: "en", fallbackLocale: "en", messages: o() }),
      l = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "home" },
          [
            t(
              "app-header",
              {
                attrs: {
                  language: e.language.name,
                  socialMedia: e.socialMediaico,
                },
                on: { "language-selected": e.changeLanguage },
              },
              [t("theme-header")],
              1
            ),
            t("about-us-modal"),
            e.entries
              ? t(
                  "div",
                  {
                    staticClass: "d-flex",
                    class: { toggled: e.isFilterOpen },
                    attrs: { id: "wrapper" },
                  },
                  [
                    t("search-filter", {
                      attrs: {
                        isFilterOpen: e.isFilterOpen,
                        need: e.need,
                        day: e.day,
                        filteredMarkers: e.filteredMarkers,
                        highlightFilteredMarkers: e.highlightFilteredMarkers,
                        location: e.locationData,
                        "show-list": e.showList,
                      },
                      on: {
                        "location-selected": e.passLocation,
                        toggle: function (a) {
                          e.isFilterOpen = !e.isFilterOpen;
                        },
                        "need-selected": e.needSelected,
                        "day-selected": e.daySelected,
                      },
                    }),
                    t(
                      "div",
                      { attrs: { id: "page-content-wrapper" } },
                      [
                        t("highlights", {
                          class: { toggled: e.isFilterOpen },
                          attrs: {
                            need: e.need,
                            filteredMarkers: e.highlightFilteredMarkers,
                            highlightFilters: e.highlightFilters,
                          },
                          on: { "box-selected": e.boxSelected },
                        }),
                        t("resource-map", {
                          class: { noselection: "none" == e.need },
                          attrs: {
                            filteredMarkers: e.filteredMarkers,
                            location: e.locationData,
                            attribution: e.attribution,
                            mapUrl: e.mapUrl,
                            centroid: e.centroid,
                          },
                          on: {
                            "location-selected": e.passLocation,
                            bounds: e.boundsUpdated,
                            center: e.centerUpdated,
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                )
              : e._e(),
          ],
          1
        );
      },
      c = [],
      u =
        (t("4de4"),
        t("caad"),
        t("d81d"),
        t("b0c0"),
        t("2532"),
        t("96cf"),
        t("1da1")),
      d = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "b-navbar",
          {
            attrs: {
              toggleable: "lg",
              type: "dark",
              variant: "primary",
              id: "topnav",
            },
          },
          [
            t("b-navbar-brand", { attrs: { href: "#" } }, [e._t("default")], 2),
            t("b-navbar-toggle", { attrs: { target: "nav-collapse" } }),
            t(
              "b-collapse",
              { attrs: { id: "nav-collapse", "is-nav": "" } },
              [
                t(
                  "b-navbar-nav",
                  { staticClass: "ml-auto" },
                  [
                    t(
                      "b-nav-item",
                      { attrs: { right: "" } },
                      [
                        t(
                          "b-button",
                          {
                            staticClass: "my-2 my-sm-0",
                            attrs: {
                              size: "sm",
                              variant: "buttons",
                              type: "button",
                              onclick:
                                "window.open('https://forms.gle/fWiCg2z5CRx9ukGu7','_blank')",
                            },
                          },
                          [
                            t("i", {
                              staticClass: "fas fa-plus-square",
                              attrs: { "aria-hidden": "true" },
                            }),
                            e._v(" " + e._s(e.$t("about.devhelp.addbusiness"))),
                          ]
                        ),
                      ],
                      1
                    ),
                    t(
                      "b-nav-item",
                      {
                        attrs: { right: "" },
                        on: {
                          click: function (a) {
                            return e.$bvModal.show("about-us");
                          },
                        },
                      },
                      [e._v(" " + e._s(e.$t("about.linktext")) + " ")]
                    ),
                    e._l(e.socialMedia, function (a, s) {
                      return t(
                        "b-nav-item",
                        { key: s, attrs: { href: a.url } },
                        [
                          t("i", { class: "fab fa-" + a.icon }),
                          e._v(" "),
                          t("span", { staticClass: "sm-name" }, [
                            e._v(e._s(a.name)),
                          ]),
                        ]
                      );
                    }),
                    t(
                      "b-nav-item-dropdown",
                      {
                        attrs: { right: "" },
                        scopedSlots: e._u([
                          {
                            key: "button-content",
                            fn: function () {
                              return [
                                t("i", {
                                  staticClass: "fas fa-globe-americas",
                                  attrs: { "aria-hidden": "true" },
                                }),
                                t("span", {
                                  staticClass: "language",
                                  domProps: { innerHTML: e._s(e.language) },
                                }),
                              ];
                            },
                            proxy: !0,
                          },
                        ]),
                      },
                      e._l(e.languages, function (a) {
                        return t(
                          "b-dropdown-item",
                          { key: a.iso, attrs: { href: "#" } },
                          [
                            t(
                              "span",
                              { attrs: { title: e.$t("languages." + a.iso) } },
                              [
                                t("div", {
                                  attrs: { lang: a.iso },
                                  domProps: { innerHTML: e._s(a.name) },
                                  on: {
                                    click: function (t) {
                                      return e.$emit("language-selected", a);
                                    },
                                  },
                                }),
                              ]
                            ),
                          ]
                        );
                      }),
                      1
                    ),
                  ],
                  2
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      p = [],
      m = {
        name: "app-header",
        props: { language: String, socialMedia: Array },
        data: function () {
          return {
            languages: [
              { iso: "en", name: "English" },
              { iso: "es", name: "Espa&#241;ol" },
              { iso: "fr", name: "Fran&#231;ais" },
              { iso: "ko", name: "한국어" },
              { iso: "ar", name: "عربى" },
              { iso: "ja", name: "日本人" },
              { iso: "zh", name: "中文" },
              { iso: "ms", name: "ဗမာ" },
            ],
          };
        },
      },
      f = m,
      h = (t("5452"), t("2877")),
      g = Object(h["a"])(f, d, p, !1, null, null, null),
      b = g.exports,
      y = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          {
            staticClass: "border-right",
            attrs: { id: "search-filter-wrapper" },
          },
          [
            t(
              "div",
              {
                staticClass:
                  "tab bg-dialogs border-right border-top border-bottom",
                on: {
                  click: function (a) {
                    return e.$emit("toggle");
                  },
                },
              },
              [t("i", { staticClass: "fas fa-caret-down" })]
            ),
            t(
              "b-list-group",
              { staticClass: "need-day-group" },
              [
                t(
                  "b-list-group-item",
                  { staticClass: "need-type", attrs: { variant: "sideNav" } },
                  [
                    t("h6", [e._v(e._s(e.$t("sidebar.what-do-you-need")))]),
                    t("b-form-select", {
                      staticClass: "custom-select",
                      attrs: { value: e.need, options: e.needOptionGroups },
                      on: {
                        change: function (a) {
                          return e.$emit("need-selected", a);
                        },
                      },
                    }),
                  ],
                  1
                ),
                t(
                  "b-list-group-item",
                  { attrs: { variant: "sideNav" } },
                  [
                    t("h6", [e._v(e._s(e.$t("sidebar.when-do-you-need-it")))]),
                    t("b-form-select", {
                      attrs: { value: e.day, options: e.dayOptions },
                      on: {
                        change: function (a) {
                          return e.$emit("day-selected", a);
                        },
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            null == e.location.currentBusiness || e.showListing
              ? t(
                  "InfoPanel",
                  { attrs: { infotype: "note", icon: "fa-info-circle" } },
                  [
                    e._v(" " + e._s(e.$t("sidebar.info-about-us")) + " "),
                    t(
                      "a",
                      {
                        attrs: { href: "#" },
                        on: {
                          click: function (a) {
                            return e.$bvModal.show("about-us");
                          },
                        },
                      },
                      [e._v(e._s(e.$t("sidebar.info-link-text")))]
                    ),
                    e._v(e._s(e.$t("sidebar.info-end-text")) + " "),
                  ]
                )
              : e._e(),
            0 == e.filteredMarkers.length
              ? t(
                  "InfoPanel",
                  { attrs: { infotype: "handwash", icon: "fa-hands-wash" } },
                  [
                    t("b", { staticClass: "themeFont" }, [
                      e._v(e._s(e.$t("sidebar.shopsafe"))),
                    ]),
                    t("br"),
                    e._v(" (1) " + e._s(e.$t("sidebar.stayhome"))),
                    t("br"),
                    e._v(" (2) " + e._s(e.$t("sidebar.sixfeet"))),
                    t("br"),
                    e._v(" (3) " + e._s(e.$t("sidebar.washhands"))),
                    t("br"),
                  ]
                )
              : e._e(),
            null != e.location.currentBusiness && 1 != e.showListing
              ? t("BusinessDetails", {
                  attrs: {
                    infotype: "green",
                    icon: "fa-tractor",
                    business: e.location.currentBusiness,
                  },
                  on: { "close-details": e.closeDetails },
                })
              : e._e(),
            e.showListing
              ? t("results-list", {
                  attrs: {
                    filteredMarkers: e.highlightFilteredMarkers,
                    location: e.location,
                    "selected-day": e.day,
                  },
                  on: { "location-selected": e.passLocation },
                })
              : e._e(),
          ],
          1
        );
      },
      v = [],
      k = (t("a9e3"), 7),
      x = [
        { day: "any", pos: k },
        { day: "monday", pos: 1 },
        { day: "tuesday", pos: 2 },
        { day: "wednesday", pos: 3 },
        { day: "thursday", pos: 4 },
        { day: "friday", pos: 5 },
        { day: "saturday", pos: 6 },
        { day: "sunday", pos: 0 },
      ],
      $ = [
        { day: "sunday" },
        { day: "monday" },
        { day: "tuesday" },
        { day: "wednesday" },
        { day: "thursday" },
        { day: "friday" },
        { day: "saturday" },
      ],
      C = [
        { day: "monday" },
        { day: "tuesday" },
        { day: "wednesday" },
        { day: "thursday" },
        { day: "friday" },
        { day: "saturday" },
        { day: "sunday" },
      ],
      w = ["mon", "tues", "wed", "thr", "fri", "sat", "sun"].map(function (e) {
        return "gsx$".concat(e);
      }),
      _ = ["mon", "tues", "wed", "thr", "fri", "sat", "sun"].map(function (e) {
        return "gsx$sp".concat(e);
      }),
      M = [
        "in-storepickup",
        "curbside",
        "specialhours",
        "mealstudent",
        "mealpublic",
        "familymeal",
        "orderonline",
        "payonline",
        "mustpreorder",
        "discountmedical",
        "delivery",
        "freeproduce",
        "freegroceries",
        "farmpick-up",
        "farmersmarket",
      ],
      O = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "span",
          [
            t(
              "b-list-group",
              { staticClass: "list-group-flush" },
              [
                t(
                  "b-list-group-item",
                  {
                    staticClass: "backtolist",
                    attrs: { variant: "sideNav", button: "" },
                    on: {
                      click: function (a) {
                        return e.$emit("close-details");
                      },
                    },
                  },
                  [
                    t("i", { staticClass: "fas fa-arrow-left" }),
                    e._v(" " + e._s(e.$t("label.backtolist")) + " "),
                  ]
                ),
              ],
              1
            ),
            t(
              "b-list-group",
              { staticClass: "list-group-flush business-details" },
              [
                t(
                  "b-list-group-item",
                  { class: e.infotype, attrs: { variant: "sideNav" } },
                  [
                    t(
                      "div",
                      [
                        t("div", { staticClass: "title" }, [
                          t("i", { class: e.businessIcon(e.business.marker) }),
                          t(
                            "div",
                            { staticClass: "busName" },
                            [
                              t("h5", [
                                e._v(
                                  e._s(e.business.marker.gsx$providername.$t)
                                ),
                              ]),
                              e.business.marker.gsx$provideraddloc.$t
                                ? t("span", [
                                    e._v(
                                      e._s(
                                        e.business.marker.gsx$provideraddloc.$t
                                      )
                                    ),
                                  ])
                                : e._e(),
                              e.business.marker.gsx$cuisine.$t
                                ? [e._v(e._s(e.business.marker.gsx$cuisine.$t))]
                                : e._e(),
                            ],
                            2
                          ),
                        ]),
                        "" !== e.getAddress(e.business.marker)
                          ? t("p", [
                              t("b", [e._v(e._s(e.$t("label.address")) + ":")]),
                              t("br"),
                              e._v(
                                " " +
                                  e._s(e.getAddress(e.business.marker)) +
                                  " "
                              ),
                            ])
                          : e._e(),
                        t(
                          "p",
                          [
                            void 0 != e.business.marker.gsx$discountmedical &&
                            1 == e.business.marker.gsx$discountmedical.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-user-md",
                                    title: e.$tc("label.discountmedical", 1),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$familymeal.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-user-friends",
                                    title: e.$tc("category.family", 2),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$mealstudent.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-school",
                                    title: e.$tc("label.mealstudent", 1),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$mealpublic.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-users",
                                    title: e.$tc("label.mealpublic", 1),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$freeproduce.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-apple-alt",
                                    title: e.$tc("label.freeproduce", 1),
                                  },
                                })
                              : e._e(),
                            void 0 != e.business.marker.gsx$freegroceries &&
                            1 == e.business.marker.gsx$freegroceries.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-shopping-basket",
                                    title: e.$tc("label.freegroceries", 1),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$curbside.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-car",
                                    title: e.$tc("label.curbside", 1),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$drivethru.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-car-side",
                                    title: e.$t("label.drivethru"),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$orderonline.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-mouse",
                                    title: e.$t("label.orderonline"),
                                  },
                                })
                              : e._e(),
                            1 == e.business.marker.gsx$delivery.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-shipping-fast",
                                    title: e.$t("label.delivery"),
                                  },
                                })
                              : e._e(),
                          ],
                          1
                        ),
                        t(
                          "p",
                          [
                            void 0 !== e.business.marker.gsx$contact &&
                            e.business.marker.gsx$contact.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-phone-alt",
                                    title: e.business.marker.gsx$contact.$t,
                                    link:
                                      "tel:" + e.business.marker.gsx$contact.$t,
                                  },
                                })
                              : e._e(),
                            void 0 !== e.business.marker.gsx$contactspanish &&
                            e.business.marker.gsx$contactspanish.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-phone-alt",
                                    title:
                                      e.business.marker.gsx$contactspanish.$t +
                                      " (" +
                                      e.$t("languages.es").toLowerCase() +
                                      ")",
                                    link:
                                      "tel:" +
                                      e.business.marker.gsx$contactspanish.$t,
                                  },
                                })
                              : e._e(),
                            void 0 !== e.business.marker.gsx$weblink &&
                            e.business.marker.gsx$weblink.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-globe",
                                    title: e.getDomain(
                                      e.business.marker.gsx$weblink.$t
                                    ),
                                    link: e.business.marker.gsx$weblink.$t,
                                  },
                                })
                              : e._e(),
                            void 0 !== e.business.marker.gsx$email &&
                            e.business.marker.gsx$email.$t
                              ? t("icon-list-item", {
                                  attrs: {
                                    icon: "fas fa-envelope",
                                    title: e.getDomain(
                                      e.business.marker.gsx$email.$t
                                    ),
                                    link:
                                      "mailto:" +
                                      e.business.marker.gsx$email.$t,
                                  },
                                })
                              : e._e(),
                          ],
                          1
                        ),
                        t("opening-hours", {
                          attrs: {
                            business: e.business.marker,
                            title: e.$t("label.openinghours"),
                          },
                        }),
                        t("opening-hours", {
                          attrs: {
                            business: e.business.marker,
                            title: e.$t("label.seniorhours"),
                            senior: !0,
                          },
                        }),
                        void 0 !== e.business.marker.gsx$instructions &&
                        e.business.marker.gsx$instructions.$t
                          ? [
                              t("p", [
                                t("b", [
                                  e._v(e._s(e.$t("label.instructions")) + ":"),
                                ]),
                                t("br"),
                                e._v(
                                  e._s(e.business.marker.gsx$instructions.$t) +
                                    " "
                                ),
                              ]),
                            ]
                          : e._e(),
                        void 0 !== e.business.marker.gsx$offers &&
                        e.business.marker.gsx$offers.$t
                          ? [
                              t("p", [
                                t("b", [
                                  e._v(e._s(e.$t("label.offers")) + ":"),
                                ]),
                                t("br"),
                                e._v(
                                  e._s(e.business.marker.gsx$offers.$t) + " "
                                ),
                              ]),
                            ]
                          : e._e(),
                        void 0 !== e.business.marker.gsx$notes &&
                        e.business.marker.gsx$notes.$t
                          ? [
                              t("p", [
                                t("b", [e._v(e._s(e.$t("label.notes")) + ":")]),
                                t("br"),
                                e._v(
                                  e._s(e.business.marker.gsx$notes.$t) + " "
                                ),
                              ]),
                            ]
                          : e._e(),
                        "Invalid Date" != e.getLastUpdatedDate
                          ? t("p", { staticClass: "updated" }, [
                              e._v(
                                " " +
                                  e._s(e.$t("label.details-last-updated")) +
                                  ": " +
                                  e._s(e.getLastUpdatedDate) +
                                  " "
                              ),
                            ])
                          : e._e(),
                      ],
                      2
                    ),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      S = [],
      L =
        (t("5319"),
        t("1276"),
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return e.days.length > 0
            ? t("div", { staticClass: "openhours" }, [
                t("div", { staticClass: "oh-title" }, [
                  t("b", [e._v(e._s(e.title))]),
                ]),
                t(
                  "table",
                  e._l(e.days, function (a, s) {
                    return t("tr", { key: s }, [
                      t("td", { staticClass: "oh-name" }, [e._v(e._s(a.name))]),
                      t("td", { class: a.class }, [
                        t("span", { domProps: { innerHTML: e._s(a.val) } }),
                      ]),
                    ]);
                  }),
                  0
                ),
              ])
            : e._e();
        }),
      D = [],
      V = {
        name: "OpeningHours",
        data: function () {
          return {};
        },
        props: {
          title: { type: String },
          infotype: { type: String },
          icon: { type: String },
          senior: { type: Boolean },
          business: { type: Object },
          day: { type: String },
        },
        computed: {
          days: function () {
            var e = this,
              a = [],
              t = 0;
            return (
              this.senior
                ? _.forEach(function (s, r) {
                    var n = e.$t("dayofweek.".concat(C[r].day));
                    switch (e.business[s].$t.length) {
                      case 0:
                        break;
                      case 1:
                        break;
                      default:
                        a.push({
                          name: n,
                          val: e.business[s].$t.replace(",", "<br/>"),
                        }),
                          t++;
                        break;
                    }
                  })
                : w.forEach(function (s, r) {
                    var n = e.$t("dayofweek.".concat(C[r].day));
                    switch (e.business[s].$t.length) {
                      case 0:
                        break;
                      case 1:
                        0 == e.business[s].$t &&
                          a.push({
                            name: n,
                            val: e.$t("label.closed"),
                            class: "closed",
                          }),
                          t++;
                        break;
                      default:
                        a.push({
                          name: n,
                          val: e.business[s].$t.replace(",", "<br/>"),
                        }),
                          t++;
                        break;
                    }
                  }),
              0 == t
                ? a.push({
                    name: this.$t("label.allweek"),
                    val: this.$t("label.closed"),
                  })
                : a
            );
          },
        },
      },
      B = V,
      I = (t("0d1c"), Object(h["a"])(B, L, D, !1, null, null, null)),
      P = I.exports,
      N = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          [
            "" != e.link
              ? [
                  t("div", { staticClass: "iconListItem" }, [
                    t("div", { staticClass: "ilIcon" }, [
                      e.leafletIcon
                        ? t("div", {
                            staticClass: "leafletIcon",
                            domProps: { innerHTML: e._s(e.generateIcon) },
                          })
                        : e._e(),
                      "" != e.icon
                        ? t("i", { staticClass: "fas", class: e.icon })
                        : e._e(),
                      null == e.icon || "" == e.icon
                        ? t("img", { attrs: { src: e.image } })
                        : e._e(),
                    ]),
                    t("div", { staticClass: "ilTitle" }, [
                      null != e.link && "" != e.link
                        ? t("a", { attrs: { href: e.link } }, [
                            t("span", { staticClass: "title" }, [
                              e._v(e._s(e.title)),
                            ]),
                          ])
                        : e._e(),
                      null == e.link || "" == e.link
                        ? t("span", { staticClass: "title" }, [
                            e._v(e._s(e.title)),
                          ])
                        : e._e(),
                    ]),
                  ]),
                ]
              : [
                  t("div", { staticClass: "iconListItem" }, [
                    t("div", { staticClass: "ilIcon" }, [
                      e.leafletIcon
                        ? t("div", {
                            staticClass: "leafletIcon",
                            domProps: { innerHTML: e._s(e.generateIcon) },
                          })
                        : e._e(),
                      "" != e.icon
                        ? t("i", { staticClass: "fas", class: e.icon })
                        : e._e(),
                      null == e.icon || "" == e.icon
                        ? t("img", { attrs: { src: e.image } })
                        : e._e(),
                    ]),
                    t("div", { staticClass: "ilTitle" }, [
                      t("span", { staticClass: "title" }, [
                        e._v(e._s(e.title)),
                      ]),
                    ]),
                  ]),
                ],
          ],
          2
        );
      },
      j = [],
      A = {
        name: "IconListItem",
        data: function () {
          return { selected: !1 };
        },
        props: {
          leafletIcon: {},
          title: { type: String },
          link: { type: String },
          icon: { type: String },
          image: { type: String },
        },
        computed: {
          generateIcon: function () {
            return this.leafletIcon.createIcon().outerHTML;
          },
        },
      },
      E = A,
      F = (t("7c81"), Object(h["a"])(E, N, j, !1, null, null, null)),
      z = F.exports,
      T = (t("c975"), t("498a"), t("3835"));
    function H(e) {
      switch (e.gsx$resource.$t) {
        case "grocery":
          return "fas fa-shopping-basket";
        case "pharmacy":
          return "fas fa-prescription";
        case "pet":
          return "fas fa-paw";
        case "farm":
          return 1 == e.gsx$farmersmarket.$t
            ? "fas fa-store"
            : "fas fa-tractor";
        default:
      }
      var a = e.gsx$cuisine.$t,
        t =
          a.indexOf(",") > 0
            ? a.toLowerCase().substr(0, a.indexOf(",")).trim()
            : a.toLowerCase().trim();
      switch (t) {
        case "burgers":
          return "fas fa-hamburger";
        case "cheese":
          return "fas fa-cheese";
        case "beer":
        case "craft beer":
          return "fas fa-beer";
        case "pizza":
          return "fas fa-pizza-slice";
        case "mexican":
          return "fas fa-pepper-hot";
        case "wine":
          return "fas fa-wine-glass-alt";
        case "fish":
        case "seafood":
          return "fas fa-fish";
        case "ice cream":
          return "fas fa-ice-cream";
        case "texan":
          return "fas fa-hat-cowboy";
        case "chicken":
          return "fas fa-drumstick-bite";
        case "sandwiches":
          return "fas fa-bread-slice";
        case "american":
          return "fas fa-flag-usa";
        case "vegan":
        case "vegetarian":
          return "fas fa-carrot";
        case "market":
          return "fas fa-store";
        default:
          return "fas fa-utensils";
      }
    }
    function R(e) {
      var a =
        void 0 !== e.gsx$address && "" !== e.gsx$address.$t
          ? e.gsx$address.$t + ", "
          : "";
      return (
        (a +=
          void 0 !== e.gsx$city && "" !== e.gsx$city.$t
            ? e.gsx$city.$t + ", "
            : ""),
        (a +=
          void 0 !== e.gsx$state && "" !== e.gsx$state.$t
            ? e.gsx$state.$t + " "
            : ""),
        a + (void 0 !== e.gsx$zip && "" !== e.gsx$zip.$t ? e.gsx$zip.$t : "")
      );
    }
    function U(e, a) {
      var t = Object(T["a"])(e, 2),
        s = t[0],
        r = t[1],
        n = Object(T["a"])(a, 2),
        o = n[0],
        i = n[1],
        l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        c = function (e) {
          return (Math.PI / 180) * e;
        },
        u = function (e, a) {
          return (Math.PI / 180) * (e - a);
        },
        d = 6371,
        p = u(o, s),
        m = u(i, r);
      (s = c(s)), (o = c(o));
      var f =
          Math.pow(Math.sin(p / 2), 2) +
          Math.pow(Math.sin(m / 2), 2) * Math.cos(s) * Math.cos(o),
        h = 2 * Math.asin(Math.sqrt(f)),
        g = d * h;
      return l && (g /= 1.60934), g;
    }
    function G(e, a) {
      return e.distance < a.distance ? -1 : e.distance > a.distance ? 1 : 0;
    }
    var q = {
        name: "BusinessDetails",
        components: { OpeningHours: P, IconListItem: z },
        data: function () {
          return {};
        },
        props: {
          infotype: { type: String },
          icon: { type: String },
          business: Object,
        },
        methods: {
          getDomain: function (e) {
            var a = e
              .replace("http://", "")
              .replace("https://", "")
              .replace("www.", "")
              .split(/[/?#]/);
            return a[0];
          },
          businessIcon: H,
          getAddress: R,
        },
        computed: {
          getLastUpdatedDate: function () {
            return new Date(
              Date.parse(this.business.marker.gsx$lastupdate.$t)
            ).toLocaleDateString();
          },
        },
      },
      K = q,
      J = (t("d07e"), Object(h["a"])(K, O, S, !1, null, "098cb900", null)),
      W = J.exports,
      Z = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "b-list-group",
          { staticClass: "list-group list-group-flush" },
          [
            t(
              "b-list-group-item",
              { class: e.infotype, attrs: { variant: "sideNav" } },
              [
                t("i", { staticClass: "fas", class: e.icon }),
                t("div", [e._t("default")], 2),
              ]
            ),
          ],
          1
        );
      },
      Q = [],
      Y = {
        name: "InfoPanel",
        data: function () {
          return {};
        },
        props: { infotype: { type: String }, icon: { type: String } },
      },
      X = Y,
      ee = (t("69ce"), Object(h["a"])(X, Z, Q, !1, null, null, null)),
      ae = ee.exports,
      te = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "div",
          { staticClass: "resultWrapper" },
          [
            t(
              "b-list-group",
              { ref: "results", staticClass: "resultList list-group-flush" },
              e._l(e.filteredMarkers, function (a, s) {
                return t(
                  "b-list-group-item",
                  {
                    key: s,
                    ref: "result" + s,
                    refInFor: !0,
                    staticClass: "resultItem",
                    class: {
                      selected: s == e.location.locValue,
                      closedOne: 0 == a.oc,
                    },
                    attrs: { action: "", variant: "sideNav" },
                    on: {
                      click: function (a) {
                        return e.$emit("location-selected", {
                          locValue: s,
                          isSetByMap: !1,
                        });
                      },
                    },
                  },
                  [
                    t("h5", { staticClass: "resultTitle" }, [
                      e._v(e._s(a.marker.gsx$providername.$t)),
                    ]),
                    a.marker.gsx$provideraddloc.$t
                      ? [
                          t("div", { staticClass: "addloc" }, [
                            e._v(e._s(a.marker.gsx$provideraddloc.$t)),
                          ]),
                        ]
                      : e._e(),
                    a.oc
                      ? e._e()
                      : t("div", { staticClass: "closed" }, [
                          e._v(e._s(e.getClosedMessage())),
                        ]),
                    t("span", { staticClass: "resultAddress" }, [
                      a.marker.gsx$cuisine.$t
                        ? t("span", [
                            e._v(e._s(a.marker.gsx$cuisine.$t)),
                            t("br"),
                          ])
                        : e._e(),
                      e._v(
                        " " +
                          e._s(a.marker.gsx$address.$t) +
                          e._s("" !== a.marker.gsx$address.$t ? "," : "") +
                          " " +
                          e._s(a.marker.gsx$city.$t) +
                          " "
                      ),
                    ]),
                    1 == a.marker.gsx$discountmedical.$t
                      ? [
                          t(
                            "span",
                            {
                              attrs: {
                                title: e.$tc("label.discountmedical", 1),
                              },
                            },
                            [t("i", { staticClass: "fas fa-user-md" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$familymeal.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$tc("category.family", 2) } },
                            [t("i", { staticClass: "fas fa-user-friends" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$mealstudent.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$tc("label.mealstudent", 1) } },
                            [t("i", { staticClass: "fas fa-school" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$mealstudent.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$tc("label.mealpublic", 1) } },
                            [t("i", { staticClass: "fas fa-users" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$drivethru.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$t("label.drivethru") } },
                            [t("i", { staticClass: "fas fa-car-side" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$curbside.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$tc("label.curbside", 1) } },
                            [t("i", { staticClass: "fas fa-car" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$orderonline.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$t("label.orderonline") } },
                            [t("i", { staticClass: "fas fa-mouse" })]
                          ),
                        ]
                      : e._e(),
                    1 == a.marker.gsx$delivery.$t
                      ? [
                          t(
                            "span",
                            { attrs: { title: e.$t("label.delivery") } },
                            [t("i", { staticClass: "fas fa-shipping-fast" })]
                          ),
                        ]
                      : e._e(),
                  ],
                  2
                );
              }),
              1
            ),
          ],
          1
        );
      },
      se = [],
      re =
        (t("99af"),
        {
          name: "ResultsList",
          data: function () {
            return { selected: !1, today: new Date().getDay() };
          },
          components: {},
          props: {
            filteredMarkers: Array,
            location: { locValue: Number, isSetByMap: Boolean },
            selectedDay: Number,
          },
          watch: {
            location: function (e) {
              if (e.isSetByMap) {
                var a = this.$refs["result" + e.locValue][0].offsetTop - 330;
                this.$refs["results"].scrollTo(0, a);
              }
            },
          },
          methods: {
            getClosedMessage: function () {
              return this.selectedDay > 6
                ? this.$t("label.closed-today")
                : ""
                    .concat(this.$t("label.closed-on"), " ")
                    .concat(
                      this.$t("dayofweek.".concat($[this.selectedDay].day))
                    );
            },
          },
        }),
      ne = re,
      oe = (t("c565"), Object(h["a"])(ne, te, se, !1, null, null, null)),
      ie = oe.exports,
      le = {
        name: "search-filter",
        components: { BusinessDetails: W, InfoPanel: ae, ResultsList: ie },
        data: function () {
          return { locationData: location, showListing: this.showList };
        },
        props: {
          isFilterOpen: Boolean,
          need: String,
          day: Number,
          filteredMarkers: Array,
          highlightFilteredMarkers: Array,
          location: {
            locValue: Number,
            locId: String,
            isSetByMap: Boolean,
            currentBusiness: Object,
          },
          showList: Boolean,
        },
        computed: {
          needOptionGroups: function () {
            var e = this,
              a = this.getNeedCategories().categories,
              t = [
                { value: "none", text: this.$tc("label.selectacategory", 1) },
              ];
            return (
              a.forEach(function (a) {
                if (void 0 != a.subcategories) {
                  var s = a.name,
                    r = [];
                  a.subcategories.forEach(function (a) {
                    var t = "category." + a.code;
                    r.push({ text: e.$t(t), value: a.code });
                  }),
                    t.push({ label: s, options: r });
                } else {
                  var n = "category." + a.code;
                  t.push({ text: e.$t(n), value: a.code });
                }
              }),
              t
            );
          },
          needOptions: function () {
            return [
              {
                value: "selectacategory",
                text: this.$tc("label.selectacategory", 1),
              },
              { value: "restaurant", text: this.$tc("category.restaurant", 2) },
              { value: "meal", text: this.$tc("category.meal", 2) },
              { value: "family", text: this.$tc("category.family", 2) },
              { value: "farm", text: this.$tc("category.farm", 2) },
              { value: "grocery", text: this.$tc("category.grocery", 2) },
              { value: "pharmacy", text: this.$tc("category.pharmacy", 1) },
              { value: "food_bev", text: this.$tc("category.food_bev", 2) },
              { value: "pet", text: this.$t("category.pet") },
            ];
          },
          dayOptions: function () {
            var e = this;
            return x.map(function (a) {
              return { value: a.pos, text: e.$t("dayofweek.".concat(a.day)) };
            });
          },
          tabtitle: function () {
            return this.isFilterOpen
              ? this.$t("sidebar.close-panel")
              : this.$t("sidebar.open-panel");
          },
        },
        methods: {
          getNeedCategories: function () {
            return {
              categories: [
                {
                  code: "food",
                  id: 1001,
                  name: "Food Resources",
                  subcategories: [
                    { code: "restaurant", id: 1002, name: "Restaurants" },
                    { code: "meal", id: 1004, name: "Free meals" },
                    { code: "family", id: 1006, name: "Prepared family meals" },
                    {
                      code: "food_bev",
                      id: 1003,
                      name: "Specialty food & beverage",
                    },
                    { code: "grocery", id: 1005, name: "Groceries" },
                  ],
                },
                { code: "farm", id: 1007, name: "Farms & farmers markets" },
                { code: "pharmacy", id: 1008, name: "Pharmacy" },
                { code: "pet", id: 1009, name: "Pet supplies" },
              ],
              regions: ["Orange"],
            };
          },
          closeDetails: function () {
            this.showListing = !0;
          },
          passLocation: function (e) {
            (this.locationData = e),
              (this.showListing = !1),
              this.$emit("location-selected", e);
          },
        },
        watch: {
          day: function () {
            (this.locationData = null), (this.showListing = !0);
          },
          need: function (e) {
            (this.locationData = null), (this.showListing = "none" != e);
          },
          location: function () {
            this.showListing = !1;
          },
        },
      },
      ce = le,
      ue = (t("6562"), Object(h["a"])(ce, y, v, !1, null, "3c79ca59", null)),
      de = ue.exports,
      pe = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return null != e.valueBoxes[0]
          ? t("div", { staticClass: "row highlights" }, [
              t(
                "div",
                { staticClass: "col-6 col-md-3 order-md-1" },
                [
                  t("value-box", {
                    staticClass: "bg-tertiary",
                    attrs: { content: e.valueBoxes[0] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              t(
                "div",
                { staticClass: "col-6 col-md-3 order-md-2" },
                [
                  t("value-box", {
                    staticClass: "bg-quaternary",
                    attrs: { content: e.valueBoxes[1] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              t(
                "div",
                { staticClass: "col-6 col-md-3 order-md-4" },
                [
                  t("value-box", {
                    staticClass: "bg-quaternary",
                    attrs: { content: e.valueBoxes[2] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
              t(
                "div",
                { staticClass: "col-6 col-md-3 order-md-3" },
                [
                  t("value-box", {
                    staticClass: "bg-tertiary",
                    attrs: { content: e.valueBoxes[3] },
                    on: { "box-selected": e.boxSelected },
                  }),
                ],
                1
              ),
            ])
          : e._e();
      },
      me = [],
      fe =
        (t("13d5"),
        function () {
          var e = this,
            a = e.$createElement,
            t = e._self._c || a;
          return t(
            "div",
            {
              staticClass: "valuebox themeFont",
              class: { selected: e.content.selected },
              on: {
                click: function (a) {
                  return e.$emit("box-selected", { need: e.content.need });
                },
              },
            },
            [
              t("div", { staticClass: "number" }, [
                e._v(e._s(e.content.value)),
              ]),
              t(
                "div",
                {
                  staticClass: "title",
                  class: {
                    ten: e.content.value > 9,
                    hundred: e.content.value > 99,
                    thousand: e.content.value > 999,
                  },
                },
                [e._v(" " + e._s(e.content.title) + " ")]
              ),
              "" != e.content.icon
                ? t("i", { staticClass: "fas", class: e.content.icon })
                : e._e(),
            ]
          );
        }),
      he = [],
      ge = {
        name: "ValueBox",
        props: {
          content: {
            title: String,
            value: Number,
            icon: String,
            need: String,
            selected: Boolean,
          },
        },
      },
      be = ge,
      ye = (t("882a"), Object(h["a"])(be, fe, he, !1, null, "95834eea", null)),
      ve = ye.exports,
      ke = function (e, a) {
        return (e || []).reduce(function (e, t) {
          return "1" == t.marker["gsx$" + a].$t && t.oc ? e + 1 : e;
        }, 0);
      },
      xe = {
        name: "Highlights",
        components: { ValueBox: ve },
        props: {
          need: String,
          filteredMarkers: Array,
          highlightFilters: Array,
        },
        methods: {
          boxSelected: function (e) {
            this.$emit("box-selected", e);
          },
          buildBoxValue: function (e, a, t) {
            var s =
                arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = "label.".concat(e),
              n =
                void 0 !== this.highlightFilters
                  ? this.highlightFilters.includes(e)
                  : "";
            return {
              icon: a,
              value: t,
              title: s ? this.$tc(r, t) : this.$t(r),
              need: e,
              selected: n,
            };
          },
        },
        computed: {
          countPickup: function () {
            return ke(this.filteredMarkers, "in-storepickup");
          },
          countCurbside: function () {
            return ke(this.filteredMarkers, "curbside");
          },
          countSenior: function () {
            return ke(this.filteredMarkers, "specialhours");
          },
          countFreeStudentMeal: function () {
            return ke(this.filteredMarkers, "mealstudent");
          },
          countPublicMeal: function () {
            return ke(this.filteredMarkers, "mealpublic");
          },
          countFamilyMeal: function () {
            return ke(this.filteredMarkers, "familymeal");
          },
          countOrderOnline: function () {
            return ke(this.filteredMarkers, "orderonline");
          },
          countPayOnline: function () {
            return ke(this.filteredMarkers, "payonline");
          },
          countMustPreOrder: function () {
            return ke(this.filteredMarkers, "mustpreorder");
          },
          countDiscountMedical: function () {
            return ke(this.filteredMarkers, "discountmedical");
          },
          countDelivery: function () {
            return ke(this.filteredMarkers, "delivery");
          },
          countProduce: function () {
            return ke(this.filteredMarkers, "freeproduce");
          },
          countGroceries: function () {
            return ke(this.filteredMarkers, "freegroceries");
          },
          countFarmPickUp: function () {
            return ke(this.filteredMarkers, "farmpick-up");
          },
          countFarmersMarket: function () {
            return ke(this.filteredMarkers, "farmersmarket");
          },
          orderOnlineValueBox: function () {
            return this.buildBoxValue(
              "orderonline",
              "fa-mouse",
              this.countOrderOnline
            );
          },
          curbsidePickupValueBox: function () {
            return this.buildBoxValue(
              "curbside",
              "fa-car",
              this.countCurbside,
              !0
            );
          },
          deliveryValueBox: function () {
            return this.buildBoxValue(
              "delivery",
              "fa-shipping-fast",
              this.countDelivery
            );
          },
          onFarmPickupValueBox: function () {
            return this.buildBoxValue(
              "farmpick-up",
              "fa-tractor",
              this.countFarmPickUp,
              !0
            );
          },
          farmersMarketValueBox: function () {
            return this.buildBoxValue(
              "farmersmarket",
              "fa-store",
              this.countFarmersMarket,
              !0
            );
          },
          seniorShoppingValueBox: function () {
            return this.buildBoxValue(
              "specialhours",
              "fa-history",
              this.countSenior
            );
          },
          medicalDiscountsValueBox: function () {
            return this.buildBoxValue(
              "discountmedical",
              "fa-user-md",
              this.countDiscountMedical,
              !0
            );
          },
          openToPublicValueBox: function () {
            return this.buildBoxValue(
              "mealpublic",
              "fa-users",
              this.countPublicMeal,
              !0
            );
          },
          freeStudentMealsValueBox: function () {
            return this.buildBoxValue(
              "mealstudent",
              "fa-school",
              this.countFreeStudentMeal,
              !0
            );
          },
          freeProduceValueBox: function () {
            return this.buildBoxValue(
              "freeproduce",
              "fa-apple-alt",
              this.countProduce,
              !0
            );
          },
          freeGroceryValueBox: function () {
            return this.buildBoxValue(
              "freegroceries",
              "fa-shopping-basket",
              this.countGroceries,
              !0
            );
          },
          mustPreOrderValueBox: function () {
            return this.buildBoxValue(
              "mustpreorder",
              "fa-phone",
              this.countMustPreOrder,
              !0
            );
          },
          valueBoxes: function () {
            switch (this.need) {
              case "grocery":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.seniorShoppingValueBox,
                ];
              case "food_bev":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.seniorShoppingValueBox,
                ];
              case "restaurant":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.medicalDiscountsValueBox,
                  this.deliveryValueBox,
                ];
              case "family":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.deliveryValueBox,
                  this.mustPreOrderValueBox,
                ];
              case "farm":
                return [
                  this.curbsidePickupValueBox,
                  this.onFarmPickupValueBox,
                  this.farmersMarketValueBox,
                  this.orderOnlineValueBox,
                ];
              case "meal":
                return [
                  this.openToPublicValueBox,
                  this.freeStudentMealsValueBox,
                  this.freeProduceValueBox,
                  this.freeGroceryValueBox,
                ];
              case "pharmacy":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.seniorShoppingValueBox,
                  this.deliveryValueBox,
                ];
              case "pet":
                return [
                  this.orderOnlineValueBox,
                  this.curbsidePickupValueBox,
                  this.medicalDiscountsValueBox,
                  this.deliveryValueBox,
                ];
              default:
                return [null, null, null, null, null];
            }
          },
        },
      },
      $e = xe,
      Ce = (t("9476"), Object(h["a"])($e, pe, me, !1, null, null, null)),
      we = Ce.exports,
      _e = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "b-container",
          { staticClass: "bv-example-row px-0", attrs: { fluid: "" } },
          [
            t(
              "div",
              { staticClass: "map" },
              [
                e.showMap
                  ? t(
                      "l-map",
                      {
                        ref: "covidMap",
                        staticStyle: { height: "100%", width: "100%" },
                        attrs: {
                          zoom: e.zoom,
                          center: e.center,
                          options: e.mapOptions,
                        },
                        on: {
                          "update:center": e.centerUpdated,
                          "update:zoom": function (a) {
                            return (e.zoom = a);
                          },
                          "update:bounds": e.boundsUpdated,
                        },
                      },
                      [
                        t("l-control", { attrs: { position: "topright" } }, [
                          t(
                            "div",
                            {
                              staticClass: "mapkey",
                              class: { "show-key": e.showKey },
                            },
                            [
                              t("div", { staticClass: "title-block" }, [
                                t("h6", { staticClass: "title" }, [
                                  e._v(e._s(e.$t("label.mapkey"))),
                                ]),
                                t("i", {
                                  staticClass: "fas fa-info-circle",
                                  on: {
                                    click: function (a) {
                                      e.showKey = !e.showKey;
                                    },
                                  },
                                }),
                              ]),
                              e._l(e.mapKey, function (a) {
                                return t(
                                  "div",
                                  {
                                    key: a.title,
                                    staticClass: "keys",
                                    class: { "show-key": e.showKey },
                                  },
                                  [
                                    t("icon-list-item", {
                                      attrs: {
                                        "leaflet-icon": a.icon,
                                        title: a.title,
                                        link: "",
                                      },
                                    }),
                                  ],
                                  1
                                );
                              }),
                            ],
                            2
                          ),
                        ]),
                        t("l-tile-layer", {
                          attrs: { url: e.mapUrl, attribution: e.attribution },
                        }),
                        e.userLocationData
                          ? t("l-circle", {
                              attrs: {
                                name: "Accuracy",
                                "lat-lng": e.userLocationData,
                                radius: e.accuracyRadius(),
                                weight: 1,
                                "class-name": "locAccuracy",
                              },
                            })
                          : e._e(),
                        e.userLocationData
                          ? t("l-circle-marker", {
                              attrs: {
                                name: "Your Location",
                                "lat-lng": e.userLocationData,
                                radius: e.circleRadius(),
                                weight: 1,
                                "class-name": "locMarker",
                              },
                            })
                          : e._e(),
                        t(
                          "v-marker-cluster",
                          {
                            ref: "marks",
                            attrs: { options: e.clusterOptions },
                          },
                          e._l(e.filteredMarkers, function (a, s) {
                            return t("l-marker", {
                              key: s,
                              attrs: {
                                "lat-lng": e.latLng(
                                  a.marker.gsx$lat.$t,
                                  a.marker.gsx$lon.$t
                                ),
                                icon: e.selectedIcon(
                                  null !== e.location.currentBusiness &&
                                    a.marker.id.$t ===
                                      e.location.currentBusiness.marker.id.$t,
                                  a
                                ),
                              },
                              on: {
                                click: function (t) {
                                  return e.$emit("location-selected", {
                                    locValue: s,
                                    locId: a.marker.id.$t,
                                    isSetByMap: !0,
                                  });
                                },
                              },
                            });
                          }),
                          1
                        ),
                        t(
                          "l-control",
                          {
                            staticClass: "user-location-button",
                            attrs: { position: "bottomright" },
                          },
                          [
                            t(
                              "a",
                              {
                                ref: "useLocation",
                                staticClass: "user-location-link",
                                attrs: { href: "#" },
                                on: { click: e.getUserLocation },
                              },
                              [t("i", { staticClass: "fas fa-location-arrow" })]
                            ),
                          ]
                        ),
                        t(
                          "b-alert",
                          {
                            staticClass: "location-alert",
                            attrs: {
                              variant: "warning",
                              show: e.showError,
                              dismissible: "",
                              fade: "",
                            },
                            on: { dismissed: e.resetError },
                          },
                          [e._v(" " + e._s(e.errorMessage) + " ")]
                        ),
                      ],
                      1
                    )
                  : e._e(),
              ],
              1
            ),
          ]
        );
      },
      Me = [],
      Oe = t("5fda"),
      Se = t("2699"),
      Le = t("a40a"),
      De = t("4e2b"),
      Ve = t("2253"),
      Be = t("0dbd"),
      Ie = t("ea97"),
      Pe = t("e11e"),
      Ne = t("ca9f"),
      je = t.n(Ne);
    delete Pe["Icon"].Default.prototype._getIconUrl,
      Pe["Icon"].Default.mergeOptions({
        iconRetinaUrl: t("584d"),
        iconUrl: t("6397"),
        shadowUrl: t("e2b9"),
      });
    var Ae = {
        name: "ResourceMap",
        components: {
          BAlert: Oe["a"],
          LMap: Se["a"],
          LTileLayer: Le["a"],
          LMarker: De["a"],
          LControl: Ve["a"],
          LCircle: Be["a"],
          LCircleMarker: Ie["a"],
          "v-marker-cluster": je.a,
          IconListItem: z,
        },
        props: {
          filteredMarkers: Array,
          location: {
            locValue: Number,
            currentBusiness: Object,
            isSetByMap: Boolean,
          },
          mapUrl: String,
          attribution: String,
          centroid: { lat: Number, lng: Number },
        },
        data: function () {
          return {
            center: Object(Pe["latLng"])(this.centroid.lat, this.centroid.lng),
            zoom: this.centroid.zoom,
            showParagraph: !0,
            showError: !1,
            errorMessage: "",
            userLocationData: !1,
            mapOptions: { zoomSnap: 0.5, setView: !0 },
            showMap: !0,
            locationData: location,
            accuracy: 0,
            circle: { border: "white", fill: "#f00" },
            clusterOptions: {
              spiderfyOnMaxZoom: !0,
              maxClusterRadius: 40,
              disableClusteringAtZoom: 16,
            },
            showKey: !1,
          };
        },
        mounted: function () {
          var e = this;
          this.editZoomControl(),
            this.$nextTick(function () {
              e.$emit("bounds", e.$refs.covidMap.mapObject.getBounds());
            });
        },
        computed: {
          mapKey: function () {
            return [
              {
                title: this.$t("label.open"),
                icon: Pe["ExtraMarkers"].icon({
                  className: "markeropen",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
              {
                title: this.$t("label.closedonday"),
                icon: Pe["ExtraMarkers"].icon({
                  className: "markerclosed",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
              {
                title: this.$t("label.selected"),
                icon: Pe["ExtraMarkers"].icon({
                  className: "markerselected",
                  icon: "na",
                  prefix: "fa",
                  svg: !0,
                }),
              },
            ];
          },
        },
        methods: {
          centerUpdated: function (e) {
            (this.center = e), this.$emit("center", e);
          },
          boundsUpdated: function (e) {
            this.$emit("bounds", e);
          },
          resetError: function () {
            (this.showError = !1), (this.errorMessage = "");
          },
          userIcon: function () {
            var e = Pe["ExtraMarkers"].icon({
              markerColor: "usermarker",
              icon: "fas fa-home",
              prefix: "fa",
              svg: !0,
            });
            return e;
          },
          getUserLocation: function () {
            var e = this,
              a = this.$refs.covidMap.mapObject;
            a.locate({
              setView: !0,
              enableHighAccuracy: !0,
              watch: !0,
              maximumAge: 6e4,
            }),
              a.on("locationfound", function (a) {
                a.latitude &&
                  a.longitude &&
                  ((e.userLocationData = Object(Pe["latLng"])(
                    a.latitude,
                    a.longitude
                  )),
                  e.centerUpdated(e.userLocationData),
                  (e.accuracy = a.accuracy),
                  e.$refs.useLocation.classList.add("active"));
              }),
              a.on("locationerror", function (a) {
                a.message &&
                  a.code != a.TIMEOUT &&
                  ((e.showError = !0),
                  (e.errorMessage = a.message),
                  (e.errorMessage +=
                    " Please check your browser settings and ensure you have given our site permission to view your location."),
                  e.$refs.useLocation.classList.add("disabled"));
              });
          },
          editZoomControl: function () {
            var e = this.$el.querySelector(".leaflet-top.leaflet-left");
            e.className = "leaflet-bottom leaflet-right";
          },
          circleRadius: function () {
            var e = 8;
            return e <= 5 && (e = 5), e;
          },
          accuracyRadius: function () {
            var e = this.accuracy;
            return e;
          },
          latLng: Pe["latLng"],
          selectedIcon: function (e, a) {
            var t = a.oc,
              s = t ? "markeropen" : "markerclosed",
              r = H(a.marker);
            e && (s = "markerselected");
            var n = Pe["ExtraMarkers"].icon({
              className: s,
              icon: r,
              prefix: "fa",
              svg: !0,
            });
            return n;
          },
        },
        watch: {
          location: function (e) {
            e.isSetByMap ||
              (null !== e.currentBusiness &&
                this.$refs.covidMap.mapObject.getZoom() < 17 &&
                this.$refs.covidMap.mapObject.setView(
                  Object(Pe["latLng"])(
                    e.currentBusiness.marker.gsx$lat.$t,
                    e.currentBusiness.marker.gsx$lon.$t
                  ),
                  17,
                  { duration: 1 }
                ));
          },
        },
      },
      Ee = Ae,
      Fe = (t("e80a"), Object(h["a"])(Ee, _e, Me, !1, null, null, null)),
      ze = Fe.exports,
      Te = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "b-modal",
          {
            attrs: {
              id: "about-us",
              size: "xl",
              "dialog-class": "m-0 m-md-auto",
              centered: "",
              scrollable: "",
              "hide-header-close": "",
            },
            scopedSlots: e._u([
              {
                key: "modal-title",
                fn: function () {
                  return [e._v(" " + e._s(e.$t("about.title")) + " ")];
                },
                proxy: !0,
              },
              {
                key: "modal-footer",
                fn: function () {
                  return [
                    t(
                      "b-button",
                      {
                        attrs: { right: "" },
                        on: {
                          click: function (a) {
                            return e.$bvModal.hide("about-us");
                          },
                        },
                      },
                      [e._v(e._s(e.$t("label.close")))]
                    ),
                  ];
                },
                proxy: !0,
              },
            ]),
          },
          [
            t(
              "b-card",
              { staticClass: "h-100", attrs: { "no-body": "" } },
              [
                t(
                  "b-tabs",
                  { attrs: { card: "" } },
                  [
                    t(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.getinvolved") },
                      },
                      [
                        t("p", [e._v(e._s(e.$t("about.devhelp.info")))]),
                        t("b", [e._v(e._s(e.$t("about.devhelp.support")))]),
                        t(
                          "i18n",
                          {
                            attrs: { path: "about.devhelp.addinfo", tag: "p" },
                          },
                          [
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "https://forms.gle/fWiCg2z5CRx9ukGu7",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.addbusiness")))]
                            ),
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "https://forms.gle/G2wrUd4TE3yqrW1FA",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.updatebusiness")))]
                            ),
                          ]
                        ),
                        t("b", [
                          e._v(e._s(e.$t("about.devhelp.becomeambassador"))),
                        ]),
                        t(
                          "i18n",
                          {
                            attrs: {
                              path: "about.devhelp.ambassadorinfo",
                              tag: "p",
                            },
                          },
                          [
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "emailto:contact@nccovidsupport.org",
                                },
                              },
                              [e._v("contact@nccovidsupport.org")]
                            ),
                          ]
                        ),
                        t("b", [e._v(e._s(e.$t("about.devhelp.dupsite")))]),
                        t(
                          "i18n",
                          {
                            attrs: { path: "about.devhelp.devnote", tag: "p" },
                          },
                          [
                            t(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://github.com/code-for-chapel-hill/COVID-Support-For-CH",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.source")))]
                            ),
                            t(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://github.com/codeforamerica/codeofconduct",
                                },
                              },
                              [e._v(e._s(e.$t("about.devhelp.conduct")))]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                    t(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.partners") },
                      },
                      [
                        t("p", [e._v(e._s(e.$t("about.info")))]),
                        t("ul", [
                          t("li", [
                            t(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.orangecountync.gov/1710/Visitors-Bureau",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.bureau")))]
                            ),
                          ]),
                          t("li", [
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "http://www.downtownchapelhill.com/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.partnership")))]
                            ),
                          ]),
                          t("li", [
                            t(
                              "a",
                              { attrs: { href: "https://locallistnc.com/" } },
                              [e._v(e._s(e.$t("about.orgs.localistnc")))]
                            ),
                          ]),
                          t("li", [
                            t(
                              "a",
                              {
                                attrs: { href: "https://visitpittsboro.com/" },
                              },
                              [e._v(e._s(e.$t("about.orgs.pittsboro-siler")))]
                            ),
                          ]),
                        ]),
                        t("b", [e._v(e._s(e.$t("about.datahead")))]),
                        t("p", [e._v(e._s(e.$t("about.dataprivacy")))]),
                      ]
                    ),
                    t(
                      "b-tab",
                      {
                        staticClass: "mt-3 mx-auto",
                        attrs: { title: e.$t("about.contact") },
                      },
                      [
                        t(
                          "i18n",
                          { attrs: { path: "about.contactus.info", tag: "p" } },
                          [
                            t(
                              "a",
                              {
                                attrs: {
                                  href:
                                    "https://www.meetup.com/Triangle-Code-for-America/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.chb")))]
                            ),
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "https://www.codeforamerica.org/",
                                },
                              },
                              [e._v(e._s(e.$t("about.orgs.cfa")))]
                            ),
                            t(
                              "a",
                              {
                                attrs: {
                                  href: "mailto:contact@nccovidsupport.org",
                                },
                              },
                              [e._v("contact@nccovidsupport.org")]
                            ),
                          ]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
          ],
          1
        );
      },
      He = [],
      Re = { name: "about-us-modal" },
      Ue = Re,
      Ge = (t("2975"), Object(h["a"])(Ue, Te, He, !1, null, null, null)),
      qe = Ge.exports,
      Ke = {
        settings: {
          initialMapCenter: { lat: 35.91371, lng: -79.057919 },
          initialMapZoom: 10,
        },
        socialMedia: [
          {
            name: "Facebook",
            icon: "facebook-square",
            url: "https://www.facebook.com/nccovidsupport",
          },
          {
            name: "Twitter",
            icon: "twitter",
            url: "https://twitter.com/nccovidsupport",
          },
          {
            name: "Instagram",
            icon: "instagram",
            url: "https://instagram.com/nccovidsupport",
          },
          {
            name: "GitHub",
            icon: "github",
            url: "https://github.com/readingdancer/NC-COVID-Support",
          },
        ],
        data: {
          spreadsheetUrl:
            "https://spreadsheets.google.com/feeds/list/1NNo23idWdFofp5LbBS_3S6EQfzgbe1sVgr2GRAjucA0/1/public/values?alt=json",
        },
        maps: {
          normal: {
            url:
              "https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}.png",
            attribution:
              '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          },
          dark: {
            url:
              "https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}.png",
            attribution:
              '&copy; <a href="https://carto.com/">Carto</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
          },
        },
      },
      Je = function () {
        var e = this,
          a = e.$createElement,
          t = e._self._c || a;
        return t(
          "i18n",
          { staticClass: "pagetitle", attrs: { path: "title", tag: "span" } },
          [t("span", { staticClass: "ncblue" }, [e._v("NC")])]
        );
      },
      We = [],
      Ze = { name: "theme-header" },
      Qe = Ze,
      Ye = Object(h["a"])(Qe, Je, We, !1, null, null, null),
      Xe = Ye.exports;
    function ea(e, a) {
      for (var t in a) e.push(a[t]);
      return e;
    }
    function aa(e, a) {
      var t = e.includes(a);
      if (t)
        return e.filter(function (e) {
          return e !== a;
        });
      var s = e;
      return s.push(a), s;
    }
    var ta = {
        name: "app",
        props: { msg: String },
        watch: { currentPage: "fetchData" },
        created: function () {
          this.fetchData();
        },
        components: {
          AboutUsModal: qe,
          AppHeader: b,
          Highlights: we,
          ResourceMap: ze,
          SearchFilter: de,
          ThemeHeader: Xe,
        },
        data: function () {
          var e = window.matchMedia("(prefers-color-scheme: dark)");
          return {
            entries: null,
            need: "none",
            day: k,
            isFilterOpen: !0,
            language: { name: "English", iso: "en" },
            locationData: {
              locValue: null,
              locId: null,
              currentBusiness: null,
              isSetByMap: !1,
            },
            showList: !1,
            highlightFilters: [],
            bounds: null,
            centroid: {
              lat: Ke.settings.initialMapCenter.lat,
              lng: Ke.settings.initialMapCenter.lng,
              zoom: Ke.settings.initialMapZoom,
            },
            darkModeMediaQuery: e,
            darkMode: e.matches,
            mapUrl: "",
            attribution: null,
            socialMediaico: Ke.socialMedia,
          };
        },
        mounted: function () {
          var e = this;
          this.setDarkMode(this.darkMode),
            this.darkModeMediaQuery.addListener(function (a) {
              (e.darkMode = a.matches), e.setDarkMode(e.darkMode);
            });
        },
        methods: {
          setDarkMode: function (e) {
            (this.mapUrl = e ? Ke.maps.dark.url : Ke.maps.normal.url),
              (this.attribution = e
                ? Ke.maps.dark.attribution
                : Ke.maps.normal.attribution);
          },
          centerUpdated: function (e) {
            this.centroid = { lat: e.lat, lng: e.lng };
          },
          boundsUpdated: function (e) {
            this.bounds = e;
          },
          getDay: function (e) {
            return 0 == e ? 6 : e - 1;
          },
          boxSelected: function (e) {
            this.highlightFilters = aa(this.highlightFilters, e.need);
          },
          isAnyDaySelected: function (e) {
            return e >= k;
          },
          needSelected: function (e) {
            (this.need = e),
              (this.highlightFilters = []),
              window.gtag("event", "What do you need?", {
                event_category: "Search - (" + this.language.name + ")",
                event_label: e,
              });
          },
          daySelected: function (e) {
            (this.day = e),
              (this.highlightFilters = []),
              window.gtag("event", "When do you need it?", {
                event_category: "Search - (" + this.language.name + ")",
                event_label: x[this.getDay(e)].day,
              });
          },
          changeLanguage: function (e) {
            (this.language = e), this.$root.updateLang(e.iso);
          },
          fetchData: function () {
            var e = this;
            return Object(u["a"])(
              regeneratorRuntime.mark(function a() {
                var t, s;
                return regeneratorRuntime.wrap(function (a) {
                  while (1)
                    switch ((a.prev = a.next)) {
                      case 0:
                        return (a.next = 2), fetch(Ke.data.spreadsheetUrl);
                      case 2:
                        return (t = a.sent), (a.next = 5), t.json();
                      case 5:
                        (s = a.sent), (e.entries = s.feed.entry);
                      case 7:
                      case "end":
                        return a.stop();
                    }
                }, a);
              })
            )();
          },
          passLocation: function (e) {
            (e.currentBusiness = this.filteredMarkers[e.locValue]),
              (this.locationData = e),
              (this.showList = !1),
              (this.isFilterOpen = !0);
            var a = this.filteredMarkers[e.locValue].marker.gsx$provideraddloc
              .$t
              ? ", " +
                this.filteredMarkers[e.locValue].marker.gsx$provideraddloc.$t
              : "";
            window.gtag(
              "event",
              e.isSetByMap ? "Marker clicked" : "List item clicked",
              {
                event_category: "View details - (" + this.language.name + ")",
                event_label:
                  this.filteredMarkers[e.locValue].marker.gsx$providername.$t +
                  a,
              }
            );
          },
        },
        computed: {
          filteredMarkers: function () {
            var e,
              a = this;
            if (null == this.entries) return null;
            (e =
              "family" == this.need
                ? this.entries.filter(function (e) {
                    return 1 == e.gsx$familymeal.$t && "1" == e.gsx$status.$t;
                  })
                : this.entries.filter(function (e) {
                    return (
                      e.gsx$resource.$t === a.need && "1" == e.gsx$status.$t
                    );
                  })),
              this.highlightFilters.forEach(function (a) {
                M.includes(a) &&
                  (e = e.filter(function (e) {
                    return "1" == e["gsx$" + a].$t;
                  }));
              });
            var t = new Date().getDay(),
              s = t;
            this.isAnyDaySelected(this.day) || (s = this.day);
            var r = w[this.getDay(s)],
              n = e.filter(function (e) {
                return "0" !== e[r].$t;
              }),
              o = e.filter(function (e) {
                return "0" == e[r].$t;
              }),
              i = ea(
                n.map(function (e) {
                  return {
                    marker: e,
                    oc: !0,
                    distance: U(
                      [a.centroid.lat, a.centroid.lng],
                      [e.gsx$lat.$t, e.gsx$lon.$t],
                      !0
                    ),
                  };
                }),
                o.map(function (e) {
                  return {
                    marker: e,
                    oc: !1,
                    distance: U(
                      [a.centroid.lat, a.centroid.lng],
                      [e.gsx$lat.$t, e.gsx$lon.$t],
                      !0
                    ),
                  };
                })
              ).sort(G);
            return i;
          },
          highlightFilteredMarkers: function () {
            var e = this,
              a = [];
            return (
              this.filteredMarkers.forEach(function (t) {
                e.bounds.contains(
                  Object(Pe["latLng"])(t.marker.gsx$lat.$t, t.marker.gsx$lon.$t)
                ) && a.push(t);
              }),
              this.isAnyDaySelected(this.day)
                ? a.map(function (e) {
                    var a = Object.assign({}, e);
                    return (a.oc = !0), a;
                  })
                : a
            );
          },
        },
      },
      sa = ta,
      ra = Object(h["a"])(sa, l, c, !1, null, null, null),
      na = ra.exports;
    t("26f3"), t("f238"), t("6cc5"), t("8243"), t("3ac1"), t("70ef"), t("5b8f");
    s["default"].use(r["a"]),
      (s["default"].config.productionTip = !0),
      new s["default"]({
        i18n: i,
        render: function (e) {
          return e(na);
        },
        methods: {
          updateLang: function (e) {
            i.locale = e;
          },
        },
      }).$mount("#app");
  },
  "5b8f": function (e, a, t) {},
  "5feb": function (e, a, t) {},
  6278: function (e, a, t) {},
  6562: function (e, a, t) {
    "use strict";
    var s = t("381b"),
      r = t.n(s);
    r.a;
  },
  "69ce": function (e, a, t) {
    "use strict";
    var s = t("ee97"),
      r = t.n(s);
    r.a;
  },
  "70ef": function (e, a, t) {},
  7469: function (e, a, t) {},
  "783a": function (e, a, t) {},
  "784d": function (e, a, t) {},
  "7c81": function (e, a, t) {
    "use strict";
    var s = t("2011"),
      r = t.n(s);
    r.a;
  },
  "882a": function (e, a, t) {
    "use strict";
    var s = t("7469"),
      r = t.n(s);
    r.a;
  },
  "8fde": function (e, a, t) {},
  9476: function (e, a, t) {
    "use strict";
    var s = t("5feb"),
      r = t.n(s);
    r.a;
  },
  a306: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Cerrar","contact":"Contáctenos","contactus":{"email":"Email","info":"Esta página funciona con {0} de {1}. Para preguntas, contáctenos por correo electrónico al {2}."},"datahead":"NOTA SOBRE COMPARTIR DATOS","dataprivacy":"La información sobre NC COVID Support ha sido recopilada de fuentes web públicas por voluntarios o ingresada por propietarios de negocios / proveedores de recursos. Los datos se proporcionan para ayudar al público, las empresas locales, los socios gubernamentales y las organizaciones sin fines de lucro durante la pandemia de COVID-19. Los datos no deben usarse para empresas comerciales u otros fines sin el permiso expreso del Soporte de NC COVID.","devhelp":{"addbusiness":"agregar un negocio","addinfo":"Utilice nuestros formularios en línea para {0} o {1}.","ambassadorinfo":"Ayúdenos a ampliar la cobertura en Carolina del Norte. Los embajadores trabajarán con el gobierno local y las asociaciones empresariales para brindar el apoyo de NC COVID a su comunidad. Envíenos un correo electrónico a {0} para obtener herramientas y recursos para comenzar.","becomeambassador":"Conviértase en embajador de la comunidad","conduct":"Código de Conducta","devnote":"Desarrolladores: encuentre nuestros {0} y {1} en GitHub.","dupsite":"Alternativamente, puede duplicar un sitio para su estado.","info":"Este es un proyecto de código abierto, creado para compartir y expandirse a otras comunidades.","source":"codigo fuente","support":"Apoye a sus vecinos y negocios locales: ¡ayúdenos a crecer!","updatebusiness":"actualizar una entrada existente"},"getinvolved":"Involucrarse","info":"Nuestra base de datos de recursos se beneficia de la información recopilada por estas organizaciones:","linktext":"Sobre nosotros","orgs":{"bureau":"Oficina de Visitantes de Chapel Hill / Condado de Orange","cfa":"Código para América","chb":"Brigada de Chapel Hill","localistnc":"#LocalListNC","partnership":"Asociación del centro de Chapel Hill","pittsboro-siler":"Oficina de Convenciones y Visitantes de la Ciudad de Pittsboro-Siler"},"partners":"Fuentes de información","title":"Sobre este sitio"},"category":{"childcare":"Cuidado de los niños","family":"Comida familiar preparada","farm":"Granjas y Mercados de Agricultores","food_bev":"Especialidad en comidas y bebidas","grocery":"Comestibles","meal":"Comidas gratis","pet":"Suministros de mascotas","pharmacy":"Farmacia","restaurant":"Restaurantes","school":"Comidas escolares"},"dayofweek":{"any":"Alguna","friday":"Viernes","monday":"Lunes","saturday":"Sábado","sunday":"Domingo","thursday":"Jueves","tuesday":"Martes","wednesday":"Miércoles"},"label":{"address":"Dirección","allweek":"Toda la semana","backtolist":"Volver a la lista","close":"Cerrar","closed":"Cerrado","closed-on":"Cerrado el","closed-today":"Cerrado hoy","closedonday":"Cerrado (en el día seleccionado actual)","curbside":"Negocio con recogida en la acera|Negocios con recogida en la acera","delivery":"Entrega","details-last-updated":"Detalles actualizados por última vez","discountmedical":"Descuento para trabajadores médicos|Descuentos para trabajadores médicos","discounts":"","drivethru":"Auto-servicio","email":"Email","email_lowercase":"email","farmersmarket":"Mercado de agricultores | Mercados de agricultores","farmpick-up":"Recogida en la granja","freegroceries":"Tienda de comestibles gratis|Tiendas de comestibles gratis","freemeals":"Lugar de comidas gratis|Lugares de comidas gratis","freeproduce":"Lugar de productos agrícolas gratuitso|Lugares de productos agrícolas gratuitos","instructions":"Instrucciones","locationhelplinktext":"aprende más","mapkey":"Guia de mapa","mealpublic":"Comidas abiertas al público","mealstudent":"Comidas para estudiantes","mustpreorder":"Debe pre-ordenar","normalhours":"Horas normales","notes":"Notas","offers":"Ofertas","open":"Abierto","openinghours":"Horario de apertura","orderonline":"Ordene y pague en línea","phone":"Teléfono","selectacategory":"Seleccione una categoría...","selected":"Seleccionado","seniorhours":"Horas para gente mayor de edad","specialhours":"Horario comercial para gente mayor de edad","website":"Sitio web"},"languages":{"ar":"árabe","en":"inglés","es":"español","fr":"francés","ja":"japonés","ko":"coreano","ms":"birmano","zh":"Chino simplificado"},"locationhelp":"","sidebar":{"close-panel":"Cerrar panel de búsqueda","info-about-us":"Actualmente, este sitio admite el condado de Chatham y el condado de Orange, Carolina del Norte. Con","info-end-text":", podemos ampliar nuestra cobertura.","info-link-text":"su ayuda","open-panel":"Abrir panel de búsqueda","shopsafe":"Por favor, ¡COMPRE DE FORMA SEGURA!","sixfeet":"Manténgase a 6 pies de distancia cuando vaya de compras.","stayhome":"Si está enfermo/a, quédese en casa.","washhands":"Lávese las manos con frecuencia.","what-do-you-need":"¿Que necesita?","when-do-you-need-it":"Cuando lo necesita?"},"title":"Soporte de {0} COVID"}'
    );
  },
  af08: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"قريب","contact":"اتصل بنا","contactus":{"email":"البريد الإلكتروني","info":"هذه الصفحة مدعومة من {0} من {1}. للأسئلة ، يرجى الاتصال بنا عبر البريد الإلكتروني على {2}."},"datahead":"ملاحظة حول مشاركة البيانات","dataprivacy":"تم جمع المعلومات حول NC COVID Support من مصادر الويب العامة من قبل متطوعين أو تم إدخالها من قبل أصحاب الأعمال / مقدمي الموارد. يتم توفير البيانات لمساعدة الجمهور والشركات المحلية والشركاء الحكوميين والمنظمات غير الربحية خلال جائحة COVID-19. لا يجب استخدام البيانات للمشاريع التجارية أو لأغراض أخرى دون إذن صريح من NC COVID Support.","devhelp":{"addbusiness":"إضافة عمل","addinfo":"استخدم نماذجنا عبر الإنترنت لـ {0} أو {1}.","ambassadorinfo":"ساعدنا في توسيع التغطية عبر ولاية كارولينا الشمالية. سيعمل السفراء مع الحكومة المحلية وجمعيات الأعمال لجلب NC COVID Support إلى مجتمعهم. راسلنا عبر البريد الإلكتروني {0} للحصول على الأدوات والموارد للبدء.","becomeambassador":"كن سفير مجتمع","conduct":"مدونة قواعد السلوك","devnote":"مطورو البرامج - ابحث عن {0} و {1} على GitHub.","dupsite":"بدلاً من ذلك ، يمكنك تكرار موقع لولتك.","info":"هذا مشروع مفتوح المصدر ، تم بناؤه للمشاركة والتوسع في المجتمعات الأخرى.","source":"مصدر الرمز","support":"ادعم جيرانك والشركات المحلية - ساعدنا على النمو!","updatebusiness":"تحديث إدخال موجود"},"getinvolved":"شارك","info":"تستفيد قاعدة بياناتنا من الموارد من المعلومات التي تجمعها هذه المنظمات:","linktext":"معلومات عنا","orgs":{"bureau":"مكتب زوار تشابل هيل / مقاطعة أورانج","cfa":"كود لأمريكا","chb":"لواء تشابل هيل","localistnc":"#LocalListNC","partnership":"شراكة وسط تشابل هيل","pittsboro-siler":"بيتسبورو-سيلر سيتي للمؤتمرات ومكتب الزوار"},"partners":"مصادر المعلومات","title":"عن هذا الموقع"},"category":{"childcare":"رعاية الطفل","family":"وجبات عائلية معدة","farm":"أسواق المزارع والمزارعين","food_bev":"المأكولات والمشروبات المتخصصة","grocery":"البقالة","meal":"وجبات مجانية","pet":"مستلزمات الحيوانات الأليفة","pharmacy":"مقابل","restaurant":"مطاعم","school":"الوجبات المدرسية"},"dayofweek":{"any":"أي","friday":"يوم الجمعة","monday":"الإثنين","saturday":"يوم السبت","sunday":"الأحد","thursday":"الخميس","tuesday":"الثلاثاء","wednesday":"الأربعاء"},"label":{"address":"عنوان","allweek":"كل الاسبوع","backtolist":"الرجوع للقائمة","close":"قريب","closed":"مغلق","closed-on":"أغلقت يوم","closed-today":"مغلق اليوم","closedonday":"مغلق (في اليوم المحدد الحالي)","curbside":"البيك اب","delivery":"توصيل","details-last-updated":"تم تحديث التفاصيل","discountmedical":"خصم عامل طبي | تخفيضات عامل طبي","discounts":"خصم عامل طبي | تخفيضات عامل طبي","drivethru":"الطلب من المركبة","email":"البريد الإلكتروني","email_lowercase":"البريد الإلكتروني","farmersmarket":"سوق المزارعين |","farmpick-up":"الاستلام من المزرعة","freegroceries":"موقع بقالة مجاني | مواقع بقالة مجانية","freemeals":"موقع وجبة مجانية | مواقع وجبات مجانية","freeproduce":"موقع إنتاج مجاني | مواقع إنتاج مجاني","instructions":"تعليمات","locationhelplinktext":"أعرف أكثر","mapkey":"مفتاح الخريطة","mealpublic":"وجبات مفتوحة للجمهور","mealstudent":"وجبات الطلاب","mustpreorder":"يجب الطلب المسبق","normalhours":"ساعات العمل العادية","notes":"ملاحظات","offers":"عروض","open":"افتح","openinghours":"ساعات العمل","orderonline":"اطلب وادفع عبر الإنترنت","phone":"هاتف","selectacategory":"اختر تصنيف...","selected":"المحدد","seniorhours":"ساعات كبار","specialhours":"ساعات تسوق كبار","website":"موقع الكتروني"},"languages":{"ar":"عربى","en":"الإنجليزية","es":"الأسبانية","fr":"الفرنسية","ja":"اليابانية","ko":"الكورية","ms":"البورمية","zh":"الصينية المبسطة"},"locationhelp":"","sidebar":{"close-panel":"أغلق لوحة البحث","info-about-us":"حاليًا ، يدعم هذا الموقع مقاطعة Chatham ومقاطعة Orange ، NC. مع","info-end-text":"، يمكننا توسيع تغطيتنا.","info-link-text":"مساعدتك","open-panel":"افتح لوحة البحث","shopsafe":"من فضلك ، تسوق آمن!","sixfeet":"ابق على مسافة 6 أقدام عند التسوق.","stayhome":"إذا كنت مريضًا ، ابق في المنزل.","washhands":"اغسل يديك كثيرًا.","what-do-you-need":"ماذا تحتاج؟","when-do-you-need-it":"متى تحتاجها؟"},"title":"{0} دعم COVID"}'
    );
  },
  af35: function (e, a, t) {},
  c565: function (e, a, t) {
    "use strict";
    var s = t("6278"),
      r = t.n(s);
    r.a;
  },
  d07e: function (e, a, t) {
    "use strict";
    var s = t("4cda"),
      r = t.n(s);
    r.a;
  },
  dd11: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"닫기","contact":"문의하기","contactus":{"email":"이메일","info":"이 페이지는 {1}의 {0} 에 의해 제공됩니다. 궁금한 점은 {2}으로 이메일을 통해 문의하시기 바랍니다."},"datahead":"데이터 공유에 대한 참고 사항","dataprivacy":"NC COVID 지원에 대한 정보는 자원 봉사자가 공개 웹 소스에서 수집하거나 사업자 / 자원 제공자가 입력했습니다. 이 데이터는 COVID-19 전염병 동안 공공, 지역 기업, 정부 파트너 및 비영리 단체를 지원하기 위해 제공됩니다. NC COVID 지원의 명시적인 허가 없이는 상업 벤처 또는 기타 목적으로 데이터를 사용해서는 안됩니다.","devhelp":{"addbusiness":"사업을 추가하다","addinfo":"온라인 양식 {0} 또는 {1}에 사용하시면 됩니다.","ambassadorinfo":"노스 캐롤라이나 전역에 리소스 범위를 넓히도록 도와주세요. 대사관은 지역 정부 및 기업 협회와 협력하여 지역 사회에 NC COVID 지원을 제공 할 것입니다. 도구 및 리소스를 원하시면 {0} 으로 이메일을 보내주십시오.","becomeambassador":"지역 사회의 대사가 되십시오","conduct":"행동 강령","devnote":"개발자-GitHub에서 {0} 와 {1} 을 찾을 수 있습니다.","dupsite":"다른 주에 계신다면, 당신의 주를 위해 이 사이트를 복사 하셔도 됩니다.","info":"이 프로젝트는 다른 커뮤니티와 공유하고 확장하기 위해 제작 된 오픈 소스 프로젝트입니다.","source":"소스 코드","support":"이웃과 지역 비즈니스를 지원하십시오-우리가 성장하도록 도와주세요!","updatebusiness":"기존 항목을 업데이트"},"getinvolved":"참여하기","info":"우리의 리소스 데이터베이스는 다음 조직에서 수집한 정보를 활용 합니다.","linktext":"회사 소개","orgs":{"bureau":"채플 힐 / 오렌지 카운티 관광청","cfa":"미국을위한 코드","chb":"채플 힐 여단","localistnc":"#LocalListNC","partnership":"채플 힐 다운타운 파트너십","pittsboro-siler":"피츠 보로-실러 시티 컨벤션 뷰로"},"partners":"정보 출처","title":"이 사이트에 대하여"},"category":{"childcare":"육아","family":"가족 음식 세트","farm":"농장 & 시장","food_bev":"전문 음식 및 음료","grocery":"식료품 점","meal":"무료 식사","pet":"애완 용품","pharmacy":"약국","restaurant":"레스토랑","school":"학교 급식"},"dayofweek":{"any":"어떤","friday":"금요일","monday":"월요일","saturday":"토요일","sunday":"일요일","thursday":"목요일","tuesday":"화요일","wednesday":"수요일"},"label":{"address":"주소","allweek":"일주일","backtolist":"다시 목록으로","close":"닫기","closed":"닫은","closed-on":"휴무","closed-today":"오늘 휴무","closedonday":"휴관일 (현재 선택한 요일)","curbside":"보도 픽업 레스토랑","delivery":"배달","details-last-updated":"마지막 업데이트","discountmedical":"의료인 할인 장소","discounts":"","drivethru":"드라이브스루","email":"이메일","email_lowercase":"이메일","farmersmarket":"농민 시장 | 농민 시장","farmpick-up":"농장 픽업","freegroceries":"무료 식료품류 장소","freemeals":"무료 식사 장소","freeproduce":"무료 농산물 장소","instructions":"방법","locationhelplinktext":"더 알아보기","mapkey":"지도 키","mealpublic":"공개 식사","mealstudent":"학생 식사","mustpreorder":"선주문 필요","normalhours":"정상 시간","notes":"노트","offers":"서비스","open":"열다","openinghours":"개관 시간","orderonline":"온라인 주문","phone":"전화","selectacategory":"카테고리를 선택하십시오 ...","selected":"선택된","seniorhours":"노약자 쇼핑 시간","specialhours":"노약자 쇼핑","website":"웹 사이트"},"languages":{"ar":"아라비아어","en":"영어","es":"스페인어","fr":"프랑스어","ja":"일본어","ko":"한국어","ms":"버마어","zh":"중국어"},"locationhelp":"","sidebar":{"close-panel":"검색 창 닫기","info-about-us":"현재이 사이트는 채텀 카운티와 노스 캐롤라이나 주 오렌지 카운티를 지원합니다. 와","info-end-text":"웹사이트를 확장시킬 수 있습니다.","info-link-text":"당신의 도움으로","open-panel":"검색 창 열기","shopsafe":"안전한 쇼핑을 기원합니다!","sixfeet":"밖에선 사람들과 6피트 (2미터) 정도 떨어져 있으세요.","stayhome":"아프면 집에 계세요.","washhands":"손을 자주 씻으세요.","what-do-you-need":"무엇이 필요합니까?","when-do-you-need-it":"언제 필요합니까?"},"title":"{0} COVID 지원"}'
    );
  },
  e80a: function (e, a, t) {
    "use strict";
    var s = t("784d"),
      r = t.n(s);
    r.a;
  },
  edd4: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Close","contact":"Contact Us","contactus":{"email":"email","info":"This page is powered by the {0} of {1}. For questions, please contact us via email at {2}."},"datahead":"NOTE ON DATA SHARING","dataprivacy":"The information on NC COVID Support has been gathered from public web sources by volunteers or entered by business owners/resource providers. The data are provided to assist the public, local businesses, government partners, and non-profits during the COVID-19 pandemic. The data should not be used for commercial ventures or other purposes without the express permission of NC COVID Support.","devhelp":{"addbusiness":"add a business","addinfo":"Use our online forms to {0} or {1}.","ambassadorinfo":"Help us expand coverage across North Carolina. Ambassadors will work with local government and business associations to bring NC COVID Support to their community. Email us at {0} for tools and resources to get started.","becomeambassador":"Become a community ambassador","conduct":"Code of Conduct","devnote":"Developers - find our {0} and {1} on GitHub.","dupsite":"Use our code to build a site for your state or region:","info":"This is an open-source project, built to share and expand to other communities.","source":"source code","support":"Support your neighbors and local businesses - help us grow!","updatebusiness":"update an existing entry"},"getinvolved":"Get Involved","info":"Our database of resources benefits from information collected by these organizations:","linktext":"About us","orgs":{"bureau":"Chapel Hill/Orange County Visitors Bureau","cfa":"Code for America","chb":"Chapel Hill Brigade","localistnc":"#LocalListNC","partnership":"Chapel Hill Downtown Partnership","pittsboro-siler":"Pittsboro-Siler City Convention & Visitors Bureau"},"partners":"Info Sources","title":"About this site"},"category":{"childcare":"Child care","family":"Prepared family meals","farm":"Farms & farmers\' markets","food_bev":"Specialty food & beverage","grocery":"Groceries","meal":"Free meals","pet":"Pet supplies","pharmacy":"Pharmacy","restaurant":"Restaurants","school":"School meals"},"dayofweek":{"any":"Any","friday":"Friday","monday":"Monday","saturday":"Saturday","sunday":"Sunday","thursday":"Thursday","tuesday":"Tuesday","wednesday":"Wednesday"},"label":{"address":"Address","allweek":"All week","backtolist":"Back to list","close":"Close","closed":"Closed","closed-on":"Closed on","closed-today":"Closed Today","closedonday":"Closed (on the current selected day)","curbside":"Curbside pick-up","delivery":"Delivery","details-last-updated":"Details last updated","discountmedical":"Medical worker discount|Medical worker discounts","discounts":"","drivethru":"Drive thru","email":"Email","email_lowercase":"email","farmersmarket":"Farmers\' market|Farmers\' markets","farmpick-up":"On-farm pick-up","freegroceries":"Free grocery location|Free grocery locations","freemeals":"Free meal location|Free meal locations","freeproduce":"Free produce location|Free produce locations","instructions":"Instructions","locationhelplinktext":"Learn more","mapkey":"Map Key","mealpublic":"Meals open to public","mealstudent":"Meals for students","mustpreorder":"Must pre-order","normalhours":"Normal hours","notes":"Notes","offers":"Offers","open":"Open","openinghours":"Hours","orderonline":"Order & pay online","phone":"Phone","selectacategory":"Select a category...","selected":"Selected","seniorhours":"Senior hours","specialhours":"Senior shopping hours","website":"Website"},"languages":{"ar":"Arabic","en":"English","es":"Spanish","fr":"French","ja":"Japanese","ko":"Korean","ms":"Burmese","zh":"Simplified Chinese"},"locationhelp":"Please make sure your device location is enabled","sidebar":{"close-panel":"Close search panel","info-about-us":"Currently, this site supports Chatham County and Orange County, NC. With","info-end-text":", we can expand our coverage.","info-link-text":"your help","open-panel":"Open search panel","shopsafe":"Please, SHOP SAFE!","sixfeet":"Stay 6 ft. apart when shopping.","stayhome":"If you are sick, stay home.","washhands":"Wash your hands often.","what-do-you-need":"What do you need?","when-do-you-need-it":"When do you need it?"},"title":"{0} COVID Support"}'
    );
  },
  ee97: function (e, a, t) {},
  f238: function (e, a, t) {
    var s, r, n;
    t("b0c0");
    var o = t("7037");
    /*!
     * leaflet-extra-markers
     * Custom Markers for Leaflet JS based on Awesome Markers
     * Leaflet ExtraMarkers
     * https://github.com/coryasilva/Leaflet.ExtraMarkers/
     * @author coryasilva <https://github.com/coryasilva>
     * @version 1.2.1
     */ !(function (t, i) {
      "object" == o(a) && "undefined" != typeof e
        ? i(a)
        : ((r = [a]),
          (s = i),
          (n = "function" === typeof s ? s.apply(a, r) : s),
          void 0 === n || (e.exports = n));
    })(0, function (e) {
      "use strict";
      var a = (L.ExtraMarkers = {});
      (a.version = L.ExtraMarkers.version = "1.2.1"),
        (a.Icon = L.ExtraMarkers.Icon = L.Icon.extend({
          options: {
            iconSize: [35, 45],
            iconAnchor: [17, 42],
            popupAnchor: [1, -32],
            shadowAnchor: [10, 12],
            shadowSize: [36, 16],
            className: "",
            prefix: "",
            extraClasses: "",
            shape: "circle",
            icon: "",
            innerHTML: "",
            markerColor: "red",
            svgBorderColor: "#fff",
            svgOpacity: 1,
            iconColor: "#fff",
            iconRotate: 0,
            number: "",
            svg: !1,
            name: "",
          },
          initialize: function (e) {
            e = L.Util.setOptions(this, e);
          },
          createIcon: function () {
            var e = document.createElement("div"),
              a = this.options;
            return (
              a.icon && (e.innerHTML = this._createInner()),
              a.innerHTML && (e.innerHTML = a.innerHTML),
              a.bgPos &&
                (e.style.backgroundPosition =
                  -a.bgPos.x + "px " + -a.bgPos.y + "px"),
              a.svg
                ? this._setIconStyles(e, "svg")
                : this._setIconStyles(e, a.shape + "-" + a.markerColor),
              e
            );
          },
          _getColorHex: function (e) {
            return (
              {
                red: "#a23337",
                "orange-dark": "#d73e29",
                orange: "#ef9227",
                yellow: "#f5bb39",
                "blue-dark": "#276273",
                cyan: "#32a9dd",
                purple: "#440444",
                violet: "#90278d",
                pink: "#c057a0",
                green: "#006838",
                white: "#e8e8e8",
                black: "#211c1d",
              }[e] || e
            );
          },
          _createSvg: function (e, a) {
            return {
              circle:
                '<svg width="32" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M17.5 2.746c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.439-17.863.056-.08a15.422 15.422 0 002.343-6.112c.123-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307" fill="' +
                a +
                '" /><path d="M17.488 2.748c-8.284 0-15 6.853-15 15.307 0 .963.098 1.902.265 2.816a15.413 15.413 0 002.262 5.684l.134.193 12.295 17.785 12.44-17.863.055-.08a15.422 15.422 0 002.343-6.112c.124-.791.206-1.597.206-2.423 0-8.454-6.716-15.307-15-15.307m0 1.071c7.68 0 13.929 6.386 13.929 14.236 0 .685-.064 1.423-.193 2.258-.325 2.075-1.059 3.99-2.164 5.667l-.055.078-11.557 16.595L6.032 26.14l-.12-.174a14.256 14.256 0 01-2.105-5.29 14.698 14.698 0 01-.247-2.62c0-7.851 6.249-14.237 13.928-14.237" fill="#231f20" opacity=".15" /></svg>',
              square:
                '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M28.205 3.217H6.777c-2.367 0-4.286 1.87-4.286 4.179v19.847c0 2.308 1.919 4.179 4.286 4.179h5.357l5.337 13.58 5.377-13.58h5.357c2.366 0 4.285-1.87 4.285-4.179V7.396c0-2.308-1.919-4.179-4.285-4.179" fill="' +
                a +
                '" /><g opacity=".15" transform="matrix(1.0714 0 0 -1.0714 -233.22 146.783)"><path d="M244 134h-20c-2.209 0-4-1.746-4-3.9v-18.525c0-2.154 1.791-3.9 4-3.9h5L233.982 95 239 107.675h5c2.209 0 4 1.746 4 3.9V130.1c0 2.154-1.791 3.9-4 3.9m0-1c1.654 0 3-1.301 3-2.9v-18.525c0-1.599-1.346-2.9-3-2.9h-5.68l-.25-.632-4.084-10.318-4.055 10.316-.249.634H224c-1.654 0-3 1.301-3 2.9V130.1c0 1.599 1.346 2.9 3 2.9h20" fill="#231f20" /></g></svg>',
              star:
                '<svg width="34" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M32.92 16.93l-3.525-3.525V8.419a1.983 1.983 0 00-1.983-1.982h-4.985L18.9 2.91a1.984 1.984 0 00-2.803 0l-3.524 3.526H7.588a1.983 1.983 0 00-1.982 1.982v4.986L2.081 16.93a1.982 1.982 0 000 2.803l3.525 3.526v4.984c0 1.096.888 1.983 1.982 1.983h4.986L17.457 45l4.97-14.773h4.985a1.983 1.983 0 001.983-1.983V23.26l3.525-3.526a1.982 1.982 0 000-2.803" fill="' +
                a +
                '" /><g opacity=".15" transform="matrix(1.0667 0 0 -1.0667 -347.3 97.26)"><path d="M342 89c-.476 0-.951-.181-1.314-.544l-3.305-3.305h-4.673a1.858 1.858 0 01-1.859-1.858v-4.674l-3.305-3.305a1.857 1.857 0 010-2.627l3.305-3.305v-4.674a1.86 1.86 0 011.859-1.859h4.673L341.959 49l4.659 13.849h4.674a1.86 1.86 0 011.859 1.859v4.674l3.305 3.305a1.858 1.858 0 010 2.627l-3.305 3.305v4.674a1.859 1.859 0 01-1.859 1.858h-4.674l-3.304 3.305A1.851 1.851 0 01342 89m0-1a.853.853 0 00.607-.251l3.304-3.305.293-.293h5.088a.86.86 0 00.859-.858v-5.088l3.598-3.598A.852.852 0 00356 74a.85.85 0 00-.251-.606l-3.598-3.598v-5.088a.86.86 0 00-.859-.859h-5.393l-.229-.681-3.702-11.006-3.637 11.001-.227.686h-5.396a.86.86 0 00-.859.859v5.088l-3.598 3.598c-.162.162-.251.377-.251.606s.089.445.251.607l3.598 3.598v5.088a.86.86 0 00.859.858h5.087l3.598 3.598A.853.853 0 00342 88" fill="#231f20" /></g></svg>',
              penta:
                '<svg width="33" height="44" viewBox="0 0 35 45" xmlns="http://www.w3.org/2000/svg"><path d="M1.872 17.35L9.679 2.993h15.615L33.1 17.35 17.486 44.992z" fill="' +
                a +
                '" /><g opacity=".15" transform="matrix(1.0769 0 0 -1.0769 -272.731 48.23)"><path d="M276.75 42h-14.5L255 28.668 269.5 3 284 28.668zm-.595-1l6.701-12.323L269.5 5.033l-13.356 23.644L262.845 41z" fill="#231f20" /></g></svg>',
            }[e];
          },
          _createInner: function () {
            var e = "",
              a = "",
              t = "",
              s = "",
              r = this.options;
            return (
              r.iconColor && (e = "color: " + r.iconColor + ";"),
              0 !== r.iconRotate &&
                ((e += "-webkit-transform: rotate(" + r.iconRotate + "deg);"),
                (e += "-moz-transform: rotate(" + r.iconRotate + "deg);"),
                (e += "-o-transform: rotate(" + r.iconRotate + "deg);"),
                (e += "-ms-transform: rotate(" + r.iconRotate + "deg);"),
                (e += "transform: rotate(" + r.iconRotate + "deg);")),
              r.number && (a = 'number="' + r.number + '" '),
              r.extraClasses.length && (t += r.extraClasses + " "),
              r.prefix.length && (t += r.prefix + " "),
              r.icon.length && (t += r.icon + " "),
              r.svg &&
                (s += this._createSvg(
                  r.shape,
                  this._getColorHex(r.markerColor)
                )),
              (s += "<i " + a + 'style="' + e + '" class="' + t + '"></i>'),
              r.name.length &&
                (s +=
                  '<div class="' +
                  (void 0 !== r.nameClasses ? r.nameClasses : "") +
                  '">' +
                  r.name +
                  "</div>"),
              s
            );
          },
          _setIconStyles: function (e, a) {
            var t,
              s,
              r = this.options,
              n = L.point(r["shadow" === a ? "shadowSize" : "iconSize"]);
            (s =
              "shadow" === a
                ? ((t = L.point(r.shadowAnchor || r.iconAnchor)), "shadow")
                : ((t = L.point(r.iconAnchor)), "icon")),
              !t && n && (t = n.divideBy(2, !0)),
              (e.className =
                "leaflet-marker-" +
                s +
                " extra-marker extra-marker-" +
                a +
                " " +
                r.className),
              t &&
                ((e.style.marginLeft = -t.x + "px"),
                (e.style.marginTop = -t.y + "px")),
              n &&
                ((e.style.width = n.x + "px"), (e.style.height = n.y + "px"));
          },
          createShadow: function () {
            var e = document.createElement("div");
            return this._setIconStyles(e, "shadow"), e;
          },
        })),
        (a.icon = L.ExtraMarkers.icon = function (e) {
          return new L.ExtraMarkers.Icon(e);
        }),
        (e.ExtraMarkers = a),
        Object.defineProperty(e, "__esModule", { value: !0 });
    });
  },
  f693: function (e) {
    e.exports = JSON.parse(
      '{"about":{"close":"Fermer","contact":"Contactez nous","contactus":{"email":"email","info":"Cette page est alimentée par le {0} de {1}. Pour toute question, veuillez nous contacter par e-mail au {2}."},"datahead":"NOTE SUR LE PARTAGE DES DONNÉES","dataprivacy":"Les informations sur NC COVID Support ont été collectées à partir de sources Web publiques par des bénévoles ou saisies par des propriétaires d\'entreprises / fournisseurs de ressources. Les données sont fournies pour aider le public, les entreprises locales, les partenaires gouvernementaux et les organisations à but non lucratif pendant la pandémie de COVID-19. Les données ne doivent pas être utilisées à des fins commerciales ou à d\'autres fins sans l\'autorisation expresse du support NC COVID.","devhelp":{"addbusiness":"Ajouter une entreprise","addinfo":"Utilisez nos formulaires en ligne pour {0} ou {1}.","ambassadorinfo":"Aidez-nous à étendre la couverture à travers la Caroline du Nord. Les ambassadeurs travailleront avec le gouvernement local et les associations commerciales pour apporter le soutien NC COVID à leur communauté. Envoyez-nous un e-mail à {0} pour obtenir des outils et des ressources pour commencer.","becomeambassador":"Devenez ambassadeur communautaire","conduct":"Code de conduite","devnote":"Développeurs - trouvez nos {0} et {1} sur GitHub.","dupsite":"Alternativement, vous pouvez dupliquer un site pour votre état.","info":"Il s\'agit d\'un projet open source, conçu pour partager et s\'étendre à d\'autres communautés.","source":"Code source","support":"Soutenez vos voisins et les entreprises locales - aidez-nous à grandir!","updatebusiness":"mettre à jour une entrée existante"},"getinvolved":"Être impliqué","info":"Notre base de données de ressources bénéficie des informations collectées par ces organisations:","linktext":"À propos de nous","orgs":{"bureau":"Bureau des visiteurs de Chapel Hill / Orange County","cfa":"Code pour l\'Amérique","chb":"Brigade de Chapel Hill","localistnc":"#LocalListNC","partnership":"Partenariat du centre-ville de Chapel Hill","pittsboro-siler":"Bureau des congrès et des visiteurs de Pittsboro-Siler City"},"partners":"Sources d\'informations","title":"A propos de ce site"},"category":{"childcare":"Garde d\'enfants","family":"Plats préparés en famille","farm":"Fermes et marchés fermiers","food_bev":"Spécialités alimentaires et boissons","grocery":"Épicerie","meal":"Repas gratuits","pet":"Fournitures pour animaux","pharmacy":"Pharmacie","restaurant":"Restaurants","school":"Repas scolaires"},"dayofweek":{"any":"Tout","friday":"Vendredi","monday":"Lundi","saturday":"Samedi","sunday":"Dimanche","thursday":"Jeudi","tuesday":"Mardi","wednesday":"Mercredi"},"label":{"address":"Adresse","allweek":"Toute la semaine","backtolist":"Retour à la liste","close":"Fermer","closed":"Fermé","closed-on":"Ferme le","closed-today":"Fermé aujourd\'hui","closedonday":"Fermé (le jour sélectionné)","curbside":"Enterprise avec ramassage en bordure de rue|Enterprises avec ramassage en bordure de rue","delivery":"Livraison","details-last-updated":"Dernière mise à jour des détails","discountmedical":"Réduction pour les travailleurs médicaux|Réductions pour les travailleurs médicaux","discounts":"","drivethru":"Drive-thru","email":"Email","email_lowercase":"email","farmersmarket":"Marché fermier | Marchés fermiers","farmpick-up":"Ramassage à la ferme","freegroceries":"Emplacement d\'épicerie gratuits|Emplacements d\'épicerie gratuits","freemeals":"Lieu de repas gratuits|Lieux de repas gratuits","freeproduce":"Lieu de production gratuit|Lieux de production gratuit","instructions":"Instructions","locationhelplinktext":"apprendre encore plus","mapkey":"Carte clé","mealpublic":"Repas ouverts au public","mealstudent":"Repas pour les étudiants","mustpreorder":"Doit précommander","normalhours":"Heures normales","notes":"Remarques","offers":"Des offres","open":"Ouvrir","openinghours":"Heures d\'ouverture","orderonline":"Commandez et payez en ligne","phone":"Téléphone","selectacategory":"Choisissez une catégorie...","selected":"Choisi","seniorhours":"Heures seniors","specialhours":"Heures de magasinage pour les seniors","website":"Site Internet"},"languages":{"ar":"Arabe","en":"Anglais","es":"Espanol","fr":"français","ja":"japonais","ko":"coréen","ms":"birman","zh":"Chinois simplifié"},"locationhelp":"","sidebar":{"close-panel":"Fermer le panneau de recherche","info-about-us":"Actuellement, ce site prend en charge le comté de Chatham et le comté d\'Orange, NC. Avec","info-end-text":", nous pouvons étendre notre couverture.","info-link-text":"ton aide","open-panel":"Ouvrir le panneau de recherche","shopsafe":"S\'il vous plaît, achetez en toute sécurité!","sixfeet":"Restez à 6 pieds de distance lorsque vous magasinez.","stayhome":"Si vous êtes malade, restez à la maison.","washhands":"Lavez-vous souvent les mains.","what-do-you-need":"De quoi avez-vous besoin?","when-do-you-need-it":"Quand en avez-vous besoin?"},"title":"Prise en charge de {0} COVID"}'
    );
  },
});
//# sourceMappingURL=app.5f2364d9.js.map
