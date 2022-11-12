import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

list: any = 'datalist';
private datalist: User [] =[{
  id: 1,
  catId: 1000,
  name: 'Az asszertivitás világa',
  description: 'Hogyan kerüld el a kommunikációs csapdákat? Hogyan védd meg Magad, ha agresszíven kommunikálnak Veled? Hogyan tudod erősen, határozottan képviselni az érdekeid? Hogyan tudsz megszabadulni a túlzott alkalmazkodásodtól? Hogyan kezeld indulataidat és dühödet?',
  image: src/assets/33.png;
  price: 4000,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 2,
  catId: 1100,
  name: 'Az alkímiai konjukció',
  description: 'Jung az 1920-as évektől kezdve nagy figyelmet szentelt az alkímiának, mert úgy vélte, bensőséges kapcsolatban áll azokkal a jelenségekkel, amelyekkel a tudattalan pszichológiája gyakorlati okokból kénytelen foglalkozni.',
  image: src/assets/32.png;
  price: 5000,
  stock: 150,
  featured: true,
  active: true,
}

{
  id: 3,
  catId: 1200,
  name: 'Álmok',
  description: 'Jung, Descartes, Szókratész, Hannibál és más híres emberek álmainak elemzése A kötetben összegyűjtött írásokban Marie-Louise von Franz, Carl Gustav Jung egyik legismertebb tanítványa nemcsak pszichológiai, hanem történelmi, vallási és filozófiai szempontból is érdekes és értékes betekintést nyújt az álomelemzés tudományába.',
  image: src/assets/32.png;
  price: 4800,
  stock: 200,
  featured: true,
  active: true,
}
{
  id: 4,
  catId: 1300,
  name: 'Az elmebetegségek pszichogenezise',
  description: 'A magyar nyelven eddig még nem publikált kötet Jung munkásságának hazánkban alig ismert oldalát mutatja be. A kilenc írás elsősorban a tudattalan és a skizofrénia (akkori elnevezéssel: dementia praecox) viszonyát tárgyalja. Központi témájuk a szerző azon meggyőződése, hogy a skizofrén betegek kezelésében döntő fontosságú a pszichológiai aspektus.',
  image: src/assets/43.png;
  price: 7000,
  stock: 11,
  featured: true,
  active: true,
}
{
  id: 5,
  catId: 1400,
  name: 'Lélektani típusok',
  description: 'Ez a könyv a gyakorlati pszichológia területén végzett közel húszéves munka gyümölcse. Fokozatosan született meg a gondolataimban, részben a pszichiátria és az idegorvosi gyakorlat számtalan benyomásából és tapasztalatából, részben a társadalom valamennyi rétegéből kikerülő emberekkel való foglalkozásból, valamint barátokkal és ellenségekkel.',
  image: src/assets/42.png;
  price: 7800,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 6,
  catId: 1500,
  name: 'A jövő pszichológiája - A pszichológia jövője',
  description: 'Stanislav Grof, a transzperszonális pszichológia egyik alapítója ebben a könyvében tudományos pályájának eddigi eredményeit és korábbi műveit foglalja össze. Grof kutatási eredményeire alapozva azt bizonyítja, hogy újra kell gondolnunk a pszichológia és a pszichiátria jelenlegi alapfeltevéseit és fogalmait, az emberi tudat természetéről .',
  image: src/assets/63.png;
  price: 4800,
  stock: 20,
  featured: true,
  active: true,
}
{
  id: 7,
  catId: 1600,
  name: 'Én és te',
  description: 'Az emberek nagyon gyakran a megalkuvást hívják alkalmazkodásnak, mint ahogy a biztonságot hívják boldogságnak. Éppolyan önbecsapás mind a kettő." Dr. Csernus Imre élő előadásai mindig népszerűek, ha azonban a párkapcsolatok adják a témát, kivétel nélkül zsúfolásig megtelik a terem. Miért okoz olyan gyakran problémát az, amire valamennyien vágyunk.',
  image: src/assets/36.png;
  price: 4900,
  stock: 7,
  featured: true,
  active: true,
}
{
  id: 8,
  catId: 1700,
  name: 'Örökölt sors',
  description: 'Minden önismereti úton eljön a pillanat, amikor rádöbbenünk, hogy elakadásaink, szorongásaink, visszahúzó negatív mintáink, kudarcos párkapcsolataink, de akár testi tüneteink gyökerei is a távoli múltba nyúlnak vissza. Felmenőink traumái, feldolgozatlan veszteségei, korlátozó hiedelmei mind ott visszhangoznak a mindennapjainkban, láthatatlanul.',
  image: src/assets/57.png;
  price: 7000,
  stock: 15,
  featured: true,
  active: true,
}
{
  id: 9,
  catId: 1800,
  name: 'Sorsdöntő találkozások - Szülők és gyermekek',
  description: '',
  image: src/assets/45.png;
  price: 2000,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 10,
  catId: 1900,
  name: ': Normális vagy - Trauma, betegség és gyógyulás mérgező világunkban',
  description: 'A test lázadása világhírű szerzője eddigi legátfogóbb és legteljesebb könyvében a betegségek valódi okait kutatja, miközben éles kritikát fogalmaz meg a minket körülvevő mérgező világról, valamint utat mutat az egészség és a gyógyulás felé. Máté Gábor, magyar származású.',
  image: src/assets/25.png;
  price: 4700,
  stock: 11,
  featured: false,
  active: false,
}
{
  id: 11,
  catId: 2000,
  name: 'A szabadság szerelmesei',
  description: 'Szenvedélyek és árulások, szerelem és bosszú a forradalom és a szabadságharc viharaiban. Az Anna-bál szerelmeseiből megismert Györöky Ilka és családja története folytatódik a méltán híres balatonfüredi reformkor következő évtizedében. Az 1840-es években még az eddiginél is pezsgőbb és színesebb társasági és kulturális élet zajlik.',
  image: src/assets/27.png;
  price: 5600,
  stock: 8,
  featured: true,
  active: true,
}
{
  id: 12,
  catId: 2100,
  name: 'A polip haragja',
  description: '2029-et írunk. A klímakatasztrófa bekövetkezett, az emberiség a túlélésért harcol. A nagy hatalmi tömbök szövetsége, a Klímaszövetség gátat akar vetni a káosznak és az éhség-háborúknak. A legfontosabb eszközük egy szuperszámítógép - amely azonban egy egyformán zseniális és megszállott bűnöző kezébe kerül. ',
  image: src/assets/17.png;
  price: 4900,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 13,
  catId: 2200,
  name: 'A test lázadása - Ismerd meg a stresszbetegségeket',
  description: 'A rák, a szenvedélybetegségek, sőt majd minden krónikus betegség visszavezethető a gyermekkori negatív élményekre és azok életünkre, viselkedésünkre és egészségünkre gyakorolt hatására - vallja a magyar származású, világhírű tudós, dr. Máté Gábor. Az emberek testi egészsége nem független az érzelmeiktől és a lelkiállapotuktól.',
  image: src/assets/16.png;
  price: 4000,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 14,
  catId: 2300,
  name: 'Heartstopper 3. - Szívdobbanás - Fülig beléd zúgtam 3. - képregény',
  description: 'CARTE POSTALE Szia Tori! Párizs csodálatos! Én, Nick és a barátaink szuperül érezzük magunkat! Viszont... volt némi dráma Taóval, és... hát, csomó minden történt. Majd otthon elmesélem!! Charlie x x x " Teljességgel elragadó. Aranyos, romantikus, kedves. ',
  image: src/assets/24.png;
  price: 4000,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 15,
  catId: 2400,
  name: 'Tűz és vér',
  description: 'Több évszázaddal a Trónok harca eseményei előtt a Targaryen-ház - a Valyria végzetét egyedül túlélő sárkányúr család - Sárkánykőről hódította meg Westeros marakodó királyságait. A Tűz & Vér a Vastrón megalkotójától, Hódító Aegontól veszi fel a történet fonalát, és egészen a dinasztiát majdnem elpusztító polgárháborúig regéli el.',
  image: src/assets/21.png;
  price: 3200,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 16,
  catId: 2500,
  name: 'Álszemérem',
  description: 'Párizs, 1701. Constance Clavieri, a tizennyolc éves nemes lány, a nővé válás küszöbén áll. Nővére házasságát elrendezte a családja, így hamarosan ő kerül sorra. Boldog lehetne, de életét beárnyékolja, hogy gyakran olyan helyze. ',
  image: src/assets/20.png;
  price: 7800,
  stock: 6,
  featured: true,
  active: true,
}
{
  id: 17,
  catId: 2600,
  name: 'Érzéki játék',
  description: 'Robbanékony, csodálatos, érzelmileg túlfűtött, szédületes románc!" - The Lushy Reader "Egyenesen a szívet célozza meg, megragadja és nem engedi el." - Book Surfing Reviews "Tüzes és kiszámíthatatlan." - Woman who stare at books Max Yearwooddal egy vakrandin ismerkedtem meg. Elképesztően jóképű volt, humoros.',
  image: src/assets/19.png;
  price: 2700,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 18,
  catId: 2700,
  name: 'Ugly Love - Csúf szerelem',
  description: 'Ha meg akarod szegni a szabályokat, készülj fel rá, hogy összetörik a szíved. Amikor Tate Collins találkozik Miles Archer pilótával, tudja, hogy ez nem szerelem első látásra, sőt, még barátságnak is kevés. Az egyetlen, ami összeköti őket, a tagadhatatlan, kölcsönös fizikai vonzalom. ',
  image: src/assets/7.png;
  price: 9600,
  stock: 7,
  featured: true,
  active: true,
}
{
  id: 19,
  catId: 2800,
  name: 'A szerelem képlete',
  description: 'Harmadéves doktorandusz hallgatóként Olive nem hisz a tartós romantikus kapcsolatokban, de a legjobb barátnője igen, és ő emiatt kerül ebbe a helyzetbe. Anh meggyőzéséhez, hogy randizik és jó úton halad a ,,boldogan éltek, míg meg nem haltak" felé, többre van szüksége néhány kézlegyintéses Jeditrükknél. ',
  image: src/assets/23.png;
  price: 7000,
  stock: 80,
  featured: true,
  active: true,
}
{
  id: 20,
  catId: 2900,
  name: 'A siker legmagasabb szintje',
  description: 'Casper Shih (1937) a kínai hagyományokon, filozófián alapuló modern üzletfilozófia atyja. Fontos szerepe volt Tajvan gazdasági növekedésében, illetve Kína globális versenyképességének javulásában. Dr. Shih modellje elsődleges hangsúlyt fektet az emberekre, és a szervezetben dolgozók pozitív kapcsolataira. ',
  image: src/assets/64.png;
  price: 1200,
  stock: 57,
  featured: true,
  active: true,
}
{
  id: 21,
  catId: 3000,
  name: 'A hobbit - Egyszer oda, aztán vissza',
  description: 'Ha megmozgatják a fantáziádat az oda és vissza történő utazások, amelyek kivezetnek a kényelmes nyugati világból, a Vadon szegélyén túlra, és érdekel egy egyszerű (némi bölcsességgel, némi bátorsággal és jelentős szerencsével megáldott) hős, akkor ez a könyv tetszeni fog, mivel épp egy ilyen út és utazó leírása található benne. ',
  image: src/assets/33.png;
  price: 6500,
  stock: 55,
  featured: true,
  active: true,
}
{
  id: 22,
  catId: 3100,
  name: 'Halloween és a halál'
  description: 'A szép dolgokat nézni kellemes elfoglaltság, de az ember már-már elvből utasítja el a szépséget magát. Egy nő, persze, megengedheti magának, hogy szép legyen, gondolta Hercule Poirot, abban azonban egyáltalán nem volt biztos, mit gondoljon a férfiúi szépségről. ',
  image: src/assets/54.png;
  price: 7800,
  stock: 78,
  featured: true,
  active: true,
}
{
  id: 23,
  catId: 3200,
  name: 'A sittafordi rejtély',
  description: 'Soha életemben nem éreztem ilyen hideget - mondta halkan maga elé. - Szegény papa, hogy bírtad ezt a világháborúban? Ennél semmi sem lehet rosszabb." Szokatlanul kemény tél köszönt Sittafordra. A kitartó hóesés Sittaford Lakot is elvágja a külvilágtól, így Mrs. Willett és vendégei az ötórai tea után asztaltáncoltatásba kezdenek. ',
  image: src/assets/22.png;
  price: 6500,
  stock: 544,
  featured: true,
  active: true,
}
{
  id: 24,
  catId: 3300,
  name: 'Elveszett mesék könyve 1.',
  description: 'J.R.R. Tolkien nem csupán regényíró volt. Tudományos munkássága mellett élete fő műve egy több mint 50 éven keresztül folyamatosan bővített és javított saját mitológiai rendszer, amelyet átfont az általa kidolgozott mesterséges nyelvek. E páratlan mítosz-ciklus legismertebb darabjai A Gyűrűk Ura és A hobbit című regények.',
  image: src/assets/37.png;
  price: 4250,
  stock: 9,
  featured: true,
  active: true,
}
{
  id: 25,
  catId: 3400,
  name: 'Elveszett mesék könyve 2.',
  description: 'J.R.R. Tolkien nem csupán regényíró volt. Tudományos munkássága mellett élete fő műve egy több mint 50 éven keresztül folyamatosan bővített és javított saját mitológiai rendszer, amelyet átfont az általa kidolgozott mesterséges nyelvek. E páratlan mítosz-ciklus legismertebb darabjai A Gyűrűk Ura és A hobbit című regények.',
  image: src/assets/39.png;
  price: 4700,
  stock: 510,
  featured: true,
  active: true,
}
{
  id: 26,
  catId: 3500,
  name: 'Kardok vihara - A tűz és jég dala III.',
  description: 'Eső áztatja Westeros felégetett földjét és a temetetlen holtakat. Az öt király háborúja a végéhez közeledik: a megsemmisítő vereséget szenvedett Stannis Baratheon Sárkánykőn várja a kegyelemdöfést, míg a kölyökkirály, Joffrey Baratheon Királyvárban ül diadalt. A minden egyes csatáját megnyerő, ám családja ősi székhelyét elvesztő Ifjú Farkas.',
  image: src/assets/14.png;
  price: 7800,
  stock: 57,
  featured: true,
  active: true,
}
{
  id: 27,
  catId: 3600,
  name: 'Égi ászok - Wild Cards 2.',
  description: '1946-ban az emberi DNS-t átíró idegen vírus szabadult el New York légterében. A fertőzöttek kilencven százaléka meghalt, a túlélők nagy része bizarr módon eltorzult. Egy maréknyi ember pedig azóta emberfeletti képességeket birtokol... A Wild Cards-univerzumban játszódó sorozat az azóta eltelt idő, a hősök (ászok) és torzszülöttek (jokerek)',
  image: src/assets/2.png;
  price: 6900,
  stock: 78,
  featured: true,
  active: true,
}
{
  id: 28,
  catId: 3700,
  name: 'Varjak lakomája - A tűz és jég dala IV.',
  description: 'Csalóka béke honol Westeros sokat szenvedett földjén. A Lannister-ház minden ellenlábasát szétzúzta, ám a győzelemért szörnyű árat fizetett. A gyásztól csak még elszántabbá és ádázabbá váló Cersei uralma ingatag. Az anyakirálynő mindenhol ellenséget lát, és már élete egyetlen biztos pontjában, ikertestvérében és szerelmében sem bízik. ',
  image: src/assets/12.png;
  price: 7800,
  stock: 5,
  featured: false,
  active: false,
}
{
  id: 29,
  catId: 3800,
  name: 'Sárkányok tánca - A tűz és jég dala V.',
  description: 'Közeleg a tél. A hideg szelek feltámadtak a sokat szenvedett Hét Királyságban, ahol az öt király háborúja után a túlélőknek most az éhínséggel kell szembenézniük. Az emberek birodalmát védelmező Fal ifjú parancsnoka, Havas Jon a Mások elleni reménytelen küzdelemre készíti fel a szétzüllött Éjjeli Őrséget.',
  image: src/assets/13.png;
  price: 4700,
  stock: 12,
  featured: true,
  active: true,
}
{
  id: 30,
  catId: 3900,
  name: 'Tuf utazásai',
  description: 'Jóval azelőtt, hogy a Trónok harca nemzetközi sikerré vált, George R. R. Martin a kozmoszt mutatta be hű olvasóinak. A Tuf utazásai a bohókás és megnyerő Haviland Tuf, az akaratlan hős története, aki bolygóról bolygóra járva igyekszik helyesen cselekedni. Haviland Tuf egy tisztes űrkalmár, ráadásul nagy macskarajongó. ',
  image: src/assets/15.png;
  price: 5900,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 31,
  catId: 4000,
  name: 'Vaják: Egy csepp igazság',
  description: 'Mennyi igazság rejlik a mesékben? Geralt egy elhagyatott kúriához ér, ahol találkozik annak tulajdonosával, egy számkivetetten élő szörnyeteggel. Az emberi tulajdonságokkal rendelkező teremtmény beinvitálja a szörnyvadászt, és mesélni kezd a családjáról, az életéről... és az átokról, ami régóta sújtja.',
  image: src/assets/29.png;
  price: 7800,
  stock: 57,
  featured: true,
  active: true,
}
{
  id: 32,
  catId: 4100,
  name: 'AMaladie és más történetek',
  description: 'A legendás Vaják-sorozat szerzőjének legjobb novellái! A kötetben nyolc merész történet szerepel Andrzej Sapkowski írói pályájának különböző szakaszaiból. Megtalálhatók köztük klasszikus fantasysztorik éppúgy, mint sci-fik és politikai témájú írások, melyekben a szerzőtől megszokott módon a sötét témákat szellemes humor színesíti.',
  image: src/assets/28.png;
  price: 9800,
  stock: 500,
  featured: true,
  active: true,
}
{
  id: 33,
  catId: 4200,
  name: ': Kis karácsony, nagy karácsony',
  description: 'Ránézett az előtte terpeszkedő hatalmas faóriásra. Milyen méltóságteljes, és milyen dunyha vastagságú, hófehér palást borítja földig érő ágait. Mint valami sátor, akár meg is éjszakázhat alatta. Elfedi az, megvédi az erdő minden veszélyétől. Közben kitisztult az ég, s csillagok milliárdjai gyújtották meg kis lámpásaikat. ',
  image: src/assets/62.png;
  price: 1560,
  stock: 30,
  featured: true,
  active: true,
}
{
  id: 34,
  catId: 4300,
  name: 'Pöttyös Panni',
  description: 'Pöttyös Panni gyanakodva fogadta a pöttyöket, amelyek ruhájáról átszálltak rá, és éktelenül viszkettek. A bárányhimlő azonban kiváló alkalom volt arra is, hogy Panni és nagymamája az egész napot együtt töltse. Amikor pedig a pöttyök már megint csak a ruhán voltak, Panni újra játszhatott Péterkével, Tamarával, cicákkal, kutyákkal,',
  image: src/assets/55.png;
  price: 4500,
  stock: 570,
  featured: true,
  active: true,
}
{
  id: 35,
  catId: 4400,
  name: 'Mese Élijáhuról',
  description: 'A zsidóság mindenkor élt a mese erejével. A bibliai Sámson mesehős. Tóbit könyve, Zsuzsanna története valóságos mesefeldolgozások. A biblia utáni korban is számos mese született Hillélről, Johanan Ben Zakkairól, Rabbi Akibáról, és így tovább... A héber mesét általában zsidó vallásosság jellemzi. ',
  image: src/assets/61.png;
  price: 4700,
  stock: 51,
  featured: true,
  active: true,
}
{
  id: 36,
  catId: 4500,
  name: 'Nagy óvodáskönyvem - Mesék az óvodai beilleszkedés megkönnyítéséhez',
  description: 'Sziasztok! Fanni vagyok. Most volt a születésnapom, most lettem három éves. Anya azt mondta, hogy szeptembertől fogom kezdeni az óvodát. Ti már óvodások vagytok? Bevallom, hogy én egy kicsit tartok tőle. De Anya nyugtatgat, hogy ne izguljak, meglátom majd, hogy az ovi csuda jó hely. Tudjátok mit? Derítsük ki együtt, hogy milyen hely ez az óvoda!',
  image: src/assets/59.png;
  price: 7800,
  stock: 111,
  featured: true,
  active: true,
}
{
  id: 37,
  catId: 4600,
  name: 'Nagy télkönyvem - mesék a télre és a téli ünnepekre való ráhangolódáshoz',
  description: 'A természet állandó körforgása a gyermekek számára az évszakok váltakozásában figyelhető meg a leginkább. Nagymértékben támogathatjuk a gyerekek lelki egyensúlyának a fenntartását azzal, ha minden évszakban segítünk nekik összhangba kerülni a természettel, és együtt hangolódunk rá velük annak ritmusára testileg és lelkileg egyaránt. ',
  image: src/assets/58.png;
  price: 2500,
  stock: 57,
  featured: true,
  active: true,
}
{
  id: 38,
  catId: 4700,
  name: 'Mese Neked',
  description: 'Ebben a könyvben kilenc mese található, melyeket a szerző családjában élő gyermekek ihlettek. A főszereplők hétköznapi neve helyén bárkié állhatna, hiszen melyik kislány ne akarna egy délceg királyfi felesége lenni, vagy melyik kisfiú ne örülne, ha segíthetne egy kedves földönkívülinek? ',
  image: src/assets/60.png;
  price: 5600,
  stock: 56,
  featured: true,
  active: true,
}
{
  id: 39,
  catId: 4800,
  name: 'A karácsonyi jávorszarvas kalandjai',
  description: 'Van még manapság bárki is, aki hisz a Télapó létezésében? Hát Bertil biztos nem tartozik közéjük. Ám egyik nap Mr. Moose, a jávorszarvas csapódik be a háztetőbe, és onnan aztán a család nappalijába. Állítólag éppen a főnökével, Télapóval hajtott végre egy próbarepülést, amikor lezuhant. Mostantól aztán Bertilnek van min töprengenie.',
  image: src/assets/30.png;
  price: 6500,
  stock: 5,
  featured: true,
  active: true,
}
{
  id: 40,
  catId: 4900,
  name: 'A kisegér, aki karácsonyra hazatalált',
  description: 'Már csak öt nap van hátra karácsonyig, és Fülöpnek, a kisegérnek még meg kell oldania a Nagyon Különös Rejtélyt, ezért világ körüli kalandra indul. Útja során régi, kedves ismerősei mellett elbűvölő új barátok segítik. A szívet melengető, varázslatos történet huszonnégy és fél mesében bontakozik ki.',
  image: src/assets/31.png;
  price: 6200,
  stock: 52,
  featured: true,
  active: true,
}
{
  id: 41,
  catId: 5000,
  name: 'Sári nyuszi és a gyógyító szeretet',
  description: 'Vajon sikerülhet-e egyetlen nyuszilánynak szembeszállni a nehézségekkel, meglepni Mókus Miklóst meg a többi állatot, és megnyerni a nagy lombházépítő versenyt? Amikor elkezdődik az iskola, Mókus Miklós, akinek az édesapja a város legnagyobb építkezési vállalatának a tulajdonosa, lombházversenyre hívja ki a barátait. ',
  image: src/assets/51.png;
  price: 4500,
  stock: 145,
  featured: true,
  active: true,
}
{
  id: 42,
  catId: 5100,
  name: 'Pitypang és a Mikulás - Pitypang és Lili',
  description: 'Lili és Lotti már nagyon várják a Mikulást! De nemcsak ők, hanem Pitypang is. Még a cipőpucolásban is segít! De sajnos a Mikulás a kutyáknak nem hoz ajándékot, csak a gyerekeknek. Lilit nagyon bántja ez az igazságtalanság, ezért elhatározza, hogy ébren marad, és megvárja a Mikulást. ',
  image: src/assets/56.png;
  price: 2000,
  stock: 1,
  featured: false,
  active: true,
}
{
  id: 43,
  catId: 5200,
  name: 'Csengettyű, a karácsonyi póni 2. - A Sarkcsillag varázsa',
  description: 'A jó barátok együtt mindenre képesek! Csengettyű és a fiatal rénszarvasok izgatottan várják a Mikulást, hiszen itt az idő, hogy az ajándékokkal teli szánnal elkezdődjön a csodás utazás. Ám a Mikulás nem jön, és Csengettyű végül elhatározza, hogy elindul megkeresni őt. Izgalmas kaland veszi kezdetét... De vajon sikerrel jár a kis póni?',
  image: src/assets/35.png;
  price: 4000,
  stock: 15,
  featured: true,
  active: true,
}
{
  id: 44,
  catId: 5300,
  name: 'Örök éj',
  description: 'Amikor a vonzó, ám pénztelen Michael Rogers meglátja álmai otthonát, majd pár perccel később találkozik a bájos és mesésen gazdag örökösnővel, Ellie-vel, úgy érzi, minden álma egyszerre valóra vált. Nem hallgat az öreg cigányasszony figyelmeztetésére.',
  image: src/assets/9.png;
  price: 7800,
  stock: 500,
  featured: true,
  active: true,
}
{
  id: 45,
  catId: 5400,
  name: 'Chimneys titka',
  description: 'Mikor Anthony Cade, az ifjú szerencsevadász elvállalja, hogy barátja helyett eljuttat egy kéziratot egy angol könyvkiadóhoz, nem is sejti, hogy hamarosan nemzetközi diplomáciai bonyodalom kellős közepén találja magát. Valaki ugyanis a gyilkosságtól sem riad vissza, hogy megakadályozza a kies Herzoszlovákia restaurációját. ',
  image: src/assets/8.png;
  price: 9600,
  stock: 45,
  featured: true,
  active: true,
}
{
  id: 46,
  catId: 5500,
  name: 'Az alibi'
  description: 'A bíróság szerint Jacko Argyle egy piszkavassal brutálisan agyonverte anyját. Tettéért életfogytiglani börtön vár rá, ám nem raboskodik sokáig: tüdőgyulladás viszi el. Ekkor bukkan fel dr. Arthur Calgary, a fiatal kutató, aki épp most tért vissza antarktiszi expedíciójáról, és azt állítja, hogy Jacko biztosan ártatlan volt. ',
  image: src/assets/3.png;
  price: 7800,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 47,
  catId: 5600,
  name: 'A hajnali vendég - Klasszikus skandináv krimi',
  description: 'Ha egy magándetektív kikapcsolódásra vágyva, egy csendes vidéki szállodába utazik, valószínűleg sem csendes, sem nyugalmas napok nem várnak rá... Természetesen Asbjörn Krag magándetektívvel is ez történik. Első szállodai sétáján a hotelt övező csöndes erdőben két gyanús külsejű alakba botlik.',
  image: src/assets/6.png;
  price: 5800,
  stock: 50,
  featured: true,
  active: true,
}
{
  id: 48,
  catId: 5700,
  name: 'Lány a hóban',
  description: 'Magdalena Hansson újságíró viharos válása után hátat fordít Stockholmnak, és hatéves kisfiával gyerekkora színhelyére, Hagforsba költözik. Békét és nyugalmat remél a vidéki élettől, noha kissé tart az egyhangúságtól. Szilveszter éjszakáján azután nyoma vész a tizenhat éves Hedda Losjőnek. ',
  image: src/assets/41.png;
  price: 3500,
  stock: 54,
  featured: true,
  active: true,
}
{
  id: 49,
  catId: 5800,
  name: 'Mostohák',
  description: 'Százak láthatták volna, mégsem tűnik fel senkinek, amikor egy zsúfolt svédországi vonatról elrabolnak egy kislányt. Az anyja nem volt mellette, mert az egyik állomáson véletlenül lemaradt. A vonat személyzetét természetesen riasztották, hogy vigyázzanak az alvó gyerekre, ám mire a szerelvény befut a stockholmi főpályaudvarra, a kicsinek nyoma vész.',
  image: src/assets/3.png;
  price: 4500,
  stock: 15,
  featured: true,
  active: true,
}
{
  id: 50,
  catId: 5900,
  name: 'A vérfarkasok titka',
  description: 'Nagyapa bezárta maguk után az ajtót, majd többször aggodalmasan kilesett az ablakon. - Mi az? - kérdezte Herbert. - Semmi. - De látom, hogy van valami - makacskodott. - Valami nem stimmelt azzal a kutyával. Nagyapa megrázta a fejét. - Tévedtem - mondta. - Nem németjuhász volt. Sőt, nem is kutya. Valami más. Valami veszélyes. ',
  image: ssrc/assets/10.png
  price: 4200,
  stock: 5,
  featured: true,
  active: true,
}


]



  constructor() {

  }
getAll()

get()

create()

update()

delete()
}
