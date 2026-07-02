const products = [
  { id: "sunday-window-tee", category: "wear", price: 32, image: "assets/products/sunday-window-tee.jpg", material: "soft cotton jersey", en: { name: "Sunday Window Tee", subtitle: "a tee for sitting by the window", story: "Made for slow weekends, coffee walks, and the quiet feeling of doing nothing beautifully." }, zh: { name: "周日窗边T恤", subtitle: "穿着坐在窗边发呆的一天", story: "适合周末待在家、下午买咖啡、坐在窗边发呆时穿上的柔软T恤。" } },
  { id: "milk-morning-cardigan", category: "wear", price: 46, image: "assets/products/milk-morning-cardigan.jpg", material: "milk-soft knit", en: { name: "Milk Morning Cardigan", subtitle: "warm light in cardigan form", story: "A gentle knit that feels like morning milk and pale sunlight across a small room." }, zh: { name: "牛奶晨光针织衫", subtitle: "像晨光一样柔软的针织衫", story: "带着牛奶色晨光感的针织外套，让普通早晨也变得值得记住。" } },
  { id: "after-school-skirt", category: "wear", price: 39, image: "assets/products/after-school-skirt.jpg", material: "pleated woven fabric", en: { name: "After School Skirt", subtitle: "not school, the feeling after school", story: "A pleated skirt for the mood of walking home, buying snacks, and keeping a secret song in your earphones." }, zh: { name: "放学后的百褶裙", subtitle: "不是学生，而是放学回家的心情", story: "收藏的是放学后回家的心情：轻轻走路、买点零食、耳机里有一首歌。" } },
  { id: "cloud-blanket-hoodie", category: "wear", price: 52, image: "assets/products/cloud-blanket-hoodie.jpg", material: "brushed fleece", en: { name: "Cloud Blanket Hoodie", subtitle: "as comfortable as wearing a blanket", story: "A hoodie for movie nights, sleepy rooms, and disappearing into softness." }, zh: { name: "云毯卫衣", subtitle: "像披着毛毯一样舒服", story: "适合晚上看电影、窝在房间里、把自己藏进柔软里的卫衣。" } },
  { id: "quiet-afternoon-dress", category: "wear", price: 58, image: "assets/products/quiet-afternoon-dress.jpg", material: "soft draped fabric", en: { name: "Quiet Afternoon Dress", subtitle: "a dress for soft afternoon light", story: "A quiet dress for reading, wandering, and turning afternoon light into a memory." }, zh: { name: "安静午后连衣裙", subtitle: "属于安静下午的裙子", story: "适合读书、散步、让下午四点的光变成记忆的一条连衣裙。" } },
  { id: "memory-ribbon-bag", category: "charms", price: 38, image: "assets/products/memory-ribbon-bag.jpg", material: "soft faux leather, ribbon trim", en: { name: "Memory Ribbon Bag", subtitle: "not a pink bag, a bag for memories", story: "It carries keys, lip balm, tickets, and all the small evidence of a day worth keeping." }, zh: { name: "记忆丝带包", subtitle: "不是粉色包，而是装回忆的包", story: "它装下钥匙、润唇膏、票根，也装下一个普通日子里值得留下的证据。" } },
  { id: "pocket-bear-clip", category: "charms", price: 12, image: "assets/products/pocket-bear-clip.jpg", material: "resin charm clip", en: { name: "Pocket Bear Clip", subtitle: "a tiny bear for hair or bags", story: "A small lucky object that can follow you through the day without saying anything." }, zh: { name: "口袋小熊发夹", subtitle: "可以夹头发，也可以挂在包上", story: "一个安静跟着你出门的小幸运，不需要说话，也会让今天变得不一样。" } },
  { id: "little-star-key-charm", category: "charms", price: 10, image: "assets/products/little-star-key-charm.jpg", material: "acrylic star charm", en: { name: "Little Star Key Charm", subtitle: "a star for the keys you always lose", story: "A tiny star coordinate for your keys, tote, or zipper." }, zh: { name: "小星星钥匙挂件", subtitle: "给常常找不到的钥匙一颗星星", story: "给钥匙、托特包或拉链挂上一颗小星星，像给日常做了标记。" } },
  { id: "blue-phone-friend", category: "charms", price: 14, image: "assets/products/blue-phone-friend.jpg", material: "beaded phone strap", en: { name: "Blue Phone Friend", subtitle: "not an accessory, a companion", story: "A blue phone charm that turns a device into something a little more personal." }, zh: { name: "蓝色手机挂件", subtitle: "不是Accessory，而是陪伴", story: "让手机不只是工具，而是每天都会遇见的小陪伴。" } },
  { id: "wish-pocket-tote", category: "charms", price: 34, image: "assets/products/wish-pocket-tote.jpg", material: "canvas with inner pocket", en: { name: "Wish Pocket Tote", subtitle: "a tote for future plans", story: "For notebooks, snacks, and the small wishes you keep close." }, zh: { name: "愿望口袋托特包", subtitle: "把未来计划装进口袋", story: "装笔记本、零食，也装那些暂时还没实现的小愿望。" } },
  { id: "someday-notebook", category: "paper", price: 16, image: "assets/products/someday-notebook.jpg", material: "textured paper cover", en: { name: "Someday Notebook", subtitle: "for ideas that need time", story: "A notebook for plans, daydreams, and the sentence that starts with someday." }, zh: { name: "总有一天笔记本", subtitle: "写给需要时间实现的想法", story: "记录计划、白日梦，以及所有以“总有一天”开头的句子。" } },
  { id: "tiny-thought-memo", category: "paper", price: 8, image: "assets/products/tiny-thought-memo.jpg", material: "tear-off memo paper", en: { name: "Tiny Thought Memo", subtitle: "small notes before they disappear", story: "For thoughts too small for a notebook but too precious to lose." }, zh: { name: "小念头便签", subtitle: "在想法消失前先留下来", story: "给那些不够写进日记、但又不想忘记的小念头。" } },
  { id: "window-sticker-pack", category: "paper", price: 9, image: "assets/products/window-sticker-pack.jpg", material: "matte sticker sheet", en: { name: "Window Sticker Pack", subtitle: "stickers for paper windows", story: "Soft shapes for diaries, laptops, and the corners of a page." }, zh: { name: "窗边贴纸", subtitle: "贴在纸上的小窗户", story: "贴在日记、电脑和页面角落，让纸张也有房间感。" } },
  { id: "moon-calendar", category: "paper", price: 18, image: "assets/products/moon-calendar.jpg", material: "monthly paper calendar", en: { name: "Moon Calendar", subtitle: "a calendar for slow time", story: "A moon-toned calendar that lets time feel less like a deadline." }, zh: { name: "月亮日历", subtitle: "让时间慢一点的日历", story: "月亮色调的日历，让时间不只是截止日期，也可以被温柔地看见。" } },
  { id: "keep-this-letter-set", category: "paper", price: 13, image: "assets/products/keep-this-letter-set.jpg", material: "letter paper and envelopes", en: { name: "Keep This Letter Set", subtitle: "a letter to your future self", story: "Not just paper, but a letter that waits for you in the future." }, zh: { name: "留下这封信", subtitle: "一封未来写给自己的信", story: "不是信纸，而是一封会在未来等你的信。" } },
  { id: "late-night-mug", category: "home", price: 18, image: "assets/products/late-night-mug.jpg", material: "glazed ceramic", en: { name: "Late Night Mug", subtitle: "for milk at 11pm", story: "A mug for warm milk, desk lamps, and the quiet part of the night." }, zh: { name: "深夜马克杯", subtitle: "晚上十一点泡牛奶的时候", story: "适合热牛奶、台灯和深夜安静时刻的马克杯。" } },
  { id: "soft-corner-cushion", category: "home", price: 28, image: "assets/products/soft-corner-cushion.jpg", material: "plush cushion cover", en: { name: "Soft Corner Cushion", subtitle: "a soft corner for yourself", story: "Turns a chair, bed, or floor corner into a place you can return to." }, zh: { name: "柔软角落抱枕", subtitle: "给自己留一个柔软角落", story: "把椅子、床边或地板角落变成一个可以回去的地方。" } },
  { id: "rainy-lamp", category: "home", price: 44, image: "assets/products/rainy-lamp.jpg", material: "soft glow lamp", en: { name: "Rainy Lamp", subtitle: "not a lamp, weather", story: "A small lamp for rainy windows and rooms that need a gentle weather." }, zh: { name: "下雨天台灯", subtitle: "不是灯，是天气", story: "给下雨的窗边和需要柔软天气的房间一点光。" } },
  { id: "slow-sunday-tray", category: "home", price: 22, image: "assets/products/slow-sunday-tray.jpg", material: "printed resin tray", en: { name: "Slow Sunday Tray", subtitle: "for coffee, rings, and small rituals", story: "A tray that makes breakfast, keys, and tiny objects feel intentionally placed." }, zh: { name: "慢星期天托盘", subtitle: "放咖啡、戒指和小仪式", story: "让早餐、钥匙和小物都像被认真摆放过。" } },
  { id: "room-light-candle", category: "home", price: 24, image: "assets/products/room-light-candle.jpg", material: "soy wax candle", en: { name: "Room Light Candle", subtitle: "a candle for the room inside you", story: "A small warm light for remembering that today is also worth keeping." }, zh: { name: "房间里的灯光香薰", subtitle: "给心里的房间一点光", story: "用一点温暖的气味提醒自己：今天也值得纪念。" } }
];

const categoryNames = {
  en: { wear: "Room Wear", charms: "Daily Charms", paper: "Paper Desk", home: "Home Mood" },
  zh: { wear: "Room Wear 服饰", charms: "Daily Charms 配饰", paper: "Paper Desk 文具", home: "Home Mood 家居" }
};

const colorVariants = [
  { id: "pink", en: "Blush pink", zh: "柔粉色" },
  { id: "blue", en: "Dream blue", zh: "梦蓝色" },
  { id: "cream", en: "Milk cream", zh: "奶油白" }
];
const productImageVersion = "real-color-1";

const translations = {
  en: {
    "nav.shop": "shop",
    "nav.categories": "worlds",
    "nav.notes": "room notes",
    "nav.about": "about",
    "nav.enter": "enter the room",
    "home.eyebrow": "brand universe / a vessel for time",
    "home.heroTitle": "ordinary days deserve beautiful things",
    "home.heroCopy": "Kikuyu Room collects small objects for the room you slowly build inside yourself: clothes, charms, paper goods, and home moods that hold time.",
    "home.shopArrivals": "shop the worlds",
    "home.readWorld": "read the universe",
    "home.heroNote": "not a time machine, a vessel for time",
    "world.eyebrow": "four tiny worlds",
    "world.title": "every product belongs to a way of living",
    "cat.wear": "Room Wear",
    "cat.wearSub": "the clothes you wear when nobody is watching",
    "cat.charms": "Daily Charms",
    "cat.charmsSub": "objects that quietly follow you through the day",
    "cat.paper": "Paper Desk",
    "cat.paperSub": "a desk that remembers things for you",
    "cat.home": "Home Mood",
    "cat.homeSub": "not home goods, home mood",
    "shop.eyebrow": "shop",
    "shop.title": "twenty small coordinates of time",
    "shop.copy": "Search, filter by world, and sort the collection. Each piece is a small coordinate for ordinary days worth keeping.",
    "shop.searchLabel": "search",
    "shop.searchPlaceholder": "Search tee, mug, notebook...",
    "shop.categoryLabel": "category",
    "shop.sortLabel": "sort",
    "shop.clear": "clear filters",
    "shop.empty": "No products found in this room.",
    "filter.all": "All worlds",
    "filter.wear": "Room Wear",
    "filter.charms": "Daily Charms",
    "filter.paper": "Paper Desk",
    "filter.home": "Home Mood",
    "sort.featured": "Featured",
    "sort.low": "Price: low to high",
    "sort.high": "Price: high to low",
    "sort.name": "Name A-Z",
    "about.eyebrow": "about kikuyu room",
    "about.title": "Some people remember their childhood\nthrough a toy.",
    "about.copy": "Some remember it\nthrough the light\nthat entered their room every afternoon.",
    "about.copyTwo": "We remember it\nthrough rooms.",
    "about.button": "open room notes",
    "manifesto.one": "We believe ordinary days deserve beautiful things.",
    "manifesto.two": "We collect moments that deserve to stay.",
    "notes.eyebrow": "room notes",
    "notes.title": "CCD photos, moodboards, and ways of living",
    "notes.ccd": "CCD photos",
    "notes.ccdSub": "soft flash, old camera light, tiny evidence of a day",
    "notes.moodboard": "Moodboard",
    "notes.moodboardSub": "colors, rooms, paper textures, ribbons, and saved images",
    "notes.life": "Lifestyle",
    "notes.lifeSub": "coffee walks, rainy lamps, Sunday trays, and slow rooms",
    "detail.back": "shop / back to all products",
    "detail.color": "color mood",
    "detail.cart": "add to cart",
    "detail.save": "save for later",
    "detail.shipMini": "ships in 3-5 days / gift wrapping available",
    "detail.storyTitle": "why it belongs in the room",
    "detail.materials": "materials",
    "detail.size": "size",
    "detail.sizeBody": "room, desk, bag, or daily use",
    "detail.care": "care",
    "detail.careBody": "keep dry, wipe gently, store with care",
    "detail.shipping": "shipping",
    "detail.shippingBody": "3-5 days processing",
    "footer.title": "get the next room note",
    "footer.copy": "soft drops, styling notes, CCD photos, and small dreamy objects when they arrive.",
    "footer.email": "your email",
    "footer.join": "join",
    "ui.results": "{count} products",
    "ui.sent": "sent"
  },
  zh: {
    "nav.shop": "商店",
    "nav.categories": "世界",
    "nav.notes": "房间笔记",
    "nav.about": "关于",
    "nav.enter": "进入房间",
    "home.eyebrow": "品牌世界观 / 盛放时间的容器",
    "home.heroTitle": "平凡的日子，也值得拥有漂亮的东西",
    "home.heroCopy": "Kikuyu Room 收藏那些能住进心里房间的小物：服饰、配饰、文具和家居情绪，它们一起盛放时间。",
    "home.shopArrivals": "逛逛四个世界",
    "home.readWorld": "阅读品牌世界观",
    "home.heroNote": "不是时光机，而是盛放时间的容器",
    "world.eyebrow": "Four Tiny Worlds",
    "world.title": "每一件商品，都对应一种生活方式",
    "cat.wear": "Room Wear",
    "cat.wearSub": "那些真正属于自己的衣服",
    "cat.charms": "Daily Charms",
    "cat.charmsSub": "安静陪你过一天的小物",
    "cat.paper": "Paper Desk",
    "cat.paperSub": "替你记住事情的书桌",
    "cat.home": "Home Mood",
    "cat.homeSub": "不是家居用品，是家的情绪",
    "shop.eyebrow": "Shop 商品列表",
    "shop.title": "二十个时间留下来的坐标",
    "shop.copy": "可以搜索、按世界分类、按价格或名称排序。每一件都是普通日子里值得留下的小坐标。",
    "shop.searchLabel": "搜索",
    "shop.searchPlaceholder": "搜索T恤、马克杯、笔记本...",
    "shop.categoryLabel": "分类",
    "shop.sortLabel": "排序",
    "shop.clear": "清除筛选",
    "shop.empty": "这个房间里暂时没有找到商品。",
    "filter.all": "全部世界",
    "filter.wear": "Room Wear 服饰",
    "filter.charms": "Daily Charms 配饰",
    "filter.paper": "Paper Desk 文具",
    "filter.home": "Home Mood 家居",
    "sort.featured": "推荐排序",
    "sort.low": "价格从低到高",
    "sort.high": "价格从高到低",
    "sort.name": "名称 A-Z",
    "about.eyebrow": "关于 kikuyu room",
    "about.title": "有些人通过一个玩具\n记住童年。",
    "about.copy": "有些人通过每天下午\n照进房间的光\n记住童年。",
    "about.copyTwo": "而我们\n通过房间记住它。",
    "about.button": "打开房间笔记",
    "manifesto.one": "We believe ordinary days deserve beautiful things.",
    "manifesto.two": "We collect moments that deserve to stay.",
    "notes.eyebrow": "房间笔记",
    "notes.title": "CCD照片、Moodboard和生活方式",
    "notes.ccd": "CCD照片",
    "notes.ccdSub": "柔软闪光、旧数码相机光感、一天留下来的证据",
    "notes.moodboard": "Moodboard",
    "notes.moodboardSub": "颜色、房间、纸张纹理、丝带和收藏的图片",
    "notes.life": "生活方式",
    "notes.lifeSub": "咖啡散步、下雨天台灯、慢星期天托盘和柔软房间",
    "detail.back": "商店 / 返回全部商品",
    "detail.color": "颜色情绪",
    "detail.cart": "加入购物车",
    "detail.save": "稍后收藏",
    "detail.shipMini": "3-5 天发货 / 可选礼物包装",
    "detail.storyTitle": "为什么它属于这个房间",
    "detail.materials": "材质",
    "detail.size": "尺寸",
    "detail.sizeBody": "适合房间、书桌、包包或日常使用",
    "detail.care": "护理",
    "detail.careBody": "保持干燥，轻柔擦拭，认真收纳",
    "detail.shipping": "配送",
    "detail.shippingBody": "3-5 天处理发货",
    "footer.title": "收到下一封 Room Note",
    "footer.copy": "新品上架、搭配灵感、CCD照片和柔软小物到达时通知你。",
    "footer.email": "你的邮箱",
    "footer.join": "加入",
    "ui.results": "{count} 件商品",
    "ui.sent": "已发送"
  }
};

let currentLang = localStorage.getItem("kikuyu-lang") || "en";
let selectedProductId = localStorage.getItem("kikuyu-product") || "memory-ribbon-bag";
let selectedColor = localStorage.getItem("kikuyu-color") || "pink";

const sky = document.querySelector(".sky");
const colors = ["#fff", "#fedbe3", "#f1a2b9", "#b8dbc6", "#b8b0c9"];
const productGrid = document.querySelector("#product-grid");
const searchInput = document.querySelector("#product-search");
const categoryFilter = document.querySelector("#category-filter");
const sortSelect = document.querySelector("#sort-products");
const resultCount = document.querySelector("#result-count");
const emptyState = document.querySelector("#empty-state");

for (let i = 0; i < 90; i += 1) {
  const star = document.createElement("span");
  star.style.setProperty("--x", `${(i * 137) % 100}%`);
  star.style.setProperty("--y", `${(i * 251) % 100}%`);
  star.style.setProperty("--size", `${2 + (i % 4) * 2}px`);
  star.style.setProperty("--color", colors[i % colors.length]);
  star.style.setProperty("--opacity", `${0.24 + (i % 5) * 0.1}`);
  star.style.setProperty("--duration", `${3.2 + (i % 7) * 0.42}s`);
  star.style.setProperty("--delay", `${-(i % 11) * 0.28}s`);
  sky.appendChild(star);
}

function t(key) {
  return translations[currentLang][key] || translations.en[key] || key;
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    const key = node.dataset.i18n;
    node.textContent = t(key);
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((node) => {
    const key = node.dataset.i18nPlaceholder;
    node.placeholder = t(key);
  });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });
  localStorage.setItem("kikuyu-lang", lang);
  renderProducts();
  updateDetail();
}

function getFilteredProducts() {
  const query = searchInput.value.trim().toLowerCase();
  const category = categoryFilter.value;
  const sort = sortSelect.value;

  const filtered = products.filter((product) => {
    const text = [
      product.en.name,
      product.en.subtitle,
      product.en.story,
      product.zh.name,
      product.zh.subtitle,
      product.zh.story,
      categoryNames.en[product.category],
      categoryNames.zh[product.category]
    ].join(" ").toLowerCase();

    return (category === "all" || product.category === category) && (!query || text.includes(query));
  });

  return filtered.sort((a, b) => {
    if (sort === "price-asc") return a.price - b.price;
    if (sort === "price-desc") return b.price - a.price;
    if (sort === "name") return a[currentLang].name.localeCompare(b[currentLang].name);
    return products.indexOf(a) - products.indexOf(b);
  });
}

function renderProducts() {
  const items = getFilteredProducts();
  productGrid.innerHTML = items.map((product) => {
    const copy = product[currentLang];
    return `
      <article class="product-card" data-product-id="${product.id}">
        <button class="product-image-button" type="button" data-open-product="${product.id}" aria-label="${copy.name}">
          <img src="${product.image}" alt="${copy.name}" />
        </button>
        <div class="product-meta">
          <span>${categoryNames[currentLang][product.category]}</span>
          <strong>$${product.price}</strong>
        </div>
        <h3>${copy.name}</h3>
        <p>${copy.subtitle}</p>
        <button class="text-button product-link" type="button" data-open-product="${product.id}">
          ${currentLang === "zh" ? "查看详情" : "view details"}
        </button>
      </article>
    `;
  }).join("");

  resultCount.textContent = t("ui.results").replace("{count}", String(items.length));
  emptyState.classList.toggle("active", items.length === 0);
}

function productVariantImage(product, color = selectedColor) {
  return `${product.image.replace(".jpg", `-${color}.jpg`)}?v=${productImageVersion}`;
}

function setSelectedColor(color) {
  selectedColor = colorVariants.some((item) => item.id === color) ? color : "pink";
  localStorage.setItem("kikuyu-color", selectedColor);
}

function updateDetail() {
  const product = products.find((item) => item.id === selectedProductId) || products[5];
  const copy = product[currentLang];
  const currentVariant = productVariantImage(product);
  document.querySelector("#detail-image").src = currentVariant;
  document.querySelector("#detail-image").alt = copy.name;
  document.querySelector("#detail-world").textContent = categoryNames[currentLang][product.category];
  document.querySelector("#detail-tag").textContent = categoryNames[currentLang][product.category];
  document.querySelector("#detail-title").textContent = copy.name;
  document.querySelector("#detail-subtitle").textContent = copy.subtitle;
  document.querySelector("#detail-price").textContent = `$${product.price}`;
  document.querySelector("#detail-copy").textContent = copy.story;
  document.querySelector("#detail-story").textContent = copy.story;
  document.querySelector("#detail-materials").textContent = product.material;
  document.querySelector(".thumbnail-row").innerHTML = colorVariants.map((variant) => {
    const src = productVariantImage(product, variant.id);
    const label = variant[currentLang];
    return `<img class="${variant.id === selectedColor ? "active" : ""}" src="${src}" alt="${copy.name} - ${label}" data-color="${variant.id}" />`;
  }).join("");
  document.querySelector(".mini-strip").innerHTML = colorVariants.map((variant) => {
    const src = productVariantImage(product, variant.id);
    const label = variant[currentLang];
    return `<img src="${src}" alt="${copy.name} - ${label}" data-color="${variant.id}" />`;
  }).join("");
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.toggle("active", swatch.dataset.color === selectedColor);
    const variant = colorVariants.find((item) => item.id === swatch.dataset.color);
    if (variant) swatch.setAttribute("aria-label", variant[currentLang]);
  });
  localStorage.setItem("kikuyu-product", product.id);
}

function showPageFromHash() {
  const detail = location.hash.startsWith("#detail");
  document.querySelectorAll(".page").forEach((page) => {
    page.classList.toggle("active", page.dataset.page === (detail ? "detail" : "home"));
  });
  if (detail) window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("click", (event) => {
  const productButton = event.target.closest("[data-open-product]");
  if (productButton) {
    selectedProductId = productButton.dataset.openProduct;
    setSelectedColor("pink");
    updateDetail();
    location.hash = "#detail";
  }

  const filterLink = event.target.closest("[data-filter-link]");
  if (filterLink) {
    categoryFilter.value = filterLink.dataset.filterLink;
    renderProducts();
  }
});

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

[searchInput, categoryFilter, sortSelect].forEach((control) => {
  control.addEventListener("input", renderProducts);
  control.addEventListener("change", renderProducts);
});

document.querySelector("#clear-filters").addEventListener("click", () => {
  searchInput.value = "";
  categoryFilter.value = "all";
  sortSelect.value = "featured";
  renderProducts();
});

document.querySelectorAll("[data-qty]").forEach((button) => {
  button.addEventListener("click", () => {
    const qty = document.querySelector("#qty");
    const next = Math.max(1, Number(qty.textContent) + Number(button.dataset.qty));
    qty.textContent = String(next);
  });
});

document.querySelector(".option-group").addEventListener("click", (event) => {
  const swatch = event.target.closest("[data-color]");
  if (!swatch) return;
  setSelectedColor(swatch.dataset.color);
  updateDetail();
});

document.querySelector(".thumbnail-row").addEventListener("click", (event) => {
  if (!event.target.matches("img")) return;
  if (event.target.dataset.color) setSelectedColor(event.target.dataset.color);
  document.querySelector("#detail-image").src = event.target.src;
  document.querySelectorAll(".thumbnail-row img").forEach((image) => image.classList.toggle("active", image === event.target));
  document.querySelectorAll(".swatch").forEach((swatch) => swatch.classList.toggle("active", swatch.dataset.color === selectedColor));
});

document.querySelector(".signup-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector("button");
  const original = button.textContent;
  button.textContent = t("ui.sent");
  setTimeout(() => {
    button.textContent = original;
  }, 1300);
});

window.addEventListener("hashchange", showPageFromHash);

const revealTargets = [
  ".hero-copy",
  ".hero-image",
  ".section-block",
  ".category-card",
  ".product-card",
  ".about-band",
  ".photo-stack",
  ".about-copy",
  ".manifesto-band",
  ".note-card",
  ".detail-layout",
  ".detail-info",
  ".site-footer"
];

function setupReveal() {
  document.querySelectorAll(revealTargets.join(",")).forEach((node, index) => {
    node.classList.add("reveal");
    node.style.transitionDelay = `${Math.min(index % 6, 5) * 55}ms`;
  });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal").forEach((node) => revealObserver.observe(node));
  } else {
    document.querySelectorAll(".reveal").forEach((node) => node.classList.add("is-visible"));
  }
}

setLanguage(currentLang);
showPageFromHash();
setupReveal();
