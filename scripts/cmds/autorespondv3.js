module.exports = {
config: {
name: "autorespondv3",
version: "2.0.0",
author: "Haru",
cooldown: 5,
role: 0,
shortDescription: "Autoresponds with reactions and replies",
longDescription: "Autoresponds with reactions and replies based on specific words or triggers.",
category: "fun",
guide: "?autorespondv3",
},
onStart: async ({ api, event }) => {
// Blank onStart function as per the request
},
onChat: async ({ api, event }) => {
const { body, messageID, threadID } = event;

// Reactions based on words
const emojis = {
"💜": ["Cliff", "August", "Jonell", "David", "purple", "Fritz", "Sab", "Haru", "Xuazane", "Kim"],
"💚": ["dia", "seyj", "ginanun", "gaganunin", "pfft", "xyrene", "gumanun"],
"😾": ["Jo", "Ariii", "talong", "galit"],
"😼": ["wtf", "fck", "haaays", "naku", "ngi ", "ngek", "nge ", "luh", "lah"],
"😸": ["pill", "laugh", "lt ", "gagi", "huy", "hoy"],
"🌀": ["prodia", "sdxl", "bardv3", "tanongv2", "-imagine", "genimg", "Tanongv4", "kamla", "-shortcut"],
"👋": ["hi ", "hello", "salut","bjr","bonjour"," Salut","👋","bonsoir","slt"],
"🔥": ["🔥", ".jpg", "astig", "damn", "angas", "galing", "husay"],"💩":["merde","Merde","caca","Caca","shit"],"🤢":["beurk",
      "dégueulasse",
      "dégeu",
      "horrible"
    ],"🌸": [
      "amour",
      "câlin",
      "tendresse",
      "gentillesse",
      "bienveillance",
      "douceur",
      "complicité",
      "gratitude",
      "bonheur",
      "amitié"
    ],
    "😂": [
      "Ridicule",
      "Clownesque",
      "Farce",
      "Pitrerie",
      "Comique",
      "Drôle",
      "Amusant",
      "Hilarant",
      "Loufoque",
      "Bouffonnerie",
      "Cocasse",
      "Burlesque",
      "Rigolo",
      "Absurde",
      "Irrévérencieux",
      "Ironique",
      "Ironie",
      "Parodie",
      "Esprit",
      "Facétieux"
    ],
    "😎": [
      "cool","formidable"," 😎"
    ],
    "⚡": [
      "Super",
      "Aesther"
    ],
    "🤖": [
      "Prefix","robot"
    ],
    "🔰": [
      "Nathan","barro"
    ],
    "✔️": [
      "Bien",
      "ok"
    ],
    "🎉": [
      "congrats",
      "félicitation",
      "Goddess-Anaïs"
    ],
    "😆": [
      "xD"
    ],
    "♻️": [
      "restart"
    ],
    "🖕": [
      "fuck","enculer","fdp","🖕"
    ],
    "🌀": [
      "imagine","prodia","textpro","photofy"
    ],
    "🌼": [
      "Goddess-Anaïs"
    ],
    "😑": [
      "mmmh",
      "kiii"
    ],
    "💍": [
      "Aesther"
    ],
    "💵": [
      "Anjara"
    ],
    "😝": [
      "Anjara"
    ],
    "✨": [
      "oui","super"
    ],
    "✖️": [
      "wrong",
      "faux"
    ],
    "😽": [
      "araara"
    ],
    "🤡": [
      "Kindly provide the question","clone"," sanchokuin","bakugo"
    ],
    "😕": [
      "bruh"
    ],
    "👎": [
      "Kindly provide"
    ],
    "🌩️": [
      "*thea",
      "Tatakae",
      "Damare"
    ],
  "🤢": [
      "vomir"
    ],
  "🔪": [
      "tué"
    ],
    "💤": ["ghum paisi", "arekta bar", "soite parchi na", "onek kaj", "ar pari na"],
"🫠": ["bash dite chai", "ami jabo", "kichu bolo na", "onek boro", "emni emni"],
"😤": ["tui abar", "ami bolsi", "moja paili", "shesh kore de", "ektu chup"],
"🫥": ["kichu mone koro na", "ami kichu boli", "onek bhalo", "ta chara ki", "kichu ekta mone hocche"],
"🫶": ["bhalo theko", "toke mone pore", "tui amar bondhu", "forever bondhu", "bhalobeshechi"],
"🧃": ["juice khabi", "chill kor", "shanti chai", "refresh laglo", "cool vibe"],
"🎯": ["target ache", "focus thak", "bash dibo", "100% sure", "done deal"],
"🚀": ["ura gelo", "next level", "boost paisi", "motivation high", "on fire"],
"📌": ["notun idea", "keep in mind", "bookmark kore rakh", "important info", "mone rakhish"],
"🫀": ["dil theke", "onek emotion", "feel korchi", "heart touch", "deep kotha"],
"🧂": ["ekdom jhal", "spicy gossip", "sheroil", "salt diye dimu", "thanda matha"],
"🥴": ["matha ghurche", "arekta chinta", "abar tension", "kichu bujhi na", "joss vibe"],
"🫃": ["pet bhore gesey", "onick kheyechi", "dinner ready", "biryani chilo", "food coma"],
"🥳": ["party mood", "celebrate kor", "lets go", "banger time", "vibe on"],
"🫡": ["respect bro", "salute", "boss level", "guru tumi", "legendary move"],
"🧸": ["cute vibe", "komol mon", "feel korchi", "emotional", "soft thakis"],
"🫓": ["ruti holo", "khawa shesh", "ranna korte hobe", "biryani chai", "mishti ache?"],
"😶‍🌫️": ["matha hang", "brain stop", "kichui bujhi na", "no comments", "blank vibe"],
"🤨": ["tui serious?", "joke korteso?", "bishash hocche na", "ki bolish", "again bol"],
"🤯": ["matha urey gelo", "onek boro news", "eta unexpected", "shock level max", "ami ki shunlam"],
"🙃": ["ultra mood", "jokhon sob ultapalta", "funny situation", "sob ulta lagche", "ajaira vibe"],
"🤭": ["hasir dhakka", "kichu bolbo na", "secret lagse", "lol moment", "ami thik nai"],
"😠": ["rag lagse", "chepe rakhlam", "baje lagse", "bolbo ekta kotha", "onek beshi hoye gese"],
"😴": ["ghum lagse", "ektu chill", "ghum ghum", "zzz mode", "break chai"],
"🤌": ["classy move", "ajaira stylish", "perfect vibe", "elegant", "smooth af"],
"🤸": ["maje maje nachi", "energy level high", "let’s gooo", "hyper mood", "khela hobe"],
"🪄": ["magic vibe", "jadu hoise", "unexpectedly perfect", "like wow", "hok kolom"],
"🎈": ["baba party", "moja ase", "celebration mood", "balloon diya disi", "shubho kichu ekta"],
"💃": ["nachte hobe", "full party", "shari pori nache", "gaan bajao", "baje baje nache"],
"🕺": ["guyz nache", "mehfil on", "moves ase", "ekta vibe dao", "tune on"],
"🌶️": ["onek spicy", "bhab na", "comment e fire", "ultra reply", "taal chara hoye gelo"],
"🥺": ["please mama", "ekta kotha", "sorry bolchi", "amar kichu chai", "mone lage"],
"🫶": ["respect boss", "onek valo bolcho", "heart touch", "sundor kotha", "ami impressed"],
"🧃": ["juice khabi?", "thanda thanda", "refresh kor", "jibon juice", "ek glass dao"],
"📦": ["delivery asche", "parcel asey", "surprise box", "kinlam kinlam", "gift pathaisi"],
"🪑": ["boss chair", "bose asi", "meeting start", "thak thik asi", "program shuru"],
"📎": ["attach korchi", "file dao", "bondho koro", "notun folder", "data lagbe"],
"📅": ["date fixed", "ajke koy tarikh?", "plan set", "schedule on", "calendar dekhi"],
"🧼": ["hand wash kor", "clean rakh", "bacteria chole ja", "saf korchi", "niramoy vibe"],
"🧯": ["jolse jolse", "fire off", "cool down", "calm rakho", "aag bondho"],
"🔍": ["search korchi", "khujtesi", "find korchi", "investigation cholche", "detective mode"],
"🗂️": ["file rakhchi", "document ready", "report banabo", "project ase", "info manage"],
"💸": ["taka gelo", "boro khoroch", "shopping kori", "pocket faka", "emi ase"],
"🛎️": ["bell bajao", "noti lagse", "call dise", "ping dao", "attention plz"],
"🔧": ["repair mode", "bug fix", "system setup", "fix kortesi", "tools lagbe"],
"💿": ["CD ase?", "old vibe", "burn kortesi", "archive mood", "nostalgic file"],
"🌪️": ["biporjoy", "tornado vibe", "gondogol cholche", "maje maje jhor", "chanchal obostha"],
"🛸": ["ufo spotted", "kichu ekta asche", "onno planet", "outer world", "aliens confirm"],
"📡": ["signal ase?", "network dhorte parchi", "wifi lagbe", "online asi", "connect hoye gelo"],
"🎯": ["target fix", "ekdom shot", "bullseye mama", "point clear", "done & dusted"],
"🗨️": ["bujhi nai", "reply koi", "question korchi", "chup thako", "dm dao"],
"⚙️": ["setting korchi", "adjustments dorkar", "system ready", "gear up", "control nichi"],
"🎮": ["pubg cholo", "valo player", "match start", "game on", "lets gooo"],
"🪙": ["coin toss", "bhag ghotona", "win or lose", "luck ase", "golpo holo"],
"🚧": ["work in progress", "incomplete", "jaiga bondho", "pass korte hobe", "dhekha jabe"],
"🚨": ["alert boss", "danger ase", "jhamela lagse", "police call", "warning paisi"],
"📍": ["ekdom ekhane", "location dao", "pin kore rakhlam", "gps on", "map check"],
"🛫": ["flight cholbe", "aakash pothe", "jabo re jabo", "tour e asi", "destination fixed"],
"📿": ["duwa chai", "vabni vibe", "holy mood", "mone porse", "prayer korchi"],
"📖": ["golpo porchi", "bookish mood", "kobita vibe", "lekha porte chai", "page porbo"],
"🏷️": ["tag kore disi", "price ache", "label lagbe", "mention korchi", "name dite hobe"],
"📘": ["notebook open", "notun chinta", "story shuru", "jibon lekha", "ekta plan ase"],
"🖼️": ["pic ta valo", "art piece", "gallery mood", "frame it", "show korchi"],
"🧏‍♂️": ["ki bolteso", "sunte pari", "earphone off", "kichu bolar chilo", "bhule gesi"],
"👨‍🔧": ["fix kortesi", "tools ready", "mechanic mood", "solve korchi", "code break korchi"],
"👩‍🏫": ["class start", "sikhi sikhai", "teacher vibe", "lesson hobe", "parina bujhte"],
"👨‍💻": ["coding cholche", "terminal on", "dev mode", "commit dibo", "programmer vibes"],
"👀": ["dekhi dekhi", "kichu hoitese", "eye on", "observe kortesi", "secret dekhlam"],
"🧠": ["new idea", "brain active", "onno chinta", "bujhte parlam", "logic apply korchi"],
  "👀": ["dekho", "eyes", "look", "observation", "focus"],
  "💁‍♂️": ["shona", "suno", "hey", "bro", "bhai", "amra", "kemon"],
  "🦄": ["unicorn", "magic", "fairy", "dream", "imagine"],
  "💀": ["bhoy", "scary", "dead", "murder", "bhoot"],
  "⚔️": ["fight", "battle", "war", "sword", "attack"],
  "💫": ["glitter", "sparkle", "shine", "twinkle", "light"],
  "🍕": ["pizza", "cheese", "tasty", "food", "hungry"],
  "🥺": ["please", "pleasure", "chinta", "hope", "beg"],
  "🏃‍♂️": ["run", "fast", "cholo", "doro", "race"],
  "🎶": ["music", "song", "beat", "dance", "rhythm"],
  "🚶‍♂️": ["walk", "move", "step", "cholo", "poth"],
  "💥": ["boom", "blast", "explosion", "shock", "bang"],
  "🌪️": ["storm", "wind", "twister", "tornado", "gale"],
  "🌼": ["flower", "bloom", "garden", "nature", "colorful"],
  "🐯": ["tiger", "wild", "beast", "roar", "jungle"],
  "👑": ["king", "queen", "royal", "power", "reign"],
  "🌟": ["star", "shine", "brilliant", "bright", "super"],
  "💪": ["strength", "power", "muscle", "tough", "fight"],
  "🌈": ["rainbow", "colorful", "sky", "beautiful", "hope"],
  "🎉": ["celebrate", "party", "masti", "joy", "happy"],
  "🌸": ["blossom", "flower", "beauty", "love", "nature"],
  "🦋": ["butterfly", "light", "soft", "flap", "free"],
  "🔥": ["fire", "hot", "burn", "danger", "burning"],
  "💀": ["dead", "bhoy", "scary", "ghost", "horror"],
  "🐱": ["cat", "meow", "pussy", "cute", "pet"],
  "🐶": ["dog", "woof", "pet", "cute", "bark"],
  "🦊": ["fox", "wild", "clever", "hunt", "nature"],
  "🦄": ["unicorn", "magic", "imagination", "fantasy", "dream"],
  "🌞": ["sun", "shine", "morning", "day", "light"],
  "🍓": ["strawberry", "fruit", "sweet", "delicious", "berry"],
  "🍔": ["burger", "fastfood", "cheese", "meal", "tasty"],
  "🌽": ["corn", "food", "veg", "healthy", "grains"],
  "🍩": ["donut", "sweet", "dessert", "tasty", "snack"],
  "🍰": ["cake", "sweet", "dessert", "birthday", "celebration"],
  "🍦": ["icecream", "sweet", "cold", "dessert", "treat"],
  "🍇": ["grape", "fruit", "fresh", "healthy", "tasty"],
  "🍎": ["apple", "fruit", "healthy", "fresh", "green"],
  "🍌": ["banana", "fruit", "yellow", "sweet", "tasty"],
  "🍉": ["watermelon", "fruit", "red", "sweet", "cool"],
  "🍊": ["orange", "fruit", "fresh", "tasty", "yellow"],
  "🍍": ["pineapple", "fruit", "yellow", "tropical", "sweet"],
  "🥭": ["mango", "fruit", "sweet", "summer", "tasty"],
  "🥥": ["coconut", "tropical", "fruit", "water", "refresh"],
  "🍒": ["cherry", "fruit", "red", "sweet", "tasty"],
  "🥑": ["avocado", "green", "fruit", "healthy", "fresh"],
  "🍑": ["peach", "fruit", "sweet", "summer", "delicious"],
  "🥒": ["cucumber", "vegetable", "green", "fresh", "healthy"],
  "🌶️": ["chili", "spicy", "hot", "pepper", "flavor"],
  "🧀": ["cheese", "dairy", "milk", "cream", "delicious"],
  "🥗": ["salad", "healthy", "veg", "fresh", "diet"],
  "🥓": ["bacon", "meat", "breakfast", "crispy", "delicious"],
  "🍗": ["chicken", "meat", "spicy", "grilled", "delicious"],
  "🥩": ["steak", "beef", "grilled", "meat", "delicious"],
  "🍖": ["meat", "mutton", "beef", "grilled", "delicious"],
  "🍤": ["shrimp", "seafood", "tasty", "spicy", "delicious"],
  "🍣": ["sushi", "food", "Japanese", "rice", "delicious"],
  "🥟": ["dumpling", "snack", "food", "Chinese", "delicious"],
  "🥡": ["takeaway", "food", "container", "delivery", "snack"],
  "🥘": ["paella", "Spanish", "food", "delicious", "tasty"],
  "🍝": ["pasta", "Italian", "spaghetti", "delicious", "meal"],
  "🍕": ["pizza", "Italian", "cheese", "meal", "tasty"],
  "🍔": ["burger", "fastfood", "tasty", "cheese", "meal"],
  "🌯": ["burrito", "Mexican", "food", "delicious", "meal"],
  "🍳": ["egg", "breakfast", "food", "delicious", "healthy"],
  "🥓": ["bacon", "meat", "crispy", "tasty", "delicious"],
  "🥚": ["egg", "omelette", "breakfast", "healthy", "delicious"],
  "🍽️": ["plate", "meal", "food", "serve", "eat"],
  "🥢": ["chopsticks", "food", "asian", "eat", "snack"],
  "🍴": ["fork", "spoon", "knife", "cutlery", "plate"],
  "🥄": ["spoon", "eat", "meal", "food", "dessert"],
  "🥧": ["pie", "dessert", "sweet", "apple", "tasty"],
  "🍪": ["cookie", "dessert", "sweet", "snack", "baked"],
  "🍩": ["donut", "dessert", "sweet", "chocolate", "snack"],
  "🧁": ["cupcake", "dessert", "sweet", "treat", "snack"],
  "🍫": ["chocolate", "sweet", "dessert", "treat", "delicious"],
  "🍬": ["candy", "sweet", "snack", "dessert", "tasty"],
  "🍭": ["lollipop", "sweet", "candy", "treat", "fun"],
  "🍿": ["popcorn", "snack", "movie", "tasty", "delicious"],
  "🥧": ["pie", "dessert", "apple", "sweet", "tasty"],
  // ... [your existing entries]

  "😤": [
    "bujhli na", "arekbar bolbo", "onek hoyeche", "beshi kotha bolish na", "chup thak"
  ],
  "🫠": [
    "kotha bolte ichche kore na", "boro hoye gelam", "mone hoy muri", "ar parchi na", "bash na dile hoy na"
  ],
  "😑": [
    "hmm", "kichu bolar nai", "silent mode", "boring", "dure giye mor"
  ],
  "🥴": [
    "matha noshto", "pagol pagol lagche", "bokachoda vibe", "ultha palta", "ami ar bujhi na"
  ],
  "🫥": [
    "kichu korar nei", "sob chere dichhi", "bujhte parchi na", "vibe noshto", "onno kichu chinta kori"
  ],
  "😕": [
    "ki hocche bujhi na", "confused", "matha ghurche", "ki bolbi", "puro ulta"
  ],
  "🤯": [
    "biswaas korte parchi na", "ki just holo!", "mind blown", "eta ki amader shathe holo?", "pagla news"
  ],
  "🤭": [
    "secret ache", "hihi", "bujhli toh", "kichu bolbo na", "ajaira masti"
  ],
  "😝": [
    "mojar ekta", "funny lagse", "ektu moja", "besh moja paisi", "amar matha noshto"
  ],
  "🥳": [
    "party time", "celebration mode", "vibe on", "aj raat jome jabe", "lets goooo"
  ],
  "😴": [
    "chill time", "ektu ghum", "break chai", "onick kaj", "need rest"
  ],
  "😆": [
    "besh hasi laglo", "rofl", "ekdom joss", "hasir limit nai", "na bollei hoy"
  ],
  "🧸": [
    "fluffy mood", "bhalobasha feel", "komol mon", "puchki kotha", "emni sweet"
  ],
  // Existing ones...

  "😤": [
    "moja paili", "kichu bolbo na", "ar ekbar", "onek bar bolsi", "matha kharap"
  ],
  "😑": [
    "ki je hoi", "bujhlam na", "arekta level", "emni emni", "ajaira"
  ],
  "😕": [
    "ki hocche", "pura confused", "amar mathay dhukche na", "ei ki bollo?", "kichu bujhlam na"
  ],
  "😆": [
    "haste haste morbo", "ekdom joss", "besh joss", "pagol hasi", "vibe paisi"
  ],
  "🤭": [
    "bolte pari na", "secret kotha", "ajaira vibe", "kichu bolar nai", "lol re baba"
  ],
  "🥴": [
    "matha noshto", "gach theke porlam", "ultha vibe", "kichu bujhi na", "ektu time de"
  ],
  "😶‍🌫️": [
    "pura blank", "matha hang", "ami nai", "dimag off", "loading cholche"
  ],
  "🫠": [
    "bese gelam", "bash khaisi", "kichu bolar nai", "jibon jhamela", "ami ar pari na"
  ],
  "😝": [
    "mojar ekta joke", "mosha laglo", "aja moja", "ekta moja disi", "joss disi"
  ],
  "😴": [
    "ghum lagche", "onick kaj korechi", "ekta ghum dibo", "break chai", "ratrir ghum"
  ],
  "🤯": [
    "matha urey gelo", "tension chole asche", "eta unexpected", "eta ki shunlam", "level high"
  ],
  "🙃": [
    "biporite holo", "sob ulta", "kichu jayna", "vul korechi", "mood off"
  ],
  "🤨": [
    "ki je bolish", "bishash hocche na", "emni kotha", "ar na", "bolte iccha kore na"
  ],
  "🤌": [
    "boss move", "classy reply", "smooth af", "thik ase", "perfect reply"
  ],
  "🫡": [
    "respect bro", "legend tumi", "guru go", "ekdom boss", "salute disi"
  ],
  "🧃": [
    "juice lagbe", "refresh hoye gelam", "cold vibe", "chill mood", "soft thakis"
  ],
  "🥳": [
    "baje toh party", "celebrate kor", "banger time", "party mood", "ekta dance hoye jak"
  ],
  "🧸": [
    "soft vibe", "komol mon", "emotional kotha", "feel disi", "bhalobasha thakuk"
  ],
  "📌": [
    "mone rekho", "bookmark koro", "notun idea", "important info", "ekta kotha"
  ],
  "💖": ["prem", "bhalo", "moyna", "besh", "sona", "mon", "shundor", "sweet"],
  "❤️": ["tumi", "ami", "pyaar", "baba", "mama", "didi", "bhai", "papa"],
  "🌸": ["sundor", "sharifa", "rima", "tuli", "sonalika", "neha", "bishakha", "anju"],
  "🌈": ["shobai", "tomar", "khub", "sundor", "nice", "joss", "apni", "kemon"],
  "✨": ["kaaj", "bari", "bhalo theko", "panta", "aisha", "fatafati", "choto", "boro"],
  "🔥": ["joss", "roar", "masti", "chill", "hobe", "kaam", "besh", "fatafati"],
  "😎": ["chill", "masta", "vibes", "shokto", "kintu", "swapno", "dost", "bhul"],
  "💬": ["kothay", "jabi", "aami", "kemon", "ghuri", "bari", "besh", "bhalo"],
  "🫶": ["thanks", "shukriya", "tumi", "gopon", "pyaar", "bhabi", "hmm", "zara"],
  "😜": ["khub", "naki", "besh", "kinto", "af", "shobai", "fatafati", "chotto"],
  "🤔": ["kemon lagche", "bhalo lagche", "shob kichu", "jibe", "habe", "haat", "toh"],
  "😂": ["panta", "timepass", "laugh", "fun", "chill", "blague", "joke", "hoy"],
  "🎉": ["happy", "masti", "aisha", "jhoom", "chill", "smile", "fun", "bliss"],
  "💥": ["dhamaka", "besh", "pilla", "bari", "kamla", "rock", "tanong", "raining"],
  "🐾": ["kaaj", "bari", "khub", "sundor", "bag", "tulna", "shukriya", "ghuri"],
  "🤪": ["kintu", "zara", "smile", "laugh", "pilla", "roar", "panta", "bari"],
  "🌍": ["bashar", "choto", "roar", "dost", "fatafati", "vibe", "masti", "kamla"],
  "💭": ["swapno", "dream", "kaaj", "bari", "chill", "timepass", "story", "smile"],
  "🌟": ["khub", "besh", "rati", "tumi", "pyaar", "masta", "rock", "bari"],
  "💌": ["love", "dear", "moyna", "kemon", "tumi", "shundor", "rima", "bhul"],
  "💋": ["chumma", "pyaar", "bhalo theko", "sundor", "prem", "sakhhi", "mon", "ki"],
  "🍀": ["sonar", "shaada", "chhoto", "bhalo", "rimo", "abir", "didi", "noya"],
  "🌼": ["sonalika", "preme", "maza", "rimo", "sundor", "besh", "sona", "kemon"],
  "🐱": ["meow", "bhai", "pilla", "kemon", "fatafati", "timepass", "koto", "bari"],
  "🦋": ["sonar", "rima", "besh", "mehe", "shundor", "shubho", "shundori", "kaaj"],
  "🌻": ["tumi", "pyaar", "roshni", "shine", "fatafati", "sona", "mohabbat", "shokti"],
  "🌺": ["sundor", "dost", "chill", "kaaj", "maza", "vibes", "timepass", "besh"],
  "🍓": ["fruit", "good", "tumi", "pilla", "kemon", "love", "besh", "chill"],
  "🫧": ["chhaya", "somoy", "kemon", "roshni", "shine", "kothay", "shundor", "love"],
  "🦄": ["sona", "jhoom", "roar", "shundor", "dream", "fatafati", "swapno", "bhul"],
  "🌙": ["moon", "rati", "besh", "sona", "love", "kaaj", "timepass", "shundor"],
  "🎶": ["sangeet", "gana", "pyaar", "besh", "fatafati", "shundor", "love", "jam"],
  "💤": ["neend", "soya", "shundur", "chhoto", "sundori", "maza", "dream", "kaaj"],
  "⏰": ["time", "tumi", "kemon", "chill", "kaaj", "sonar", "fatafati", "smile"],
  "🎈": ["celebrate", "besh", "party", "timepass", "smile", "fatafati", "good", "joy"],
  "🔑": ["secret", "ke", "tumi", "fatafati", "pilla", "bari", "kaaj", "story"],
  "🔮": ["dream", "pyaar", "shundor", "mohabbat", "sonalika", "sona", "ghuri", "shine"],
  "🍒": ["sweet", "tumi", "shundor", "besh", "pilla", "love", "kaaj", "bliss"],
  "🧸": ["hug", "love", "tumi", "pilla", "sonalika", "rimo", "besh", "mon"],
  "🌈": ["rainbow", "beautiful", "pyaar", "sona", "tumi", "khub", "rima", "besh"],
  "🌴": ["vacation", "chhuti", "fatafati", "timepass", "shundor", "bari", "kemon"],
  "🎸": ["guitar", "music", "vibes", "besh", "party", "sonar", "dream", "smile"],
  "💭": ["Ki korbi?", "Kemon achho?", "Kothay jao?", "Kemon lagche?", "Ki news?", "Ami bhalo achi!", "Chill maro!", "Vibe kor!", "Besh maja koro!"],
  "❤️": ["Ami tomake bhalobashi", "Tumi amar moner raja", "Pyar korbo tomar shathe", "Tumi amar jibon", "Love you forever", "Ami shudhu tomay chai"],
  "💥": ["Full masti!", "Chill ache?", "Kemon chalche?", "Hawa aache", "Life full fun!", "Mast situation!", "Time pass kori", "Ami to boro bhai"],
  "🎉": ["Party kemon!", "Masti hoye gelo", "Sundor party", "Khub maja laglo", "Mast celebration", "Joyful time!", "Ami to full enjoy!", "Besh!"],
  "🧡": ["Ami tomay miss kori", "Tumi amar priya", "Dil se pyar karte hain", "Tumi amar shundor mon", "Ami tomake khub bhalobashi", "Heart to heart", "Raat porjonto kotha bolbo", "Sundor kotha!"],
  "🌙": ["Chup chaap thako", "Shundor raat", "Raat porjonto chhobi tulbo", "Mone rakhbe", "Ami khub bhalo achi", "Mast raat!"],
  "🔥": ["Full energy", "Life burn hoye jabe", "Dhamaka hobe", "Tension na", "Chill maro, sab thik hobe", "Besh masti!", "Ami to full on hoye gechi", "Mone rakh!"],
  "🦋": ["Tumi amar butterfly", "Kemon vabe ami tomar shathe thakte pari?", "Oye shundori", "Dil thak thak korche!", "Mane rakh!", "Ami tomar jonno achi", "Hug me tight!"],
  "🌹": ["Pyar er phool", "Shundor phool", "Mone thakle, bolbe", "Ami tomay chai", "Besh pyaar hobe", "Chand er moto!", "Khub bhalo lagche", "Mast vibes!"],
  "🍀": ["New start", "Shuru koro", "Tumi boro ache", "Masta feeling", "Khub shundor", "Poth chholo", "Ami ashe", "Kemon ache?"],
  "⚡": ["Life jhoro", "Energy full!", "Ami on!", "Mast hobe", "Hurry up!", "Tension er kichu nei", "Kemon lage?", "Full dhamaka hobe", "Noshadhora!"],
  "🌞": ["Shunno dike dekho", "Mornings are beautiful", "Utho, shuru koro", "Shundor din", "Khub maja", "Tumi sunno", "Mast rahebo!"],
  "💖": ["Tumi amar priya", "Dil se", "Tomar chehera", "Raat porjonto, bhalo thako", "Ami khub bhalo thakbo", "Mast hobe!", "Shundor preme raho", "Tumi amar dream girl"],
  "⏳": ["Time pass koro", "Ami achi, time paachhe", "Shundor somoy", "Vibe koro", "Ami aachhi", "Dudh chhatao", "Kemon lagche!"],
  "🌻": ["Preme raho", "Ami bhalo achi", "Sundor basha", "Masti bhalo", "Mone thakbe, tomai mone rakhbo", "Mast shundor kotha!", "Khub shundor situation!"]









//end

};

// Replies to specific words
const replies = {
      
  "kobe asbe": "~~𝙴𝚖𝚗𝚎𝚒 𝙳𝚊𝚢𝚜 𝙲𝚘𝚖𝚒𝚗𝚐, 𝚃𝚘𝚖𝚖𝚊! 🙃🌷",   
     


};

// React based on words
for (const [emoji, words] of Object.entries(emojis)) {
for (const word of words) {
if (body.toLowerCase().includes(word)) {
api.setMessageReaction(emoji, messageID, () => {}, true);
}
}
}

// Reply based on triggers
for (const [trigger, reply] of Object.entries(replies)) {
if (body.toLowerCase().includes(trigger)) {
api.sendMessage(reply, threadID, messageID);
}
}
},
};