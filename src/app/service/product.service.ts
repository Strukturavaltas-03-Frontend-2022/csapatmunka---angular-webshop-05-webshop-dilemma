import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private list: Product[] = [
    {
      id: 1,
      catId: 1,
      name: 'Az asszertivitás világa',
      author: 'Pintér Tamás',
      description:
        'Hogyan kerüld el a kommunikációs csapdákat? Hogyan védd meg Magad, ha agresszíven kommunikálnak Veled? Hogyan tudod erősen, határozottan képviselni az érdekeid? Hogyan tudsz megszabadulni a túlzott alkalmazkodásodtól? Hogyan kezeld indulataidat és dühödet?',
      image: '/assets/images/33.png',
      price: 4000,
      stock: 50,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 2,
      catId: 1,
      name: 'Az alkímiai konjukció',
      author: 'Carl Gustav Jung',
      description:
        'Jung az 1920-as évektől kezdve nagy figyelmet szentelt az alkímiának, mert úgy vélte, bensőséges kapcsolatban áll azokkal a jelenségekkel, amelyekkel a tudattalan pszichológiája gyakorlati okokból kénytelen foglalkozni.',
      image: '/assets/images/32.png',
      price: 5000,
      stock: 150,
      featured: true,
      active: true,
      discounted: false,
    },

    {
      id: 3,
      catId: 2,
      name: 'Álmok',
      author: 'Marie-Louise von Franz',
      description:
        'Jung, Descartes, Szókratész, Hannibál és más híres emberek álmainak elemzése A kötetben összegyűjtött írásokban Marie-Louise von Franz, Carl Gustav Jung egyik legismertebb tanítványa nemcsak pszichológiai, hanem történelmi, vallási és filozófiai szempontból is érdekes és értékes betekintést nyújt az álomelemzés tudományába.',
      image: '/assets/images/32.png',
      price: 4800,
      stock: 200,
      featured: false,
      active: true,
      discounted: false,
    },
    {
      id: 4,
      catId: 3,
      name: 'Az elmebetegségek pszichogenezise',
      author: 'Carl Gustav Jung',
      description:
        'A magyar nyelven eddig még nem publikált kötet Jung munkásságának hazánkban alig ismert oldalát mutatja be. A kilenc írás elsősorban a tudattalan és a skizofrénia (akkori elnevezéssel: dementia praecox) viszonyát tárgyalja. Központi témájuk a szerző azon meggyőződése, hogy a skizofrén betegek kezelésében döntő fontosságú a pszichológiai aspektus.',
      image: '/assets/images/43.png',
      price: 7000,
      stock: 11,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 5,
      catId: 2,
      name: 'Lélektani típusok',
      author: 'Carl Gustav Jung',
      description:
        'Ez a könyv a gyakorlati pszichológia területén végzett közel húszéves munka gyümölcse. Fokozatosan született meg a gondolataimban, részben a pszichiátria és az idegorvosi gyakorlat számtalan benyomásából és tapasztalatából, részben a társadalom valamennyi rétegéből kikerülő emberekkel való foglalkozásból, valamint barátokkal és ellenségekkel.',
      image: '/assets/images/42.png',
      price: 7800,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 6,
      catId: 1,
      name: 'A jövő pszichológiája - A pszichológia jövője',
      author: 'Stanislav Grof',
      description:
        'Stanislav Grof, a transzperszonális pszichológia egyik alapítója ebben a könyvében tudományos pályájának eddigi eredményeit és korábbi műveit foglalja össze. Grof kutatási eredményeire alapozva azt bizonyítja, hogy újra kell gondolnunk a pszichológia és a pszichiátria jelenlegi alapfeltevéseit és fogalmait, az emberi tudat természetéről .',
      image: '/assets/images/63.png',
      price: 4800,
      stock: 20,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 7,
      catId: 3,
      name: 'Én és te',
      author: 'Dr. Csernus Imre',
      description:
        'Az emberek nagyon gyakran a megalkuvást hívják alkalmazkodásnak, mint ahogy a biztonságot hívják boldogságnak. Éppolyan önbecsapás mind a kettő." Dr. Csernus Imre élő előadásai mindig népszerűek, ha azonban a párkapcsolatok adják a témát, kivétel nélkül zsúfolásig megtelik a terem. Miért okoz olyan gyakran problémát az, amire valamennyien vágyunk.',
      image: '/assets/images/36.png',
      price: 4900,
      stock: 7,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 8,
      catId: 2,
      name: 'Örökölt sors',
      author: 'Orvos-Tóth Noémi',
      description:
        'Minden önismereti úton eljön a pillanat, amikor rádöbbenünk, hogy elakadásaink, szorongásaink, visszahúzó negatív mintáink, kudarcos párkapcsolataink, de akár testi tüneteink gyökerei is a távoli múltba nyúlnak vissza. Felmenőink traumái, feldolgozatlan veszteségei, korlátozó hiedelmei mind ott visszhangoznak a mindennapjainkban, láthatatlanul.',
      image: '/assets/images/57.png',
      price: 7000,
      stock: 15,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 9,
      catId: 2,
      name: 'Sorsdöntő találkozások - Szülők és gyermekek',
      author: 'Popper Péter, Ranschburg Jenő, Vekerdy Tamás',
      description:
        'Minden önismereti úton eljön a pillanat, amikor rádöbbenünk, hogy elakadásaink, szorongásaink, visszahúzó negatív mintáink, kudarcos párkapcsolataink, de akár testi tüneteink gyökerei is a távoli múltba nyúlnak vissza. Felmenőink traumái, feldolgozatlan veszteségei, korlátozó hiedelmei mind ott visszhangoznak a mindennapjainkban, láthatatlanul.',
      image: '/assets/images/45.png',
      price: 2000,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 10,
      catId: 3,
      name: 'Normális vagy - Trauma, betegség és gyógyulás mérgező világunkban',
      author: 'Dr. Máté Gábor, Máté Dániel',
      description:
        'A test lázadása világhírű szerzője eddigi legátfogóbb és legteljesebb könyvében a betegségek valódi okait kutatja, miközben éles kritikát fogalmaz meg a minket körülvevő mérgező világról, valamint utat mutat az egészség és a gyógyulás felé. Máté Gábor, magyar származású.',
      image: '/assets/images/25.png',
      price: 4700,
      stock: 11,
      featured: false,
      active: false,
      discounted: true,
    },
    {
      id: 11,
      catId: 1,
      name: 'A szabadság szerelmesei',
      author: 'Fábián Janka',
      description:
        'Szenvedélyek és árulások, szerelem és bosszú a forradalom és a szabadságharc viharaiban. Az Anna-bál szerelmeseiből megismert Györöky Ilka és családja története folytatódik a méltán híres balatonfüredi reformkor következő évtizedében. Az 1840-es években még az eddiginél is pezsgőbb és színesebb társasági és kulturális élet zajlik.',
      image: '/assets/images/27.png',
      price: 5600,
      stock: 8,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 12,
      catId: 1,
      name: 'A polip haragja',
      author: 'Dirk Rossmann, Ralf Hoppe',
      description:
        '2029-et írunk. A klímakatasztrófa bekövetkezett, az emberiség a túlélésért harcol. A nagy hatalmi tömbök szövetsége, a Klímaszövetség gátat akar vetni a káosznak és az éhség-háborúknak. A legfontosabb eszközük egy szuperszámítógép - amely azonban egy egyformán zseniális és megszállott bűnöző kezébe kerül. ',
      image: '/assets/images/17.png',
      price: 4900,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 13,
      catId: 1,
      name: 'A test lázadása - Ismerd meg a stresszbetegségeket',
      author: 'Dr. Máté Gábor',
      description:
        'A rák, a szenvedélybetegségek, sőt majd minden krónikus betegség visszavezethető a gyermekkori negatív élményekre és azok életünkre, viselkedésünkre és egészségünkre gyakorolt hatására - vallja a magyar származású, világhírű tudós, dr. Máté Gábor. Az emberek testi egészsége nem független az érzelmeiktől és a lelkiállapotuktól.',
      image: '/assets/images/16.png',
      price: 4000,
      stock: 50,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 14,
      catId: 2,
      name: 'Heartstopper 3. - Szívdobbanás - Fülig beléd zúgtam 3.',
      author: 'Alice Oseman',
      description:
        'CARTE POSTALE Szia Tori! Párizs csodálatos! Én, Nick és a barátaink szuperül érezzük magunkat! Viszont... volt némi dráma Taóval, és... hát, csomó minden történt. Majd otthon elmesélem!! Charlie x x x " Teljességgel elragadó. Aranyos, romantikus, kedves. ',
      image: '/assets/images/24.png',
      price: 4000,
      stock: 50,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 15,
      catId: 3,
      name: 'Tűz és vér',
      author: 'George R. R. Martin',
      description:
        'Több évszázaddal a Trónok harca eseményei előtt a Targaryen-ház - a Valyria végzetét egyedül túlélő sárkányúr család - Sárkánykőről hódította meg Westeros marakodó királyságait. A Tűz & Vér a Vastrón megalkotójától, Hódító Aegontól veszi fel a történet fonalát, és egészen a dinasztiát majdnem elpusztító polgárháborúig regéli el.',
      image: '/assets/images/21.png',
      price: 3200,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 16,
      catId: 2,
      name: 'Álszemérem',
      author: 'Borsa Brown',
      description:
        'Párizs, 1701. Constance Clavieri, a tizennyolc éves nemes lány, a nővé válás küszöbén áll. Nővére házasságát elrendezte a családja, így hamarosan ő kerül sorra. Boldog lehetne, de életét beárnyékolja, hogy gyakran olyan helyze. ',
      image: '/assets/images/20.png',
      price: 7800,
      stock: 6,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 17,
      catId: 1,
      name: 'Érzéki játék',
      author: 'Vi Keeland',
      description:
        'Robbanékony, csodálatos, érzelmileg túlfűtött, szédületes románc!" - The Lushy Reader "Egyenesen a szívet célozza meg, megragadja és nem engedi el." - Book Surfing Reviews "Tüzes és kiszámíthatatlan." - Woman who stare at books Max Yearwooddal egy vakrandin ismerkedtem meg. Elképesztően jóképű volt, humoros.',
      image: '/assets/images/19.png',
      price: 2700,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 18,
      catId: 3,
      name: 'Ugly Love - Csúf szerelem',
      author: 'Colleen Hoover',
      description:
        'Ha meg akarod szegni a szabályokat, készülj fel rá, hogy összetörik a szíved. Amikor Tate Collins találkozik Miles Archer pilótával, tudja, hogy ez nem szerelem első látásra, sőt, még barátságnak is kevés. Az egyetlen, ami összeköti őket, a tagadhatatlan, kölcsönös fizikai vonzalom. ',
      image: '/assets/images/7.png',
      price: 9600,
      stock: 7,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 19,
      catId: 2,
      name: 'A szerelem képlete',
      author: 'Ali Hazelwood',
      description:
        'Harmadéves doktorandusz hallgatóként Olive nem hisz a tartós romantikus kapcsolatokban, de a legjobb barátnője igen, és ő emiatt kerül ebbe a helyzetbe. Anh meggyőzéséhez, hogy randizik és jó úton halad a ,,boldogan éltek, míg meg nem haltak" felé, többre van szüksége néhány kézlegyintéses Jeditrükknél. ',
      image: '/assets/images/23.png',
      price: 7000,
      stock: 80,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 20,
      catId: 1,
      name: 'A siker legmagasabb szintje',
      author: 'Casper Shih',
      description:
        'Casper Shih (1937) a kínai hagyományokon, filozófián alapuló modern üzletfilozófia atyja. Fontos szerepe volt Tajvan gazdasági növekedésében, illetve Kína globális versenyképességének javulásában. Dr. Shih modellje elsődleges hangsúlyt fektet az emberekre, és a szervezetben dolgozók pozitív kapcsolataira. ',
      image: '/assets/images/64.png',
      price: 1200,
      stock: 57,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 21,
      catId: 2,
      name: 'A hobbit - Egyszer oda, aztán vissza',
      author: 'J. R. R. Tolkien',
      description:
        'Ha megmozgatják a fantáziádat az oda és vissza történő utazások, amelyek kivezetnek a kényelmes nyugati világból, a Vadon szegélyén túlra, és érdekel egy egyszerű (némi bölcsességgel, némi bátorsággal és jelentős szerencsével megáldott) hős, akkor ez a könyv tetszeni fog, mivel épp egy ilyen út és utazó leírása található benne. ',
      image: '/assets/images/33.png',
      price: 6500,
      stock: 55,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 22,
      catId: 3,
      name: 'Halloween és a halál',
      author: 'Agatha Christie',
      description:
        'A szép dolgokat nézni kellemes elfoglaltság, de az ember már-már elvből utasítja el a szépséget magát. Egy nő, persze, megengedheti magának, hogy szép legyen, gondolta Hercule Poirot, abban azonban egyáltalán nem volt biztos, mit gondoljon a férfiúi szépségről. ',
      image: '/assets/images/54.png',
      price: 7800,
      stock: 78,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 23,
      catId: 1,
      name: 'A sittafordi rejtély',
      author: 'Agatha Christie',
      description:
        'Soha életemben nem éreztem ilyen hideget - mondta halkan maga elé. - Szegény papa, hogy bírtad ezt a világháborúban? Ennél semmi sem lehet rosszabb." Szokatlanul kemény tél köszönt Sittafordra. A kitartó hóesés Sittaford Lakot is elvágja a külvilágtól, így Mrs. Willett és vendégei az ötórai tea után asztaltáncoltatásba kezdenek. ',
      image: '/assets/images/22.png',
      price: 6500,
      stock: 544,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 24,
      catId: 1,
      name: 'Elveszett mesék könyve 1.',
      author: 'J. R. R. Tolkien',
      description:
        'J.R.R. Tolkien nem csupán regényíró volt. Tudományos munkássága mellett élete fő műve egy több mint 50 éven keresztül folyamatosan bővített és javított saját mitológiai rendszer, amelyet átfont az általa kidolgozott mesterséges nyelvek. E páratlan mítosz-ciklus legismertebb darabjai A Gyűrűk Ura és A hobbit című regények.',
      image: '/assets/images/37.png',
      price: 4250,
      stock: 9,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 25,
      catId: 2,
      name: 'Elveszett mesék könyve 2.',
      author: 'J. R. R. Tolkien',
      description:
        'J.R.R. Tolkien nem csupán regényíró volt. Tudományos munkássága mellett élete fő műve egy több mint 50 éven keresztül folyamatosan bővített és javított saját mitológiai rendszer, amelyet átfont az általa kidolgozott mesterséges nyelvek. E páratlan mítosz-ciklus legismertebb darabjai A Gyűrűk Ura és A hobbit című regények.',
      image: '/assets/images/39.png',
      price: 4700,
      stock: 510,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 26,
      catId: 3,
      name: 'Kardok vihara - A tűz és jég dala III.',
      author: 'George R. R. Martin',
      description:
        'Eső áztatja Westeros felégetett földjét és a temetetlen holtakat. Az öt király háborúja a végéhez közeledik: a megsemmisítő vereséget szenvedett Stannis Baratheon Sárkánykőn várja a kegyelemdöfést, míg a kölyökkirály, Joffrey Baratheon Királyvárban ül diadalt. A minden egyes csatáját megnyerő, ám családja ősi székhelyét elvesztő Ifjú Farkas.',
      image: '/assets/images/14.png',
      price: 7800,
      stock: 57,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 27,
      catId: 2,
      name: 'Égi ászok - Wild Cards 2.',
      author: 'George R. R. Martin',
      description:
        '1946-ban az emberi DNS-t átíró idegen vírus szabadult el New York légterében. A fertőzöttek kilencven százaléka meghalt, a túlélők nagy része bizarr módon eltorzult. Egy maréknyi ember pedig azóta emberfeletti képességeket birtokol... A Wild Cards-univerzumban játszódó sorozat az azóta eltelt idő, a hősök (ászok) és torzszülöttek (jokerek)',
      image: '/assets/images/2.png',
      price: 6900,
      stock: 78,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 28,
      catId: 1,
      name: 'Varjak lakomája - A tűz és jég dala IV.',
      author: 'George R. R. Martin',
      description:
        'Csalóka béke honol Westeros sokat szenvedett földjén. A Lannister-ház minden ellenlábasát szétzúzta, ám a győzelemért szörnyű árat fizetett. A gyásztól csak még elszántabbá és ádázabbá váló Cersei uralma ingatag. Az anyakirálynő mindenhol ellenséget lát, és már élete egyetlen biztos pontjában, ikertestvérében és szerelmében sem bízik. ',
      image: '/assets/images/12.png',
      price: 7800,
      stock: 5,
      featured: false,
      active: false,
      discounted: true,
    },
    {
      id: 29,
      catId: 2,
      name: 'Sárkányok tánca - A tűz és jég dala V.',
      author: 'George R. R. Martin',
      description:
        'Közeleg a tél. A hideg szelek feltámadtak a sokat szenvedett Hét Királyságban, ahol az öt király háborúja után a túlélőknek most az éhínséggel kell szembenézniük. Az emberek birodalmát védelmező Fal ifjú parancsnoka, Havas Jon a Mások elleni reménytelen küzdelemre készíti fel a szétzüllött Éjjeli Őrséget.',
      image: '/assets/images/13.png',
      price: 4700,
      stock: 12,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 30,
      catId: 1,
      name: 'Tuf utazásai',
      author: 'George R. R. Martin',
      description:
        'Jóval azelőtt, hogy a Trónok harca nemzetközi sikerré vált, George R. R. Martin a kozmoszt mutatta be hű olvasóinak. A Tuf utazásai a bohókás és megnyerő Haviland Tuf, az akaratlan hős története, aki bolygóról bolygóra járva igyekszik helyesen cselekedni. Haviland Tuf egy tisztes űrkalmár, ráadásul nagy macskarajongó. ',
      image: '/assets/images/15.png',
      price: 5900,
      stock: 50,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 31,
      catId: 2,
      name: 'Vaják: Egy csepp igazság',
      author: 'Andrzej Sapkowski, Rembis Jacek',
      description:
        'Mennyi igazság rejlik a mesékben? Geralt egy elhagyatott kúriához ér, ahol találkozik annak tulajdonosával, egy számkivetetten élő szörnyeteggel. Az emberi tulajdonságokkal rendelkező teremtmény beinvitálja a szörnyvadászt, és mesélni kezd a családjáról, az életéről... és az átokról, ami régóta sújtja.',
      image: '/assets/images/29.png',
      price: 7800,
      stock: 57,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 32,
      catId: 3,
      name: 'Maladie és más történetek',
      author: 'Andrzej Sapkowski',
      description:
        'A legendás Vaják-sorozat szerzőjének legjobb novellái! A kötetben nyolc merész történet szerepel Andrzej Sapkowski írói pályájának különböző szakaszaiból. Megtalálhatók köztük klasszikus fantasysztorik éppúgy, mint sci-fik és politikai témájú írások, melyekben a szerzőtől megszokott módon a sötét témákat szellemes humor színesíti.',
      image: '/assets/images/28.png',
      price: 9800,
      stock: 500,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 33,
      catId: 2,
      name: 'Kis karácsony, nagy karácsony',
      author: 'Mester Györgyi',
      description:
        'Ránézett az előtte terpeszkedő hatalmas faóriásra. Milyen méltóságteljes, és milyen dunyha vastagságú, hófehér palást borítja földig érő ágait. Mint valami sátor, akár meg is éjszakázhat alatta. Elfedi az, megvédi az erdő minden veszélyétől. Közben kitisztult az ég, s csillagok milliárdjai gyújtották meg kis lámpásaikat. ',
      image: '/assets/images/62.png',
      price: 1560,
      stock: 30,
      featured: true,
      active: true,
      discounted: true,
    },
    {
      id: 34,
      catId: 1,
      name: 'Pöttyös Panni',
      author: 'Szepes Márta',
      description:
        'Pöttyös Panni gyanakodva fogadta a pöttyöket, amelyek ruhájáról átszálltak rá, és éktelenül viszkettek. A bárányhimlő azonban kiváló alkalom volt arra is, hogy Panni és nagymamája az egész napot együtt töltse. Amikor pedig a pöttyök már megint csak a ruhán voltak, Panni újra játszhatott Péterkével, Tamarával, cicákkal, kutyákkal,',
      image: '/assets/images/55.png',
      price: 4500,
      stock: 570,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 35,
      catId: 1,
      name: 'Mese Élijáhuról',
      author: 'Komlós Aladár, Vihar Béla',
      description:
        'A zsidóság mindenkor élt a mese erejével. A bibliai Sámson mesehős. Tóbit könyve, Zsuzsanna története valóságos mesefeldolgozások. A biblia utáni korban is számos mese született Hillélről, Johanan Ben Zakkairól, Rabbi Akibáról, és így tovább... A héber mesét általában zsidó vallásosság jellemzi. ',
      image: '/assets/images/61.png',
      price: 4700,
      stock: 51,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 36,
      catId: 2,
      name: 'Nagy óvodáskönyvem - Mesék az óvodai beilleszkedés megkönnyítéséhez',
      author: 'Izmindi Katalin',
      description:
        'Sziasztok! Fanni vagyok. Most volt a születésnapom, most lettem három éves. Anya azt mondta, hogy szeptembertől fogom kezdeni az óvodát. Ti már óvodások vagytok? Bevallom, hogy én egy kicsit tartok tőle. De Anya nyugtatgat, hogy ne izguljak, meglátom majd, hogy az ovi csuda jó hely. Tudjátok mit? Derítsük ki együtt, hogy milyen hely ez az óvoda!',
      image: '/assets/images/59.png',
      price: 7800,
      stock: 111,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 37,
      catId: 2,
      name: 'Nagy télkönyvem - mesék a télre és a téli ünnepekre való ráhangolódáshoz',
      author:
        'Halász-Szabó Klaudia és társai',
      description:
        'A természet állandó körforgása a gyermekek számára az évszakok váltakozásában figyelhető meg a leginkább. Nagymértékben támogathatjuk a gyerekek lelki egyensúlyának a fenntartását azzal, ha minden évszakban segítünk nekik összhangba kerülni a természettel, és együtt hangolódunk rá velük annak ritmusára testileg és lelkileg egyaránt. ',
      image: '/assets/images/58.png',
      price: 2500,
      stock: 57,
      featured: false,
      active: true,
      discounted: false,
    },
    {
      id: 38,
      catId: 2,
      name: 'Mese Neked',
      author: 'Fürjes Zsuzsanna',
      description:
        'Ebben a könyvben kilenc mese található, melyeket a szerző családjában élő gyermekek ihlettek. A főszereplők hétköznapi neve helyén bárkié állhatna, hiszen melyik kislány ne akarna egy délceg királyfi felesége lenni, vagy melyik kisfiú ne örülne, ha segíthetne egy kedves földönkívülinek? ',
      image: '/assets/images/60.png',
      price: 5600,
      stock: 56,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 39,
      catId: 3,
      name: 'A karácsonyi jávorszarvas kalandjai',
      author: 'Andreas Steinhöfel',
      description:
        'Van még manapság bárki is, aki hisz a Télapó létezésében? Hát Bertil biztos nem tartozik közéjük. Ám egyik nap Mr. Moose, a jávorszarvas csapódik be a háztetőbe, és onnan aztán a család nappalijába. Állítólag éppen a főnökével, Télapóval hajtott végre egy próbarepülést, amikor lezuhant. Mostantól aztán Bertilnek van min töprengenie.',
      image: '/assets/images/30.png',
      price: 6500,
      stock: 5,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 40,
      catId: 3,
      name: 'A kisegér, aki karácsonyra hazatalált',
      author: 'Alex T. Smith',
      description:
        'Már csak öt nap van hátra karácsonyig, és Fülöpnek, a kisegérnek még meg kell oldania a Nagyon Különös Rejtélyt, ezért világ körüli kalandra indul. Útja során régi, kedves ismerősei mellett elbűvölő új barátok segítik. A szívet melengető, varázslatos történet huszonnégy és fél mesében bontakozik ki.',
      image: '/assets/images/31.png',
      price: 6200,
      stock: 52,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 41,
      catId: 3,
      name: 'Sári nyuszi és a gyógyító szeretet',
      author: 'Steve Richardson',
      description:
        'Vajon sikerülhet-e egyetlen nyuszilánynak szembeszállni a nehézségekkel, meglepni Mókus Miklóst meg a többi állatot, és megnyerni a nagy lombházépítő versenyt? Amikor elkezdődik az iskola, Mókus Miklós, akinek az édesapja a város legnagyobb építkezési vállalatának a tulajdonosa, lombházversenyre hívja ki a barátait. ',
      image: '/assets/images/51.png',
      price: 4500,
      stock: 145,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 42,
      catId: 3,
      name: 'Pitypang és a Mikulás - Pitypang és Lili',
      author: 'Pásztohy Panka',
      description:
        'Lili és Lotti már nagyon várják a Mikulást! De nemcsak ők, hanem Pitypang is. Még a cipőpucolásban is segít! De sajnos a Mikulás a kutyáknak nem hoz ajándékot, csak a gyerekeknek. Lilit nagyon bántja ez az igazságtalanság, ezért elhatározza, hogy ébren marad, és megvárja a Mikulást. ',
      image: '/assets/images/56.png',
      price: 2000,
      stock: 1,
      featured: false,
      active: true,
      discounted: true,
    },
    {
      id: 43,
      catId: 1,
      name: 'Csengettyű, a karácsonyi póni 2. - A Sarkcsillag varázsa',
      author: 'Annette Moser',
      description:
        'A jó barátok együtt mindenre képesek! Csengettyű és a fiatal rénszarvasok izgatottan várják a Mikulást, hiszen itt az idő, hogy az ajándékokkal teli szánnal elkezdődjön a csodás utazás. Ám a Mikulás nem jön, és Csengettyű végül elhatározza, hogy elindul megkeresni őt. Izgalmas kaland veszi kezdetét... De vajon sikerrel jár a kis póni?',
      image: '/assets/images/35.png',
      price: 4000,
      stock: 15,
      featured: false,
      active: true,
      discounted: false,
    },
    {
      id: 44,
      catId: 2,
      name: 'Örök éj',
      author: 'Agatha Christie',
      description:
        'Amikor a vonzó, ám pénztelen Michael Rogers meglátja álmai otthonát, majd pár perccel később találkozik a bájos és mesésen gazdag örökösnővel, Ellie-vel, úgy érzi, minden álma egyszerre valóra vált. Nem hallgat az öreg cigányasszony figyelmeztetésére.',
      image: '/assets/images/9.png',
      price: 7800,
      stock: 500,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 45,
      catId: 3,
      name: 'Chimneys titka',
      author: 'Agatha Christie',
      description:
        'Mikor Anthony Cade, az ifjú szerencsevadász elvállalja, hogy barátja helyett eljuttat egy kéziratot egy angol könyvkiadóhoz, nem is sejti, hogy hamarosan nemzetközi diplomáciai bonyodalom kellős közepén találja magát. Valaki ugyanis a gyilkosságtól sem riad vissza, hogy megakadályozza a kies Herzoszlovákia restaurációját. ',
      image: '/assets/images/8.png',
      price: 9600,
      stock: 45,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 46,
      catId: 3,
      name: 'Az alibi',
      author: 'Agatha Christie',
      description:
        'A bíróság szerint Jacko Argyle egy piszkavassal brutálisan agyonverte anyját. Tettéért életfogytiglani börtön vár rá, ám nem raboskodik sokáig: tüdőgyulladás viszi el. Ekkor bukkan fel dr. Arthur Calgary, a fiatal kutató, aki épp most tért vissza antarktiszi expedíciójáról, és azt állítja, hogy Jacko biztosan ártatlan volt.',
      image: '/assets/images/3.png',
      price: 7800,
      stock: 50,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 47,
      catId: 2,
      name: 'A hajnali vendég - Klasszikus skandináv krimi',
      author: 'Sven Elvestad',
      description:
        'Ha egy magándetektív kikapcsolódásra vágyva, egy csendes vidéki szállodába utazik, valószínűleg sem csendes, sem nyugalmas napok nem várnak rá... Természetesen Asbjörn Krag magándetektívvel is ez történik. Első szállodai sétáján a hotelt övező csöndes erdőben két gyanús külsejű alakba botlik.',
      image: '/assets/images/6.png',
      price: 5800,
      stock: 50,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 48,
      catId: 1,
      name: 'Lány a hóban',
      author: 'Ninni Schulman',
      description:
        'Magdalena Hansson újságíró viharos válása után hátat fordít Stockholmnak, és hatéves kisfiával gyerekkora színhelyére, Hagforsba költözik. Békét és nyugalmat remél a vidéki élettől, noha kissé tart az egyhangúságtól. Szilveszter éjszakáján azután nyoma vész a tizenhat éves Hedda Losjőnek. ',
      image: '/assets/images/41.png',
      price: 3500,
      stock: 54,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 49,
      catId: 2,
      name: 'Mostohák',
      author: 'Kristina Ohlsson',
      description:
        'Százak láthatták volna, mégsem tűnik fel senkinek, amikor egy zsúfolt svédországi vonatról elrabolnak egy kislányt. Az anyja nem volt mellette, mert az egyik állomáson véletlenül lemaradt. A vonat személyzetét természetesen riasztották, hogy vigyázzanak az alvó gyerekre, ám mire a szerelvény befut a stockholmi főpályaudvarra, a kicsinek nyoma vész.',
      image: '/assets/images/3.png',
      price: 4500,
      stock: 15,
      featured: true,
      active: true,
      discounted: false,
    },
    {
      id: 50,
      catId: 1,
      name: 'A vérfarkasok titka',
      author: 'Kristina Ohlsson',
      description:
        'Nagyapa bezárta maguk után az ajtót, majd többször aggodalmasan kilesett az ablakon. - Mi az? - kérdezte Herbert. - Semmi. - De látom, hogy van valami - makacskodott. - Valami nem stimmelt azzal a kutyával. Nagyapa megrázta a fejét. - Tévedtem - mondta. - Nem németjuhász volt. Sőt, nem is kutya. Valami más. Valami veszélyes. ',
      image: '/assets/images/10.png',
      price: 4200,
      stock: 5,
      featured: true,
      active: true,
      discounted: true,
    },
  ];

  getProducts(): Product[] {
    return this.list;
  }

productsChanged = new EventEmitter<Product[]>()

sortAZ(products: Product[]){
  products.sort((a,b)=> a.name.localeCompare(b.name) )
  this.productsChanged.emit(products)
}

sortZA(products: Product[]){
  products.sort((a,b)=> b.name.localeCompare(a.name) )
  this.productsChanged.emit(products)
}

sort19(products: Product[]){
  products.sort((a,b)=>a.price-b.price)
  this.productsChanged.emit(products)
}

sort91(products: Product[]){
  products.sort((a,b)=>b.price-a.price)
  this.productsChanged.emit(products)
}

getFeatured(products: Product[]){
  products.filter(product => product.featured);
  this.productsChanged.emit(products)
}

getDiscounted(products: Product[]){
  products.filter(product => product.discounted);
  this.productsChanged.emit(products)
}

  constructor() {}
}
