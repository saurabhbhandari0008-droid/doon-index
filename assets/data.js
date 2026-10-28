/* Web3Forms access key: form submissions are emailed to the site owner. Empty = not set up yet. */
window.FORM_KEY = "";
/* Doon Dekho — content.
   Every photo has a key (e.g. "bazaar").
   TO USE YOUR OWN PHOTO: save it as images/<key>.jpg (e.g. images/bazaar.jpg)
   and add the key to LOCAL_PHOTOS below, e.g. ["bazaar","momos"].
   Keys not listed here load the free Unsplash photo instead. */
window.LOCAL_PHOTOS = [];

window.PHOTOS = {
  /* free photos from Wikimedia Commons: src = image, credit/lic/link = required attribution */
  "w-fri": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2f/Forest_Research_Institute_in_Dehradun_54.jpg/1280px-Forest_Research_Institute_in_Dehradun_54.jpg", "mw": 4000, "h": 30, "credit": "DesiBoy101", "lic": "CC BY 4.0", "link": "https://commons.wikimedia.org/wiki/File:Forest_Research_Institute_in_Dehradun_54.jpg"},
  "w-mindrolling": {"src": "https://upload.wikimedia.org/wikipedia/commons/6/64/View_of_stupas_Mindrolling_monastery_Dehradun.jpg", "mw": 1280, "h": 40, "credit": "Prashanthns", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:View_of_stupas_Mindrolling_monastery_Dehradun.jpg"},
  "w-robbers": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e4/Amazing_view_of_Robber_Cave_Dehradun_Uttarakhand_India.jpg/1280px-Amazing_view_of_Robber_Cave_Dehradun_Uttarakhand_India.jpg", "mw": 1920, "h": 30, "credit": "Daniel Romanson", "lic": "CC0", "link": "https://commons.wikimedia.org/wiki/File:Amazing_view_of_Robber_Cave_Dehradun_Uttarakhand_India.jpg"},
  "w-paltan": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/15/Paltan_Bazaar_-_Dehradun_%285274608071%29.jpg/1280px-Paltan_Bazaar_-_Dehradun_%285274608071%29.jpg", "mw": 3791, "h": 340, "credit": "Paul Hamilton", "lic": "CC BY-SA 2.0", "link": "https://commons.wikimedia.org/wiki/File:Paltan_Bazaar_-_Dehradun_(5274608071).jpg"},
  "w-paltan2": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2a/Paltan_Bazar_Dehradun_05.jpg/1280px-Paltan_Bazar_Dehradun_05.jpg", "mw": 4160, "h": 20, "credit": "ArmouredCyborg", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:Paltan_Bazar_Dehradun_05.jpg"},
  "w-maldevta": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/10/Song_River_Maldevta_Dehradun.jpg/1280px-Song_River_Maldevta_Dehradun.jpg", "mw": 4000, "h": 160, "credit": "Leo Ashford", "lic": "CC BY 4.0", "link": "https://commons.wikimedia.org/wiki/File:Song_River_Maldevta_Dehradun.jpg"},
  "w-darbar": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/48/Brother_Balaun%27s_Gate%2C_Guru_Ram_Rai_Darbar%2C_Dehradun.jpg/1280px-Brother_Balaun%27s_Gate%2C_Guru_Ram_Rai_Darbar%2C_Dehradun.jpg", "mw": 3960, "h": 25, "credit": "Kuldeepburjbhalaike", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:Brother_Balaun%27s_Gate,_Guru_Ram_Rai_Darbar,_Dehradun.jpg"},
  "w-khalanga": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f0/Anglo_Nepali_war.jpg/1280px-Anglo_Nepali_war.jpg", "mw": 4160, "h": 120, "credit": "Rajeshbahuguna.in", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:Anglo_Nepali_war.jpg"},
  "w-zoo": {"src": "https://upload.wikimedia.org/wikipedia/commons/d/dd/Malsi_deer_park_dehradun_zoo.png", "mw": 1208, "h": 100, "credit": "Dbudakoti", "lic": "CC0", "link": "https://commons.wikimedia.org/wiki/File:Malsi_deer_park_dehradun_zoo.png"},
  "w-clock": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f3/The_Dehradun_Clock_Tower.jpg/1280px-The_Dehradun_Clock_Tower.jpg", "mw": 3808, "h": 220, "credit": "Aditya Oberai", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:The_Dehradun_Clock_Tower.jpg"},
  "w-tapkeshwar": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/64/Shiv_tapkeshwar_temple.jpg/1280px-Shiv_tapkeshwar_temple.jpg", "mw": 4608, "h": 45, "credit": "Jassimehra", "lic": "CC BY-SA 3.0", "link": "https://commons.wikimedia.org/wiki/File:Shiv_tapkeshwar_temple.jpg"},
  "w-sahastradhara": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4d/Ropeway_sahastradhara.jpg/1280px-Ropeway_sahastradhara.jpg", "mw": 8192, "h": 170, "credit": "Krishnav25", "lic": "CC0", "link": "https://commons.wikimedia.org/wiki/File:Ropeway_sahastradhara.jpg"},
  "w-doonu": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Playground_at_Doon_University%2C_Uttarakhand.jpg/1280px-Playground_at_Doon_University%2C_Uttarakhand.jpg", "mw": 2048, "h": 30, "credit": "YoloSCIS", "lic": "CC0", "link": "https://commons.wikimedia.org/wiki/File:Playground_at_Doon_University,_Uttarakhand.jpg"},
  "w-geu": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c3/Aerial_view_of_graphic_era_university.jpg/1280px-Aerial_view_of_graphic_era_university.jpg", "mw": 4074, "h": 110, "credit": "Ujjwalpachori94", "lic": "CC BY-SA 3.0", "link": "https://commons.wikimedia.org/wiki/File:Aerial_view_of_graphic_era_university.jpg"},
  "w-dit": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/6/6b/DIT_University_Administrative_Block.jpg/1280px-DIT_University_Administrative_Block.jpg", "mw": 3264, "h": 200, "credit": "DIT University", "lic": "CC BY-SA 3.0", "link": "https://commons.wikimedia.org/wiki/File:DIT_University_Administrative_Block.jpg"},
  "w-wihg": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/78/Wadia_institute_of_geology.jpg/1280px-Wadia_institute_of_geology.jpg", "mw": 3456, "h": 20, "credit": "Kranshz", "lic": "CC BY-SA 3.0", "link": "https://commons.wikimedia.org/wiki/File:Wadia_institute_of_geology.jpg"},
  "w-ignfa": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7a/Indira_Gandhi_National_Forest_Academy%2C_Dehradun.jpg/1280px-Indira_Gandhi_National_Forest_Academy%2C_Dehradun.jpg", "mw": 2118, "h": 200, "credit": "Soumya Gupta2706", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:Indira_Gandhi_National_Forest_Academy,_Dehradun.jpg"},
  "w-doonschool": {"src": "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e2/The_Main_Gate_of_The_Doon_School.jpg/1280px-The_Main_Gate_of_The_Doon_School.jpg", "mw": 4640, "h": 220, "credit": "Aditya Oberai", "lic": "CC BY-SA 4.0", "link": "https://commons.wikimedia.org/wiki/File:The_Main_Gate_of_The_Doon_School.jpg"},
  "hero-valley":    {u:"1660791601899-f79f14cc427d", h:140},
  "hero-forest":    {u:"1705512569253-522db79bc19e", h:120},
  "hero-cafe":      {u:"1511081692775-05d0f180a065", h:30},
  "hero-market":    {u:"1770129157442-5f080cacf11c", h:20},
  "valley-hills":   {u:"1660791601872-2dffd57dfac9", h:110},
  "fri":            {u:"1757494792285-c7032f9918eb", h:15},
  "clock-tower":    {u:"1695722099520-564bb36a3a6b", h:25},
  "river":          {u:"1705512569253-522db79bc19e", h:160},
  "sahastradhara":  {u:"1606586593596-5308e16d0a48", h:170},
  "mountain":       {u:"1585032317668-2da731001cf3", h:100},
  "aerial":         {u:"1625973937402-2a4d12bff645", h:210},
  "ropeway":        {u:"1584900364818-b43aad8115d2", h:130},
  "rajpur-road":    {u:"1590351742170-8737ea2e8ce8", h:60},
  "monastery":      {u:"1620930989106-fe34819a9b96", h:35},
  "horses":         {u:"1682423168768-3a7b9d103ab7", h:90},
  "forest":         {u:"1587977308714-359924162d27", h:120},
  "corridor":       {u:"1550918873-fa384ac606e6", h:220},
  "momos":          {u:"1647999019630-dabe1a837693", h:28},
  "momos-2":        {u:"1738608084602-f9543952188e", h:18},
  "food-stall":     {u:"1611854064186-d8dccbccb031", h:8},
  "street-cook":    {u:"1552912470-ee2e96439539", h:12},
  "bazaar":         {u:"1770129157442-5f080cacf11c", h:340},
  "cafe-bulbs":     {u:"1511081692775-05d0f180a065", h:32},
  "cafe-plants":    {u:"1776703808255-42a98f22547f", h:70},
  "cafe-latte":     {u:"1542372147193-a7aca54189cd", h:26},
  "cafe-signs":     {u:"1501339847302-ac426a4a7cbb", h:200},
  "cafe-benches":   {u:"1758945185175-3d54780cd8d0", h:45},
  "cafe-reading":   {u:"1535688391459-479d308104f8", h:300},
  "bakery":         {u:"1568254183919-78a4f43a2877", h:36},
  "rusk":           {u:"1558961363-fa8fdf82db35", h:30},
  "bread":          {u:"1599819055803-717bba43890f", h:34},
  "chai":           {u:"1573784540576-21ddeff9479b", h:22},
  "rice":           {u:"1568347355280-d33fdf77d42a", h:48},
  "honey":          {u:"1587049352851-8d4e89133924", h:40},
  "honey-2":        {u:"1613548058193-1cd24c1bebcf", h:44},
  "cups":           {u:"1560228022-f1a3298022e9", h:200},
  "barber":         {u:"1503951914875-452162b0f3f1", h:25},
  "barbershop":     {u:"1781455793310-8427c96454c7", h:30},
  "salon":          {u:"1634449571010-02389ed0f9b0", h:330},
  "salon-2":        {u:"1761839256791-6a93f89fb8b0", h:300},
  "dog":            {u:"1552053831-71594a27632d", h:45},
  "dog-2":          {u:"1534361960057-19889db9621e", h:100},
  "corgi":          {u:"1772606270537-6eb199b55aed", h:50},
  "yoga":           {u:"1518611012118-696072aa579a", h:160},
  "gym":            {u:"1554284126-aa88f22d8b74", h:220},
  "run":            {u:"1607962837359-5e7e89f86776", h:120},
  "hotel-room":     {u:"1702255489644-392758161f1f", h:30},
  "bedroom":        {u:"1765464184843-105e144bd54b", h:40},
  "cabin":          {u:"1595368062392-a189a24c0cf8", h:200},
  "tailor":         {u:"1633655442356-ab2dbc69c772", h:20},
  "sewing":         {u:"1536867520774-5b4f2628a69b", h:210}
};

window.HERO_SLIDES = [
  {img:"hero-valley", cap:"The Doon Valley", sub:"Between the Shivaliks and the Himalaya"},
  {img:"w-robbers", cap:"Robber’s Cave", sub:"Guchhupani · 8 km from the city"},
  {img:"hero-cafe",   cap:"Rajpur Road", sub:"Cafés, bakeries and old bungalows"},
  {img:"w-paltan2", cap:"Paltan Bazaar", sub:"The old market after dark"}
];

window.AREAS = ["Rajpur Road","Paltan Bazaar","Clock Tower","Chakrata Road","Sahastradhara Road","Dalanwala","Clement Town","Mussoorie Road","Selaqui"];
window.CATS = {cafe:"Cafés",street:"Street food",shop:"Shopping",place:"Places",school:"Schools",gem:"Hidden gems"};

window.PLACES = [
 {id:1,s:"bakeries",n:"Ellora’s Melting Moments",c:"cafe",a:"Rajpur Road",p:"₹₹",img:"bakery",f:1,d:"A decades-old Dehradun bakery, loved for its rusks, cheese straws and plum cake. Locals carry boxes of it to relatives across the country.",best:"Morning",tip:"Buy the rusks to take home and the cheese straws to eat right away."},
 {id:2,s:"restaurants",n:"Kalsang Friends Corner",c:"cafe",a:"Rajpur Road",p:"₹₹",img:"momos-2",d:"Tibetan kitchen serving thukpa, thenthuk, shapta and steamed momos. Busy on weekend evenings.",best:"Dinner",tip:"Order the thenthuk on a cold evening."},
 {id:5,s:"markets",n:"Paltan Bazaar",c:"shop",a:"Paltan Bazaar",p:"₹",img:"w-paltan",d:"The old market that runs down from the Clock Tower: woollens, spices, basmati, shoes and plenty of bargaining.",best:"Late afternoon",tip:"Park outside and walk in. The lanes are narrow."},
 {id:9,s:"attractions",n:"Forest Research Institute",c:"place",a:"Chakrata Road",p:"Entry fee",img:"w-fri",f:1,d:"A grand colonial-era building set in a huge forest campus, with museums on forestry and wood. One of the city’s most photographed landmarks.",best:"Morning",tip:"Give yourself two hours. The campus is bigger than it looks."},
 {id:10,s:"spiritual",n:"Mindrolling Monastery",c:"place",a:"Clement Town",p:"Free",img:"w-mindrolling",d:"A tall stupa, prayer halls and quiet gardens in Clement Town, with a small Tibetan market outside.",best:"Late afternoon",tip:"Climb to the upper floors of the stupa for the view."},
 {id:11,s:"nature",n:"Sahastradhara",c:"place",a:"Sahastradhara Road",p:"Free",img:"w-sahastradhara",d:"Sulphur springs, caves and a ropeway, about 14 km from the city centre.",best:"Before noon",tip:"Wear footwear that can get wet."},
 {id:15,s:"markets",n:"Clement Town Tibetan market",c:"shop",a:"Clement Town",p:"₹",img:"cafe-benches",d:"Prayer flags, singing bowls, incense and small cafés near the monastery.",best:"Evening",tip:"Pair it with a monastery visit."},

 /* public places added from research, Oct 2026 — descriptions are original; check details before adding timings or fees */
 {id:16,s:"nature",n:"Shikhar Falls",c:"place",a:"Kairwan Gaon, Rajpur",p:"Public place",img:"forest",d:"A small waterfall in the forest above Rajpur, reached by a short walk from the village road. Quiet on weekdays and at its best after the monsoon.",best:"After monsoon",tip:"Wear shoes with grip. The last stretch of the path can be slippery."},
 {id:17,s:"nature",n:"Maldevta",c:"place",a:"Maldevta Road",p:"Public place",img:"w-maldevta",d:"A riverside valley east of the city where families come for picnics, river walks and the drive through farmland and hills.",best:"Winter afternoons",tip:"Go on a weekday and carry your own snacks and water."},
 {id:18,s:"nature",n:"Jharipani Falls",c:"place",a:"Jharipani, Mussoorie road",p:"Public place",img:"mountain",d:"A waterfall on the old road up to Mussoorie, reached by a short walk down from Jharipani. A good stop on a slow drive up the hills.",best:"Monsoon and autumn",tip:"Combine it with a stop at Jharipani's roadside tea stalls."},
 {id:19,s:"nature",n:"Mossy Falls",c:"place",a:"Barlowganj, Mussoorie road",p:"Public place",img:"sahastradhara",d:"A shaded forest waterfall near Barlowganj, named for the moss on the surrounding rocks. Cool even in summer.",best:"Summer mornings",tip:"The walk is through forest. Go with a friend and leave before dark."},
 {id:20,s:"spiritual",n:"Prakasheshwar Mahadev Temple",c:"place",a:"Mussoorie Road",p:"Public place",img:"monastery",d:"A Shiva temple on the road up to Mussoorie and a popular stop for travellers heading into the hills.",best:"Morning",tip:"Stop on your way up to Mussoorie, when traffic is lighter."},
 {id:21,s:"spiritual",n:"Santala Devi Temple",c:"place",a:"Purkal Gaon",p:"Public place",img:"mountain",d:"A hilltop temple to the west of the city, reached by an uphill walk with views back over the valley.",best:"Early morning",tip:"Carry water for the climb and dress for the weather on the hill."},
 {id:22,s:"spiritual",n:"Chandrabani Temple",c:"place",a:"Chandrabani",p:"Public place",img:"forest",d:"A temple set in the green, forested hills on the southern edge of Dehradun, away from the city noise.",best:"Morning",tip:"Pair it with a drive along the Chandrabani forest road."},
 {id:23,s:"spiritual",n:"Darbar Sahib (Jhanda Sahib)",c:"place",a:"Jhanda Mohalla",p:"Public place",img:"w-darbar",d:"The historic darbar of Guru Ram Rai in the old city, closely tied to the founding of Dehradun. Its yearly Jhanda Mela draws large crowds.",best:"Evening",tip:"Dress modestly and cover your head inside the complex."},
 {id:24,s:"attractions",n:"Ghanta Ghar (Clock Tower)",c:"place",a:"Clock Tower",p:"Public place",img:"w-clock",d:"The city's best-known landmark, where Rajpur Road, Paltan Bazaar and the old city meet. Everything in Dehradun is measured from here.",best:"Evening lights",tip:"Park away from the chowk and walk in. Traffic is heavy all day."},
 {id:25,s:"attractions",n:"Khalanga War Memorial",c:"place",a:"Nalapani, Sahastradhara Road",p:"Public place",img:"w-khalanga",d:"A memorial to the 1814 battle of Nalapani between Gorkha and British forces, set in the hills above the Sahastradhara road.",best:"Morning",tip:"Read about the battle before you go, it makes the visit far more interesting."},
 {id:26,s:"attractions",n:"Dehradun Zoo",c:"place",a:"Malsi, Mussoorie Road",p:"Entry fee",img:"w-zoo",d:"A green zoo and nature park at Malsi on the Mussoorie road, with shaded walks and animal enclosures. Easy with children.",best:"Weekday morning",tip:"Check opening days before you go; most zoos close one day a week."},
 {id:27,s:"attractions",n:"Subir Raha Oil Museum",c:"place",a:"Kaulagarh",p:"Public place",img:"corridor",d:"A museum at ONGC on the story of oil and gas exploration in India. Unusual, and good for curious students.",best:"Weekday",tip:"Confirm visiting hours by phone before you go."},
 {id:28,s:"markets",n:"Indira Market",c:"shop",a:"Darshan Lal Chowk",p:"₹",img:"bazaar",d:"A busy central market for clothes, shoes, accessories and everyday shopping, a short walk from the Clock Tower.",best:"Late afternoon",tip:"Bargain politely. Prices often have room to move."},
 {id:29,s:"markets",n:"Tibetan Market, Parade Ground",c:"shop",a:"Parade Ground",p:"₹",img:"cafe-benches",d:"Rows of stalls opposite the Parade Ground selling winter jackets, woollens, bags and shoes. Busiest in the cold months.",best:"Winter",tip:"Come in October and November for the best winter stock."},
 /* businesses from research, Oct 2026 — u:1 = not yet verified (shows "Claim this listing"), g = Google place ID for exact directions */
 {"id":30,"s":"street-food","n":"Sethi's chole Katlambe","c":"food","a":"Chowk","p":"","img":"food-stall","d":"Sethi's chole Katlambe is a street food spot in Chowk, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJOdEMh3spCTkRQGad4RYExpA"},
 {"id":31,"s":"street-food","n":"Mama Ji Katlambe Chole Wale","c":"food","a":"Paltan Bazaar","p":"","img":"street-cook","d":"A street food spot in the Paltan Bazaar area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJQce_iNwpCTkR_yg8ft0rc84"},
 {"id":32,"s":"street-food","n":"Sethi bun tikki","c":"food","a":"Paltan Bazaar","p":"","img":"momos","d":"Sethi bun tikki is a street food spot based in Paltan Bazaar. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJO2h3cSopCTkRx4TIPjTGn64"},
 {"id":33,"s":"street-food","n":"Vicky Kashyap's Dwarka Bun Tikki","c":"food","a":"Dalanwala","p":"","img":"food-stall","d":"Vicky Kashyap's Dwarka Bun Tikki is a street food spot in Dalanwala, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJr13wB1gpCTkRMYB57wa6TlQ"},
 {"id":34,"s":"street-food","n":"Chetan Swadisht Kachori","c":"food","a":"Khurbura Mohalla","p":"","img":"street-cook","d":"A street food spot in the Khurbura Mohalla area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJo8XkkOopCTkR6fk6K1otkVs"},
 {"id":35,"s":"street-food","n":"Ratan Lal Khasta Chole","c":"food","a":"Paltan Bazaar","p":"","img":"momos","d":"Ratan Lal Khasta Chole is a street food spot based in Paltan Bazaar. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJe5mWSsApCTkR8gVc2uxvQBU"},
 {"id":36,"s":"cafes","n":"Slake Cafe","c":"food","a":"Kishanpur","p":"","img":"cafe-bulbs","d":"Slake Cafe is a café in Kishanpur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJsdE-5A3XCDkRJ8dbtk0_M40"},
 {"id":37,"s":"cafes","n":"AMA Cafe","c":"food","a":"Kishanpur","p":"","img":"cafe-latte","d":"A café in the Kishanpur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJpRiCTgHXCDkRvnVEyFeFC3o"},
 {"id":38,"s":"cafes","n":"KOI - From The House of AKIO","c":"food","a":"Kishanpur","p":"","img":"cafe-signs","d":"KOI - From The House of AKIO is a café based in Kishanpur. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJBel7YrHXCDkRg_yCaxpdnaU"},
 {"id":39,"s":"cafes","n":"Café De Piccolo","c":"food","a":"Kishanpur","p":"","img":"cafe-plants","d":"Café De Piccolo is a café in Kishanpur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJXwhovcMpCTkRqo90YQ5U3uc"},
 {"id":40,"s":"restaurants","n":"Rumours","c":"food","a":"Jakhan","p":"","img":"momos-2","d":"A restaurant in the Jakhan area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJSUuydDTXCDkR46DJ7U5QVEc"},
 {"id":41,"s":"cafes","n":"Blooms café","c":"food","a":"Rajpur","p":"","img":"cafe-benches","d":"Blooms café is a café based in Rajpur. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ_7A2eMrXCDkRIYO5QKtCeGU"},
 {"id":42,"s":"bakeries","n":"Old Bakary House","c":"food","a":"Raipur","p":"","img":"bakery","d":"Old Bakary House is a bakery in Raipur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJeS2EJpMpCTkRrflA7iz9vpU"},
 {"id":43,"s":"bakeries","n":"Old Friends Bakers and Cafe / 100 % Eggless / Best Bakery / Customized Cakes / Cake Shop","c":"food","a":"Majra","p":"","img":"rusk","d":"A bakery in the Majra area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJK-7AY5grCTkRDjsPewzXZY0"},
 {"id":44,"s":"restaurants","n":"Uss Da Dhaba Premium","c":"food","a":"bakral gaon","p":"","img":"cafe-benches","d":"Uss Da Dhaba Premium is a restaurant based in bakral gaon. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJmRDT-NkpCTkRAkWniazF9sw"},
 {"id":45,"s":"restaurants","n":"Dhaba Singh Darbar","c":"food","a":"Prem Nagar","p":"","img":"food-stall","d":"Dhaba Singh Darbar is a restaurant in Prem Nagar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJQc1lcdnVCDkRA0nOHSYwDgg"},
 {"id":46,"s":"restaurants","n":"Uss Da Dhaba","c":"food","a":"Race Course","p":"","img":"momos-2","d":"A restaurant in the Race Course area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJaQIHh5YpCTkRqbSa4XIu1Co"},
 {"id":47,"s":"restaurants","n":"Yellow Hills Uttarakhandi and Multi Cuisine Restaurant","c":"food","a":"Ajabpur Khurd","p":"","img":"cafe-benches","d":"Yellow Hills Uttarakhandi and Multi Cuisine Restaurant is a restaurant based in Ajabpur Khurd. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ68RhZ-gpCTkRuhY-4NrvI1M"},
 {"id":48,"s":"restaurants","n":"Asli Pappu Dhaba Dehradun","c":"food","a":"Malsi","p":"","img":"food-stall","d":"Asli Pappu Dhaba Dehradun is a restaurant in Malsi, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJZTHebADXCDkRQIN4cps3R9A"},
 {"id":49,"s":"restaurants","n":"USS DA DHABA PREMIUM (SAHASTRDHARA)","c":"food","a":"Chironwali","p":"","img":"momos-2","d":"A restaurant in the Chironwali area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJeTjqlGUpCTkRrGk9dTCbGLY"},
 {"id":50,"s":"markets","n":"DAKRA BAZAAR MARKET","c":"shop","a":"Garhi Cantt","p":"","img":"bazaar","d":"DAKRA BAZAAR MARKET is a market based in Garhi Cantt. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJExE5STDXCDkRNfssniDH9l8"},
 {"id":51,"s":"local-produce","n":"Pahadi Store, Dehradun","c":"shop","a":"Ballupur","p":"","img":"rice","d":"Pahadi Store, Dehradun is a shop for pahadi and local produce in Ballupur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJE9X46vwrCTkR1bJUNhwrdfA"},
 {"id":52,"s":"local-produce","n":"Pahadi Store, Dehradun","c":"shop","a":"Doon University Campus","p":"","img":"honey","d":"A shop for pahadi and local produce in the Doon University Campus area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJtYweqREpCTkRP8yRwEeikb0"},
 {"id":53,"s":"local-produce","n":"PAHADI ORGANIC HUB","c":"shop","a":"Ajabpur Khurd","p":"","img":"honey-2","d":"PAHADI ORGANIC HUB is a shop for pahadi and local produce based in Ajabpur Khurd. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJU1BqRkMpCTkRJ-6HpTjeVgs"},
 {"id":54,"s":"local-produce","n":"Pahadi brothers organic","c":"shop","a":"Ajabpur Kalan","p":"","img":"rice","d":"Pahadi brothers organic is a shop for pahadi and local produce in Ajabpur Kalan, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJXaQ2ef4pCTkR8Pnd7pPLTB4"},
 {"id":55,"s":"clothing","n":"Himalayan Weavers Dehradun","c":"shop","a":"Rajpur","p":"","img":"tailor","d":"A clothing and woollens shop in the Rajpur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJHfv4es_QCDkRKCGeEo-CK14"},
 {"id":56,"s":"clothing","n":"Urvashi Wool House","c":"shop","a":"Paltan Bazaar","p":"","img":"sewing","d":"Urvashi Wool House is a clothing and woollens shop based in Paltan Bazaar. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJvzaLx5QpCTkRhRyY4P7MzlY"},
 {"id":57,"s":"clothing","n":"Bareilly Wool Bhandar","c":"shop","a":"Paltan Bazaar","p":"","img":"tailor","d":"Bareilly Wool Bhandar is a clothing and woollens shop in Paltan Bazaar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJDVIRvZQpCTkR0UKtqSAjpuE"},
 {"id":58,"s":"clothing","n":"Tandon Wool House","c":"shop","a":"Rajender Nagar","p":"","img":"sewing","d":"A clothing and woollens shop in the Rajender Nagar area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ9YxRPvkpCTkRDQJaSyvm36c"},
 {"id":59,"s":"books-gifts","n":"The English Book Depot","c":"shop","a":"Chukkuwala","p":"","img":"cafe-reading","d":"The English Book Depot is a bookshop based in Chukkuwala. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ7R86mcEpCTkRksAYIP--Ey4"},
 {"id":60,"s":"books-gifts","n":"Book World","c":"shop","a":"Karanpur","p":"","img":"cafe-reading","d":"Book World is a bookshop in Karanpur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJjXS8OcEpCTkRTV90mNsSCmg"},
 {"id":61,"s":"books-gifts","n":"Amar Book Depot","c":"shop","a":"Paltan Bazaar","p":"","img":"cafe-reading","d":"A bookshop in the Paltan Bazaar area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJtXdbUnopCTkRBJ--zBTqYgw"},
 {"id":62,"s":"books-gifts","n":"Crossword, Unison Mall, Dehradun","c":"shop","a":"Shakti Colony","p":"","img":"cafe-reading","d":"Crossword, Unison Mall, Dehradun is a bookshop based in Shakti Colony. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJlxq3xO8pCTkRBeHIejBXcfI"},
 {"id":63,"s":"books-gifts","n":"Ramesh Book Depot","c":"shop","a":"Paltan Bazaar","p":"","img":"cafe-reading","d":"Ramesh Book Depot is a bookshop in Paltan Bazaar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ4T7Bt5QpCTkR9AcQeOveBPw"},
 {"id":64,"s":"salons","n":"Looks Divine Unisex Salon and Academy","c":"place","a":"Laxman Chowk","p":"","img":"salon","d":"A salon in the Laxman Chowk area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ_9iLJgApCTkRAxbd5Zc9BoA"},
 {"id":65,"s":"salons","n":"9 Star Unisex Salon","c":"place","a":"Indra Nagar Colony","p":"","img":"salon-2","d":"9 Star Unisex Salon is a salon based in Indra Nagar Colony. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJDZq4EDQrCTkRV_3gAxwh4vM"},
 {"id":66,"s":"salons","n":"Afreen Unisex Salon","c":"place","a":"Race Course","p":"","img":"salon","d":"Afreen Unisex Salon is a salon in Race Course, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJe03Eu7UpCTkRSEz23QpB1w8"},
 {"id":67,"s":"salons","n":"MT Unisex Salon","c":"place","a":"Dharampur","p":"","img":"salon-2","d":"A salon in the Dharampur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ6fFDGRgpCTkR1aIFVjiWUi8"},
 {"id":68,"s":"salons","n":"Colour Hair Launge Unisex Salon","c":"place","a":"Race Course","p":"","img":"salon","d":"Colour Hair Launge Unisex Salon is a salon based in Race Course. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJv_g4TJkrCTkR80mDSUh0D3Y"},
 {"id":69,"s":"barbers","n":"Shaan Salon","c":"place","a":"Balliwala","p":"","img":"barber","d":"Shaan Salon is a barber shop in Balliwala, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJQ7ailnAqCTkRX9rca2RkVLc"},
 {"id":70,"s":"barbers","n":"BOMBAY BARBER SHOP","c":"place","a":"Bhandari Bagh","p":"","img":"barbershop","d":"A barber shop in the Bhandari Bagh area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJT7_3bmXXCDkReHEMMqLhZSs"},
 {"id":71,"s":"barbers","n":"GENTLEMALE MEN'S SALON","c":"place","a":"Dharampur","p":"","img":"barber","d":"GENTLEMALE MEN'S SALON is a barber shop based in Dharampur. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJZWbXFEIpCTkR9u9pUJA3n4g"},
 {"id":72,"s":"barbers","n":"IT'S YOUR'S SALON","c":"place","a":"Chukkuwala","p":"","img":"barbershop","d":"IT'S YOUR'S SALON is a barber shop in Chukkuwala, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJYc4HQIIpCTkR3Hmb0J-Awe8"},
 {"id":73,"s":"spas","n":"Royal Spa & Salon || Spa In Dehradun","c":"place","a":"Dalanwala","p":"","img":"salon","d":"A spa and wellness centre in the Dalanwala area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJVWzNSV0pCTkRjPZ9a4QFd-M"},
 {"id":74,"s":"spas","n":"Sparsh Spa & Salon","c":"place","a":"Majra","p":"","img":"bedroom","d":"Sparsh Spa & Salon is a spa and wellness centre based in Majra. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJLzd7vCMrCTkRrViZvNliJ68"},
 {"id":75,"s":"spas","n":"The Perfect Spa in Dehradun","c":"place","a":"Ajabpur Kalan","p":"","img":"salon","d":"The Perfect Spa in Dehradun is a spa and wellness centre in Ajabpur Kalan, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ1clggSQpCTkRrHm6RBYP8xw"},
 {"id":76,"s":"spas","n":"BLISS SPA & WELLNESS CENTRE","c":"place","a":"Race Course","p":"","img":"bedroom","d":"A spa and wellness centre in the Race Course area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJi4DuXHkpCTkRpqXDuhgrfrs"},
 {"id":77,"s":"makeup","n":"The Glam House by Muskan Painuly(Best makeup artist in Dehradun)","c":"place","a":"Ajabpur Khurd","p":"","img":"salon-2","d":"The Glam House by Muskan Painuly(Best makeup artist in Dehradun) is a makeup studio based in Ajabpur Khurd. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJy8ytT34pCTkRO3hb-9DIiiY"},
 {"id":78,"s":"makeup","n":"Tanisha Semwal Makeup Studio & Academy","c":"place","a":"Dharampur","p":"","img":"barbershop","d":"Tanisha Semwal Makeup Studio & Academy is a makeup studio in Dharampur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJy4mDdgApCTkRDUYSOPIu2E4"},
 {"id":79,"s":"makeup","n":"Makeup Glam Salon & Academy","c":"place","a":"Dalanwala","p":"","img":"salon-2","d":"A makeup studio in the Dalanwala area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJpZACkA4rCTkRQyCOzoUd6Vs"},
 {"id":80,"s":"makeup","n":"Allure Makeup Studio","c":"place","a":"Dharampur","p":"","img":"barbershop","d":"Allure Makeup Studio is a makeup studio based in Dharampur. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJH0EvDT4pCTkRRf7YGkfb2sc"},
 {"id":81,"s":"pet-shops","n":"The Pet Nation","c":"place","a":"Patel Nagar","p":"","img":"corgi","d":"The Pet Nation is a pet shop in Patel Nagar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJU8YSYl4rCTkRZAiJWL7VsZE"},
 {"id":82,"s":"pet-shops","n":"Bark for love pet shop and kennel dehradun uttarakhand","c":"place","a":"Ballupur","p":"","img":"dog","d":"A pet shop in the Ballupur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJi4VXDa0pCTkR9mIbKBb8J5A"},
 {"id":83,"s":"pet-shops","n":"Pure and Sure Dog Kennel Dehradun","c":"place","a":"Laxman Chowk","p":"","img":"corgi","d":"Pure and Sure Dog Kennel Dehradun is a pet shop based in Laxman Chowk. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJwf7ov4spCTkRJsRpznMsbWU"},
 {"id":84,"s":"pet-shops","n":"Bark N Bite Pet Shop","c":"place","a":"Khurbura Mohalla","p":"","img":"dog","d":"Bark N Bite Pet Shop is a pet shop in Khurbura Mohalla, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJVy0Fd5IpCTkR_tWsStki8l4"},
 {"id":85,"s":"vets","n":"PetCuro Hospital & Surgery (V Care Pet Clinic)","c":"place","a":"Race Course","p":"","img":"dog-2","d":"A veterinary clinic in the Race Course area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJlwuFCc7XCDkR9uX1s9RihN0"},
 {"id":86,"s":"vets","n":"Alpha-Vets Pet Clinic","c":"place","a":"Kaonli","p":"","img":"dog","d":"Alpha-Vets Pet Clinic is a veterinary clinic based in Kaonli. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJTc-Nq0srCTkRjLDnebX0-bg"},
 {"id":87,"s":"vets","n":"Pet Medics Veterinary Care & Diagnostic Centre","c":"place","a":"Rajender Nagar","p":"","img":"dog-2","d":"Pet Medics Veterinary Care & Diagnostic Centre is a veterinary clinic in Rajender Nagar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJF3jFGL4pCTkRWrl5ZJwWNy4"},
 {"id":88,"s":"vets","n":"PET+ Complete Veterinary Care & Pet Dermatology Centre","c":"place","a":"Race Course","p":"","img":"dog","d":"A veterinary clinic in the Race Course area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJd55_-9YpCTkRQBdSmCKuAuc"},
 {"id":89,"s":"pet-shops","n":"Oh My Pets - Pet Store","c":"place","a":"Kanwali","p":"","img":"corgi","d":"Oh My Pets - Pet Store is a pet shop based in Kanwali. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJlx4LpBwrCTkRsPYEClGJIQw"},
 {"id":90,"s":"pet-grooming","n":"Happy Tails pet grooming salon","c":"place","a":"Rajender Nagar","p":"","img":"dog","d":"Happy Tails pet grooming salon is a pet grooming service in Rajender Nagar, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJMRTQsoYrCTkRbdqj23C18-I"},
 {"id":91,"s":"pet-grooming","n":"GROOMING TALES","c":"place","a":"Danda Lakhond","p":"","img":"corgi","d":"A pet grooming service in the Danda Lakhond area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJibTZIG_XCDkRF8SbkoMzNng"},
 {"id":92,"s":"gyms","n":"Narsimha Gym & Fitness Dehradun","c":"place","a":"Laxman Chowk","p":"","img":"gym","d":"Narsimha Gym & Fitness Dehradun is a gym based in Laxman Chowk. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ1W3pVVspCTkR9_y0x7AVW8s"},
 {"id":93,"s":"gyms","n":"Iconic Luxury Gyms, Dehradun","c":"place","a":"Pul","p":"","img":"run","d":"Iconic Luxury Gyms, Dehradun is a gym in Pul, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJx5bn-3gpCTkRqSADzia_T_0"},
 {"id":94,"s":"gyms","n":"BHARAT GYMS","c":"place","a":"Laxman Chowk","p":"","img":"gym","d":"A gym in the Laxman Chowk area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJA3aWyMwpCTkRU4ATjrycqE8"},
 {"id":95,"s":"gyms","n":"Fitness Solutions","c":"place","a":"Laxman Chowk","p":"","img":"run","d":"Fitness Solutions is a gym based in Laxman Chowk. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJRab-howpCTkRelpYiVCXFzM"},
 {"id":96,"s":"yoga","n":"Soulasana Yogshala","c":"place","a":"Laxman Chowk","p":"","img":"yoga","d":"Soulasana Yogshala is a yoga studio in Laxman Chowk, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJR_wG-yApCTkRP7RpXsM4CD4"},
 {"id":97,"s":"yoga","n":"ASHTANGA YOGA AND WELLNESS CENTER","c":"place","a":"Mohit Nagar","p":"","img":"yoga","d":"A yoga studio in the Mohit Nagar area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ0Zkg5BkqCTkRH_ryerWKl3Q"},
 {"id":98,"s":"yoga","n":"Kewalya Yoga & Ayurveda Studio","c":"place","a":"Chowk","p":"","img":"yoga","d":"Kewalya Yoga & Ayurveda Studio is a yoga studio based in Chowk. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJQUPps0UpCTkRGbWIoVDpnGE"},
 {"id":99,"s":"yoga","n":"IN Yoga Studio","c":"place","a":"Race Course","p":"","img":"yoga","d":"IN Yoga Studio is a yoga studio in Race Course, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJUxMSSY0pCTkRzph4dmtq3m8"},
 {"id":100,"s":"coaching","n":"VIJAY ACADEMY DEHRADUN","c":"place","a":"Chironwali","p":"","img":"corridor","d":"A coaching institute in the Chironwali area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJXyQAus4pCTkR6EnD58XfNpA"},
 {"id":101,"s":"coaching","n":"Mahendra's Institute - Dehradun for Banking SSC State Exam Railway Teaching and CUET","c":"place","a":"Bhandari Bagh","p":"","img":"corridor","d":"Mahendra's Institute - Dehradun for Banking SSC State Exam Railway Teaching and CUET is a coaching institute based in Bhandari Bagh. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJv83fB4glDzkRdQeud8UpiPc"},
 {"id":102,"s":"coaching","n":"TIME - A leading National Coaching for CAT in Doon","c":"place","a":"Race Course","p":"","img":"corridor","d":"TIME - A leading National Coaching for CAT in Doon is a coaching institute in Race Course, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJN67xOcEpCTkRjWC0I-LAfmE"},
 {"id":103,"s":"coaching","n":"CHOICE COACHING INSTITUTE","c":"place","a":"Kaulagarh","p":"","img":"corridor","d":"A coaching institute in the Kaulagarh area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJdUNvbCTVCDkR8szrx-yUsOw"},
 {"id":104,"s":"nature","n":"Junu Waterfall","c":"place","a":"Kyar Kuli Bhatta","p":"","img":"forest","d":"Junu Waterfall is a nature spot based in Kyar Kuli Bhatta. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJpdrHzErRCDkRXKoiz1KtLN4"},
 {"id":105,"s":"spiritual","n":"Shri Sanatan Dharam Mandir","c":"place","a":"Dharampur","p":"","img":"monastery","d":"Shri Sanatan Dharam Mandir is a temple in Dharampur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJM_Cg_qcpCTkR29vdMGg_3Pk"},
 {"id":106,"s":"spiritual","n":"Bala Sundari Mandir","c":"place","a":"Jakhan","p":"","img":"mountain","d":"A temple in the Jakhan area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJrzaTE9LXCDkRfvfQ86B2Igw"},
 {"id":107,"s":"nature","n":"Hidden paradise","c":"place","a":"Malsi","p":"","img":"mountain","d":"Hidden paradise is a nature spot based in Malsi. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJLRd3DZDXCDkRn9X-OTmg8qU"},
 {"id":108,"s":"nature","n":"City forest Dehradun","c":"place","a":"Gujrara Mansingh","p":"","img":"river","d":"City forest Dehradun is a nature spot in Gujrara Mansingh, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJhYPJZgDXCDkRF5wR4f1LnHU"},
 {"id":109,"s":"hotels","n":"Clarks Inn Express, Dehradun","c":"place","a":"Karanpur","p":"","img":"hotel-room","d":"A hotel in the Karanpur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ05jRVeQpCTkRwMeWWQu3VZQ"},
 {"id":110,"s":"hotels","n":"Ramada by Wyndham","c":"place","a":"Khurbura Mohalla","p":"","img":"bedroom","d":"Ramada by Wyndham is a hotel based in Khurbura Mohalla. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJd-GSSfgpCTkRjsoP09V3I-U"},
 {"id":111,"s":"hotels","n":"Fairfield by Marriott Dehradun","c":"place","a":"Malsi","p":"","img":"hotel-room","d":"Fairfield by Marriott Dehradun is a hotel in Malsi, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJG2p_WvrXCDkRO3uD4MN708w"},
 {"id":112,"s":"hotels","n":"Sterling Marbella Dehradun","c":"place","a":"Hathibarkala Salwala","p":"","img":"bedroom","d":"A hotel in the Hathibarkala Salwala area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJHSdwyHYpCTkRMDNCOZLJYqE"},
 {"id":113,"s":"pg-hostels","n":"Unitas Home – Girls & Boys PG/Hostel","c":"place","a":"Patthri Bagh","p":"","img":"bedroom","d":"Unitas Home – Girls & Boys PG/Hostel is a PG and hostel based in Patthri Bagh. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJUbhQ1c8pCTkRyuZyIP3VW2k"},
 {"id":114,"s":"pg-hostels","n":"Vicky Singh PG HOSTEL for BOYS","c":"place","a":"Karanpur","p":"","img":"bedroom","d":"Vicky Singh PG HOSTEL for BOYS is a PG and hostel in Karanpur, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJi0zb_p8pCTkRAOBqTS-ef8c"},
 {"id":115,"s":"pg-hostels","n":"NITIN PG / Hostel","c":"place","a":"Ballupur","p":"","img":"bedroom","d":"A PG and hostel in the Ballupur area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJnfJr7P8rCTkRMBkd-E7Bi6Y"},
 {"id":116,"s":"tailors","n":"Kay Sons Tailor","c":"place","a":"Paltan Bazaar","p":"","img":"tailor","d":"Kay Sons Tailor is a tailor based in Paltan Bazaar. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ_Wi25rApCTkRdntwyMRg6NM"},
 {"id":117,"s":"tailors","n":"ANU LADIES FASHION","c":"place","a":"Jhanda Mohalla","p":"","img":"sewing","d":"ANU LADIES FASHION is a tailor in Jhanda Mohalla, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJ0Tz1Qj0rCTkRkEULRVJSIAg"},
 {"id":118,"s":"tailors","n":"VIKAS TAILORS","c":"place","a":"Patel Nagar","p":"","img":"tailor","d":"A tailor in the Patel Nagar area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJP_ccrcIpCTkRO3cgG16zIdI"},
 {"id":119,"s":"events","n":"Photoklicker Photography-Best Wedding and Pre Wedding Photographers in Dehradun","c":"place","a":"Race Course","p":"","img":"cafe-signs","d":"Photoklicker Photography-Best Wedding and Pre Wedding Photographers in Dehradun is a photography studio based in Race Course. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJm6m_GnApCTkRZJ19YROSMgU"},
 {"id":120,"s":"events","n":"Shri Ram Wedding Photography","c":"place","a":"Kedar Puram","p":"","img":"hotel-room","d":"Shri Ram Wedding Photography is a photography studio in Kedar Puram, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJceve7R8pCTkRg3KWTW8T6Ds"},
 {"id":121,"s":"events","n":"THE WEDDING ARCHIES by Prashant & Tejasvi","c":"place","a":"Race Course","p":"","img":"cafe-signs","d":"A photography studio in the Race Course area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJwxMwneopCTkR6JTqN7W9xic"},
 {"id":122,"s":"libraries","n":"Work and Study Co.","c":"place","a":"Vijay Park Extension","p":"","img":"cafe-reading","d":"Work and Study Co. is a library and study space based in Vijay Park Extension. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJCX4x6lkrCTkRtk8zRcw6aMU"},
 {"id":123,"s":"libraries","n":"Eklavya Modern Library","c":"place","a":"Kaonli","p":"","img":"corridor","d":"Eklavya Modern Library is a library and study space in Kaonli, Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJLTbtI8UrCTkR0PPP_QrP0Ss"},
 {"id":124,"s":"libraries","n":"Lakshya Library","c":"place","a":"Kaonli","p":"","img":"cafe-reading","d":"A library and study space in the Kaonli area of Dehradun. Details on this listing have not been verified yet. If this is your business, claim it to add photos, timings and offers.","u":1,"g":"ChIJkWngNjcrCTkReGz8eteIGyA"},
 /* education — t = institution type, gov = government-run, est = year founded, web = official website. Checked Oct 2026. */
 {"id":125,"s":"universities","n":"Doon University","c":"edu","a":"Kedarpur","p":"","img":"w-doonu","d":"Undergraduate, postgraduate and doctoral programmes across sciences, social sciences, management, languages and more.","t":"State university · Government","gov":1,"est":"2005","web":"https://www.doonuniversity.org","g":"ChIJKwehvzkpCTkRq4o-P68U9DY"},
 {"id":126,"s":"universities","n":"Veer Madho Singh Bhandari Uttarakhand Technical University","c":"edu","a":"Sudhowala, Chakrata Road","p":"","img":"fri","d":"The state’s technical university, which affiliates engineering, pharmacy and management colleges across Uttarakhand.","t":"State technical university · Government","gov":1,"web":"https://uktech.ac.in"},
 {"id":127,"s":"universities","n":"HNB Uttarakhand Medical Education University","c":"edu","a":"Dehradun","p":"","img":"corridor","d":"The state university for medical, nursing and paramedical education in Uttarakhand.","t":"State medical university · Government","gov":1,"est":"2014"},
 {"id":128,"s":"universities","n":"Uttarakhand Ayurved University","c":"edu","a":"Harrawala","p":"","img":"fri","d":"Programmes in Ayurveda, yoga and allied health sciences.","t":"State university · Government","gov":1,"est":"2009"},
 {"id":129,"s":"universities","n":"Forest Research Institute (Deemed University)","c":"edu","a":"Chakrata Road","p":"","img":"w-fri","d":"Postgraduate and doctoral programmes in forestry, environment and related sciences, on the historic FRI campus. Deemed university status since 1991.","t":"Deemed university · Government","gov":1,"est":"1906"},
 {"id":130,"s":"universities","n":"Graphic Era (Deemed to be University)","c":"edu","a":"Bell Road, Clement Town","p":"","img":"w-geu","d":"Engineering, computer applications, management, sciences and more. Deemed university status since 2008.","t":"Deemed university · Private","gov":0,"est":"1993","web":"https://www.geu.ac.in"},
 {"id":131,"s":"universities","n":"Swami Rama Himalayan University","c":"edu","a":"Jolly Grant","p":"","img":"corridor","d":"Medical, nursing, engineering, management and allied health programmes. Deemed university status since 2007.","t":"Deemed university · Private","gov":0,"est":"1989"},
 {"id":132,"s":"universities","n":"UPES","c":"edu","a":"Bidholi, Prem Nagar","p":"","img":"fri","d":"Engineering, computer science, law, business, design, health sciences and more.","t":"Private university","gov":0,"est":"2003","web":"https://www.upes.ac.in","g":"ChIJNRd8DYnUCDkRPI4jTDKu0yI"},
 {"id":133,"s":"universities","n":"Graphic Era Hill University","c":"edu","a":"Clement Town","p":"","img":"corridor","d":"Engineering, management, computer applications, sciences and humanities.","t":"Private university","gov":0,"web":"https://www.gehu.ac.in","g":"ChIJ88zAP8orCTkR7tskjN4AmdE"},
 {"id":134,"s":"universities","n":"Uttaranchal University","c":"edu","a":"Prem Nagar","p":"","img":"fri","d":"Law, engineering, management, pharmacy, agriculture and more.","t":"Private university","gov":0,"est":"2013","web":"https://uudoon.in","g":"ChIJt-8EImHVCDkRcXKwVx4x714"},
 {"id":135,"s":"universities","n":"DIT University","c":"edu","a":"Mussoorie Diversion Road","p":"","img":"w-dit","d":"Engineering, architecture, computing, management and sciences.","t":"Private university","gov":0,"est":"2013","web":"https://www.dituniversity.edu.in","g":"ChIJpSjxAwbXCDkRhHl5x_m4mzU"},
 {"id":136,"s":"universities","n":"The ICFAI University, Dehradun","c":"edu","a":"Selaqui","p":"","img":"fri","d":"Law, management, technology and other programmes.","t":"Private university","gov":0,"est":"2003","g":"ChIJn5DQmdopCTkRcVYnBNqPaU4"},
 {"id":137,"s":"universities","n":"IMS Unison University","c":"edu","a":"Mussoorie Diversion Road","p":"","img":"corridor","d":"Management, law, mass communication, hospitality and more.","t":"Private university","gov":0,"est":"2013","g":"ChIJm6wROA_XCDkRTXKqRzqZNPk"},
 {"id":138,"s":"universities","n":"Shri Guru Ram Rai University","c":"edu","a":"Patel Nagar","p":"","img":"fri","d":"Medical and health sciences, nursing, sciences, humanities, commerce and more.","t":"Private university","gov":0,"est":"2017","g":"ChIJm4Crlf4rCTkRHbZITTV13HI"},
 {"id":139,"s":"universities","n":"Dev Bhoomi Uttarakhand University","c":"edu","a":"Manduwala, Chakrata Road","p":"","img":"corridor","d":"Engineering, management, pharmacy, hospitality and more.","t":"Private university","gov":0,"g":"ChIJq5KkMKLVCDkRWZEc_cZQgkE"},
 {"id":140,"s":"universities","n":"Jigyasa University (formerly Himgiri Zee University)","c":"edu","a":"Sherpur, Chakrata Road","p":"","img":"fri","d":"Undergraduate and postgraduate programmes across several streams.","t":"Private university","gov":0,"est":"2003","g":"ChIJhVADqHwqDzkR1nXPUfR94Kk"},
 {"id":141,"s":"universities","n":"Tulas University","c":"edu","a":"Dhoolkot, Chakrata Road","p":"","img":"corridor","d":"Engineering, management, computer applications and more.","t":"Private university","gov":0,"g":"ChIJdYJTdPopCTkR4x1pjEJXtzw"},
 {"id":142,"s":"universities","n":"Shivalik University","c":"edu","a":"Sherpur, Shimla Bypass Road","p":"","img":"fri","d":"Undergraduate and postgraduate programmes.","t":"Private university","gov":0,"g":"ChIJe6awlXAqDzkRmWLive9ULww"},
 {"id":143,"s":"colleges","n":"D.A.V. (P.G.) College","c":"edu","a":"Karanpur","p":"","img":"fri","d":"One of Dehradun’s oldest and largest degree colleges, offering undergraduate and postgraduate courses in arts, science and commerce.","t":"Government-aided college","gov":1,"web":"http://davpgcollege.in/","g":"ChIJsa3P18gpCTkRGYZEHhQ8mvU"},
 {"id":144,"s":"colleges","n":"D.B.S. (P.G.) College","c":"edu","a":"Karanpur Road","p":"","img":"corridor","d":"Undergraduate and postgraduate courses in arts, science and commerce.","t":"Government-aided college","gov":1,"web":"https://dbscollegedehradun.in","g":"ChIJt1etwcspCTkR7MPGs167M8Y"},
 {"id":145,"s":"colleges","n":"M.K.P. (P.G.) College","c":"edu","a":"New Road, Race Course","p":"","img":"fri","d":"A women’s college offering undergraduate and postgraduate courses.","t":"Government-aided women’s college","gov":1,"web":"https://mkpcollege.in","g":"ChIJM_KiL74pCTkRD3-LhuOjpxc"},
 {"id":146,"s":"colleges","n":"SGRR University, Pathribagh Campus","c":"edu","a":"Patthri Bagh","p":"","img":"corridor","d":"Campus of Shri Guru Ram Rai University offering undergraduate and postgraduate courses.","t":"University campus · Private","gov":0,"g":"ChIJ4Ywhjm0pCTkRGlsESf6le9U"},
 {"id":147,"s":"colleges","n":"D.D. College","c":"edu","a":"Garhi Cantt","p":"","img":"fri","d":"Undergraduate courses.","t":"Private college","gov":0,"g":"ChIJBUXAdI_VCDkREHE4YaJM7EM"},
 {"id":148,"s":"medical","n":"Government Doon Medical College","c":"edu","a":"Patel Nagar","p":"","img":"corridor","d":"The state government medical college in Dehradun, with the Doon Hospital as its teaching hospital.","t":"Government medical college","gov":1},
 {"id":149,"s":"medical","n":"Himalayan Institute of Medical Sciences","c":"edu","a":"Jolly Grant","p":"","img":"corridor","d":"Medical college and hospital of Swami Rama Himalayan University.","t":"Private medical college","gov":0},
 {"id":150,"s":"medical","n":"SGRR Institute of Medical & Health Sciences","c":"edu","a":"Patel Nagar","p":"","img":"corridor","d":"Medical college attached to Shri Mahant Indiresh Hospital and Shri Guru Ram Rai University.","t":"Private medical college","gov":0},
 {"id":151,"s":"engineering","n":"Government Polytechnic, Dehradun","c":"edu","a":"Dehradun","p":"","img":"fri","d":"Diploma programmes in engineering and technology.","t":"Government polytechnic","gov":1},
 {"id":152,"s":"engineering","n":"Institute of Technology & Management (ITM)","c":"edu","a":"Chakrata Road","p":"","img":"corridor","d":"Technology, management and computer application courses.","t":"Private college","gov":0,"g":"ChIJI1YwaPApCTkRh52lkH5dBE4"},
 {"id":153,"s":"engineering","n":"JB Institute of Technology (JBIT)","c":"edu","a":"Shankarpur, Chakrata Road","p":"","img":"fri","d":"Engineering, management and allied courses.","t":"Private engineering college","gov":0,"g":"ChIJTWS4-XkpDzkRANanUmwMGXU"},
 {"id":154,"s":"engineering","n":"Doon College of Management and Technology","c":"edu","a":"Nehru Colony","p":"","img":"corridor","d":"Management and technology courses.","t":"Private college","gov":0,"g":"ChIJnb2-YQI7CTkRu1WYkgi1Vmc"},
 {"id":155,"s":"engineering","n":"HIT Dehradun","c":"edu","a":"Haridwar Road, Nehru Colony","p":"","img":"fri","d":"Management, hotel management, BBA, BCA, IT and allied courses.","t":"Private college","gov":0,"g":"ChIJMWAR2qYpCTkR43ypJD4Qx-Y"},
 {"id":156,"s":"institutes","n":"Indian Military Academy","c":"edu","a":"Prem Nagar, Chakrata Road","p":"","img":"forest","d":"The Indian Army’s officer training academy. Entry is restricted; the campus is not open to casual visitors.","t":"Government · Indian Army","gov":1,"est":"1932"},
 {"id":157,"s":"institutes","n":"Wildlife Institute of India","c":"edu","a":"Chandrabani","p":"","img":"fri","d":"National institute for wildlife research, training and conservation.","t":"Government research institute","gov":1,"web":"https://wii.gov.in"},
 {"id":158,"s":"institutes","n":"Wadia Institute of Himalayan Geology","c":"edu","a":"General Mahadeo Singh Road","p":"","img":"w-wihg","d":"National institute for research on the geology of the Himalaya.","t":"Government research institute","gov":1},
 {"id":159,"s":"institutes","n":"CSIR–Indian Institute of Petroleum","c":"edu","a":"Mohkampur, Haridwar Road","p":"","img":"fri","d":"National laboratory for petroleum and energy research.","t":"Government research institute · CSIR","gov":1},
 {"id":160,"s":"institutes","n":"Indian Institute of Remote Sensing","c":"edu","a":"Kalidas Road","p":"","img":"forest","d":"ISRO’s institute for training and research in remote sensing and geospatial technology.","t":"Government institute · ISRO","gov":1,"web":"https://www.iirs.gov.in"},
 {"id":161,"s":"institutes","n":"Indira Gandhi National Forest Academy","c":"edu","a":"New Forest, Chakrata Road","p":"","img":"w-ignfa","d":"Training academy for officers of the Indian Forest Service.","t":"Government training academy","gov":1}
];

window.GEMS = [
 {n:"Robber’s Cave",alt:"Guchhupani · 8 km",img:"w-robbers",d:"A narrow river gorge where the stream vanishes underground and returns. Walk it barefoot.",best:"8 am",tip:"Arrive early. The tea stalls at the entrance open around nine.",post:"robbers-cave-guide"},
 {n:"Tapkeshwar Temple",alt:"Garhi Cantt · cave shrine",img:"w-tapkeshwar",d:"Water drips onto the Shivling inside a cave by the river.",best:"Morning",tip:"Visit on a weekday to avoid queues."},
 {n:"Lachhiwala",alt:"22 km · forest pools",img:"mountain",d:"Shallow forest pools and sal trees, best for a quiet weekday picnic.",best:"Weekday",tip:"Carry your own food and take your trash back."},
 {n:"Mussoorie road views",alt:"Up to 2,000 m",img:"ropeway",d:"The drive up past Kolhukhet for the clearest views over the valley.",best:"Winter morning",tip:"Clear skies after rain give the best views."},
 {n:"Malsi foothills",alt:"700 m · deer park",img:"w-zoo",d:"Gentle slopes and shaded walks on the way to Mussoorie.",best:"Afternoon",tip:"Stop at a roadside Maggi point on the way back."}
];

window.HOODS = [
 {n:"Rajpur Road",d:"Cafés, bakeries and old bungalows",img:"rajpur-road"},
 {n:"Paltan Bazaar",d:"The old market and street food",img:"w-paltan2"},
 {n:"Clock Tower",d:"The heart of the city",img:"w-clock"},
 {n:"Sahastradhara Road",d:"Rivers, springs and Maggi points",img:"sahastradhara"},
 {n:"Clement Town",d:"Monastery and Tibetan quarter",img:"aerial"}
];

window.SCHOOLS = [
 {n:"The Doon School",img:"w-doonschool",a:"Chakrata Road",board:"IB / ISC",type:"Boarding",g:"Boys",d:"Founded in 1935 on the Chandbagh estate."},
 {n:"Welham Girls’ School",a:"Dalanwala",board:"ICSE / ISC",type:"Boarding",g:"Girls",d:"One of India’s best-known girls’ boarding schools."},
 {n:"Welham Boys’ School",a:"Dalanwala",board:"CBSE",type:"Boarding",g:"Boys",d:"Boarding school in the heart of the city."},
 {n:"Selaqui International School",a:"Selaqui",board:"CBSE",type:"Boarding",g:"Co-ed",d:"Large residential campus west of the city."},
 {n:"St. Joseph’s Academy",a:"Rajpur Road",board:"ICSE / ISC",type:"Day",g:"Boys",d:"Long-established day school on Rajpur Road."},
 {n:"Rashtriya Indian Military College (RIMC)",a:"Garhi Cantt",board:"CBSE",type:"Boarding",g:"Boys",d:"Founded in 1922, run by the Ministry of Defence; prepares cadets for the armed forces."},
 {n:"The Asian School",a:"Rajpur Road",board:"CBSE",type:"Day & boarding",g:"Co-ed",d:"Day and boarding options for all ages."}
];

window.SHOP = [
 {id:"s1",n:"Doon Basmati Rice",m:"Valley farms · 1 kg",p:240,img:"rice"},
 {id:"s2",n:"Wild Litchi Honey",m:"Raipur apiary · 500 g",p:420,img:"honey"},
 {id:"s3",n:"Bakery Rusk Tin",m:"Old-style bakery · 400 g",p:260,img:"rusk"},
 {id:"s4",n:"Pahadi Masala Chai",m:"Hill blend · 250 g",p:320,img:"chai"},
 {id:"s5",n:"Raw Forest Honey",m:"Shivalik foragers · 250 g",p:360,img:"honey-2"},
 {id:"s6",n:"Stoneware Chai Cups",m:"Local studio · set of 4",p:899,img:"cups"},
 {id:"s7",n:"Mandua Sourdough",m:"Finger-millet loaf",p:180,img:"bread"},
 {id:"s8",n:"Doon Valley Print",m:"A3 art print",p:599,img:"valley-hills"}
];

/* Blog posts. Body blocks: {p}, {h}, {q} quote, {tip}, {img, cap} */
window.POSTS = [
 {slug:"48-hours-in-dehradun",seo:"48 Hours in Dehradun: A 2-Day Itinerary (2026)",t:"48 hours in Dehradun",cat:"Guides",min:8,date:"20 Oct 2026",img:"hero-valley",
  ex:"Two days, one valley. Bakeries at breakfast, a river gorge before lunch, momos by the Clock Tower and a sunset up the Mussoorie road.",
  body:[
   {p:"Dehradun rewards people who slow down. The city is small enough to cross in half an hour, but every road out of it leads somewhere worth stopping: a river, a monastery, a bakery that has been doing the same thing well for decades. Here is how to fit the best of it into a weekend."},
   {h:"Day one: the city"},
   {p:"Start on Rajpur Road with tea and something baked. Walk north while the road is still quiet, then take an auto to the Forest Research Institute. Give the campus at least two hours. The main building is the famous one, but the walks between the museums are the part people remember."},
   {img:"fri",cap:"The forest campus is best in the morning, before the tour groups."},
   {p:"Head back towards the Clock Tower for a late lunch, then spend the afternoon in Paltan Bazaar. Buy basmati and woollens, eat a bun-tikki, and finish with momos from one of the carts near Ghanta Ghar."},
   {q:"Every road out of Dehradun leads somewhere worth stopping."},
   {h:"Day two: water and hills"},
   {p:"Leave early for Robber’s Cave. By 8 am you will have the gorge almost to yourself. On the way back, stop at Tapkeshwar Temple, then rest through the afternoon in a Rajpur Road café."},
   {p:"Before dark, drive up the Mussoorie road for the view back over the valley. On a clear evening you can see the city lights spread out below like a second sky."},
   {tip:"Plan the hills for the morning after rain. The air is clearest then and the views go all the way to the plains."}
  ]},
 {slug:"rajpur-road-walk",seo:"Rajpur Road Dehradun on Foot: Cafés, Bakeries and Sights",t:"Rajpur Road, end to end, on foot",cat:"Walks",min:6,date:"14 Oct 2026",img:"rajpur-road",
  ex:"Nine kilometres from the Clock Tower to the foot of the Mussoorie road. Bakeries, Tibetan kitchens and old bungalows on the way.",
  body:[
   {p:"Rajpur Road runs about nine kilometres from the Clock Tower to Rajpur village, where the old bridle path to Mussoorie begins. It is the city’s main street, its café strip and, for most of its length, a gentle climb. Start early and walk north."},
   {h:"The busy stretch"},
   {p:"The first two kilometres are showrooms, banks and bakeries. Stop for rusks or cheese straws, then keep going. Traffic thins out after Dilaram Chowk."},
   {h:"Bungalows and kitchens"},
   {p:"The middle of the road is where Dehradun still looks like old Dehradun: deep verandas, tall trees and gates with brass name plates. Tibetan kitchens and small cafés sit between them."},
   {img:"cafe-latte",cap:"Plenty of places to stop for coffee along the way."},
   {q:"The road climbs gently the whole way, so the walk back down is the easy part."},
   {h:"The finish"},
   {p:"At Rajpur the road narrows and the hills close in. Have a last chai, then take a shared cab back down."},
   {tip:"Walk on a weekday morning. Weekend afternoons bring heavy traffic to the lower half."}
  ]},
 {slug:"paltan-bazaar-food",seo:"Paltan Bazaar Street Food: Bun Tikki, Momos and Chai",t:"A bun-tikki crawl through Paltan Bazaar",cat:"Food",min:4,date:"8 Oct 2026",img:"food-stall",
  ex:"The thelas come out after 6 pm. Here’s what to eat, in what order, and how to leave room for chai.",
  body:[
   {p:"Paltan Bazaar is busiest after 6 pm, which is exactly when the thelas come out. The market runs downhill from the Clock Tower in a tangle of lanes, and the food follows the crowds."},
   {h:"Start with bun-tikki"},
   {p:"Bun-tikki is the local favourite: a soft bun split open, a crisp potato tikki, onions and green chutney. It is cheap, fast and very easy to eat two of."},
   {h:"Then momos"},
   {p:"Walk back up towards Ghanta Ghar for momos. Steamed is the classic; fried is the indulgence. The red chutney is the real test."},
   {img:"momos",cap:"Steamed or fried, the chutney is the deciding factor."},
   {q:"Go hungry, carry change, and leave room for chai."},
   {p:"Finish with a kulhad of chai and a slow walk through the woollens lanes."},
   {tip:"Most carts take UPI now, but keep some cash for the smaller stalls."}
  ]},
 {slug:"choosing-school-dehradun",seo:"Day School or Boarding? How to Choose a School in Dehradun",t:"Day school or boarding? Choosing a school in Dehradun",cat:"Schools",min:7,date:"1 Oct 2026",img:"corridor",
  ex:"Dehradun has some of India’s best-known schools. A simple way to compare boards, campuses and costs.",
  body:[
   {p:"Dehradun has some of India’s best-known boarding schools and many strong day schools. For parents, the choice can feel overwhelming. A few questions, asked in the right order, make it much simpler."},
   {h:"Start with the board"},
   {p:"CBSE, ICSE/ISC and IB lead to different styles of teaching and assessment. Decide which suits your child before you compare campuses."},
   {h:"Then distance and boarding"},
   {p:"A day school close to home means more time as a family. Boarding offers structure and independence. Be honest about which your child will thrive in."},
   {q:"Visit in term time. An empty campus tells you very little."},
   {h:"Ask about the full cost"},
   {p:"Fee structures differ a lot. Ask for the full annual cost in writing, including boarding, uniforms, trips and activities."},
   {tip:"Talk to parents of current students. They will tell you what the brochure doesn’t."}
  ]},
 {slug:"robbers-cave-guide",seo:"Robbers Cave Dehradun (Guchhupani): Best Time and Tips",t:"Robber’s Cave, before the crowds",cat:"Hidden gems",min:5,date:"24 Sep 2026",img:"river",
  ex:"A narrow river gorge eight kilometres from the city. Go at 8 am and you’ll have it almost to yourself.",
  body:[
   {p:"Guchhupani, better known as Robber’s Cave, is a narrow river gorge about 8 km from the city centre. The stream disappears underground and comes back up further along, and the rock walls close in overhead."},
   {h:"When to go"},
   {p:"Arrive by 8 am. By late morning the gorge fills with families and school groups."},
   {img:"sahastradhara",cap:"The cold water is the best part on a summer morning."},
   {h:"What to wear"},
   {p:"Wear sandals you don’t mind getting wet and roll up your trousers. The water is ankle to knee deep in most places."},
   {q:"Walk to the far end. Most people turn back halfway."},
   {tip:"The tea stalls at the entrance open around nine. Have breakfast there on the way out."}
  ]},
 {slug:"litchi-season",seo:"Dehradun Litchi Season: When and Where to Buy (2026)",t:"Litchi season: when and where",cat:"Seasonal",min:3,date:"18 Sep 2026",img:"valley-hills",
  ex:"Late May to June, the orchards turn red. How to buy the best Dehradun litchis straight from the tree.",
  body:[
   {p:"Dehradun litchis ripen from late May to June. For a few weeks the orchards around the city turn red, and the fruit sellers move to every corner."},
   {h:"Where to buy"},
   {p:"Orchards around Rajpur, Raipur and Vikasnagar sell at the gate in good years. The fruit is sweeter and fresher than anything in the market."},
   {q:"Buy them on the branch, eat them the same day."},
   {tip:"Ask the orchard owner which trees are the oldest. They usually give the best fruit."}
  ]}
];

/* ---------------------------------------------------------------------
   SECTIONS → SUB-CATEGORIES
   Every place above has s:"<sub-category id>". Add new sub-categories here
   and they appear on the Explore pages automatically.
   --------------------------------------------------------------------- */
window.SECTIONS = [
 {id:"food",name:"Food & Drink",img:"momos",blurb:"Street carts, bakeries, cafés and family kitchens. This is where Dehradun eats.",subs:[
   {id:"street-food",name:"Street food",img:"food-stall"},
   {id:"cafes",name:"Cafés",img:"cafe-bulbs"},
   {id:"bakeries",name:"Bakeries & desserts",img:"bakery"},
   {id:"restaurants",name:"Restaurants & dhabas",img:"momos-2"}]},
 {id:"shopping",name:"Shopping",img:"bazaar",blurb:"Old bazaars, pahadi produce, woollens and small shops worth the detour.",subs:[
   {id:"markets",name:"Markets & bazaars",img:"bazaar"},
   {id:"local-produce",name:"Pahadi & local produce",img:"rice"},
   {id:"clothing",name:"Clothing & woollens",img:"tailor"},
   {id:"books-gifts",name:"Books & gifts",img:"cafe-reading"}]},
 {id:"grooming",name:"Grooming & Beauty",img:"salon",blurb:"Salons, barbers, spas and makeup artists across the city.",subs:[
   {id:"salons",name:"Salons",img:"salon-2"},
   {id:"barbers",name:"Barbers",img:"barber"},
   {id:"spas",name:"Spas & wellness",img:"salon"},
   {id:"makeup",name:"Makeup artists",img:"barbershop"}]},
 {id:"pets",name:"For Pets",img:"dog",blurb:"Pet shops, vets, groomers and cafés that welcome your dog.",subs:[
   {id:"pet-shops",name:"Pet shops",img:"corgi"},
   {id:"vets",name:"Vets & pet clinics",img:"dog-2"},
   {id:"pet-grooming",name:"Pet grooming",img:"dog"},
   {id:"pet-friendly",name:"Pet-friendly cafés",img:"cafe-plants"}]},
 {id:"health",name:"Health & Fitness",img:"yoga",blurb:"Gyms, yoga studios and the best places to run in the valley.",subs:[
   {id:"gyms",name:"Gyms",img:"gym"},
   {id:"yoga",name:"Yoga & meditation",img:"yoga"},
   {id:"running",name:"Running & sports",img:"run"}]},
 {id:"education",name:"Education",img:"fri",blurb:"Dehradun’s schools, universities, colleges, national institutes, coaching centres and study spaces, with the type of each institution clearly marked.",subs:[
   {id:"schools",name:"Schools",img:"fri"},
   {id:"universities",name:"Universities",img:"corridor"},
   {id:"colleges",name:"Degree colleges",img:"fri"},
   {id:"medical",name:"Medical & health sciences",img:"corridor"},
   {id:"engineering",name:"Engineering & management",img:"fri"},
   {id:"institutes",name:"National institutes & academies",img:"forest"},
   {id:"coaching",name:"Coaching & tuition",img:"corridor"},
   {id:"libraries",name:"Libraries & study spaces",img:"cafe-reading"}]},
 {id:"places",name:"Places to Visit",img:"monastery",blurb:"Landmarks, temples, rivers and the hidden spots locals love.",subs:[
   {id:"attractions",name:"Landmarks",img:"fri"},
   {id:"hidden-gems",name:"Hidden gems",img:"river"},
   {id:"spiritual",name:"Temples & monasteries",img:"monastery"},
   {id:"nature",name:"Nature & waterfalls",img:"sahastradhara"}]},
 {id:"stays",name:"Stays",img:"hotel-room",blurb:"Hotels, homestays and PGs for visitors and students.",subs:[
   {id:"hotels",name:"Hotels",img:"hotel-room"},
   {id:"homestays",name:"Homestays",img:"cabin"},
   {id:"pg-hostels",name:"PGs & hostels",img:"bedroom"}]},
 {id:"services",name:"Services",img:"tailor",blurb:"Tailors, repairs, photographers and event planners you can trust.",subs:[
   {id:"tailors",name:"Tailors",img:"tailor"},
   {id:"home-services",name:"Home services & repairs",img:"sewing"},
   {id:"events",name:"Events & photographers",img:"cafe-signs"}]}
];

/* ---------------------------------------------------------------------
   ADS
   Ad spaces appear on the home page, Explore pages, Journal and articles.
   Each space shows one ad from this list whose "slots" include that space:
     banner  = wide strip between sections
     infeed  = a card mixed into listings (looks like a listing, marked Sponsored)
     article = strip inside blog articles
   When nobody has paid for a space, the "house" ads below invite businesses
   to advertise. To add a paid ad, copy one and change it, for example:
   {id:"cafe-xyz", slots:["banner","infeed"], sponsor:"Café XYZ", title:"20% off this weekend",
    text:"Rajpur Road · Open 9 am to 11 pm", cta:"See the offer", url:"https://instagram.com/cafexyz", img:"cafe-latte"},
   --------------------------------------------------------------------- */
window.ADS = [
 {id:"house-advertise",house:true,slots:["banner","article"],sponsor:"Doon Dekho",title:"Put your business in front of Dehradun",
  text:"Banner and featured spots for cafés, salons, shops, schools and events. Seen by locals and visitors every day.",cta:"Advertise with us",action:"biz:partner",img:"cafe-plants"},
 {id:"house-listed",house:true,slots:["banner","infeed","article"],sponsor:"Doon Dekho",title:"Run a café, salon or shop?",
  text:"Get your business on Doon Dekho and get found by people searching in your area.",cta:"Get listed",action:"biz:list",img:"barbershop"},
 {id:"house-admissions",house:true,slots:["edu"],sponsor:"Doon Dekho",title:"Admissions season: reach Dehradun’s parents and students",
  text:"Feature your school, college or coaching centre with an Admissions Open badge, enquiry form and banner across the Education section.",cta:"See admission packages",action:"biz:partner",img:"corridor"},
 {id:"house-pets",house:true,slots:["infeed"],sponsor:"Doon Dekho",title:"Pet shop or vet in Dehradun?",
  text:"Be one of the first in our new For Pets section.",cta:"Get listed",action:"biz:list",img:"corgi"}
];

/* Journal posts published 23–27 Oct 2026 (newest first) */
window.NEW_POSTS = [
{
"slug": "best-street-food-in-dehradun",
"t": "Best Street Food in Dehradun: 10 Places Locals Swear By",
"seo": "Best Street Food in Dehradun (2026): 10 Places Locals Love",
"desc": "From chole katlamba in Moti Bazaar to bun tikki in Dalanwala and momos at the Clock Tower: the street food in Dehradun that locals actually queue for.",
"cat": "Food",
"min": 4,
"date": "27 Oct 2026",
"img": "food-stall",
"ex": "From chole katlamba in Moti Bazaar to bun tikki in Dalanwala and momos at the Clock Tower: the street food in Dehradun that locals actually queue for.",
"sec": "food",
"sub": "street-food",
"body": [
{
"p": "Dehradun doesn't really advertise its food. There's no famous food street with neon boards and no celebrity stalls. The good stuff is in the narrow lanes behind the Clock Tower, in small shops that have been frying the same thing for decades, and in carts that only show up after 5 pm."
},
{
"p": "This is the list we'd give a friend visiting for the weekend. Go hungry, carry some cash along with UPI, and be ready to walk."
},
{
"h": "Why Dehradun street food tastes the way it does"
},
{
"p": "A lot of the city's classic food came with Punjabi families who settled here after Partition. That's why chole katlamba, a very Punjabi breakfast, is the dish most people in Doon grew up on. Add the Tibetan community's momos, pahadi snacks and good old North Indian bun tikki, and you get a food scene that feels local but tastes of half of North India."
},
{
"h": "1. Sethi's Chole Katlambe, Moti Bazaar"
},
{
"p": "If you try only one thing on this list, make it chole katlamba. A katlamba is a big, flaky, layered bread fried until crisp, served with mildly spiced chole. Sethi's, in the Moti Bazaar lanes near Paltan Bazaar, is one of the best-known names for it."
},
{
"p": "It's a breakfast and lunch place, so go in the morning. The shop is small and usually packed. That's part of it."
},
{
"img": "w-paltan2",
"cap": "The lanes around Paltan Bazaar hold most of the city's classic street food."
},
{
"h": "2. Mama Ji Katlambe Chole Wale, near Purani Sabzi Mandi"
},
{
"p": "Ask anyone in Dehradun about katlamba and you'll eventually get the Sethi's versus Mama Ji argument. The only fair way to settle it is to try both. Mama Ji is in the lanes near the old vegetable market, close enough that you can walk from one to the other on the same morning."
},
{
"h": "3. Sethi Bun Tikki, Moti Bazaar"
},
{
"p": "Bun tikki is Dehradun's favourite evening snack: a soft bun split open, a crisp aloo tikki inside, onion and green chutney. Simple, cheap, and very hard to eat just one. Sethi Bun Tikki is a short walk from the katlamba shops, so you can cover all of Moti Bazaar in one food walk."
},
{
"h": "4. Vicky Kashyap's Dwarka Bun Tikki, Dalanwala"
},
{
"p": "Away from the old city, this stall near Dwarka Store in Dalanwala has its own loyal crowd. If you live on the eastern side of the city, it saves you a trip through Paltan Bazaar traffic."
},
{
"h": "5. Ratan Lal Khasta Chole, Hanuman Chowk"
},
{
"p": "Khasta is crisp, flaky dough served with spicy chole, and Ratan Lal's near Hanuman Chowk has been a favourite for a long time. Pair it with a walk through the old bazaar."
},
{
"h": "6. Chetan Swadisht Kachori, near the railway station"
},
{
"p": "Arriving or leaving by train? Hot kachori with sabzi near the station road is the most Dehradun way to start or end a trip."
},
{
"img": "momos",
"cap": "Evening momo carts are everywhere around the Clock Tower."
},
{
"h": "7. Momos around the Clock Tower"
},
{
"p": "Between the Tibetan community and how close we are to the hills, momos are everywhere in Doon. The evening carts around Ghanta Ghar and Paltan Bazaar are the classic place to eat them. Steamed is the default, fried is for when you've given up on the diet, and the red chutney decides whether a cart is good or not."
},
{
"h": "8. Tibetan food on Rajpur Road"
},
{
"p": "If you want to sit down, the Tibetan kitchens along Rajpur Road serve thukpa, thenthuk and momos. Kalsang is the best-known name, and a bowl of thukpa there on a cold evening is hard to beat."
},
{
"h": "9. Maggi and pakoda by the river"
},
{
"p": "A very Dehradun weekend plan: drive out to Sahastradhara or Maldevta and eat masala Maggi, bread pakoda and cutting chai at a riverside stall. Honestly, you're there for the river more than the food, and that's fine."
},
{
"h": "10. Bakery stops for rusks and cheese straws"
},
{
"p": "Not street food exactly, but no Dehradun food walk is complete without a bakery stop. The city is famous for its rusks, and the old bakeries on Rajpur Road and around town still sell them by the box. It's the best edible souvenir you can take home. More in our guide to bakeries in Dehradun."
},
{
"h": "A simple street food walk"
},
{
"p": "Start in the morning at the Moti Bazaar katlamba shops. If you still have room, walk over to Ratan Lal for khasta chole. Spend the afternoon shopping in Paltan Bazaar (our shopping guide has the details), then come back in the evening for bun tikki and momos around the Clock Tower. Finish with chai."
},
{
"h": "Tips before you go"
},
{
"ul": [
"Go early for breakfast dishes. Katlamba and chole shops often sell out or shut by afternoon.",
"Park outside the old city and walk in. The lanes are narrow and parking is a headache.",
"Most shops take UPI now, but keep some cash for the smaller carts.",
"Not used to spice? Ask for the chutney on the side.",
"Weekends are crowded. Weekday mornings are much calmer."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"What is the most famous street food of Dehradun?",
"Chole katlamba and bun tikki are the two dishes locals mention most, followed closely by momos."
],
[
"Where is the best area for street food in Dehradun?",
"The lanes around Paltan Bazaar, Moti Bazaar and the Clock Tower have the most classic street food in one place."
],
[
"Is Dehradun street food good for vegetarians?",
"Yes. Most of the classics, including katlamba, bun tikki, kachori and khasta chole, are vegetarian."
],
[
"What time should I go for street food in Dehradun?",
"Mornings for chole katlamba and kachori. Evenings for bun tikki and momos."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Every place in this guide is listed on Doon Dekho with directions. Browse Explore → Food & Drink → Street food and save your favourites to plan your own food walk.",
"cta": {
"href": "/explore/food/street-food/",
"label": "Browse Street food"
}
}
]
},
{
"slug": "best-cafes-rajpur-road-dehradun",
"t": "Best Cafés on Rajpur Road, Dehradun: Where to Go and What to Order",
"seo": "Best Cafés on Rajpur Road, Dehradun (2026 Guide)",
"desc": "A local's guide to cafés in Dehradun's Rajpur Road: quiet work spots, date-night places, Tibetan kitchens and the old bakeries worth a stop on the way.",
"cat": "Food",
"min": 3,
"date": "27 Oct 2026",
"img": "cafe-bulbs",
"ex": "A local's guide to cafés in Dehradun's Rajpur Road: quiet work spots, date-night places, Tibetan kitchens and the old bakeries worth a stop on the way.",
"sec": "food",
"sub": "cafes",
"body": [
{
"p": "If you ask someone in Doon where to grab coffee, nine times out of ten the answer is somewhere on Rajpur Road. It runs from the Clock Tower almost to the foot of the Mussoorie hills, and on the way it picks up most of the cafés in Dehradun. Some are loud and full of college groups, some are quiet enough to work in, some have a view of the hills, and some are tucked away on first floors you'd walk right past."
},
{
"p": "Here's how to pick one, depending on the kind of afternoon you want."
},
{
"h": "How Rajpur Road is laid out"
},
{
"p": "The lower end, near the Clock Tower and Astley Hall, is busy and commercial: banks, showrooms and the old bakeries. The cafés really start after Dilaram Chowk and bunch up around Kishanpur and the stretch near the Sai Mandir. Keep going towards Rajpur village and the road gets greener and quieter."
},
{
"p": "Planning to try more than one place? Park once around Kishanpur and walk. You'll spend less time hunting for parking and more time eating."
},
{
"img": "cafe-latte",
"cap": "Rajpur Road's cafés are at their calmest on weekday mornings."
},
{
"h": "Slake Café, Old Mussoorie Road side"
},
{
"p": "One of the best-known names on the upper stretch. The menu leans Italian and there's plenty of seating, which makes it a safe bet for a long lunch with a group."
},
{
"p": "<b>Good for:</b> weekend lunches, groups."
},
{
"h": "AMA Café, Kishanpur"
},
{
"p": "Relaxed and popular, and it works whether you want just coffee or a full meal. It fills up in the evening, so go mid-afternoon if you'd like a quieter table."
},
{
"p": "<b>Good for:</b> catching up with friends, a first visit to Dehradun."
},
{
"h": "KOI, from the house of AKIO"
},
{
"p": "On a first floor further up Rajpur Road, KOI is more of an evening place, with a café-and-bar feel. Good for a date or a dinner where you make a bit of an effort."
},
{
"p": "<b>Good for:</b> evenings, date night."
},
{
"h": "Café De Piccolo, near Sai Mandir"
},
{
"p": "A smaller café near the Sai Mandir stretch. Good for coffee and dessert when you don't want a big meal."
},
{
"p": "<b>Good for:</b> coffee breaks, short visits."
},
{
"h": "Blooms Café, near Sai Mandir"
},
{
"p": "In the same cluster as Piccolo, so it's easy to do both in one afternoon."
},
{
"p": "<b>Good for:</b> café hopping, casual meals."
},
{
"img": "cafe-plants",
"cap": "Garden seating is the reason many people choose one café over another."
},
{
"h": "Kalsang, for Tibetan food"
},
{
"p": "Rajpur Road is also home to Dehradun's best-known Tibetan kitchens, and Kalsang is the classic: thukpa, thenthuk, momos and shapta. On a cold winter evening, nothing on this road beats a bowl of thenthuk."
},
{
"p": "<b>Good for:</b> winter evenings, comfort food, a cheaper meal."
},
{
"h": "The old bakeries on lower Rajpur Road"
},
{
"p": "Before or after the cafés, stop at one of the old bakeries near the Clock Tower end of the road. Dehradun is known for rusks, cheese straws and plum cake, and this is where locals buy them by the box to carry to relatives in other cities. Our guide to bakeries in Dehradun has more."
},
{
"h": "So which café should you pick?"
},
{
"p": "<b>Working on a laptop:</b> go on a weekday morning to one of the smaller, quieter cafés, and ask about Wi- Fi before you settle in."
},
{
"ul": [
"<b>A date:</b> KOI in the evening, or any café with outdoor seating around sunset.",
"<b>Lunch with family:</b> Slake or AMA.",
"<b>Cheap and filling:</b> the Tibetan kitchens.",
"<b>Gifts to take home:</b> the old bakeries."
]
},
{
"h": "Tips for café hopping on Rajpur Road"
},
{
"ul": [
"Weekends after 5 pm get busy. Book ahead if the place takes bookings, or just go earlier.",
"Parking is easier on the side lanes than on Rajpur Road itself.",
"Walk between cafés. The road is pleasant on foot, especially in winter.",
"Many cafés have rooftop or first-floor seating. Ask for it if you want a view."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Which is the best area for cafés in Dehradun?",
"Rajpur Road, especially the stretch around Kishanpur and the Sai Mandir, has the biggest cluster of cafés in the city."
],
[
"Are there work-friendly cafés in Dehradun?",
"Yes. The smaller cafés on Rajpur Road are quiet on weekday mornings. Check the Wi-Fi and their laptop policy before you settle in."
],
[
"What food is Rajpur Road famous for?",
"Tibetan food like momos and thukpa, bakery classics like rusks and cheese straws, and a growing number of modern cafés."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "All the cafés in this guide are listed on Doon Dekho with directions. Open Explore → Food & Drink → Cafés to see them on one page and save your favourites.",
"cta": {
"href": "/explore/food/cafes/",
"label": "Browse Cafés"
}
}
]
},
{
"slug": "waterfalls-near-dehradun",
"t": "Waterfalls Near Dehradun: 7 to Visit and How to Reach Them",
"seo": "Waterfalls Near Dehradun: 7 Spots and How to Reach (2026)",
"desc": "Sahastradhara, Robber's Cave, Shikhar Falls, Maldevta, Jharipani and Mossy Falls: the best waterfalls near Dehradun, when to go and how to get there.",
"cat": "Nature",
"min": 4,
"date": "26 Oct 2026",
"img": "w-robbers",
"ex": "Sahastradhara, Robber's Cave, Shikhar Falls, Maldevta, Jharipani and Mossy Falls: the best waterfalls near Dehradun, when to go and how to get there.",
"sec": "places",
"sub": "nature",
"body": [
{
"p": "Dehradun sits in a valley fed by streams coming down from the Mussoorie hills. Once the monsoon arrives, there is water everywhere. Some of it falls through the forest, some of it runs through caves and gorges, and some of it just spreads out into shallow river beds where families set up for the afternoon."
},
{
"p": "Here are the waterfalls and water spots near Dehradun worth the drive, with how to get there and when to go."
},
{
"h": "Read this first"
},
{
"p": "Waterfalls look their best in and just after the monsoon. That is also when they're most dangerous. Rocks get slippery, water levels rise very fast, and paths can wash away overnight. Go in daylight, stay out of fast-moving water, and skip the trip entirely after very heavy rain. No photo is worth it."
},
{
"h": "1. Sahastradhara"
},
{
"p": "The most famous water spot near Dehradun. The name roughly means \"thousand-fold spring\", and the place is known for its sulphur springs, small caves where water drips from the rock, and a stretch of river that draws big crowds every weekend."
},
{
"p": "<b>How to reach:</b> drive or take a cab along Sahastradhara Road, about 14 km from the city centre."
},
{
"p": "<b>Best time:</b> weekday mornings, outside peak monsoon."
},
{
"img": "w-maldevta",
"cap": "Maldevta, on the Song river east of the city."
},
{
"h": "2. Robber's Cave (Guchhupani)"
},
{
"p": "Not a waterfall exactly. It's a narrow river gorge where you walk through cold, shallow water between tall rock walls. At one point the stream disappears underground and comes back further along, which is half the fun. On a hot May afternoon, there's nowhere better to be in Dehradun."
},
{
"p": "<b>How to reach:</b> about 8 km from the city centre, via Anarwala."
},
{
"p": "<b>Best time:</b> early morning, before the crowds. Wear sandals you don't mind getting wet."
},
{
"h": "3. Shikhar Falls"
},
{
"p": "A quieter forest waterfall above Rajpur, near Kairwan Gaon. You walk a short way from the road, and within a few minutes it feels like you've left the city, even though you're barely out of it."
},
{
"p": "<b>How to reach:</b> drive towards Rajpur and follow the village road towards Kairwan Gaon, then walk."
},
{
"p": "<b>Best time:</b> just after the monsoon, when the falls are full but the path has dried out a bit."
},
{
"h": "4. Maldevta"
},
{
"p": "East of the city, Maldevta is a riverside valley with picnic spots, farmland and a small waterfall nearby. This is where Doon families drive on a Sunday with a flask of chai and not much of a plan."
},
{
"p": "<b>How to reach:</b> take Maldevta Road from Raipur."
},
{
"p": "<b>Best time:</b> winter afternoons, or the monsoon if you want everything green."
},
{
"img": "w-sahastradhara",
"cap": "Sahastradhara's sulphur springs and stepped pools."
},
{
"h": "5. Jharipani Falls"
},
{
"p": "On the old road up to Mussoorie, near Jharipani. A short walk down from the road takes you to a waterfall in the forest. It's a good stop if you're driving up to Mussoorie slowly and don't want to go straight to the crowds."
},
{
"p": "<b>How to reach:</b> drive towards Mussoorie via Jharipani."
},
{
"p": "<b>Best time:</b> monsoon and autumn."
},
{
"h": "6. Mossy Falls"
},
{
"p": "Near Barlowganj on the Mussoorie side, named after the moss-covered rocks around it. It's shaded and cool even in summer."
},
{
"p": "<b>How to reach:</b> from Barlowganj, a forest walk leads down to the falls."
},
{
"p": "<b>Best time:</b> summer mornings. Go with company and leave well before dark."
},
{
"h": "7. Kempty Falls (a full day trip)"
},
{
"p": "Beyond Mussoorie, Kempty is the most famous waterfall in the region. It's busy and very commercial, so don't expect peace and quiet. But if you have a full day and you're already going to Mussoorie, it fits in."
},
{
"p": "<b>How to reach:</b> via Mussoorie, roughly a two-hour drive from Dehradun depending on traffic."
},
{
"h": "What to carry"
},
{
"p": "Shoes or sandals with real grip. Flip-flops on wet rock are a bad idea."
},
{
"p": "A change of clothes and a small towel. You will get wetter than you plan to."
},
{
"p": "Water and snacks, and a bag to bring your trash back. These spots stay nice only if we keep them that way."
},
{
"p": "A dry bag or a zip pouch for your phone."
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Which is the closest waterfall to Dehradun?",
"Robber's Cave and Shikhar Falls are both close to the city. Sahastradhara is about 14 km away."
],
[
"When is the best time to visit waterfalls near Dehradun?",
"From the end of the monsoon to early winter, roughly September to November. The water is still flowing, and the paths are safer than in peak monsoon."
],
[
"Is it safe to swim at waterfalls near Dehradun?",
"It's best not to. Currents and water levels can change very quickly, especially during the monsoon."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Open Explore → Places to Visit → Nature & waterfalls for directions to every spot in this guide. Planning a full trip? See our list of things to do in Dehradun.",
"cta": {
"href": "/explore/places/nature/",
"label": "Browse Nature spots"
}
}
]
},
{
"slug": "things-to-do-in-dehradun",
"t": "20 Things to Do in Dehradun (That Locals Actually Do)",
"seo": "20 Things to Do in Dehradun (2026): A Local's List",
"desc": "Katlamba in Moti Bazaar, a cold walk through Robber's Cave, FRI, Rajpur Road cafés and city lights from the Mussoorie road. 20 things to do in Dehradun.",
"cat": "Guides",
"min": 5,
"date": "26 Oct 2026",
"img": "w-fri",
"ex": "Katlamba in Moti Bazaar, a cold walk through Robber's Cave, FRI, Rajpur Road cafés and city lights from the Mussoorie road. 20 things to do in Dehradun.",
"sec": "places",
"sub": "attractions",
"body": [
{
"p": "Most lists of things to do in Dehradun stop after FRI, Robber's Cave and Sahastradhara, then send you up to Mussoorie. Those three are on this list too. But the reason people who move here never want to leave has more to do with small things: a plate of chole katlamba at 8 in the morning, a slow walk up Rajpur Road, chai at a riverside stall with your feet in cold water."
},
{
"p": "So this list mixes both. The famous places, and the everyday stuff we actually do on a free Sunday."
},
{
"h": "Landmarks and a bit of history"
},
{
"p": "<b>1. Spend a morning at the Forest Research Institute.</b> The red-brick building on Chakrata Road is the photo everyone takes, and it really is that big. The campus around it is huge and quiet, with old trees and long roads that are lovely to walk. Give it at least two hours, and go inside the museums if you have time."
},
{
"p": "<b>2. Stand under Ghanta Ghar.</b> The Clock Tower is where Rajpur Road, Paltan Bazaar and the old city meet. It is not a place you visit so much as a place you keep passing through, but it's worth stopping once to look around. Everything in old Dehradun is measured from here."
},
{
"p": "<b>3. Visit the Khalanga War Memorial.</b> It marks the battle of Nalapani, fought in 1814 between Gorkha and British forces. Most visitors skip it, which is a shame, because it tells you something about the valley that the cafés don't."
},
{
"p": "<b>4. See Darbar Sahib in Jhanda Mohalla.</b> The darbar of Guru Ram Rai is tied to the founding of the city, and his dera is where the name Dehradun comes from. If you can, time your visit with the Jhanda Mela, when the old city fills up."
},
{
"img": "w-clock",
"cap": "Ghanta Ghar, the Clock Tower at the centre of the old city."
},
{
"h": "Water and forest"
},
{
"p": "<b>5. Walk through the river at Robber's Cave.</b> Locals call it Guchhupani. You walk upstream through cold, shallow water between tall rock walls, and the stream disappears underground and comes back further along. Go early, before the crowds, and wear sandals you don't mind soaking."
},
{
"p": "<b>6. Spend a morning at Sahastradhara.</b> Known for its sulphur springs and the small caves where water drips from the rock. Weekends get very crowded, so a weekday morning is a different experience."
},
{
"p": "<b>7. Walk to Shikhar Falls.</b> A short forest walk above Rajpur, and it feels much further from the city than it is."
},
{
"p": "<b>8. Drive out to Maldevta.</b> A riverside valley east of the city. This is the classic Sunday plan: a flask of chai, some snacks, a spot by the water, nothing else."
},
{
"p": "<b>9. Spend a slow afternoon at Lachhiwala.</b> Forest, shallow pools and plenty of shade."
},
{
"p": "Read our full guide to waterfalls near Dehradun before you go, especially in the monsoon."
},
{
"h": "Food"
},
{
"p": "<b>10. Eat chole katlamba in Moti Bazaar for breakfast.</b> If you only eat one Dehradun dish, make it this one. Go early, because the shops sell out."
},
{
"p": "<b>11. Have bun tikki in the evening.</b> Around Paltan Bazaar or in Dalanwala, whichever side of the city you're on."
},
{
"p": "<b>12. Warm up with thukpa on Rajpur Road.</b> The Tibetan kitchens here are the best thing about a cold December evening."
},
{
"p": "<b>13. Take home a box of rusks.</b> Every Doon family does this when visiting relatives. Buy from one of the old bakeries."
},
{
"p": "More in our guide to street food in Dehradun."
},
{
"h": "Walks and views"
},
{
"p": "<b>14. Walk Rajpur Road from Dilaram Chowk towards Rajpur.</b> Stop at a café or two on the way. In winter, this is one of the nicest walks in the city."
},
{
"p": "<b>15. Drive up the Mussoorie road at sunset.</b> Pull over somewhere safe a little way up and watch the city lights come on below. On a clear evening it's the best view in Dehradun, and it costs nothing."
},
{
"p": "<b>16. Visit Mindrolling Monastery in Clement Town.</b> The tall stupa and the gardens are very calm, even on busy days. Climb the stupa for the view."
},
{
"img": "w-mindrolling",
"cap": "The Great Stupa at Mindrolling Monastery, Clement Town."
},
{
"h": "Shopping"
},
{
"p": "<b>17. Get lost in Paltan Bazaar.</b> Woollens, spices, Doon basmati and a bit of everything else. Bargain politely."
},
{
"p": "<b>18. Buy a winter jacket at the Tibetan Market.</b> The stalls near the Parade Ground are at their best when the winter stock arrives."
},
{
"p": "<b>19. Pick up pahadi products.</b> Honey, rajma, millet flour and handicrafts from the hills, from one of the city's pahadi stores."
},
{
"h": "One day trip"
},
{
"p": "<b>20. Go up to Mussoorie for the day.</b> Stop at Jharipani or Mossy Falls on the way up instead of rushing straight to Mall Road."
},
{
"h": "A few things that will make your trip easier"
},
{
"p": "Weekdays are far calmer than weekends at every popular spot on this list. If you can only come on a weekend, go early."
},
{
"p": "October to February is the most comfortable time to walk around. The monsoon makes the waterfalls beautiful, but some roads and paths become risky after heavy rain."
},
{
"p": "Traffic around the Clock Tower gets heavy, so plan your day by area rather than by attraction. FRI and Robber's Cave are on the west and north side, Sahastradhara and Maldevta are east, Mindrolling is south. Doing them in random order means a lot of time in a cab."
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"What is Dehradun famous for?",
"The Forest Research Institute, its schools, basmati rice, rusks and old bakeries, and its spot at the foot of the Mussoorie hills."
],
[
"How many days are enough for Dehradun?",
"Two days covers the main sights without rushing. Add a third if you want a Mussoorie day trip. Short on time? Try our one day in Dehradun itinerary."
],
[
"What is the best time to visit Dehradun?",
"October to March for pleasant weather. July to September if you want the waterfalls at full flow, but be careful on wet paths."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Every place on this list is on Doon Dekho with directions. Start at Explore and pick a section.",
"cta": {
"href": "/explore/places/attractions/",
"label": "Browse Attractions"
}
}
]
},
{
"slug": "dehradun-shopping-guide",
"t": "Dehradun Shopping Guide: Paltan Bazaar, Indira Market and Where Locals Really Shop",
"seo": "Shopping in Dehradun: Best Markets and What to Buy (2026)",
"desc": "Paltan Bazaar, Indira Market, the Tibetan Market and pahadi stores: a local's guide to shopping in Dehradun, what to bring home and how to bargain well.",
"cat": "Shopping",
"min": 3,
"date": "25 Oct 2026",
"img": "w-paltan",
"ex": "Paltan Bazaar, Indira Market, the Tibetan Market and pahadi stores: a local's guide to shopping in Dehradun, what to bring home and how to bargain well.",
"sec": "shopping",
"sub": "markets",
"body": [
{
"p": "Dehradun has malls, but that's not really where the city shops. The good stuff is in the old bazaars, the seasonal markets and small shops that have served the same families for two or three generations. Your mother probably bought your school sweater from one of them."
},
{
"p": "Here's where to go and what's worth bringing home."
},
{
"h": "Paltan Bazaar"
},
{
"p": "Paltan Bazaar starts at the Clock Tower and runs down from there. It's the oldest and busiest market in the city, and it has a bit of everything: clothes, shoes, woollens, spices, dry fruits, basmati rice and household stuff. Expect narrow lanes, crowds and a lot of noise."
},
{
"p": "<b>What to buy:</b> woollens in winter, spices, Doon basmati."
},
{
"tip": "park outside and walk in, and keep your bag in front of you when it gets crowded."
},
{
"p": "Right next to it, Moti Bazaar has wholesale-style shops, book depots and some of the city's most famous street food. Plan a food break into any Paltan Bazaar trip. Our street food guide tells you where."
},
{
"img": "w-paltan2",
"cap": "Paltan Bazaar runs north from the Clock Tower."
},
{
"h": "Indira Market"
},
{
"p": "A short walk from the Clock Tower near Darshan Lal Chowk. This is where you go for everyday clothes, footwear and accessories at reasonable prices."
},
{
"p": "<b>What to buy:</b> casual clothes, bags, shoes."
},
{
"tip": "polite bargaining is normal here."
},
{
"h": "Tibetan Market, Parade Ground"
},
{
"p": "Opposite the Parade Ground, rows of stalls sell winter jackets, woollens, caps, bags and shoes. It's at its best in the colder months, when fresh winter stock comes in."
},
{
"p": "<b>What to buy:</b> jackets, sweaters, caps and gloves."
},
{
"tip": "go early in the season, around October and November, while there's still plenty to choose from."
},
{
"h": "Woollen shops"
},
{
"p": "Dehradun has a long history of woollen shops, especially in and around Paltan Bazaar. Urvashi Wool House and Bareilly Wool Bhandar have been around for years, and Himalayan Weavers in Old Rajpur focuses on handloom."
},
{
"p": "<b>What to buy:</b> shawls, sweaters, handloom pieces."
},
{
"h": "Pahadi stores and local produce"
},
{
"p": "More and more shops in the city now sell produce from the Uttarakhand hills: pulses like gahat and rajma, pahadi salt, honey, millets like mandua, and handicrafts. You'll find pahadi stores around Ballupur and Doon University Road, and organic shops around Bangali Kothi."
},
{
"p": "<b>What to buy:</b> honey, rajma, millet flour, pahadi salt, handicrafts."
},
{
"img": "honey",
"cap": "Pahadi honey, pulses and spices make good gifts to carry home."
},
{
"h": "Bookshops"
},
{
"p": "Dehradun reads a lot, probably because of all the schools. The English Book Depot near the Clock Tower is one of the city's best-known bookshops, and Moti Bazaar has several book depots. If you want a mall bookstore, Crossword is in Unison Mall."
},
{
"h": "Malls"
},
{
"p": "For branded stores and cinemas, the malls on Rajpur Road and elsewhere cover the basics. Handy on a rainy day, but nobody comes to Dehradun for them."
},
{
"h": "What to bring home from Dehradun"
},
{
"ul": [
"A box of rusks or cheese straws from an old bakery (see our bakeries guide).",
"Doon basmati rice.",
"Pahadi honey and rajma.",
"A woollen shawl or a handloom stole.",
"A book from one of the old bookshops."
]
},
{
"h": "How to bargain without being awkward about it"
},
{
"p": "Ask the price first, then offer a little less, with a smile. Nobody expects you to accept the first number."
},
{
"p": "Bargaining is normal in Paltan Bazaar, Indira Market and the Tibetan Market. It isn't done in branded shops or malls."
},
{
"p": "Buying two or three things from the same shop gives you more room to negotiate."
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"What is the most famous market in Dehradun?",
"Paltan Bazaar, starting at the Clock Tower."
],
[
"What is Dehradun famous for buying?",
"Basmati rice, rusks and bakery items, woollens and pahadi products."
],
[
"Where can I buy winter clothes in Dehradun?",
"The woollen shops in Paltan Bazaar and the Tibetan Market near the Parade Ground."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Browse Explore → Shopping to see every market and shop in this guide with directions.",
"cta": {
"href": "/explore/shopping/markets/",
"label": "Browse Markets"
}
}
]
},
{
"slug": "temples-in-dehradun",
"t": "Temples in Dehradun: 8 Sacred Places Worth Visiting",
"seo": "Temples in Dehradun: 8 Famous Sacred Places (2026)",
"desc": "Tapkeshwar's cave shrine, the hilltop Santala Devi temple, Prakasheshwar Mahadev, Darbar Sahib and Mindrolling Monastery: temples in Dehradun to visit.",
"cat": "Spiritual",
"min": 3,
"date": "25 Oct 2026",
"img": "w-tapkeshwar",
"ex": "Tapkeshwar's cave shrine, the hilltop Santala Devi temple, Prakasheshwar Mahadev, Darbar Sahib and Mindrolling Monastery: temples in Dehradun to visit.",
"sec": "places",
"sub": "spiritual",
"body": [
{
"p": "For a small city, Dehradun has a lot of sacred places, and they're nothing alike. There's a Shiva temple inside a cave by a stream, a hilltop shrine you have to climb to, a Sikh darbar that gave the city its name, and one of India's largest Tibetan Buddhist monasteries."
},
{
"p": "Here are eight worth visiting, whether you're going to pray or just want an hour of quiet."
},
{
"h": "1. Tapkeshwar Mahadev Temple"
},
{
"p": "Tapkeshwar is a Shiva temple built into a natural cave beside a stream in Garhi Cantt. Water drips from the rock onto the Shivling inside, and that dripping (tapakna) is where the name comes from. It's one of the most loved temples in the city and gets very crowded around Shivratri."
},
{
"tip": "go on a weekday morning to skip the queues."
},
{
"img": "w-mindrolling",
"cap": "Mindrolling Monastery's stupa is one of the tallest in India."
},
{
"h": "2. Prakasheshwar Mahadev Temple"
},
{
"p": "On the Mussoorie road, Prakasheshwar Mahadev is a Shiva temple where a lot of people stop on their way up to the hills. If you're doing a Mussoorie day trip, it's an easy stop to add."
},
{
"tip": "stop on the way up, when traffic is lighter."
},
{
"h": "3. Santala Devi Temple"
},
{
"p": "A hilltop temple to the west of the city that you reach by walking uphill. The climb is part of the visit, and the view over the valley at the top makes up for it."
},
{
"tip": "go early in the morning and carry water."
},
{
"h": "4. Chandrabani Temple"
},
{
"p": "In the forested hills on the southern edge of Dehradun. Even though it's not far from town, it feels miles away from the city noise."
},
{
"tip": "combine it with a drive along the Chandrabani forest road."
},
{
"h": "5. Darbar Sahib (Jhanda Sahib)"
},
{
"p": "In Jhanda Mohalla in the old city, Darbar Sahib is the historic darbar of Guru Ram Rai. His camp, or dera, is where the name Dehradun comes from. The annual Jhanda Mela brings huge crowds to the old city."
},
{
"tip": "dress modestly and cover your head inside."
},
{
"img": "w-darbar",
"cap": "Darbar Sahib, the gurdwara in the heart of the old city."
},
{
"h": "6. Mindrolling Monastery"
},
{
"p": "In Clement Town, Mindrolling is one of the most important Tibetan Buddhist monasteries in India. The tall stupa, the prayer halls and the gardens make it one of the calmest places in Dehradun, even when it's busy."
},
{
"tip": "climb the stupa's upper floors for the view, then browse the small Tibetan market outside."
},
{
"h": "7. Laxman Sidh Temple"
},
{
"p": "On the Haridwar road side of the city, Laxman Sidh is a forest temple with a steady stream of regular visitors, especially on Sundays."
},
{
"h": "8. Daat Kali Temple"
},
{
"p": "On the Dehradun-Saharanpur road near the southern edge of the city. Many people stop here to pray before a long journey or after buying a new vehicle, so don't be surprised to see a freshly garlanded car outside."
},
{
"h": "Visiting tips"
},
{
"ul": [
"Take off your footwear where asked. A small cloth bag for your shoes saves a lot of hassle.",
"Dress modestly, with shoulders and knees covered.",
"Mornings are calmer and cooler at every temple on this list.",
"Ask before taking photos inside a shrine."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Which is the most famous temple in Dehradun?",
"Tapkeshwar Mahadev, the cave temple in Garhi Cantt, is the best known."
],
[
"Is there a Buddhist monastery in Dehradun?",
"Yes. Mindrolling Monastery in Clement Town is one of the largest Tibetan Buddhist monasteries in India."
],
[
"Which temple in Dehradun is inside a cave?",
"Tapkeshwar Mahadev Temple is built into a natural cave beside a stream."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Open Explore → Places to Visit → Temples & monasteries for directions to each temple. For more ideas, see our list of things to do in Dehradun.",
"cta": {
"href": "/explore/places/spiritual/",
"label": "Browse Spiritual places"
}
}
]
},
{
"slug": "one-day-in-dehradun-itinerary",
"t": "One Day in Dehradun: A Perfect Itinerary from Breakfast to City Lights",
"seo": "One Day in Dehradun: A Local's Itinerary (2026)",
"desc": "Katlamba for breakfast, FRI, Robber's Cave, Rajpur Road cafés and city lights from the Mussoorie road: a one day Dehradun itinerary that skips the traffic.",
"cat": "Guides",
"min": 3,
"date": "24 Oct 2026",
"img": "w-sahastradhara",
"ex": "Katlamba for breakfast, FRI, Robber's Cave, Rajpur Road cafés and city lights from the Mussoorie road: a one day Dehradun itinerary that skips the traffic.",
"sec": "places",
"sub": "attractions",
"body": [
{
"p": "Only have one day in Dehradun? You can see a lot of it if you plan around the traffic instead of fighting it. This plan gets you the city's best breakfast, its most famous building, a walk through a cold river, a quiet monastery, a café and the best view in town, roughly in that order."
},
{
"h": "8:00 am: Breakfast in Moti Bazaar"
},
{
"p": "Start the way locals do, with chole katlamba in the lanes of Moti Bazaar near Paltan Bazaar. Sethi's and Mama Ji are the two famous names, and people in Doon will happily argue about which is better. Get there early, while the katlamba is fresh and the lanes are still quiet."
},
{
"img": "w-fri",
"cap": "The Forest Research Institute deserves a slow morning."
},
{
"h": "9:30 am: Forest Research Institute"
},
{
"p": "Take a cab to the Forest Research Institute on Chakrata Road. The red-brick colonial building is the most photographed sight in Dehradun, and the campus around it is enormous and green. Walk the grounds, and go into the museums if they're open."
},
{
"p": "<b>Allow:</b> about two hours."
},
{
"h": "12:00 pm: Robber's Cave"
},
{
"p": "Head to Robber's Cave (Guchhupani), about 8 km from the city centre. Roll up your jeans and walk upstream through the cold, shallow water between tall rock walls. After a morning in the sun, it's the most refreshing hour you'll spend in Dehradun."
},
{
"p": "<b>Bring:</b> sandals you don't mind getting wet."
},
{
"h": "1:30 pm: Lunch"
},
{
"p": "Grab something simple at the stalls near Robber's Cave, or head back towards the city for a proper sit- down meal."
},
{
"h": "3:00 pm: Mindrolling Monastery"
},
{
"p": "Drive south to Clement Town for Mindrolling Monastery. After the morning's rush, the tall stupa and quiet gardens are a good place to slow down. Have a look at the small Tibetan market outside."
},
{
"img": "w-robbers",
"cap": "Robber's Cave, best in the afternoon light."
},
{
"h": "4:30 pm: Coffee on Rajpur Road"
},
{
"p": "Head to Rajpur Road and pick a café around Kishanpur for coffee and dessert. If you'd rather have something savoury, the Tibetan kitchens on the same road do momos and thukpa. Our Rajpur Road café guide can help you choose."
},
{
"h": "6:00 pm: Sunset on the Mussoorie road"
},
{
"p": "Drive a little way up the Mussoorie road as the sun goes down and pull over somewhere safe. On a clear evening, the lights spreading across the valley below are the best view in Dehradun."
},
{
"h": "7:30 pm: Bun tikki at the Clock Tower"
},
{
"p": "Finish where the city starts, at Ghanta Ghar. Eat bun tikki and momos from the evening stalls around Paltan Bazaar, then pick up a box of rusks from a bakery to take home."
},
{
"h": "Got more time?"
},
{
"p": "Add Sahastradhara or Shikhar Falls for more water and greenery. Our guide to waterfalls near Dehradun covers them."
},
{
"p": "Spend a whole morning shopping in Paltan Bazaar and Indira Market."
},
{
"p": "Take a day trip up to Mussoorie."
},
{
"h": "Getting around"
},
{
"p": "Cabs and app-based autos are the easiest way to follow this plan. If you're driving, park once in each area and walk, especially around the Clock Tower, where parking is hard to find."
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Can Dehradun be covered in one day?",
"You can see the highlights in a day, but two days is more relaxed. For the longer list, see things to do in Dehradun."
],
[
"What should I not miss in Dehradun?",
"The Forest Research Institute, a walk through Robber's Cave, chole katlamba for breakfast and the city lights from the Mussoorie road."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Save every stop in this itinerary on Doon Dekho and open directions with one tap.",
"cta": {
"href": "/explore/places/attractions/",
"label": "Browse Attractions"
}
}
]
},
{
"slug": "best-bakeries-in-dehradun",
"t": "Dehradun's Bakeries and the Famous Rusk: Where to Buy and What to Try",
"seo": "Best Bakeries in Dehradun and the Famous Rusk (2026)",
"desc": "Why Dehradun is famous for rusks, which bakeries locals swear by, and what to carry home as a gift: rusks, cheese straws, plum cake, puffs and more.",
"cat": "Food",
"min": 3,
"date": "24 Oct 2026",
"img": "bakery",
"ex": "Why Dehradun is famous for rusks, which bakeries locals swear by, and what to carry home as a gift: rusks, cheese straws, plum cake, puffs and more.",
"sec": "food",
"sub": "bakeries",
"body": [
{
"p": "Ask anyone who grew up in Dehradun what to take home from the city, and you'll get the same answer: rusks. Doon's bakeries have been making them for generations, and a box of rusks is still what we carry when we visit relatives in Delhi, Lucknow or anywhere else. Show up without one and someone will definitely ask."
},
{
"img": "rusk",
"cap": "Rusks are the gift every Dehradun visitor is told to carry home."
},
{
"h": "Why is Dehradun famous for its bakeries?"
},
{
"p": "Dehradun's long history as a cantonment town and a school town brought with it a culture of tea-time baking: rusks, biscuits, cakes and puffs to have with chai. Old family bakeries grew up around the Clock Tower and Rajpur Road, and many of them are still running."
},
{
"h": "What to try"
},
{
"p": "<b>Rusks.</b> Twice-baked, crunchy and made for dunking in tea. Try the plain, elaichi and fruit ones and pick your favourite."
},
{
"ul": [
"<b>Cheese straws.</b> Crisp and buttery. A packet rarely survives the drive home.",
"<b>Plum cake.</b> Especially around Christmas.",
"<b>Puffs and patties.</b> The classic evening snack.",
"<b>Biscuits and cookies.</b> Often sold loose, by weight."
]
},
{
"h": "Bakeries to visit"
},
{
"h3": "Ellora's, Rajpur Road"
},
{
"p": "On lower Rajpur Road, Ellora's is one of the names people most connect with Dehradun baking. Locals buy rusks and cheese straws here by the box."
},
{
"h3": "Old Bakery House, Raipur"
},
{
"p": "On the Raipur side near Donali Chowk. A neighbourhood bakery worth knowing if you live in the east of the city."
},
{
"h3": "Old Friends Bakers and Café, Majra"
},
{
"p": "Near St. Jude's Chowk on the Shimla Bypass road. Known for eggless bakes and custom cakes, which makes it a handy option for birthdays."
},
{
"img": "chai",
"cap": "Rusks are made for one thing: a cup of chai."
},
{
"h": "How to carry rusks home without crumbs everywhere"
},
{
"ul": [
"Buy sealed boxes rather than loose packs if you're travelling.",
"Pack them in your hand luggage so they don't get crushed.",
"Once opened, rusks stay crisp for a few weeks in an airtight container."
]
},
{
"h": "A few bakery habits worth picking up"
},
{
"ul": [
"Go in the morning for the freshest batch.",
"Ask what came out of the oven that day.",
"Popular items sell out around festivals. Order your Christmas plum cake ahead of time."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"What is Dehradun famous for in food?",
"Rusks and bakery items, basmati rice, and street food like chole katlamba and bun tikki. See our street food guide for the rest."
],
[
"Which is the best bakery in Dehradun?",
"Ellora's on Rajpur Road is one of the most famous, but every neighbourhood has its own favourite, and people are loyal to theirs."
],
[
"How long do Dehradun rusks last?",
"In an airtight container, rusks usually stay crisp for a few weeks."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Open Explore → Food & Drink → Bakeries & desserts for directions to every bakery in this guide. Looking for more to take home? See our Dehradun shopping guide.",
"cta": {
"href": "/explore/food/bakeries/",
"label": "Browse Bakeries"
}
}
]
},
{
"slug": "pet-friendly-dehradun-guide",
"t": "Pet Owner's Guide to Dehradun: Pet Shops, Vets, Groomers and Dog-Friendly Walks",
"seo": "Pet Shops, Vets and Groomers in Dehradun (2026 Guide)",
"desc": "Pet shops, vet clinics, groomers and kennels in Dehradun, all in one place, plus local tips for walking your dog and taking your pet up to the hills.",
"cat": "Pets",
"min": 3,
"date": "23 Oct 2026",
"img": "dog",
"ex": "Pet shops, vet clinics, groomers and kennels in Dehradun, all in one place, plus local tips for walking your dog and taking your pet up to the hills.",
"sec": "pets",
"sub": "pet-shops",
"body": [
{
"p": "Dehradun is a good city to be a pet in. The weather is mild most of the year, there's green space almost everywhere, and the number of pet shops, vet clinics and groomers has grown quickly over the last few years. The problem is that the information is scattered across Google Maps, Instagram and the neighbourhood WhatsApp group."
},
{
"p": "So we've put it in one place."
},
{
"h": "Vet clinics"
},
{
"p": "Save the number of a vet near your home before you need it. You don't want to be searching at 11 pm."
},
{
"p": "<b>PetCuro Hospital & Surgery, Race Course:</b> a pet hospital that does surgery as well as regular consultations."
},
{
"ul": [
"<b>Alpha-Vets Pet Clinic, near Balliwala Chowk:</b> a clinic with its own pharmacy and pet supplies.",
"<b>Pet Medics Veterinary Care & Diagnostic Centre, Kaulagarh Road:</b> veterinary care and diagnostics.",
"<b>PET+ Complete Veterinary Care, Race Course:</b> veterinary care, including skin and dermatology.",
"<b>Tip:</b> ask your vet whether they handle emergencies, and what you should do after hours."
]
},
{
"img": "corgi",
"cap": "Dehradun's mild winters are ideal for long walks."
},
{
"h": "Pet shops and kennels"
},
{
"p": "<b>The Pet Nation, Patel Nagar:</b> pet supplies, plus boarding and grooming."
},
{
"p": "<b>Bark N Bite Pet Shop and Bark for Love, Chakrata Road (opposite The Doon School):</b> two pet shops on the busy Chakrata Road stretch."
},
{
"p": "<b>Pure and Sure Dog Kennel, Laxman Chowk.</b>"
},
{
"p": "<b>Oh My Pets, Kanwali:</b> a pet store with grooming, a pet bakery and dog clothes."
},
{
"h": "Pet grooming"
},
{
"ul": [
"<b>Happy Tails Pet Grooming Salon, Kaulagarh Road.</b>",
"<b>Grooming Tales, Sahastradhara Road.</b>",
"Several pet shops also do grooming, so ask when you visit."
]
},
{
"img": "dog-2",
"cap": "Early mornings are the best time for a walk in summer."
},
{
"h": "Walking your dog in Dehradun"
},
{
"p": "Early mornings are the best time, especially in summer, before the roads heat up."
},
{
"p": "Quiet residential roads in Dalanwala and upper Rajpur Road are pleasant for walks."
},
{
"p": "Carry water for your dog and clean up after them. It's the reason some neighbourhoods stay friendly to dog walkers."
},
{
"p": "Avoid busy markets like Paltan Bazaar. They're crowded and noisy, and most dogs hate it."
},
{
"h": "Taking your pet up to the hills"
},
{
"ul": [
"The roads to Mussoorie and beyond are steep and winding. If your pet gets car-sick, short breaks help.",
"Check that your hotel or homestay allows pets before you book, not when you arrive.",
"Carry vaccination records when you travel."
]
},
{
"h": "Choosing a pet boarding service"
},
{
"ul": [
"Visit before you book, and look at where the animals actually sleep.",
"Ask how often pets are walked and fed.",
"Ask for references from other owners."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Where can I find a 24-hour vet in Dehradun?",
"Emergency hours change, so call clinics directly and ask. Keep the number of the clinic nearest to you saved on your phone."
],
[
"Are there pet boarding services in Dehradun?",
"Yes. Several pet shops and kennels in the city offer boarding. Visit before booking."
],
[
"Is Dehradun a good city for dogs?",
"Yes. The mild climate and green spaces make it a pleasant city for dogs, especially in winter."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Open Explore → For Pets to see every pet shop, vet and groomer in Dehradun with directions. Own a pet business? Get listed for free.",
"cta": {
"href": "/explore/pets/pet-shops/",
"label": "Browse Pet shops & vets"
}
}
]
},
{
"slug": "dehradun-student-guide",
"t": "Moving to Dehradun as a Student: Coaching, Study Spaces, PGs and Budget Tips",
"seo": "PG in Dehradun for Students: A Complete Guide (2026)",
"desc": "Moving to Dehradun for college or coaching? Finding a PG in Dehradun, the best student areas, self-study libraries, getting around and living on a budget.",
"cat": "Students",
"min": 3,
"date": "23 Oct 2026",
"img": "cafe-reading",
"ex": "Moving to Dehradun for college or coaching? Finding a PG in Dehradun, the best student areas, self-study libraries, getting around and living on a budget.",
"sec": "education",
"sub": "coaching",
"body": [
{
"p": "Every year, thousands of students move to Dehradun for college, school or exam coaching. If you're one of them, the first few weeks can feel like a lot: finding a PG, figuring out which side of the city you should live on, working out how the vikrams run."
},
{
"p": "This guide covers the basics. Where to stay, where to study, how to get around, and how to make your monthly budget last till the end of the month."
},
{
"h": "Which areas suit students?"
},
{
"ul": [
"<b>Prem Nagar and Nanda ki Chowki:</b> close to several colleges on the Chakrata Road side.",
"<b>Ballupur, GMS Road and Kanwali:</b> lots of PGs, libraries and coaching centres.",
"<b>Karanpur and the DAV College area:</b> an old student hub near the city centre.",
"<b>Clement Town and Turner Road:</b> quieter, with colleges nearby."
]
},
{
"p": "Pick your area based on your college or coaching centre first, and everything else second. Dehradun's traffic can make a long daily commute really tiring, especially in the monsoon."
},
{
"img": "corridor",
"cap": "Self-study libraries have spread across the city."
},
{
"h": "Finding a PG or hostel in Dehradun"
},
{
"p": "Karanpur, Ballupur and GMS Road are among the most popular PG areas. When you go to see a place:"
},
{
"ul": [
"Look at the room in daylight, and check the bathroom too.",
"Ask exactly what the rent covers: food, Wi-Fi, laundry, electricity.",
"Ask about the rules: guests, curfew, notice period.",
"Talk to someone who already lives there, if you can. They'll tell you things the owner won't.",
"Get the deposit and rent terms in writing."
]
},
{
"h": "Study spaces and libraries"
},
{
"p": "Self-study libraries have become very popular across Dehradun, especially around Balliwala Chowk and Kanwali Road. You pay a monthly fee and get a quiet desk, Wi-Fi and fixed timings. Lakshya Library and Eklavya Modern Library on Kanwali Road and Work and Study Co. in Vijay Park are a few examples."
},
{
"tip": "visit at the time you actually plan to study, so you can check the noise and whether seats are free."
},
{
"h": "Coaching institutes"
},
{
"p": "Dehradun has coaching for banking, SSC, defence exams (NDA, CDS, AFCAT), CAT, CLAT and CUET. Before you join one:"
},
{
"ul": [
"Sit in on a demo class.",
"Ask about batch size and who the faculty are.",
"Talk to current or past students.",
"Compare fees and refund policies, in writing."
]
},
{
"img": "w-doonu",
"cap": "Dehradun is home to universities, colleges and coaching centres."
},
{
"h": "Getting around"
},
{
"p": "App-based cabs and autos are easy to find."
},
{
"p": "Shared vikrams (tempos) run on fixed routes and are the cheapest way to get around. Ask a senior which number goes where."
},
{
"p": "If you live a few kilometres from college, a cycle or scooter makes life much easier."
},
{
"h": "Eating on a budget"
},
{
"p": "Many PGs include meals, so ask before you sign."
},
{
"p": "Street food like bun tikki, momos and chole is cheap and filling. Our street food guide has the best spots."
},
{
"p": "Local dhabas near colleges serve thali-style meals at student prices."
},
{
"p": "If you cook, the weekly sabzi markets are cheaper than supermarkets."
},
{
"h": "Weekends that don't cost much"
},
{
"ul": [
"Walk Rajpur Road and sit at a café.",
"Go to Robber's Cave or Sahastradhara with friends.",
"Explore Paltan Bazaar and its street food.",
"Take the bus up to Mussoorie for the day.",
"For more ideas, see our list of things to do in Dehradun."
]
},
{
"h": "Frequently asked questions"
},
{
"faq": [
[
"Which area is best for students in Dehradun?",
"It depends on where your college or coaching centre is. Prem Nagar, Ballupur, GMS Road and Karanpur are the most popular student areas."
],
[
"Are there self-study libraries in Dehradun?",
"Yes. Many of them are around Balliwala Chowk and Kanwali Road."
],
[
"Is Dehradun good for exam coaching?",
"Dehradun has coaching institutes for banking, SSC, defence and management entrance exams, among others."
]
]
},
{
"h": "Find more on Doon Dekho"
},
{
"p": "Open Explore → Education and Explore → Stays to see coaching centres, libraries and PGs with directions. Run a PG, library or coaching centre? Get listed for free.",
"cta": {
"href": "/explore/education/coaching/",
"label": "Browse Coaching & libraries"
}
}
]
}
];
window.POSTS = window.NEW_POSTS.concat(window.POSTS);
