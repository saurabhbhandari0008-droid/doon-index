/* Doon Dekho — content.
   Every photo has a key (e.g. "bazaar").
   TO USE YOUR OWN PHOTO: save it as images/<key>.jpg (e.g. images/bazaar.jpg)
   and add the key to LOCAL_PHOTOS below, e.g. ["bazaar","momos"].
   Keys not listed here load the free Unsplash photo instead. */
window.LOCAL_PHOTOS = [];

window.PHOTOS = {
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
  "cups":           {u:"1560228022-f1a3298022e9", h:200}
};

window.HERO_SLIDES = [
  {img:"hero-valley", cap:"The Doon Valley", sub:"Between the Shivaliks and the Himalaya"},
  {img:"hero-forest", cap:"Robber’s Cave", sub:"Guchhupani · 8 km from the city"},
  {img:"hero-cafe",   cap:"Rajpur Road", sub:"Cafés, bakeries and old bungalows"},
  {img:"hero-market", cap:"Paltan Bazaar", sub:"The old market after dark"}
];

window.AREAS = ["Rajpur Road","Paltan Bazaar","Clock Tower","Chakrata Road","Sahastradhara Road","Dalanwala","Clement Town","Mussoorie Road","Selaqui"];
window.CATS = {cafe:"Cafés",street:"Street food",shop:"Shopping",place:"Places",school:"Schools",gem:"Hidden gems"};

window.PLACES = [
 {id:1,n:"Ellora’s Melting Moments",c:"cafe",a:"Rajpur Road",p:"₹₹",img:"bakery",f:1,d:"A decades-old Dehradun bakery, loved for its rusks, cheese straws and plum cake. Locals carry boxes of it to relatives across the country.",best:"Morning",tip:"Buy the rusks to take home and the cheese straws to eat right away."},
 {id:2,n:"Kalsang Friends Corner",c:"cafe",a:"Rajpur Road",p:"₹₹",img:"momos-2",d:"Tibetan kitchen serving thukpa, thenthuk, shapta and steamed momos. Busy on weekend evenings.",best:"Dinner",tip:"Order the thenthuk on a cold evening."},
 {id:3,n:"Ghanta Ghar momo cart",c:"street",a:"Clock Tower",p:"₹",img:"momos",f:1,d:"Steamed and fried momos with a sharp red chutney, served from a cart near the Clock Tower.",best:"Evening",tip:"Ask for the chutney on the side if you don’t like it hot."},
 {id:4,n:"Paltan Bazaar bun-tikki",c:"street",a:"Paltan Bazaar",p:"₹",img:"food-stall",d:"Soft bun, crisp aloo tikki, onions and green chutney. The classic Paltan Bazaar evening snack.",best:"After 6 pm",tip:"Carry change. Most thelas take cash or UPI."},
 {id:5,n:"Paltan Bazaar",c:"shop",a:"Paltan Bazaar",p:"₹",img:"bazaar",d:"The old market that runs down from the Clock Tower: woollens, spices, basmati, shoes and plenty of bargaining.",best:"Late afternoon",tip:"Park outside and walk in. The lanes are narrow."},
 {id:6,n:"Basmati & spice seller",c:"shop",a:"Paltan Bazaar",p:"₹",img:"rice",d:"Loose Doon basmati, pahadi dals, rajma and whole spices sold by weight.",best:"Morning",tip:"Ask which batch is from this year’s harvest."},
 {id:7,n:"Hillside garden café",c:"cafe",a:"Mussoorie Road",p:"₹₹₹",img:"cafe-plants",d:"Wood-fired pizza, coffee and valley views from a terraced garden on the way up to the hills.",best:"Sunset",tip:"Book a terrace table on weekends."},
 {id:8,n:"Riverside Maggi point",c:"street",a:"Sahastradhara Road",p:"₹",img:"street-cook",d:"Masala Maggi, bread pakoda and cutting chai by the water.",best:"Monsoon",tip:"Go on a weekday. Weekends get crowded."},
 {id:9,n:"Forest Research Institute",c:"place",a:"Chakrata Road",p:"Entry fee",img:"fri",f:1,d:"A grand colonial-era building set in a huge forest campus, with museums on forestry and wood. One of the city’s most photographed landmarks.",best:"Morning",tip:"Give yourself two hours. The campus is bigger than it looks."},
 {id:10,n:"Mindrolling Monastery",c:"place",a:"Clement Town",p:"Free",img:"monastery",d:"A tall stupa, prayer halls and quiet gardens in Clement Town, with a small Tibetan market outside.",best:"Late afternoon",tip:"Climb to the upper floors of the stupa for the view."},
 {id:11,n:"Sahastradhara",c:"place",a:"Sahastradhara Road",p:"Free",img:"sahastradhara",d:"Sulphur springs, caves and a ropeway, about 14 km from the city centre.",best:"Before noon",tip:"Wear footwear that can get wet."},
 {id:12,n:"Book & record café",c:"cafe",a:"Dalanwala",p:"₹₹",img:"cafe-reading",d:"Second-hand books, filter coffee and long afternoons in old Dalanwala.",best:"Weekday afternoon",tip:"Ask about the reading nook upstairs."},
 {id:13,n:"Rajpur Road roastery",c:"cafe",a:"Rajpur Road",p:"₹₹",img:"cafe-signs",d:"Specialty coffee, pour-overs and all-day breakfast near Dilaram Chowk.",best:"Breakfast",tip:"Try the cold brew in summer."},
 {id:14,n:"Doon woollens market",c:"shop",a:"Clock Tower",p:"₹₹",img:"cups",d:"Hand-knit sweaters, caps and shawls from hill cooperatives. Best stock arrives in October.",best:"Winter",tip:"Check the knitting at the seams before you buy."},
 {id:15,n:"Clement Town Tibetan market",c:"shop",a:"Clement Town",p:"₹",img:"cafe-benches",d:"Prayer flags, singing bowls, incense and small cafés near the monastery.",best:"Evening",tip:"Pair it with a monastery visit."}
];

window.GEMS = [
 {n:"Robber’s Cave",alt:"Guchhupani · 8 km",img:"river",d:"A narrow river gorge where the stream vanishes underground and returns. Walk it barefoot.",best:"8 am",tip:"Arrive early. The tea stalls at the entrance open around nine.",post:"robbers-cave-guide"},
 {n:"Tapkeshwar Temple",alt:"Garhi Cantt · cave shrine",img:"forest",d:"Water drips onto the Shivling inside a cave by the river.",best:"Morning",tip:"Visit on a weekday to avoid queues."},
 {n:"Lachhiwala",alt:"22 km · forest pools",img:"mountain",d:"Shallow forest pools and sal trees, best for a quiet weekday picnic.",best:"Weekday",tip:"Carry your own food and take your trash back."},
 {n:"Mussoorie road views",alt:"Up to 2,000 m",img:"ropeway",d:"The drive up past Kolhukhet for the clearest views over the valley.",best:"Winter morning",tip:"Clear skies after rain give the best views."},
 {n:"Malsi foothills",alt:"700 m · deer park",img:"horses",d:"Gentle slopes and shaded walks on the way to Mussoorie.",best:"Afternoon",tip:"Stop at a roadside Maggi point on the way back."}
];

window.HOODS = [
 {n:"Rajpur Road",d:"Cafés, bakeries and old bungalows",img:"rajpur-road"},
 {n:"Paltan Bazaar",d:"The old market and street food",img:"bazaar"},
 {n:"Clock Tower",d:"The heart of the city",img:"clock-tower"},
 {n:"Sahastradhara Road",d:"Rivers, springs and Maggi points",img:"sahastradhara"},
 {n:"Clement Town",d:"Monastery and Tibetan quarter",img:"aerial"}
];

window.SCHOOLS = [
 {n:"The Doon School",a:"Chakrata Road",board:"IB / ISC",type:"Boarding",g:"Boys",d:"Founded in 1935 on the Chandbagh estate."},
 {n:"Welham Girls’ School",a:"Dalanwala",board:"ICSE / ISC",type:"Boarding",g:"Girls",d:"One of India’s best-known girls’ boarding schools."},
 {n:"Welham Boys’ School",a:"Dalanwala",board:"CBSE",type:"Boarding",g:"Boys",d:"Boarding school in the heart of the city."},
 {n:"Selaqui International School",a:"Selaqui",board:"CBSE",type:"Boarding",g:"Co-ed",d:"Large residential campus west of the city."},
 {n:"St. Joseph’s Academy",a:"Rajpur Road",board:"ICSE / ISC",type:"Day",g:"Boys",d:"Long-established day school on Rajpur Road."},
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
