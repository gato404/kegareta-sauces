const mangayomiSources = [
  {
    name: "hanime.tv",
    lang: "en",
    baseUrl: "https://hanime.tv",
    apiUrl: "",
    iconUrl: "https://example.com/test.png",
    typeSource: "single",
    version: "1.0.0",
    dateFormat: "",
    dateFormatLocale: "",
    itemType: 1, // Use 0 for manga, 1 for anime and 2 for novel
    pkgPath: "anime/src/en/hanime.js",
  },
];

class DefaultExtension extends MProvider {
  getHeaders(url) {
    return {
      authority: "search.htv-services.com",
      accept: "application/json, text/plain, */*",
      "content-type": "application/json;charset=UTF-8",
    };
  }
  async getPopular(page) {
    const baseUrl = this.source.baseUrl;
    const res = await new Client().post(
      `https://search.htv-services.com/`,
      this.getHeaders(null),
      this.searchRequestBody("", page, {})
    );
    const elements = new Document(res.body).select("article");
    const list = [];
    for (const element of elements) {
      const linkElement = element.selectFirst("a");
      const name = element.selectFirst("a").attr("title");
      const imageUrl = linkElement.selectFirst("img").attr("data-src");
      const link = element.selectFirst("a").attr("href");
      if (name && imageUrl && link) {
        list.push({ name, imageUrl, link });
      }
    }
    return {
      list: list,
      hasNextPage: true,
    };
  }
  async getLatestUpdates(page) {
    throw new Error("getLatestUpdates not implemented");
  }
  async search(query, page, filters) {
    var isFiltersAvailable = !filters || filters.length != 0;
    var sort = isFiltersAvailable ? filters[0].values[filters[0].state].value : "likes";
    var order = isFiltersAvailable ? filters[1].values[filters[1].state].value : "desc";
    var tagInclusion = isFiltersAvailable ? filters[2].values[filters[2].state].value : "AND";
    var brands = isFiltersAvailable ? getFilter(filters[3].state) : [];
    var genre = isFiltersAvailable ? getFilter(filters[4].state) : [];
    throw new Error("search not implemented");
  }
  searchRequestBody(query, page, filters) {
    return `{"search_text": "${query}",
            "tags": ${includedTags},
            "tags_mode":"${tagsMode}",
            "brands": ${brands},
            "blacklist": ${blackListedTags},
            "order_by": "${orderBy}",
            "ordering": "${ordering}",
            "page": ${page - 1}}`;
  }
  async getDetail(url) {
    throw new Error("getDetail not implemented");
  }
  // For novel html content
  async getHtmlContent(url) {
    throw new Error("getHtmlContent not implemented");
  }
  // Clean html up for reader
  async cleanHtmlContent(html) {
    throw new Error("cleanHtmlContent not implemented");
  }
  // For anime episode video list
  async getVideoList(url) {
    throw new Error("getVideoList not implemented");
  }
  // For manga chapter pages
  async getPageList(url) {
    throw new Error("getPageList not implemented");
  }
  getFilterList() {
    var sortBy = [
      ["Uploads", "created_at_unix"],
      ["Views", "views"],
      ["Likes", "likes"],
      ["Release", "released_at_unix"],
      ["Alphabetical", "title_sortable"],
    ].map((x) => ({ type_name: "SelectOption", name: x[0], value: x[1] }));
    var orderBy = [
      ["Descending", "desc"],
      ["Ascending", "asc"],
    ].map((x) => ({ type_name: "SelectOption", name: x[0], value: x[1] }));
    var tagAndOr = ["AND", "OR"].map((x) => ({
      type_name: "SelectOption",
      name: x,
      value: x,
    }));
    var brands = [
      ["37c-Binetsu", "37c-binetsu"],
      ["Adult Source Media", "adult-source-media"],
      ["Ajia-Do", "ajia-do"],
      ["Almond Collective", "almond-collective"],
      ["Alpha Polis", "alpha-polis"],
      ["Ameliatie", "ameliatie"],
      ["Amour", "amour"],
      ["Animac", "animac"],
      ["Antechinus", "antechinus"],
      ["APPP", "appp"],
      ["Arms", "arms"],
      ["Bishop", "bishop"],
      ["Blue Eyes", "blue-eyes"],
      ["BOMB! CUTE! BOMB!", "bomb-cute-bomb"],
      ["Bootleg", "bootleg"],
      ["BreakBottle", "breakbottle"],
      ["BugBug", "bugbug"],
      ["Bunnywalker", "bunnywalker"],
      ["Celeb", "celeb"],
      ["Central Park Media", "central-park-media"],
      ["ChiChinoya", "chichinoya"],
      ["Chocolat", "chocolat"],
      ["ChuChu", "chuchu"],
      ["Circle Tribute", "circle-tribute"],
      ["CoCoans", "cocoans"],
      ["Collaboration Works", "collaboration-works"],
      ["Comet", "comet"],
      ["Comic Media", "comic-media"],
      ["Cosmos", "cosmos"],
      ["Cranberry", "cranberry"],
      ["Crimson", "crimson"],
      ["D3", "d3"],
      ["Daiei", "daiei"],
      ["demodemon", "demodemon"],
      ["Digital Works", "digital-works"],
      ["Discovery", "discovery"],
      ["Dollhouse", "dollhouse"],
      ["EBIMARU-DO", "ebimaru-do"],
      ["Echo", "echo"],
      ["ECOLONUN", "ecolonun"],
      ["Edge", "edge"],
      ["Erozuki", "erozuki"],
      ["evee", "evee"],
      ["FINAL FUCK 7", "final-fuck-7"],
      ["Five Ways", "five-ways"],
      ["Friends Media Station", "friends-media-station"],
      ["Front Line", "front-line"],
      ["fruit", "fruit"],
      ["Godoy", "godoy"],
      ["GOLD BEAR", "gold-bear"],
      ["gomasioken", "gomasioken"],
      ["Green Bunny", "green-bunny"],
      ["Groover", "groover"],
      ["Hoods Entertainment", "hoods-entertainment"],
      ["Hot Bear", "hot-bear"],
      ["Hykobo", "hykobo"],
      ["IRONBELL", "ironbell"],
      ["Ivory Tower", "ivory-tower"],
      ["J.C.", "j-c"],
      ["Jellyfish", "jellyfish"],
      ["Jewel", "jewel"],
      ["Jumondo", "jumondo"],
      ["kate_sai", "kate_sai"],
      ["KENZsoft", "kenzsoft"],
      ["King Bee", "king-bee"],
      ["Kitty Media", "kitty-media"],
      ["Knack", "knack"],
      ["Kuril", "kuril"],
      ["L.", "l"],
      ["Lemon Heart", "lemon-heart"],
      ["Lilix", "lilix"],
      ["Lune Pictures", "lune-pictures"],
      ["Magic Bus", "magic-bus"],
      ["Magin Label", "magin-label"],
      ["Majin Petit", "majin-petit"],
      ["Marigold", "marigold"],
      ["Mary Jane", "mary-jane"],
      ["MediaBank", "mediabank"],
      ["Media Blasters", "media-blasters"],
      ["Metro Notes", "metro-notes"],
      ["Milky", "milky"],
      ["MiMiA Cute", "mimia-cute"],
      ["Moon Rock", "moon-rock"],
      ["Moonstone Cherry", "moonstone-cherry"],
      ["Mousou Senka", "mousou-senka"],
      ["MS Pictures", "ms-pictures"],
      ["Muse", "muse"],
      ["N43", "n43"],
      ["Nihikime no Dozeu", "nihikime-no-dozeu"],
      ["Nikkatsu Video", "nikkatsu-video"],
      ["nur", "nur"],
      ["NuTech Digital", "nutech-digital"],
      ["Obtain Future", "obtain-future"],
      ["Otodeli", "otodeli"],
      ["@ OZ", "oz"],
      ["Pashmina", "pashmina"],
      ["Passione", "passione"],
      ["Peach Pie", "peach-pie"],
      ["Pinkbell", "pinkbell"],
      ["Pink Pineapple", "pink-pineapple"],
      ["Pix", "pix"],
      ["Pixy Soft", "pixy-soft"],
      ["Pocomo Premium", "pocomo-premium"],
      ["PoRO", "poro"],
      ["Project No.9", "project-no-9"],
      ["Pumpkin Pie", "pumpkin-pie"],
      ["Queen Bee", "queen-bee"],
      ["Rabbit Gate", "rabbit-gate"],
      ["sakamotoJ", "sakamotoj"],
      ["Sakura Purin", "sakura-purin"],
      ["SANDWICHWORKS", "sandwichworks"],
      ["Schoolzone", "schoolzone"],
      ["seismic", "seismic"],
      ["SELFISH", "selfish"],
      ["Seven", "seven"],
      ["Shadow Prod. Co.", "shadow-prod-co"],
      ["Shelf", "shelf"],
      ["Shinyusha", "shinyusha"],
      ["ShoSai", "shosai"],
      ["Showten", "showten"],
      ["SoftCell", "softcell"],
      ["Soft on Demand", "soft-on-demand"],
      ["SPEED", "speed"],
      ["STARGATE3D", "stargate3d"],
      ["Studio 9 Maiami", "studio-9-maiami"],
      ["Studio Akai Shohosen", "studio-akai-shohosen"],
      ["Studio Deen", "studio-deen"],
      ["Studio Fantasia", "studio-fantasia"],
      ["Studio FOW", "studio-fow"],
      ["studio GGB", "studio-ggb"],
      ["Studio Houkiboshi", "studio-houkiboshi"],
      ["Studio Zealot", "studio-zealot"],
      ["Suiseisha", "suiseisha"],
      ["Suzuki Mirano", "suzuki-mirano"],
      ["SYLD", "syld"],
      ["TDK Core", "tdk-core"],
      ["t japan", "t-japan"],
      ["TNK", "tnk"],
      ["TOHO", "toho"],
      ["Toranoana", "toranoana"],
      ["T-Rex", "t-rex"],
      ["Triangle", "triangle"],
      ["Trimax", "trimax"],
      ["TYS Work", "tys-work"],
      ["U-Jin", "u-jin"],
      ["Umemaro-3D", "umemaro-3d"],
      ["Union Cho", "union-cho"],
      ["Valkyria", "valkyria"],
      ["Vanilla", "vanilla"],
      ["White Bear", "white-bear"],
      ["X City", "x-city"],
      ["yosino", "yosino"],
      ["Y.O.U.C.", "y-o-u-c"],
      ["ZIZ", "ziz"],
    ].map((x) => ({ type_name: "CheckBox", name: x[0], value: x[1] }));
    var genres = [
      "3D",
      "AHEGAO",
      "ANAL",
      "BDSM",
      "BIG BOOBS",
      "BLOW JOB",
      "BONDAGE",
      "BOOB JOB",
      "CENSORED",
      "COMEDY",
      "COSPLAY",
      "CREAMPIE",
      "DARK SKIN",
      "FACIAL",
      "FANTASY",
      "FILMED",
      "FOOT JOB",
      "FUTANARI",
      "GANGBANG",
      "GLASSES",
      "HAND JOB",
      "HAREM",
      "HD",
      "INCEST",
      "INFLATION",
      "LACTATION",
      "LOLI",
      "MAID",
      "MASTURBATION",
      "MILF",
      "MIND BREAK",
      "MIND CONTROL",
      "MONSTER",
      "NEKOMIMI",
      "NTR",
      "NURSE",
      "ORGY",
      "PLOT",
      "POV",
      "PREGNANT",
      "PUBLIC SEX",
      "RIMJOB",
      "SCHOOL GIRL",
      "SOFTCORE",
      "SWIMSUIT",
      "TEACHER",
      "TENTACLE",
      "THREESOME",
      "TOYS",
      "TRAP",
      "TSUNDERE",
      "UNCENSORED",
      "VANILLA",
      "VIRGIN",
      "WATERSPORTS",
      "X-RAY",
      "YAOI",
      "YURI",
    ].map((x) => ({ type_name: "CheckBox", name: x, value: x }));

    return [
      {
        type_name: "SelectFilter",
        name: "Sort by",
        state: 2,
        values: sortBy,
      },
      {
        type_name: "SelectFilter",
        name: "Order by",
        state: 0,
        values: orderBy,
      },
      {
        type_name: "SelectFilter",
        name: "Tag inclusion",
        state: 0,
        values: tagAndOr,
      },
      {
        type_name: "GroupFilter",
        name: "Brands",
        state: brands,
      },
      {
        type_name: "GroupFilter",
        name: "Genres",
        state: genres,
      },
    ];
  }
  getSourcePreferences() {
    return [
      {
        key: "pref_video_resolution",
        listPreference: {
          title: "Preferred video resolution",
          summary: "",
          valueIndex: 0,
          entries: ["1080p", "720p", "480p", "360p"],
          entryValues: ["1080", "720", "480", "360"],
        },
      },
    ];
  }
}
