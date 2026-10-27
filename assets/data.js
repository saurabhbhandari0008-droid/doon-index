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
 {slug:"48-hours-in-dehradun",t:"48 hours in Dehradun",cat:"Guides",min:8,date:"20 Oct 2026",img:"hero-valley",
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
 {slug:"rajpur-road-walk",t:"Rajpur Road, end to end, on foot",cat:"Walks",min:6,date:"14 Oct 2026",img:"rajpur-road",
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
 {slug:"paltan-bazaar-food",t:"A bun-tikki crawl through Paltan Bazaar",cat:"Food",min:4,date:"8 Oct 2026",img:"food-stall",
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
 {slug:"choosing-school-dehradun",t:"Day school or boarding? Choosing a school in Dehradun",cat:"Schools",min:7,date:"1 Oct 2026",img:"corridor",
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
 {slug:"robbers-cave-guide",t:"Robber’s Cave, before the crowds",cat:"Hidden gems",min:5,date:"24 Sep 2026",img:"river",
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
 {slug:"litchi-season",t:"Litchi season: when and where",cat:"Seasonal",min:3,date:"18 Sep 2026",img:"valley-hills",
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
