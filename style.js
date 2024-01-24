let hauptpic1 = document.getElementById("hauptpic1");
let hauptpic2 = document.getElementById("hauptpic2");

let planetTitle = document.getElementById("planet-title");
let planetNav = document.getElementById("planet-nav");
let hauptNav = document.getElementById("haupt-nav");

let planetClicker1 = document.getElementById("planetClicker1");
let planetClicker2 = document.getElementById("planetClicker2");
let planetClicker3 = document.getElementById("planetClicker3");
let planetClicker4 = document.getElementById("planetClicker4");
let planetClicker5 = document.getElementById("planetClicker5");
let gebäude = document.getElementById("gebäude");
let gebäudepic1 = document.getElementById("gebäudepic1");
let gebäudepic2 = document.getElementById("gebäudepic2");

let teleskop = document.getElementById("teleskop");
let telepic1 = document.getElementById("telepic1");
let telepic2 = document.getElementById("telepic2");

let halle = document.getElementById("halle");
let hallepic1 = document.getElementById("hallepic1");
let hallepic2 = document.getElementById("hallepic2");
let hallepic3 = document.getElementById("hallepic3");

let aufgaben = document.getElementById("aufgaben");

let btn1 = document.getElementById("btn1");
let ichdiv = document.getElementById("me-img");
let btnpic1 = document.getElementById("btnpic1");

let hotelNav = document.getElementById("hotel-nav");
let hotelClicker1 = document.getElementById("hotelClicker1");
let hotelClicker2 = document.getElementById("hotelClicker2");
let hotelClicker3 = document.getElementById("hotelClicker3");
let hotelClicker4 = document.getElementById("hotelClicker4");

let hotelTitle = document.getElementById("hotel-title");
let infoblocks = document.getElementById('info-blocks');
let hotelpic1 = document.getElementById("hotelpic1");
let hotelpic2 = document.getElementById("hotelpic2");
let hotelpic3 = document.getElementById("hotelpic3");
let hotelpic4 = document.getElementById("hotelpic4");
let hotelpic5 = document.getElementById("hotelpic5");
let starttitle = document.getElementById("startTitle");;
let hotel = document.getElementById("hotel");

let hotelInfo = document.getElementById("hotelInfo");
let hotelAufgaben = document.getElementById("hotelAufgaben");

hauptpic1.onclick = function () {
  hauptpic2.style.display = "none";
    infoblocks.style.display = 'none';
    starttitle.style.display = 'none';
  hauptpic1.style.transform = "translateX(110px)";
  hauptpic1.style.height = "500px";
  hauptpic1.style.bottom = "10px";
  planetTitle.style.display = "flex";
  planetNav.style.display = "flex";
};

planetClicker1.onclick = function () {
  hauptpic2.style.display = "flex";
 infoblocks.style.display = "flex";
 starttitle.style.display = "flex";
  hauptpic1.style.display = "flex";
  hauptpic1.style.transform = "translateX(0px)";
  hauptpic1.style.height = "330px";
  hauptpic1.style.bottom = "0px";
  planetTitle.style.display = "none";
  planetNav.style.display = "none";
  gebäude.style.display = "none";
  hauptNav.style.display = "flex";
  planetClicker2.style.background = "none";
  planetClicker3.style.background = "none";
  teleskop.style.display = "none";
  planetClicker4.style.background = "none";
  halle.style.display = "none";
  planetClicker5.style.background = "none";
  aufgaben.style.display = "none";
  btnpic1.style.display = "none";
  hotelNav.style.display = "none";
};

planetClicker2.onclick = function () {
  hauptNav.style.display = "none";
  gebäude.style.display = "flex";
  planetNav.style.display = "flex";
  planetClicker2.style.backgroundColor = "red";
  gebäudepic1.style.height = "330px";
  gebäudepic1.style.transform = "translateX(0px)";
  gebäudepic2.style.display = "flex";
  gebäudepic2.style.height = "330px";
  gebäudepic2.style.transform = "translateX(0px)";
  gebäudepic1.style.display = "flex";
  planetClicker3.style.background = "none";
  teleskop.style.display = "none";
  planetTitle.style.display = "none";
  halle.style.display = "none";
  planetClicker5.style.background = "none";
  aufgaben.style.display = "none";
  btnpic1.style.display = "none";
};

gebäudepic1.onclick = function () {
  gebäudepic1.style.height = "650px";
  gebäudepic1.style.transform = "translateX(110px)";
  gebäudepic2.style.display = "none";
};

gebäudepic2.onclick = function () {
  gebäudepic2.style.height = "650px";
  gebäudepic2.style.transform = "translateX(-80px)";
  gebäudepic1.style.display = "none";
};

planetClicker3.onclick = function () {
  gebäude.style.display = "none";
  planetClicker2.style.background = "none";
  planetClicker3.style.backgroundColor = "red";
  hauptNav.style.display = "none";
  planetTitle.style.display = "none";
  teleskop.style.display = "flex";
  telepic2.style.display = "flex";
  telepic1.style.transform = "translateX(0px)";
  telepic1.style.height = "330px";
  telepic1.style.display = "flex";
  telepic2.style.transform = "translateX(0px)";
  telepic2.style.height = "330px";
  planetClicker4.style.background = "none";
  halle.style.display = "none";
  planetClicker5.style.background = "none";
  aufgaben.style.display = "none";
  btnpic1.style.display = "none";
};

telepic1.onclick = function () {
  telepic2.style.display = "none";
  telepic1.style.transform = "translateX(80px)";
  telepic1.style.height = "650px";
};

telepic2.onclick = function () {
  telepic1.style.display = "none";
  telepic2.style.transform = "translateX(-180px)";
  telepic2.style.height = "800px";
};

planetClicker4.onclick = function () {
  planetClicker4.style.backgroundColor = "red";
  planetClicker2.style.background = "none";
  planetClicker3.style.background = "none";
  teleskop.style.display = "none";
  hauptpic1.style.bottom = "0px";
  planetTitle.style.display = "none";
  gebäude.style.display = "none";
  hauptNav.style.display = "none";
  halle.style.display = "flex";
  hallepic2.style.display = "flex";
  hallepic3.style.display = "flex";
  hallepic1.style.height = "270px";
  hallepic1.style.transform = "translateX(0px)";
  hallepic1.style.display = "flex";
  hallepic3.style.display = "flex";
  hallepic2.style.height = "270px";
  hallepic2.style.transform = "translateX(0px)";
  hallepic1.style.display = "flex";
  hallepic2.style.display = "flex";
  hallepic3.style.height = "270px";
  hallepic3.style.transform = "translateX(0px)";
  planetClicker5.style.background = "none";
  aufgaben.style.display = "none";
  btnpic1.style.display = "none";
};

hallepic1.onclick = function () {
  hallepic2.style.display = "none";
  hallepic3.style.display = "none";
  hallepic1.style.height = "750px";
  hallepic1.style.transform = "translateX(60px)";
};
hallepic2.onclick = function () {
  hallepic1.style.display = "none";
  hallepic3.style.display = "none";
  hallepic2.style.height = "750px";
};
hallepic3.onclick = function () {
  hallepic1.style.display = "none";
  hallepic2.style.display = "none";
  hallepic3.style.height = "750px";
  hallepic3.style.transform = "translateX(-120px)";
};

planetClicker5.onclick = function () {
  hauptpic1.style.display = "none";
  planetTitle.style.display = "none";
  gebäude.style.display = "none";
  hauptNav.style.display = "none";
  planetClicker2.style.background = "none";
  planetClicker3.style.background = "none";
  teleskop.style.display = "none";
  planetClicker4.style.background = "none";
  halle.style.display = "none";
  planetClicker5.style.backgroundColor = "red";
  aufgaben.style.display = "flex";
  ichdiv.style.display = "none";
  aufgaben.style.display = "flex";
  btnpic1.style.height = "30px";
};

btn1.onclick = function () {
  ichdiv.style.display = "flex";
  aufgaben.style.display = "none";
  btnpic1.style.display = "flex";
};

btnpic1.onclick = function () {
  btnpic1.style.height = "750px";
};

hauptpic2.onclick = function () {
  hauptpic1.style.display = "none";
  hauptpic2.style.transform = "translateX(-180px)";
  hauptpic2.style.height = "550px";
  hotelNav.style.display = "flex";
  hotelTitle.style.display = "flex";
 infoblocks.style.display = "none";
 starttitle.style.display = "none";
};

hotelClicker1.onclick = function () {
  hauptpic1.style.display = "flex";
  hauptpic2.style.transform = "translateX(0px)";
  hauptpic2.style.height = "330px";
  hotelNav.style.display = "none";
  hauptNav.style.display = "flex";
  hotelClicker2.style.background = "none";
  hotelClicker3.style.background = "none";
  hotelTitle.style.display = "none";
  hotelClicker4.style.background = "none";
  hotel.style.display = "none";
  hotelAufgaben.style.background = "none";
  hotelAufgaben.style.display = "none";
    hotelInfo.style.display = "none";
     infoblocks.style.display = "flex";
     starttitle.style.display = "flex";
};
hotelClicker2.onclick = function () {
  hauptNav.style.display = "none";
  hotelClicker2.style.backgroundColor = "red";
  hotelNav.style.display = "flex";
  hotelTitle.style.display = "none";
  hotel.style.display = "flex";
  hotelpic2.style.display = "flex";
  hotelpic3.style.display = "flex";
  hotelpic4.style.display = "flex";
  hotelpic5.style.display = "flex";
  hotelpic1.style.height = "180px";
  hotelpic1.style.transform = "translateX(0px)";
  hotelpic3.style.height = "180px";
  hotelpic3.style.transform = "translateX(0px)";
  hotelpic4.style.height = "180px";
  hotelpic4.style.transform = "translateX(0px)";
  hotelpic3.style.display = "flex";
  hotelpic4.style.display = "flex";
  hotelpic5.style.display = "flex";
  hotelpic1.style.display = "flex";
  hotelpic2.style.height = "180px";
  hotelpic2.style.transform = "translateX(0px)";
  hotelpic5.style.height = "180px";
  hotelpic5.style.transform = "translateX(0px)";
  hotelClicker3.style.background = "none";
  hotelInfo.style.display = "none";
  hotelAufgaben.style.display = "none";
};

hotelpic1.onclick = function () {
  hotelpic2.style.display = "none";
  hotelpic3.style.display = "none";
  hotelpic4.style.display = "none";
  hotelpic5.style.display = "none";
  hotelpic1.style.height = "650px";
  hotelpic1.style.transform = "translateX(230px)";
};

hotelpic2.onclick = function () {
  hotelpic3.style.display = "none";
  hotelpic4.style.display = "none";
  hotelpic5.style.display = "none";
  hotelpic1.style.display = "none";
  hotelpic2.style.height = "650px";
  hotelpic2.style.transform = "translateX(100px)";
};

hotelpic3.onclick = function () {
  hotelpic2.style.display = "none";
  hotelpic4.style.display = "none";
  hotelpic5.style.display = "none";
  hotelpic1.style.display = "none";
  hotelpic3.style.height = "650px";
  hotelpic3.style.transform = "translateX(0px)";
};

hotelpic4.onclick = function () {
  hotelpic2.style.display = "none";
  hotelpic3.style.display = "none";
  hotelpic5.style.display = "none";
  hotelpic1.style.display = "none";
  hotelpic4.style.height = "650px";
  hotelpic4.style.transform = "translateX(-70px)";
};

hotelpic5.onclick = function () {
  hotelpic2.style.display = "none";
  hotelpic3.style.display = "none";
  hotelpic4.style.display = "none";
  hotelpic1.style.display = "none";
  hotelpic5.style.height = "650px";
  hotelpic5.style.transform = "translateX(-140px)";
};

hotelClicker3.onclick = function () {
  hauptNav.style.display = "none";
  hotelClicker3.style.backgroundColor = "red";
  hotelNav.style.display = "flex";
  hotelTitle.style.display = "none";
  hotelClicker2.style.background = "none";
  hotel.style.display = "none";
  hotelInfo.style.display = "flex";
  hotelClicker4.style.background = "none";
  hotelAufgaben.style.display = "none";
};

hotelClicker4.onclick = function () {
  hotelInfo.style.display = "none";
  hauptNav.style.display = "none";
  hotel.style.display = "none";
  hotelTitle.style.display = "none";
  hotelClicker2.style.background = "none";
  hotelClicker3.style.background = "none";
  hotelClicker4.style.background = "red";
  hotelAufgaben.style.display = "flex";
};
