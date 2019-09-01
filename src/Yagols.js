/*

Yagols v4.1

(c) 2018-2019 John Erps

This software is licensed under the MIT license (see LICENSE)

*/


var title = [ "Yet another", "Game\u22C5of\u22C5Life", "simulator", "Conway\u22C5s", "\u22C5  Enjoy  \u22C5", "\u22C5   With Yagols   \u22C5", "\u22C5      \u22C5   Click/Press  ?  For Help   \u22C5      \u22C5"];
var font = "Verdana";
var maxl = -9999999, maxt = 9999999, maxr = 9999999, maxb = -9999999;
var gennum = 0, speed = 20, run = false, runcd = null, runcdn = 500, runcdc = 0, runbc = 0, runcd2 = null, runcdn2 = 100, runcd3 = null, runcdn3 = 800, runcd4 = null, runcdn4 = 1400, runcd5 = null, runcdn5 = 800;
var posx = 0, posy = 0, posx2 = 0, posy2 = 0, cellisz = 0, celliszm = 5, cellsz = 0, scale = 80, scalem = false, scalemn = 0, scalemcd = null, scalemcdn = 2000, rmvcellsf = false, rmvcellsm = new Map(), rmvcellsn = 0, posm = false, posmx = 0, posmy = 0, posmcd = null, posmcdn = 2000, posml = [], posmlp = 0, posmltx = 0, posmlty = 0;
var canvas0, canvas1, canvas1a, canvas1b, canvas2, canvas3, canvasos0, canvasos1, canvasos2, canvasosci, ctx0, ctx1, ctx1a, ctx1b, ctx2, ctx3, ctxos0, ctxos1, ctxos2, ctxosci, mingen = 0;
var titlefd = 0, titlefdt = null, titlefds = 1000, titlemode = 0, tmet = null, titlex = 625, titleh = true, titlecd = null, titlecdn = 32000, titlecd2 = null, titlecdn2 = 7000, titlecd3 = null, titlecdn3 = 1200, titlemf = false, title0cd = null, title0cdn = 2000, title0x = 0, title0y = 0;
var mdown = false, ton = false, toncd = null, toncdn = 300, toncm = 1, tonx = 0, tony = 0;
var scl = false, sclx = 0, scly = 0, sclr = 0, sclpx = 0, sclpy = 0, sclbx = 0, sclby = 0, sclbw = 0, sclbh = 0, scld = 0;
var spd = false, spdx = 0, spdy = 0, spdr = 0, spdbx = 0, spdby = 0, spdbw = 0, spdbh = 0, spdd = 0;
var colrs = 100, colr = false, colrx = 0, colry = 0, colrr = 0, colrbx = 0, colrby = 0, colrbw = 0, colrbh = 0, colrd = 0;
var csize = 100, csiz = false, csizx = 0, csizy = 0, csizr = 0, csizbx = 0, csizby = 0, csizbw = 0, csizbh = 0, csizd = 0;
var diffx = 0, diffy = 0, curx = 0, cury = 0;
var dspgrd = false;
var runt = false, runtx = 0, runty = 0, runtw = 0, runth = 0;
var dspvc = 0, rsct = null, frpsn = 0;
var gts = null, wts1 = null;
var chgcanvsz = true, chgcellsz = true, chgpos = true, prvcellsz = null, prvposx = null, prvposy = null, prvcolrs = null, prvcsize = null, drawbackg = true, drawallcells = true;
var dsppost = false, dsppostx = 0, dspposty = 0, dsppostw = 0, dspposth = 0, dspposcd = null, dspposcdn = 200;
var patt = false;
var fpatt = null, fpattf = 0, fpattpos = 0, fpattd = null, fpattn = 0, fpattnt = 0, fpatth = 0, fpattw = 0, fpattnl = false, fpattm = 0, fpattnum = 0, fpatthx = 0, fpattnr = true, fpattx = 0, fpattnx = 0, fpattz = 0, fpattzx = null, fpattzy = 0, fpattzxp = 0, fpattzyp = 0, fpattnn = true, fpattz2 = 0, fpatta = [], fpattc = 1;
var dwrld = false, wrldx = 0, wrldy = 0, wrldw = 0, wrldh = 0, wrldm = 24, wrldcd = null, wrldcdn = 200, wrlda = false, wrldax = 0, wrlday = 0, wrldaw = 0, wrldah = 0;
var grb = 4;
var dsppxct = false, dsppxctx = 0, dsppxcty = 0, dsppxctw = 0, dsppxcth = 0, dsppxccd = null, dsppxccdn = 200;
var ngen = false, ngencd = null, ngencdn = 700, ngencd2 = null, ngencd3 = 0, ngencd4 = null, ngencdn4 = 200, ngencd5 = null, ngencdn5 = 200, ngenb = false, ngenbx = 0, ngenby = 0, ngenbw = 0, ngenbh = 0;
var pgen = false, pgencd = null, pgencdn = 700, pgencd2 = null, pgencd3 = 0, pgencd4 = null, pgencdn4 = 200, pgencd5 = null, pgencdn5 = 200, pgenb = false, pgenbx = 0, pgenby = 0, pgenbw = 0, pgenbh = 0;
var genbbl = false;
var cruleb = "3", crules = "23", crulebn = "", crulesn = "", crulem = 0, crulem2 = 0, crulem3 = 0, ccruleb = [false, false, false, true, false, false, false, false, false, false], ccrules = [false, false, true, true, false, false, false, false, false, false], ccrulebx = true, ccrulesx = true, cruleim = false, cruleimx = 0, cruleimy = 0, cruleimw = 0, cruleimh = 0, cruleimcd = null, cruleimcdn = 600, cruleb1x = 0, cruleb1y = 0, cruleb1w = 0, cruleb1h = 0, cruleb2x = 0, cruleb2y = 0, cruleb2w = 0, cruleb2h = 0;
var rbcbx = 0, rbcby = 0, rbcbw = 0, rbcbh = 0;
var rbcsx = 0, rbcsy = 0, rbcsw = 0, rbcsh = 0;
var hist = [[[[[],null,0,[0,0],false,0,0,0,0,0,0,[0,0,0,0],0,0,0,0,0]],0,-1,-1,[],[],-1,-1,[]]], histh = 0, histhm = 0, histod = 0, histcr = [cruleb,crules], histi = 0, histp = 0, histq = null, histq0 = null, histgp = 0, histgn = 0, histcd = null, histcdn = 1000, histn = 1, histrcl1 = [], histrcll1 = 0, histrcl2 = [], histrcll2 = 0;
var histdvh = 0, histdvi = 0, histdvp = 0;
var tarr = [], tidx = {}, hupdc = 0;
var cellsn = 0;
var hlcrcd = null, hlcrcdn = 800, hlcrcd2 = null, hlcrcdn2 = 1000, hlcrcd3 = null, hlcrcdn3 = 1000, hlcrcd4 = null, hlcrcdn4 = 400;
var gnpsd = false, gnpsn = 0, gnpsg = 0, gnpscd = null, gnpscdn = 1500;
var captx = 0, capty = 0, captyffw = 0, captw = 0, capth = 0, capcd = null, capcdn = 1200, capcd2 = null, capcdn2 = 2500, capcds2 = "";
var ffw = 0, ffwc = 1, ffwm = 0, ffwstp = false, ngenfx = 0, ngenfy = 0, ngenfw = 0, ngenfh = 0, ngenfcd = null, ngenfcdn = 200, ngenfcd2 = null, ngenfcdn2 = 200, pgenfx = 0, pgenfy = 0, pgenfw = 0, pgenfh = 0, pgenfcd = null, pgenfcdn = 200, pgenfcd2 = null, pgenfcdn2 = 200;
var ffwsbcd = null, ffwsbcdn = 500, ffwsbf = false, ffwsbm = 0;
var osctlx = 0, osctly = 0, osctlw = 0, osctlh = 0, osctrx = 0, osctry = 0, osctrw = 0, osctrh = 0;
var orulex = 0, oruley = 0, orulew = 0, oruleh = 0;
var tfs3 = 0;
var slidh = 0.45;
var cidxb = [[[null],-1,-1,0]], cidxbi = 0, cidxbx1 = maxr + 1, cidxbx2 = maxl - 1, cidxby1 = maxt + 1, cidxby2 = maxb - 1, cidxbb = null, cidxbc0 = -1, cidxbc1 = 0, cidxbc2 = 0;
var cellslen = 0, cellsan = 0, cellsfs = [], cellsfsl = 0, cellsxl = 0, cellsx2l = 0, cellsf = false, cellsxf = false;
var cibl = [], cibll = 0, ciblfl = [], ciblfll = 0;
var ddiama = 0, ddiamb = 0, ddiamcd = null, ddiamcdn = 800, ddiamx = 0, ddiamy = 0, ddiamw = 0, ddiamh = 0, ddiamcd2 = null, ddiamcdn2 = 1200, ddiamf = 0;
var vwcrs = false;
var swzmt = false, swzmtx = 0, swzmty = 0, swzmtw = 0, swzmth = 0, swzmcd = null, swzmcdn = 200, swzmcd2 = null, swzmcdn2 = 300, swzmf = true, swzmsw = true;
var trkw = false, trkwdx = 0, trkwdx2 = 0, trkwdy = 0, trkwdy2 = 0;
var hbcksl = null, hbcksll = 0, hbckslf = 0, hbcksm = null;
var stpgn = 0, stpgn2 = 0, stpgnm = 0, stpgnm2 = 0, stpge = false, stpga = false, stpgax = false, stpgcd = null, stpgcdn = 500, stpgcd2 = null, stpgcdn2 = 500, stpgsf = false, stpgnc = 0, stpgnc2 = 0, stpgssx = 0, stpgssy = 0, stpgssw = 0, stpgssh = 0, stpgssx2 = 0, stpgssy2 = 0, stpgssw2 = 0, stpgssh2 = 0, stpgdx = 0, stpgdy = 0, stpgdw = 0, stpgdh = 0;
var tickct = null, tickcr1 = 0, tickcr2 = 0, tickcr3 = 0;
var msgl = [], msgll = 0, msgf1 = 0, msgcd1 = null, msgcdn1 = 30000, msgcd2 = null, msgcdn2 = 2000, msgl1 = "", msgl2 = "", msgl3 = "";
var genbtcd = null, genbtcdn = 250, genbtl = false;
var curskcc = 0, curskd = 0, curskcd = null, curskcdn = 300;
var vwax = 0, vway = 0, vwaw = 0, vwah = 0;
var fbutt = [], fbuttcdn = 200;
var strimgt = {};
var keyesupp = false;
var dmsgs = true;
var srb0insc = 3;
var stops = false, stopscd = null, stopscdn = 1100;
var clrucd = null, clrucdn = 1000;
var dhlpn = 0, dhlpn2 = 0, dhlpq = [], dhlpql = 0, dhlpcdn = 2000, dhlpcd2 = null, dhlpcdn2 = 600000, dhlplf = 1, dhlpcd3 = null, dhlpcdn3 = 400;
var frzc = false, frzcp = false, frzccd = null, frzccdn = 1000;
var hpnl1x = 0, hpnl1y = 0, hpnl1w = 0, hpnl1h = 0, hpnlcd = null, hpnlcdn = 600, hpnl2x = 0, hpnl2y = 0, hpnl2h = 0, hpnl3x = 0, hpnl3y = 0, hpnl3w = 0, hpnl3h = 0;
var fpnl1x = 0, fpnl1y = 0, fpnl1w = 0, fpnl1h = 0, fpnlcd = null, fpnlcdn = 600, fpnl2x = 0, fpnl2y = 0, fpnl2h = 0;
var htgen = 0, htgen2 = -1, htgen2x = 0, httot = 0, httot2 = 0, htgent = false, htgencd = null, htgencdn = 200, htgentx = 0, htgenty = 0, htgentw = 0, htgenth = 0;
var lastcc = 0;
var acccd = null, acccdn = 500;
var chgcql = 0, chgcqp = 0, chgcqc = 1, chgcqkp = false;
var bmemmA = null, bmembA = null, bmembiA = 0, bmemnA = 0;
var bmemmB = null, bmembB = null, bmembiB = 0, bmemnB = 0;
var bmemmC = null, bmembC = null, bmembiC = 0, bmemnC = 0;
var bmemmD = null, bmembD = null, bmembiD = 0, bmemnD = 0;
var bmemmE = null, bmembE = null, bmembiE = 0, bmemnE = 0;
var bmemv0 = 0, bmemv1 = 0, bmemv2 = 0, bmemv3 = 0, bmemv4 = 0;
var dstmsgje = false;
var cimg = [], cimgc = 0;
var cwidth = 0, cheight = 0;
var divl = [-1,-2], divv = false, dive = [];
var histmax = 500;
var cellsl = 0, cellsr = 0, cellst = 0, cellsb = 0;
var cbrw = 0, cbrh = 0, cbrcd = performance.now(), cbrcdn = 500;
var stmsgn1 = "Y \u22C5 a \u22C5 g \u22C5 o \u22C5 l \u22C5 s                ", stmsgn2 = "Yet \u22C5 another \u22C5 GoL \u22C5 simulator     ", stmsgo1 = "", stmsgo2 = "", stmsgcd = null, stmsgcdn = 1000, stmsgcd2, stmsgcdn2 = 1300, stmsgntm1 = null, stmsgntm2 = null, stmsgotm1 = null, stmsgotm2 = null;
var diamstop = true;

function clrvars0() {
  chgcanvsz = true, chgcellsz = true, chgpos = true, prvcellsz = null, prvposx = null, prvposy = null, prvcolrs = null, prvcsize = null, drawbackg = true, drawallcells = true;
  hist = [[[[[],null,0,[0,0],false,0,0,0,0,0,0,[0,0,0,0],0,0,0,0,0]],0,-1,-1,[],[],-1,-1,[]]], histh = 0, histod = 0, histcr = [cruleb,crules], histi = 0, histp = 0, histq = null, histq0 = null, histgp = 0, histgn = 0, histn = 1, histrcll1 = 0, histrcll2 = 0;
  histdvh = 0, histdvi = 0, histdvp = 0;
  ffw = 0, ffwm = 0, ffwstp = false, ngenfx = 0, ngenfy = 0, ngenfw = 0, ngenfh = 0, ngenfcd = null, ngenfcd2 = null, pgenfx = 0, pgenfy = 0, pgenfw = 0, pgenfh = 0, pgenfcd = null, pgenfcd2 = null;
  ffwsbcd = null, ffwsbcdn = 500, ffwsbf = false, ffwsbm = 0;
  hbcksl = null, hbcksll = 0, hbckslf = 0, hbcksm = null;
  htgen = 0, htgen2 = -1, htgen2x = 0, httot = 0, httot2 = 0;
  if (!run) {
    genbbl = false;
  }
  crulecomp();
}

function clrvars() {
  var fl = cidxb[cidxbi][0].length;
  clrvars0();
  gennum = 0, run = false, runcd = null, runcdc = 0, runbc = 0, runcd2 = null, runcd3 = null, runcd4 = null, runcd5 = null;
  rmvcellsf = false, rmvcellsm = new Map(), rmvcellsn = 0, posm = false, posmx = 0, posmy = 0, posmcd = null, posmcdn = 2000, posml = [], posmlp = 0, posmltx = 0, posmlty = 0;
  scalem = false, scalemn = 0, scalemcd = null,  scalemcdn = 2000;
  mingen = 0;
  runt = false, runtx = 0, runty = 0, runtw = 0, runth = 0;
  fpatt = null, fpattf = 0, fpattpos = 0, fpattd = null, fpattn = 0, fpattnt = 0, fpatth = 0, fpattw = 0, fpattnl = false, fpattm = 0, fpattnum = 0, fpatthx = 0, fpattnr = true, fpattx = 0, fpattnx = 0, fpattz = 0, fpattzx = null, fpattzy = 0, fpattzxp = 0, fpattzyp = 0, fpattnn = true, fpattz2 = 0, fpatta = [], fpattc = 1;
  dwrld = false, wrldx = 0, wrldy = 0, wrldw = 0, wrldh = 0, wrldcd = null, wrlda = false, wrldax = 0, wrlday = 0, wrldaw = 0, wrldah = 0;
  ngen = false, ngencd = null, ngencd2 = null, ngencd3 = 0, ngencd4 = null, ngencd5 = null, ngenb = false, ngenbx = 0, ngenby = 0, ngenbw = 0, ngenbh = 0;
  pgen = false, pgencd = null, pgencd2 = null, pgencd3 = 0, pgencd4 = null, pgencd5 = null, pgenb = false, pgenbx = 0, pgenby = 0, pgenbw = 0, pgenbh = 0;
  genbbl = false;
  tarr = [], tidx = {}, hupdc = 0;
  cellsn = 0;
  osctlx = 0, osctly = 0, osctlw = 0, osctlh = 0, osctrx = 0, osctry = 0, osctrw = 0, osctrh = 0;
  cidxb = [[[],-1,-1,0]], cidxbi = 0, cidxbx1 = maxr + 1, cidxbx2 = maxl - 1, cidxby1 = maxt + 1, cidxby2 = maxb - 1, cidxbb = null, cidxbc0 = -1, cidxbc1 = 0, cidxbc2 = 0;
  cellslen = 0, cellsan = 0, cellsfs = [], cellsfsl = 0, cellsxl = 0, cellsx2l = 0, cellsf = false, cellsxf = false;
  cibl = [], cibll = 0, ciblfl = [], ciblfll = 0;
  msgl = [], msgll = 0, msgf1 = 0, msgl1 = "", msgl2 = "", msgl3 = "";
  trkw = false, trkwdx = 0, trkwdx2 = 0, trkwdy = 0, trkwdy2 = 0;
  curskcc = 0, curskd = 0, curskcd = null;
  vwax = 0, vway = 0, vwaw = 0, vwah = 0;
  dhlpn = 0, dhlpn2 = 0, dhlpq = [], dhlpql = 0, dhlpcd2 = null, dhlplf = 1, dhlpcd3 = null;
  frzc = false, frzcp = false, frzccd = null;
  chgcql = 0, chgcqp = 0, chgcqc = 1, chgcqkp = false;
  bmemmA = null, bmembA = null, bmembiA = 0, bmemnA = 0;
  bmemmB = null, bmembB = null, bmembiB = 0, bmemnB = 0;
  bmemmC = null, bmembC = null, bmembiC = 0, bmemnC = 0;
  bmemmD = null, bmembD = null, bmembiD = 0, bmemnD = 0;
  bmemmE = null, bmembE = null, bmembiE = 0, bmemnE = 0;
  bmemv0 = 0, bmemv1 = 0, bmemv2 = 0, bmemv3 = 0, bmemv4 = 0;
  cellsl = 0, cellsr = 0, cellst = 0, cellsb = 0;
  calcWrld();
  while (fl -- > 0) {
    fcidxinc();
  }
  clrucd = performance.now();
  dspmsg(["Universe      ","\u22C5      \u22C5","      Cleared"]);
  msgf1 = 0;
}

var patttxt =
      "#  Welcome to Yagols, Yet another Game of Life simulator !\r\n" +
      "\r\n" +
      "\r\n" +
      "#  https://github.com/jerps/Yagols\r\n" +
      "\r\n" +
      "\r\n" +
      "#  About Conway's Game of Life :\r\n" +
      "\r\n" +
      "#      http://www.conwaylife.com\r\n" +
      "\r\n" +
      "#      http://beltoforion.de/article.php?a=game_of_life\r\n" +
      "\r\n" +
      "#      http://web.stanford.edu/~cdebs/GameOfLife/#rules\r\n" +
      "\r\n" +
      "#      https://youtu.be/C2vgICfQawE\r\n" +
      "\r\n" +
      "#      https://www.google.nl/search?q=conway+game+of+life\r\n" +
      "\r\n" +
      "\r\n" +
      "#  INSTRUCTIONS.\r\n" +
      "\r\n" +
      "#      Press the ? button and explore.\r\n" +
      "\r\n" +
      "\r\n" +
      "#  ----------\r\n" +
      "\r\n" +
      "\r\n" +
      "#  This text box is used to paste text in (Extended) RLE format\r\n" +
      "#  (Run Length Encoding) which encodes a cell pattern.\r\n" +
      "#  See http://golly.sourceforge.net/Help/formats.html#rle.\r\n" +
      "\r\n" +
      "#  This preloaded text is already in Extended RLE format. Click a \"Patt\"\r\n" +
      "#  button to start decoding the text and, when decoded, add the pattern,\r\n" +
      "#  named \"Gosper glider gun\", to the part of the universe that is in the\r\n" +
      "#  center of the current viewing area, by switching cells on and/or off.\r\n" +
      "\r\n" +
      "#  Cells are always two-state (cell is on or off). Any given dimension\r\n" +
      "#  or rule with line \"x = ...\" is simply ignored. Only the actual encoded\r\n" +
      "#  pattern data is relevant, which is decoded into a grid width and height,\r\n" +
      "#  and the \"on\" cell positions in the grid which constitute the pattern.\r\n" +
      "\r\n" +
      "#  The decoder is forgiving. Blank lines and lines where the first\r\n" +
      "#  non-whitespace character(s) begin with \"#\", \"=\" or \"x\" are ignored.\r\n" +
      "#  All other lines are considered to contain run-length encoded pattern\r\n" +
      "#  data. Only characters \"b\" / \".\" (\"off\" cell), \"o\" / \"A\" (\"on\" cell),\r\n" +
      "#  \"0\"..\"9\", \"$\" and \"!\" are processed. Any other character and\r\n" +
      "#  whitespace is ignored.\r\n" +
      "\r\n" +
      "#  Clicking one of the \"Patt\" buttons starts the process. It can be\r\n" +
      "#  stopped or restarted any time by clicking \"Patt\" again with an\r\n" +
      "#  empty text or a different text. When the process is finished a\r\n" +
      "#  completion message is added to the beginning of the text in\r\n" +
      "#  this text box.\r\n" +
      "\r\n" +
      "#  There are three \"Patt\" buttons. When the \"/Add\" button is clicked,\r\n" +
      "#  the process just adds the \"on\" cells of the pattern to the universe,\r\n" +
      "#  centered in the current viewing area. When the \"/Replace\" button\r\n" +
      "#  is clicked, all the cells in the target grid are first set off. That is the\r\n" +
      "#  grid positioned around the center of the viewing area having the\r\n" +
      "#  same height and width as the decoded grid/pattern. Then the \"on\"\r\n" +
      "#  cells of the pattern are added. The \"/Reset\" button first resets the\r\n" +
      "#  universe.\r\n" +
      "\r\n" +
      "#  Although allowed, a concurrently playing simulation interferes with\r\n" +
      "#  the process. You might want to stop it first before clicking \"Patt\".\r\n" +
      "\r\n" +
      "\r\n" +
      "#  ----------\r\n" +
      "\r\n" +
      "\r\n" +
      "#N Gosper glider gun\r\n" +
      "#O Bill Gosper\r\n" +
      "#C A true period 30 glider gun.\r\n" +
      "#C The first known gun and the first known finite pattern with unbounded growth.\r\n" +
      "#C www.conwaylife.com/wiki/index.php?title=Gosper_glider_gun\r\n" +
      "x = 36, y = 9, rule = B3/S23\r\n" +
      "24bo11b$22bobo11b$12b2o6b2o12b2o$11bo3bo4b2o12b2o$2o8bo5bo3b2o14b$2o8b\r\n" +
      "o3bob2o4bobo11b$10bo5bo7bo11b$11bo3bo20b$12b2o!";

window.onload = function() {

  (function(window) {
    var timeouts = [];
    var messageName = "yagols-0tmomsg";
    function setZeroTimeout(fn) {
      timeouts.push(fn);
      window.postMessage(messageName, "*");
    }
    function handleMessage(event) {
      if (event.source == window && event.data == messageName) {
        event.stopPropagation();
        if (timeouts.length > 0) {
          var fn = timeouts.shift();
          fn();
        }
      }
    }
    window.addEventListener("message", handleMessage, true);
    window.YagolsSetZeroTimeoutFunc = setZeroTimeout;
  })(window);

  // https://developer.mozilla.org/en-US/docs/Web/Events/wheel
  // creates a global "addWheelListener" method
  // example: addWheelListener( elem, function( e ) { console.log( e.deltaY ); e.preventDefault(); } );
  (function(window,document) {
    var prefix = "", _addEventListener, support;
    // detect event model
    if ( window.addEventListener ) {
        _addEventListener = "addEventListener";
    } else {
        _addEventListener = "attachEvent";
        prefix = "on";
    }
    // detect available wheel event
    support = "onwheel" in document.createElement("div") ? "wheel" : // Modern browsers support "wheel"
              document.onmousewheel !== undefined ? "mousewheel" : // Webkit and IE support at least "mousewheel"
              "DOMMouseScroll"; // let's assume that remaining browsers are older Firefox
    window.addWheelListener = function( elem, callback, useCapture ) {
        _addWheelListener( elem, support, callback, useCapture );
        // handle MozMousePixelScroll in older Firefox
        if( support == "DOMMouseScroll" ) {
            _addWheelListener( elem, "MozMousePixelScroll", callback, useCapture );
        }
    };
    function _addWheelListener( elem, eventName, callback, useCapture ) {
        elem[ _addEventListener ]( prefix + eventName, support == "wheel" ? callback : function( originalEvent ) {
            !originalEvent && ( originalEvent = window.event );
            // create a normalized event object
            var event = {
                // keep a ref to the original event object
                originalEvent: originalEvent,
                target: originalEvent.target || originalEvent.srcElement,
                type: "wheel",
                deltaMode: originalEvent.type == "MozMousePixelScroll" ? 0 : 1,
                deltaX: 0,
                deltaY: 0,
                deltaZ: 0,
                preventDefault: function() {
                    originalEvent.preventDefault ?
                        originalEvent.preventDefault() :
                        originalEvent.returnValue = false;
                }
            };
            // calculate deltaY (and deltaX) according to the event
            if ( support == "mousewheel" ) {
                event.deltaY = - 1/40 * originalEvent.wheelDelta;
                // Webkit also support wheelDeltaX
                originalEvent.wheelDeltaX && ( event.deltaX = - 1/40 * originalEvent.wheelDeltaX );
            } else {
                event.deltaY = originalEvent.deltaY || originalEvent.detail;
            }
            // it's time to fire the callback
            return callback( event );
        }, useCapture || false );
    }
  })(window,document);

  (function(window) {
  /**
   * (c) 2015, Facebook, Inc.
   * All rights reserved.
   *
   * This source code is licensed under the BSD-style license found in the
   * LICENSE file in the root directory of this source tree. An additional grant
   * of patent rights can be found in the PATENTS file in the same directory.
   *
   * @providesModule normalizeWheel
   * @typechecks
   */
  /**
   * Mouse wheel (and 2-finger trackpad) support on the web sucks.  It is
   * complicated, thus this doc is long and (hopefully) detailed enough to answer
   * your questions.
   *
   * If you need to react to the mouse wheel in a predictable way, this code is
   * like your bestest friend. * hugs *
   *
   * As of today, there are 4 DOM event types you can listen to:
   *
   *   'wheel'                -- Chrome(31+), FF(17+), IE(9+)
   *   'mousewheel'           -- Chrome, IE(6+), Opera, Safari
   *   'MozMousePixelScroll'  -- FF(3.5 only!) (2010-2013) -- don't bother!
   *   'DOMMouseScroll'       -- FF(0.9.7+) since 2003
   *
   * So what to do?  The is the best:
   *
   *   normalizeWheel.getEventType();
   *
   * In your event callback, use this code to get sane interpretation of the
   * deltas.  This code will return an object with properties:
   *
   *   spinX   -- normalized spin speed (use for zoom) - x plane
   *   spinY   -- " - y plane
   *   pixelX  -- normalized distance (to pixels) - x plane
   *   pixelY  -- " - y plane
   *
   * Wheel values are provided by the browser assuming you are using the wheel to
   * scroll a web page by a number of lines or pixels (or pages).  Values can vary
   * significantly on different platforms and browsers, forgetting that you can
   * scroll at different speeds.  Some devices (like trackpads) emit more events
   * at smaller increments with fine granularity, and some emit massive jumps with
   * linear speed or acceleration.
   *
   * This code does its best to normalize the deltas for you:
   *
   *   - spin is trying to normalize how far the wheel was spun (or trackpad
   *     dragged).  This is super useful for zoom support where you want to
   *     throw away the chunky scroll steps on the PC and make those equal to
   *     the slow and smooth tiny steps on the Mac. Key data: This code tries to
   *     resolve a single slow step on a wheel to 1.
   *
   *   - pixel is normalizing the desired scroll delta in pixel units.  You'll
   *     get the crazy differences between browsers, but at least it'll be in
   *     pixels!
   *
   *   - positive value indicates scrolling DOWN/RIGHT, negative UP/LEFT.  This
   *     should translate to positive value zooming IN, negative zooming OUT.
   *     This matches the newer 'wheel' event.
   *
   * Why are there spinX, spinY (or pixels)?
   *
   *   - spinX is a 2-finger side drag on the trackpad, and a shift + wheel turn
   *     with a mouse.  It results in side-scrolling in the browser by default.
   *
   *   - spinY is what you expect -- it's the classic axis of a mouse wheel.
   *
   *   - I dropped spinZ/pixelZ.  It is supported by the DOM 3 'wheel' event and
   *     probably is by browsers in conjunction with fancy 3D controllers .. but
   *     you know.
   *
   * Implementation info:
   *
   * Examples of 'wheel' event if you scroll slowly (down) by one step with an
   * average mouse:
   *
   *   OS X + Chrome  (mouse)     -    4   pixel delta  (wheelDelta -120)
   *   OS X + Safari  (mouse)     -  N/A   pixel delta  (wheelDelta  -12)
   *   OS X + Firefox (mouse)     -    0.1 line  delta  (wheelDelta  N/A)
   *   Win8 + Chrome  (mouse)     -  100   pixel delta  (wheelDelta -120)
   *   Win8 + Firefox (mouse)     -    3   line  delta  (wheelDelta -120)
   *
   * On the trackpad:
   *
   *   OS X + Chrome  (trackpad)  -    2   pixel delta  (wheelDelta   -6)
   *   OS X + Firefox (trackpad)  -    1   pixel delta  (wheelDelta  N/A)
   *
   * On other/older browsers.. it's more complicated as there can be multiple and
   * also missing delta values.
   *
   * The 'wheel' event is more standard:
   *
   * http://www.w3.org/TR/DOM-Level-3-Events/#events-wheelevents
   *
   * The basics is that it includes a unit, deltaMode (pixels, lines, pages), and
   * deltaX, deltaY and deltaZ.  Some browsers provide other values to maintain
   * backward compatibility with older events.  Those other values help us
   * better normalize spin speed.  Example of what the browsers provide:
   *
   *                          | event.wheelDelta | event.detail
   *        ------------------+------------------+--------------
   *          Safari v5/OS X  |       -120       |       0
   *          Safari v5/Win7  |       -120       |       0
   *         Chrome v17/OS X  |       -120       |       0
   *         Chrome v17/Win7  |       -120       |       0
   *                IE9/Win7  |       -120       |   undefined
   *         Firefox v4/OS X  |     undefined    |       1
   *         Firefox v4/Win7  |     undefined    |       3
   *
   */
  function normalizeWheel(/*object*/ event) /*object*/ {
    var sX = 0, sY = 0,       // spinX, spinY
        pX = 0, pY = 0;       // pixelX, pixelY

    // Reasonable defaults
    var PIXEL_STEP  = 10 * (800 / cheight);
    var LINE_HEIGHT = 40 * (800 / cheight);
    var PAGE_HEIGHT = 800 * (800 / cheight);

    // Legacy
    if ('detail'      in event) { sY = event.detail; }
    if ('wheelDelta'  in event) { sY = -event.wheelDelta / 120; }
    if ('wheelDeltaY' in event) { sY = -event.wheelDeltaY / 120; }
    if ('wheelDeltaX' in event) { sX = -event.wheelDeltaX / 120; }

    // side scrolling on FF with DOMMouseScroll
    if ( 'axis' in event && event.axis === event.HORIZONTAL_AXIS ) {
      sX = sY;
      sY = 0;
    }

    pX = sX * PIXEL_STEP;
    pY = sY * PIXEL_STEP;

    if ('deltaY' in event) { pY = event.deltaY; }
    if ('deltaX' in event) { pX = event.deltaX; }

    if ((pX || pY) && event.deltaMode) {
      if (event.deltaMode == 1) {          // delta in LINE units
        pX *= LINE_HEIGHT;
        pY *= LINE_HEIGHT;
      } else {                             // delta in PAGE units
        pX *= PAGE_HEIGHT;
        pY *= PAGE_HEIGHT;
      }
    }

    // Fall-back if spin cannot be determined
    if (pX && !sX) { sX = (pX < 1) ? -1 : 1; }
    if (pY && !sY) { sY = (pY < 1) ? -1 : 1; }

    return { spinX  : sX,
             spinY  : sY,
             pixelX : pX,
             pixelY : pY };
  }
  window.normalizeWheel = normalizeWheel;
  })(window);

  //--

  init0();
  init1();

  setTimeout(function() {

    addel();

    title0cd = performance.now();

    window.YagolsSetZeroTimeoutFunc(tick);
    requestAnimationFrame(dspview);

  }, 1500);

}

function init0() {

  var x;

  document.getElementById('patternt').value = patttxt;

  canvas0 = document.getElementById('canvas0');

  x = getComputedStyle(canvas0);
  cwidth = cbrw = parseInt(x.getPropertyValue('width').slice(0, -2));
  cheight = cbrh = parseInt(x.getPropertyValue('height').slice(0, -2));

  canvas1 = document.getElementById('canvas1');
  canvas1a = document.getElementById('canvas1a');
  canvas1b = document.getElementById('canvas1b');
  canvas2 = document.getElementById('canvas2');
  canvas3 = document.getElementById('canvas3');
  canvasos0 = document.createElement('canvas');
  canvasos1 = document.createElement('canvas');
  canvasos2 = document.createElement('canvas');
  canvasosci = document.createElement('canvas');

  ctx0 = canvas0.getContext("2d");
  ctx1 = canvas1.getContext("2d");
  ctx1a = canvas1a.getContext("2d");
  ctx1b = canvas1b.getContext("2d");
  ctx2 = canvas2.getContext("2d");
  ctx3 = canvas3.getContext("2d");
  ctxos0 = canvasos0.getContext("2d");
  ctxos1 = canvasos1.getContext("2d");
  ctxos2 = canvasos2.getContext("2d");
  ctxosci = canvasosci.getContext("2d");

  canvas0.width = cwidth;
  canvas0.height = cheight;
  canvas1.width = cwidth;
  canvas1.height = cheight;
  canvas1a.width = cwidth;
  canvas1a.height = cheight;
  canvas1b.width = cwidth;
  canvas1b.height = cheight;
  canvas2.width = cwidth;
  canvas2.height = cheight;
  canvas3.width = cwidth;
  canvas3.height = cheight;
  canvasosci.width = cwidth < 1000 ? 1000 : cwidth;
  canvasosci.height = cheight < 1000 ? 1000 : cheight;

  ctx1.imageSmoothingEnabled = false;
  ctx1a.textBaseline = "bottom";
  ctx2.textBaseline = "bottom";
  ctx2.imageSmoothingEnabled = false;
  ctx3.imageSmoothingEnabled = false;

  calcICellsz();
  calcCellsz();

  dive[0] = document.getElementById("pattern");
  dive[1] = document.getElementById("crule");

  ctx1a.font = "" + (x = Math.trunc(cwidth/1000 * 80)) +"px " + font;
  ctx1a.fillStyle = "rgba(0, 0, 0, 1)";
  ctx1a.fillRect(0, 0, cwidth, cheight);
  ctx1a.fillStyle = "rgba(170, 110, 110, 0.6)";
  ctx1a.fillText("Y a g o l s", (title0x = (cwidth - ctx1a.measureText("Y a g o l s").width) / 2), (title0y = cheight / 2 + x / 2));

  pstrimg("W-23-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAACRklEQVRIS9WVO2jUQRCH7wQbJYqFIpJCND5I5KKgjZVImqQIiDY+gkdCsFFRA1pYaCkKKXyUiUQhEUVBxDTRUiISEghqREERFVESLAwoiMbvJzMwt7dXXuEfPnZnd3ZuZnZ2rlio41eso+3C/298HelZBN9grkaqXOcX++9r6KxhfQn8gE9Ky1J4C6tgAHphITm8HPm16Uh3ixmIarL1CHbDSyhpQQxC2X4kd3Abe5PB0kbmbxIHViBPgCLsg36/0EMIN015k3kZz3ZbVL62l8m9xHh0YCd74258M8KMKe9nvBUOSmcIusLaFebHE+PuwFfWW2DWjSvvz6DZPIx5X8baFKyE29ADad5l5w4oogewB37HOr/MwjE72Mo4b55tNeNPGI/Ac1tfb7oS3QHl+yhc02I03ol83w4qLN24vjJcB6XiBDyFHRDzHvOtPV1shfG1yO/M4AHGEdv3fO9DvgsX4AxcgtOm7/n+iFwCvZcK44uRFbp+2eu9gbnyrXC9ijqYPwTP+0/m7oAK4SD8SY1LPg/n7KAutwmU43iBjcgf4DvoPr7AtDlwmPGGRVPVuNrYGLPNDRbFMONVUOnp5cYIFYVS6WWsB/iilvHVbHy2TeV9O5yCtPY9wrMWle5H0SkSRfTvS1uumtdj2OUKNqavtp31UTOkJpXtS7l+fhLl/mA816g879GHNLrsn4X6gqpG4alacp0y5t1/oKon5TxXd3tloepglUdmzfMuMduGc8bTRhVfa0xDrKyLbOhhVXx1/Q/9C+iIhRvc/zIHAAAAAElFTkSuQmCC");
  pstrimg("W-23-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAAC5klEQVRIS9WUS2hTQRSGe5O0SB4rRYq1otIUK6LgwpWCi7rzgUGxXYhUcVUaEpPsFIIgtHls1E1EtHTV4qKouFF0ozvfm1bBJoJU0YLGklDUPPzOZW6YTNKVdOGFYWbOnP+fc/4591gda/hZa8jd8R+T1+t1K5vNHkMej2VZC7FY7LUple7DeiWRSDxoJ2c6nT4IxwZ8vuPzxBofH9/idrsLGF0AFkul0tZkMlnRwVzeX6vV5pVP1ePx9EQika+6DxiX3+//ic3P+NPV1RWwxOjz+T4B3ISxykW90Wj0iw7MZDJj7K86NnyHyHBG9yHqXdjfYHMznsXj8QP2gwK+w3RC1qQ0TErTBvl99oc12yTgkdUCgOMiHFcc8tM4TinyaQ6GHaDKbJGoujWyPJH3Yas7NgK0A4C4hn0fl7+0ydG0F+MCy05T91QqFXS5XPPY5U0+M3pEPl13FcA3SNdzVkTv7nA4/MsmV9XwgeV2AaJ7H7p/VBePcn6d9QrzGAQ3FSZEhrOy1gIQvR8T9aDYGz8RD3ID4HkFPAvwtqxJ9y7TUUY+EAjsWObDbx37hu7Gg8Mdz5rkRwDdUxrO4DCk603UU1x4hiDm8Btg/x6fAdHd0VuyZuzGPtdEPjExEUBb0U2isuvd6/VuU3q7nSqCSCQadXQvFotLlLL94PgslcvlzQT1u4lc6S5/5x4BQrqxWq0eVxo36h/yQ5w/lKdihCqVyiseN89aApglu5DKvrlxkXIWsgvq8CSz1P4pQAUi6pc/18jwGufPGXYZgz1Hid5qS05U+zl46ugO6V4AQeZG7esZsn4h/UgCkGzZB4m80JY8l8t1Ugw/APgcB5nNv5YgpBVIS+CIzrdKX2rp5wAlcsnA+Vr6DfINQvjICKDpz256UMcR4CWAl9WDyeUtndLQ3Ya260ktkUt3w/etSlVALREZlSXcbdtwC7nZqLhkhAqY1CWQtVFZ7/DZqTeytrKYJP+y/wucJZfkxKi2RQAAAABJRU5ErkJggg==");
  pstrimg("W-23-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAADCklEQVRIS9WVPWgUQRTHZ3YveGAgWgQhRSBBCWJyEQU/EsHb24gGxUosBEFEUMHCLwQ/IBCIYJEIFtHGRrRQsNDCgLndVRAjRIu7jSKBkEqjHsGQxBRyN8//zO2cu3trmcKFsNzM//33vd+8eeFsFR++it7sPzb3yEuRT1eBJ8UZn7Yy1qM4qphmBZpbSTidonMOHs3gMZ/ryt3h+am8ZQjDgVgi+slN3mptsZbDwZ7vHSKi51JDjIRpmLuyndnJiGbWS4slsQDzNdBW0izdwj0s0iLNwXqdCmTmnmwmOxEOdIvuPfw+rdeI05DdZd+ImBe8I4KLxzA3YD5td9sd6kDdgvsO5juVmNjNXHfuejjQKTgfOOfbQmuvcpmc9a8EkORDO2Mfr5oXXcnwStWb3mKjVwfKysSi+AbzppoZsRLP8BaLW2W9FkoAFuwEEnygzfeiFAcGZpy767sHJW+UK7UL+Fsf567QLlEJe43QroB3W2937w9lrrqhSF+BplkGGszYj47IB8hGsX4W67/xexQfOR9kOwA0g0rzNwEDWX9E1p1yvXaJgEaa2UHgCAIvBcje470dQaVKY2WTuWyWENWAtRr3yIETuw/zU1HzgnsNQUMB9wlw74nxfo0PZsH2C/C1QDfHu9C24K55y6o58aMwfxox96a8jVShT0FWqt9JkDwLyVuWq7oInTUGzQHNndaSHzrwJdEg2vo2981HzcFd+GIGRq0yMMVSW8usfFIyDvc/EFxE4LBqLMYGhCHecMHzqr8ZTaLiHbqDIoMLgc+wcTjYHIR4H4J2S948xdvlzQ1XiP0x7PvQqzbGcxvo5MfVEzF3fOcMmN3V3PFuR/CGcO/LztIV4qOzuK1z0PTI6uDWj5v7MtF8fGa8yfhlfJfzQQvUO3ZrMaBeQNMfoNFJ1s2lunkONJ+h7tDmSfMGmgvYHwknEL/ZdVjkAgLlyD0WZJU4KWOdVf1Gwkyqy9zDdAPHJ/o8kjKKcFe+yWO43jw2qNDnwxiflyNnUK0w3Fm1CxXWrer/0D/OWK2YUJT5+wAAAABJRU5ErkJggg==");
  pstrimg("P-23-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABF0lEQVRIS2NkoCFgpKHZDMPDcFlgELGjBdNvIP8HEH8A4p+kBiEsWDiAGq8CsRIeAyYB5TqB+BmxliAbfhKoSY8IjfpANZeIUAePUJDLYYZXAtlTgJgNiFmAWB6IS4E4FGrgPSANsuALIQuwuTwHqGkqmkaQuoVAHAsVNwXSZ6hlOMgceyA+ADXQAEhfpKbhhkDDztHK8AagwfWUBksq0IA5aF4OB/JXIEWoDpD9nZxg2Q3UtAeIQRlKCoiDgFgMySBnIHsfIYNB8qSk889A9f5AvJ8Yg3EZDoq0nVADQJa/hUbkcWKCAtlibC7HFubEOhZFHbGZaIQazg309ykg1gJibGULRcECStOHgRhUIFE9QslyGSFNAJAGPBivRcqNAAAAAElFTkSuQmCC");
  pstrimg("P-23-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABYElEQVRIS2NkoCFgpKHZDMPA8J6eHndgEPEiB9P///+/MzExvf/58+fNqqqqt6QGIThYuru7xRgZGZ8Bmcx4DLgHVJNSXFy8n1hL4IYDNTwGamYjQmNmSUnJDCLUQSIU5HIkw08xMzOH//v3jx+IOYBBYwsMmnKgvAjUwL9AeZXCwsIHhCzAZvheoMtckDU2NDSwcHNzg3wmARUvAqrpp4rhIEOAEd4KpKqgBmYDDZ9GNcOBQZcDdPlkqhsODHfG3t7e80CD9aGGAx1e0kuOy7cDNXrBNEINXgrkR8IilIWFRbqgoOAlyYYDDfsM9P5VIA1KlqAUIgPkMyEZ1AW0HJR6CAJS0vl/oGmdQIMrCZoKVYDN8J9AubtIBnwAso8Ag6KPmKBAthib4ShhTqwrsakjKhORa8EQNxyYQWSBSQ8UiaxAjFG2UBQsbW1twqysrE+A6ZkDaBB1I5RclxHSBwCJ/58YCIx7rwAAAABJRU5ErkJggg==");
  pstrimg("P-23-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABeElEQVRIS92UsUrDUBSGz03iIi2COPsEaYO4CA62N4O7ik+gUBA3H0HwARRd9Akc+gImcVS7mNiObl3q4qQ41Bz/G1qJNCFpTAcN3Cn3/85//3PuFTTDT8yQTf8A7vjOkRCiGo9JkHhn4lfS6F6a0p82wigWN3BXAXkATEsDMPMLihzbNfs0b5FvODHdoQNGlhAmzuy6fZi1T/1Pgj/jBC24XILbeRRdx75drIoSAB5qpG02682brAKTcKaetKQZF3o9rxIOwz56shAVYL60LXu/FLiCOIFzjRPtREBB57ImD8qD+84FnLdKh3vsGeFTqHqxHMGZrhDdXhHnjxCujIUKzAHfIgrV2KihuqavNcxGZ3o40QdEfVAMFlyF28XxVI3gbYziVhY4bRTTdDBNbZxqOw84Gc40BGUwAqhRfUMkXURxkieKeOGkOf+ReV6XSftyXaKiBf4+fAPvhYMbqGMiJt6W38XSdS36pA6mYg7wchta1FmW7gsn8MUY5XCRLgAAAABJRU5ErkJggg==");
  pstrimg("\u2317-29-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAABUklEQVRIS2NkGADAOAB2MoxaStNQHw3e0eClSggMqoRUBPRSNhAbAPFnJO/JANkHgbgSiFeR621cPp0KNDAEiDWA+D2S4apA9i0gzgFikBqyAC5LJwFNCx8RluIKXhWg729TI3hBiSYeiH9CI+gvkLaAsi8B6adALA7EL4HYGIjFoHI7gbQQlC0PpHOJTVygOO0A4nKyUgSqplQgdw4x5sASEjtQMciHIACi5wGxFxDrA/FrIAap+wPEukAM8n0xEPcBMQtUDxOQ/kWMhSA1o6kXFM/RQKwOxN+Qgk0ByL4PxETHH7YgBwWvJhDLAvFvJAVToGKgVA0qkUDqQPJGQDwRiFcDMagAYYXqAcXtHaiDCEYtyLAdQOxOUCVhBTVAJa2ElUF8MCA+xea4LqAgKGgVgZgmcYrN0pFT4K8Eet8BiNHrUxD/OhCXAHEvMYkGmxoA31hUHoCbefIAAAAASUVORK5CYII=");
  pstrimg("\u2317-29-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAABuElEQVRIS+2VvUvDUBTF+xJpIhUHXZyqSwUHQUEEQaqDLuIoLqKbnUvT/hP92hzsJE4WJ3Ho5ODXppNYF9FBpAoudajVwfh7JYFSCz5qS8W2EN59Nzf35Jx7Xio8bfiJNmB6uqAtVb0rb1fepijwN4xk27ZIpVInUJohDsRisXuXXjKZXCTOkc+SX2uU9jemDugdq1/X9YlIJHLlNk8kEqtCiCz7o2g0utBs0FtARwAYp3n+X4NW5K1lykxXYL3/a3lpdArANI0+XRkBM2VM/oO4TGhwvbPvY685da/svU4s1z1VcwnMkafRWKOmqHoux/yXVPpU3JtOpwd8Pp9k5CkUCmXiB8IhmARN07wwDEMPhUJvHKVN8ttcZ5ZlBTOZTK98plQqecPhcJGXt5VBqwudI9Mh7sVc10g1qmnaMB+HR1cJ5F1GiUP5VVKdXz25RTwe3wBgUrpTFjhzsQh7ANhhfeKSjpUzn+f+HOsL97ZYKy4n52V/jHsPlGYKqyKF/SrFP9Rcwn5KpU97mNa+mXQv7G/IB/jg+1sy03qgGKZzjswzCgzW/p8i+zr5XUZwjlNnVUxTr+YLnhgoLXRnWhoAAAAASUVORK5CYII=");
  pstrimg("\u2317-29-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAABxElEQVRIS+1VO0vDUBQ+N33gUHTQoTiKIEXT4A8Q22ZychL8Cw4uDoIggiiCCv4QQVychKQW0cFJEzoogij4GERBBCWVHL+bmg61JaUPKrYXbnJfOd893/nOiaA2NNEGTOqCtpT1Lr1depvCwN8QUpazYddy8ygbw+hTuqof+u6ZlrnAxNuCxWlGy0zU6/YvTyUoW/wIwH702Yya2fWNG5axJkgsE1MeoGPNBn0A4ACMz8D43r8GLdJb5iliugqvVxqm17gwLhGnIRjjUowERbwx0xeeBXQ5L+AiPXj7OvjEfsg7JyiM8Umt4hIAvRdCDNYritJ3TOcAHa/FjnfrnJVTXXZfvQ966ZnfPPX2gYG5KEf3HXKilKQntnkHJ+aZ+UpJKqNkUfzH0xipdJ0WaclMYKuWMh2iXlSkW9AbD3EoldJSx6WKZJtLEMwGes3xq8S1MG1zi11OIH6OfwClbhriUhC7I6y/SH1izcFFNMwTmL9j7wDjaFHkHMHemZ7U1wMDKo0h9z7wlqnQWGO6gXpl6gW29nhafi2v4Nt8h/W4wspkS2JaEdTiDkkZ0CsVGyv/n0J0m1hflBVJ1/SRQMVUOfAN/GIgLfqdcIwAAAAASUVORK5CYII=");
  pstrimg("\u2AA2-60-170-170-255", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAECklEQVRoQ+2YS0gVURjHz/iAlMhFrVy1kcpoIQXRotpUFNUizYygInqImFL5yKTHJSoLtYcW0QuTFuYjohKJqE2uWkSb0kURrVpUi4pwIej0+2Qu5Djn3Ct074zjXBi4d845c/+/8535vv85lpplH2uW8aoIOOwRjyIcRThkMxAt6ZAFdApOFOEowiGbgWhJhyygUdKKlnS0pEM2A9GSDllAoywdLeloSYdsBqIlHbKAmrN0T4/9gh5rua4NDamGWMwaD9sETFrSAPcDuNmBHLVt1Zmbq45s3WqNhAXcBBxntPnyOCtLVRQXW99mOvgk4O5uu9Oy1B4NlIC/zMhQldu3Wx9nKviULN3ba29gKV8EqMgA9YaJqSsttQZnGri2LPE+Lwf8MmBrDFAf6FNfVmYNzBTwhHW4r88uGBtTrYBvAcqzP9BfaIsB3hl08ITAcQAingfYDcB3ci9TA/adPk2AXwkquDtLH0ZoG6IfZGerOq+sHIvZGYWF6jp99gE/xwuMtt9Sy4eHVSxotXwSMAmrCrFtDoTNd0lKp4jYazeYgC9Zos5xvxLweZqISi2/RXvtjh3WaBCi7gauQWCLW5i8o4huQvRtL9GUs1ruH6fPAl1J4xkPMTEH/DYx7iW9EWFPEZ6tW6q0ddBW7xUxwA/S1kifhTpw7g9kZqrqkhLrsx8R90xaLO0zgFchaL5JOCbkqJcJYXwx488ydqkh4oNMzDEm7m06wY1ZOomIKcDeOyXpkVs44Ktpb+b+SgPUO1kVgD9PB3hSZQnhmxB+HkEm9yU+u41dVpM7M1PLF4+PTyTDdVy6//xE2wnA+1IJnhRwXADCixB+kt/bDMIlG/fn5Kjd7gTV1WXn8/7KxO01jJeJiwF+MxXg0wJ2zMcl3r1DBsET5Yw+mxH951/R4tqYsAvcK9GNZ+wPcsN5fPpV34DFV/PnrVxyOKD7/KLhPteUDO6Mb6dtlW5wuuypMcLOu3sJkcsMoB8lMWFO7rj7JDk+rRsQT+AksvPE3thJMlPKChHdJe8hV4FhonzZYrqdlpSRZ4jM8xIqHlmMBwmp0csxMVHVjBPHla8B9f0QISlriXg54WjRWUsiepp2gdUaFSbrCRuScr+PiRJtHl4RrQYvN+RsHlpoLwc0VxNR2TyIh67w20PH9XltD1sQ2YHIGi+RTmmSkxA5+8rSgI7wjHtB2iV5AhsSjHJMwzX6iOnQHQD8BLQ9iPvgpIGJ6CI6iy1cz6U74vkq73iQTzoSAuOKVjj+13ezYFp5023zOqaVjUIis5FWszBdKFN/d9LaT+e7QTMLKQN2nWnF/8d3s5AuYNn1BMIspBJYDvGa5Zg2SGYhZcCUoLmcWIwE7Sw5ZcD/88FBfdZfpq26THKECycAAAAASUVORK5CYII=");
  pstrimg("\u2AA2-60-0-170-255", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEAklEQVRoQ+2ZTUhUURTHz80+oGhRVKTtpBaBiyASWhS0KCowFzkakW0qaiFqo6IZpUIolUoUtYu+sJw3Cn0HtaioRdZGKmgTrayIPhYt+jDp9L/vzSxm3rv3zUAz8+Z5HzyZN/fd4fzuOfec/7kKmmaXmGa8ZIDD7nHjYePhkK2ACemQOdSFYzxsPByyFTAhHTKHmqRlQtqEdMhWwIR0yBxqsrQJaRPSIVsBE9Ihc6hPlo5xDG9sw32EammAhOCwLUBqSFt8GYD1NiTTL/wdxFF9D9WKybCAq4GThEx/8fE8/aFW2iW+Fzt4OvAAgKIKKIbX4zSTmmm7+Fis4O4sbfFqgMlQXq+Bug+/t9AO8brYwNVlyeLlCfAqDdQYzaAmqhFjxQLuX4dHuZSmqM9OZgJ4XhfTG4y0UETcCzq4P3CS4BbPpZ/Ui8cG3CUKsPdYlHaADwUVPBU4zhHszWEYfYomUY68sjKzQOrqRri34L15CrCvGO9CLT8XtFqeChzjWkBI8eFUYqbbeD6MOvzKBeaAN+L7o7gXKkJd1vJeWoItsUFMBcHr6WVJig4pPlIvuUeJOqlOXPc0Os67ERl9WJwyBbis5Wcx3lpoEZMKPMxrkHyewrjZCm98w/eDtJiOe3osztUJ8JVKcEFDSIJttFN8KoTHvZNWjA/AGzJUS7WGlyBBeYmQOK/DdujH3EoFVHK7ROHxt/kE12dpP485O/0ZFqcDhj92GT7MFYgYqd42aaCeJETMi3yAZ1aWLK4E2Ekf9TVhNxo10N3pXZbFy2wRQxhV1XKilxhrQkl7lEvwzICTFoxyOfZfBx73aESIzMxXMN7gSlBDvABavBPjUQ34BBanGQlyNBfg2QFL8fGDDtkZW626ZEa+Q/MpQlvF7xSjHdXWhe/2aeZ/wFgbFutq4YClriY7CVUrjWD6YgsWrwzuzD+De7Nmfl7kqd7Dcu8SIIjWalZ7HKDd2Hs3XO9kNj+vDYg3sF92dg4FRhIqzF1WLN6I8RO4V2kW6gF+JZrvFjNdeFQA4iHuRQpDHeFByNhexz4W12FMNhjlivkFP0TITFoSjSNz9mik5X6MdwNyqSeojAhBF9CQRAt9TKRuHhwjZWno9FRDTvPQbo8TcrLXJQ8CBTomQmYPyEGguz1kumTLQkHHPI10SpMsLQfxziwFqDzs6w9Sl5S0M/M67IgG2RHtxWTVAcBnO/QD2AdnDnyNy4A3CJCIRh29s5uNAJ90+AOP8Ars4tNBEAua0pb1kNcxbSZi4zm6oMZiOq309nCMqxCaN4MmFrJ2o2aC7kwrOa3gYiE/wAESC7kDtrge2fii3fUESCzkDvguz6EtEIAh/L+wf1n6n8saoN/6B5pwTkzNhM0OAAAAAElFTkSuQmCC");
  pstrimg("\u2AA2-60-120-120-120", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEOElEQVRoQ+2ZTUhUURiGHVFnxBZhbcyNRVQrV0GLWkQFFa2qTUQLiTI1rMa/+TFlpKb5rbEoKyF0ERG4iSDKaiHYInfVJqSkIKpV0sb8SWd6jlzBmTnnzgg5c+d6Bw7mPfdM33Pe73znPUdb0Rr72NYYb5EFbHbFLYUthU02A1ZKm0zQNBxLYUthk82AldImE9QqWlZKWyltshmwUtpkglpV2kppK6VNNgNWSptMUP0q7XK5bvNGXXFxcWMgEHjIvxNmm4CklAY4YrPZ2gRkIpGYAtxrt9v7fD7fvFnAlcDLAOPAXysvLw8A/qfQwZOA3W53O0BhGRTQIr375ubmumOx2GShgqdVaY/Hsw22IEBHVVD0PyL1O4PB4NdCA1duSx0dHZtYw1cAOq0D9SIej7eEw+GPhQKecR92Op2VZWVlLq2YFSvAxgC/BPhbo4NnBF4CaG5utldUVLSQzj3AlyrW+SeeN4dCoWGjgqcWrX0E+ormdjgcdxRV2UZxawTcD/h6BfgPnjsBHzLaXp4EzLrdz7p9re3DCYAG5ufnr0aj0S8SMAF+gufXaVUK8Cm+o2ViYuLB0NDQghFUT1X4EEE9lwQ2RuDtuK9RWdAYlsP036JvqwIqzvNusiaUbxOTqvB2FH5HcA5F4D9F4Cg2IFMM8D2AR3lnlwqcpXBjdnbW39vb+zsfikuLFql6nGCEAdmiFzgmJCAzIV6vt3ZhYSEM/EFFqi8uFyp7F5VdrPecfXSrdBaKCc8tloCHAvU+NWomrkYrbidVRPQ/obkBH88FdVbbEu5rh/DTBKTnvkTALsCf8jPplNXa2rqxpKTEh6qN9Kn28lGy4kIkEhFLatU+WQEv/e+kahVBNRG4VxW4OGXRF+Ow0ZNaoPh93czMzDltuUjBGT/O9zdgW0dWg3pFwJr5OEsgN3WUEhV5cHJysqG/v//v8qA113YRoMs64z/Tdx7gl3kD1nx1DwGc0QniO30+WQUX44EM0U7pjM+JPdVVWKxdKmmUQI/oBDpCGnaxdt+kvpPl+JweQKTAWVRncSlwVxQy2baCojvZzyNMwF6d6vyYifTk+oiZ6rRqCFAoVa0IdNF44JgGZY6JbegA/cJq1srGG+ESIVtrOYIa3SpriaLHhMOibVZMlMiIIJXbn+9rIuXhgcBFtb3HGvYr3JAN0DoNtFKhqDg89JARsXx76KX40o6HwvnQ6UGN+7Igta2pifcCwNgViv7iuddIpyQpsN6+J0zD9PS0uOTzqC4A6PvGRLQZ8RycNTBbywYgfAxooqls4Qfe6TDyTUdG4M7OzmoO/0EjmAW9zFtpn+yaNqPZQM1hmrOQbiulCpO+uwFJc0xLL9OXF7OwUhX13tfblhbHGcEs5ArYMGZh1YCxhuIS7xlNXNMaxiysGnB9fX0pZ1jxp1HT/V0447b0P2fVSN/1D68fB1tROsodAAAAAElFTkSuQmCC");
  pstrimg("\u2AA2-60-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEoklEQVRoQ+2ZTWwbVRDHZ54bitTU6zhcSjkAKrYRUk9IHOCAAIkiTsAFIQ4V4qNJ/ZGEhDaBRokgH01T8mUKRELtASGkXiokVAocKrUHeitc8DqVqAQkJ8jajSu5id8wGydSbL9dG6m219vNIZHifcn83n/ezP/NItxjX3iP8YIH7HbFPYU9hV22A15Ku0zQChxPYU9hl+2Al9IuE9QrWl5Keyntsh3wUtplgnpV2ktpL6VdtgNeSrtMUPsqHYmvJvmJwxJEV3re/zUAkts2oCSlw3HjFP+ivwhJOSIxpHf6z8AIbrgF3AZ4CxtAAtH4rXxgYnkRb7c6eClwzBhAhCkVFBEQIp1Z84nhv2a0f1sVvKJKR45mQ+CTkwz0ihUUH+xvUNCHqdmOm60GbtmWwtHcg4DrH7Pib9mA/yCFr29pdu/vrQJetQ8/1JsJ7inQMQbq54eFBdi1DcKeGwvaL04Hrwq8DXAgRrt3YaYPCEb5JWubBdgSSIylktolp4KXFq2o8Rxr+BNDHb+V1z5TV2XCUDTbxWd4jBcH1AWOlgGxV5/Xzjutl5cAh+LG85yzP292Ya7K/OMsf/9ETwb+qAQjjMSyrwPK0wy1T60o5fizvtSK9hWcx4ITVC/rw5lDCHRREdg1SWIgveC/ogo6FM28JJDmOdUPKBU3eznAsB7UTjbbxJQCJ7JhkPI6V+b7LRRbkYDD6RXtrEqxUCL7jCA5zWufsgH/NM/H4eZsh9EMxZVFK5IwXuOUnuIPH7ULPOfDCZUJCSfWDoLcmOKNe9HKxBSPS9sJPblnuZHgtlW6mmJbZ/0iwa7B9EL7r+WBR3pWHyaJZnF7w7KXE1wAIY7rc369EeA1tSWuyhEh5DgHZOe+OGBxTJ/f+115ZQ69n31ArBdGCLDLqpcT0RXpg/jSbMf1eoLXBLwdwOM9uX2ycKebW86QtQkxb1kwo3cGRssL1BPd1F7wGe+xKTePi9LEcGvQUdKRVLLjcj3A/xfwpvmA7DuENGcTMN+u4Jye147AIq7vDNp0be0bMsHAH1luGMENXnM0tRD4sWnAm75arI9ykG9bnkWgvzllR1QVvLj+zkkEfNMGoiH21L5omWcXC9Ocwi9bBkpwWQpxIj3nv1r+zObZr7KeU7ihFxAlcLXqzEFKNiifk7xvXNVWwlHjSW5Jp9iIPGuj6LcgaLDRV8wS4GIbgaucevttjUdQO6dyTKGY8QIPCU7z+oNW/bfZQ4TarKWZtiCGrazlY7HVVwXgNKv6iJVR4co9uZbXxpo9JrK+PBT97xcg28bUboiQh36HWU3TSgYtMoJbFI7qndpMsz30dnyK6yFdIBCD6aD/S1WQZmsSZHQj4gQrulsJSvAPn98hJ92SlMB2fW/LNAywixq0GgCwW/qTK3q/E+/BNQPzUK8TBNtCxG5rs0G/oRQfOHnSURU41Ht7Pxbyk04wC3fTcVX04ZrMAsEl6fP1ttK00qJoZZ9GISsc044dbopZqJvCO2da2//ELW8clAqXDPG4DzvFLNRN4XA8c4jnld+bY1onmYW6AcO71AaLwK9G3fdeuGpbupu76qS/9R85YfdMHMbhYQAAAABJRU5ErkJggg==");
  pstrimg("\u2AA1-60-170-170-255", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEH0lEQVRoQ+2YTUgVURSAZ1IhN0XUJoNoI6WtLKhVtSmoyCBNzWwTZUaF/WMZ5CPN0sw0LKHARWH+FgQhRYQLaRERthEhI6JFC1sULVwIOn1HZuC9cWYatfucxrlw4b37e75zzj333NG1BVb0BcarRcBht3hk4cjCIdNA5NIhM+g0nMjCkYVDpoHIpUNm0ChoRS4duXTINBC5dMgMGkXpyKUjlw6ZBiKXDplBgx2lu7qMGBJe0HVtpLBQz1Gh/Hl36VjMWJSdrTUahlYG6GKB5Pf7oiJ9U6iAu7uNpQA1UQ9RU+PhQgUM6CqAWrHmHiAdPYz+V1h4539tYUA3AnCbus0DZAhFXC0o0J+pgJU1lZ9hAtFWIBrZS4DdyjvGXAR0QBWota4yYCy6n01qqZkuEAau+0ZAicgfVYMqA8aipSxeCcgaD9DnaWlaWV6ePpos0H8OjEUvYbHzgK5wgRin/Ul6unYyN1cfs4+RqM38OuYfEc/A6lUqlDEnl5Y7NCtLu4FgxxF0iYuAY4A8oL8CCIFOKL29Rs7kpFZH43YrpjC+nihdERhgE/S+aY2EOzROyF8I3ozgMSfBsehBcX3qent/YIA7OoyMlBStGQH3UVOcQBD2O4qox5oyLqGYiqqh/xgdy13mT9JeiqLa5s3CWGMtm9+l7rDczkGYz7RdA/Sxg9tm4rY3ad9LdfQIFPWbvtbhYa0yFtMFWknxPMM9PcYWBLnFzps9dh8U1wT0pX0M83cBKhbd4DbfyyNUEDsCi6Am6LTzZQohd+gAIOcA/WAXjKtJAk45/RkeQg+xRhWu+1QFmNuaCcAIWoyQ4nqrXSYIaE9qqnY5P1//Ej/GPJ+PaMu3Xj0Oa0wlG7THAH2bTFBrrwRgM3I20LnSwwX7ALpiz476+43U0VHtBX1yvTgGNNoFuBM3rywu1r/OO7AlAC6dh2CSFkqwciuDwJ2257+mpWvpO8pEx0hsLpi0/DkewE/QusME18QfxXyiv9LpLJr5dIx+t1ggsoxQq52iuwoP8JVp+XzafQO+BvCHdkHJptZNTGj1WH23m7tLtKavgfmiYGXFF7C1u5/HO2N/UBuxmAS/hOLT3cckg+OodKqgnhFwHLgk+vcQ7ICHxTwTib+klk1Y+mxggC1BzA9wLcAf9riKxulvkwDn8XioZk35pDMV3QOTS7tp3AS/jqAnPF5NU1cS7+AzTu9g6+XF/FNylgP5PHRSgJllybdlt3exwbw+HiHl9uRFhQvb15zVGfYjmM8vH67pqZ89ZjNGGbAljN8khvHygeD1bCBmMkc5cBy4vLxmncTMBMprbNKA4640P9+n5V0dvG9ac9G6VxIT+GtpjuDTkphQA9uTGP6XAtwSyExrLpb1mtvebiwrKdF/qlg/6UFLBcRM1vwDiu2WTCmKf6EAAAAASUVORK5CYII=");
  pstrimg("\u2AA1-60-0-170-255", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEFElEQVRoQ+2YTUgVURTHz7Xa5CoXgbYJCSIoiBa1kgysrSE9LbEwcBNFfuVXpb7sVWalUZbQRoge2TxbRG4qXJQ7g4qIIIhataighdAHpp7+941j6sy9jT6vvsZ5MKBz5945v3POPfd/RtAy+4llxkshcNAjHkY4jHDAPBCmdMAC6sIJIxxGOGAeCFM6YAENi1aY0mFKB8wDYUoHLKBhlQ5TOkzpgHkgTOmABTTNq7TFR4ipHV/LX1OxyDPh/KVPaWZBCToJ0CaAZk5CDgK4IFjAD3k1/aAzgKoE6KpZcAECtjgL0ewE4EGAZnhGkamPSsSB/zvCFm8AwGVchRqQYTjhBEXEkAlYuab5PWzxFrznGq58DcQTmqAa2i/emAJ11jUHnOB8pG4XXrRVAcG434+rAQXqo2lQc8AJLkS0LiB3Nin25wTGemkUES0TI4sFuvDACT4M0BhgchSgv3C/G+OnENFR1zN21W5KRjyDqrCPb5pwRmopLc/QfkSKcY4SZSlAZRQv0lrqoF1izPXMfc6lMWQE0b6pqm0XrivpAyxBLWpLRsN9hjp2fsUfrYhmj6fhFu/G/Riu7a7xtAGO8xpamdyfFTByhSICH5JpGxF9rnFbVR1POoooWzF/HPP3Yv7A0kX4LucArxOpG1GKBYL+ZaqHYHjkkbbZSFupqso1GfEN82NUTFdJCFnBjfz0e7iPN6OAyL20R/P2IRSrWpyhz13PWCzTtQPXTs18dUYYQPYGtg2VYmGH4p2MaAwgWjXYo+89QMtxrxlXrsbmYYzVY/5TA1zKJWcC3+MCQHTj6Y0a0B4aR8EqFZ9nPGPvzy44omJa1zN7GUdsRAH6djFBnXfNBJaVk+kWDF6vNIbpDsZbXOooyhmQGnGMRTBXVdBkZnSjN4pRkfiy9MCOBQnOw75E8aBtGvBnMP6oS//aR1YV5tZhrqoSy2UfT+594/p5OoOfonUdE/I10XiJsWrPvWjr6XZNLZDLvsIzjZ7V3UAK+FNa/lq7d4hqA87PBx5FbB2gzmG8TJPuslq3YH7cAOfUkv6Ancf9NO9En2B4MwzvdRnuJ92ZRnAUFmH+oAnwuQE7Fkih/5PO499jmojphYQtLc96pjtDqZUIuf6C/+YH7JhhH0VRpGut8ihikl3SJTQPbcrmYRxrEJVOOS9ttLTK33bXVAlwKTZUXdMExm7Qbzrt2Qf/7bxa4bzG9GwPvRxgcflkgVL1xfIDQBzaus4lXhY8gd0LppbSOgP/9eWD4BadPDUEbw7YMdi/iKmGiHlhiHOex1Iq1tid1/xFTCrvnjbXfIRnG+pHxAhI1rT8ppWK13UiJu2PpVTAvURMoIHdIkZ+qo2mp9JKJbK6ubc5kw6J7yaWX/yiZYJiDmv+AQEcOExMKPFPAAAAAElFTkSuQmCC");
  pstrimg("\u2AA1-60-120-120-120", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAERUlEQVRoQ+2YTWgTQRiGu2ltU6og6qWeVDx4kCKoeBEULxX0ICr+0pMVrLWUpEk2aa2mtvlpUtu0CHqRepAiRtCDl+JBwZ+D4sHepNBaBPVS0ENtCk3iO2UWks3sdBM76XY7gSVhZ3b2e+b95pt3olSss4+yzngrJLDdFZcKS4VtNgMypW0maAGOVFgqbLMZkCltM0Fl0ZIpLVPaZjMgU9pmgsoqLVNaprTNZkCmtM0EtXaV9vl8ZxVFuY8o3/f3958SMflWSGnF7/dfyWazccBuJpD4/RTA520F3NbWVlNXV3cDcCGA1uTC2QoYabsJgDdxeQDpMFBxJBqNtq9phQG63eFw9ACi2QgEyo5XVlb6wuHwhAhYMqbwNezxeHZWVVXF8a4zHNAnUDwAVb+JAtXGFQbs9Xr3Qa0hvOgoCwJqZklFTqfTvfF4/JdoUGHAqqoeBsgAXnDIACID1mhtbW0oGAz+LRfoigMHAoGTACGK7jZQdA4TcdvpdA4DdFHfh1btqxhjAP2akN5JEZPxvymtQNHLCDCG4OoNApzNZDLq9PT0o2Qymdb36ezsrEdad2GMFq1qA7oJ+/BjKwETs9BK1cjbQ3OC/A5QdywWe8YKHFX7ACD7cDXq2y0DjFTcOD8/70WAAQS6wUCBCYB6APqK0U4m6gLu9+HaZfD8IoCPQOEPq6Yw1udWBBFEANe1tGME85aCftS3uVyuLdXV1S7c9+pdVU7fn6Qda3cM31kRsGRM7hqGGjuo9btkFADaX+DyQ9Gv+j6YqD2YBGIdT3MAeBmx4txMYBIorbjHWW+ke+goYLoB+kPfB4XsBCDDuN/AmahxtKlI3S8rTsUZMA8Yiu5HX3I8O2gEivvBhYWFkUQi8VvXh6xPPybDp5169GNoZgOGJBYKhWbKCaq9Kw+YVE743VE07uUEcxfbyIDeHaGgOVKp1BCgWowKGgXuxvc9KPtn1YG1ALA3NiBdiYk4xgnqOdrcDP9LlCZr/g4uo0pMzrxjmJiucvjnXIZlixY6E5vIM/6v0e5irUXqpyNoZ9YCGsgbYkxQCwqqu4gMMOW0zBztENwnqOYG+Dt9oB0dHdtwYiL7t4u3f5P1j+dJMRP2MQWsvd3M4R1BT6IOuCORyEtG1GbSfRbPNSLVP4ugLgpYC4AafTfgejiKcY0ELZC9rHRHijcjxR9aBjgnEKJYCzUnS3/A6T9om8M9dWpq6gHn8OBGn3Zt8izjpTkzTk5NF+k52OjUlMHzt3A8HDI4By+dvNBnGONcs+rxsGAOqMtKoIF5LsZ98gfAIMxLiGFeRGRx3pglrWEzUS33z8dy9tTMO0rpIwxYC8asiYF7U+HeJkuBKOYZ4cBaMOTkhd8lm5hioHh9ywasBWHSxJxbM0XLrBI8E7MWtiWznAX9WCbG1sAMEzMI4FarOq2SleU9CGPixJUSMXjZi5YIiGLG/AehF/BMvz1vRQAAAABJRU5ErkJggg==");
  pstrimg("\u2AA1-60-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEvUlEQVRoQ+1YS2hcVRj+z8mUKI0zE+um4qJKmxlRilDFjaC4qaALUfFREQQrmGYmk4x5tNRqahuVNjaZmWilIO1CilhBF26CCwUfC6WLduPcBEqk0MeidObayOQx5/e7UwfTuY+5zuSmk9s7kE3uOef+3/995zvfuYJusZ+4xfBSANjvjAcMBwz7rAOBpH1GqAlOwHDAsM86EEjaZ4QGphVIOpC0zzoQSNpnhAYuHUg6kLTPOhBI2meEtrZLx5KFF/Cl/CgR/6JlO5/1ovktIGkWXb3FN1DIYfxFDZBM9JWWjb7kK8Cbk9weokKCSYwKQe3LwfkKcGyI76BS8R0AHACj0opFZs5quc7UmmY4lpi7m+TifoDcaQeEmaZIhoa0TMdZL8Aaa3q+h2OJwr1C0mG863kHEF+S5D35ic5Zr4BW1/UM8Ja+qw+1lcU4WvqEtWzhTXDk+aXQgdlPOy55DdQzwF0p/THJagwveNQSKJGCdD+6Nh8ZvXBM/L1aQFcccDylP0NKGYxutgbBc+D0vfyGaIZGxFLtmOuurb/JxGMY95o2GT3lRTOalDSLWEJ/VUh1CHaw0bJApitgdFi7HDlBp0S5dsz9fXMbWS3shb67q67NSgBw5IsWAswintR7DDZqz9BqkThazqMJaS0X/dqqcJjZw1DDQczfXvu8ZQA/sIs7ym2FQQDZg2LXWe9RPquEGJjJRL83P6806mUWfBBs3mfDIOQuH89nw7/eNIbjPfoGkuURFmKXQ1j4iUkOTOciv9UWek9/8c71S6ofjRq0UwQC5UVmOajlwicxDmHLm5/jHo73Xd0EeY1i0A6712N/fktS7tYyYa12TFdCj0uhRqGG52znk5MiVh60JWCjUBjROB4+ZXuGEh0nXrdPm1x/oXbMlmTxaQD9QJDY6tCoKabQ8HSu48zKw7Jf8QbA8d7CNmjpKP75iB1QuOnIQpvKzk50Fm4cg/3ZW9yN+UPVW4/JjOByRtiQ5fZDf3xy+5+rCdTyHDacU0g+jj30oG0xTB+XyqExUzoaYRm7UoAqRLetoV0HvG+xFJk8d0wUbzrgagGx1LWtpJbGYTBPOhT1DfJv2px/cTYn9R3wnfcdnNi4855Ec/euRn5ejqGuaZESRky0Df4o/AfmUL/VXjTytFTiQzsvqBTC9KMigb1sdncvFOAqabm62hH9zkKmpzPhn01u/bZ+l1hUgzhs+p3Ob6HkUH4yMuUFUMs9XO9Fbi7vWGOGADyfCX9nXs+F3BFF0ZTt+Wz0dL16GnnuiuHahStBXxTTkON+O8bqBYlKtJR0wErurGgnLg+fNwKo3pyGAP+3KD7AJfRumI8RTiof4CxYnVMkh6cvhj+zuzwotZiG3FPV5rVMlrbvnnEG66/gqguDs741wdwU5r/7Vykybn0Prt68OAOG32rR66G5BUbKaiOesLsX/wv8yDxUYQ4v9QTZ/PMmJW1fQN0vH0YIcYinzUOzXsEzwNXXuQ0xCziLz2UjM14BbehYaqYY4+bVTIhp5t3L53rOcG2hrkKMohfXjGm5ZcIpxKyBY8ktTPM4qxDja8CmECP4CPy7p0WTVuPMOs3c9DrfNntClLxYfdVNywsQ/2fNfwAlbehMM/mV+QAAAABJRU5ErkJggg==");
  pstrimg("S-20-170-200-170", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACB0lEQVQ4T7VTS0gbURS9b0ZiMGC7ULRauhAKNYqgaIyuXHbbWN9UArq0FLoRF26EgAuXLkRcacAugi8KrtwGpJgYSpAaB6FQKZUgBHGjBSOZ55k4aoqTmQg68Mhn7jn3vHPPZfTED3tiPnp+QpEWzcxgn6SUDZLJS8bYGU5mJDCyU81t7hSKHdFKCm0C1GsHlCSvGLFM0VMMjfaM5iqRlwhFRjTSJf2FAbV3hZLOoZCBxFcGllKRQ1pA23YmTIoNkIWsou+qqo4P9w3/Nn/HMrEWtaCOkaTPqHnjShiREcW/6z8G9hVAf/Sg3hZhEcNOwVpqbcbwGMuOV04kEjV5bz6H7o0gzFM9veYdvFDNAOxqSh6icxJeBa2CX7BuuuArJMJd4bPHEt8MJS3ek0Fb+PpfLjHZC6g+wr9pprAFHuB7bg3uY7MrPgAcBeCFAyjOg5w7kT7YlHgyHjKYMQgLugH04zSVK0fg57UBbdIxNk4dzRS0p9oXsS0TFvEeVJrNbJ+qdtmK1ikYXuIcgLCzIqFVfIgBfNOC2qxdYfQo6q07qTN32ov3zgrLgw1/cgCtKqTEsv3ZrEmO0IcxrDlMurXUTNISH+Bf3BTeXsctFT/1fr270iaZ4JscpsRHfEzhmGZ7bFj/QdkKlH116/hgKOs/1t8Vr4pvFab4YAGsJZ0P8n03otv31/KEvRU9PPQmAAAAAElFTkSuQmCC");
  pstrimg("O-21-170-200-170", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAACWUlEQVQ4T71UPWgUQRidmd3zByWVFkfAFGnMXiWE2ztNCgVFLGN2llgIIhaiEBQCphAunQoSSEQsgoXYZO6ClYg2h825qxgQNQQsFJEoJ6k8BOPdfr5dN4t3t7tJirjN7s68ed9735sZzrbh4dvAyf4vqXqv9oqGOMg8pnnk/ZSH5dvNuupSqhw1zohdgYe+f0mI0W/8v9Z07dzo4OhyWoGItEQlYbjGc4CHNlBEnPEJq2DdTsJFpPPO/GOAT0VAYk+gdloIsUJEQ+TRdfz3hvOE79PSlI/iiAPSilsZ9DzPAVCDTQ9DF+yCfb9zQVthYp9lUba1aB0fkKKPz/A67n9D1bRdtK/GKQha5BgfUfxAAGV0FsUfdmJ5CPwG4H4E9EsXeu+IObKa1C/lqgngbgUCON20TftaF2m1WtXru+tf0c99UPkKKvNpQS0sLvQ115ofgM9A6VMoPdlFCusGKr+BUn0zpJWXlZzX8ny8loTnWyVVNZVngrlh/2OdcZycHfSDvsNODxTXkOiRLdivwv6x+KBc4wsmsiBtsB6WlTnZSAnqPHBzqUGFW8rB2wyJJmVB3kgkddQ7zOVC++MIdqZLqT9Qdson/CTDyTUu+FErb9U6weqFmkVAl4NxYvWlwlK2xEv+YWl7omOKBYtYcCicRbB0JyMyU/6e9U9ci1qz6HthfTX26EXs0XtxjiLSYL/uqi9zzvvTgvorku4ioEtJuLarzz9dA+7AHCd+Bqp3di6C+hVcMJOWaT1IK5x485fd8jBupn7Y3COYWG1S0xkrjn3ayIU//wefZA0lt/5qgQAAAABJRU5ErkJggg==");
  pstrimg("\u29BB-49-240-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAExUlEQVRoQ+2YS2gWVxTHT6IBaX1i8UG1gihU3ahpfSBJkErVheLCQBDcdFHdRFJMpBDsokoVX5FWEcVGdOELQUEEFyJGJEJtaqshRnFlFz5A2lSx0cbH74Q74c733Zn58s2NFZkLwzdzv3v+5/zPufecM1Mi78EoeQ84SEbiXYliFoksEh49kG0nj85MBZVFIpX7PApnkfDozFRQWSRSuc+jcBYJj85MBZVFIpX7PArnReIfkdGvRb4cLnKcP7kNj79FJjO/hD8WcX3O/Th+H+gq7m9zf2WQyIVhIr/w/CJXHvyPVBb8Ey78YriFSPwlMhKQP5j8hOu7ESKbAtAukTko383z/AIV9YBRh7EH+X2uMga/g+fxYNWPEtlZIFbssj4SgJZg6FFW11gSDRA5wPx25r4uUmE3csu42tDxuzrIwinHa78VidsnFhmJBODmUpFDGNWBp9khMlgvbnRrVXH/A9eYBIy1ENifloDZxmEYjBiG51uYneVQcKhMpPFDkftxyjWqT/D+S5EjeIlghgdz65j8yQcBJwmdhMQ8DLlqK+H5Pp77uD+H8ZnIRE72PQfOBHBeDRgJjC2FRCsK5jqUNEJEt0riAGcoOJddEWUrVrANrySCFLggL8WSQVYweTpGPpGIIXAdjCkROHfYTjPQ01OgnbHLQiRQXob3OizlG1C2l9pwKyerNBCRHS5kFwE9A3j+MDj3gjNCNJYzd9Y7CQ5jFYfxkgJjTBeGTkJpl10/LKV5RFwE7HoATh14TQbDWzRyU+yPTNQaJRsgofWhdyQRSSKgGFqtOc1/cjtEn4nGNKLRmTYadrHTrXQDwE+5ukmlk3NTqYuIehqy+5BtM7K9Nrkqsimo2/i73hhejewpnyS0PtwFcAzKngKuaZCp8IiISGhRXEuB/Ffg/qwCua1NsWTsSHzAwbtr+poWSHzBPUckf8QRgcB6eqJdUQah4zP+u2ZIbCRxbC7W+EDOSUKVAD4/ioQKE6KpGHwnx4BOkzojCxnJYwaeaf/fSZjWRBu3vDqQFAmiOBPnaA3R7eQ9EqEzgY6JbAuiHx5KgMn2nLrxzpyJULuBsbMh0euxYEQQaIBQM/vnuk0s6nDjgG/B22Iw/WYnBUWB1oUg/Z1kf9cEDV8Egb4WxH7hsUiHXnzMNuzNgLqGN8DpvAHe8nawzWENda9BMUoiEBjhImK33SSD1WAdMesf46Tx/P+fVxKODvYEc2tRpCnRPsSRTWAEkVrtnYI6ZIxeQxo/kJaASRBhGFJgJSmwJQY8sYvVjw1g3NSa48Kx+7IBIWFag5OAr3QoSCQQyMQRgdwqttIxHwSckdBJojENT2pLbo9HZg8X/EYWgaNnYWxcIe0vuVAXq8K6p5m8yG3eOzZROkdGqU/qPDWaRGIxbPXb1dt9xy6kuTNeOs9vM9evWPiYX/1IVobhYyFQxX3i1w47a/XX87nr7d7J9d2pESN3YNxWjPumSGU9yFbzTaeVd1H97mQf9oH57mSl09AhNo2bFsOlhZLB+O9Z2xS0L3b61ZcvHLSnUKy4dc4zgcBCcviZoFrbAP/yBY+9U4mBC5gv57fPs6x/yPNViuQ5zs1lnvlqEx4ma1VA7IwPApHZyRf428J5A/T7dEFmoYFbAAAAAElFTkSuQmCC");
  pstrimg("\u25C9-29-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAE0klEQVRIS81Wa2gcVRS+Z3brpmmSmVSNEdG2MWbTprRWhIKKLRZKrWKDpv5SiQi+kl1NtbVQtMFnY8F0H61YREtREGJqKNSCVSqaP5JfNqA7mxhjrTFimsxsQrOJO3P87uzObtK8U6QuJMPMved+53znnO9cElfhR1cBU/z/Qf17uNAaTVR5iG4gYV9gIW4Vthj4x+Pr7gktPT9f1uYRKZM/aNQSi5cF0ZoZD2ZxkUk068vVJtFIqdkcmBX0toD5gCL4cyKRxywYzzb8bxHEcWFzoWDPmK3YaxUhapCorRII0dvM9GQ8oh6fCXh60EZW/IPmZ1jcmQFrSiTVN/qO0qWZDpLUi1HzVTi22wFnPqlfqz0yXdRTQXeyx19qdsF4FYL7w2La1B3RfpkIVvFS4jp7HDvw644UDAiE7q6vrhtdAQK+xftK/HUlE+q63mOUnGh/GShTZcA4i9xtgqffw9P7XE/9L4ysE5xqgvFWGIHR9E8ygcdZVpT98VBRe+Yr+QNGGxE9JIFjy9U1EyOeBIqCeRYf3sc57fqf2mbRQhaOlY4cgyNPzFWd0lFLaA92Rygh7XDedyToHjh2UI9oe1z7LGjZ06wu8Zn9+OBJerik91CxsbKW83yF5k+S6rkAs5ELHh5TxC3SvjwwfL1HWOdh72V7yQo9uqxP7suCwqsP8fKUbfOueLS4OROhQ/V8AXOUc6fer22QTPkDZpCIQ1g7Ggtrz+RAUTyVpSaanfNBTwnoGasImtvRLqcWCujut22qi0fVI6h/j/9GE8WG8kpoJbKonEgrGi7dpKTGf2XiA3q4+DWBlqm8aOrgoXyxoMjv7yjEMllAlcGhKHr3eVZoYzykdqRBg8YWlOPXWHhMj6ifZvL7F3LhWzSoFAlbqYpHi2L+oLmNBJ92z3dAUd67EdUBspTVscNFcX994m5S7Ez5LxYWhNr0uB5VP8kyKcRHqGLZIQANGgfx2KVYvrKfDy/9zY188XCZbs2AuswhsJN6WHs0TW/AeAtU7nVBXTr+W1DkFEJ2hti7PhYt6PTXG3eSIjquBFQKP9ne29PnpdPl0j2pkCBo+2IR7W23zLGoXQFwKpny3tx7pKAf6duHs94EvTWxkNbqgJYHuMhLRh/kqsdtalnm0I66xYI6UyZSvMMRmaBxTqriiJdKLzSrg1lFwsIJgFZDuO+Vwi0d8QhTtk3eQoEltdn6cKkVokMPqxvlRMrJYCaP8DArYRX15v2Kwl8uGJS5AVEeckRm0PgRQGstDPmukHZmkvamW2eoDVNhR05/hagMDNVCfz+eD7Az8IV4DnXxQbr/h17EeGtG5Nkop4Dmckv5tuCarkjxCbnJGczKGMab2DwTOPDOYeA/7A78ivqhakWhL7A/RZavXPa/azvl5iDbBSP6Bzmobab9uOu87m6WyiJS49uR5ztQIMvQZgwWYsJSWqWSZffVG3sVRbzjvGcqdqKz096RpCJh4SsJLHPMXqqON2s9c1EMh1fBoVYAbXAuaLhlxMPaN5fbTX8xkyqFqCg1dgo5WS+NkK/TOOS98WG1feKdp6qRr7EGjLswQV7BYdvSe7nTEt4t3ZHCv6dzdEbQHFWygu13ZQW63+BAEtGMEHM+6M3PfsdFDjrUoEe1ltlY+RfyF2A8mL240wAAAABJRU5ErkJggg==");
  pstrimg("zm-15-200-200-200", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAPCAYAAADzun+cAAABqElEQVRIS+2TTyiDcRjH94Z6t/VmtOTkolzm5LKtJY2LCycuXBTJQcrVUP4d3cRBkhO1HFxFI2lbkavbWw40pRTZi7XX59Fv9RbNezC7WD09+31/z/N8fr/n97yap0o/rUpczz/4zzqvZbPZadu2E5hVomqa9s5/A23NsqxlXdfPWTeiX+D7MD97T/gEWhN+EgugFVgnI5HI0E83EPBMsVhcJPCNJFsl+MRTaAPwlNfrvWMZVNorcQWBO4oTaj+iN0iaHAT4ejn4l+HKZDIHJPRjZj6fb5NkbnxL0SDFd6PR6HAqlapFu0ZrRbvi4L2xWOye3CThA2g7xI24BpMoN5/DXijaHg6HTQURsM8wjOZQKPQsBYk9xsXRu4g7U9oCfh7wFuAxV2AKxUk4pFANCaO0alsSHWA/ey1AHhTkFN+JDRK7r7Ql/KxrsGmaei6Xk3cMYJsUGi+dtqLgdDp9yW06gJ0AjTtbVDEwLZaWfg6CDApOPiXOodWx3mOqV9VU+3611dz2iII93w2CvBXgCcA37Nc7wSqv2/nG8mmSs+L6jctNX6X2PgDupPwQ1IdWLAAAAABJRU5ErkJggg==");
  pstrimg("spd-15-200-200-200-2", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAPCAYAAABwfkanAAACt0lEQVRIS7WVTWgTURCA3WSVxJII0lPBSkQoGg8WE5IYLzkUBKEoelAP9aCIiJdKVbRCRTFoRUFRitSeetGDghd70iDF/DQHEX+IQo30YEkEK0RMxGziN/A2rKHSQncDw7yf2ZnvzZs30VY5+MvlcoONRmNU07Tb0Wh0yK5Qml2OFvMD9LVms3kOmYjFYsfsiuUodDabPQ9o0hFonO/H+SiygQBykApXWjAMY6+u6x1c8TTzInsGeif7qxmXGR/k2lNmBsnsBdYHmXeia+wbjDtsh06n05tdLtd7nK9B5pHfSDfiQg6xNw/8cwDcCu4Heq2y/8VeIB6PlzOZzGlsbooNkAuimK9Xc3vLg2DXcX6WQDPUXUSCpFIp3ePxPAL4Mus6kmO5igxjc6dYLHpKpdIndTPJWq02gv0sfuSwk2R/QPxwgzdQQ7ZnGscncXwP+YM8I/CU2+2eCoVCcyrwDoFm/S0wvZZSaD0y9sbUwb77/f5NwWDwp/r2Cvqi7dCSVa/X+w7nPSaQ0lmfz9dXqVR6FHQB6G2mDTc0BuwJATKh2w9GQpyBtmTuCA+uj8DbWduKaAAlmT9ZDNrazriZSVX35Wq12p1IJOril4Nd4vsR2zNN8H3ABqjVW5YsPiDYUebjyP12aHU7n1VNX6X2J7ApyEE5QCQcDr9W5fEU3W87NFcore4MjucAfclYOsNupU+hcwrahZ5l/kXdhrS1bzzCLsksfqbZ2yWtDv0K2YJdl8DbDk2mB8j0XQL4LDXdZPyQGj4MjDzELPu6teblkGS4PxKJvJF11VE+MAwoO0yaC6rtjePruPX7lYxb/4jAxwiyUSKRvcdmXSroVvfAbg+wX80SaA+O/QFA17H+ggMVVwL3v2+X/Bu3QP/TPZyAWa7PJaHz+XxvvV6fIXsfrS1vuQGcsPsLRY6oH5COeiUAAAAASUVORK5CYII=");
  pstrimg("clr-16-200-200-200", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAQCAYAAABQrvyxAAAByElEQVRIS+2Uv0sCYRjHPenAQ7SlhjAEt+BoCITTHGxutaWIIGgIgoiIggiEIqg9rIYK6m9oCUJo8E6RqLGhpaCgqAab4tQ+r9yFmIWDnB108PD+uPfe5/u554fkcfkjuVy/pyUAwzBSgC5gh7FY7OgvQbcEoOv6tiRJywg/AWDKdQBEYAPRa9Vq9SAej8/8A7TxD3ylEGmySJoscXefuJ+//cb6IhAITJZKpZX6CGSz2S6fz3cpznm93jRnVzHx3WswGBxWVfW9jRp/vaoGgPhdxM5awp8ZP1iHBAc2gamNAIqiPLLXU387EGalUgklEoknxwCKxWK3aZrCoYyAHXJ8XjjP5XKDQOwxTTMmm0Tggf1evrklCuu8v8b6NU07dUq88CPl83kR/k3m93SYcDPnjUVspZAA8GNhRL84Kbrel2SLY/MKgCHXARCBLSIgivQGgAHXARQKhWS5XD4nFcQzTToc2xBEZ5+9DIBjP9RA51NIiEWowaBZXSfPaGIinfzYOPatC9FGazUAfMTJrtOYIbU2KoqStnjGdEQUtn3I6jApOwLsZ0izObuIWfvoQJGOFnE9kSVslD1FlmU9Go3edaq7tOr3E9qc8RGk1VQGAAAAAElFTkSuQmCC");
  pstrimg("\u25C7-91-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFsAAABbCAYAAAAcNvmZAAADRElEQVR4Xu3aP08UQRgG8LmACQTwoDEWNnR0+gH8CJpo7CwsLS1MbLC2oTEmdJbG1ljYW1ljYmJjZ2NiYo4TQnMFvkuELMvc/pl957nZeR8SAsfdzTP747nd2dsbOX7BBEawJAY5YgNLQGxiAwWAUWw2sYECwCg2m9hAAWAUm01soAAwis0mNlAAGMVmExsoAIxis4kNFABGsdnEBgoAo9hsYgMFgFFsNrGBAsAoNpvYQAFgFJtNbKAAMIrNJjZQABjFZhMbKACMYrOJDRQARrHZxAYKAKPY7FyxDw/d+9NTt7a15R4AtzGZKFizC2jZ6sfFlgv4JwG/n4wCaCIQ7DL0+XZZBI+O7YO2Ch4Vuw7aIng07DbQ1sCjYM+Dlv30/mjkpoL8snpMsrAPV8euafTbzU33tECWx+zJjxfWwFWx20CfA1sEV8PuAm0VXAU7BLoJXO7/KLudh6DzDUhMb+w+0NbAe2FrQFsCD8bWhLYCHoQdA9oCeGfsmNC5g3fCRkDnDN4aGwndAvyDLAsfQdZriiGtsBcBnSN4I/YioXMDr8VOATon8LnYKUHnAu7FThE6B/Ar2ClDDx38EvYQoIcMfoEt0LuyIa88V0/eyWc8niguN9WGmkzcG7nM9qw6oPzt9XjsnqsFKQ10gX187G7PZu6LTHStPLZcG/y1vOzubGy430qZKsPIvFamU/ddBtuuzPdEbt+TgnxWCVIcpLob2ZaN+FYFl7zJ0pLbSQW8gJZX4g+Z5y0P9F2BPlA0UhvKd4BMGnyo0MV/bN7SL0nwIUPPxS7ukJdpUuBDh67FTgk8B+hG7BTAc4Fuhb1I8JygW2OXwL/Kcut6ZS0UZVmYG3QnbCR4jtCdsRHguUIHYccEzxk6GDsGeO7QvbA1wS1A98bWALcCrYLdB9wStBp2CLg1aFXsEviBnPiM6058LEKrY7cBX193f4f4xn+lPEE3Gz8RFTLq/7dnfQ3/I+PN5PtmeVxpenEpK9krLCEGvudEwW5o+KV5WIGOshspS9Y0/OxhlqCjY9c13Bo0BNsHbhEahl0Gl9+vWTgYQg+QvrCjI3dDPvCzsrrqfmod4Yc0TrTVyJAQUHMlNkpacogNxP4Hiq81eqQ4QH8AAAAASUVORK5CYII=");
  pstrimg("\u25C8-62-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAA+CAYAAABzwahEAAADMUlEQVRoQ+3ZPWsUQRgH8DliEYS8lYoWWsQmmJdCLSxEKxG/iGkCKkIQKxMQTDo/h2ChjSAiKBYaQQ4xYj5AmrxwXZTNf47bMDuZ2Z33Z2A3EI7dm73d3/xnn52567GW/vVa6mYdvG3Jd4l3ibekB7qh3pKgT5hd4l3iLemBZEO9KNiZgwO2Mj3NXubQt8ng+/vsO8CL6ICPMzPsFjU+CbxEl9gc8NHhMjoXfFS4Dp0DPhpcgf49NcWuY/+vXo+do8ZHgWvQcwD/w/09jvd3qPHB4XVoIWVyfFC4CToXfDC4DVrC/8Gwv5D6ng8CN0HzmdvhIXsxOcme8HudGu8NB/obEEvCTIxX72EhE3B8urqN7Uv438K0VWzPRgUvafJecAd02RfkeGe4jEZqfSS5UJO0PD0nxTvBVWgsPOZE2Wg1Vg5v3ZpEh99GB16MWfCs4QHRTcM+Kt4Kbojmk5PKRRssQZMnbwwH5isA14Th11cMbxc0SfJG8ATo5PhGuAL9E0lflQqZT9Km1T7oPV8LJ0AnS14LJ0QnwSvhGaCj40/BM0JHxVfgQH/B2W4I1eYHpqGLikJWWVAYPKd9mwR/zp/A9/bYJ0wTb2aILi9JGQJWfX00uGw7vR3CkfQqXtYE9P+xMXZ+YoLtilGh3Vts3/WNz/V4BLOJJe9D6ZruYPu9sK9Au3to967uPGLib3DAfaHxDg6ex76B0Jt8Xc17eNb14j2O+4Db7rZ4/GDA5o+O2Gdc49nR/gKvm2j3qOk8lXscw12FvyIvNZH8FvZVVmNNJ/J8PyiaX8upqp4hPjhaCec7M8JHQWvhmeCjoWvhxPio6EY4Ed4UvYHq/di1aDYuSxPjk6CNEi97NEHBS4a2gpsmz9s1/S6uGJ5J0dbwSPjkaCd4YDwJ2hkeCE+G9oJ74k3R63hkPXV9ZNUdZ/Q4q/sAk2ovFTxytHfiNo863hZL2mUsdV+JHalZWkZLujy3d+K2+BzQwRJ3wVMlHTxxGzw1OnjiDfjh11gqNH5Lf46fpZ7FqN66zwx2j8snUFT7v2jzAMjX4ndkFOhoidckL/ZPQYWODtdMcvhuUjS/gGNOsv9d1wVnUAAAAABJRU5ErkJggg==");
  pstrimg("\u25C6-83-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFMAAABTCAYAAADjsjsAAAACPElEQVR4Xu3ZMU4DMRCFYa9IQZMoOQIHQOJGNNQUtPR0CHEFDkXBBZCQUJQTBG+BlCLarL2/7Rnrud59nv30tpoh6GACA5akoCBMsATCFCYoAEapmcIEBcAoNVOYoAAYpWYKExQAo9RMYYICYJSaKUxQAIxSM4UJCoBRaqYwQQEwSs0UJigARqmZwgQFwCg1U5igABilZgoTFACj1ExhggJglJopTFAAjFIzhQkKgFFqpjBBATBKzRQmKABGNWnm4RDejsew3m7DA/gtzaOqY+734X0YwuP45RH0Y7cL980VoAGqYp5C/s/fE2g1zHOQvYFWwZyC7Am0OOYcyF5Ai2KmQPYAWgwzB9I7aBHMJZCeQXFMAtIrKIpJQnoExTBLQHoDRTBLQnoCXYxZA9IL6CLMmpAeQLMxW0BaB83CbAlpGTQZ0wKkVdAkTEuQFkFnY1qEtAY6C9MypCXQi5geIK2ATmJGyKe4/HqF9k21Yl7i1vO51mWn90xixmXXdVzLfsYXbloMl3pnnPd7tQp363X4SX2XeP7ibx4HXEXQL+ugI+TVVbjdbMIvAZOTcRFzDLUOagFydJqFaRnUCmQSpkVQS5DJmJZArUFmYVoAtQiZjdkS1CrkIswWoJYhF2PWBLUOiWDWAPUAiWGWBPUCiWKWAPUEiWOSoN4gi2ASoB4hi2EuAfUKWRQzB9QzZHHMFFDvkFUw54D2AFkNcwq0F8iqmOdAe4KsjnkKOi7rWu9sxnnIM3ttQV7aa9Yfg/5MYwwRhgwAAAAASUVORK5CYII=");
  pstrimg("\u29BB-34-220-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADiUlEQVRYR+2WSUhWURTHj01mJCGZOGComWVCEC4aFhVEVmS1EqKNSRCR0UZr1a6gRS0CIyJa1EKIho0JlQsjqkWJUDRQNpnNReRHA2YO/c7z3df19vR7Xxi4+C7c9+5w7rn/d87/nPNSZJy0lHGCQ5JAXE8kLZK0SLzoTHIkyZEx4cgTkdSpIpk/RdImifT3iXyfI/IFgv2Kd0HU/YCsL0Sy+0XusrCTSy6oAgCU8apjrcZVOCjSx/px3kfmijzTfR7rmTdOEJlXJPIhKgiV84BwOOWpSBOTSv/wdt7olz0RlR1A7j79jK/vVrHIMvQNRDz/p+h1iuRg8jsczHIOdzHfAdibKP+K8sGXIhm9IssZnwiRj6ViyXyRN1FBBBYxB3DFApQ/MHMuf8TlZSN9mVoSd7QhX27OTBQpLeRcIiD+AoJ7DrFYbysBxAY40xymGOAr2b/q7O0FvOpJqNlkLYCscNZrp+nrjNn58k0QpsnW7IDoQuYGyrYg00NkFRWIvEsESUDW5yINKKulf+aLcuDMTICpiWeoQhuMDYL1b2yXcuYjbuKY5NAPM49KdA+vHTWXmVQQelWE3nndxFVwTu4ZMOomxt1cft0H54HAWq91DsBaZI4ybMOdSxnzLdGaB+STSHrMu1eyALIYILfNcReMWTeWMCB8IIbssekiedkkvmgwfIu8FZn2AyAoT8e/+bC+21bgJ7vATbqHXG6BwwNcU4KOx2z38J4NSL4xWvMsYoAwzKCX4N9X9vGw6MBya7Bciy3XiZvIRQ/HAogSbRVAWs0FkHg16XHYhWbPDW0tCaxphm2HI0sYgytaC0vxZ1GyWTOoDUI5MRlrAWqArub3oskGA5/2s7SP/m9k9Ym2DaUndcylxWTIPC685s+HRYdLYOTXToHglGK8LBRq2Y1VG6LZYkgqSGiQIo0yr1VU3RO0sOjQzdGiKYzw8UAFQFQQV1RghSvWoRiWmU8UvQ9T1DlUKNsd8FuxhmbmhFpcIFik3PxvuJopy7lYsRkli8we0bSRaLqYEArbNf5PTWhxQ+4SgE5h8g4s0MtlhcyrWK8Ou3C0QjkSwCBqAKIVs86PjoXk5kzGCsz9P3F19fipvwN5/SXI4n0M9+zSyItqmcA1/r9FPZw4Bydw/9CfGwC11FcyXsHSLLpmy1zmraw3Euotpqb4BK5m7WAidUbvGsaRqOj/h9xvGK0KMk7V/jwAAAAASUVORK5CYII=");
  pstrimg("\u29BB-34-180-180-180", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADgUlEQVRYR+2XTUhUURTHnRkth4IWFkZZtigicxFEbtoIYg3zYWgwBAmRtSi0RVLUKgraCpFmhFnSos9FNOPMREiSC2kjFhWEuQosJSGk+Shpxn5nuO/15vGGeSMuXMzA5d537zn/87/n/u/HOMpWyc+xSniUlYiYV6KUkVJGCu3OkkZKGlkRjUQikc2ZTOaA0+msAvCPw+GY43vS7/f/LBTA7rgu1lAodIhAERyfEKBdAMLhcBdBL9CstQBc4jdN//VAIPBA2Q9Qn8THA8aIXRJilyUCoJNZz9LcpJxf0rcNwL02wd5hN0UJKrxfqVRqYzAYXLTp///Sg4iH4GEcy43O9C1CaMjlct3yeDwfaWfIVAP1Wewkc2b7NH2tZEmwbP9yzhECdBKgz+D9O5lMbsg3M8nk8PDwAj7rNR/aZ3w+3x3bDJShmYjM2Lwcg6z3aStgiPdg320aG8f+4LKJMLNjOD9Sa/yVAFu0tDPz+6S6wwhuJKGW7wfjW0VyiN7n9XpjxZDRxQqRzwTfBWja7XZXsyT7+Y5SXIqcTsZEIkPgNuzG2dIz2FaA8Qni9UUTGR0dLY/H47OAVQHyEJDjAkLAVqpnGhnag5R5yiVFLksCTbxQ9iPYNoER57sanKRdMtmMRKPROmbzXpYCoKsAX9MALMhkhwiWQ0IRyYpdssr3Hoh8KYpILBbbkU6npwBwAdSA2CaMAHLYGZdJxsgEMsjVAct7iqG7whP7RiY0tiwikhHIHGUmz40AeXZHP4Q7jXYQkbOlfyWIVABygwDntQCA99LuyjOznK2N7TnsbopGKisra5qbmxeKyoiINZFIfMNJjvjvpLRGTlAjCdEEp6uf+i96ihkFrJ0z2E/iv2/ZYlVCiwDuVUI8QV3P90UrYVoI+DbBh7B/i72D9muWt8luNsROP1m5a2oBEJXL8ug/q92hiJu3dtZH7K0EX4iU+YjvA0QXoGxDirelpeWVFZC6KEMm8iGW6kihwObxgkRw6NDeG2ZnlsgL8af0rzOM3YOIbOOifjoRQAcAtbzcyMo8Y/LQmaCdEkFS5GzZnida3osyHzvjw+gDRnVKE+3UO/m+Qsl5b1gALdEnp+kYxOTSlLNomqzslp1nNy16RtQWfoNjLyCPlfDk5dZD+7C82KjXUOShtJZ6jhKhv1u7U9i+bXxfpr+xmHtGYq2aP1j/AEdQ3DJx2zZHAAAAAElFTkSuQmCC");
  pstrimg("\u29BB-34-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADi0lEQVRYR+2WS0iUURTH52WRymQRFokbpTIIksKGInHRpqQ2Wq3atAipTeNrTIIcDSRnnISIaNEiiKgoCiIooiDQiIyIbBFREiUVQWCBoxnz6HeGO9Od69R8MxW4mA8u332c87//87r32m3z5LPPEx62AhEzEgWPFDySrToLOVLIkX+SI0NDQ2WRSGQtYEtps/F4/Ivdbn/d2dkZzraB1fVUsg4ODm5E6RHtTEdHh1cAQqHQHjbto1uTAZCl+HNat8/nuyPrwWCwH4I+Wl17e/szqyRELkEEMDubTtCtUMqXmKsC0GMRbAS5MdohhTcZDofL/X5/xKL+r0sPj9Sh9JBWpCtD6Ls4x+VynfN6ve8gF4f06lgsdoD+YVOecRSdesIm3rX8pZ0jkNmN5tWkNoAYFi77nWXiSXQmIbRY02mCxA3LDJSgSeQx85sMjwwAfCQTMDnRBYkTxtptcqwxbyK4exsW3lMxfsUGVZrbg4D7dHCdhArfB3Sq6cecTufmtra20VzI6MkqWb4eoEhxcfGSmZmZNYzFQ04FmCJjeCJKvjSgN+ZwOKSsFyA/CnGriZ6ATxAhBxwlJSVi0QoATxEKSUIb8d/K70GSDGsDyHxmfFKRS5CgfCXJRV7yS/Ls69TU1HJwf1j1SoIIYalkk3EVioNYczYJYJLRgNNIKCLJZI8SnsrW1tZPORHB1eUoTGCtE/fWEN83OoA67PQw2ZDzmHkAzi4wbqo8qWX9RV5EUHIB1IBH5IBKfZmqg816CaFflwsEAs0QvPbXRFSiHYVIvxaaY/R7M1kmOaOXNoT3gnGF+W9ut3tlS0vLdE4ekWQtLS19j1IFIG8hUi0nKCHRSUSxdguXX4S/lGaimnQyyA8zJQmeX7IKINZcYPN90qcSdvBbx4ZBZZFZHWnVhEwfuhfRe8nfwfg6xjRb9YbI6bfvMqyTEpZzQP/mVIcs/qmaMiV8NlJpRzxl3AMZPQGjAHiw7mkmILkokR8xyJ9Hfn+2jc31rERw987ke8NUJpweSNxl3q2tBSDSlTcR9ajpzgSA1R8l7vyf4PZp/hsYN0FCroE5n1lNVkjpd40cWPImkffEdnXpnWac9j4xQeXMYE7COay8UyT3Dl6plcqzQkJkUqFRJXwL5RDPvPuyqN4b8gRooq2iLaTN0hYhJ+V+mTvlePJO4UCrx2M9zDXmcs+kEbHK/H/J/QT3S9Yy1D9TpgAAAABJRU5ErkJggg==");
  pstrimg("\u29BB-34-50-50-50", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAADqElEQVRYR+2WS0hUURjHHUVNRUKyIV9RMTnZaDrOoseigsiKtFZCtLEIIiraaK3aFbSwRVBERItaCNFjU0GPhRHVImV0tDFMJpLeDyLFhNF52O8b7r2cuV31jhi4mAOHe8893/mf//m+//ed68hYIM2xQHhkpImYI5H2SNojs2VnWiNpjcyLRlwuV25BQUFxVlZWXjQajQE6np2d/dvv90dm28DuvCFWj8ezLCcnp4+FR3t7e+8KQG1trYfNW3k9aAEYnZqaupKZmXkBQu9kvq6ubjfjjsnJSXcwGPxul4TY6UQc9fX19xg3ysd4PH4YwNW8nrQDBqGzDocjiO1Nzf5VT0/PJoGys14lkuHz+UogEADQaVr8gY2OjI2NvQyFQmPMTdXU1BThqc3YXrWwH43FYp6+vr7PdkkkEZGB1+tdC/CAAjDIyTwznEw82c28T1/D+ipCNZgKiX+IANrOxzYTSBNkHlgBo4mthPCpae4U9oKTUjPECugKQN/LakJxg8cu3e2M9yJg0ZDRTCQkfC+w349BmOcqvPI1FSaqWC+y8Bj9F0Al4XB4SW5urrh4sUbOIKOSgMAfNFFF/4H9MLYl9PN4xZbQjZBqLxLrR7w3ANzM6e/I9+rq6gpS+rVOhmcTG44g1OcauQSJ/v7+TzIGQw5yCYxuMDbyLjXHVkt4xO12F+bn54ckFACvR/Fd+moLMokp3RM6CfmmiH2UwlfG3LgtFhgliJC6+QCH6IX0ikAgMKICSLFTwyRzkC4164ACWIm33jIdBmc5Xvk5JyIsKqIqVlIVP6oAVtmB53bguSeqHaGpYvxmPoiI0LYhtE59A0hsJ5uSNlQ2T0pt7UqQCusHYwPPaEoeEU8rJf4WIPtEBioJ0QSEKicmJuIIWNyfyCaaQQaNnCFkp+csVk1ohwC5psXfRbkvY/xMxmZhWgh4ZyQS6eJG/oL5IuxPoA8pB7abUdDKy8vznE6n3KISHqNZZYdMzpRNVoKfjVHSPysxbkD1j5VFo4RizcDAwDcrILko2dSvkseTB8g6qcwptVmJEB6f/r9hRkYTpczLPeRV5vagsfspscBYvWvkp8bycuPUDznpdTYdok8yXsmzmd4yzYbTXpTTETTuGk7XDnCrpol1kCqW01r8b5ixpHg1YT8E2W7N/jJeOS46t+sZNTSSwm2A3SbGwxqAA93IVd/IBlv4tpQu1bKU3gmBDrJDakziThEBkzktfDunf5sLEbtr/ovdXypr0DLYs3tLAAAAAElFTkSuQmCC");
  pstrimg("?-23-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABSElEQVRIS2NkoCFgpKHZDMPDcG5gEKkAsSIQiwIxOxB/AuIzQHyNnOCDBYsqUPMtPAZsB8olAvFLUizBZfhWoCHCQGyBZBjIcgMg/k6sBciGLwJqygXiC0D8B2qALJBeC8SmUL4lkD5BquH41GsDJa9AFYRALSPKfGKSogLQpPtQ0yKB9AqiTAYqIsbwZKC6OVADQcEDSj1EAUKGewNN2QI16R6Q1iEnQtFdwgUUKALiZqjEZyANSjkkpXdsLgd5/RSSbSAX2wPxE6LCAkkRNsOjgPJLoWqyoeH9i1SDQeqxGQ5KbquBeDMQ+wPxf3IMxmV4NFBiCRAfBmJHIP5LTcNlgIaBsvl7ID5KrsG4XE6JeSh6sYU5KJw3ADEolYB8AEqGZAF8EfoKaKIGNHioZngA0KT1QAxK16BCC1RhkAUIZX+yDIVpAgDCgTIYm44e6AAAAABJRU5ErkJggg==");
  pstrimg("?-23-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABiUlEQVRIS92VO0vDUBiGmxsxq+BSdRQchf4FEUU6iQEHEayTgRByGaJLcBCSJqNTO2gn62Zx090f4Cq46mSVIAiJ8T2SSNG0NOHUwcAhybk835fnXMJUJngxE2RX/gE8CIL5JEnq0FTDvcowjIh7n2XZnq7rZ3hPiir80tJsNmUM7o4Y/IpAq5Zl3RYJkAsH6AUQEQGnMhjqIkEQ5jRNexo3wDccA8inH0iS1FIUJSQAz/NWUHc5EOTQNM3jQvBRnaGsAXib9EH2HajZoQmvA95L4eeAb9GEXwG+ngJhxQyowH3fPwFoP4XFPM/PFp7Qn5m4rlvlOI6oqKVtCbLfNQzjdNysSb9f2x8TaAHkDUBiPK9Bx3UR8DB4F3A5ncCbKIpk27afi4Jz4fDcQcM2Sj8MwxnHcaIy4GHwCzRsYk2/iaI4rarqOzU4nC9DywbKIw6sozIHVpbM357ncN5C5D2UGGoWsCMfqGnJJhTgD6z1Jai5owaH8zY8N0jm+FEsAn5PDV4WlDfuE2+blBiN8Q7SAAAAAElFTkSuQmCC");
  pstrimg("?-23-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAYAAADgKtSgAAABl0lEQVRIS92UP0vDUBTF70tS6OziJLhKbYNbJWCb9wYVnMWpILirqCjiJupWP4AoiE5+AUVMSh10EITWOrsLbv4BsbmexNaCtqUpqYMZX9773fPOPfcJ6uEnesimfwB3y24G95hmj4eEEH1MHINlL8R0qaW0NVvYH2EtDGxxys6mILHR8jDTGwueVym1F6ZAUzgzv6JYDDfx1Qcf1qq6ro9mh7M3nRZowFmswopDg4ztjJl58AGFu8ISbNqpF0GBI2WqXCh4u82wbBe3WKjtKcqUzEYGd0vuOpRvBdYQX8F3KzK4U3JukZ6RL+NpX5pyLhI4VJ9B9XhNtadrejp0Q38qcSuuRVU6BniwERbOo5nLnar29/0afwzTAdZnvyNI7KGhK2hkPgy4FfwaP9I1jytk0IxMyPuw4KZwRK8IpWP+IGmG1m8n7OduwG2VI3bvcY4PWKb1GCV8EbAJKH/Cg5Xr5sGqi/nb9xxpuUBlBVs8ZGlSJdV5ZLbUGxrMo0BSkvIkMjim0gFUBsqJpvCWnEYG7xbU7NwnZ1GbGM0ZlIIAAAAASUVORK5CYII=");
  pstrimg("\u2A02-30-40-110-240-3", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAEYElEQVRIS+2WW4wTZRTHz5l2KYbdTssSNBqTBbHTmA1IfNgHn7xt8MEHb6iIgUVB1G3FSDRGNGRJ9sUbbQWXhOBGMYi+GaNolgSTTSRuTBSNdBo2ICEqJHRnmq57a+f4n9627XTa+iIvTtJkOuc75/ed6/cxXaOHrxGX/gf/Z5FvM9TCocj0WuL8WhJaxWR1E/MsifxJwuP6++qPRCz/ZtdNwdor0sUzxrAwP4+FipthEC3Ijkx7+NVL76npdjbgCg5Fpx5UhI+j/DpsQyL0AxN/LCKnpYPSVk5UhZVeRWQz1vSX1mAPvEtPqPFW8IbgcNQYhuJrBWMk48SeZ/SYX3czFn4h0y1KPsbMT5Y2cBzwJ5qF3wEuQ+GhwJNhPR7Y02r3ZbkWNXYi03E7StD/BvD73eA1YG3QuJsVOlmAEp2A8F4ofpJMqAOt4FrEeI6ZDkLzNNbeUUiR0OvJRMCOnuNZBO8VRbtqnoPyKlTKdgg24XdXQUN4tBm8Ai2anxeLNqMUP4X3+TnFe/P5WOflenIFHI5mtqA4R1E8v+iJwLqereRb6jfPQqGnGbwGKrRAltKbPOBPIWXHoPc4oncI9na6gIXDUfN7CPssoftSicCYvbBnqyxtBneD2rrhXVM9YvEkwjU9lwmsvDCKvq96Ch7bAJ/fuIKcGHp3YDXt5Vx5jRs8HDGeRR5HitFY9LTaODZ2Av/7SfHersc6zzjAq3eI2uEzL8PQF6jijfVhccCJ7CGxvBnUlqHK34Jnu1Gr2/R48EMHuFLNRJ8B/Fg9eDEq5k8wpFXkItmFvLJ+8qB6rpEO8rwD3w8h5E9hrB51gqPmBib5GuPpo2QiiCJr/GgRcw+z7FuUypfJePAB1/WDmTtZscbdwS9mNBLrNxY56gaua5kqtnuraVHzDTg05AquyvEZPa721U8bR/WK9OPgOGL3fDHPjeHlHEO+CXPAbq/KU+zjR8UTvsG8hLfuWY+svLA/aJRXuLVMq1YjeyClzV8BuJXzvjVnD1z3uxOML5WGJ9mHCnyzUJXlMVjwytkyzeChqHEPztEx6KWSf6m30eecbwgOvfT3TUpu/rwtnPKpweCcaR93Tfu0XO3OIePfBkfQt9zbqJVsvdpDImocxoenscsxYcrhfYPbcKjefY3naDGYPQbL2xGmi8nlgVuqB1JZrwa8JiJ+Lxt/QHEZgN/iiJrM5fldtz6th/u6jMPQ9aHoHrFPOFG4LxVTJxq1m+M8DkWy6xTKTZSOtVNZLz/c1nUGxRRKG/sV4kix0mUArTnaCOoIdXlRacBPYFcrSheCd2YWaPjiB4GpekPX75ZlwbnMABx8G5767PsXfv2peOCkG9QVXFCAB+Gr5kgxV8UHBnH9kQm8pAFR0Z+4edL6CkDku6xXeaidCLW83mqD0zeSsjAE4EZc9rrqvUBEZmHkK4u8Q6lE58/NvGzYTu0ohF7OrCDL8lu5JfOKd35JfsaTnRzputKObv2afwCHKCw9bIOHYgAAAABJRU5ErkJggg==");
  pstrimg("\u2A02-30-0-170-255-3", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADpUlEQVRIS+2WWahNURiA/22WIXENuR6I6EpKuhHlJrOQ4riIF0IiFBkyXDwYHjwY8qB4QNyzL1dIhtyEzAkZH2QoMr0QD8b7+9bZ+569z9177XO88GKd/rOH9a//+9e/1v+v7cg/as4/4sp/8F+LfGGhVnWkSoaISimedUPaIt+QtyxWjaTkvDiO/onXyWBXDWA3wBSABlbDKrX0n5SGMl8mOW8KccAOdnVuBiqY89oTHDgC4BKY91yNU/2RKdybSJim/DZLubM6HzwenNa9GJvlD74PaLZMdW5ZjR3WzsRjH2NG+fjzuDMyKfxRcAA13u/F+zn5vM/2V2kFY9b6UbrJAg20wXPBVZpioOuH7IYfwjMyxRmXF57W9ehXoPcI6ZWBq+zA8cVxYwPwem0gveU1Sp2QNcgkpJ8/6FQiPIAa9Z84sJjl2clV5Zf0kGnOi/rwAFyly1HbisJzQtSd9GnB81MGd0yE50J/oTsAJ2+Lq+e4H4FU82wmkdM8sMlTVx4CKeFpKorpzHtXWybCbVAztlL7YO8eYvK9Aza/hMke2ACEFBExnV1Q+p5VssFdXYfOBl8vmGnYuqs3eCwFXiYp53IUXK0d5Ie8QuEy0GH1wxIz88/otEqEehPaz/9MZBV2t0TBwW6uQWF4BBxE5XEmInVN5St7d5BMdu7EjknrWiazEVnGjLdFwWmdQecBOk4DHhtrxIPv5H9hqP8q+oOt+mkdj90TdnClmnW4jpy1gnM3UphlT7W07sLmAjs4WONnpFJJpNrU370q5RjbBd3kvGnx8GCNlzCh7dFQX9BG7GlT+FuT/sUy3XmXVbLnaXKqeQXpOXaKkb6ATUXLtqCABAm/B6V5GY2kPK3bcLYik1Zzapl68FraS1cZ6vyMB1dqT04Yz6vGUkR6LeIuOU9t8JSMpyA9A9wVlUgqmWG5h4Srx3k3AbmNGA8HIPHFIex+uMiYFBM5g+WJXD8guQXJH5cLrtZ2fiFpRqm8xeCXRGGTNU+j8CO8asK4oVyV62jy19TsSIuex66WoVWDmC+Pu/yPLehzxttMhxhTnqGorORINIdObIv/AvEK/JXMLjcmRA4iy9l0byNWjmkb+S5Leb8C/cZo13I/Dag5163N/s1lZlAiR/21qjPwipsHGP/ItTV9Pbn2yFpXTqNGMqaQCOX/vHXVGDZ11pytzWOmYE6ya0gFEbmYNMtwX35wWNvVYgJZxIb7ijRlxp+Y3ctCYWG93yq9Uy7RFP9wAAAAAElFTkSuQmCC");
  pstrimg("\u2A01-30-0-170-255-3", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAADhklEQVRIS+2WW4hNYRTH1zdjMA01iObBlIQieVCGmHGJUpNR0ozbeFDkxS3JXbxMpJRQMh4wuZ19MnIbxPBgNDGJJxIlIpLcr8PM8vv22cc5M2fvfbYUL3atc7691v9b/7W+y1rbyD96zD/ilf/Ef23loy+1oyWiMp7IhiKv2KT+vL+XHGnmv16qzMffiTqc2NHeON0GSTVO80McK7iz0kUWy0zzPEoAwcRxXS3tshXSHM/RbcZxdC1o1NWpjEQq0Y/y3tuxrZNKsz0buT+xo0eYONdz1oLjuSzlQ/fd0d38LkGOopvn6o5pseTKcUZjPcKzhDNdjEkE6PNkEjvqgKt08zGyNiN6R+uwzUcaIZ7Swaejy3nf6emuYJ8cjTiuS6HbhbRDOoOJpzMmhhFbcEynMPcCo1xkIz5qwjPep3nSS94BsodoHRO2+UabjdhOiutCgt/P6Ie0Sh+pNu87+0otdUxriHQ9gPss9NDA/YlCbFkcvcFvCVJLEov9iW22hfLGzdbIBIBNQXuDw+A9Tp90XIdzwu+g+iA9pEjKzbd0cyLjeu0n3+UppG956w9x6x8Tq9rLd48lH4zfEnzeyiSOaQVGe5BCT6I7MWrGCay9YrPwvYrbscOPuApjDEMNEY729iYo6R6/iootmcHPI0z7we6JQmxP42aAxSEOo5lUPgGc465khIxt1nsBjuC/jSCS5VLQGW63zXAZo5H8P8O+gXHPjEgsVuQJ+ImMVoQRJ/f4JofALnXwE9NaHC0CcB5seSjW0TPYpyELwB7M3ONT2lO+yks3p3zpKxXmc6DDqIdri+bIMHwKFzWXrevUtVIFxNFrgEr9lqVDEFGJU9XLtyCliOM6mT27DMkXpF9gY49CnCxIRgr8ltkm0rE7xbQZzRj0TRCX+S53FOLU3gaW347Eib5q+25Xsm+QKg5G556ajTimhwne9uk2ZAQJ3PVLILMf27YmctErErYIlDH52a/JyX6tcl1mmdI0vf1MuuRdNfsptAD7oaBD6v8FEtcyb7+7MtE6OYDDDQTwgn47Dl0FN/wcZfCanNRC6rztaisR24PbwE7F1hh21YK/ueq0QLrJGZxMSnNgM3+AvCaY7tiGMB6UZm/iOk4NvY4eOPvn7QkdSA5rwE9HinyyaCWIq8gmmW1awrJMt2UnTkc3aDf5KAMoM91ddR5tdKZ5HJUsHfcTALM/Ltofb7wAAAAASUVORK5CYII=");
  pstrimg("\u2A01-30-40-110-240-3", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAELElEQVRIS+1WbWhbVRg+70mydqzNvVW2OVCZozQpylCGiEwQ5vADiv2jFlGZnThRmrsO534NGfSHk6GzSasydHU6xA+EqjimiPszkPrxww0xN1XQqQO3udyk3dqluef1OWmTpsm9yZWB++P5k9zz8T7v+7zved5D4goNukK44n/g/4z5wFR3DeTjQvKtUnC3UnyWSF5PpHJKyYnCdPTYr2/R7L/xuiFwbBe3ixlnFyphOwlq9zPMLBhrYxfC9Nwf+43zQRzwBY5b+S0s1EFskNoQLB8TzIeJ6IeyYcV0Ixh4BI7dvbBHkZBb08nooWbgnsCxRG4/EQ+WDrP4gjnSb4+sOK0/sbYba0PM9IqdMnbouc7E1MowFQ8KQT0LDozZSeMJfGsmPEcdcMxyRjH5jKYPeeyv9R7r+7C+ExY/sJNmX7XVeCL3MLDeXQD/EOsPBQLuGnD6pBTvwShYlHdmhqPHaw82AtZ745azASx9DfojSognM0nzDS/wxYgf5FBsjZPVRYRgt9rJjjGvA82AS+mw8r0k1Dj+FvKzRsfpA3Sx1lYFGLmzkLthRPst8nObX36CAM/XgnOUSNyDIIYQxPPewKVoc+ewGCUVvjk90nbSLzdBgeOD2bXCpQwoP5+eNa4TB2iu2mYp4nXb2Ii05P5CCZ+xrzbXiT1UvFxg2KKYlZuAnQ3kyu70aDRTBxwbyG8kqY6D5oaVOJ8//6qudTaeyKYE0QAresweMQ7XAXdZzl1QiS+RV4uZN4KGzUwlNfIaV1WJik6P5yDmH3EfX8Xe95sCs5K9gtSLKIq4n8Gg8/DaEUr2lJhsFrESnBIceVNwMQ5PFQ6X5LIyJE0hkmfh2CbMTSpBg9jlreEh+adw1R3QhRd8gSs5ZvG5nTLvbRRVLJEdgl7vhm6/nU51bGm413K01ve7TD2TKeOzuhxfu4OXt7nOWcik6wpz1c8punTZVb2HZexv53cI0srpMF1T27UWBcTKjmNTrxct1U4EreqyevkJUgW4pLFCfAelmbqUN1f5NfZAwAuCBOOmF806kCXdCTJ3BIVzH67UJ3aqo9eL7iDA2FPKbSP5XQKs+2pIuKcA3grlOZROmv21mt0MOG7lXsZZ3aeL5LZ0/jS6/DevAOr6saYcnn6jRQKRn+RloU2Zl6IVoVjs1/wpWLm/bHT+mZQb11dN93KIR08maRzxFRhPOrdPrxeqOKEjn38QiL0X58S+U6+Z2W5r6ibFxc1CRr6yh9tOrN7JK4yC85Rk2qt7MPRuDr+3g63vG1013zfX2se5taU99w5AH6gyMIn/J+DMObTQVri0HiC3lNfh48cum32NrmN5b9PnbffghTVKFZ4GyKNw4obaKOAEnrX8kZChIXs4ageV1KbASwxt40hny8xqGS4s0/PuTGj6l9fbzwQFq973DyXQCj1kttGKAAAAAElFTkSuQmCC");
  pstrimg("\u25C6-27-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABsAAAAbCAYAAACN1PRVAAAA7klEQVRIS+3VPw6CMBQG8NfVBTiCJ3A1UY/gYFw8o4Nx9ALC4KBX8AaEsBGCXxMlRUr7aE3jABN/3suPvn4EQQEPEdCiCfvJtKcxTmM0TuC/ApLnNMfr3pqGsiShrc/mGVcGIAL2FIKiN3KOY9q5goOYBvoYzqAWM0BeYA9jQM5gBxsBOYEtJlMH7K6EgZuDE0Kz5xSrWIaGJafpq6bB9QHg0dbbYkVBm7qmC1Y2szWpzzGNK76/Naens2dlSYuqopQLAkoBrTiQrOmlkQuOhbSYvGkDXaBBzAS6QkZMB/pAVkwFcf4YEwZdaIL+z16K9WUcTbIElgAAAABJRU5ErkJggg==");
  pstrimg("\u25B7\u25B7-13-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAANCAYAAAC3mX7tAAABcklEQVQ4T2NkgAKFrC8SDN+4PzxYwPgDJkaIJkUPI8wwjbz3UxgYGNOBfIsbkwTOErIEJE+KHhSL/v9nkANa5srIyDABaFklIctAFhGrB2FR7odZ//8zHropwrdM/e2HA0BLFP6zMRvd6uV7g8tCDRL0oFj0j4Hh9K3JArPBwZL7PuE/A+M8RgbG6BuT+ZdjswxkEbF6cFoEMliz4Kvkv7+/LwAVXbghzO/N0MD4B9lCdIvw6cFrETyh5H7oAbLzGP4x6dyYyncLSRzFR2iOQNFD0CKN7E/C/5n/HWb4//8Ny18Br6vTGL8QsgibHrwWqeW8D2BiYlzP8J8h48ZkgZno8YQt6HDpwWHRf0b13I/LGRj/e/39z651ZzLXE8KJAb8e1OTNyLCH4R/rEUamX6B4WAPMS4nAfPUfb/ImUg+SRe8nAw0NARoq/J+R0e/mJP4dBDNsLvF64Bap532YDeTY//nPr3tnMuNPQpaA5EnRAwDaoxQdZXwF8gAAAABJRU5ErkJggg==");
  pstrimg("\u21FE-22-220-220-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAA7UlEQVRIS2NkoBFgpJG5DKMGw0N2NCiGc1DcuXPHE+g/TxUVlTxSMhPBVAE0uBNoYBkQzwYankas4QQNvnv3bvn///87oAbOAhqeTozhjLdv384CeZWRkfEXFg2/gIbqA+U0gXI/gJiDWJczAr16GqjYhIAr/gEtsAFasAeojhPIjlBVVV2FTw/IxauAGnyBin9jUwiU4waJA+WPANl2QPoePz+/vpiY2Be8BhMKL6DFVUADW6GG3wWGsQaQ/4eQPoKRBzS4A2gQKALvAl1qQMilMAuJMRjk4lQ+Pj5dYg0FGU7QYEJexiU/9AwGACmdURegIv+UAAAAAElFTkSuQmCC");
  pstrimg("\uFF0B-16-160-160-160", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAvElEQVQ4T2NkoBAwUqifgbYGzJ8/3wPoQoHExMQVuFyK1wVAA44yMjIKJSQkaJJlwIIFC3YDNYoBDdAfMAM2A22WALrAlKALli5dKvjr16+DQD/zgBT/////D5CtBKR/ArlPgWwWqCHMQLZvfHz8JRAfHohAA+SBBpwGSv6H2QbUzA9kMwHF3iO5gA0o7giMmQsoBmBzIjAWdgA1CxPlBWwGDIpYOAhNB+QlJGAYRAENEAYG2GSC0UhurgQALb5JEfvzXqwAAAAASUVORK5CYII=");
  pstrimg("\uFF0D-16-160-160-160", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAUElEQVQ4T2NkoBAwUqifYdQAhsEUBvPmzZNlYmI6BIzW/wSilpmRkdE3Pj7+EkgdPBpBBgAlzgIxIQPY/v//75iYmHgBxQByE9RoQqJCQgIARoYPEcWVER4AAAAASUVORK5CYII=");
  pstrimg("MSG-15-0-0-0-2", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAPCAYAAABwfkanAAAC+klEQVRIS7WWWciOQRTHP7uIG2WPkj1ryJqQrNniRpYLW7KUEIUba9a4sGSrL3splCXccSFJUUjWQrInW5L196uZGo/v9T7C1K953nlmzvyfM+ececuVlJRUgEmwAJqC7SVsgs3wBppDeXgAH8Mcu8rQHhrAF3gN9+FJMid91P4MGAt1w4u79MthP3wtsO6n4XLh1zj6ffAUHkOnMP6W/jBMDr+7018Mzx3pT0PtMjbazdg0+Bbe1ac/Al0LiBrG+Ik8gp0TRY/g+VhYpIEPsAj6ZwwN5fcpqAlX4BXMgWvBVj36UTAE+sJ3mA5bEjuexMpgpwP9BjgQxnLpjqLHMFuP2m5DG/gMI+FoYskQ2AuH4AwsKbBZDcYHwzJoEdY/CvOzYVCR8cZwL5diJqWi1/B7NpyE4XAcVkMP2Ager8dtbMf+LM8T4HnYUHujYSm0DmN+/DkYBLlitpj4VLTC2sFOME6nwC3wqD1+PaXn9aCJWykx7rwb0BkahXETbAeshamwq5iYvO9T0cZdkyD8QjBg/LUKQu7Qd4HLYGLNh1kZ8XHf7TzMhGZwM8xL49oPiMntGu2k73+rPyu6JbMtceehJ0wEY9jNjfUoWqOG0LbwAekmxr2J7BrbdTDMPMnYFKyDqsC8fyHaWmvV0Ftm97uMaOurddV3NsPAmm7yWUnqhHFPaRXMBauNMa6ttBliV2Er/JWnFZ1t0dPGbqwGL3heCHsgJlhVnk1Yky6eomWxFpSC5e9TYvy/iVaAydQ2bKZnjUmPXM+tB2u2pctKYp3Wa5fAWh8/0uXvwdPwFBrCABgP5of1OlfLVo/0CDXoJWBFiM26rNhq4HXs0WdvRBPQ0NL7lkc/YjF4g2abpdI9vCMKXf2/LIqi0xfGszHbLQwW+29QnXkmlM1r30Qsqw1kUM/3Di/1uh+3Dp4VWFPmcCq6X/jqvGL/ZJ90bq8g3npvM8ZLwaR9mMeoovuAntWYrZhn89jNM8fqo+e9QQ0jw+kgrAATvmD7AancsRBgeY38AAAAAElFTkSuQmCC");
  pstrimg("MSG-15-140-140-140-2", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAPCAYAAABwfkanAAAEE0lEQVRIS6WWe2jNYRjHzznbMTbnj6HUaOegEZHJJXJJCJOIZTLxB0pus2a3jktj2PXUirKR0txyRELJvcwlokQIQ5uOS5h2MTl2zvF51vuefpsz/XDq6X3e533e7/N9n/d5n9+xer3eqPr6+jyLxbIW6YfI73MoFKoIBAJ78/LymsrLyxdbrVZ7dHT0pczMzI/Kx1JUVBQfFRW10mazDcXmx+cDe67l5OTcRA9pPz2CsxDcDcxHs+5Q9tfBYHC7y+U6mpaWFui8J9LcKkbAvAyLkCCgjwBMVs5NzG8xT1HzzdnZ2bvVng1yMNZsEYB9LS0tAwsKCvyyVlxcPIXDnUd14B92Z79FzSvBXWOGsPho0gfQV6lNlQB5Ob2bcYYRiCCFZHFbaWlpEtl9xvwn63KII+jR2MahZ6APj4mJ6dXQ0PAzNja2EBzB0lB13EYpt/aQGHKDQvYRpMf8LelqNiyTTQRsI2DvjIyMJsjlQqTEABZgvZpAT+SCkAeRgpWVlQ1gbSyyA98hCldKblPnMqiqqoptbGxMyc3NPfUvpNPZVImsQ/ZDZjXBn6I7CSwEtxE0hG5lCKqy+IqeQvbvKmJWj8eTir4dGaZskohPra2t/XW5mCXXlZ8uD8l0OlkdxdVdR++BrITYccY9BD2LfllKAb03+gp0uwbFJo9QHmhPJF7Za7n+i2BKEi6QhDn/S1bvD5Mm8FICuAi0HAI7lUOAB9SHg0htn0SIne0pKSlJwFc6zvpIDxGs+06nc3xdXd0S1g/jd5V97e9DLovbeIuqO5WYw+tmDtaBNAFGOByOl83NzY0q26cJlkqZpLF2QpMWYALP44D7sCcYA0lH4BfksBNE4cB38LkNzmRNmm51DptL3dbg/yYN+FNIegDdCIEk6vWNkTT255CVjqDbYi16Bb7SdzORvorce/x2Qr6CuU1jGQ/IjTlY/8JaDXGmm8my+PyWaSHdebMmDfg7Q2a/C8nExMSD+qPAQ+seFxf3CnuCocV9Z18P5j6/3z/S7XZ/0fiaNPMbunzMEO9AmlMnZ2VlPTZupO3NJuBeZJCy10LiKvPVzKUWHjK/x9gN23zGXszfINLu8g0tr/0CkDPIC+xJjBPlZvC9RaYnmSHcIdNM0o1XCNmZAO9Cwk2f666mz67w+XzOtra2Y+wZ2/khgnGFPj+XPv+DzNv4uCzg0W7Bt72cpOb1LUjrxFTDuJU+XfNXpI3OlMIMQAuxjdeZlRru6r8Bn+hEu90ej49k8RUZ+xYpOI9vFnY3MkWti18lX8Yy4/8ZM8TD31bITpPMmiVrBrwL8lIGQl7/n/lBpg/RZXbn5+fXm8G1QnaqyqyuKfkodJlZM6BmfCi/ZMrGDeFUVWLyF+G4dBz+WT7/E8YvnbUyLnEymWIAAAAASUVORK5CYII=");
  pstrimg("MSG-15-190-210-190-2", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAPCAYAAABwfkanAAAEW0lEQVRIS62WfWiVVRzHz3nuiystks0smX8kaea2uwlRorfYfbH5EoWIIyX7o6b/hBD5R7BqKsuIsAhaGYKhRAjLoPonXPfex2AgWH90XwbXSyRNorb2EoZlc/ecPufZ84znXue4DR+4/H7nnN/L9/dyfufKft0faCg0fKCV7pRS1gvzaTEmhXx/esl0X3BV8JrO6SNCiqBlWWfbm9u/d2T4MkOZJlEWr2itH0D3BnQcvUEZkSdiMjbtyXk0lUv1WMLqZL2K3x2ur1+gPWORsc86ZWe5WmeutXSc5zIXIBsApqBFQK+bwa6vAqIE+4iz1vrTRGvieVfnY+h+fo6Nqm9ShdTq5MPJcbNv5+yXsHUMtq5CTmNTagzIgXgk3lELYCPjgU7BJ1ylAWWpty1ldbNOVhk6g/E9mXxmOwF8LbUsY+FzHJ/GcYi9KHQXAFfW6bqVGyMbx+yCfYro9/rs/IbehyIkRvS03oFOBzrD8da4yX5NnwM6nUt/h+ITbjbLGFqXbEuWqMAJ9vZ5lgCjkDstLHGDmuwHzOW5nKXz6SeRuwc7vdA1jl1TNS0PVLeBnbUblVBdVPBwTYi9TBvQ8FGMDpC5LfApMro5nU3/yrqB9Vmc73F8z1RHA0Ii/zcBHIi3xD9xA5bnc+d3KqmOIO+0mPNp8df1O683blu97WqtwOaTm820A1rK3Tg4CaAwgI4Brxv+GwB8y/l78P3wk8i8wFnIB6qsLf0n2a/DxmJ3/yfoEDrPYOtHKrL+dgA2Nvzt8TjrGE66APacW1LFbW9ibzfrHhMQzrsGi4MrpqamDrHeZ25RNRja4ufxyPia+nz9UY5fRW4IvWYjZ2s7qPN6FHapL+jZ81oCqwStxa7yknLKumaN4iyM84v02mO0j+nN1z3QxnAmm3maYI6T2RU3OZJm0OgXZ7IiT0JKtNtaD7TKqYvw96IbgN7nD2pBoMnIF1zArwD0FB63JloSA37Q0pJfMtN7OWvz2sDMdC7TXaxfhl/uVmlCKvalOgQ4Uw/Hlh8Uk+VBVVZFDoteJRYMulpxFrQQZu46DxBBTemyfmOibeJd71E49/u5xaGR0BVG4FKva4wcPR0G9CSXNhZvjmc9+7cHtBTPMgn6K7KRtbcAwkyH+73MQi8BZjvATBsMA6hEFEH2H3Uv4h+cv8b5QfYe8tnTVOkHZK5w3ojeWmTuxkaJNvTLzZvwiunhL6Eza7U8irbzGjqfFmnmbMey3LLNBNLHjnkQKi+iFoVFYlFiU+umUcBYvIY7kDmMlHMRfbaMphmdRfz00R4f1dIaRuamm4+TJIZ6Odswm1ktem/13yBVSMUCIrDc9EvICl2INkWH53KeKWQ6yHK394gh8w+/4/T8O8mW5EitgCtA85DEKZvJbE1g/48Tv6w9ZEe5fAb81pni6X/hT4UD4bduFXC1L2nn7XZ3GkRryexCwVbrAb7NgGd/J6AtWsn8jzlDq7xJq1yaz89/7A0pLtBEFmIAAAAASUVORK5CYII=");
  pstrimg("\u29BB-35-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAACwklEQVRYR+2XW4hOURTHZx6USXmjlCclt4lxH/dpCjHl8kApU18pIl6NpLzI7UER0yh5FB5cIo3yhMK4TG6FxANNyIQkZSb5/WvvWu32/pwzx8OXzqlf3z7r7LX3f6+1b199XQ099TWkpa4Uk8pGGZkyMnlXajlnyjnzX82ZpYzmOfSZUY2i3ALNMNbZv/P7Am7DQxgw9edQ/gYvi0RmPc7n4D3Mhh+wG3b9pVEJa4fLsMAJlG0avM0jyC7t1TheSjir8f3QC8MciuLWRP1P2Ge6gWXWE+4zK/C8FngrYhJpU+GrjKGwBfYaHwlRSnNFRf6hGM2Jd0HDE3n/UmV40/n2yHy/RbkFfmcOiatoxah8GipBI34OfYg0PgObJnD4KMLdRcQ04vzUNbCY35Fw1b1L0Cz4aDqwQpSaebAZOuAVqL1YapMabWQOuoYU5lYYhDVwMSIoFKJV9BrGOyFymQ938kTHi9HvcdgGq+CKacQKeoN9D5xx3xURL0Qmm+rtvJ8YipjhON2DqdAEj4NGrCD/KRTi7TspHIJ/IkYdawMLnwsY1hqj9pkbkXqKrPyHLGYEzj0wORGZudjvBh0rZbJ/Duzad7qKiLFzZgMNnTUdWCFKjZa/PyJigk7xfVMRMer7GOwAdTAJfrmR+4jYORJOah8hHarPYDQsgZuRNCZNdmnbfWYlHtpT/IYWm6yhIO1DFTgCqj8lksKq2rLswKlVo4bXwflID7knr9rIcjZpxPa8Cvtuw+B3an1TmhXln3lSFBOji5H2G/ss50VLOHbwNWDXXeakcdDRob2qv4iYhTjrKIg9StU+0H1GtzidW4vgQKJ+atlX1WfTpItSJ6hjCfsKh6GSYYS6ER6FZeDPsgmUdWBmfsI5sxHPB6D7rX/GuU4UCd1tdEg+cXV0EbsO9nqhOaQB3c+swlWsqX+UfwDaQqAkz4jt5gAAAABJRU5ErkJggg==");
  pstrimg("\u29BB-35-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAADfUlEQVRYR+2XS0hUURjHnZGZWSj2sAILKdrVJjeNLZKgDIs2SlAZraKaMJtQx3FTNGFF6cxY2QMs24hgj0UoQfSkKFxItIighSEh4iqoQBcxd6bfd7l3OB7uNN2hhcRcOJxzvuf/fN93HtdTsog+zyLCUlIEkysbxcgUI+N2pxZrplgz/0/NxOPxpMfjGevo6HhlryqZTAYNwzjJvJa2VOjI/KL7Snvs9/uvh8Phn7Y8NqKMZyKRyHDBkent7R3GyUEMGOl0epvP55sFxBjzjXmMZuAPsoBjiUTiDONztAy2GqGNugGU3dqs6DaKR3Ioi8MJ2jgtkMlkAjjbznitkzz8NPSGzs7O5wWBESWi04+TVs3AMKloUVNh83t6euq8Xm8/8002TYBAa3IbFTP9qmPA1APmmWq4tLS0pr29/WOuFaLTio4AMj/AzM/NzS2LxWJSV66+LBiUvWVlZdMYXq1ZMGsoGo2+0y0DJIz8VZ0OoGuk6JQrJGpkqBmpF6kbWV03TioZtlgGDWh1OJCaMT8ViKQG+b30F+k30KcCgUClU2r/BNCMDMoewHyyDM1XVFSsDIVC89AGYR/WAelAqJED1MgD6Puwcc+yeRrwF9xExwQjKSovL//CcB1tgDMiZBvRAUF/SNtvOZRiNYHYdpRUv8BOvWswrGgVSlIvfvoTGLmpGtEAmSxr12SBKOAllVto/wTMHcAc1VcEoG/Qliv0BHIRXY6FDbAo0S8MDCdnNSuVNPmcIoODLhxc0hwbzGvB816L4hPmDQWDUWsGUCMUXrPtQAVi7ZrP8OwrYgEg2QgsbBr+GsYvsbPDdc1YRiZRXE8zOOhWtLW1fdeB2MXqUNRmhKxLdZwoerFzHprcVX/9qXdT9pxBux+Ak/aB5lSsDtu+Bvlb6G61IhjUU5gPVd4TONeuEcNEbggAhxycuC5esZH3bgLMbq6Cp7lWRYRuwLNPahGTNFeT5tl8kdD5C8BYD6PLqhBgrnDxdTldfH19fVWpVOou0dml6BjMN3MQfigYDCGPYeSskwGrBt7Qv4Y/g1wV/R5aMIdDx22fD5xawJKKndbDqBmHU4wfOdziTjYneBU2kp5umOZdhm4zW3skHwCVnwVjbe/7MEfZBUO2EBFrYnycJrtlCb289OSt8oO5PCvkJH5ry0sN8eSYos7iboCI7KL6o/wNnDDMMx5uy1kAAAAASUVORK5CYII=");
  pstrimg("\u203B-31-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAB4klEQVRYR+2WyytFURTGXcmzZGCiUAYeAyl5JP4DA2UsJQYGlBkZMVSGiolHMTORZGbGxCOZeiTFhJIiGSB+q9ap1ensu+91bu7knPrar7XXt/a399r7pAry+KXyyF2QkOdF/UT2RPZqJPgBzyEpSmiPgHqwA84ipGqk7zobCe2Bq2HiAagEneDROBLiDW0/UQrRqxkfo74KJsCKLsAbhyUfwHpXZzyEApinPWfIW6i/aDsgluYtaAUfXmYMwqlmHdkA2rE9V4fblEPgC4yCNUfAXv6oPHcFUI63IiN3LGKJzHXJuAIIVhObOB25jLkCyAlxmFwk7VY1Tig/IwLYom82Yo/r6GsGN+DOu9lqYGVfoG9G+xcpp7VuFQj8yqnuBZKOteDeEDZRzyjfA/JSJhyDNnWyRzkIvlWJQ8o+Q9BFPbho+qnvm7Ee9eUVwLXyJWZOAbntsl25yH/lZdZVBXbFVDqA5O8FCO+53GyS01F73kB/FXgDsu8Zfenec9ep9qVhRsRi5CL3pVNOAogidxGXEWwheNelxQ4gTD6M40117rrb1xkf17MRKwBLblPm3181ec+PgJz6v77nk8xdBpKi3i8su+tPRl402ZIKIBfOaYRnye9LL6MxSH6ds1ErZ7a/qv2NIF9nit0AAAAASUVORK5CYII=");
  pstrimg("\u203B-31-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACeklEQVRYR2NkGEDAOIB2M4xaPiChPxrsIzzYu7q6jJiZmf8XFxefRw6KtrY2YTY2tqVAMRkgnl9SUtKLLP///3/Gvr6+sKKiolWMjIz/iQ1GeIIDarb/9+/fbqBGJqBhtqWlpcdhhvT09GwEsv1AfKDcP6AD1YEW3YHJd3d3bwFa6g2U2/P161fPhoaGP8Q4AG450IBZQANSoZr+whwA8lVvby8oJPSRLDcAWn4ZxIdZDNMHdJhsYWHhc5Isx2YQzAFAn+cC5SdBLX/Nx8enkJ6e/g0ovhko5oPuYGIsBqnByOfoPoE5ABgt0n/+/OECRscdULxSajFWy/GFAFIaoMjHMHNwlnC4QoAaPsawfObMmVyfP38uAgYpMysra39eXt4ndAcANd0EYi30OAY6yB0YPW5A8QPAaAGFClEA7HNQigYacBVosSaUfxOYlzVBcYvmAJih8NwA1OcKFNwF9w0jYwSwnFhJjO1gy4EGiAAd8BRoGRtU0wdgoSIB9P1PYJ5l4uHh+QIU50QyEOg2SEED1DsFSGUjyVUC5TqIthzd50CN9758+aIOKixI9TnQrEhg0K8g2nKQwvb2dkEWFpYsIPMXOzv7TPQ4B5VswJC5gS3OgYWQH1BeHij3HOjrNcRYDFKDM7XjStW4cgGxFiKrw2o5oexELQdgWI7L4v7+fsmfP3+ylpeXP8aSC+Cpn5QQQLEcaPFaoOYgqAFwA4E+zQFaOBkq/pSXl1cNVLZTGgJwy9GyDH1rNWh9vhdayJBbn+8D1ufuJNfnIEtxtWQ6OzulgPX0PKASbmCDY2NZWVkPctxCy4lIYDZbTlZLhpSEQi21I7fdDgDYts0vB5Q+nAAAAABJRU5ErkJggg==");
  pstrimg("\u203B-31-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACjklEQVRYR+1WTWvUUBR9LzNIVm7c+VHQpdPJWAWxjIUm6ULwD7gRBAUL7sSFUNFBsHTjQhdWEBcWuvEPVMFJpihIRYVJZzaCiCAWdSFScePMu56kL/GZSTSZDs6iDQSS93HPPffec9/jbIgPHyI22wYfSvS3w77Fw15frZ/WSBOmYS6qoXBaToUELTBiuzjjj6yKdU6dd8ktipaoaaNazeRmJ2sYo4JzPfeCIHELyvfHpm3DvhcacTznJb6PyH8iRicxvxTO15v115zzMTjX4kU+bpbM71kciMAB8AQbbH8TjIvQgYDVqngLn0ZCcLh3yipbD/3/CFjuK7DC8Ulj8nku8CRDoQNw7C6+z0uD65z4QbNifgDwKzA+HHc4C7C/pkfncSahA41mY0JoYicf5Y/9vG4WOBH8bxFQcrwpxqGd1A6XFoFBMO4Bd5vuXuI0R0Qa3trUoak3PQ4QW0OO98RzjHWXMD6BSl2BDGdz5TyoaE+8h4HdcuMaL/MRmdsNGSmPqgYU40VM3QynQeCGXbavZHEgCPtye3ms2+m+QPkVA1ZEP3Sm769Wqp/dd64u1sU3SG1HZJDY/bDROE1nCftOKGAPLMM6kxm8hzmxL2gWB/xmoYY+Yqf0gThzhH4Wjs1kBvcXOm2nRF26DIY/hRBz8ZxvBIQ+JuUc9TKDcO/Dmk9gfS0LcKrUpNwS5ZSmgqyA6rpEqf1LToNyIKnDJTJueI3xjtbRC6XC07gK1OrPE4E/wMFoBTk9mqDjeYxPS8Nf0dsN2dsjGfbjwO9TTZHMfz/VgvOciduSXb/neRsSPZb7PA8qPP0mU8VN5g40rCP8zyCns2pu/T5BHl3nBr/a100mT6EMau3Wvbf/AhIZsy8tlbEeAAAAAElFTkSuQmCC");
  pstrimg("vwcrs-0-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAR0lEQVRIS2NkIA3UA5UzAnEDsdpAikkBoxYQDK3RIBqiQQSKOGKBPTSjHSBWA0m5EmgoWRYQ6xiQutFkSjC0RoNoNIgwQwAAy9AVFIDShB4AAAAASUVORK5CYII=");
  pstrimg("vwcrs-0-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAYElEQVRIS2NkIAH09vbW//v3j7G0tLSBWG2MxCoEqRu1gGBojQbREA0iUMQRdDpUwf///x2AmJGJiWk/sXoYu7u7ic+VjIz2IAuAhh8g2gJiFY7mZKJCajQnEwymkRlEAENOjVwUyCd0AAAAAElFTkSuQmCC");
  pstrimg("vwcrs-0-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAUCAYAAACXtf2DAAAAXklEQVRIS2NkIAHsv7y//t+/f4zO+s4NxGpjJFYhSN2oBQRDazSIhmgQgSKOoNMRChz+///PCAT7idXDuPfiXuJzJSOjPcgCoOEHiLaAWIWjOZmokBrNyQSDaWQGEQDxp4uw6V34IAAAAABJRU5ErkJggg==");
  pstrimg("Tw-22-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAACNUlEQVRYR+2XP0hVURzHfYODKIKDW4MEkYaaDgZCmNrmlKCD6SDaaItSkotuhoKg4CS0OBiJOIibiCCBiCgGKTgkgkIoIljQkubnK+fA6fKe3nvPdXjggQ/n//l9zzm/87vvpXKyLKWyTG/OveC7vjGdcDtcRDR0zPjliHMSGS7B/2KstMqchhgbjWHq/ykS/B0OnObflFud+jfKRwFL29QHYm7WS3SmR9fCqrOgq38E515WEpwcRnAp9s7S2HxGm/pOYTHQX0G9GvZB7uOm51QeZui7dWs+gvtZ/SP8gHL4Y6xpzSnoztC3RHsjjML7WxUGBvgI1glumvUek++ZchH5hjlFNVWBfF6pELZM30vyyJHGR7BrXD4/Z0S9IF9xDuYDZd2EUhnsgN7GU/jpjAtV9BGsuZ+gE9zrnaD+1rHuuox9zPJrucXfUCqdQT6CtUwHTIPcQX6cB7ryAlCcnoFKsG5hN9NH21hUsRrvK1hRYhd+gfz4AazDZ3gNw6DH2QvjsAY1UAfB6BFKv6/gfCPwCXk91BqR1qetP0vcG0ekbuMklMLAIF/BWs5esx6dIofcwT4o+zCLadOHqAsWoBmi/n65lp6E4FesM+8cxBfKbXBp2kbI3zn9PZQn45xuUoJLWEhfNJvcEKe2YJiTDytOx0pJnHAulr+ChKSLr268PmSMoka6T32oDWQS3MRs/T5QDFVIUhS4KQ3SOQRBd7Bz9OFQtFD00O9v6y6hRLqDsu4v0hXCvYwXSKZTwwAAAABJRU5ErkJggg==");
  pstrimg("Tw-22-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAACvUlEQVRYR+2XSWgTURiAO5OYCFkQF5TWXoRSBa09VT2IKHrw4M2Lh+KhSA7BkFXFgwahh2wXEUXwIAVB9ObdWw7Sg4hbERShiiuiSBJj6CR+v8yUxzDFTJoOBBwY3vK/ef/3L+9/iTY0YI82YLxD/4HXOmJauVy+1+l0DDeKNE1bzGQyF2g7br7rx1oBdq0UAxvBYHBjIpH43Q8IN3sIcIsPfikfyXizNQauhSebtk3f12q1vfl8fsmNsn6sdTx0GDHH5tPAtn0+33g6nX7dD2X92KMb4EmAn9mVYdQ5DNrP/KdsNhtX87lUKp1h/jjv81wud0n9Flme8YSTrBuD/gkMyB6AXto3Q/EjZPuYN4jCaCqV+ihrSBM9HA4v0h0Rmd/vH0kmk59NmR/Zd/phjH2FMTu7gVTX9AyMh8+y0VXZDOWnUH5X+hiyG0Oe0PWZiuIYfF36xWJxTNf1BVNWZP68Z8CqcoDnAD4tyjFkluaiAjIPmERCZLLmtpwNjDrEfNUzYAl9KBR6h+JhCS/Kd4nySqUiB3SHArKcFsphbkSj0S2xWKzhGbDpsfu0JwFeoi5vajabWyXkjDXamXa7fRODAqyJc9HcUIypYuBBt7CyvuccNoGnaaUEdgA8bBjGFIBFgL/W6/VhIvCUsXi+GolEjvzkYbye8RWAL3sOjMdGgXuD4nW0s8Acoz9l5bSVz3IzMj/De0cgqSoHKJXzngNL6K0w0/8G8AaZsw6UcjB14D7wSqn7EQgEtvV6ra8qJcRDlLFbAIr3/j5mOmznULYEHi8vIB9XvPmQdDjai3dXncMm8AmAHijAyyXOzHN7mYM3W1kzYPLN8Wq2FBYKhQgH7oscJqf6arss5GfshNPN2a0BK6XENTaI8xpAjHEpvF1pQzPsjwGeVNNB8bikxQupFk7ybkGtdQP3F+kP1pS0JhaAzAIAAAAASUVORK5CYII=");
  pstrimg("Tw-22-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAWCAYAAAC7ZX7KAAAC8ElEQVRYR+2XTWgTQRTH5+2mGLQHe/BgQaGkUrT5AD1UqWh2twclN6m1V1EQFOlFhOpZQRTBi3gRj1JFBC8FYXfpqYKnJFaoWIoiFr+omOChJjP+Z5pdlnRLs12jBFxYstk38+b33vvPm4RYh13UYbzsP3C7K0ZOyZkVTPCIC33SMtqYQUYt4rzYwyWwiOoFAa4kRXLXcG74c9S5cceTXbRrxGjFd0Ssjudu/7tgMou/ggsBeFlLaAPGoFGNCxB1fuims0v2DII4AmcCcAUra01Hddyu8RsCo4+MmxnzUTMAgnqAd4MIbJkyVAjq2Sk6dwSJQ7AtmlnzVHAuKvoQPlNhtlaC3BhYsJNmznzS7Azaf4t3KblhdaYfzmfzs3KMu+gmRUV8xGOPsmn6wXw6/1LZ5txuXudfAbsFX5cQTG8rkMExcYDvwdE55Uyw6wjqqoIquqOc+BSgNGUjdhcVuiAfnbJTEEI8kzYE8xRSO/H3gAOLY9EZZCsvF4dUHgNoNACyAFu/shXtm0R0SYYIyZy3MpYMOtK16Qyr0v8QS8jgdlle6Hi3SnYJciC2w6MIysLbzLItakJLGTnjQyRaVbCQK9glUO5QDasSF50X8DCEMtdx79N0bU+j5ITP28j0BOwJKQtK04QXDGxvrJw1EBV2VWFxgEvODUy/LBMLuIvI3AE8n8ZdIZ16eY3PQwJyY83Xt9WH9Kr+BSt2IQlT0Pz4vwA+imzZgNIBK7W7HxAp3ErTnp6lBEjQLcBOKtkwcQYbTrbFyFesDLvCTQQ0WwXIVkCDbXVDBbqCXOc77h4E+DPJkn2bPdZjATd0bCNzZiBVFd7F+0b2jnxTAZXFe9h2+nbB5iCHdOTUNib8CeArAL4WAPBbnHy3ps0Jdh/AZ9sHvM7R7C3ovnL70SNeq80U0l+bDgsOvYyFnZytBhCaYbSraQAcU7+TiR2HHp+v51CWnZf5ArQr+7AvBz8gaS/xd41uscbeKqg3ruP+Iv0GTCWdJuoLlLcAAAAASUVORK5CYII=");
  pstrimg("\u29B5-31-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACL0lEQVRYR+2VS0hVURSGFRJLcWBEEycOdKBISeKgRBBn4SNEKTSKJhGGTqJAHAk6qQZGaTQKMsQoCISCIDAQhSBKUmpQaCCKgyIEExRK/X7ZJ45yHus48CLcBR9737vXWv/e6+xHZkYKLTOF2hlp8ZRUP132dNn3tQIHZsPlUJZiKIC/kAVLMAfLeymZZeV5JG6H2xECGrsDv5NMIk78FMk++hJ+ov8EfsJRaIUq33gt/XfWCUSJ1/gSLdCvh88BiUv5bwROuLEG2leWCYSJ67tKUPYAboC+c5gdYkCll5+sCGbjJhAmfp/ATngObfAvLhHjyvUCmuEZXISNqLgg8WMEfIEjUAbzBmHPpZDOD1ixxAaJnyFwEgbc6hNob6/+MVyBs/DGunKdYdl56HOlu0V7GPRNLbaO0024DnfhoYtfdNXYkcNbuTbId0v2PfqcJu797lhPvJCBXvgFFVDtHO/R5iYQXMNXG1U2DR/gOHTB1zBx//+N/BgFHZv+BMKe6zU6j+AyPI2KD9pw+vbfQHd2OWjnWk33vTZrpYsNupT+5woS1wYbdwk6aAetyvjpThh2Ez9J+yfpyuXvlV59ff8JwwT874DufF00kRZ2w/nPqxJccivaDMnWxP8v3Zj5Vox6WLJJpnv9qkuqndsNM66cOgUl0AM1zuc17QVYjVu1xuOeVG/VQ4ZkOh16EyzvwHY6i7j88uEctECdm4je9ikYg7egNz6RWcUTJbU6bwFDPFwgVWsj+QAAAABJRU5ErkJggg==");
  pstrimg("\u29B5-31-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAACzUlEQVRYR+2WT2gTURDGu4lJ1BAUqodqBYn2IurFix7EgwVBLIKVWr15kCBCNOQPERGiYDDknwpKEQUvgkXNwZOC3iKIHhQvKqgV9VCsl4IR25isv5GNrMlu9qUHg5DAMm/fm+/7ZubNvhetr4s/rYvafT3xrlS/V/Ze2f9pBf6PhisUCqvr9fpeSrNB1/Uq1qdp2hvsg1gs9nohJXPMvFgsBmu12k3It9oJEMwr1sbj8fjLToJoK57L5Y5DdsFEOIfQEzKexq7EbmNtiWn9PFU4qRqArXg2m01D3iCqQRiG+EozMX6HmZvA12usTeB3VCUAS/F8Pr+TzB4aBO8DgcCmUCj03Y6QAPysPSeAIcNnlABKTgG0iCOqIf4WYJDxjM/nWxMOh+eciFKp1CK/3z9NAP2Cq1Qqg8zNt8O1iLPPWwA/hUSju3cnEon7TsKNdSowAuwe77oKtkUcgtMQnCWAKUq3jrGuKk6mLrL/BGYV+Et0vzSs7e+POKU+QLQ6wATekv0M9hDvy5s62p5M02bBXcRhLVbOgLjgGZcJZKoZ+FucUu/H3FbNcAF+p6hi2lKcrPcQ3TWebzgMEO1SceT9HcanKgZOGixoYOd5l+r5sZFoNHrDUtw8yZ5fxfkIc2Wi3a4q3PCjitKgu3hK4Efb4a0abgzxSUA1Mh+y2is7wkwmE3C5XF/AL8bnmNWhZMZafWorEJWOFYJHEAyrZk/VJsGNSeBut3t9JBL50FHm4mwqvez7GbJPOQUAJoywdLpgboE56ISxPF7N36tBdpcTa5z5n82EciKyz9cRljNehJVPRduLJZ1O93s8nheQDhqkPxhf5ilVq9XPlHWA+RGeE8zJ2S7Cs1y/m5PJ5EenrGW97ZVqnPN38NunQFb2er3DKvdAg8vxz4TRAxvJ7hzB7MAuM8By2Xxl7jFzORrzmUKAf7koiXdKqur/CzXwLS8ETM4nAAAAAElFTkSuQmCC");
  pstrimg("\u29B5-40-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAERUlEQVRYR+1XX2hbZRQ/5960mX+6eyNb6YThnDU3VUQEdQ+O+SA+DTbwz5P4MCy+LIniYGyTSRGmgwnTphvbQOzD9EUGRZ/8xwQFFQVBh03aWqrO0qltb267Lc2fe/zdm2RmIbn3JpGxh3xtKOQ75/f9zu+c75yvTDf54pucH3UJdpqhroJdBTtVoFP/bg12FexUgU79uzXYVbCRAkN7r94lSu4ZId5OLBtIOF+xWxLmL/NF9dzcydsXOlXP8W+pBqOJ1QcVLp6G3za/w4XovKg0PHVcn/Wz9doPSFA4lsy+AaAD9WAi9BfCXCahCDP11+/bNh2cGtOPtkvSn+Czohqbst/A8JGaQ6ZJlH25lb7P5sY5V/3e2C99dNXaxWwfQ3I2Vb9HEJ9kFrSd9CGXWiXqTXBEFGMp+22VHNJms8gL6VRk3PsgR3HrNSIZ+Y+kfJRJRXb/rwSNZPYwk7zuggoVCiW+79eT2kzQQ6JJ8wkE9yk+igth8/OZMe1sUH/PS2LEL99JXJhFXYVd5UrKUPrE+qlWwB1bI2ntZrInKn55K6dF5s/wlaA4TVMcTZhHFKZDFfVeTad055K0tYzk8gQTl9MrnEintLGgQI0JovZii9kMbuegiFgl0vtnUrwWFLTeLrbXiopqTzqpBt5XmZT+OC4REuO/GhLc+qJoPeHsJSe9iHgcEe/xh/KwKAc8iYCjrQZ8jeD9I9Jb+Gdlq82h1RAXdiAX77sZET4svXzKzofWtUNSlXxPXg1d6ZXCaSfNTj3j50np6c0Q5cN2UV2ZSfX93Qy7QhBtIWGeJ2ZIf2MXFP0Y7WeXN0Gn3y2ac8y8+cbSczIUhCBY3ZvI7lTJ3mizklPEfgxqxt0UY6bizyk06Fv9yOOh0LAMWDgrLOipNISpgl96E/X9By4KWphcmBrVv/BJ8fXbg4mVjSEq/Ymi7sHO0fSoftCPnN8+Sugc8J6CXT5naVrtiPTybdxmMH9jA9mLAByA86V0TttMZ7jgR6LZ/mBC1qvkdoV1SOnPmQX9oaBzuWmjNhLLZ1GTz7lptmk4M6a/2y7B2pGJ/B5DH9wfFKs5wbj5MCv0vQuEOYzeM3DxuLYUFLhq5zRpUuwLlXIpcik8OHnilt+C4ni+Zq4bUUTTRdEeaGWiRPdZG7hQmkX/63PjbFE9x8eToFM7ITbnYXZbWUlZLRLtmElFfvRTIPqStZ1t+3N3GpWdf0/fod9DIwyI4Mv3wWrEzbsRxi9OgVdh0SbeWyuGDjX6vyP28vIWvH3egu3T1+zx6l5TxZh7O2IGp1a29CXoGJVTZX8NY6PugGn0se8w9k30wH7sP4r9LbU22P9pzdK3BW0r9QEEIlh1isbNA7g4R6oPUC813JlL/EpmVHunVdVq7Vsi6DiiLsMKW8MKyR7U5BAmTmXCyGVsL+L18wPezx+k57WJoL3OK4CWCXaiRju+/wJlQZ44nCaz4wAAAABJRU5ErkJggg==");
  pstrimg("\u29B5-31-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAfCAYAAAAfrhY5AAAC80lEQVRYR+1WS2gTURR9b0xNkaIiFcGFEIlgsUnQhQpB4c0EWlHc6MIPdKcbQYoIVil+UFciLhStrhQRFERcZRGcmRaqYnZJGyF0IYK00CJIK2Ixmet56URiMpN57cIgZGDgzcw959x77vsMZy28eAu1WVu8Je63bW/b/k8d+D8m3GhudJ+jOceYw7YSoxLnfDVs+swZT4u4eL0SywIrt3N2P3G6C/KonwARTWuadk7ExIvlJNFU3Mpbj0B26g8hsRISmcLzN058LcbbULl0YOki9kpP6EdUE/AVt3LWS+z8FSLY7MDmET2mn6knRoK3EXAWsSH3W0aP630qCXiKmzlzEGJ33GrmUN0ukRBf/AjHC+NbFsuLWcRtkjHAXkULrgUl0CBukx2iPE2jko0AL4QpHE0mkrNBRHbB7qIyzSCuS+KcDieS6kl9bYZrEIfdAxB+7FZ9AT28FSRc/Q7sJWBvLnWKBWIbxfPWM4BPADzH43yz4KKkKm5/sjtpHtVzth6YNHp/UKlyc8K8IfPFLD4JcERah/sKbknUqZIAsPOgGAS+G/Ez4LuH8TqQmkbMyNRzVCrHjJWT47KKwEpisA88NRLGgLf4hHURAUPI9Ke0rLp28W62ZgkF6qLysjtRZddLGC+AIwzgA4if9xSvfQkX3uDZwF1Ez7YHKtYFmHkzh+TjEM1CcI9Sz6tBAF8HeFhuLMj8gFev/AjtSTuK5fYRuA7c9702pVpsw2wfK4ztLJfKHyoExApYar2q1cO194jdKxPXmNaHA0e66Ht57nA11jPY9xz2HQ9KAJiHiDkt4yD+zogbySCMp3jdepUJZLWQZogd4ns9odwRnbyTwZYq3G/Ku6L/wTJpJcghC/3fUCEl9gutSGOUxrk+pZEWQVL9eD6MGDmjZZI/aBUdSvWm7KCq5femR6pb1VtUtVuBrIhzYL/KOVDlCvyZkIH4oTiKXWoIlfUgkTWuE5V1jHER63sEp94ThQT/ClESXy6pavxvvIEqL8Q7tz0AAAAASUVORK5CYII=");
  pstrimg("\u29B5-40-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAADmklEQVRYR+2XTUhVQRTH5+nr4UfPj3JjVGARUqB9LSKo0BZhVJsKo0UPF7UKCmoR9gFRQZsCobaRGC0KisBSiCRaRQVFEBWCRSWVij01FXvqs9+RuXG7vXfv3HdbuLgDw8y7c85//vM/M2fmRdQcL5E5zk+FBINGKFQwVDCoAkH9wz0YKhhUgaD+4R4MFcykwNCQ2jMzow5EIqqatph2Wuzoj9N/Q/daWZl6GFQ98fe1B4eH1eF0Wp2ExCKvySH7CbsTEL3lZes2bkSQyaKQE0XqnWBatQnaAggVZRi/X16uduVK0pMgE88npN1MXmmbJMnv1lhMtRQWqs/W99FRVTM1pY7gs5/xYpt9T2mpWsO3Ub9EXQmKKpD7YCM3w7c2FGlym0gr/gCbbTa7bsJd/V8JQq4TwAYNmoZoAiVumk6STKrz+Jyy7XU5PAdN/V0PCXtuO0q0Y5QvB5SJmiDX5gdcbCHZgu9R7Tedl6dWlZSoblOcrCFGvS5AtmqgDla+wxTUaQfWe75Z4b0N1j5TrIwEZe+h4DdAyqgpDsPyoiLVawrqtAMrAWarhJr2CwSXoeqUCV5Ggqx4Pc7PdHhfAbjOBCybjV7wV8bL/S74D8GxMVWZSqmG/Hw1SDLeCdAhPWEn++aiBvfNE6wCnH5Qr+owSya4AKYIEGe8j6zwOBvwLEFJC6jWg+xLfTMI7uCafiyCku/6IRgPPp9vBG+CAgnBSyhZAclf/KyhbtTqyp3awdg/15iTCnaxLPTkBtlNXSgBo0pI+6gxcN8R4jOuIXYOkrvqmewR3/MEjENipRvf8lgOCPCW/kqqvHxWgPnRBCxbmpH797vcp/IYiEZVVTyu+k0AM9mw4LVgPWcsSh0g4UuaMbqXsyZqQF8DUqvDfIMwJHIlaL8yWfATsOpMsdwIHoPgZQ2UJi1s4op6agps2ekkfV1vlzRtI+G9Y4rj+ppxXFFJbpRaPzfKyIjaTJ6TvTx7ePyqJz6uBHnfreZ99wK7eXrFk6h6nD10xUsBlDsNobPYyWNDyP3kEqgiCoNevvZxzwcrKjbiIE8s2eBWeUmnOdP/Duz3MnaOKid2tshBY4vUsTBZrK/iSVDQdKju0V3gQE/K5Y+qY7QljC2hL629DPBjg2lacbI3Img5cbLbISDPLhM/Sch3ISaK5lxMJvoLfHxcLeZRIad7C7WCaoV+EhUnWEAvbRfEmk1znRt73wRzliJHx98pRCk4U2hXzgAAAABJRU5ErkJggg==");
  pstrimg(" \u29B5-31-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAACnElEQVRYR+2XTYiNURjHZ4p8ZUGymc1djIVJQyMLNBmzm3xMk4mMyEYiNqJkNWU2WJBBVgqJTCllSk1xTZQSQjMLQoksSApFjY/ffzpXb7f33jnnvOfOK+976tc595zznPP83+d83fq6jKb6jOquy4VnLfJ5xPOIZ+QL5Es9I4H+KzOPeEzEi9StMvUqr/6fVkW1iP8uE+qyOmZiuwAaYAymwnt4BZ//hQ8YWvhsRO2CI1XEqe0ofErzA4QU3oKQhxExjyifhw8wFzbDykh7O+XbaYkPJbwtIuIt5bXwJEZUE3WXodm0rSO/kYb4asKLOFQ63O5Qlri4pH0ssUr9sA+0ryulKTRouaufUiO8nGzxLgdWJd9O0rAXrkIP/LQQoXkHYANcgS3wy8IuWBfbiBeZMe46m0f9CMyARfDGwbMCfV/DFw9bh2niuybd4ysY9h6cMlF3cUhzn4Pt0AE3XYyT9vUVrjtaaSP0gZbrAZgO2sM26Qed9sNuOAZnjP07cq2CmiYf4TqMXtTQq+WMfb+G448P7SO8gN1h+AhLodU4eYJ8loPD3+mrQ1HpKTyA+XAQRh3G8epqe7hVus7WM+t10NV03MODndichW1w0cPe2yTpdaa9/hz0Bl8CLntT73cdjMuMbdyDx1vYRIa2ES8yUNx1psNs2Di/h/z0RBNG2nXnXzIfbTH5VwfbxF199nj5pKXlrnrt97sWXkXf9XrD61aY1BRCePQ+lvNbTSTL/9aWhHVRuGZ+uLz2gn6YEMLl0DTQO32H8U4n9CF4ZpawTvuF0Attps8g+Sb4FlSR5WChhJemU7QvWMytW0BvfJt3vcVw7l1sD7dq/87KZ51DRSd0wxrTqP/mj+EWDIH+o6eakl5nqTqfZPI/nFl0IBlJid0AAAAASUVORK5CYII=");
  pstrimg(" \u29B5-31-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAADRElEQVRYR+2XT2gTQRSHu4lJ1BAUqodqBYn2IurFix6kigVBLIKVWr15kCBCNOQPERGiYLA0SVVQiih4ESxqDp4UFCpEED0oXlRQK+qhtF4KRmxjsn4jW4khm8xmN00xCSyzOzO/mffNe/NmorQ16U9pUu62Fnizeb7l8ZbHm2QFWqHeJI7+i9nyeKnHh4aGxhRF6dbqx0Kh0M7/KSp0PZ5IJNRiUMCloyOVSq0uFAr70G9QVTVH6WIR31E+ZJy3C2EBLQUfHh725vP5W4Bt1YNjId7QNhAOh183cgEsAydCTgBysQhmBshneHqCciXlNtqWFLVfwPunGgVvCTj5IA7YHEQeGD9QV8vkjSPUjdDXqbWN0O9YI+B1wYuTGx57QmjuKGdgMpncRfsjre2jx+PZ5PP5fujBMK6btpfAd2l9+oBPzze8dMIqZxjACuDvafPyPuVyudb4/f6ZahCxWGyR2+2eAL5d6LLZbCd1s9V0VrZLeZwJyx5n7OstGP4cAIUsvicSiTyQNQ7P9yK7T3/VqFZ2jkr9TO1xjD+D8eeAHydc1/H+zxFYaWI8bMPrX9CsQn+ZrSSS47z9agInvA/iJRWjI1gqvD5FeZjv5SWZWxeEvtPoLtFhLaU448NCz3uGRRiv9woYBie8D2DUnToadproiddx/D9DGwbH23vxynWe7+g78NJSMRDfHyhcsgajE8nMq2ln+RZR46YMBIPBm7Lj1NpPKrnpHWfs8WsYepTJM3hpu1EjiB6RDHfzpNH3GdWb6W/qOAO8H/BRDMizOF1G9ubg4KDHZrNNol+M/ni5C48ZsGpaKY8ziN5xtgJgkZmF8Y8xvqfahHPtLNooun6xaHa7fX0gEPgkq7Win+E9XjppUbiLfX4Wr8eqGYbGD7TI6EJzG82hahqr202DF5/HGsg9bmID1P8qNVbc9NjXN4AWd3YBLX3bW3DgwqB4PN7ucDheAdSpAf3k/QpPOpfLfSWUO6jv5TlJnbirC+hp/sJujkajn62GkhnPtMfnJtHu7Xf53i8xccbpdPbI3Oslxqqpi1Ryq/TvrMye34hXz6PpplymtYs/Lt+oe0pdgiT4oiZrLRSZOs4stGPeh/oNFOiEL2IPVLoAAAAASUVORK5CYII=");
  pstrimg(" \u29B5-31-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAAAfCAYAAAC/MX7XAAADZ0lEQVRYR+1XTWgTQRSeWVtTpKiIIngQKhUstgl6UCH4s9lAK4oXPfgDvelFkFIEq4g/qCcRD4pWT4oICiKecijubgpVMbekjVB6EEFaaBGkFbGY7PObdFNC3HRns2tbTBYWZnfee/N9872ZN8NZjT68RnmzOvFaU76ueF3xGpmBeqrXiNDzNOuKlytuZIwk/u23/ydj4Zj6P2VFRcVBnEqJgrh0diTTyb2WYh1nFttCjHKc85WI9YUznlDD6pvlMIGBEjfTZhdxugdirZXIEdG4oii9aof6ciknIDDiyJDHIHJ6ngyxHCZhDN/fOfHVaG+F4kL5uYfY61gkdnSpyAdC3Egbr3DqL5BAaltI7f5YR+ysw75xBwbnYNtg9w1gCXUuBfmFiJduboMAeMAJoJ7We0D0rq3iFFTdqUbUr5XIDGWHNs/mZ1Ow2yhs4HsNaX99sclLb1hOwEwyGyhD41BwA/pnQhRqjUaik24kzKzZTHmagF2z8LMarZZ4W/ybm1+Q/bKKO5YzpHg3SD+x1b6ANXtbFhx8L8H31tzqYJ58ZcdYyM7XGseG9hzBTwL4FA/zTSpXc7KgzM9mE01Ddc7WwieBpXRI1jcIu6qI68P6TaETdutTAN4i0hXvVbyCRJMMMPhOI0QP/NfDfgLx7qO9BkF1rUMbkInhx8YzcagsNqIrfgZdyBd1/pkW0br/VfxiXO/Eh42LANcHhX6JNC3WZvybLClTrriheN7eFMUqz6E9gxghOD4E8fOuAXwayG5ujuUM6r/F+BreUazRbV6x6Bk9jYkLg3AKZHd79fdj76ucAfgNAL8sDi1Q7KCXtWmOmK0oaZ/g14j3gdOBxw8xN19ZxR3L2WB2cEc+l/9YAE8si3LW7jZgsR/Z8gHtPWLSFKZ04vIismfRHs9rvBxZSbozpOwLpOwJN/TweQSbM8IOxN9rYS3q5hN0v2/iZfVYkE8pDYqmbld/lIMVJz0rYw3gmFq820uf9pYdcQHIGDEiZJGB9b6uAJDYb6R/Aq0E7uVjCiktmJAufB+Bjdi5xQT9pBV0ON4eN4MmJRPPt+LFQWw130HNXRIDj+Jcv0/mXC8RqyoT2c2t4u3sr3ROm8dw+uqDom2YhFV2BhTqNNqjqN/9uL09rQptgE6+ylmAOBY91B+YlngvDnUcCgAAAABJRU5ErkJggg==");
  pstrimg("\u25C7-85-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAYAAAA49ahaAAADF0lEQVR4Xu3bP2/TQBgG8EvLgKDqn4mhYmBDqqp+AioxMfINQGxMTHwOJBAbYkHq3qmqulQMZUdMIPERUKsqRUKlCa8lEiWO7dzZ72PfvX6yREmc586/vPKdz87A8aEuMFBPZKAjKqAIiEpUgAAgkpVKVIAAIJKVSlSAACCSlUpUgAAgkpVKVIAAIJKVSlSAACCSlUpUgAAgkpVKVIAAIJKVSlSAACCSlUpUgAAgkpVKVIAAIJKVSlSAACCSlUpUgAAgkpVKVIAAIJKVSlSAACCylUodj92tqyu3s7bmvgL2IbpIOKqA3r64cD8GA7cte/9yc9N9iE5BuUNQ1BnQ+//7PeoDLAy1AHRSD+ZhIagVoL2AVUf1ADUPq4paAfpdJE+z42luTDB5KFBDrQD9ubHhHsro//f83L2V51d5WHnvhWzzSXkQ7ixOBdUHdLKHfYBtjBoC2hfYRqh1QPsAWxu1Cah12FqoGqCWYYNRNUGtwgahIkAtwnqjIkGtwXqhtgHqAftMThAOOpvRBzS8FLVNUCuwlahdgFqALUXtEjR12ELUGEBThl1AjQk0Vdg51BhBU4SdosYMmhrsFFXWOT/LYvH+7HRMoH/LJeV78v4wYJoG3VT6eSj9eZpr5M/KitteX3e/oI17hk9RLy/do5sbdywdvpP77onAPvHMg24mfXw+GrmP0sjqTENj+fHfb20tXFGA9qUqfO6YOhy6vetr9yVG2DJQ2bk38qO/7kywoOGF0T9G2JRAM+PCeWpMsKmBlqJmH8QAmyJoJWrXsKmCLkXtCjZlUC/UtmFTB/VGnYE9k+nWXdQ81gJoECoa1gpoMCoK1hJoLVRtWGugtVG1YC2CNkJtCmsVtDFqXVjLoCqoobDWQdVQfWH7AKqKmoXJn9AeyILxt4IThCP5OLv9PLvDZG6BWV5Htx6aO7kJfrn0DpXQxArYfNTYIqh6pU7UPGDNgsJQlxwKTINCUUtgzYPCUXOw2VVac4NS0ZijPlAVNSKXZnbl8vdjub/0XejAl+L2raCmCNOkz0RtolfyXaICUP8Bc94XdKwLPJAAAAAASUVORK5CYII=");
  pstrimg("???-0-75-75-75", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAABcUlEQVRIS2NkoANgpIMdDKOWkBTKoOBi9PT0DGNkZHQBspVAuoHsRVu3bl0EZP4nyTQcihkdHBwEuLi4XgMNZgGquQHEGiC1////n7pt27YcqlgSGhrK9vXr18T3798vOn78+HdfX1+uv3//XgVaKgYUFz5w4MAPSi3Cmrq8vLxmAA2O//btmyjQki9UtwToEw2gT84DfXIJGC+WQAv+UdMSRm9v7ySggXOA+Nfv3781du3adZ9SC8AJCWYI0AIrIPsoEC/59+9f9vbt2z9RwwKsljAxMYlu3rz5DZIFFCdxuE+MjY1ZxcTEdIA+uIgcD9RI4nBLoBG+ARjhScAIPwbzCTWSONwSDw8PU2Zm5lPATOgJzIQ78MUHqUmc5FKYnCROiiVkJ3GiLaEkiZNsCTlJnGhLKEniRFtCSRIn2hJKkjjRlhBbjmFL4tS0BGcSp5ol+JI41S3BksSp17jDlcRR6hNiIxaXOlxJnKqW4EviAN4gJi5DWNr1AAAAAElFTkSuQmCC");
  pstrimg("0-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACAklEQVQ4T72UTUgUYRjHn2fHXULQS7mIIm06Qgc9CuUhhAzC8BCdAglxV8VRwU5CIITYpVOwzazZrhcvepLqEAiFgeDBUxBEzLsKfoIeRPArdef1P7OtuuruzMF8LwPPw//3/p+PeZmu+PAV8+j/A9v1ZJ0k+VgyH7C0mCz/RLw3tOC1klOHUnI4lvyCwJPzYinpbaJb7fcCPQFGdHOKmB/ZIjg8QGKJJN9BU3xOzCPUAYZjooYt+umIJc2Jjar66dd89OL98k0/7/9iplLE9wJUHDS6g9v5nDrAiCHe4PNKEqUUpaBipDO0lhGF9flmZuszctLH9OxjlzrpAWjOEvE9aFbEuhqy3WVEbYmNIv67tY6bb3gpm9EcexjzEITg4mtCU5uyHDh5IZi4EvHvcU19mN/hGQEcfMM0G3MBL82fo/9zmHbgCiQaRwXPr99hJCaWMJTy3D1M99hbD+091M0fzPzgsil3fFi9lUrtrKAlAVw4hJIH3NdGFwNY6kF7D7HAdzEYkRFFDLMF7sfsPWRLPo33VH9yBbYOJ6sVS/5GWQqEfwLkvx/Tbm+2RpO1is+agftiQHZ9SmHJSGfZrisw/beYY3ACN7kOv4xrVe/ywexc1nsYNkwDverK3kOy8Ij1jWpq1A12AWgH2qKLZawcNmAnF/HMBANUNOX2IJy96BhFYPAV0vBZJQAAAABJRU5ErkJggg==");
  pstrimg("1-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAA+0lEQVQ4T2NkoDJgpLJ5DPQzMGHGXVU2Roafs9KVH5HiC6wuTJ5+x5rxP8MRoEHfPoooC64OY/xFrKFwA3Mn3Wb/wsRiwMz0x+Q/A0M7IwMj7////19/ElWRIcvAlGm3FzMwMMYgu+T/f4YPn0SVxckyMGnanVygc0sZGP5/BhrMC2TLUmQgsstSp9/1AXp3M9UMTJpyO4yJiXHlqIFEJUWsCXsohSEFOQUUQJnTHgpOz5T7kDz9bhwwLBaAkg0zC5f0r28/2RYUKHxkYATmcAIAHobJU+/MYmRkSMWlnth8DTcwZdrdKcBsl43bAf+ffhRRUSKUr6lewAIAWaSdFRM1N5kAAAAASUVORK5CYII=");
  pstrimg("2-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABuklEQVQ4T7WUvy8DYRjHn+e9xlCDqRE/BuFuMZCwGBhtYtNFRNKr0BY7CwuxCk4jV02KSBgM+BPEamK4IoxKIh2oH3ePp1etX+Wu1JvcXXLP83ze7/N93juEMi8sMw/+FxhYuKwV4qkDkJoIUABYN5ln2NoYV9JuO7EVBrVkOz92+ar5XEgABETxWERR3UBtoLpsDCBhIl9ARGlEZBZUvYNE9bAccoLawMCi4ReIm+zo3APC/FpIvrKVR8+6yTL3ELCCCG7TvqbqbT8+/gR9GwoR19mqPiy2Y4ZfTHLAtAS1xEeUY3fAb7KC2uki2xjJAtH0KPpYw/mfgKpmHLH0VvY1lfbJ9e5bLrKtqp3OItCEHSJI6BF50NVQiiWxsj5WtmWzeCCSx1u3Mlx79ytgQDN6BeEOT124HUZ+oy+fXmApOSQQVnJdgkkWda2OKodOyooCg0vGNB+dqVdYBsnTpkcaTtzCsnkFhQxbZ1h/zjNKSZ7KZvbsuhRYAZg/a4U2CbqJpDtJMistk+5zicLL92RstPHC8RyqWjLBUgec1LCnB7Gw3OkI5HZ1btfxb8LAfQb2OAKdlJUSfwGsXqUVuSrD2QAAAABJRU5ErkJggg==");
  pstrimg("3-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAB9UlEQVQ4T7WTz0sbURDHZ14STUGKB+lBrKjJCvYg+QMK4kHw4K31ZjHxV2PWvfWgF89iFUHJauwmSnrz2p6Eehd6KaWtkqQLBRUECxWFWNw3nV26oEnjblEXlt19O/N58535PoQ7vvCOeXC/wPiS2RgKW71EEOUbQdARytBHQ2375leJU2Eqfdxwgb92EfDJPxOJ9n7Tg6f5qZYTL7ADTKSLjwNIJQAM2d9EdGo/EfGhCyCA/exkpIsX+bX25QAnMqVWackiy3zDEhcMrc10NxIAO4gQBQJ5KTG2qUU+ewLtgPiGGd5MtJcrg8dXSwNc8bv/BtbadUwvvGXxQ6zTQiuouNXXiq+2DRGO6GYfCmpBKTXuWexv8rqRir70NZSrQaOrhRdImL+WSJA31OiwF8wZZFXPdLNHgvWBfwSuTJgV03w2pUx7QW88KfG1khK06D1v22kTiUR/Tu3Y9jXlWkGupRyPEs0YqjJ3S+Bhk2WdH/ApqmPrvOJeLnoCR1Z+NIdF+FRXH51VBo/qhUGGbTnrfivkpC2e7DPukw4CMtlk5Iu2UqwrB0WCD8iyLdf2oRTUvZFUvnpW6AABBz0muMY+nPQ15bH09+dcwDybuL0ygSsrsxVmGfbaC1blQ225UH8mgjEBsoGQJATEz1yy45MfkBvzB53XwhX9cJWVAAAAAElFTkSuQmCC");
  pstrimg("4-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABf0lEQVQ4T72UzUoCcRTF7/37RQnRh2JEQR/TwkVv0CZoE7TNnQWO1GKsZ2jTC+Q0keHGjUTLNrXrEdwIweiuFjEQZiUaM96uphWho07SwDADc/lxzj1n/ghDvnDIPPhf4P6x7qv5RMhyeV/T8bmnftx0Vbh7Rp66VXxkyAQRlMrBpdBlBN97QTsDiVDWCnlEDDcARGSUg9KsY2Bc068AcLOt5k8K5ZNCEhESxMJYftOBYyDDEgxLtiBHbHmccYojYEwrrguiG9bED7hOK9IG7zHDEqMDA1mZBEh5BPSyv7uCIa3cHqLpCLit3k95RVX/rAcZLrd/PrU3U2nY/gYOkLJ8qkeRMNNMlGAHUOTqdcsv0FMiMFO801UOqIpAa0ju6rmykLPrIsZUPSIEXvQqbOt7ZcSkyeTBcq3bPBdY3+J2ZHl3b7+HOOWxry4CvfC7UQ5IYbuC2x4OjkKxs/oTOGrRtJ3VNqdvhUMBxrWi2vhT+H54DkiLjg+HPhPvOPYBAV/JFdB6dk8AAAAASUVORK5CYII=");
  pstrimg("5-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABqUlEQVQ4T7WUTUsCYRDHn9nFypC89OIxdbsFHTr0EYKi6NilCARTlwiijoEfoAgEtcy1LOjUqaKu0b2orroWWkQdgiCjyN1pfKnMcncz28suPPP85r8z/xlgdX6gzjz2f8CpQKLxpZHr0FIccTsyDAC1YooKEcEVTiaBgUOzBMhmo6KwaBAop4jeqRWMyOYkUVgwCPxQeJ5Dvp8DtFZefLU0X22O27K/AlKBDiSfMFBr97/XENk+1WmwbkBSqFCWbXq3MGRpAHaSvHPGDv2QM5KkTGH1puSTcAAjq17nnh70ExiSj8hidnJQmux+S+pa6bCXvs0FZxFUAV5Y99ov9ZtSLaLgT3mLwKNFu+KMJHYt1Q6km+4VNKk5+aGkdDnqE7x/Avr9yGXa5Gtqjo1AEQJO6gLzc6zwVlNIbH+sDHYFU0MA6k5xRA2OniucGGMIcUCMIceCkkc4dUduzIr6NEyFi9OMN5Ts1EcKj3UV5oGAsKGzGAJk+GlDtqFN002/s/vTciBlz3Q2r7cU3hN9WbATaxdNkGU9HFMtCKgynruPeRxneqrKz98AXUCyFcDxaEwAAAAASUVORK5CYII=");
  pstrimg("6-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACFUlEQVQ4T71TT0gUcRR+bzZCzayDeupQu7NKRccML56CyENBh70m7hq4I9api4e2DpEnIdpZrR0EPXSog9IhCIKgk17qVuiMKYKHHQgUkWybeX0zO4rrn50pxd9l5vfn+977vvce0xEvPmI+Oj7CdGGhg13nisvcoIhsbCr8brJfLYUp2pNhWp9/xsKDyL2+GixDxWzyaXRCEc4UrA8AXN8CicgaMZ9E1DqifyTM6NYLgDSPDEQrrpy4Mz5wYcbb9+pL8TKX1yNL7jXs07y5WvIzEflh2mrbpxz/CZO3373vYTpvPmSmYRJy4d/FVwOJuf8h8zAVQn1+molvCdEvkD7HaQrfsxBfxr+N/6KhJUeiBGFI5HTBWgDz+ZoAka+w4mqYFQGhaSLDODIUFvoixBOkuD9hQDuOHjDzKT8Ysi9q6v1agasJhT4amrrdNh7w3thKs+NsLAcF+17MqpfQSoi9/6qSjFfvjazavftpJm9OwcvbaCd7rUU99ybFvw8mrBRlBpI7hGTWyCavHZ4wb75E2/R5bSOK0mn0x2e3SHM5UZZbLcsvmkgEyUD2jFrJmCvfAIphu+q4sRvelMC/Bvj3Fuc3KzWRJ1DwqHZRgtudo+eDMcewoRHeKUGF50w7cTm8bXaEg5eP0etDQaYBDxIjeW2V1LthZNuTUiUBjd5XWOwiccoO05k6afqsa63rUabEe/MX3Fb0FTeUaJkAAAAASUVORK5CYII=");
  pstrimg("7-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABh0lEQVQ4T7WSPywDURjAv/euJCUdGiEiIcJ1ZZAYRTAykOho6B3VViQmk0SMJoOeONcYxFCLYMZkYOxg6VViEsRAoiXpu893WJDeay91yeWS9777fb/vD4M6P6zOPPgfYMK4DQulHJLZloLNT3sz7a9ecZ+GetrOkmtUBqT7MyupjkqBmpE/YMCmZUBEOM2k1DEp0C35HUTb70DFQRScMQYiRwkbqzb0ykjtWKF2rCEAMgcnrYXIkdSwUkAs8xjib8/3BAxSTI761y9ri+faaGnbpHpnAcFBDkOZhHrhGzi3XehyhGMDsAYaxjkNY0QGc+8rGupG/oSux6l3wuHYtzsfufYN1A17gMq8onScvodWSp2qBlbRkPbyktZk0LVTlECnGe++8w3U0jcTjDnH3wCTJhuvFvbXEJFpW7ZNdj2AWC4JaNlfjLz4BlKpOsF2XABNdp0mu1wL7Ifh8CoG1LbCAx2G6S1ypanVjHcUfQNjm/ko5yz7BWBLVrJ3o1aY5x76gbn/fABRT34VRBkV2QAAAABJRU5ErkJggg==");
  pstrimg("8-20-100-150-220", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACQklEQVQ4T7WUz2sTURDHZzYxQkRF0CjtJZCNh6J4Uk+VgIh/gVKQimW3Lc2C9CBIUaE9KAEPgjabtmwUiyDiQejBQw9e1IsiePBX2U0PBoUqQg/+oOC+8ZvdJGy1ZHOoe9nHvpnP+87M9y3TJj+8yTz6/0DTXu4nUQXSWCMlCkc+dor6q24raSscLtcOC6tHRNz7T7LIBy2pnZwbzX2MAwfAkdnPu33/xycmTgUJQi+F6C3UFRCQDT4JraZ92XfrfH6tEzQAGrZ3HYsLAClhGagW8w9bSYbtlnDQxQDKbFTHcrdjgWbZvUfMZ0Tka7Wo78UaAsNneLq2XzRZCpXLhGPlS7FAKJyHwkFQIILGnTH9ZhSoNHmH/QQqGHAs/UEs0JxZPkFKLUYCnzIlrrhfss9zmZob9FHoV4p2ZGwr8z0W2Agwy95ZDOHuRsFQ7rMkDzpW9n0nWGOvbRuj7N1BueeavVpDH7e2kzEsrIdQ7nxXQNOuTaN9VrSHZsUtwNZTzHwsAu6ihyJsVrx6w9Dw2rOqpfdHVcA2p7B3PxgK0RPcmuMdezhY8TIpkXpoarnkFPPX1iVEDyR5AY8e7QgcmZUtyq+tIGjXRgonJ0Wr7/HqKL1HugHCrGxUvDdQ2NccSAnmnWipMG33BkoeD/foMgZzNdY2AB5A8Otmn3CGfIOiJbwP4b0tvCS0mkime+dGe37GAhsBQzNuX0LRAtTk/k5AqQvp33Q67sewzoctCPyow4NH4LwV+HJnirYvxt2OqIA/znnpFevLqnQAAAAASUVORK5CYII=");
  pstrimg(" I -25-40-110-240-5", "data:image/png;base64,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");
  pstrimg("RB-0-110-110-110", "data:image/png;base64,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");
  pstrimg("RB-0-240-240-0", "data:image/png;base64,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");
  pstrimg("RB2-0-140-160-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAAAdCAYAAAAQLFHJAAAPEklEQVR4Xu1dC3gTVRZOMknapmnakIaWUErpAi2gSC2fSJGPt4DLu0gXAQWVVUARFVQEtCCgLIhsBWUVFyyPlUpRbJWXXWGR96NYtloetqVAmvRB2vSVNK+dE3bCZDKTmcykbYTp9+lHM3fuP+e/Z/577rnnpkIB/8MzwDPAM/AHYUD4B3lO/jF5BngGeAYEAS9YPRY0dHDY7N3RsVIJhLZI55g5kCr0/9VCRHTltw2h5f4eRx6T55arT90vPsSVJ1/vD1jBSni2MkwYKumPSmqcV6McglJEF36k8Gths6/GE9vzmARGeG59dqn7xYd8JsZPNwSkYCXOM6oEiGCMQGAPYmanyCywCXKLNimqmbX3bMVjUjHHc8vUp+4XH2LKR0u0CzjBcs5Q8qBJzMUKo0VkdtSb917+p7rOV6J4TDrGeG7pGLpffIiOh5a+HnCClfiSYbBAJISclcePpfZ6sEAstUtCO5Av/+yOK0UblUd8JY2IaWnQS00Vv4Rb63UygcMqQoLDzbK4kXqxVG7z6NtPmFaTEWnSn1VajbdCBQKbEJGpTcGqXrXSiC5NLYVJ7NdmNQvt5tsSoSjELg6JsLpd94OdWP/exsdtbP2AScRqqiyUWwxXwmzWJjEiDrHKOg2pdLOVIyaMo8PWgND5oEgabkUkMruzHUdMPFZT+dlwU+VFlcNmEwoRxBHcIaUiRN2r3l8+RGdXS18PKMFyJirtlrFkRjfp8hXXs4asFcs7Xu3y9MUPEbHEQUqOTZTty9IQjwnOrP9xzmRTZUF/j75FEpMqad5W9YD0ix7XOGDaLI2iWzlTxzfePDqKzB5ZzMCDmtHbv/MQEA6YZDg2q0V4fVfKi801V/tIIv5UEPfUqU88OOaIWZo1Ms2kOz3Um1NHDctYrez19HVXG46YWD9V5zYkGAo+G2er13bF40cNXv+BsvezJW7PxAFTd2TRIzUFnz9H9+Iquk/+l2bUlruTKwdMwHL6bt68iaaKi48RscGHOoz8LNdjovcRk86m1rgeUIKV+IpxjMBh12CGw4zcbCiSN1cVhVedXp1qMV7vKW2XeK7zX45toRQsoUhb9HdFLlPy8JjG33Ojtd9PX47dK1HEFQpEIrulpvhB7DNV34Ub1SlLL7n1zwHT0lAuLdk54G276XYH6NOJKRQ6LLUlD2AYqMMdip2Uk+0vTDJuyvaOn4iJJiXHHOwEzNKsEVNNurODvQrWEFSwHsQJFkdMwNIefGGQ8fLup/DjareaQmyNunhSweKAqTuyEBWsLb4LFgdMa1ONuHhH8mJ7U3UM2CiPH/2NJLybvqn8ZCLG951J6AQ6CQXdneh9xGT6TrVku4ARrDsJS3sq3lj9f5YkGy5u+iv+M8rZH9+I4cxBxKwrPtheu/+ZN1BB+ocicXoJFtU0ak9F3Px+2svgEFyjDyImJljoLJ8d0XPWFYmioxlMgc/L9z87vlF7crgQCa7r/NSxd4KV3RrdnIGlnUSH0ubNTzEWZj7jeqGpIixowAETi7BkscNyNY9vPmBvrhcTnwUJjTK7lkqumYtZ1EzmQ5Wn3n+g+syal6GrYPVDJ6KGZ+wNUT/kzHNajLeChJJQm0f0ysFOWBLaTdVSqpe29OvhC8GPPCIsDphVZ9cnVp1c8Sr4ieaJzDVhXR6vxPAhsqw6kf4a/K4ZtTVd0X2iexkQw/FsSRHype82Eax129Y5VX7hzIUu/MT5NcnoR/Cf68fw665OtQVbBomkYfX25jq5qeLCQEaCJRCcL8qIOI/viykmFXm38zd2qzi2dKFQHGroPPXICg/x4IAJkaTbzPf/h2gsO6oq+3b8akrB4oCJ2Vl5+oNe1ac/mC9Al7wCuyUYPqfhmDW3mGApekzbrhmx6WcfHJUVprW5HinJTH7D1qiPC45+5KfYyQe+EolETGFZYXrr3FDwebz+yKI3geuO47JWhMUOIe5qs8LEJnapqufZ+GkntuCfobmmJKQ4M2kDfEYaTTL0IaaktXS7NhEsMqO8JduhPfbyMhIsm+gSmsc6SUceHSb+fmymFgUpKrtMPfkeFgm52rQAJuaIIJLx08+8629MmBD0P85dCja0H7hync1cFwTRiFeOOdjJWrBYYhoubY3T//TqYhD8LtNOLiPdwKByEpaYVN05xXPHI69BDg0izNgJ2TkebVli6o8tediQv+kFEMKooRs+VPacVob1DYJVunvQErvZqO44ZveysPiRFW64DDHp3qXWut4mgkUa7RDyV0QCYLl2KzftPUaCRbI2Z4OJf4Yb+yaPbbj+4xhf8jtsMBu1J5TWen1wbdGu5IbSw84NCFXf1zepU5YVeDgFBzthmXvjmwlLHTZTGBbxYI7vlWMOmJhggQCH95yWbbc0BElCo41Bqh7V8m6TblFGPywxdXkL+tcUbpuJyKKLlX1e/La++PuHbabb7YRIkFkcoq4KS0jNd0vw4wlmiUn14laeWNG7+tz6eSCesan7V4REJxn9NZ4wlmV7Rq3B+lN0nZilTJp7LigqubZsz0hn3hCRa67Fzzj3ocdym6GdrSVIdDhtIlikEdbLhplosply7e+TYAlE5qIMxZd0xifSYGL3377wcfeKn5e9Dr8rk17aHDVwZb5n39wxiUl/73hwlR0mlIeUZA1dBLkU2EGKmbBvL4gFI8FiiQlP6y3pDpFrzOjtH8liB5EU/7Kzk0mSPzRuRA4aeeR6iiU7TDKfw2+skOauXDexxzRe/S5au/9p14YR/jmA27i0o6vII0xmmHTvUmtdbxPBIo08/ClYDkdz0cfKbXgS2WDC/XUlh9S3cqashH87I4+pxz71mKXgoh8woYbmxnepiyB8v+vDElPko0s+iey74LKHU7DAhB2lsq9HzIbyBWe0mPbvLzB7MMHyuhPLAhN77ps/zBxmNZZ2FMs76cQhqjqruSa0SXcmCSs1oFxus8R0lVGgSyV57NBDoV3HXUKCwpvRZwgzXNw81lJ3MwGeTdVvcYa635uFbvyyxCR7cbFNDS/5zzu3ccDUH3snyZCf8SJ0g4S0L7M1VcRizwJRXYfHP1un6DZOx9aHWkuQ6HDaRLDIHopY0kBs41OExXC7lhaz7CeVNmfqYlg2wcsUOyVvNUmy/c6j+gkTsxuioPLDc8c0ao+PgNxE7KR96TJNisGNFxaY+ChOMzrzXWm7HkaHvRFBJAprxYnlA+qvffskLKFixu/+BA147cGRPRq4YtI5of7IW30NBZtnQzuPOiwO3LpyZsSaJ7RPEO6Snf0WQUIeoky0bGRvS9gJ9VFlWcPSwYciHpi1NXroR6co+WAxntCXaycUl8OCyc+Q/2my8dreNAyPNIfFEJNuDFvrepsIFmm046XCHcjwSbBIEom+Yhov7+moPfj8O873Bc25xD75wypsO5x0cJhizjP2R8s3XHVd3gYav5SgKHD02FygsxPjkYmD3SnSvYAW6eJqd5jaSTOeeHwoWi3OfGghRFqkdW4sMbElIdWuJJbjgt21zmlHv3Cr7WOJSeT1Zu60UWjubCJMePEzzi8Xy9QWSu5ZYpZ+NXgGFIzKu07IinliWx6+f1ghlB96/hWI2ilKKRj5EBN/aY02bSJYZIaRlTW4Ee9L0p1kq9YXzNv5n3atOLZ4EdwD0UbnyfszGOwweWxJ+4JJ1hZfEEgaebCwExxYu3/W6+LQ9reImPhiVYmi86+o7bpOk3KzCEW6frfTbrcL0J2sWc2Vlx6l2GBghYmJhTz+z9/EjNl5gGivV8FiwS2xf2xnGz6n3Dhxv8lnO918hKxqH+3fJWjkPDDCbA0xYoLRJoJFGgWQFI6SCRZtpTvcRFIMxxQTX6wKWLGpB7aSFhYS2WWJCecW0Tqzu+fKcP3i82dMj5AwtZPMORgl3VnaCbVmAgd6RhI7P4d7APyLTSrMLDHdduam5KXjz9SBSGI7aKRLQpaYeF6xJakoKFwfP6twOelZVLdQ07NAlm488UeqyCIsp527hzxjqvwlhVS4GdrJRExao02bCBaVYWQ5JagcFgcrbNguCJb4dtisQvjcoy8f1+R4THxVNITwncZlr4XD1g5LEyKUhDix4N8Seacmt5ooDphwlKO2cMeUdn0XbA3rnloCOTJ4uRt+36fRHX1rNhzZIU3WcsCk4t9dsAjHOOAmDpjO3Nn+WYvhPGZYQtpVyI3BOcrGG0cjy/NeegF2LO8svQ+tdDusywHTuRv61cClsBySRMRf0oze+iUs6wEXLeBMMf62cwaY1X7g+2vbJc255uKFAybWh/FKtkZ74Ll34ffIlPT1pJsm+IHggIk/VkXEqjz9t57Vp1e/AlBRg9euUfaeXczWztYQJDqMgBIs4uFnbIakMoIi98D68LOrAI+GNXnXcXtinsg87Grm4/EGvJ1Mzp5R5HVY28lasDjYSVayQXwO0t06DpjQP34Sgt/hrKa1QRcLSXD4XaYZcDhmUs4et7IGjpjOJe6OfnNgJ9aZB5xxdj3pzjKeAA6YJsNVGZrYfxvbXZYqEy5IVQnFZv2FB7GdUNIdbh8x6cSkNa4HlGCBwfjqc6KzEQkJbt/neKfJh7e7ciwcv6aj8nh6n+rzG+bQEa/oMT1TM2LjcWc7jpiw7Ks+u26YSXdmCBEXkUWVRvZbssvtMLAfMKnsw/hGef0Z5XWHW+6Ko53wUukOzx1Pdvi5pe2EnGTVmfdnEstFlL2fz1Q/tuq8m1hxtBO4xW9sRA3/eJWy5wxX5Tkp937ABH71efPHNGlPDiNiRPSauU09aM0pt80Tlph070ZLXw84wbrzFbPiVG9FpKSkoDUsjgZrNusv8GtjTOybKZzLTyHiEEojLMEqwmFnMJy3k/adoPIh2Op3LvFNRklQdHKNR9TzB+cWiIFlsKnqv+FIiMpsMxslspjHqv1pJy35Ldwg4ATLGWVBAl5kG8tYtFBHE9iRHF++B4vIK49J4Wk8t4xfwfvFhxgT0gINA1KwwM5eTzqktujawa35Ryh4TIKH+fGPUPDc3lvctoAWMeoyYAULe3pngtranCBAELnry/3QHRWBzVaP/rkvKHpj/YcnqBjiMXluGb09XhrdLz7ElSdf7w94wfLVIL49zwDPwL3LAC9Y9+7Y8pbxDNxzDPCCdc8NKW8Qz8C9y8D/AB3oIeHXnD4UAAAAAElFTkSuQmCC");
  pstrimg("RS-0-110-110-110", "data:image/png;base64,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");
  pstrimg("RS-0-240-240-0", "data:image/png;base64,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");
  pstrimg("RS2-0-140-160-140", "data:image/png;base64,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");
  pstrimg("rule-0-75-75-130", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAACSUlEQVRIS+2VQUgUURzG338cU3bzoOQpKA+ReRQR6hB4U2eRQCivEpSgFGglZLA77RzEg0h0KQm6dfHqzrIeYlWKxRAPCgqBtxQS9rZ7aeY9v7ezw245i832WDq4sDuzM2/+v/f9v++9IdaADzWAwS4gobrcqHYJisWSbxijQ87dnKZpszhvcxw+lsmY+VBTrjEYSiTEWsf9u94YcYSfK46jd2Uyr46VQoRgXfjeS6fjOyoKV9coK0nmcHEzlUo8Vw2Q9aogtJVKxZ80CFLy6J0Q4sC2E0tln8gwkjinFtvmU4yZPMxkApSUILsIwAbaN+lDkMCc9K1YFFezWdOpA2J9wUPbXrtKkYZH1e0rgT/j3rVIpOfmysoDNyTkz+H/DeQ+99RK9X5La2sL2FY8JUJQ3rbjwxVPrG9oV7vXLh/yd4msAbFWUdyA0S9R+Dv8WSRi13F+WCiI7mw24Z71LZQSxgYHEzd0XcPKp8vlRzcB6AX0IBrtua1AiVe2r+99c0fHUaeut/xKp+dOfp9nUDhCKjk/nsEJNAxrGooXiEjHYpZr6TEW9Mc63ydnIbHY62W09xEKLwNg4zgB2DCRGFUCGRkxb3Gu7UPFU0T6bWUrsvYRmGMlkKGh5J2mJvY1qM1Q9VMVpB+QLaTvGdbXnqaxVgnEf07k5v8BUtnvoKQMEXMwer5a0cCA2VonJGi/817hmP0HmP1JCC3KGJ+B+T8UQRiD+RGYL01/6E9BxhjQcWUQv7CEOc6lqOs2F9fWXhTkdeWQoISdAgrfT+4gbbcQAAAAAElFTkSuQmCC");
  pstrimg("s-0-75-75-130", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAz0lEQVQ4T2NkoAAwUqCXYVQziaEHDLD/jF5ezU2MjAw1EL3/T/3+zeW0a1fpV0JmgTT6MDD8W83CwqLw6dPvn5ycjMmsrCxLNm2qfklQs6dnkzUTE8OR////rwUq3vjzJ+u2vXur3hLSCJIHx7O3d7Pm//8MYUAnBwOdr8vI+Nd8y5bGU4QMADq7EaiB6ePWrbV7QkMb2L5+ZXry/z9j2vbttRuI0RzJyMi4DKYQ6IIdL1+K+509m/6boGaYAheXDn4Qe8+eio+ENMHkKUrbAE3gRhBXwGuLAAAAAElFTkSuQmCC");
  pstrimg("GoL-0-75-75-130", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAACzUlEQVRIS+1VT0gUURh/b2ZsZNW6aFia1KHEig6VRYLgwXB3BruEdahLF49B/0ww13Gl0CDqGlQE3vRUOLOrREl/yQ5FQXaoCIoKrIPYruzszHz93q4ry+raiiZEPhjmzXvf9/2+9/t+3zzOVmDwFcBg/xZIINB9DKyUh8N0lTHDy2RomU5CXNd73hBRWSxGFaOjhvO3QO4zRlU+X822wcEj7irIAmpP1uR/owtHroFCWolYLedsGu/3kOXo9DSZkOUv7HFN6wlh74LgDvufGfOOW1bXoxm6Kk2TqnP0SZLTy/A7m3Kmt3j5OOebU4Uge2KiYGNpaeI61g4j+A0BLkm8D5sV8bhXr6rSJdjtx3eQMS6nCwi7yWQzalr3CTjfwvSn63p7IxHjk1hvbOxdp6p2G5zbHYc3KAp7iHmfaXa1i/2GBqO4qEj6ikDj8P8hQs1VB33kLS0DcjT67hucS/BssSzje7ah39+1y3GYT1XlZ0iiHkk8njmhoO8u57Q9GqXq7E5PxxE0iToIejpMM4gjzz/8/lCtLLMxz2O7w+Hgy7SVrof64V83X6fPgqSdweNB0+y8JzYCAWOtJLGdGbzarsskRZGfg5rTKDR+goylWBj/AiHE/gRyABk+dV2uRyKdlnDWdaOOMelJBogzNaVUlZS4D0DNVqy3IqlXqSKzQxDCUcsKDuRigTc3G1UA+ACnARiK37UoqKKqBWWMJeKKwtsQ5Awo2RSPr0kUFiaQCN+XEfAUaL6WC0CsQ11J+b7AfA8RD1hWZyTTQdNCJ2FzRYCkRdHUdHEDke3aNo+l+mfhkZSwKD6R9xoyVMB5P5F0m3NPxvcOfJ8H5+sdR6kcHu6AChc/Zi8tTTPKOZduIkSW1mkMIL1DQ3Qnu5PzhZtzM6br4Xk2DlI8OTJyLppvsJyFX2qAfPyX6Y7Po/D5ZLMUm9WTLIq9FaHrN53gVqKaD94IAAAAAElFTkSuQmCC");
  pstrimg("GoL-0-240-240-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAeCAYAAADZ7LXbAAACW0lEQVRIS+2VT0iTcRjHn3cbOhy6rSS0SNCTx7AuKYJ0rBAhNrxkHVQQb5KIEAR2EdGEDqKYeAiCgh081CnoEIQwxEOdBKEOJQo6dRpCbfPzyO8db6+bG2hC5uDZ83ue3/M839/zj9eSU/hZp4Ah/xbI5qbEMhm5GArJXcuSHWeFTiQTgvsA2SB4qdcrV8vLZe2vgGxtyQ/AAoDUVFTI+jlI3mnXnvyH5UokpI+aPGQUL8N/QxvQZ+TRYFDilMVPWT6iu2Fqt8fdJNPUb8pVxp5U5dwTU9M4jtfUGTkJ82JcZoKlOd9Jp2UKXoNuCfoC3Yb86J7h08H5AvwT3GM3UAEPlpEM5hBaOf6CenjNjOq3t6WZwOMcG3B+iY0GWuS+Qe9ZwOuweSjJvWZV7Z4O9D8t/oKkqhvqg6IEiLkNCTZIgEpstZxj2DwyGeumf+Mc8vmk1r3p2Wy0DwQY0zTDYWlyA9gydk+xeww9oT9Dth6QZXyrcm26E+TAGcUEL+w1ZbpJmdpsI1OKUuQB6AN2t0wmWoVV7lNHgvCSYeP8AucuU+sReL8jqwwPuQ/wJDxA0LfcLUCdyFfgr/Ftz1cFi+Y+wHkWg68Y1qlhMimXUilp4agjrIA6dREC7gLwinPYETCbWV4QM/sr2jxoGqBupzGZvkfW8kTsoUAX9Xhkj8d9R6cZHfmzR1ibP4qlytrId8g6bfVQI1QCtRPwTaGAue6zHy1ed4/gz822O20T2gMAetybXCzgoS+jox+6Q0uM9WKxwfL25LgBivE/kW98IaBzkEIV+uP+7JRrHwtUAJriBoqKAAAAAElFTkSuQmCC");
  pstrimg("sz-17-200-200-200", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAARCAYAAAC4qX7BAAAB9UlEQVRIS+2UTyiDcRjHvdsrG21ulOIgSi3H/UshF6RcRBJz5uLPwU1yVESUlIsclYuDg2jtsPbHygUHYgcpr4PUVsr+vD7P2jTC5V1y8Ktnz9Pze37f57vv82xK2R85yh/hUfZP5PMk/hX5UpF4PG7RNO2QSxdWpet6Gv+EBe12uy+RSGwQ92IvXyy3ajab+51O55mRxVf8fr9qtVpvAakXIEgkFUWpIpSx6dgINoG1f9OIJ/qw1+vdM0QkEon0AXQAiKjQ4/F4/AJIfiGbzU4RDtHkOBaLtaTT6aSqqhlOE29OuCvHR7l3GyEhbxUa+gDbESL4eUCXfgIVBS0Wyw2qNVD3YLPZmh0OR9IwEb5pdSqV0gCuyI9GlHnELpn9tMvluihuEg6HRYku7JU3rW63+8ooiZwi8hEKhdpw2wA3idwFYBTKQMYLmVPJQWINJ+PSqZ2ExFYpSLwTKQaLRqMd7MAYuVFRCTKrjGsWEpKTEZqwXXZpvFQkckTYkRma+Uwm02jxGFDpOq/QJn6ZmnPqK/EBiHWWkkSOCA2XaDQncnPuiO+JG7FaLEuum9w8ceHn+0ycIZ8bK3cqbhCFjoyQU5B8ANB1AOuKgcglUGmFPVikJiBE5I8u3/hDaZ7IviEihcfBYLCGxiJ5NaYhv/y3/Np5AwuW0BKYATsjAAAAAElFTkSuQmCC");
  pstrimg("\u2A01-29-40-110-240-3", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAAEKElEQVRIS+1WTWgcZRj+3m83pkF2d7Zi/UkP2obZVSEeFFLEg2grIgo51FakraBYS8huEg96k4g30ZpkUoOxYAwtGLTVgz+HVm3pKfQigrqzWzBSNQasmdnU7q7dmdfnm+zGye5MdlGkFyeHLN+87/u8z/vzfEPiGjx0DTDF/6D/adVblrcnw50RYT+OLHajGb1w2CxY2IK4mwUVBPMn0t109PsjXT+2m2koqAKLCut1JhqAkVQBmQEn+CcvOFF3/bwG9lGkmjjw7Vt0uRV4IGhq6HKvcKvzRGKTB0Riihw5njsSK6Qz9i4kIs3F+Cl9a+lmqlYOkaCXYNMBsCrMHzYnkl9tBNwEms4W72PhnlMsQOs8d8hH82/Ef1NBejIrN0aF8zPOo0hluzmp/aDOUy9yTJSs40Sk2qAqMmAa2lQY8DrQ9PDybcKhvMoajlNwHPA7bjvIiY5O+1e8v046ndsa+5jKLA8D+E3l47LYlTe000HAPlCmVNb6GqXqBYt3coZ2sNGhFajHOmsPkeAxZi5WVrSbFmao3BhnDRTGj8D4cxhfNCvadjFNV/8JKIpL6PuXqMYD6O+r6O/LwaCjLNOXbBOGPQ7TYwUj8WlQWdphqvzqbQJoyRHalgsGVfzxPKZqQCLCuUjES7nNYDlK1X8D6gFnrZOYi36W1JcfT5xvAtWz1kNYxNMwmsPwPBk2dVtHuOv6qv07Vinqdshb6lMdZK9n7f1S8Cwz7TONxPENQGkflCaGstxJnhD4HjQcZdGgCk/X1mIOvxcxp55wrH+oxMTzUtBJnE/nJrTnw0GF2AuoV8AkHca2nXNk6+KvjySfgbJ8Zk5oezYq7xOQtztA6u5VyWtgyiKJYdvpnTKfhTItwaqZKXEJe/pxhOgE7GZzRtKrTv3xBunvdRFvo6eHQtmMcjR1yV5pp6fY+T0IPscu7TcnE8eaQOvTCxbfmBOJPvRqPcuah39lUL6eugwGJQnQowB9NkiZauKg1Mieh/M97Mq78pPxXFCgdvcUN1Qc1+ESKiKL5UTyl2m60sRUHeiD1l4pxftK5MPYtgtaZ4l+TqKfmabZXjvwqRKkcMQ0kmONxu2ApgatB0mKLzBgV8sR3rIwlrTCQdVADVr3wsFTDwzvM9DNd/0OrUD1oeL9xO7Z1Wux2X/d9PoD6xn7gCR+b3UtaCZ3Q/y5uiyu3ackIo2DpA8uj0hJh2sJjyPh4bAtCPxyQIB+knRi9XOE/8A0v1AuJmYXZkQllSk+hTszmluMHRMfkKNnrJ0wmlKXhQcY0prAQWrMSh+50i2rf36IYDvq7zBkJqLmkUQFW3Ur/u/wfScVqhzpv2DEvgvd89qLll+D6ppih9QXxG6swO3+gFCtMpI645I4XBjXTrUCC+1pK0e1g8om0iXYfI1WWtkHvf8LX87/LczT5OEAAAAASUVORK5CYII=");
  pstrimg("\u29B5-49-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAxCAYAAABznEEcAAAFB0lEQVRoQ+1YX2gcZRCf2U1ylzbJXgiWWE0p4Xp3oFgtSqW0ShF8UUHU2peKNZS+JHuxRQUFtdgHpT5ocrFoRVoEaSGiID4UqljbBw0BRYL27pLaaC0mheN2L2m8pLc7zm7urpdL3L3901bKXR5y3M7Mb34z883Mtwi3wAdvAQ5QJ/F/yWI9E/VM+BiBejn5GExPpuqZ8BQ+H5XrmfAxmJ5M1TPhKXw+Ktcz4WMwPZmqZ8JT+HxU9pyJiDy7UYDCc+zTdkJYh0SrCHHO/A84ywC/AdDXea3xs8nDLVM++l425ZpEpD+3VdD1o3w3DNfqGAGcJLFpT/q9VZdq1alFzjGJ9bspGGxThgHw8VoAVpLRCd9MJ6S33OpX6zkiEevNRUDUfmICqysNEdEYl06igHhaoLZp45nQNNOk5/V1okhPsrzMQKElOgCjGknbJhI475VMzSRi8dwWAv0sKwhlUIIJTcBd4wPSiJ0jUTnbg4Afcvk1lmSJ4LIG0gYmkrPTt3peE4lo35W1gFd/R4RAhbG3k4Oh15yAh2VqE1H9nkHvvUaExlIdoU1wAAtObFXK1kCCMBpXR1jwAUORo0c60DPjifYv3IGyPVk9zgHZWSYCdDA12P6GO3tcrHaKkT5lpyDAiQrAHgY8aqdn/ZwwFld/YJnNRblCvtDQ5bYFW5M4QEI0o1xExLVFsFNcQo96I7CoHdk3dwcWFs6XS5To02Si/Xk3ti1JRPtn70Eq/GKWEYDOf+HUUOiCG6CVdKJx5V124KVF+zQznwutmTyGeaf2rUnIysscqUOLZ4HOphLtDzkFsJKPvZhdTzqeNzqecdZIwM3pAWnUKYYFCfNAf8sC200SOuzhLHziFMBSnss1llHP8cmMGHK6jr3pIemwU4xlJLgNBgIdQFcmQQi2qhcYoNOIElLDxuRQy5hTADv5WDw7xP2ldzHb8HkqEdphp1P9vEzizn3UvFpTpnkgtTo1cr3kuYQv8gzptpshZRJheeY2ETTuREsGmukfRyjPvwevl7P/Zdcxie69JDUG1OmVSNxo5yvwppN5qQuO4FUrH5acCeM8GMLGmZjPQFAEdZxJrTEPHXHnmG/7ORyo2J3s2VWuKcukJzpgNpJRDwoI5vrCkf8qNRV6KtwJ5oIpNgOlDuGMHYxld4rJyneA+LCXzmHtAE/uCgy3HdB6TsTV1xHI3Pt52I2mBiVeE5C/+vMplvCUcd6MYco3wgd9nhMA0T7lfhTAHD4mCDVsSidazAnuxydaMUzZ3kI+J0m+T2zYQWKsU/3LmBXFmh3jmr0PhlHzSqLYDf8sdT0O0nBqMPSsG7u2W2wsruxlwx+VjOs6vJoeCr3jBuyajrENKGd4Jm0t/lZALRA+90HzH27s2pKAqtXABCF6gTfOY24AWfnG3ycMR41FDTRML71a4vupRNt+Jwc9+gq1Ql45yRnYUg4AQTrZId1lN5WtAmafiaJ2NJ7lRRC/qbxj80p1SUfh6Vru2DE5u5v1j9y0O3YpCsaLMoTCj9UriPG2g6tkQEM4LTZLl7V/YIF1Aigq3YIuPMEltH/Z2w7eizQI3e31JYHhW82ZKBFZLAn1S1Z8xN2ZMLVOJP+WdvnR5VyRKDm+QVYfE1H/mONwuwMyIxpify3l58Cm80xUG4/IuW0CUA/PQn4Xi12lWxoizbFshgh/5XI7taA3Hnf7IsCOkONysjN4M57/C/In5UH85hvnAAAAAElFTkSuQmCC");
  pstrimg("\u2715-29-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAdCAYAAABWk2cPAAABsElEQVRIS2NkGADAOAB2MoxaStNQH2HBu0pbm+2r9J9VjH/+Fifsu3OXnLBd5aLE/5WRdTHr779ZMQfuPMFnBuNMXyku9p+8xxkYGPWACn8x/PmjRarFEDP4rgL1KzD8//+D5fdfVXwWMy5yUZL7x8h2F5h5WKCuI8liFAuhBjD9+2cbt+fWEVy+BSek+W5qGoz/Gc8zMDJykGIxNguBPvVP2H1zE97ghUmSajG5FoLsQ8kyxFpMiYUYlhIT1JRaiNVSXBaz/mFUE2T//eLVX5Yb4FQKA0TEIXr84iyRsAQ1Ztogw0KcPsWTuBAWk2khQUtBCha5atj/Y2Q4gOLN/wztCbtvVJFTchG0FJpoTgEVaqNZQFIBQnScYk2lqLrJthhrQsJmISPDP69////cYWRgu0ZukQlzM4alhPLhIhdVzX+MzJcosRjFUkIWwlxKqcVwS4m1kBoWgy0l1UJKLWYE1/hMrLcZGRhFySnayAlqaCXOehNel5JR0qBbzMj4zzx+5y1Q/sYKwMG7wElFmYGZ+QqQGU6oAsZlENhiJuYL/xj+eybturkPX2k1IE1QAFkDMi0NMr+SAAAAAElFTkSuQmCC");
  pstrimg("\u29BB-37-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAEEElEQVRYR+2WW2gUVxjHzzdZTY2RRET7YLFFk8wIEtsXwRYlYnZEKtWiBvGS3RW1iOKDkAex7UNbQcSCIlpaL7srjdKEUkRQ3Iwxgr55wQfN7BovkAdpUdp4iWF1z+l/xp3J7M7sZrJB8WH3ZbM53/ed3/l//3Mh9h5+6D1kYmUov10pK1VWyq8CfuPKnior5VcBv3FlT5WkVFSVNxJnlWEt+YtVoKN5Zs0LaXwrCbGRMZqD2zJgjAkmnpGg64zEX5Sh9tBF/YmVEwvKXyGuMZxI/uQXxBlnty/arKwlibWbg4JvD3WljsSCyi4itsdPYRTaO6FG/3bwP2UxgC6YOZy1hTV9v598T6gTqvK5xNjVwgWEzgQdA/FdwVglpJpORK0A+KxQDnGxIqQlz5QMZSR6gglxjURmS0jru+lV/GRz/WwuST+jtUutcbSWA3pNpCvZOVogIz5n93WsZhUvBuR/idGk4QnYjkhCP1SseEytX8hYxWVHziBLD02J9DwcGjNUNCh/h5b84CoEj4W7Uoe9JoAXm+DFS+4xsR9GbxsTVLTpk1oa90E/tKtmaBlE3G0b1txtfFskkTrinCQfSAgOj9FKKL0cCa8rJJqx4ULvo9GC2e2LqfIOgBw0CkicL2jVUldckzrA8sdwZGwIdSV/jy+WG0UF3TI3sRA/wlfflwSF3URxVe7A1yoUuF1Vo89t6WQZo5h7cr5ZMOqFIlesySwgEwRFsMDLUGsBoO5PrE02WLX8wplKOQvhl8sLhX0DgqxCOW1V5TZA7ROC3ZlYqzeWDBUPKt3wUJMXlDGh13FBjK8JJVJ/5CtgH8RCDAUCmQ/Xn+976lclI85WyoKCoQ/B0PBX7sfzDOM8FNZSJ4tBVb0KTG3puf28JCjbBx5QxdoHZTdh6x9/O+3LGh3+yjn4vHYZYh44je4EMzdNUPkTPfg6f9P4VWv4SGiWI0yiE6bxOd8S0VJHXQo52uVW741iUbVBISb1vtlA3lYYCc6GOre0rvKfTMA46Caj2hOQ7WSSFLcLePjHdY5hMVjYl9bhyTKvlXB3372RIPLHc+6+mEOt3EC3b6zxQn7DpXwqkkiuGy2QvfusxOx59TdWOtVR7JtwQv+tWHG8u1TnlYTYdBVPT2vR7g+MGcpr1VhxP3G+NaTdPQdZwZ37iQbrPyWSfoW/5zlHvA5Vv4B2++JL5EVCUHehRFwZAwg+je8bEtFL7L5ZIFyP+LpCOaWCDUOpyjJMctacIGvqWLBhG67nA9a7vPhKxYGP08m2/nHKF5xYjxlb5MlTrFaO0XEpr+Kcxkc0/ZSV1DH/owmD1dUr8Ht19ulbg78H0NYpeB7fwf/aK9P89Nqe1GMrx1CdC5oz0uOwoMJ++/wu4/4HQsLbNdenTkYAAAAASUVORK5CYII=");
  pstrimg("\u29BB-49-160-70-40", "data:image/png;base64,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");
  pstrimg("\u29BB-40-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAFC0lEQVRYR+1XbWhbZRQ+594uHeu0ZVpcVzedZrnRsi+mIkOhY0nKhPkB2h9O2tyCG8M5QfTPYLNuoiDMr+pQp0tjtYyKCiribrpaixNZteiPziTtutbh5hhDq7b0I/cez5smNzc3adYmCgNzKSS97/s+53mf55zzvkG4wh+8wvlBkWChDhUVLCpYqAKFri/mYFHBQhUodH0xB/9fCr61ddmi0omr7/KHwpp950GPcz2g7CPAtQS0WIwj4CUg6EfZ6DlzLPp9M4BhXddW51pLeuz3hs6hX/JV0szBjpoax1h17CsOupHB9vi18AsCNOhR7iMJ3+SvS3MGIYgB0fbhzkhQED3ic2+UAE7wuwkJ4dYGLXImH5Imwfe8ym0GYq8JQvQaS7SKddpiBWb1/gLCs4gk8Wclz7kmbZxghN8dRIKX+LNkZoye82uRvQURFIsDPqWJFXw3GxARvYq63uLvGjydbuMtVTEyHkHC51OEUjN4XZs/FGlkJahgggKg1evaByg9m1ISYjQ9sVztHv4tV4BEigzyBpcn5xHBAOezki+5mTy3PLxFbPUp3yTy0BxBAx5v7Ay/nougKAjdwO8AcaFJEOiiDH+sbNAujOWjXgbBgMf9MErwQVYwgqdYjYPZxgLeVesQ5N5ZLD6ghiL7CiYoLBqv1kcYaClnS8wxbVRNleBWkPCIxe4MknZyIufKKiLq2Khynp2o5LVTqMOyxuPhS/mQNC0224KoOTBaVC26O56THmUnkzyUAjee9GvRl+NFZVeO6P3GUKRB5ByvU83NEexn9Z8piCBX8NO84xeFegt0dG7r+lmoGX8ySJKxC8n4lrDkpGmrhZxY01Fbs3jMETvHmFdxa2pXtci2f4Ugg12EqckVXLUTVsBMJa3VlVIuVSCAQa+7izdQy7YP3TgdUTZ1czOf5xO3OF69XuVzRLyHW8OpsorwmvoPQbdjZeuTvPYwnzo7srWSgM/9Nr9/NBfm5fiaBFO7nZ1gcLOyhmT8yQrKBHerWrgle3Ure3nT+4WCXDiubJueE8F4widyUFhc9mvJ9fX9/VPWxRlHYRpLY5c/FH3DRlz01K85B+8u2OKZikzsFsggXV/ddHzwVDKgnZxIer639KKE8WqOP1w4VpIibYJepY8b9zq2+GOu4gfzOVHMNtPqdfs4oY/FY3Ev4+baIL5nXiLgk2EO1sw3lmzVnSQ5W9u6nKX2cZPgF1ucpRd0+Wy8uXKrkSVcYcSMyrScoxS5JBCr9AQhvmJVsjEUPWTaKxyJ6bc3dQ32zZecmJ92Fqc1VztaFnKzkWRLRxDhhsR4z7AW3iQUL5hgx0Mgj4+6wwzktIF9xEHqcwXJUFKkCqvHfxvU0MCP+ZDLUFC8CHjdft59IGUZxCYX/lm+47Nz47mCJG5CI+nXLRrlXK7Il1wGwWCd6w4ypBMZtxJxnUd4bNGU3F7f3f+3PWDA47wTpZJ3+H1NBhlbdc+XrJmDbXU3O3VaMJAEYHsi/H1J4kZiwaWT/M8PfN0Xilazkffb7oBsK/+QQlxtYhnGdrUzeni+5NIUbK91XTvpwCFxuHOAeCup2gCyY4mrGVHaMydwgm6SQVW/DA8nc1LkIdvvbdIiXXPCsE1Kq+L2zSuvm5RLd5aVhw9Yj6UOz03lY+h4gCffy1avZ4xyrtTzgOTmH0d9TOBTgOmjamjIdEDEmekKxmm/NtCTD7msRZIv0H+17h+m8FVHdetXXQAAAABJRU5ErkJggg==");
  pstrimg("\u29B5-40-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAESklEQVRYR+1XX2hbZRQ/594k7bJoN7dZHaKls0mq+AfKHBZhHSapKHvQSUEYLnFTu7fNIfgyKPgyYagvMqcbiRnKaEFEUDHpIKwgA7c3K7lxbt2wnYpz4txMbnu/s/Pdm5a03uTe5Pqwh3wvCeSc3/l9v3O+c04QbvODtzk/aBP0mqG2gm0FvSrg1b9dg20FvSrg1b9dg20F7RRID/XcowQ6hwlgEAg2EJIu7ZDwD0QxBYYyuetU8apX9UzMZkDS8d4+AP/7iPisox/RuAGwf3dem3O0bWDgiiArhZ8kwvsAlHdtsGaI4DdE6Obfev77O+1J5rTjrZJ0JDjGrHoSka+Y4zNLQYjOAooDwdnAmZHpaTO98hzdvjEYKIeG2IVVBlbbOkR04lJeSzKWaJZoQ4KWcpGvl8gRLHC4Hcm89mWjQNIvkwjvRVA+qLnUMfZ79X8lmI5HRrnejlRlKPvmjb6dhfO/uA2Sfjq8GRXlO650n6WkeC6VL/GF3Z+6Cn42FF6v+5WLDB7il7qgkL7p5ckLl91DW5bZeHSrQCiYBAFugl5elyrMlN3i1CWYjkX2oYLvmcBCvJaaLH3sFnSlXToR/YgDmeklEC+lcqWTbrFsCVq1F/2eQQY4L79X/tTue/0czLsFXWmXjfXeLzDws0w1v/jPk/niixyYwzgfW4LjQw+HbvqNKzK9/ALfSeW1t5yh6ltUH9sZvvcTzV54ieDRAfCHuvo3Gj79XwJ1gEAxixkJRleRfrKsYEcrJBEDagWuV1QKHTLTLOsZ6MkFn3FJrSgBIfQbXJN/1cM2CVZTOsFfd7RCwpMP0XFuP3scCWbi0R+4uT7kKVgrzm4IStxsLPyUQLxLIawIhTZzct824/FMJRTHkJRVTvE5E/ZlIOA6qHAQAQeJewLPkwNc37MsSIAMKqVOleSDtD22j4S3lTXo7+BHgp08nd5I5kpmu/FyMvHIEcYblb1w9ay6tnZENsK1JThmzt+oxo4P8iu+0DOvRbYV5Jhr7WQT3asNWHOFFbyDEU7P5IrbOIaruVy3UWcSUbm57LcekXiem+sXrdEDWDYyBbyZnCwedotVl2A21tcvFPXHah2WfT6je+c35/92C7xoZzVpv2aVC+iklx/gtvKrW5yG20ztiOLHcpYnymAzE2U81tt1Q/H/xKndYBJqUj3p0pCg3O86KnfK7WWtpSRcRQGDvM6XnBRIx/seR1CnzGXDOtPBruJjIxPAi7b747iwnhjuv3eBhFYtcBOZnQ5xmMN2/zukvUHiIFvtraExE9TVR0YK0/+4p2ZZOhKURmaqMPAt960tywJw2gnwNCJd4/52N19iK0M+utwGCsE5ddhtW1l5AVcEF50yichuIPxwcQFtqIbcvpGS/H/k02ZVq7VviqB0lEtF57rwC0TKK6zaFt64u6qA1/hzjh/TFC+oE5dzWmHMZa9rdIGmCXpRoxXfW9jUlTgupNTWAAAAAElFTkSuQmCC");
  pstrimg("\u29B5-20-200-200-200", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAABrElEQVQ4T+2Uv0vDQBTHm1YhHayi4CQoWkQaBJ3aEhSyOXTQxcnN2UUFB9FJBxEFF/8AdxeLgyAEBdPawUVFEUo3S/2BHVQcbOrnIAnVJqlgRw8ed7n7vs97914SKdDkITWZF/gH/r2ivjXM5XJKpVIZCIVCb4wTTdM+G4V0BWYymWVJkhZx7qgBVFmfsT8Zj8efvcB1QGBpnFI4VBlXzBdYJ3vjzO3YO5ZKJBK6G/QbMJvNbiISmZUBzJDJYa2THYxAj5FIpF9RlNefUAdYKBTkUqlURNwWDAZjwO7cMiDoKftj6LaTyeSCJxChxuExdsB1prxqZBhGlOxvsUt0o3VAXddbwuHwNQeD1qGo3YdfN4HJNdpdMp2z9ZIAyrJssNGLsJvZxPJYqw+0TwRFX2beA7jkAO2FfRWezxGoja7spXOaYmV6T9QuxNPUZ98NSqdv0AyR2QqB1zybIg4QzyPesq69DnTVdqBpPayPsBiwPLCoW8C6FxvHHYSiyBKOL8wiI5G1aJrQF/kcR1RVffgVUIj4hidM09xgOWxBROefAKfJetanWc3/wX4BoDuoFapZTDgAAAAASUVORK5CYII=");
  pstrimg("\u2AA2-60-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEsklEQVRoQ+2ZXWhbZRjHn+c9J3X9mHWbgqI4mG1OeyPKVNCruqYt88IbtYjajyDTi9qxD2bXql2ZVOzmVze2uaHtkvqBsyh6UbUNGgXRikOF6dKmzKIX3ggFUbRJznl8TtaKSd9zkkGbnJydXBWak7y/5/+8/+f/vkG4zF54mfGCB+x2xT2FPYVdVgGvpV0m6AocT2FPYZdVwGtplwnqmZbX0l5Lu6wCXku7TFDPpb2W9lraZRXwWtplgtq79GiT9gwi7gZDb+uIxCdYfnJbATJaerRZ24eAh5YgF8iAJyo3xN5pfRd0t4DbAV9kJEgB0l5KLJ4KRuf/KXXwDODTAS0IAkdkUASsN8GAT9WHH/lo7o9SBV/h0uHAlht19PXxXn7cGopeUVAcavvk/G+lBm45lt5q8F+d8Ik9/HNbrw1UmAQcCH4cmy8V8Jxz+I3tNVemUuoOBnqe4VVpuxNNsOI97ZPnzzkdPCfwMsDJreBbt9HfQYBHAXGdFIzoWyK9OxiZ+9qp4BnA4SbtNgPwKyB6jFKLb8tcmQczhgLaA2xuwwx1rYXBzQAY3Z2T8YjTZnnmWGr0346K+ObiNCIDCYcUgUdl5mSCn27UWhj8CCLUWii6AAbsmI/E3h/gCjhB9Qzgkea6uwTAl9kLI96jgvSnOyJz38kWvfTcEf7fVnmrm7McuiqqY68XO8RktrQ5koTvHKet9XJzgrgAo+fnqdkPZIqNNtXeAiAGeaTdYwVOSH2VCfVEa/THP4uhuNS0Rpq1bYLwBVblVruF+xT9pCyEjLXcVJMy1H4Gb7MKMeZ2KUsaLz0Unf29kOC2Lp1TsfRehxBQYjA4dSGevfCxlvrrdDKe5O2+ywbqlDASg+2RC78UAjyvsfTmtvrNCcXotUtfRDCtAPS0TcW+yHbmM4Et1X+hbydvlX7rWQ7vAST2ywq3moXIC3j5C0ONdZtIoYeB8EWrhfN7F1j3gYrqmWPZBnXmzhvK/15f1crFec0GfJpdv6tzMnZ2NUGXP+uSgM3wUbbJfx+SGLMENk9XAIc3J2P9d0fTf//3MlObnlTbCeFlm4KdFaB3tU/Gp4sGnM7VZeY+xKesF0ExJOqTObj5/KJP8JaAPVbPm6OvEPHUVmFz7yYVGmA1Om1Ax4kMNq3499nvye95KOgBRAqc0525bTmJHbwiSSdkYyUcqK03hDjIHXG/jaLDqhBDhT5iZgAvjZFPeaF1dsGj/KrZD2WJKdTiv4MMMcQd0WA1f4t9iZBXtGTXHUdDf846WppBBdi5kZOW5GV2BNE+SC2+WuxrIsvDQ/ouC4xny5JwXNa25uEhHNDuZcc9xqDXW7QuHx5ob8WGmXCxM7R0LJnHQx1hQgB1l1fPjssWmR5NG/0PIojj3LpVFq37Kxq420mnpEuew+nQUFn1KIf/w1YXABwofgLUdznxHJw3cPqKR1d2cro6YBM2okSpXiffdOQEHtlecw2m1P1OCAurmbhWzOF8wgI77hgo2F9Kt5VShUON2s2k4A9OCwtrpvDo/+60lr/ELb84SBXOAHZQWFgzhdOXcQSfm9e0TgoLawb8WQOoDVHg7OG+34VzjqXVrKqTPutfCFgJWxrbsDQAAAAASUVORK5CYII=");
  pstrimg("\u2AA1-60-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEu0lEQVRoQ+1ZXWgcVRQ+5+52bdPSgvFBRRBqM03oi1J8ECwUk01aRbCoKRTys1WKbSVUQU3sj2naFKugCfUvkRCb1D6kIuJDNbsJBPqi4IMUYtdNWv8e9EHxRTTuzt7jmd2MSWfnTqc/d7Odzjxm79w53/m+e853bhBusQdvMbwQAg464yHDIcMBy0Ao6YARWgInZDhkOGAZCCUdMELDohVKOpR0wDIQSjpghIZVOpR0KOmAZSCUdMAIrewq/VHcqCcQQ3xbnkwk07t0JH/JJU0AOBI3niAU7zHAOy2QBPJEIpnpCBTggY2wbHl17Q4ieIcZXbUYXKAADzx+d9Vtc6t3M8DXGWjUjUVOwv5EKn3spmb49GbjjmwM97GC96uAENFoVJg9LeMXZ3WAtfbUfoZHm+ruypM8yJ+yWHV9GGh/VIjjLeMXftUF1N5XG+Dh+NoaxGUsS3zKVbZAEokOoxTvtk2m/9ANVBvg4XjN/QCiFxEfdacTTGb0JTD//SAx9eNcuYDecMDD9cYmjIi3eeONChB/spxeWLEmfar5DOSda6yqHas2nkQSHyLJbW0TmQkdybguSVs9lM3CVma0DxFqFNL9hTtrx0/JzOfdANK55mR9bbUUtAcBD9lVm0g+lkhlzlYM4ALQRmO7xYazh9pBcmv5DkF2tKcyk26BjzTU1OVRdLH0W5y/VwzgsYfuWfHPylXPENKbgLhccUanBOY7W5MzX5cAsRJVv74JBR7jRD2gYDCLeXqwbfL780vG8Kmt61ab+UgHEL7mYRY+RWEeah+fnXYGOv9+O7/f66GIGVb8PlbEF3zOWER6Hs8zPN9DX2Zi2DAon0Ehs72tE5d+dq74+JG6e3MR2clqeE75NoFSEToguwIuBBqlHv5gq7qH4vFYTr61Yyrzu3PNSIPxsERxhNncrAraclUAuSOJ1CVmtnzPZYCHG41arpbcWnCLEqiE56vM6Gjz1PRfi9fMTz18vhno/NRTeoaLZoNy2UHuwb+VD+bCly4DXKicQgww6E1qCdIrKHHI6Y6KLaq2C4EOqgoaWe6KLWZVNnLambBygXeV9GjTfetMih7l4LZ7SHKA/e9hp/+1ezOCOOpRiXlb6ougeKMc/nkxBj9Fy9P4A9EYQe6A21ks+unYAVUtKAZCnwDmu92quw7WfTktP6MdB/4lG4auRGrmW2egYw1r1/yNsWd5DbOu7t9EZldiYvYrHUDtPX0Bthf7Gd6Z8W9I0ouJycy50qJVtKJecudzblnRRr7iSesAflWA/wduXc/cbrQR4AllgSLwNBJWgZQi0ukmd77i2caAP6sYwHYgVoE62bD+aRDYr2pF/HeekuTuH5KZM92q4SFCO5Ggx05exXhpZcW2bh4bjS2SRL9qamKzaHLV3kvZuRG3OXihuuMg9+r2ihwP3RJQcFlC9PFv7nMxA+fh49WV2ej7S9GLr+kM+zlbV7r5KJgQUttTP9+4ljXaANvB+DUxhGbvzuRFrtB6H+2AF4Bf+fbSy8TcqDSUDbAdsB8Tg1LGb5qi5ZcJLxNT8W3JL0i3dYX/MTlMTKABl5gYxCFC2VKRTut6mPV6d2zDhljz9HRWx/5lL1o6QFzNnv8BwSQAWzEqrCQAAAAASUVORK5CYII=");
  pstrimg("RB-0-160-70-40", "data:image/png;base64,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");
  pstrimg("RS-0-160-70-40", "data:image/png;base64,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");
  pstrimg("s-0-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA00lEQVQ4T2NkoAAwUqCXYVQziaHH+J+BgXGhm3oTkKqB6P1/ionhg1PcrpdfCZkF1Kjh8////9Vs/34p/Pz7/ycjK0cy27+fS6L23n9JUPMCV3VrBkbGI0CFa////7eR6R/Ttvi9N94S0giSB8fzIhdVzf9MzGH//v8PZmRk1GVk/Gcev/PWKUIGMC5w0QhmZPj3MX7PrT2rtLXZvkr/eQL0d1rirlsbCGt21YgE2r8MofD/jp9vb/qln2X4TVAzTMEqFyV+EDtsz72PhDTB5ClK2wBK+UoQDDaZ4QAAAABJRU5ErkJggg==");
  pstrimg("\u25B7-34-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAACpklEQVRYR9WXO2gUURSGz5nVFZR9aaWFBjE7a6OFnY0YoyC6FhKwEtHGqLubxSJgtzY2IgkzBiWKoJVooQaLKEF8oa0gyMy6WCmCJOysJCTLPo5nHivxEeexd0Kc+s783/3vP/+cQVghF64QDvgfQAh7i8bOj6Opd8vh2pKOpAvGPglgighHdTV+HgApTCBXEEucoNKE6N6KuvZzWDDeQCwWaPPiM5qSHA8DxhWEgF4j4TeO9VHLHIInej2RhXFsiARyBWHlO5qaOpHO1c5KEo05R8UQkf2aGnshCsYVhI/knq4kj5mCmWK1B9rA4rjZdkdckH2B2LsnlPO1a4hwWmSQA4DYOOm80c83P2agNSKCHBjEhJGHKQbztYcM0+e487QJiSMVFet+s9MVSEdMzleLiDjSTZCFgJgAWwu13ii0p4IGWRhIt0EWDPKXIHMjcoYG3Ro5FJCfQV4wJhFwt5cghwbiN8ihg1ju5OY2ATY+mZ3jZOmipqRKi1/xZQDhJi4YI3xEQ1YvA32hdqS/fDWuLRvI9nPzWyhSf86CPTYEXNe/JnJwH1u/F15ojsiF6knulJsswIMeNAkwqyuJyaUaVzxIiSR5xuDax6zlAtGrFiQPc+1//1ftCwWRh2Z3IDXesBPrbAgY1tXkZS/fHWEgmYJxgQUvOVmYblFkT0WNffACYa7pGmRbnuKrsPaMn7XLEb2rrU8chxI2vUJ0DcLj40EJ6RFvZ7U5k/CrOVBWUg/8AHTWBnTk1ymNA/meopG+8pX4dBCIQI7Y3bDwsvO550j+0ZJBYHw5YnYDN+QtS4hoFtqRA9pY/G0QYd+FxnV4Q9uQGMzMGBOAeMjphgm9nhwQ+W/j6ghvfY7FuYxwoz0kS6c0JX5bhAuLn+EBxFke8v/vD7wTojKLumqxAAAAAElFTkSuQmCC");
  pstrimg("\u25B7-32-100-150-250", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACsElEQVRYR82Xy2sTURTGz5nJTBaCLqRdWMWiggsRioKrLEp1UZ/gphTRQJNg00mV9h+QZOdOoU0ikowhiAhWQaSropiVghsf4AMrCBUXRS0UEbxJ5ngmmYEoTSaZB3VWN4SZ7zff+c65dxA2+cJN1of/FyCRF5eB6EdBC98O0qWNHSBCBlgBwAECuFOcUs4DIi/9v9oCxPNiGQH3WJLfDFAiuoYf/EboBPCOAfbbgvz6hIiZwpSS8ROiowNcgt2ANAQEVxnmZEOY4IUUUoZvTuIvP0A6l4BwsGbQUOlS+E0iK6KEoPMNMrtRR5LGCqnQA68QjgB1mQ7eSobfmkLRedquYrXCzXugaYb3gPYEYL9tIieu8XrGDiijHOV2fe3GDVcAphB3yREwYAkRtnoJqGsAEyKdJmmlTyxyd4y6DagngJaSXGQXci0BHeeALnRTEl8ATKHYHO1ASVTYjX1WQO/yBD3nNEF9A2gXUEOCY3pSfdXODd8BGm5kqxEE4mw4BzQQADugX/qrS7wesQL6UkFlJK/hWqsbgQHYIvHc74c8xs9Yv9eWV5X+p2ms2f8HChDPihtchslGKIm+1mV1uJTEj4E7EM3TgEqiwpvZ3qY4lIqaEtuoI3x3gMf0XzMBSDpbTIUeBd8FfIri8bzI9T7ey1T0xYGJeXFIluAJC2/rdV/wDMApz/BbX7F3RqfB828pXANcKNOW8E8+GwAcbo5euv9pVR1vbbHA9oJ4tnYa0FhgerV5OoJYIaWWuxH07ACnXOeHTDSDRu8FqZHyNH53I27e41gC+0zY6G1DPOde3mmJXS9o6qxb4a4moXkqlmVlV61WPcUTLd/Y7wnWueNG9WnlmVdxZwf4w4TD9ZlTPmhNtMfrfcqJe2Mo/BDvCsAaKoaBMKNr6pxfwvZz/gDYEN4wwpuZxgAAAABJRU5ErkJggg==");
  pstrimg("\u25B7-42-170-250-250", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAC70lEQVRYR+2YMWgUQRSGZy7sbEDEQlDRwkaIlaAQSGFjEUMwIhLci1gERYgeaCFioQSJRQgKgYDaWASNRS4nBtHCpDJgLAQtr7CwUiwFbbKzxz7/yc2GdcHc7u3MnhEP9tjjbt777s3733uznG2RF98inOw/qOmd+nciWpXyPaLTUyK6eMZ1a6YjldZey4gqUPyoFwaJGKuWhTib1rjJ32UBbfol+hwKMTjC+SeTIK1sZQdtWmwAeNJz3dutHJj6PgtoFVu/Hwv6Iuf4vIpUOGoKZjM76UGJaoigh5y9j0WXYLRrPRMY+w6hVSC0eZvAmUEVzLyUvYBbZJzv03DWhdYWaBS5Bd9/CdihjUhaFFouUAW4IOVlbP89GNqmgRtENFV23XGTqZAbVMG8INruB8EKbg/bEpoR0AjOptCMgmqh9UFoz0wLzThoTGivAHsiLjTcn0SJq7eTu9ZAFUxNykrI2F0TQrMKGhPaW9wfyiM066AxoT2As7F2O1phoOs1Nwj6WRjOtiO0QkFjQlsC7PEsQusIqI7uNXSwO2mF1jHQjdz1/a+c870xoc1idLyQLGEdBUUnewyAc5HAMIx/o1LpfNlxlv4K0OdEuxpSriBPD8bydBnNYOBPzaDwiNaC4EZINAHH3QoKk9catn7Cc5ypzTpWoaCYX5Nqr+OgeDrNQbEQUF0/n2Cr9+ioqRPBHEQzmrbvWweFYKbh5GqiI41lfZhhDVQN02tB8AYOjuTp8dFaK6CI4igMz8DJDu0o9/HEOCjOUOrY7OFq2saBD+9tz6HGI6pr4yoEcyASDCAXURuH0wrGenmqBsE4oG7GauMPOL0OVT8yAals5N56bPUy7PTHgD64jnPsFOc/TUHmAlW1EdPPHP7pbt1hQtw/9IS4YhIwV44mj8VqmAjxxGREiI82IDNFFJ3kabfjVJK1EZCvIZhBW4DZI8rYOyzqwbVTb7UaJm5hmJi2DZkpor/BENW7hBgY5vxLEZDKxy8l2BVJxbylyAAAAABJRU5ErkJggg==");
  pstrimg("\u25B7-34-200-200-200", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAACX0lEQVRYR82XP2gTURzHe1EhRMwawcWhCBJFXJrEUKR0EBEpNAUH0eBWCu3i0kGHqot26dCOTXTSxSUWWrpEsOaPOCjBRWgztENSERwKAWNy/Tz8BUIk8u7uXcjBjwuXy/t+8n3f93t31siQHNaQcIwMP0g+nz8ZCoVmY7HY6iBc6+tIqVR6CsAjaqfRaExw/PETSAdE6f+ybTudSCRyfsHogih9WOzXwNz1A0YHZB+AI8uyLgrNbrvdvpZMJg9NAumAfInH41fJzBuE74h4G7AnBHnJFIwOyDdALilBYGZwJwPEGQEwFmRHIEpcLetgMPgRmDGBMRJkxyCdqSgWi8/4vAjQCRNBdg2igAqFwuVAIKCW9HkB3ON8nak8cJodTyBd7rzFmWkvQTYCIkG+R5DX3AbZGIjXIBsF8RJkX0A6QWaaNqlzOkH2DcRpkH0HUUD0nJuc3knPUZe2WeI3upe47yDSid8DkVTCsoEuAJIdGAh7UwqxDBUWiE/hcHgyGo0e9TY83xxhOl7iwn0ElYbarZfZrRf7dVzjINVqNViv178ieEFE94G4DYS61vcwCsJUzKG0Qp0SxRxZmPofQOc7YyBAbDDoLclCg81wHhfWdSDUPZ5ByuXyFVbCFmOdFYgKEBNA/NSF8AyCCy8Y5CEV+Lsy7VUerhecAHiamt6nNAB+4EIKFz64gXDliOoNCGe7tvt/uqQbGEcZkd6QFqEmQI+ZiuduhHt/owPyORKJjNdqtQoujMoA31ut1rjJdxsdkCbiv6nTKpDUK3rDAxMudI+hA9K538hrQ78/cAzNXH8yn5AwawAAAABJRU5ErkJggg==");
  pstrimg("\u25B7-34-160-70-40", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAACuUlEQVRYR83XTWjTYBgH8OfN7FqmEwUPKojDzbYieNODXjpcUxGc4KEKQ/uhsAniRQS9jCkiCF5EPMikH3Qo4seEHXRpN8WLMJgXDyZVp70Iih/oQbp2yeOTpIUxujVN34wGCoUmeX593//75A2DFjlYizig9SEIwFLBHT2x7NyH1Ri1ZUckedC7l7UJMwja5aiUv0Enks25oy6kUnpWgPLhU9Kn705RrEL08Vigz4loTn7iBKY+BGGcFN+AsSEdgIiZrrIS731FMI5HfQjgzaikXEz1+cIgsIdGbcSipqoH4tMf3/Ky1IVQWG/HpPx5vWAmtGuLipilr7sND8cgNwQxiwNLB/0j1IGGeQa5YUh1KtIh7z7UhCkCreMRZNsQHXT3yNaO9vnOBAN2vJKdsflfSnxwFsqNZqcpSLVYSvQN0IyNNRNkLhAdkBC7twngem43yNwgzQaZK6RWkBFQYxoL1+vIjkCqQXYXOx9QR+63EmTHII0G2XGIDrof8G4quYTPRs8xwqSdi2bzdxYvccchRicW/Zeo6HWzMMquBeHQwPT7wqpBkoGuzazdPUmWPZVVdaUgyVdHALSlDc+xEUn3+Y4iY49pOtZQ0RJTIRCZkt8s13G5Q8yHom+UVstpYxQQnpY8f08OTnz9t1Lb5wrJhLp7VHTNUMGNRlEN49GcklwJUP2NGyQd9J5BJoxWRqEAbRCIvZC/WEHo5zQN0Z/A7uL6cbqTaCLw1toNyoXwI1CtIpqGJET/fgGR9iTMo+9JmIBiZFJ52QigqampsUt73aGV+sO5uT92ELZGxOwNnhxdbOxba3VJO5iGMmL0BoE9MwHwk5Zmbywnv7NTeOk1dSFU8VpEUoZpw5ygQEZNBN7bXlbO8ny3sQCB3/TPfzAGO/VAIoNjMUme4DEKi+9hBVI939H33/9XXscy9LnZLwAAAABJRU5ErkJggg==");
  pstrimg("+1-11-145-145-145", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAYAAAB7/H1+AAAA9ElEQVQ4T2NkoBFgpJG5DCQZPGXKFOE/f/48BjqmuqCgoB+fo1AMhmo8z8zMbJ+bm3sfWePEiRMXAfmxILH///+XAA3uJdrg6dOni/369esZExOTIdDgy2gGGwMNlASKrWBkZGzIz8/vIcngnz9/PgW62AjdYKhLGSdNmvQSyO4iaHBPT48IKysrKNw4sLjgL9D1qrBgAbqYeINBhvX19UkDNTEBLQDRR4Be9QJG0lWQWHFxMchSMCDZYJhGUBjjCgpgELADg4gVaOE9oAUzgT5pycvL+4krnFFSBTRYbgE1GeNLFVDXfwCqk8BlOEnpmJTMBAAla4IMyct2rQAAAABJRU5ErkJggg==");
  pstrimg("\u00D72-11-145-145-145", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAALCAYAAAB7/H1+AAABcUlEQVQ4T2NkoBFgJMXcadOmCf79+1eGiYnpfnZ29hd8eokyeOrUqTy/f/++w8jIKA417D+QrsrPz+/AZTjY4Pnz53N8/fpVLicn5xZM4eTJkxWBLnsNcllvb68sMzPzTqDBRUALzrCwsKwEsu3///8vXVBQ8BKb4WCDJ0yYUAek6oEK7QoLC4/29/drAg29COQvAGpMQ9c4adIkl3///u0EWmaQm5t7GafBIImJEyfOBlKJQMMqgXQLEG8DGhqITRNQ7WGguPr79++lGhoa/uA1GGr4BiDtD8RngeFngk0D0HdrgeIBMN/hDWOoobFAehHIpUBNHqDIAbq4E6YR6DImQUHBC0C+FjB8TfPy8s7jMhQkDg5joNdygdQkoIEZQMNmAvkgV4Nc3wV0eXlfX580MMxvAg3kAIq5AvETIJsLGMZ3cSU7sMEgjUBFGkBD9sJcATTcBqj5HdBl14DsMKD4SiwuLAXq6SEYxvi8RqocAEzykAzrrZetAAAAAElFTkSuQmCC");
  pstrimg(" I -25-160-70-40-5", "data:image/png;base64,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");
  pstrimg("GenSlots-0-120-120-120", "data:image/png;base64,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");
  pstrimg("CellIdxBlockSz-0-120-120-120", "data:image/png;base64,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");
  pstrimg("\u29BB-37-40-110-240", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAAEB0lEQVRYR+1XXYwTZRS9d3aRJbvstCuQNcGQIJlpoiEajC/w4BMBYoyECDwYgUgkkbZmAUlUfroSjZEAS9tVQ6IGosTw4A8JSkLCA+FRE9EHO90HUX6iEbbTsppV6Hc5s91pp+20O9sNyT50+jLt/e75zpx77p2vTLPw4lnIidqkglalrVRbqaAKBF3X9lRbqaAKBF3X9lRLSplxe68Id2VT+jsugLG7sIDvFuMk/BLelEsgrebERGicWLIkdPa/4pzhqx/2/OnmRGK5rbhfkUmFY0GJeNeVy2fG8nFmOV4KymAmGRo0Y/YQM8eDAAvRZ1af/qpxK79B0+jLSeKHrVRob5B8f1Lx/Bom+b4RgJDcIOIvWORXYe6CUo8y02Y81dKGOSKvWKnwpy2TchJNf2IjRe7YPnJ8/iU/cDNqP42yDoPgM24chCEc7YRKH02XkLO+uvtelA6zPz+GDbrKG5AcspLhA83AzWjhedbUt541/xfG9fDNE/zvjElF4rk0eO6sB3I8Fk74bWBEcy9oGn9dFxM5BaNvmRGpZbE7CzuoeA0qzQXQiFK03zVsCZgTmaQ+6N2klpBSsgv5G9AcK1E/hc8yKx36bbrEPN2XOwSwfQ5AUfi5kZR+rl6FCrHamIgMwNRDKOVKlPLyJJET6OIdLZISjsTyF+GwZzEO/sj0hR6jBN9zwHzK85YivqKRnKsYu0Ro4ntCtMiofQXKPoFvf2X69MUuVlByk0qBVNz+eQLIxwsNfYNdXIW8G2IIHwbwHsSuWQ+HlrZMCkA/MfFyP1LOhn7jAopFs0l9uFaB8iAWujvWyf3Xj+mjQVWacG9psbBLCgY9YyVDm2pBjGh+rabJd97fFcnubDJ8tBmp8Q5ZdHUobLdEyi2fH6lm5UOXvplNh95/IOWrGJ2qBp9flwlrWa/Rq4lNqH4JVlhV2zRB1fKMBPsNzJgPStWktzOp0Ht1c8hTrvoZVVIMiq8Awg8lGH8rTEWuTGrxgMzrKdp/w2bdMPuYYjqoER9xAfz8U1dWPAxee+vc4cmq88lMuueXqUjUxqvefTiqVNTyrPTzjRtu4rcLGJyrp0vI032TqRh85qhtww/zXTCUYB+68d1m4EbU3lT9SqJ7ao72SPZI760Zk/J9aqHbinkgm+z9HKV1jiRVl/F6YZWm1CcYLoY34DdUgxIsl8+I59bDQ181TBTBMYTPI/4jfOPcG0heDzL9jXJaJVYhFcu/rLGcdDZwTY2jTEKI97vn8mZPCglPW+P6VrPrzjom9U1pbeMjTzOsKqNHYvYOkJhrpfSkm/T4a9JT7CxsE1IbMfgNnOO78efiH8R7odLv2PgMqYc+ttLdN8vmh+oAfmqqw2EjYrPyf999YlbfNdwuL6EAAAAASUVORK5CYII=");
  pstrimg("filled-11-100-100-100", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAALCAYAAADLA1tMAAACNUlEQVRIS+2W30tTYRjHe7e5s2Y2KUnoRkIYEV0JgheKQtEP6EKhgTgvtrMfhLK6FrzyVgTvhLmNQXWj0byICEKkoC60f6CL6S5UcIrgYq2xX32e6EA3kxNCJ8XBl/Psfd/neZ/n+/w4R104//1iQP3mQYXD4VHkzmq1upJOp3OyHovFtGKx+NjhcGQ0TasZcjwe/26Wv1AodKfRaGylUqlNszpWnBMiFM6+VUo9EAfq9fos8jO73X6pUqm088yz1k0w3wz5L4IS2/voTqGzaEWAZu9UPp/vosfjOcLZ/mQyuR6NRjuoih4cf498uVar5SHmps1mOzTkRCKxZfICqbQctqex/dykjiXHxNF33HwfHIDdcrkcdTqdc9lsdsjr9bY2I0LX9YeQk0FHA1Wq5h7krQUCARettMzaIyMi9sbZe2lJhCYvVZFIpJeMfQY+Mv+VZxe6GYhoa0YE51o4J2dHyPQK5T/B2jyVdA0SUqzfBQOgAlmfsPf0v68Iyt8jWcfpG2RtV4Ybjr85jgj2x8EM+ACEFJk1fdi5xRz5wn8dW0syf05NaxhEyByQ3jdDBIFOSJbRGQSaEAGOSqVSzu1277E3hq1XZ54IArwCJPOTlPyC3+9vc7lck4VCIcHg/cjeNrNmmFduD/Iq0CHmhcl2teSYalIRr2mNq8cNS2bLE4hY+MPrPK1xmwq5zlzYkJY5VcPyhPSrYDDYId8YfIT9MGxBbgtvik6qYIe1xgnv+CfqPwFxIIUbY3B7DQAAAABJRU5ErkJggg==");
  pstrimg("hit\u22C5rate-11-100-100-100", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFgAAAALCAYAAAD7j0ptAAADHklEQVRYR+2XTUiTYRzAe/c9qw1SCazQSEo75KUuHaIIwcI+Dq6DMpxzWh3s1qEPOiRYUKesy/wYbN0GSSVIXULJokuf0KlMoQKbOZ3tU7f1+8uMtXZYouAbDR7e53n+H8/z/z3/5/++U9b9/60qAaWjo8MYDocbdDrdgNvtjuSuZrfb1/t8vvCq7uIfdq60tLSUarXab6lUakd/f/9YdqzZsng8PmU2mweQN/b29k6uBBOXy3UOP1b8da6Ev7XoQ2lvb7cmk0kBvNXj8QRyNqm0trYe5QCeBIPBtNVqDaFblkdvWbEB+DaG5QA+tiwHKjBaBAzcyXQ6PaQoynH2rKF/ra+v72JTU5PFZDKNhEKhOuB6kdUi+85TT9uDzkTugQBtCJ3XzNfQ9kvG41cyX2zkd1+j0dgWFhZqeL5AF7EiJeguoM9yoBcYd4kisg/0DzH/WQUs824xG/AwwZxHq57WCYAtBoMhCvwpxjuRlRDwM9pJwHyZmZl55/f7U06ns5n6PUj9Fj3J+Lfo7qZ/nTaB7gg21bFYbNRoNBbTf8n8TQ7nCocxwLiYNU7r9fof3I4j2HZjU42/sYy8Ct1q4a1GyH+UCDK6iECDBFpFoNNSPrL7ANlOrf4qwdpsNq3FYgmi19jT0zOYASxZfQkoPtGRl2gkErmKDwfDDbQifPiRn+IwuhmX05ebI4fzHL19yB8xNtGv4FmG/40An1c1YIHIVfy0VJMLAZwnYIH0G2Cy8B56tfirJ+ufciC3GG8TqOjeob+ZfoMARvc9z2luzxmgllD749hNAvejGuHKnn9lcCGAM7XayVV/EAgEopSIZE7guYBl/AqdOSAeaGtr20t2DtKGMxl8g3XtlKLKaDRqBqhkeRfyg8hHHQ5HBeXHPjs725VnLVUwLxiwZDewPJmrniK6SpnLBUwWjgPo8lKJwKYOm6GMXgqZlJzH2DZTv3eRqW+QGZl/iM0J9N3IXVl+hwF8WLWA/zYNALAJGPPU4blCbanVBr6hS71er9Tu3JeVfIuX8OknL8lFmbwH+POjSyQSMcAmCl1nLer9BBiL6xsfzJcsAAAAAElFTkSuQmCC");
  pstrimg("diamstop-0-0-0-0", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAbCAYAAAA3d3w1AAACqklEQVRYR+2XS6iNURTHfzdFMTCRR8qNgceMgbwmcl0mXmUkI4/C1MCbXPeSa2YiKTKglPKeCCVFHgOmMlJIHnlk4q1/rV273T7fXufeT31uvvo6dc7ee+3f/q/13+t0MESfjiHKxX+wf03ZdhUbDvy0t9Gs7YCNAq4BL4B1wI8mk3nBAtRCgznTdDgPmKCuAIuAecAE4ALQaLgS2EjgagR13xRbBVxsMlwVWA5qK/AKOAcMFG40oPeTvX+lVFuBBajZQDfwANgJHLJdrDG4lcAlh3IjgNXA2YTiOnAM0OfXOglzYDmoXcDBJHCAWwFcroCbBhwFltr8G8AtoMsOTV+fBHqB53XBpWCCkgJzgcXAQ2A30NciYAluJvDY5u4AjifpNxZQem+3MeOAN3XAxWA5qD12klWxAtxyc8/glsNMSSmldL5ZschaU1zKbawTLIZSijwC9gIHnEFycCeAO4CU6i+soxqU++oApgNPnXFbDpNiOah9QE+biwe4ZbZJGc4cYBbwxLFWMCK5rWp2UI/AJplCH20jn624Q5fhDaD62QL89k4ojPMoXamYfpwB3DZXWmJ9oFLDC3faamMy8KxJYDm479b0luBiqLvAOzuQ9cBhYAFwzwErF9ZVUFsqxjFT5QQX+sTc3lKo13ZNvAXmAwKVlR9xgMkRdRjemqxcMndBe+FyUHJUKaZHbdN5czqv3Z8CNjgOoTikVUuVwn2LmmEtWoIKgeMLerPNi1snwW+KroNarF7Bq5rgHJy6kpeRUSjVlH6xUulpKiX3R+2T6u4DMDVSR7W1zXktFNUqgeUM5QvwC5hi9SMo/U97X4iWtk7x8Fyr5dp81aDS/7Ec3Jg2odL4ncBEU762pjcN4gGL4aTQeEs/j1KDPvmBLuAFS+EaDaXN/gGxq70c/LobSgAAAABJRU5ErkJggg==");
  pstrimg("diamstop-0-140-140-140", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAbCAYAAAA3d3w1AAADyUlEQVRYR+3XT2gcVRwH8O9vZpewQlYPKjVSsB6ExggKVVt6FD14EKvgP0RbPOxBTBvmPZJDkVjaEvLe7NpFD0FBrfgXFPx3UQRPKq2iiK3SS4y2ILVi2A12s5nZn7wwU6aT2ZnZMsJa3OPOb36/+ezvvTe/JVymH7pMXfgf9l/r7EAdq9frlVartTY7O+sNOzQ3rNFoXOV53k8Azlar1W21Wm1tmHG5YCGKiDYZDDP/MOy4TFiAOkFEYwB2AdgCoD7suFTY3NzclbZtnzQoZr5fSvmB6ZhSah8RNYYZ1xeWhNJavwRgUQhx+FJxzWbzGs/zri2VSmcnJyf/+Lf2aSIsRAHYZFnWLsdxPlRKvU5Ejwd7bL+U8pDWei+A57M6t7CwcEWr1XKI6EAM8hsz62q1+nKtVvu7SOQGWB/UG0T0WLQwM6/jlFKTRHSkH8513e3M/C6AzcH9Z5j5cyK6C8D1wXfHmPkpKeWPReEughlUqVQ6wczXATB76iOt9ZsAHk0qmIXTWt8N4NOgy0dHRkZEdPk1Go0bPM97kYjuNTG2bW+Zmpr6pQjcBViz2ax2u92TUZRS6i0ieiStUIjTWj8DoBl2DkC53W7/bDpFRHscx3m1Xx6t9bMAngNwTAhxZ2GwGOo+KeUnWuu3ATycp0gSzrKsg2YJMvNRKeWTaXnMHmy326fM0iSiHY7jfJ2nbloMJaGUUu8Q0UODJA9xrus+zcwvMPM5IroawD1CiM+ycoUHEYB9QogjWfFZ16ler9/s+/73ALrlcvnGsbGxc0tLS6fDKSMrQeT6l0KInVprHuCevqF5Op3aMXNxfn5+JxF9AaBdLpe39nq9Nd/3zbSxPkLl+Hy7srKyvVKp3Grb9vEc8ZkhhcCScMy8aobeHLgLKMuyviKiDoAJZj5ARE8AeFAI8X6WxHXd3cz8SmFLMVow3rkAF86JSc92EQrAeSK6RQixpLV+AMB7AF4TQuzOgimljhPRtrx7Mivfhhf0ALgNKN/3J2ZmZn41Rc3o1O12vwtOulzHPTN/I6W8Peuh81xPHKniuE6n0wmH4SBpKiosHH1BA2iMjo7uj45OAV4BWH8dFHXUr+fqp0/CmakEwO/hQWH2lFl+0U7F8wVLshkZnz4G8CeArQDuCOLPANiT57WQp1upsKQDZXl5+a/x8XF/cXHxthDV6/XGp6enT6cVjI9O0Vhz+sVHrbwPn3ncpwXEO7e6urp5EFQ8t1JqgohuYuZTRQ698TqZ/6BjnTsPoGKWX55OFfHLX2qOXLA4bthR5nn/AbgwWDqmp2DXAAAAAElFTkSuQmCC");
  pstrimg("diamstop-0-190-210-190", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAbCAYAAAA3d3w1AAADwUlEQVRYR+2XwYsbVRzHv98ppnbXLt10PelBqKuy2yQrLO0eRJh5Uev+AXosahWsoBcLLVYUtUWs4EFUsFAU6UFv4sGqmRfoQRZPZna13d2iPbQUrNalkM2mG+cnb5Is2UkyM6kRYnGOeS+/3/vM9/f7ve8Qt+jDW5QL/4P915TtSbHiQvGO7Wvbq9PT0+uDDpoY7Ozy2Ttrq7UlACtrQ2sPzI7PVgcZLhHYBhSxI4ARXBx0uFiwAKpSWwQwSvKAL/69BA8POlwkWHGxOCZVMeU3CuIZJ+OcMoLpkj4O4sggw3UF6wSlPf2lgXFyzks3C+f+6N5F8m4RuaSm1OV/q087grVA7RDI0yqrPtGe/gbAo42DvO9knRfdefctCl+JU25ueW5ktbJ6HMALrSAC+QPAR8Pbhk/MjM9c7ydkG1gnKNdzvyX4SChxHc5z3yR4tBucXtCPiS+nCe6szx25RuEPQtlDMB38JrJkwdpv5+y5fsFtAjNQftVfJDhK4VN2zv5Ue/o7APkuCSPh9Lx+AoLPG5P0jIgcaC2/wkJhwvrLOgVir9njW/5kfnf+537AbYAVzhV2cp1LIagCABWTKIDTnn4DwKtN5dJIby1Xyr8YpUTkkMqpd7vF0fP6AwgOGuVUTt3fN7BWKKHsVxn1mS5pF4STMEkbnEDeIfkhBGecnPN4VBzTg+VK+degNC3sc3Y7pp//0cNOUG7J1STtHiPXy7Lkvk7yNQBlAMMgnnQyzhdxsZqDSCjHVEYdjdsft05d0nuF8j2AWspKjV+ZvHJ5zBv7HU2XERehsS6QcyqrJrSnJeFforclUDoqQNBj2tOzAvkKgkpqS2qiKtWq5Vvne4C7MHJjZGLl9pWHLN/SAwPWCU62SiUwvfHKbUDRpxk26xasKRF5D8Q+gTynsupkHKxbcl8meaJvpdiaMKxcANfwiV0OtgmK4A2CD9pZ+7zruc8S/FggX6usmk0AtkRyPGlPxsVru6B7gGuD8n0/l5/KG28JY51gwTOTrodxv6xy6r64QydZ72ipwnC122qrG2a4HjUSqpl40wUNnB7aNnSw1To14E8SrF8HfRr1JlRXE9wJruFKrjUHhekpU36tSoXfpilJAG837ROAOYH8CcEukoE6gc0in09yLSRRKxKs00CpDdd+u3rP1fX0T+mHm1Dcwow9aV+IShi2Tpv2CtqsVtLDx477qA1tVwGqu3qBCsculoozPv2MJdZ8P01vOE/sF3SrcqbsBJIKpl8Cpfrx5m82RiKwMNygQ5nz/g35FWg6IUTS+gAAAABJRU5ErkJggg==");
}

function init1() {
  titlefd = Math.floor(titlefds/3);
  titlefdt = performance.now();
  titlecd = performance.now();
  msgcd1 = performance.now();
  msgcd2 = performance.now();
  stmsgcd = performance.now();
  acccd = performance.now();
  dspdiv();
}

function dspdiv(n) {
  var i, j;
  divv = false;
  if (n) {
    i = 0;
    j = -1;
    while (i < divl.length) {
      if (j > -1) {
        divl[j] = divl[i];
        divl[i] = n;
        j++;
      } else if (Math.abs(divl[i]) === n) {
        if (divl[i] < 0) {
          dive[Math.abs(divl[i])-1].style.animation = "showdiv 0.5s ease-in forwards";
          divl[i] = 0 - divl[i];
          j = i;
        } else {
          dive[Math.abs(divl[i])-1].style.animation = "hidediv 0.5s ease-in forwards";
          divl[i] = 0 - divl[i];
          break;
        }
      }
      i++;
    }
  }
  for (i = 0; i < divl.length; i++) {
    dive[Math.abs(divl[i])-1].style.zIndex = "" + (201 + i);
    if (divl[i] < 0 && (!n || 0 - divl[i] !== n)) {
      dive[Math.abs(divl[i])-1].style.visibility = "hidden";
      dive[Math.abs(divl[i])-1].style.opacity = "0";
    }
    if (divl[i] > 0) {
      divv = true;
      if (!n || divl[i] !== n) {
        dive[Math.abs(divl[i])-1].style.visibility = "visible";
        dive[Math.abs(divl[i])-1].style.opacity = "0.8";
      }
    }
  }
  if (divv && dhlpql > 0)  {
    canvas3.style.zIndex = "300";
    i = 0;
    while (i < dhlpql) {
      if (!dhlpq[i][8]) {
        dhlpq[i][8] = true;
      }
      i++;
    }
  } else {
    canvas3.style.zIndex = "100";
    i = 0;
    while (i < dhlpql) {
      if (dhlpq[i][8]) {
        dhlpq[i][8] = false;
      }
      i++;
    }
  }
}

function addel() {
  window.addWheelListener(canvas3, function(e) {
    var e2, x, y;
    e.preventDefault();
    if (swzmsw) {
      swzmsw = false;
      if (swzmf) {
        swzmf = false;
        swzmcd2 = performance.now();
      }
    }
    lastcc = 0;
    scalem = false;
    posm = false;
    e2 = window.normalizeWheel(e);
    x = cellX(posx);
    y = cellY(posy);
    scale -= e2.spinY;
    if (scale < 0) {
      scale = 0;
    }
    if (scale > 100) {
      scale = 100;
    }
    calcCellsz();
    posx = x * (cellsz+(cellsz>grb?1:cellsz/grb));
    posy = y * (cellsz+(cellsz>grb?1:cellsz/grb));
  });
  canvas3.addEventListener("touchstart", function(e) {
    if (e.touches.length === 1) {
      handleMouseDown({pageX: e.touches[0].pageX, pageY: e.touches[0].pageY});
    }
    e.preventDefault();
  }, false);
  canvas3.addEventListener("mousedown", function(e) {
    handleMouseDown({pageX: e.pageX, pageY: e.pageY});
    e.preventDefault();
  }, false);
  function handleMouseDown(e) {
    var x, y, f = false, p, i, f2;
    lastcc = 0;
    f2 = false;
    x = 0;
    while (x < fbutt.length && !(e.pageX > fbutt[x][0] + 2 && e.pageX < fbutt[x][0]+fbutt[x][2]+6 && e.pageY > fbutt[x][1] && e.pageY < fbutt[x][1]+fbutt[x][3]+6)) {
      x++;
    }
    if (x < fbutt.length) {
      f2 = true;
      if (!fbutt[x][4]) {
        fbutt[x][6] = performance.now();
        fbutt[x][7](fbutt[x]);
      }
      fbutt[x][4] = true;
    }
    if (!f2) {
      x = 1;
      while (x < 9 && !(e.pageX > 63 + 29 * x - 2 && e.pageX < 63 + 29 * x - 2 + 20 && e.pageY > cheight - 67 && e.pageY < cheight - 42)) {
        x++;
      }
      if (x < 9) {
        f2 = true;
        if (cruleim && crulem === 0) {
          crulebn = cruleb;
          if (dhlpn > 0) {
            dhlpn = 3;
          }
        } else {
          if (crulem === 0) {
            crulebn = cruleb;
            crulesn = crules;
            if (dhlpn > 0) {
              dhlpn = 3;
            }
          }
          crulem2 = crulem;
          crulem = 1;
        }
        p = -1;
        for (i = 0; i < crulebn.length; i++) {
          if (crulebn.charCodeAt(i) > 48+x) {
            break;
          } else {
            p = i;
          }
        }
        if (p === -1 || crulebn.charCodeAt(p) !== 48+x) {
          crulebn = crulebn.substring(0,p+1) + String.fromCharCode(48+x) + crulebn.substring(p+1);
        } else if (p >= 0) {
          crulebn = crulebn.substring(0,p) + crulebn.substring(p+1);
        }
        if (cruleim && crulem === 0) {
          cruleb = crulebn;
        }
      }
    }
    if (!f2) {
      x = 0;
      while (x < 9 && !(e.pageX > 63 + 29 * x - 2 && e.pageX < 63 + 29 * x - 2 + 20 && e.pageY > cheight - 35 && e.pageY < cheight - 10)) {
        x++;
      }
      if (x < 9) {
        f2 = true;
        if (cruleim && crulem === 0) {
          crulesn = crules;
          if (dhlpn > 0) {
            dhlpn = 3;
          }
        } else {
          if (crulem === 0) {
            crulebn = cruleb;
            crulesn = crules;
            if (dhlpn > 0) {
              dhlpn = 3;
            }
          }
          crulem2 = crulem;
          crulem = 2;
        }
        p = -1;
        for (i = 0; i < crulesn.length; i++) {
          if (crulesn.charCodeAt(i) > 48+x) {
            break;
          } else {
            p = i;
          }
        }
        if (p === -1 || crulesn.charCodeAt(p) !== 48+x) {
          crulesn = crulesn.substring(0,p+1) + String.fromCharCode(48+x) + crulesn.substring(p+1);
        } else if (p >= 0) {
          crulesn = crulesn.substring(0,p) + crulesn.substring(p+1);
        }
        if (cruleim && crulem === 0) {
          crules = crulesn;
        }
      }
    }
    if (!f2) {
      if ((swzmf || swzmcd2) && e.pageX > sclx-sclr && e.pageX < sclx+sclr+4 && e.pageY > scly-sclr && e.pageY < scly+sclr+5) {
        if (!scl) {
          posm = false;
          scalem = false;
          diffx = e.pageX;
          diffy = e.pageY;
          scld = e.pageY - scly;
          sclpx = cellX(posx);
          sclpy = cellY(posy);
        }
        scl = true;
        swzmsw = false;
      } else if (e.pageX > spdx-spdr && e.pageX < spdx+spdr+4 && e.pageY > spdy-spdr && e.pageY < spdy+spdr+5) {
        if (!spd) {
          diffx = e.pageX;
          diffy = e.pageY;
          spdd = e.pageY - spdy;
        }
        spd = true;
      } else if (e.pageX > colrx-colrr && e.pageX < colrx+colrr+4 && e.pageY > colry-colrr && e.pageY < colry+colrr+5) {
        if (!colr) {
          diffx = e.pageX;
          diffy = e.pageY;
          colrd = e.pageY - colry;
        }
        colr = true;
      } else if (e.pageX > csizx-colrr && e.pageX < csizx+csizr+4 && e.pageY > csizy-csizr && e.pageY < csizy+csizr+5) {
        if (!csiz) {
          diffx = e.pageX;
          diffy = e.pageY;
          csizd = e.pageY - csizy;
        }
        csiz = true;
      } else if ((swzmf || swzmcd2) && e.pageX > sclbx && e.pageX < sclbx+sclbw+6 && e.pageY > sclby && e.pageY < sclby+sclbh+3) {
        posm = false;
        scalem = false;
        sclpx = cellX(posx);
        sclpy = cellY(posy);
        scale = 100*(e.pageY-sclby)/sclbh;
        calcCellsz();
        posx = sclpx * (cellsz+(cellsz>grb?1:cellsz/grb));
        posy = sclpy * (cellsz+(cellsz>grb?1:cellsz/grb));
        swzmsw = false;
      } else if (e.pageX > spdbx && e.pageX < spdbx+spdbw && e.pageY > spdby && e.pageY < spdby+spdbh+3) {
        speed = 100 - 100*(e.pageY-spdby)/spdbh;
      } else if (e.pageX > colrbx && e.pageX < colrbx+colrbw && e.pageY > colrby && e.pageY < colrby+colrbh+3) {
        colrs = 100 - 100*(e.pageY-colrby)/colrbh;
      } else if (e.pageX > csizbx && e.pageX < csizbx+csizbw && e.pageY > csizby && e.pageY < csizby+csizbh+3) {
        csize = 100 - 100*(e.pageY-csizby)/csizbh;
      } else if (e.pageX > runtx && e.pageX < runtx+runtw && e.pageY > runty && e.pageY < runty+runth) {
        if (!runt) {
          swrun();
        }
        runt = true;
      } else if (!ddiamcd && ddiamx > 0 && e.pageX > ddiamx && e.pageX < ddiamx+ddiamw && e.pageY > ddiamy && e.pageY < ddiamy+ddiamh) {
        if (hist[histh][0][histi][3][1] + (hupdc > 0 ? 1:0) > 0) {
          if (revert()) {
            ddiamcd2 = performance.now();
          }
        }
      } else if (e.pageX > dsppostx && e.pageX < dsppostx+dsppostw && e.pageY > dspposty && e.pageY < dspposty+dspposth) {
        if (!dsppost) {
          posmx = posmy = 0;
          posm = true;
          posml = [];
          posmcd = performance.now();
          dspposcd = performance.now();
        }
        dsppost = true;
      } else if (crulem !== 0 && e.pageX > rbcbx && e.pageX < rbcbx+rbcbw && e.pageY > rbcby && e.pageY < rbcby+rbcbh) {
        crulebn = "";
      } else if (crulem !== 0 && e.pageX > rbcsx && e.pageX < rbcsx+rbcsw && e.pageY > rbcsy && e.pageY < rbcsy+rbcsh) {
        crulesn = "";
      } else if (crulem === 0 && e.pageX > 5 && e.pageX < rbcbx && e.pageY > rbcby - 20 && e.pageY < rbcsy) {
        crulebn = cruleb;
        crulesn = crules;
        if (dhlpn > 0) {
          dhlpn = 3;
        }
        crulem2 = crulem;
        crulem = 1;
      } else if ((crulem !== 0 || cruleim) && e.pageX > cruleimx && e.pageX < cruleimx+cruleimw && e.pageY > cruleimy && e.pageY < cruleimy+cruleimh) {
        cruleim = !cruleim;
        if (crulem === 0 && !cruleim) {
          cruleimcd = performance.now();
        }
      } else if (crulem !== 0 && e.pageX > cruleb1x && e.pageX < cruleb1x+cruleb1w && e.pageY > cruleb1y && e.pageY < cruleb1y+cruleb1h) {
        crulebut(1);
      } else if (crulem !== 0 && e.pageX > cruleb2x && e.pageX < cruleb2x+cruleb2w && e.pageY > cruleb2y && e.pageY < cruleb2y+cruleb2h) {
        crulebut(2);
      } else if (e.pageX > htgentx && e.pageX < htgentx+htgentw && e.pageY > htgenty && e.pageY < htgenty+htgenth) {
        if (!htgent) {
          if (htgen2 < 0) {
            if (histp > 0) {
              x = prevHist(histh, histi);
              rclHist0_2();
              y = rlHist(histh, histi, histp);
              rclHist1_2();
              httot2 = hist[y[2][0]][0][y[2][1]][14] + Math.ceil(histp/hist[x[0]][0][x[1]][11][0]) * hist[x[0]][0][x[1]][16];
            } else {
              httot2 = hist[histh][0][histi][14];
            }
            htgen2 = gennum;
          } else {
            htgen2 = -1;
          }
          htgencd = performance.now();
        }
        htgent = true;
      } else if (e.pageX > dsppxctx && e.pageX < dsppxctx+dsppxctw && e.pageY > dsppxcty && e.pageY < dsppxcty+dsppxcth) {
        if (!dsppxct) {
          posm = false;
          x = cellX(posx);
          y = cellY(posy);
          calcICellsz();
          calcCellsz();
          posx = x * (cellsz+(cellsz>grb?1:cellsz/grb));
          posy = y * (cellsz+(cellsz>grb?1:cellsz/grb));
          dsppxccd = performance.now();
        }
        dsppxct = true;
      } else if (!genbbl && e.pageX > ngenbx && e.pageX < ngenbx+ngenbw && e.pageY > ngenby && e.pageY < ngenby+ngenbh) {
        if (!ngenb) {
          if (nextGen() && stpga) {
            stpgcd2 = performance.now();
            stpgsf = false;
          }
          ngencd = performance.now();
          ngencd5 = performance.now();
        }
        ngenb = true;
      } else if (!genbbl && histgp > 0 && e.pageX > pgenbx && e.pageX < pgenbx+pgenbw && e.pageY > pgenby && e.pageY < pgenby+pgenbh) {
        if (!pgenb) {
          if (prevGen() && stpga) {
            stpgcd2 = performance.now();
            stpgsf = false;
          }
          pgencd = performance.now();
          pgencd5 = performance.now();
        }
        pgenb = true;
      } else if (
          histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1]
          && (ngenfx > 0 && e.pageX > ngenfx && e.pageX < ngenfx+ngenfw && e.pageY > ngenfy && e.pageY < ngenfy+ngenfh
              || (f = osctrw > 0 && e.pageX > osctrx && e.pageX < osctrx+osctrw && e.pageY > osctry && e.pageY < osctry+osctrh))) {
        swffwn(f);
      } else if (
          histgp > 0 && (histgn === 0 || hupdc === 0)
          && (e.pageX > pgenfx && e.pageX < pgenfx+pgenfw && e.pageY > pgenfy && e.pageY < pgenfy+pgenfh
              || (f = osctlw > 0 && e.pageX > osctlx && e.pageX < osctlx+osctlw && e.pageY > osctly && e.pageY < osctly+osctlh))) {
        swffwp(f);
      } else if (stpga && !stpge && e.pageX > stpgdx && e.pageX < stpgdx+stpgdw && e.pageY > stpgdy && e.pageY < stpgdy+stpgdh) {
        if (ffw !== 0 && ffwstp) {
          ffw = 0;
          ffwstp = false;
          genbbl = false;
        } else if ((x = stpgnm === 0 ? stpgn : stpgnc + stpgn * stpgnm) === gennum) {
          ffw = 0;
          ffwstp = false;
          stpgcd2 = performance.now();
          stpgsf = false;
          if (stpgnm !== 0) {
            stpgnc = gennum;
          }
          genbbl = false;
        } else if (
                x > gennum && histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1]
              || x < gennum && histgp > 0 && (histgn === 0 || hupdc === 0)) {
          if (run) {
            swrun();
          }
          if (x > gennum) {
            ffw = 1;
            ffwm = 0;
            swffwn(false);
          } else {
            ffw = -1;
            ffwm = 0;
            swffwp(false);
          }
          ffwstp = true;
          genbbl = true;
        }
      } else if ((cruleb !== histcr[0] || crules !== histcr[1]) && e.pageX > orulex && e.pageX < orulex+orulew && e.pageY > oruley && e.pageY < oruley+oruleh) {
        cruleb = histcr[0];
        crules = histcr[1];
        hlcrcd2 = performance.now();
        hlcrcd = null;
        hlcrcd3 = null;
        hlcrcd4 = null;
      } else if (e.pageX > swzmtx && e.pageX < swzmtx+swzmtw && e.pageY > swzmty && e.pageY < swzmty+swzmth) {
        if (!swzmt) {
          swzmf = !swzmf;
          x = performance.now();
          if (swzmcd2) {
            swzmcd2 = x-swzmcd2>swzmcdn2?x:x-swzmcdn2*(1-(x-swzmcd2)/swzmcdn2);
          } else {
            swzmcd2 = x;
          }
          swzmcd = performance.now();
        }
        swzmt = true;
        swzmsw = false;
      } else if (ffw !== 0 && !ffwsbcd && e.pageX > captx && e.pageX < captx+captw && e.pageY > captyffw && e.pageY < captyffw+capth) {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      } else if (histgn > 0 && ffw === 0 && e.pageX > captx && e.pageX < captx+captw && e.pageY > capty && e.pageY < capty+capth) {
        capHist();
        capcd = performance.now();
      } else if ((stpge || stpga) && e.pageX > stpgssx && e.pageX < stpgssx+stpgssw && e.pageY > stpgssy && e.pageY < stpgssy+stpgssh) {
        if (stpge) {
          stpgn2 = -1;
        } else {
          if (ffw !== 0 && ffwstp) {
            ffw = 0;
            ffwstp = false;
            genbbl = false;
          }
          stpgn2 = -2;
        }
        stpge = false;
        stpga = false;
        stpgax = false;
        x = performance.now();
        if (!stpgcd || (x - stpgcd) > stpgcdn) {
          stpgcd = x;
        } else {
          stpgcd = x - (stpgcdn - (x - stpgcd));
        }
        stpgcd2 = null;
        stpgsf = false;
      } else if (stpge && stpgn > 0 && e.pageX > stpgssx2 && e.pageX < stpgssx2+stpgssw2 && e.pageY > stpgssy2 && e.pageY < stpgssy2+stpgssh2) {
        if (stpgnm !== 0) {
          stpgnc = gennum;
        }
        stpge = false;
        stpga = true;
        stpgax = true;
        x = performance.now();
        if (!stpgcd || (x - stpgcd) > stpgcdn) {
          stpgcd = x;
        } else {
          stpgcd = x - (stpgcdn - (x - stpgcd));
        }
        stpgcd2 = null;
        stpgsf = false;
        if (ffw !== 0 && ffwstp) {
          ffw = 0;
          ffwstp = false;
          genbbl = false;
        }
      } else if (e.pageX > hpnl1x && e.pageX < hpnl1x+hpnl1w && e.pageY > hpnl1y && e.pageY < hpnl1y+hpnl1h) {
        histinc(1);
        hpnlcd = performance.now();
      } else if (e.pageX > hpnl2x && e.pageX < hpnl2x+hpnl1w && e.pageY > hpnl2y && e.pageY < hpnl2y+hpnl2h) {
        histinc(2);
        hpnlcd = performance.now();
      } else if (e.pageX > hpnl3x && e.pageX < hpnl3x+hpnl3w && e.pageY > hpnl3y && e.pageY < hpnl3y+hpnl3h) {
        histrst();
      } else if (e.pageX > fpnl1x && e.pageX < fpnl1x+fpnl1w && e.pageY > fpnl1y && e.pageY < fpnl1y+fpnl1h) {
        if (cidxb[cidxbi][0].length < 7) {
          fcidxinc();
          fpnlcd = performance.now();
        }
      } else if (e.pageX > fpnl2x && e.pageX < fpnl2x+fpnl1w && e.pageY > fpnl2y && e.pageY < fpnl2y+fpnl2h) {
        fcidxrst();
        fpnlcd = performance.now();
      } else if (dwrld && cellsn > 0 && wrldw > wrldm && wrldh > wrldm && wrldax > 0 - wrldaw && wrldax < cwidth && wrlday > 0 - wrldah && wrlday < cheight && e.pageX >= wrldax && e.pageX < wrldax+wrldaw && e.pageY > wrlday && e.pageY < wrlday+wrldah) {
        if (!wrlda) {
          posm = false;
          scalem = false;
          posx2 = posx;
          posy2 = posy;
          diffx = e.pageX;
          diffy = e.pageY;
          wrldcd = performance.now();
        }
      } else if (!mdown && (!dwrld || cellsn === 0 || (e.pageX < wrldx || e.pageX > wrldx + wrldw) && (e.pageY < wrldy || e.pageY > wrldy + wrldh))) {
        posm = false;
        scalem = false;
        toncd = performance.now();
        ton = false;
        curx = e.pageX;
        cury = e.pageY;
        posx2 = posx;
        posy2 = posy;
        diffx = e.pageX;
        diffy = e.pageY;
        mdown = true;
        trkwdx2 = trkwdx;
        trkwdy2 = trkwdy;
      }
    }
  }
  canvas3.addEventListener("touchend", function(e) {
    if (e.touches.length === 0) {
      handleMouseUp();
    }
    e.preventDefault();
  }, false);
  canvas3.addEventListener("mouseup", function(e) {
    handleMouseUp();
    e.preventDefault();
  }, false);
  function handleMouseUp() {
    var x;
    scl = false;
    spd = false;
    colr = false;
    csiz = false;
    runt = false;
    dsppost = false;
    htgent = false;
    dsppxct = false;
    ngenb = false;
    ngen = false;
    pgenb = false;
    pgen = false;
    mdown = false;
    wrlda = false;
    wrldcd = null;
    swzmt = false;
    toncd = null;
    ton = false;
    for (x = 0; x < fbutt.length; x++) {
      fbutt[x][4] = false;
    }
  }
  canvas3.addEventListener("touchmove", function(e) {
    if (e.touches.length === 1) {
      peMsMove(e.touches[0].pageX, e.touches[0].pageY);
    }
    e.preventDefault();
  }, false);
  canvas3.addEventListener("mousemove", function(e) {
    peMsMove(e.pageX, e.pageY);
    e.preventDefault();
  }, false);
  canvas3.addEventListener("dblclick", function(e) {
    var x, y, f2;
    lastcc = 0;
    if ((!((swzmf || swzmcd2) && e.pageX > sclx-sclr && e.pageX < sclx+sclr+4 && e.pageY > scly-sclr && e.pageY < scly+sclr+5))
        && (!((swzmf || swzmcd2) && e.pageX > sclbx && e.pageX < sclbx+sclbw && e.pageY > sclby && e.pageY < sclby+sclbh+3))
        && (!(e.pageX > spdx-spdr && e.pageX < spdx+spdr+4 && e.pageY > spdy-spdr && e.pageY < spdy+spdr+5))
        && (!(e.pageX > spdbx && e.pageX < spdbx+spdbw && e.pageY > spdby && e.pageY < spdby+spdbh+3))
        && (!(e.pageX > colrx-colrr && e.pageX < colrx+colrr+4 && e.pageY > colry-colrr && e.pageY < colry+colrr+5))
        && (!(e.pageX > colrbx && e.pageX < colrbx+colrbw && e.pageY > colrby && e.pageY < colrby+colrbh+3))
        && (!(e.pageX > csizx-csizr && e.pageX < csizx+csizr+4 && e.pageY > csizy-csizr && e.pageY < csizy+csizr+5))
        && (!(e.pageX > csizbx && e.pageX < csizbx+csizbw && e.pageY > csizby && e.pageY < csizby+csizbh+3))
        && (!(e.pageX > runtx && e.pageX < runtx+runtw && e.pageY > runty && e.pageY < runty+runth))
        && (!(e.pageX > dsppostx && e.pageX < dsppostx+dsppostw && e.pageY > dspposty && e.pageY < dspposty+dspposth))
        && (!(crulem !== 0 && e.pageX > rbcbx && e.pageX < rbcbx+rbcbw && e.pageY > rbcby && e.pageY < rbcby+rbcbh))
        && (!(crulem !== 0 && e.pageX > rbcsx && e.pageX < rbcsx+rbcsw && e.pageY > rbcsy && e.pageY < rbcsy+rbcsh))
        && (!(e.pageX > htgentx && e.pageX < htgentx+htgentw && e.pageY > htgenty && e.pageY < htgenty+htgenth))
        && (!(e.pageX > dsppxctx && e.pageX < dsppxctx+dsppxctw && e.pageY > dsppxcty && e.pageY < dsppxcty+dsppxcth))
        && (!(!genbbl && e.pageX > ngenbx && e.pageX < ngenbx+ngenbw && e.pageY > ngenby && e.pageY < ngenby+ngenbh))
        && (!(!genbbl && e.pageX > pgenbx && e.pageX < pgenbx+pgenbw && e.pageY > pgenby && e.pageY < pgenby+pgenbh))
        && (!(histgp > 0 && (histgn === 0 || hupdc === 0)
            && (e.pageX > pgenfx && e.pageX < pgenfx+pgenfw && e.pageY > pgenfy && e.pageY < pgenfy+pgenfh
                || osctlw > 0 && e.pageX > osctlx && e.pageX < osctlx+osctlw && e.pageY > osctly && e.pageY < osctly+osctlh)))
        && (!(histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1]
            && (ngenfx > 0 && e.pageX > ngenfx && e.pageX < ngenfx+ngenfw && e.pageY > ngenfy && e.pageY < ngenfy+ngenfh
                || osctrw > 0 && e.pageX > osctrx && e.pageX < osctrx+osctrw && e.pageY > osctry && e.pageY < osctry+osctrh)))
        && (!(stpga && !stpge && e.pageX > stpgdx && e.pageX < stpgdx+stpgdw && e.pageY > stpgdy && e.pageY < stpgdy+stpgdh))
        && (!((cruleb !== histcr[0] || crules !== histcr[1]) && e.pageX > orulex && e.pageX < orulex+orulew && e.pageY > oruley && e.pageY < oruley+oruleh))
        && (!(e.pageX > swzmtx && e.pageX < swzmtx+swzmtw && e.pageY > swzmty && e.pageY < swzmty+swzmth))
        && (!(ffw !== 0 && !ffwsbcd && e.pageX > captx && e.pageX < captx+captw && e.pageY > captyffw && e.pageY < captyffw+capth))
        && (!(histgn > 0 && ffw === 0 && e.pageX > captx && e.pageX < captx+captw && e.pageY > capty && e.pageY < capty+capth))
        && (!(!ddiamcd && ddiamx > 0 && e.pageX > ddiamx && e.pageX < ddiamx+ddiamw && e.pageY > ddiamy && e.pageY < ddiamy+ddiamh))
        && (!((stpge || stpga) && e.pageX > stpgssx && e.pageX < stpgssx+stpgssw && e.pageY > stpgssy && e.pageY < stpgssy+stpgssh))
        && (!(stpge && stpgn > 0 && e.pageX > stpgssx2 && e.pageX < stpgssx2+stpgssw2 && e.pageY > stpgssy2 && e.pageY < stpgssy2+stpgssh2))
        && (!(e.pageX > hpnl1x && e.pageX < hpnl1x+hpnl1w && e.pageY > hpnl1y && e.pageY < hpnl1y+hpnl1h))
        && (!(e.pageX > hpnl2x && e.pageX < hpnl2x+hpnl1w && e.pageY > hpnl2y && e.pageY < hpnl2y+hpnl2h))
        && (!(e.pageX > hpnl3x && e.pageX < hpnl3x+hpnl1w && e.pageY > hpnl3y && e.pageY < hpnl3y+hpnl3h))
        && (!(e.pageX > fpnl1x && e.pageX < fpnl1x+fpnl1w && e.pageY > fpnl1y && e.pageY < fpnl1y+fpnl1h))
        && (!(e.pageX > fpnl2x && e.pageX < fpnl2x+fpnl1w && e.pageY > fpnl2y && e.pageY < fpnl2y+fpnl2h))) {

      f2 = false;
      x = 0;
      while (x < fbutt.length && !(e.pageX > fbutt[x][0] + 2 && e.pageX < fbutt[x][0]+fbutt[x][2]+6 && e.pageY > fbutt[x][1] && e.pageY < fbutt[x][1]+fbutt[x][3]+6)) {
        x++;
      }
      if (x < fbutt.length) {
        f2 = true;
      }
      if (!f2) {
        x = 1;
        while (x < 9 && !(e.pageX > 63 + 29 * x && e.pageX < 63 + 29 * x + 15 && e.pageY > cheight - 50 && e.pageY < cheight - 35)) {
          x++;
        }
        if (x < 9) {
          f2 = true;
        }
      }
      if (!f2) {
        x = 0;
        while (x < 9 && !(e.pageX > 63 + 29 * x && e.pageX < 63 + 29 * x + 15 && e.pageY > cheight - 30 && e.pageY < cheight - 10)) {
          x++;
        }
        if (x < 9) {
          f2 = true;
        }
      }
      if (!f2) {
        posm = false;
        scalem = false;
        if (dwrld && cellsn > 0 && wrldw > wrldm && wrldh > wrldm && e.pageX >= wrldx && e.pageX < wrldx+wrldw && e.pageY > wrldy && e.pageY < wrldy+wrldh) {
          x = e.pageX;
          y = e.pageY;
          if (x < wrldx+wrldm/2-0.5) {
            x = wrldx+wrldm/2-0.5;
          }
          if (x >= wrldx+wrldw-wrldm/2+0.5) {
            x = wrldx+wrldw-wrldm/2-0.5;
          }
          if (y < wrldy+wrldm/2-0.5) {
            y = wrldy+wrldm/2-0.5;
          }
          if (y >= wrldy+wrldh-wrldm/2+0.5) {
            y = wrldy+wrldh-wrldm/2-0.5;
          }
          posx = (cellsl + (x - wrldx-wrldm/2 + 0.5) / ((wrldw-wrldm) / (cellsr-cellsl+1))) * (cellsz+(cellsz>grb?1:cellsz/grb));
          posy = (cellst - (y - wrldy-wrldm/2 + 0.5) / ((wrldh-wrldm) / (cellst-cellsb+1)) + 1) * (cellsz+(cellsz>grb?1:cellsz/grb));
        }
      }
      e.preventDefault();
    }
  }, false);
  canvas3.addEventListener("click", function(e) {
    lastcc = 0;
    e.preventDefault();
  }, false);
  window.addEventListener("keydown", function(e) {
    var cc, f = false;
    keyesupp = false;
    if (patt) {
      return;
    }
    cc = e.keyCode;
    if (cc === 8 || cc === 27) {
      f = peKey(cc);
    } else if (cc === 37 || cc === 38 || cc === 39 || cc === 40) {
      f - true;
      if (curskcc === 0) {
        curskcc = cc;
        curskd = 1;
        curskcd = performance.now();
      }
    }
    if (f) {
      keyesupp = true;
      e.preventDefault();
    }
  }, false);
  window.addEventListener("keypress", function(e) {
    var cc;
    if (patt) {
      return;
    }
    if (keyesupp) {
      e.preventDefault();
      return;
    }
    cc = e.which || e.keyCode;
    if (peKey(cc)) {
      e.preventDefault();
    }
  }, false);
  window.addEventListener("keyup", function() {
    keyesupp = false;
    curskcc = 0;
  }, false);
  document.querySelector('#cruleba').addEventListener('click', (e) => {
    e.preventDefault();
    crulebut(1);
  }, false);
  document.querySelector('#crulebf').addEventListener('click', (e) => {
    e.preventDefault();
    crulebut(2);
  });
  document.querySelector('#patternb1').addEventListener('click', (e) => {
    e.preventDefault();
    fpattbf(1);
  });
  document.querySelector('#patternb2').addEventListener('click', (e) => {
    e.preventDefault();
    fpattbf(2);
  });
  document.querySelector('#patternb3').addEventListener('click', (e) => {
    e.preventDefault();
    fpattbf(3);
  });
}

function peMsMove(px, py) {
  var p, x, y, c, r;
  curx = px;
  cury = py;
  if (!(dwrld && cellsn > 0 && px > wrldx && px < wrldx+wrldw && py > wrldy && py < wrldy+wrldh)) {
    if (mdown && !ton) {
      ton = false;
      toncd = null;
      x = posx;
      y = posy;
      posx = posx2 - (px - diffx);
      posy = posy2 + (py - diffy);
      c = cellX(posx,true);
      r = cellY(posy,true);
      if (c < maxl || c > maxr || r < maxb || r > maxt) {
        posx = x;
        posy = y;
      } else if (trkw) {
        trkwdx = trkwdx2 + (px - diffx) / (cellsz+(cellsz>grb?1:cellsz/grb));
        trkwdy = trkwdy2 + (diffy - py) / (cellsz+(cellsz>grb?1:cellsz/grb));
      }
    }
  }
  if (spd) {
    p = cury - spdd;
    if (p < spdby) {
      p = spdby;
    }
    if (p >= spdby + spdbh) {
      p = spdby + spdbh - 1;
    }
    speed = 100 - 100*(p-spdby)/spdbh;
  }
  if (scl) {
    posm = false;
    scalem = false;
    p = cury - scld;
    if (p < sclby) {
      p = sclby;
    }
    if (p >= sclby + sclbh) {
      p = sclby + sclbh - 1;
    }
    scale = 100*(p-sclby)/sclbh;
    calcCellsz();
    posx = sclpx * (cellsz+(cellsz>grb?1:cellsz/grb));
    posy = sclpy * (cellsz+(cellsz>grb?1:cellsz/grb));
  }
  if (colr) {
    p = cury - colrd;
    if (p < colrby) {
      p = colrby;
    }
    if (p >= colrby + colrbh) {
      p = colrby + colrbh - 1;
    }
    colrs = 100 - 100*(p-colrby)/colrbh;
  }
  if (csiz) {
    p = cury - csizd;
    if (p < csizby) {
      p = csizby;
    }
    if (p >= csizby + csizbh) {
      p = csizby + csizbh - 1;
    }
    csize = 100 - 100*(p-csizby)/csizbh;
  }
  if (wrlda) {
    posm = false;
    posx = posx2 - ((diffx - px) / ((wrldw-wrldm) / (cellsr-cellsl+1))) * (cellsz+(cellsz>grb?1:cellsz/grb));
    posy = posy2 + ((diffy - py) / ((wrldh-wrldm) / (cellst-cellsb+1))) * (cellsz+(cellsz>grb?1:cellsz/grb));
  }
}

function peKey(cc) {
  var s, p, i, q, f = false, x;
  if ((lastcc === 84 || lastcc === 116) && (cc === 87 || cc === 119)) {
    f = true;
    swtrkw();
  }
  lastcc = cc;

  if (f && cc === 92 && (stpge || stpga)) {
    if (stpge) {
      stpgn2 = -1;
    } else {
      if (ffw !== 0 && ffwstp) {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
      stpgn2 = -2;
    }
    stpge = false;
    stpga = false;
    stpgax = false;
    x = performance.now();
    if (!stpgcd || (x - stpgcd) > stpgcdn) {
      stpgcd = x;
    } else {
      stpgcd = x - (stpgcdn - (x - stpgcd));
    }
    stpgcd2 = null;
    stpgsf = false;
  }

  if (!f) {
    if (crulem && cc === 13) {
      f = true;
      crulebut(1);
    } else if (crulem && cc === 27) {
      f = true;
      crulebut(2);
    } else if (cc === 98 || cc === 66 || cc === 115 || cc === 83 || (crulem && cc >= 48 && cc <= 57)) {
      f = true;
      if (cc === 98 || cc === 66) {
        if (crulem === 0) {
          crulebn = cruleb;
          crulesn = crules;
          if (dhlpn > 0) {
            dhlpn = 3;
          }
        }
        crulem2 = crulem;
        crulem = 1;
        if (cc === 66) {
          crulebn = "";
        }
      } else if (cc === 115 || cc === 83) {
        if (crulem === 0) {
          crulebn = cruleb;
          crulesn = crules;
          if (dhlpn > 0) {
            dhlpn = 3;
          }
        }
        crulem2 = crulem;
        crulem = 2;
        if (cc === 83) {
          crulesn = "";
        }
      } else if (crulem === 1 && cc === 48) {
        if (srb0insc > 0) {
          srb0insc--;
          dspmsg(["No support      ","\u22C5      \u22C5","      for rule B0"], 4000, true);
        }
      } else if (cc !== 57 && crulem !== 0 && (cc !== 48 || crulem !== 1)) {
        if (crulem === 1) {
          s = crulebn;
        } else {
          s = crulesn;
        }
        p = -1;
        for (i = 0; i < s.length; i++) {
          if (s.charCodeAt(i) > cc) {
            break;
          } else {
            p = i;
          }
        }
        if (p === -1 || s.charCodeAt(p) !== cc) {
          s = s.substring(0,p+1) + String.fromCharCode(cc) + s.substring(p+1);
        } else if (p >= 0) {
          s = s.substring(0,p) + s.substring(p+1);
        }
        if (crulem === 1) {
          crulebn = s;
        } else {
          crulesn = s;
        }
      }
    } else if (crulem && (cc === 100 || cc === 68)) {
      f = true;
      crulebn = "3";
      crulesn = "23";
      crulebut(1);
    }
  }

  if (!f && stpge) {
    if (cc === 13) {
      f = true;
      if (stpgn > 0) {
        if (stpgnm !== 0) {
          stpgnc = gennum;
        }
        stpge = false;
        stpga = true;
        stpgax = true;
        i = performance.now();
        if (!stpgcd || (i - stpgcd) > stpgcdn) {
          stpgcd = i;
        } else {
          stpgcd = i - (stpgcdn - (i - stpgcd));
        }
        stpgcd2 = null;
        stpgsf = false;
        if (ffw !== 0 && ffwstp) {
          ffw = 0;
          ffwstp = false;
          genbbl = false;
        }
      }
    } else if (cc === 27) {
      f = true;
      stpgn2 = -1;
      if (ffw !== 0 && ffwstp) {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
      stpge = false;
      stpga = false;
      stpgax = false;
      stpgn2 = -1;
      i = performance.now();
      if (!stpgcd || (i - stpgcd) > stpgcdn) {
        stpgcd = i;
      } else {
        stpgcd = i - (stpgcdn - (i - stpgcd));
      }
      stpgcd2 = null;
      stpgsf = false;
    } else if (cc === 8) {
      f = true;
      stpgn = Math.floor(stpgn / 10);
    } else if (cc === 45) {
      f = true;
      if (stpgnm === 0) {
        stpgnm = -1;
      } else if (stpgnm === -1) {
        stpgnm = 1;
      } else {
        stpgnm = 0;
      }
    } else if (cc >= 48 && cc <= 57) {
      f = true;
      i = stpgn * 10 + (cc - 48);
      if (i <= 999999999999) {
        stpgn = i;
      }
    }
  }

  if (!f && cc >= 48 && cc <= 57) {
    f = true;
    if (ffw !== 0 && ffwstp) {
      ffw = 0;
      ffwstp = false;
      genbbl = false;
    }
    stpgn2 = stpgn;
    stpgnm2 = stpgnm;
    stpgnc2 = stpgnc;
    if (cc !== 48) {
      stpgn = cc - 48;
      stpgnm = 0
    }
    stpge = true;
    stpgax = stpga;
    stpga = false;
    i = performance.now();
    if (stpgcd) {
      stpgcd = i - (stpgcdn - (i - stpgcd));
    }
    stpgcd2 = null;
    stpgsf = false;
    if (dhlpn > 0) {
      dhlpn = 2;
    }
  }

  if (!f) {
    if (dspgrd && cc === 35) {
      f = true;
      swdspgrd();
    } else if (dwrld && (cc === 27 || cc === 87 || cc === 119)) {
      f = true;
      swdwrld();
    }
  }

  if (!f) {
    if (cc === 32) {
      f = true;
      if (ffw === 0) {
        swrun();
      } else {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
    } else if (cc === 80 || cc === 112) {
      f = true;
      swpatt();
    } else if (cc === 87 || cc === 119) {
      f = true;
      swdwrld();
    } else if (cc === 63) {
      f = true;
      swdhlp();
    } else if (cc === 35) {
      f = true;
      swdspgrd();
    } else if (cc === 67 || cc === 99) {
      f = true;
      swclru();
    } else if (cc === 43 || cc === 45) {
      f = true;
      if (cc === 43) {
        scalemn = scale + 1;
      } else {
        scalemn = scale - 1;
      }
      if (scalemn > 100) {
        scalemn = 100;
      }
      if (scalemn < 0) {
        scalemn = 0;
      }
      scalem = true;
      scalemcd = gts;
      scalemcdn = 400;
    } else if (!genbbl && (cc === 46 || cc === 62)) {
      f = true;
      if (!genbbl) {
        if (nextGen() && stpga) {
          stpgcd2 = performance.now();
          stpgsf = false;
        }
      }
    } else if (!genbbl && histgp > 0 && (cc === 44 || cc === 60)) {
      f = true;
      if (!genbbl && histgp > 0) {
        if (prevGen() && stpga) {
          stpgcd2 = performance.now();
          stpgsf = false;
        }
      }
    } else if (histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1] && (cc === 70 || cc === 102)) {
      f = true;
      swffwn(false);
    } else if (histgp > 0 && (histgn === 0 || hupdc === 0) && (cc === 82 || cc === 114)) {
      f = true;
      swffwp(false);
    }
  }

  if (f) {
    q = updc();
    if (q[0] > 0 || q[1] > 0) {
      ddiama = q[0];
      ddiamb = q[1];
      ddiamcd = null;
    }
  }

  return f;
}

function swrun() {
  var x;
  run = !run;
  if (run) {
    ffw = 0;
    ffwstp = false;
    genbbl = true;
  } else {
    genbbl = false;
  }
  x = performance.now();
  if (runcd3) {
    runcd3 = x-runcd3>runcdn3?x:x-runcdn3*(1-(x-runcd3)/runcdn3);
  } else {
    runcd3 = x;
  }
  if (!run && !runcd2 && !runcd4 && !runcd5) {
    runcd2 = performance.now();
  }
}

function swffwp(f) {
  if (ffw === -1) {
    if (f) {
      if (ffwm <= 0) {
        ffwm = 2;
        ffwc = 1;
        ffwstp = false;
        pgenfcd = performance.now();
        pgenfcd2 = null;
        ngenfcd = null;
        ngenfcd2 = null;
      } else if (ffwm === 2) {
        ffwm = 1;
        ffwc = 1;
        ffwstp = false;
        pgenfcd2 = performance.now();
        pgenfcd = null;
        ngenfcd = null;
        ngenfcd2 = null;
      } else {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
    } else {
      if (ffwm > 0) {
        ffwm = 0;
        ffwc = 1;
        ffwstp = false;
        pgenfcd = performance.now();
        pgenfcd2 = null;
        ngenfcd = null;
        ngenfcd2 = null;
      } else if (ffwm === 0) {
        ffwm = -1;
        ffwc = 1;
        ffwstp = false;
        pgenfcd2 = performance.now();
        pgenfcd = null;
        ngenfcd = null;
        ngenfcd2 = null;
      } else {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
    }
  } else {
    if (run) {
      swrun();
    }
    ffw = -1;
    ffwm = f ? 2 : 0;
    ffwc = 1;
    ffwstp = false;
    genbbl = true;
    pgenfcd = performance.now();
    pgenfcd2 = null;
    ngenfcd = null;
    ngenfcd2 = null;
  }
}

function swffwn(f) {
  if (ffw === 1) {
    if (f) {
      if (ffwm <= 0) {
        ffwm = 2;
        ffwc = 1;
        ffwstp = false;
        ngenfcd = performance.now();
        ngenfcd2 = null;
        pgenfcd = null;
        pgenfcd2 = null;
      } else if (ffwm === 2) {
        ffwm = 1;
        ffwc = 1;
        ffwstp = false;
        ngenfcd2 = performance.now();
        ngenfcd = null;
        pgenfcd = null;
        pgenfcd2 = null;
      } else {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
    } else {
      if (ffwm > 0) {
        ffwm = 0;
        ffwc = 1;
        ffwstp = false;
        ngenfcd = performance.now();
        ngenfcd2 = null;
        pgenfcd = null;
        pgenfcd2 = null;
      } else if (ffwm === 0) {
        ffwm = -1;
        ffwc = 1;
        ffwstp = false;
        ngenfcd2 = performance.now();
        ngenfcd = null;
        pgenfcd = null;
        pgenfcd2 = null;
      } else {
        ffw = 0;
        ffwstp = false;
        genbbl = false;
      }
    }
  } else {
    if (run) {
      swrun();
    }
    ffw = 1;
    ffwm = f ? 2 : 0;
    ffwc = 1;
    ffwstp = false;
    genbbl = true;
    ngenfcd = performance.now();
    ngenfcd2 = null;
    pgenfcd = null;
    pgenfcd2 = null;
  }
}

function swpatt() {
  patt = !patt;
  dspdiv(1);
}

function swdwrld() {
  dwrld = !dwrld;
  if (!dwrld) {
    wrlda = false;
    wrldcd = null;
  }
}

function swdspgrd() {
  dspgrd = !dspgrd;
  drawbackg = true;
}

function swstpge() {
  var i;
  if (stpge) {
    if (ffw !== 0 && ffwstp) {
      ffw = 0;
      ffwstp = false;
      genbbl = false;
    }
    stpge = false;
    stpga = false;
    stpgax = false;
    stpgn2 = -1;
    i = performance.now();
    if (!stpgcd || (i - stpgcd) > stpgcdn) {
      stpgcd = i;
    } else {
      stpgcd = i - (stpgcdn - (i - stpgcd));
    }
    stpgcd2 = null;
    stpgsf = false;
  } else {
    if (ffw !== 0 && ffwstp) {
      ffw = 0;
      ffwstp = false;
      genbbl = false;
    }
    stpgn2 = stpgn;
    stpgnm2 = stpgnm;
    stpgnc2 = stpgnc;
    stpge = true;
    stpgax = stpga;
    stpga = false;
    i = performance.now();
    if (stpgcd) {
      stpgcd = i - (stpgcdn - (i - stpgcd));
    }
    stpgcd2 = null;
    stpgsf = false;
    if (dhlpn > 0) {
      dhlpn = 2;
    }
  }
}

function swdhlp() {
  if (dhlpn > 0) {
    dhlpn = 0;
  } else if (crulem !== 0) {
    dhlpn = 3;
  } else if (stpge) {
    dhlpn = 2;
  } else {
    dhlpn = 1;
  }
}

function swdmsgs() {
  dmsgs = !dmsgs;
}

function swclru() {
  clrvars();
}

function swstops() {
  stops = !stops;
}

function swfrzc() {
  var x;
  frzc = !frzc;
  x = performance.now();
  if (frzccd) {
    frzccd = x-frzccd>frzccdn?x:x-frzccdn*(1-(x-frzccd)/frzccdn);
  } else {
    frzccd = x;
  }
}

function swvwcrs() {
  vwcrs = !vwcrs;
}

function swtrkw() {
  trkw = !trkw;
  trkwdx = 0;
  trkwdx2 = 0;
  trkwdy = 0;
  trkwdy2 = 0;
}

function swdiamstop() {
  diamstop = !diamstop;
}

function tick() {
  var gts = performance.now(), i, n, x;

  if (!tickct) {
    tickct = gts;
  }
  tickcr1 = gts - tickct;
  tickcr2++;
  tickcr3 += tickcr1;
  if (gts - tickct > 800) {
    tickcr3 = tickcr3 / tickcr2;
    tickcr2 = 1;
    tickct = gts;
  }

  if (chgcql > 0 && chgcqp >= chgcql) {
    chgcql = 0;
    chgcqp = 0;
    chgcqc = 1;
  }
  n = chgcqc;
  while (chgcqp < chgcql && n-- >= 1) {
    do {
      bmemgE(chgcqp++);
      chgCellQ(bmemv0, bmemv1, Math.abs(x = bmemv2));
    } while (chgcqp < chgcql && x < 0);
  }

  x = chgcql;
  chgcqkp = true;
  n = fpattc;
  while (fpattf !== 0 && n-- >= 1) {
    if (fpattf === 1) {
      pattf1();
    } else if (fpattf === 2) {
      pattf2();
    }
  }
  chgcqkp = false;
  if (chgcql > x) {
    bmemgE(chgcql-1);
    bmemsE(chgcql-1, bmemv0, bmemv1, Math.abs(bmemv2));
  }

  if (!wts1) {
    wts1 = gts;
  }

  runcdn = 3000 * ((Math.pow(2,7+3*((100-speed)/100))-1)/1024);

  if (ffw !== 0 && (ffwm === -1 || ffwm === 1)) {
    n = ffwc;
    while (ffw !== 0 && n-- >= 1) {
      doffw();
    }
  }
  if ((run || ffw !== 0) && gts-wts1>3000*((Math.pow(2,10*((100-speed)/100))-1)/1024)) {
    wts1 = gts;
    if (run) {
      calcGen();
    }
    if (ffw != 0) {
      doffw();
    }
  }

  i = 0;
  while (cellsn + rmvcellsn < Math.trunc(cellslen/3)) {
    while (i < cellslen) {
      bmemgA(i);
      if (bmemv3 !== 1 && bmemv4 !== -2) {
        break;
      }
      i++;
    }
    while (i < cellslen && cellslen > 0) {
      bmemgA(cellslen-1);
      if (bmemv3 === 1 || bmemv4 === -2) {
        break;
      }
      cellslen--;
      cellsfs[0-bmemv3] = -1;
    }
    if (i < cellslen) {
      cellslen--;
      bmemgA(i);
      cellsfs[0-bmemv3] = -1;
      bmemgA(cellslen);
      bmemsA(i,bmemv0,bmemv1,bmemv2,bmemv3,bmemv4);
      if (bmemv4 !== -2) {
        fcidxs2(bmemv0, bmemv1, i + 1);
      }
    }
  }

  window.YagolsSetZeroTimeoutFunc(tick);
}

function doffw() {
  var p0, q;
  if (ffw > 0) {
    if (histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1]) {
      if (nextGen() && stpga) {
        ffw = 0;
        stpgcd2 = performance.now();
        stpgsf = false;
        if (stpgnm !== 0) {
          stpgnc = gennum;
        }
      }
      if (histgn === 0) {
        ffw = 0;
      } else if (ffw !== 0) {
        p0 = 0;
        if (histp > 0) {
          q = prevHist(histh, histi);
          if (hist[q[0]][0][q[1]][11][0] > 0) {
            p0 = hist[q[0]][0][q[1]][11][1];
          }
        }
        if (ffwm > 0 && (histp === 0 || histp === p0) || diamstop && (!ffwstp || !stpga) && (histp === 0 || histp === p0) && (hist[histh][0][histi][3][0] > 0 || hist[histh][0][histi][3][1] > 0)) {
          ffw = 0;
        }
      }
    } else {
      ffw = 0;
    }
  } else if (histgp > 0 && (histgn === 0 || hupdc === 0)) {
    if (prevGen() && stpga) {
      ffw = 0;
      stpgcd2 = performance.now();
      stpgsf = false;
      if (stpgnm !== 0) {
        stpgnc = gennum;
      }
    }
    if (histgp === 0) {
      ffw = 0;
    } else if (ffw !== 0) {
      p0 = 0;
      if (histp > 0) {
        q = prevHist(histh, histi);
        if (hist[q[0]][0][q[1]][11][0] > 0) {
          p0 = hist[q[0]][0][q[1]][11][1];
        }
      }
      if (ffwm > 0 && histp === 0 || diamstop && (!ffwstp || !stpga) && (histp === 0 || histp === p0) && (hist[histh][0][histi][3][0] > 0 || hist[histh][0][histi][3][1] > 0)) {
        ffw = 0;
      }
    }
  } else {
    ffw = 0;
  }
  if (ffw === 0) {
    ffwstp = false;
    genbbl = false;
    stopscd = performance.now();
  }
}

function dspview(ts) {
  var t, f;
  gts = ts;
  if (!rsct) {
    rsct = gts;
  }
  t = gts;
  if ((t - rsct) > 800) {
    frpsn = Math.floor(dspvc / (t - rsct + 1) * 1000);
    gnpsn = Math.floor(Math.abs(gennum - gnpsg) / (t - rsct + 1) * 1000);
    rsct = t;
    dspvc = 0;
    f = gnpsd;
    gnpsd = gennum !== gnpsg;
    gnpsg = gennum;
    if (f && !gnpsd || !f && gnpsd) {
      if (gnpscd) {
        if (gts - gnpscd > gnpscdn) {
          gnpscd = gts;
        } else {
          gnpscd = gts - (gnpscdn - (gts - gnpscd));
        }
      } else {
        gnpscd = gts;
      }
    }
  }
  if (dspvc / (t - rsct + 1) * 1000 < 25) {
    dspvc++;
    dspview0();
  }
  requestAnimationFrame(dspview);
}

function dspview0() {
  var x, y, x2, y2, x3, y3;

  if (histp > 0 && (!histq || histh !== histdvh || histi !== histdvi || histp !== histdvp)) {
    rclHist0_2();
    histq = rlHist(histh, histi, histp);
    rclHist1_2();
    histdvh = histh;
    histdvi = histi;
    histdvp = histp;
  }
  if (histgp > 0) {
    histq0 = prevHist(histh, histi);
  }

  if (scalem && scalemcd) {
    x = cellX(posx);
    y = cellY(posy);
    if (posm) {
      x2 = cellX(posmx);
      y2 = cellY(posmy);
    }
    scale += (scalemn - scale) * Math.sin((gts - scalemcd > scalemcdn ? 1 : (gts - scalemcd) / scalemcdn) * Math.PI / 2);
    if (scale < 0) {
      scale = 0;
    }
    if (scale > 100) {
      scale = 100;
    }
    calcCellsz();
    posx = x * (cellsz+(cellsz>grb?1:cellsz/grb));
    posy = y * (cellsz+(cellsz>grb?1:cellsz/grb));
    if (posm) {
      posmx = x2 * (cellsz+(cellsz>grb?1:cellsz/grb));
      posmy = y2 * (cellsz+(cellsz>grb?1:cellsz/grb));
    }
    posml = [];
  }

  if (posm && posmcd) {
    if (Math.abs(posmx-posx) <= 1 && Math.abs(posmy-posy) <= 1) {
      posx = posmx;
      posy = posmy;
    } else {
      x = Math.sin((gts - posmcd > posmcdn ? 1 : (gts - posmcd) / posmcdn) * Math.PI / 2);
      posx += (posmx - posx) * x;
      posy += (posmy - posy) * x;
    }
  }

  if (curskcc > 0 && !trkw) {
    switch (curskcc) {
      case 37:
        posmx = posx - (cwidth / 15) * Math.pow(1.2, curskd);
        posmy = posy;
        break;
      case 38:
        posmx = posx;
        posmy = posy + (cheight / 15) * Math.pow(1.2, curskd);
        break;
      case 39:
        posmx = posx + (cwidth / 15) * Math.pow(1.2, curskd);
        posmy = posy;
        break;
      case 40:
        posmx = posx;
        posmy = posy - (cheight / 15) * Math.pow(1.2, curskd);
        break;
    }
    posm = true;
    posml = [];
    posmcd = gts;
    posmcdn = 400;
  }

  if (cellsn > 0 && trkw) {
    x = cellX(posx - cwidth / 2 * 0.9);
    y = cellY(posy + cheight / 2 * 0.9);
    x2 = cellX(posx + cwidth / 2 * 0.9);
    y2 = cellY(posy - cheight / 2 * 0.9);
    if (x2 - x < cellsr - cellsl + 1 || y - y2 < cellst - cellsb + 1) {
      if (!scalem) {
        scalemn = scale - 0.5;
        if (scalemn < 0) {
          scalemn = 0;
        }
        scalem = true;
        scalemcd = gts;
        scalemcdn = 400;
      }
    } else {
      scalemn = scale;
      scalem = true;
      scalemcd = gts;
      scalemcdn = 400;
    }
    x = (cellsl + (cellsr - cellsl) / 2 + 0.5 - trkwdx) * (cellsz+(cellsz>grb?1:cellsz/grb)) - posx;
    y = (cellsb + (cellst - cellsb) / 2 + 0.5 - trkwdy) * (cellsz+(cellsz>grb?1:cellsz/grb)) - posy;
    if (posml.length < 10) {
      if (posml.length === 0) {
        posmltx = 0;
        posmlty = 0;
        posmlp = 0;
      }
      posml[posml.length] = [x,y];
      posmltx += x;
      posmlty += y;
    } else {
      posmltx -= posml[posmlp][0];
      posmlty -= posml[posmlp][1];
      posmltx += x;
      posmlty += y;
      posml[posmlp][0] = x;
      posml[posmlp][1] = y;
      if (posmlp < posml.length - 1) {
        posmlp++;
      } else {
        posmlp = 0;
      }
    }
    posmx = posx + posmltx / posml.length;
    posmy = posy + posmlty / posml.length;
    if (!posm) {
      posml = [];
    }
    posm = true;
    posmcd = gts;
    posmcdn = 1001 - 1000 * speed / 120;
    curskcc = 0;
  }

  chgcanvsz = chgcellsz = chgpos = false;

  if (!cwidth || cbrw !== cwidth || !cheight || cbrh !== cheight) {
    x = getComputedStyle(canvas0);
    cwidth = cbrw = parseInt(x.getPropertyValue('width').slice(0, -2));
    cheight = cbrh = parseInt(x.getPropertyValue('height').slice(0, -2));
    chgcanvsz = true;
    canvas0.width = cwidth;
    canvas0.height = cheight;
    canvas1.width = cwidth;
    canvas1.height = cheight;
    canvas1a.width = cwidth;
    canvas1a.height = cheight;
    canvas1b.width = cwidth;
    canvas1b.height = cheight;
    canvas2.width = cwidth;
    canvas2.height = cheight;
    canvas3.width = cwidth;
    canvas3.height = cheight;
    ctx1.imageSmoothingEnabled = false;
    ctx1a.textBaseline = "bottom";
    ctx2.textBaseline = "bottom";
    ctx2.imageSmoothingEnabled = false;
    ctx3.imageSmoothingEnabled = false;
    tmet = null;
  }

  vwax = cellX(posx - cwidth / 2);
  vway = cellY(posy - cheight / 2);
  vwaw = cwidth / (cellsz+(cellsz>grb?1:cellsz/grb));
  vwah = cheight / (cellsz+(cellsz>grb?1:cellsz/grb));

  if (mdown) {
    if (ton) {
      x = cellX(posx+curx-cwidth/2,true);
      y = cellY(posy-cury+cheight/2,true);
      if (x !== tonx || y !== tony) {
        if (Math.abs(tonx-x) === Math.abs(tony-y)) {
          if (x < tonx) {
            x2 = -1;
          } else {
            x2 = 1;
          }
          if (y < tony) {
            y2 = -1;
          } else {
            y2 = 1;
          }
        } else if (Math.abs(tonx-x) > Math.abs(tony-y)) {
          if (x < tonx) {
            x2 = -1;
          } else {
            x2 = 1;
          }
          y2 = 0;
        } else {
          if (y < tony) {
            y2 = -1;
          } else {
            y2 = 1;
          }
          x2 = 0;
        }
        chgcqkp = true;
        x3 = tonx;
        y3 = tony;
        while (x3 !== x || y3 !== y) {
          if (x2 !== 0 && y2 !== 0) {
            x3 += x2;
            y3 += y2;
          } else if (x2 !== 0) {
            x3 += x2;
            if (x3 === x) {
              x2 = 0;
              if (y < y3) {
                y2 = -1;
              } else {
                y2 = 1;
              }
            }
          } else if (y2 !== 0) {
            y3 += y2;
            if (y3 === y) {
              y2 = 0;
              if (x < x3) {
                x2 = -1;
              } else {
                x2 = 1;
              }
            }
          } else {
            break;
          }
          if (x3 === x && y3 === y) {
            chgcqkp = false;
          }
          chgCellCR(x3, y3, toncm);
        }
        tonx = x;
        tony = y;
        chgcqkp = false;
      }
    } else if (toncd && gts - toncd > toncdn) {
      ton = true;
      toncd = null;
      tonx = cellX(posx+curx-cwidth/2,true);
      tony = cellY(posy-cury+cheight/2,true);
      toncm = fcidxg0(tonx, tony) === 1 ? 2 : 1;
      chgCellCR(tonx, tony, toncm);
    }
  }

  if (acccd && gts - acccd > acccdn) {
    acccd = gts;
    if (ffw !== 0 && ffwc < 20) {
      ffwc *= 1.1;
    }
    if (chgcql > 0 && chgcqc < 20) {
      chgcqc *= 1.1;
    }
    if (fpattf !== 0 && fpattc < 20) {
      fpattc *= 1.1;
    }
  }

  if (capcd && gts - capcd > capcdn) {
    capcd = null;
  }
  if (capcd2 && gts - capcd2 > capcdn2) {
    capcd2 = null;
  }
  if (hlcrcd && (gts - hlcrcd > hlcrcdn)) {
    hlcrcd = null;
  }
  if (hlcrcd2 && gts - hlcrcd2 > hlcrcdn2) {
    hlcrcd2 = null;
  }
  if (hlcrcd3 && gts - hlcrcd3 > hlcrcdn3) {
    hlcrcd3 = null;
  }
  if (hlcrcd4 && gts - hlcrcd4 > hlcrcdn4) {
    hlcrcd4 = null;
  }
  if (ngencd && gts - ngencd > ngencdn) {
    ngencd = null;
  }
  if (ngencd2 && gts - ngencd2 > ngencd3) {
    ngencd2 = null;
  }
  if (ngencd4 && gts - ngencd4 > ngencdn4) {
    ngencd4 = null;
  }
  if (ngencd5 && gts - ngencd5 > ngencdn5) {
    ngencd5 = null;
  }
  if (ngenfcd && gts - ngenfcd > ngenfcdn) {
    ngenfcd = null;
  }
  if (ngenfcd2 && gts - ngenfcd2 > ngenfcdn2) {
    ngenfcd2 = null;
  }
  if (pgencd && gts - pgencd > pgencdn) {
    pgencd = null;
  }
  if (pgencd2 && gts - pgencd2 > pgencd3) {
    pgencd2 = null;
  }
  if (pgencd4 && gts - pgencd4 > pgencdn4) {
    pgencd4 = null;
  }
  if (pgencd5 && gts - pgencd5 > pgencdn5) {
    pgencd5 = null;
  }
  if (pgenfcd && gts - pgenfcd > pgenfcdn) {
    pgenfcd = null;
  }
  if (pgenfcd2 && gts - pgenfcd2 > pgenfcdn2) {
    pgenfcd2 = null;
  }
  if (ddiamcd && gts - ddiamcd > ddiamcdn) {
    ddiamcd = null;
    ddiama = 0;
    ddiamb = 0;
  }
  if (ddiamcd2 && gts - ddiamcd2 > ddiamcdn2) {
    ddiamcd2 = null;
  }
  if (runcd && gts - runcd > runcdn) {
    runcd = null;
  }
  if (runcd2 && gts - runcd2 > runcdn2) {
    runcd2 = null;
    runcd5 = gts;
  }
  if (runcd3 && gts - runcd3 > runcdn3) {
    runcd3 = null;
  }
  if (runcd4 && gts - runcd4 > runcdn4) {
    runcd4 = null;
  }
  if (runcd5 && gts - runcd5 > runcdn5) {
    runcd5 = null;
    runcd4 = gts;
  }
  if (wrldcd && gts - wrldcd > wrldcdn) {
    wrldcd = null;
    wrlda = true;
  }
  if (ffwsbcd && gts - ffwsbcd > ffwsbcdn) {
    ffwsbcd = null;
  }
  if (gnpscd && gts - gnpscd > gnpscdn) {
    gnpscd = null;
  }
  if (stpgcd && gts - stpgcd > stpgcdn) {
    stpgcd = null;
  }
  if (stpgcd2 && gts - stpgcd2 > stpgcdn2) {
    if (stpgsf) {
      stpgsf = false;
      stpgcd2 = null;
    } else {
      stpgsf = true;
      stpgcd2 = gts;
    }
  }
  if (genbtcd && gts - genbtcd > genbtcdn) {
    if (genbtl) {
      genbtl = false;
      genbtcd = null;
    } else {
      genbtl = true;
      genbtcd = gts;
    }
    if (cidxbc1 > 100) {
      cidxbc0 = cidxbc2 / cidxbc1;
      cidxbc1 = 0;
      cidxbc2 = 0;
    }
  }
  for (x = 0; x < dhlpql; x++) {
    if (dhlpq[x][5] && gts - dhlpq[x][5] > dhlpcdn) {
      dhlpq[x][5] = null;
      if (dhlpn > 0 && x === dhlpql - 1) {
        dhlpq[x][6] = 1;
      }
    }
  }
  if (dhlpcd2 && gts - dhlpcd2 > dhlpcdn2) {
    dhlpcd2 = null;
    dhlpn = 0;
  }
  if (dhlpcd3 && gts - dhlpcd3 > dhlpcdn3) {
    dhlpcd3 = gts;
    if (dhlplf < 2) {
      dhlplf = 2;
    } else {
      dhlplf = 1;
    }
  }
  if (clrucd && gts - clrucd > clrucdn) {
    clrucd = null;
  }
  if (stopscd && gts - stopscd > stopscdn) {
    stopscd = null;
  }
  if (htgencd && gts - htgencd > htgencdn) {
    htgencd = null;
  }
  if (posmcd && gts - posmcd > posmcdn) {
    posmcd = null;
    posmcdn = 2000;
    if (posm) {
      posm = false;
      posx = posmx;
      posy = posmy;
    }
  }
  if (scalemcd && gts - scalemcd > scalemcdn) {
    scalemcd = null;
    scalemcdn = 2000;
    if (scalem) {
      scalem = false;
      scale = scalemn;
    }
  }
  if (curskcd && gts - curskcd > curskcdn) {
    if (curskcc > 0) {
      curskd++;
      curskcd = gts;
    } else {
      curskcd = null;
    }
  }
  if (cruleimcd && gts - cruleimcd > cruleimcdn) {
    cruleimcd = null;
  }
  if (histcd && gts - histcd > histcdn) {
    histcd = null;
  }
  if (hpnlcd && gts - hpnlcd > hpnlcdn) {
    hpnlcd = null;
  }
  if (fpnlcd && gts - fpnlcd > fpnlcdn) {
    fpnlcd = null;
  }
  if (msgcd1 && gts - msgcd1 > msgcdn1) {
    msgcd1 = gts;
    genbtcd = null;
    genbtl = false;
    if (msgf1 === 0 || msgf1 > 900) {
      swstmsg();
    }
    msgf1 = 0;
  }
  if (msgcd2 && gts - msgcd2 > msgcdn2) {
    msgcd2 = gts;
    if (!genbtcd && !genbtl) {
      genbtcd = gts;
    }
    x = msgf1;
    if ((msgf1 === 1 || msgf1 === 2) && (cellsn > 0 || histp > 0)
        || msgf1 === 3 && (cellsxl > 0 || histgn > 0 || histp > 0)
        || msgf1 === 11 && (gennum > 0 || histp > 0)
        || (msgf1 === 21 || msgf1 === 22) && histp === 0) {
      msgf1 = 0;
    }
    if (msgf1 === 0 && histp > 0) {
      if (hist[histq0[0]][0][histq0[1]][11][0] > 0 && (histgn === 0 || hist[histq0[0]][0][histq0[1]][11][1] - histp >= hist[histq0[0]][0][histq0[1]][11][0])) {
        if (hist[histq0[0]][0][histq0[1]][11][2] === 0 && hist[histq0[0]][0][histq0[1]][11][3] === 0) {
          drawMsgsStm("Oscillator!", "p"+hist[histq0[0]][0][histq0[1]][11][0]);
          msgf1 = 21;
        } else {
          drawMsgsStm("Spaceship!", spcshtxt(hist[histq0[0]][0][histq0[1]][11][0],hist[histq0[0]][0][histq0[1]][11][2],hist[histq0[0]][0][histq0[1]][11][3]));
          msgf1 = 22;
        }
      }
    }
    if (msgf1 === 0 && (maxl >= vwax && maxl < vwax + vwaw || maxr >= vwax && maxr < vwax + vwaw || maxb >= vway && maxb < vway + vwah || maxt >= vway && maxt < vway + vwah)) {
      drawMsgsStm("There Be Dragons !", "");
      msgf1 = 901;
    }
    if (msgf1 === 0 && x > 0) {
      swstmsg();
    }
  }
  for (x = 0; x < fbutt.length; x++) {
    if (fbutt[x][6] && gts - fbutt[x][6] > fbuttcdn) {
      fbutt[x][6] = null;
    }
  }
  if (dspposcd && gts - dspposcd > dspposcdn) {
    dspposcd = null;
  }
  if (dsppxccd && gts - dsppxccd > dsppxccdn) {
    dsppxccd = null;
  }
  if (swzmcd && gts - swzmcd > swzmcdn) {
    swzmcd = null;
  }
  if (swzmcd2 && gts - swzmcd2 > swzmcdn2) {
    swzmcd2 = null;
  }
  if (cbrcd && gts - cbrcd > cbrcdn) {
    x = getComputedStyle(canvas0);
    cbrw = parseInt(x.getPropertyValue('width').slice(0, -2));
    cbrh = parseInt(x.getPropertyValue('height').slice(0, -2));
    cbrcd = performance.now();
  }
  if (stmsgcd && gts - stmsgcd > stmsgcdn) {
    stmsgcd = null;
    stmsgo1 = stmsgn1;
    stmsgo2 = stmsgn2;
    stmsgotm1 = stmsgntm1;
    stmsgotm2 = stmsgntm2;
    stmsgn1 = "";
    stmsgn2 = "";
    stmsgcd2 = gts;
  }
  if (stmsgcd2 && gts - stmsgcd2 > stmsgcdn2) {
    stmsgcd2 = null;
  }
  if (titlecd && gts - titlecd > titlecdn) {
    titlecd = null;
    titlecd2 = gts;
  }
  if (titlecd2 && gts - titlecd2 > titlecdn2) {
    titlecd2 = null;
    titleh = false;
  }
  if (titlecd3 && gts - titlecd3 > titlecdn3) {
    titlecd3 = null;
  }
  if (ngenb && !ngencd && !ngen) {
    ngen = true;
    ngencd2 = null;
    ngencd3 = 500;
    ngencd4 = null;
  }
  if (ngen) {
    if (!ngencd2) {
      if (nextGen() && stpga) {
        stpgcd2 = gts;
        stpgsf = false;
        stops = performance.now();
      }
      ngencd2 = gts;
      if (!ngencd4) {
        ngencd3 -= ngencd3 > 0 ? 50 : 0;
        ngencd4 = gts;
      }
    }
  }
  if (pgenb && !pgencd && !pgen && histgp > 0) {
    pgen = true;
    pgencd2 = null;
    pgencd3 = 500;
    pgencd4 = null;
  }
  if (pgen) {
    if (!pgencd2) {
      if (prevGen() && stpga) {
        stpgcd2 = gts;
        stpgsf = false;
        stops = performance.now();
      }
      pgencd2 = gts;
      if (!pgencd4) {
        pgencd3 -= pgencd3 > 0 ? 50 : 0;
        pgencd4 = gts;
      }
    }
  }

  if (histgp < 1) {
    pgen = false;
  }

  if (!prvcellsz || cellsz !== prvcellsz) {
    prvcellsz = cellsz;
    chgcellsz = true;
  }

  if (posx !== prvposx || posy !== prvposy) {
    prvposx = posx;
    prvposy = posy;
    chgpos = true;
  }

  if (!prvcolrs || colrs !== prvcolrs) {
    prvcolrs = colrs;
    drawallcells = true;
  }

  if (!prvcsize || csize !== prvcsize) {
    prvcsize = csize;
    drawallcells = true;
    cimgc++;
  }

  if (frzc != frzcp) {
    frzcp = frzc;
    drawallcells = true;
  }

  if (chgcanvsz || chgcellsz || chgpos) {
    drawbackg = true;
    drawallcells = true;
  }

  if (chgcanvsz || chgcellsz) {
    cimgc++;
  }

  if (drawbackg || chgcanvsz || chgcellsz || chgpos) {
    drawbackg = false;
    ctx0.fillStyle = "rgba(0,0,0,1)";
    ctx0.fillRect(0, 0, cwidth, cheight);
    if (dspgrd && cellsz > grb) {
      drawGrid();
    }
  }

  if (frzc || frzccd) {
    if (frzccd) {
      if (frzc) {
        x = 0.3 + 0.7 * (1 - (gts - frzccd > frzccdn ? 1 : (gts - frzccd) / frzccdn));
      } else {
        x = 0.3 + 0.7 * (gts - frzccd > frzccdn ? 1 : (gts - frzccd) / frzccdn);
      }
    } else {
      x = 0.3;
    }
  } else {
    x = 1;
  }
  canvas1.style.opacity = "" + x;

  drawCells();

  drawallcells = false;

  ctx1a.clearRect(0, 0, cwidth, cheight);

  if (title0cd) {
    if (gts - title0cd > title0cdn) {
      title0cd = null;
      canvas2.style.opacity = "1";
    } else {
      x = (gts - title0cd) / title0cdn;
      ctx1a.fillStyle = "rgba(170, 110, 110, " + ((1 - x) * 0.6) + ")";
      ctx1a.fillText("Y a g o l s", title0x, title0y);
      canvas2.style.opacity = "" + x;
    }
  }

  drawFxa();

  ctx1b.clearRect(0, 0, cwidth, cheight);

  drawFxb();

  ctx2.clearRect(0, 0, cwidth, cheight);
  if (titlemode >= 2 && cellsn === 0 && msgll === 0 && titlefd <= titlex) {
    titlefd += (gts-titlefdt)/1000*50;
  }
  if (titlefd > 0) {
    drawTitle();
    if (titlemode < 2 || cellsn > 0 || msgll > 0 || titlefd > titlex) {
      titlefd -= (gts-titlefdt)/1000*(msgll>0?180:130);
      if (titlemode === 2 && titlefd <= 0) {
        titleh = false;
      }
    }
  }
  titlefdt = gts;
  if (titlemode === 0 && (cellsn > 0 || msgll > 0)) {
    titlefd = 0;
  }
  if (titlemode < 2) {
    if (titlefd <= 0) {
      titlefd = titlefds;
      titlemode++;
    }
  }

  drawInfo();

  if (dwrld && cellsn > 0) {
    drawWrld();
  }

  drawFButt();
  drawScale();
  drawSpeed();
  drawColrs();
  drawCSize();
  drawRunToggle();
  drawNGenButton();
  drawPGenButton();
  drawCapButton();
  drawFramesSec();
  drawDiamond();
  drawPos();
  drawCRule();
  drawStmsg();
  drawMsgs();
  drawStpg();
  drawHistPnl();
  drawFcidxPnl();

  ctx3.clearRect(0, 0, cwidth, cheight);

  drawHelp();

}

function calcICellsz() {
  cellisz = Math.floor(cwidth > cheight ? cwidth / (2*Math.sqrt(cwidth)) : cheight / (2*Math.sqrt(cheight)));
  if (cellisz < 1) {
    cellisz = 1;
  }
}

function calcCellsz() {
  cellsz = cellisz*celliszm * Math.pow(2, 10*scale/100) / 1024;
}

function chgCellCR(c, r, f) {
  var c0 = c, r0 = r;
  if (c0 < maxl) {
    c0 = maxr - maxl + c0 + 1;
  }
  if (c0 > maxr) {
    c0 = maxl + c0 - maxr - 1;
  }
  if (r0 < maxb) {
    r0 = maxt - maxb + r0 + 1;
  }
  if (r0 > maxt) {
    r0 = maxb + r0 - maxt - 1;
  }
  bmemsE(chgcql++, c0, r0, chgcqkp ? 0 - f : f);
}

function chgCellQ(c, r, f) {
  var v;
  if ((v = fcidxg0(c, r)) === 1 && f !== 1 || v !== 1 && f === 1) {
    toggleCellCR(c, r);
  }
}

function toggleCellCR(c, r) {
  var i, n, g, n2, z, q;
  clrcellsx();
  i = fcidxg0(c,r) === 1 ? fcidxg2(c,r) - 1 : cellslen;
  n = tidx[crkey(c,r)];
  n2 = n?n<0?n-1:n+1:1;
  if (i < cellslen) {
    bmemgA(i);
    g = bmemv2;
    if (g === gennum) {
      if (Math.abs(n2%2) === 1) {
        hupdc++;
      } else {
        hupdc--;
      }
    } else {
      hupdc++;
      n2 = -2;
    }
    if (!n) {
      tarr.push([c,r,g]);
    }
    rmvCell(i);
    fcidx(c,r,1);
    cellsn--;
  } else {
    if (Math.abs(n2%2) === 1) {
      hupdc++;
    } else {
      hupdc--;
    }
    if (!n || n === -2) {
      tarr.push([c,r,-1]);
    }
    z = addCell(c,r,1);
    fcidx(c,r,4,0,1,0,z+1,0);
    cellsn++;
  }
  tidx[crkey(c,r)] = n2;
  calcWrld();
  q = updc();
  if (q[0] > 0 || q[1] > 0) {
    ddiama = q[0];
    ddiamb = q[1];
    ddiamcd = null;
  }
}

function cellX(x,r) {
  var z = x / (cellsz+(cellsz>grb?1:cellsz/grb));
  if (r) {
    return Math.floor(z);
  }
  return z;
}

function cellY(y,r) {
  var z = y / (cellsz+(cellsz>grb?1:cellsz/grb));
  if (r) {
    return Math.floor(z);
  }
  return z;
}

function drawCells() {
  var i, px, py, x, px2, py2, c, cx;
  if (drawallcells) {
    ctx1.clearRect(0, 0, cwidth, cheight);
  } else if (rmvcellsf && !frzc) {
    rmvcellsf = false;
    for (i = 0; i < cellslen; i++) {
      bmemgA(i);
      if (bmemv4 === -2) {
        cellsfs[cellsfsl++] = i;
        bmemsA(i,bmemv0,bmemv1,bmemv2,0-cellsfsl+1,0);
        px = cwidth / 2 + (bmemv0 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) - posx;
        py = cheight / 2 - (bmemv1 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) + posy - cellsz + 1;
        if (px >= 0 - cellsz && px < cwidth + cellsz && py >= 0 - cellsz && py < cheight + cellsz) {
          cx = cellsz < 2 ? 2 - cellsz : 0;
          ctx1.clearRect(px - cx/2, py - cx/2, cellsz + cx, cellsz + cx);
        }
      }
    }
  }
  if (rmvcellsf) {
    rmvcellsf = false;
    for (i = 0; i < cellslen; i++) {
      bmemgA(i);
      if (bmemv4 === -2) {
        cellsfs[cellsfsl++] = i;
        bmemsA(i,bmemv0,bmemv1,bmemv2,0-cellsfsl+1,0);
      }
    }
  }
  rmvcellsn = 0;
  rmvcellsm = new Map();
  if (!frzc || drawallcells) {
    for (i = 0; i < cellslen; i++) {
      bmemgA(i);
      if (bmemv3 === 1) {
        x = Math.trunc(60 * Math.pow(2, 3+7*colrs/100) / 1024);
        if (x < 1) {
          x = 1;
        }
        c = Math.trunc((1 - ((bmemv2>0?bmemv2:gennum)-mingen+1) / (gennum-mingen+1)) * 59 / (60 / x));
        c = Math.round(c * 60 / x * 2);
        if (c > 59) {
          c = 59;
        }
        if (drawallcells || bmemv4 === -1 || bmemv4 !== c) {
          bmemsA(i,bmemv0,bmemv1,bmemv2,bmemv3,c);
          px = cwidth / 2 + (bmemv0 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) - posx;
          py = cheight / 2 - (bmemv1 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) + posy - cellsz + 1;
          if (px >= 0 - cellsz && px < cwidth + cellsz && py >= 0 - cellsz && py < cheight + cellsz) {
            cellImg(c);
            cx = cellsz < 2 ? 2 - cellsz : 0;
            x = Math.trunc(canvasosci.width / (cellsz+cx+5));
            py2 = Math.trunc(c / x);
            px2 = Math.ceil((c - py2 * x) * (cellsz+cx+5));
            py2 = Math.ceil(py2 * (cellsz+cx+5));
            ctx1.drawImage(canvasosci, px2, py2, cellsz+cx, cellsz+cx, px-cx/2, py-cx/2, cellsz+cx, cellsz+cx);
          }
        }
      }
    }
  }
}

function cellImg(c) {
  var i, x, px, py, cs, cd, cx;
  if (cimg.length === 0) {
    for (i = 0; i < 60; i++) {
      cimg[i] = -1;
    }
  }
  if (cimg[c] < cimgc) {
    cimg[c] = cimgc;
    cx = cellsz < 2 ? 2 - cellsz : 0;
    cd = (cellsz+cx) * 0.1 + (cellsz+cx) * 0.8 * (1 - csize/100);
    cs = cellsz+cx-cd;
    x = Math.trunc(canvasosci.width / (cellsz+cx+5));
    py = Math.trunc(c / x);
    px = Math.ceil((c - py * x) * (cellsz+cx+5));
    py = Math.ceil(py * (cellsz+cx+5));
    ctxosci.clearRect(px, py, cellsz+cx+5, cellsz+cx+5);
    x = (59 - c) / 59;
    ctxosci.fillStyle = "rgba(230, 160, "+(100+Math.floor(155*x))+", 1)";
    fillrr(ctxosci, px + cd / 2, py + cd / 2, cs, cs, cs / 4);
  }
}

function calcWrld() {
  var i;
  mingen = gennum;
  cellsl = maxr + 1;
  cellsr = maxl - 1;
  cellst = maxb - 1;
  cellsb = maxt + 1;
  for (i = 0; i < cellslen; i++) {
    bmemgA(i);
    if (bmemv3 === 1) {
      mingen = bmemv2 > 0 ? mingen === 0 ? bmemv2 : mingen > bmemv2 ? bmemv2 : mingen : mingen === 0 ? gennum : mingen;
      if (bmemv0 < cellsl) {
        cellsl = bmemv0;
      }
      if (bmemv0 > cellsr) {
        cellsr = bmemv0;
      }
      if (bmemv1 > cellst) {
        cellst = bmemv1;
      }
      if (bmemv1 < cellsb) {
        cellsb = bmemv1;
      }
    }
  }
  calcWrld2();
}

function calcWrld2() {
  if (cellsn > 0) {
    if (cheight/cwidth > (cellst-cellsb+1)/(cellsr-cellsl+1)) {
      wrldw = cwidth * 0.7;
      wrldh = wrldw * (cellst-cellsb+1)/(cellsr-cellsl+1);
    } else {
      wrldh = cheight * 0.7;
      wrldw = wrldh * (cellsr-cellsl+1)/(cellst-cellsb+1);
    }
    if (wrldw <= wrldm) {
      wrldw = wrldm + 1;
    }
    if (wrldh <= wrldm) {
      wrldh = wrldm + 1;
    }
  } else {
    wrldw = 0;
    wrldh = 0;
  }
}

function calcWrld3() {
  var i;
  mingen = gennum;
  for (i = 0; i < cellslen; i++) {
    bmemgA(i);
    if (bmemv3 === 1) {
      mingen = bmemv2 > 0 ? mingen === 0 ? bmemv2 : mingen > bmemv2 ? bmemv2 : mingen : mingen === 0 ? gennum : mingen;
    }
  }
}

function drawWrld() {
  var i, w, h, d, x, y, x2, y2, wlw, vw, vh;
  if (cellsn === 0) {
    return;
  }
  calcWrld2();
  wrldx = (cwidth-wrldw) / 2;
  wrldy = (cheight-wrldh) / 2;
  wlw = 1 + (wrldw*wrldh/800000)*3;
  ctx2.lineWidth = wlw;
  ctx2.setLineDash([2,2]);
  ctx2.strokeStyle = "rgba(240, 240, 240, 1)";
  ctx2.strokeRect(Math.round(wrldx+wrldm/2-3.5), Math.round(wrldy+wrldm/2-3.5), Math.round(wrldw-wrldm+7.5), Math.round(wrldh-wrldm+7.5));
  ctx2.setLineDash([]);
  ctx2.strokeStyle = "rgba(130, 160, 0, 0.8)";
  ctx2.strokeRect(Math.round(wrldx), Math.round(wrldy-1.5), Math.round(wrldw), Math.round(wrldh+3));
  ctx2.fillStyle = "rgba(0, 0, 0, 0.7)";
  ctx2.fillRect(Math.round(wrldx+wlw), Math.round(wrldy+wlw), Math.round(wrldw-wlw*2), Math.round(wrldh-wlw*2));
  w = (wrldw-wrldm) / (cellsr-cellsl+1);
  h = (wrldh-wrldm) / (cellst-cellsb+1);
  d = (wrldw*wrldh)/(500*300)*0.4;
  for (i = 0; i < cellslen; i++) {
    bmemgA(i);
    if (bmemv3 === 1) {
      if (bmemv2 === gennum) {
        ctx2.fillStyle = "rgba(220, 30, 30, 0.7";
      } else {
        ctx2.fillStyle = "rgba(60, 170, 60, 0.7";
      }
      ctx2.fillRect(Math.round(wrldx - d * 2 + (wrldm/2+0.5) + w * (bmemv0 - cellsl)), Math.round(wrldy - d * 2 + (wrldm/2+0.5) + h * (cellst - bmemv1)), Math.round((w<1?1:w)+d*4), Math.round((h<1?1:h)+d*4));
    }
  }
  ctx2.lineWidth = 1+d*2;
  ctx2.setLineDash([]);
  vw = cwidth/(cellsz+(cellsz>grb?1:cellsz/grb));
  vh = cheight/(cellsz+(cellsz>grb?1:cellsz/grb));
  x = wrldx - d * 2 + (wrldm/2+0.5) + w * (cellX(posx) - vw / 2 - cellsl);
  x2 = x + vw * w + d * 4;
  y = wrldy - d * 2 + (wrldm/2+0.5) + h * (cellst - cellY(posy) - vh / 2 + 1);
  y2 = y + vh * h + d * 4;
  wrldax = x;
  wrlday = y;
  wrldaw = x2 - x;
  wrldah = y2 - y;
  if (wrlda) {
    ctx2.strokeStyle = "rgba(200, 200, 200, 1)";
  } else {
    ctx2.strokeStyle = "rgba(140, 140, 140, 1)";
  }
  if (x < wrldx+wrldw-wrldm/2+0.5 && x2 > wrldx+wrldm/2-0.5 && y >= wrldy + wrldm/2 - 1.5 && y < wrldy + wrldh - wrldm/2 + 0.5) {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x<wrldx+wrldm/2-0.5?wrldx+wrldm/2-0.5:x), Math.round(y));
    ctx2.lineTo(Math.round(x2>=wrldx+wrldw-wrldm/2+0.5?wrldx+wrldw-wrldm/2-0.5:x2), Math.round(y));
    ctx2.stroke();
  }
  if (x < wrldx+wrldw-wrldm/2+0.5 && x2 > wrldx+wrldm/2-0.5 && y2 >= wrldy + wrldm/2 - 0.5 && y2 < wrldy + wrldh - wrldm/2 + 0.5) {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x<wrldx+wrldm/2-0.5?wrldx+wrldm/2-0.5:x), Math.round(y2));
    ctx2.lineTo(Math.round(x2>=wrldx+wrldw-wrldm/2+0.5?wrldx+wrldw-wrldm/2-0.5:x2), Math.round(y2));
    ctx2.stroke();
  }
  if (y < wrldy+wrldh-wrldm/2+0.5 && y2 > wrldy+wrldm/2-0.5 && x >= wrldx + wrldm/2 - 1.5 && x < wrldx + wrldw - wrldm/2 + 0.5) {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x), Math.round(y<wrldy+wrldm/2-0.5?wrldy+wrldm/2-0.5:y));
    ctx2.lineTo(Math.round(x), Math.round(y2>=wrldy+wrldh-wrldm/2+0.5?wrldy+wrldh-wrldm/2-0.5:y2));
    ctx2.stroke();
  }
  if (y < wrldy+wrldh-wrldm/2+0.5 && y2 > wrldy+wrldm/2-0.5 && x2 >= wrldx + wrldm/2 - 0.5 && x2 < wrldx + wrldw - wrldm/2 + 0.5) {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x2), Math.round(y<wrldy+wrldm/2-0.5?wrldy+wrldm/2-0.5:y));
    ctx2.lineTo(Math.round(x2), Math.round(y2>=wrldy+wrldh-wrldm/2+0.5?wrldy+wrldh-wrldm/2-0.5:y2));
    ctx2.stroke();
  }
  if (wrlda) {
    ctx2.strokeStyle = "rgba(200, 200, 200, 0.5)";
  } else {
    ctx2.strokeStyle = "rgba(140, 140, 140, 0.5)";
  }
  if (x < wrldx+wrldw-wrldm/2+0.5 && x2 > wrldx+wrldm/2-0.5 && y >= wrldy + wrldm/2 - 1.5 && y < wrldy + wrldh - wrldm/2 + 0.5) {
    if (x<wrldx+wrldm/2-0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x), Math.round(y));
      ctx2.lineTo(Math.round(wrldx+wrldm/2-0.5), Math.round(y));
      ctx2.stroke();
    }
    if (x2>=wrldx+wrldw-wrldm/2+0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x2), Math.round(y));
      ctx2.lineTo(Math.round(wrldx+wrldw-wrldm/2+0.5), Math.round(y));
      ctx2.stroke();
    }
  } else {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x), Math.round(y));
    ctx2.lineTo(Math.round(x2), Math.round(y));
    ctx2.stroke();
  }
  if (x < wrldx+wrldw-wrldm/2+0.5 && x2 > wrldx+wrldm/2-0.5 && y2 >= wrldy + wrldm/2 - 0.5 && y2 < wrldy + wrldh - wrldm/2 + 0.5) {
    if (x<wrldx+wrldm/2-0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x), Math.round(y2));
      ctx2.lineTo(Math.round(wrldx+wrldm/2-0.5), Math.round(y2));
      ctx2.stroke();
    }
    if (x2>=wrldx+wrldw-wrldm/2+0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x2), Math.round(y2));
      ctx2.lineTo(Math.round(wrldx+wrldw-wrldm/2+0.5), Math.round(y2));
      ctx2.stroke();
    }
  } else {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x), Math.round(y2));
    ctx2.lineTo(Math.round(x2), Math.round(y2));
    ctx2.stroke();
  }
  if (y < wrldy+wrldh-wrldm/2+0.5 && y2 > wrldy+wrldm/2-0.5 && x >= wrldx + wrldm/2 - 1.5 && x < wrldx + wrldw - wrldm/2 + 0.5) {
    if (y<wrldy+wrldm/2-0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x), Math.round(y));
      ctx2.lineTo(Math.round(x), Math.round(wrldy+wrldm/2-0.5));
      ctx2.stroke();
    }
    if (y2>=wrldy+wrldh-wrldm/2+0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x), Math.round(y2));
      ctx2.lineTo(Math.round(x), Math.round(wrldy+wrldh-wrldm/2+0.5));
      ctx2.stroke();
    }
  } else {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x), Math.round(y));
    ctx2.lineTo(Math.round(x), Math.round(y2));
    ctx2.stroke();
  }
  if (y < wrldy+wrldh-wrldm/2+0.5 && y2 > wrldy+wrldm/2-0.5 && x2 >= wrldx + wrldm/2 - 0.5 && x2 < wrldx + wrldw - wrldm/2 + 0.5) {
    if (y<wrldy+wrldm/2-0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x2), Math.round(y));
      ctx2.lineTo(Math.round(x2), Math.round(wrldy+wrldm/2-0.5));
      ctx2.stroke();
    }
    if (y2>=wrldy+wrldh-wrldm/2+0.5) {
      ctx2.beginPath();
      ctx2.moveTo(Math.round(x2), Math.round(y2));
      ctx2.lineTo(Math.round(x2), Math.round(wrldy+wrldh-wrldm/2+0.5));
      ctx2.stroke();
    }
  } else {
    ctx2.beginPath();
    ctx2.moveTo(Math.round(x2), Math.round(y));
    ctx2.lineTo(Math.round(x2), Math.round(y2));
    ctx2.stroke();
  }
}

function drawScale() {
  var w = 11, h = Math.floor(cheight * slidh), p, q;
  if (h > cheight) {
    h = cheight;
  }
  if (h < 1) {
    h = 1;
  }
  var x = cwidth - w * 11.3, y = 130 + Math.floor((cheight - h - 170) / 2), fs, t;
  if (swzmcd2) {
    t = gts - swzmcd2 > swzmcdn2 ? 1 : (gts - swzmcd2) / swzmcdn2;
    if (!swzmf) {
      t = 1 - t;
    }
  } else {
    t = 1;
  }
  sclbx = x;
  sclby = y;
  sclbw = w;
  sclbh = h;
  if (swzmf || swzmcd2) {
    ctx2.strokeStyle = "rgba(120, 120, 170, " + (t*0.7) + ")";
    ctx2.setLineDash([]);
    ctx2.lineWidth = w/4;
    strokerr(ctx2, Math.round(x), Math.round(y), Math.round(w), Math.round(h), w/2);
  }
  swzmtx = sclbx - w - 7;
  swzmty = y + h - 35;
  swzmtw = 25;
  swzmth = 29;
  if (swzmf || swzmcd2) {
    if (swzmt || swzmcd) {
      drawStrImg(ctx2, "\u2A02", swzmtx - 3, swzmty + 23, 30, 0, 170, 255, 0.5 * (swzmcd2 ? t : 1), 3);
    } else {
      drawStrImg(ctx2, "\u2A02", swzmtx - 3, swzmty + 23, 30, 40, 110, 240, 0.5 * (swzmcd2 ? t : 1), 3);
    }
  }
  if (!swzmf || swzmcd2) {
    if (swzmt || swzmcd) {
      drawStrImg(ctx2, "\u2A01", swzmtx - 3, swzmty + 23, 30, 0, 170, 255, 0.5 * (swzmcd2 ? (1 - t) : 1), 3);
    } else {
      drawStrImg(ctx2, "\u2A01", swzmtx - 3, swzmty + 23, 30, 40, 110, 240, 0.5 * (swzmcd2 ? (1 - t) : 1), 3);
    }
  }
  if (swzmf || swzmcd2) {
    q = scale;
    if (scl) {
      fs = "rgba(50, 70, 90, " + (t*0.4) + ")";
      p = cury - scld;
      if (p < y) {
        p = y;
      }
      if (p >= y + h) {
        p = y + h - 1;
      }
      q = 100*(p-y)/h;
    } else {
      fs = "rgba(0, 0, 0, " + (t*0.6) + ")";
    }
    sclx = x+w/2;
    scly = y+h*q/100;
    sclr = w*1.5;
    drawStrImg(ctx2, "zm", Math.round(sclx+w/2-17), Math.round(scly+w/2-1), 15, 200, 200, 200, t * 0.8);
    ctx2.fillStyle = fs;
    ctx2.beginPath();
    ctx2.arc(Math.round(sclx), Math.round(scly), Math.round(sclr), 0, 2 * Math.PI);
    ctx2.fill();
    if (scl) {
      ctx2.strokeStyle = "rgba(0, 140, 180, " + (t*0.7) + ")";
    } else {
      ctx2.strokeStyle = "rgba(0, 100, 150, " + (t*0.7) + ")";
    }
    ctx2.arc(Math.round(sclx), Math.round(scly), Math.round(sclr), 0, 2 * Math.PI);
    ctx2.stroke();
  }
}

function drawSpeed() {
  var w = 11, h = Math.floor(cheight * slidh), p, q;
  if (h > cheight) {
    h = cheight;
  }
  var x = cwidth - w * 15.4, y = 130 + Math.floor((cheight - h - 170) / 2), fs, t;
  if (swzmcd2) {
    x = (w * 15.4 - w * 11.3) * (gts - swzmcd2 > swzmcdn2 ? 1 : (gts - swzmcd2) / swzmcdn2);
    if (swzmf) {
      x = (cwidth - w * 11.3) - x;
    } else {
      x = (cwidth - w * 15.4) + x;
    }
  } else if (!swzmf) {
    x = cwidth - w * 11.3;
  }
  t = 1;
  spdbx = x;
  spdby = y;
  spdbw = w;
  spdbh = h;
  ctx2.strokeStyle = "rgba(120, 120, 170, " + (t*0.7) + ")";
  ctx2.setLineDash([]);
  ctx2.lineWidth = w/4;
  strokerr(ctx2, Math.round(x), Math.round(y), Math.round(w), Math.round(h), w/2);
  q = speed;
  if (spd) {
    fs = "rgba(50, 70, 90, " + (t*0.4) + ")";
    p = cury - spdd;
    if (p < y) {
      p = y;
    }
    if (p >= y + h) {
      p = y + h - 1;
    }
    q = 100 - 100*(p-y)/h;
  } else {
    fs = "rgba(0, 0, 0, " + (t*0.6) + ")";
  }
  spdx = x+w/2;
  spdy = y+h-h*q/100;
  spdr = w*1.5;
  drawStrImg(ctx2, "spd", Math.round(x+w/2-14), Math.round(spdy+w/2+1), 15, 200, 200, 200, t * 0.8, 2);
  ctx2.fillStyle = fs;
  ctx2.beginPath();
  ctx2.arc(Math.round(spdx), Math.round(spdy), Math.round(spdr), 0, 2 * Math.PI);
  ctx2.fill();
  if (spd) {
    ctx2.strokeStyle = "rgba(0, 140, 180, " + (t*0.7) + ")";
  } else {
    ctx2.strokeStyle = "rgba(0, 100, 150, " + (t*0.7) + ")";
  }
  ctx2.arc(Math.round(spdx), Math.round(spdy), Math.round(spdr), 0, 2 * Math.PI);
  ctx2.stroke();
}

function drawColrs() {
  var w = 11, h = Math.floor(cheight * slidh), p, q;
  if (h > cheight) {
    h = cheight;
  }
  var x = cwidth - w * 7.2, y = 130 + Math.floor((cheight - h - 170) / 2), fs, t;
  t = 1;
  colrbx = x;
  colrby = y;
  colrbw = w;
  colrbh = h;
  ctx2.strokeStyle = "rgba(120, 120, 170, " + (t*0.7) + ")";
  ctx2.setLineDash([]);
  ctx2.lineWidth = w/4;
  strokerr(ctx2, Math.round(x), Math.round(y), Math.round(w), Math.round(h), w/2);
  q = colrs;
  if (colr) {
    fs = "rgba(50, 70, 90, " + (t*0.4) + ")";
    p = cury - colrd;
    if (p < y) {
      p = y;
    }
    if (p >= y + h) {
      p = y + h - 1;
    }
    q = 100 - 100*(p-y)/h;
  } else {
    fs = "rgba(0, 0, 0, " + (t*0.6) + ")";
  }
  colrx = x+w/2;
  colry = y+h-h*q/100;
  colrr = w*1.5;
  drawStrImg(ctx2, "clr", Math.round(x+w/2-13) + 2, Math.round(colry+w/2-1), 16, 200, 200, 200, t * 0.8);
  ctx2.fillStyle = fs;
  ctx2.beginPath();
  ctx2.arc(Math.round(colrx), Math.round(colry), Math.round(colrr), 0, 2 * Math.PI);
  ctx2.fill();
  if (colr) {
    ctx2.strokeStyle = "rgba(0, 140, 180, " + (t*0.7) + ")";
  } else {
    ctx2.strokeStyle = "rgba(0, 100, 150, " + (t*0.7) + ")";
  }
  ctx2.arc(Math.round(colrx), Math.round(colry), Math.round(colrr), 0, 2 * Math.PI);
  ctx2.stroke();
}

function drawCSize() {
  var w = 11, h = Math.floor(cheight * slidh), p, q;
  if (h > cheight) {
    h = cheight;
  }
  var x = cwidth - w * 3.1, y = 130 + Math.floor((cheight - h - 170) / 2), fs, t;
  t = 1;
  csizbx = x;
  csizby = y;
  csizbw = w;
  csizbh = h;
  ctx2.strokeStyle = "rgba(120, 120, 170, " + (t*0.7) + ")";
  ctx2.setLineDash([]);
  ctx2.lineWidth = w/4;
  strokerr(ctx2, Math.round(x), Math.round(y), Math.round(w), Math.round(h), w/2);
  q = csize;
  if (csiz) {
    fs = "rgba(50, 70, 90, " + (t*0.4) + ")";
    p = cury - csizd;
    if (p < y) {
      p = y;
    }
    if (p >= y + h) {
      p = y + h - 1;
    }
    q = 100 - 100*(p-y)/h;
  } else {
    fs = "rgba(0, 0, 0, " + (t*0.6) + ")";
  }
  csizx = x+w/2;
  csizy = y+h-h*q/100;
  csizr = w*1.5;
  drawStrImg(ctx2, "sz", Math.round(x+w/2-12) + 3, Math.round(csizy+w/2-1), 17, 200, 200, 200, t * 0.8);
  ctx2.fillStyle = fs;
  ctx2.beginPath();
  ctx2.arc(Math.round(csizx), Math.round(csizy), Math.round(csizr), 0, 2 * Math.PI);
  ctx2.fill();
  if (csiz) {
    ctx2.strokeStyle = "rgba(0, 140, 180, " + (t*0.7) + ")";
  } else {
    ctx2.strokeStyle = "rgba(0, 100, 150, " + (t*0.7) + ")";
  }
  ctx2.arc(Math.round(csizx), Math.round(csizy), Math.round(csizr), 0, 2 * Math.PI);
  ctx2.stroke();
}

function drawTitle() {
  var x, s, h, fs2, fs = Math.floor(cwidth/500*30), z;
  fs2 = fs;
  ctx2.font = fs + "px " + font;
  x = titlemode === 0 ? 0 : Math.log(titlefds-(titlemode===2&&titlefd>titlex?titlex:titlefd)+1)/Math.log(titlefds+1);
  fs = fs2*(1-x);
  s = ""+(70-Math.floor(70*x));
  ctx2.fillStyle = "rgba("+s+","+s+","+s+","+(1-1*x)+")";
  ctx2.shadowBlur = 5;
  ctx2.shadowColor = "#EEEEEE";
  if (!tmet) {
    tmet = [];
  }
  if (!tmet[1]) {
    tmet[1] = ctx2.measureText(title[1]);
  }
  if (titlemode < 2) {
    if (!tmet[0]) {
      tmet[0] = ctx2.measureText(title[0]);
    }
    if (!tmet[2]) {
      tmet[2] = ctx2.measureText(title[2]);
    }
    h = fs*4;
    if (cheight < h) {
      ctx2.fillText(title[1], Math.round((cwidth-tmet[1].width)/2), Math.round((cheight-fs)/2+fs));
    } else {
      ctx2.fillText(title[0], Math.round((cwidth-tmet[0].width)/2), Math.round((cheight-h)/2+fs));
      ctx2.fillText(title[1], Math.round((cwidth-tmet[1].width)/2), Math.round((cheight-h)/2+fs*2.5));
      ctx2.fillText(title[2], Math.round((cwidth-tmet[2].width)/2), Math.round((cheight-h)/2+fs*4));
    }
  }
  if (titlemode >= 2 || titlemode === 1 && titlefd < titlex) {
    if (titlemode === 1) {
      tfs3 = 0;
      x = (titlex-titlefd)/titlex;
      s = ""+(Math.floor(70*x/5.5));
      ctx2.fillStyle = "rgba("+s+","+s+","+s+","+(1*x/7)+")";
    }
    fs = fs2*(x+1.1)*0.34;
    if (fs < tfs3) {
      fs = tfs3;
    }
    tfs3 = fs;
    h = fs*2.5;
    if (cheight < h) {
      ctx2.fillText(title[1], Math.round((cwidth-tmet[1].width)/2), Math.round((cheight-fs)/2+fs));
    } else {
      if (!tmet[3]) {
        tmet[3] = ctx2.measureText(title[3]);
      }
      ctx2.fillText(title[3], Math.round((cwidth-tmet[3].width)/2), Math.round((cheight-h)/2+fs));
      ctx2.fillText(title[1], Math.round((cwidth-tmet[1].width)/2), Math.round((cheight-h)/2+fs*2.5));
    }
    if (titleh) {
      if (!tmet[4]) {
        tmet[4] = ctx2.measureText(title[4]);
      }
      if (!tmet[5]) {
        tmet[5] = ctx2.measureText(title[5]);
      }
      if (!titlemf && msgll > 0) {
        titlemf = true;
        titlecd3 = gts;
      } else if (titlemf && msgll === 0) {
        titlemf = false;
        titlecd3 = gts;
      }
      if (titlecd3) {
        z = gts-titlecd3>titlecdn3?0.7:((gts-titlecd3)/titlecdn3)*0.7;
        if (titlemf) {
          z = 1 - z;
        } else {
          z = 0.3 + z;
        }
      } else {
        if (titlemf) {
          z = 0.3;
        } else {
          z = 1;
        }
      }
      if (titlemode === 1) {
        x = (titlex-titlefd)/titlex;
        x = 1*x/7;
      } else {
        x = 1-1*x;
      }
      x = x * z;
      x *= titlecd2 ? gts - titlecd2 > titlecdn2 ? 0 : 1 - (gts - titlecd2) / titlecdn2 : 1;
      ctx2.fillStyle = "rgba(170,0,0,"+(x*1.4)+")";
      ctx2.fillText(title[4], Math.round((cwidth-tmet[4].width)/2), Math.round((cheight-h)/2-fs/2));
      ctx2.fillText(title[5], Math.round((cwidth-tmet[5].width)/2), Math.round((cheight-h)/2+fs*4));
      ctx2.font = Math.floor(fs2/2) + "px " + font;
      if (!tmet[6]) {
        tmet[6] = ctx2.measureText(title[6]);
      }
      ctx2.fillText(title[6], Math.round((cwidth-tmet[6].width)/2), Math.round((cheight-h)/2+fs*5));
    }
  }
  ctx2.shadowBlur = 0;
}

function drawMsgs() {
  var i, x, s, h, fs2, fs = Math.floor(cwidth/500*22), y1, y2, y3;
  ctx2.shadowBlur = 5;
  ctx2.shadowColor = "#EEEEEE";
  ctx2.font = fs + "px " + font;
  for (i = 0; i < msgll; i++) {
    if (msgl[i][0]) {
      if (msgl[i][3] === 0 && gts - msgl[i][2] > 1200) {
        msgl[i][3] = 1;
        msgl[i][2] = gts;
      } else if (msgl[i][3] === 1 && gts - msgl[i][2] > msgl[i][1]) {
        msgl[i][3] = 2;
        msgl[i][2] = gts;
        drawMsgsStm(msgl[i][0][0], msgl[i][0][2]);
      } else if (msgl[i][3] === 2 && gts - msgl[i][2] > 1200) {
        msgl[i][0] = null;
        msgl[i][4] = null;
      } else {
        x = msgl[i][3] !== 1 ? (gts-msgl[i][2]) / 1200 : 1;
        x = 0.85-Math.log(x*0.5)/Math.sqrt(x*0.4)*0.1;
        if (msgl[i][3] === 2) {
          x = 1-Math.sqrt(0.8/x);
        }
        fs2 = fs*x;
        s = ""+Math.floor(70*x);
        ctx2.fillStyle = "rgba("+Math.floor(255*x)+","+s+","+s+","+(i<msgll-1?0.18+x*0.4*(i/(msgll-1)):x*1)+")";
        h = fs2*4;
        y1 = (cheight-h)/2+fs2;
        y2 = (cheight-h)/2+fs2*2.5;
        y3 = (cheight-h)/2+fs2*4;
        if (msgl[i][0].length > 0) {
          ctx2.fillText(msgl[i][0][0], Math.round((cwidth-msgl[i][4][0].width)/2*(1/x)+i*18-150), Math.round(y1-(msgll-1)*15+i*30));
        }
        if (msgl[i][0].length > 1) {
          ctx2.fillText(msgl[i][0][1], Math.round((cwidth-msgl[i][4][1].width)/2*(1/x)+i*18-150), Math.round(y2-(msgll-1)*15+i*30));
        }
        if (msgl[i][0].length > 2) {
          ctx2.fillText(msgl[i][0][2], Math.round((cwidth-msgl[i][4][2].width)/2*(1/x)+i*18-150), Math.round(y3-(msgll-1)*15+i*30));
        }
      }
    }
  }
  ctx2.shadowBlur = 0;
  while (msgll > 0 && !msgl[msgll-1][0]) {
    msgll--;
  }
}

function drawMsgsStm(s1, s2) {
  s1 = s1.trim().replace(/ /g," \u22C5 ");
  s2 = s2.trim().replace(/ /g," \u22C5 ");
  swstmsg(s1 + "   \u22C5", s2 + "   \u22C5");
}

function drawStmsg() {
  var x;
  ctx2.font = "25px " + font;
  if (!stmsgntm1) {
    stmsgntm1 = ctx2.measureText(stmsgn1);
  }
  if (!stmsgntm2) {
    stmsgntm2 = ctx2.measureText(stmsgn2);
  }
  if (!stmsgotm1) {
    stmsgotm1 = ctx2.measureText(stmsgo1);
  }
  if (!stmsgotm2) {
    stmsgotm2 = ctx2.measureText(stmsgo2);
  }
  if (stmsgcd) {
    x = (gts-stmsgcd)>stmsgcdn?1:(gts-stmsgcd)/stmsgcdn;
    if (stmsgn1.length > 0 || stmsgn2.length > 0) {
      ctx2.fillStyle = "rgba("+Math.floor(170+70*x)+", "+Math.floor(240*x)+", "+Math.floor(240*x)+", "+(x*0.85)+")";
      ctx2.fillText(stmsgn1, cwidth - 680 - stmsgntm1.width, 43);
      ctx2.fillText(stmsgn2, cwidth - 653 - stmsgntm2.width, 75);
    }
    if (stmsgo1.length > 0 || stmsgo2.length > 0) {
      ctx2.fillStyle = "rgba("+Math.floor(170+70*x)+", "+Math.floor(110+130*x)+", "+Math.floor(130+110*x)+", "+((1-x)*0.7)+")";
      ctx2.fillText(stmsgo1, cwidth - 680 - stmsgotm1.width, 43);
      ctx2.fillText(stmsgo2, cwidth - 653 - stmsgotm2.width, 75);
    }
  } else if (stmsgcd2) {
    if (stmsgo1.length > 0 || stmsgo2.length > 0) {
      x = (gts-stmsgcd2)>stmsgcdn2?1:(gts-stmsgcd2)/stmsgcdn2;
      ctx2.fillStyle = "rgba("+Math.floor(240-70*x)+", "+Math.floor(240-130*x)+", "+Math.floor(240-110*x)+", "+(0.85-0.15*x)+")";
      ctx2.fillText(stmsgo1, cwidth - 680 - stmsgotm1.width, 43);
      ctx2.fillText(stmsgo2, cwidth - 653 - stmsgotm2.width, 75);
    }
  } else if (stmsgo1.length > 0 || stmsgo2.length > 0) {
    ctx2.fillStyle = "rgba(170, 110, 130, 0.7)";
    ctx2.fillText(stmsgo1, cwidth - 680 - stmsgotm1.width, 43);
    ctx2.fillText(stmsgo2, cwidth - 653 - stmsgotm2.width, 75);
  }
}

function drawRunToggle() {
  var a, b;
  a = 1;
  b = 1;
  if (runcd3) {
    if (run) {
      a = 1 - (gts-runcd3>runcdn3?1:(gts-runcd3)/runcdn3);
      b = 1 - a;
    } else {
      a = gts-runcd3>runcdn3?1:(gts-runcd3)/runcdn3;
      b = 1 - a;
    }
  }
  runtx = cwidth - 461;
  ctx2.setLineDash([]);
  ctx2.lineWidth = 1;
  if (run || runcd3) {
    if (!runcd) {
      runcd = gts;
      runcdc++;
      if (runcdc > 2) {
        runcdc = 1;
      }
    }
    drawStrImg(ctx2, "\u25B7", runtx-5, 134, 32, 100, 150, 250, 0.7 * b);
    drawStrImg(ctx2, "\u25B7", runtx+23, 134, 32, 100, 150, 250, 0.7 * b);
    if (runcdc === 1) {
      drawStrImg(ctx2, "\u25B7", runtx-9, 138, 42, 170, 250, 250, 0.7 * b);
    } else if (runcdc === 2) {
      drawStrImg(ctx2, "\u25B7", runtx+19, 138, 42, 170, 250, 250, 0.7 * b);
    }
  }
  if (!run || runcd3) {
    if (histgn > 0 && !runcd3 || runcd3 && runbc === 1 && run) {
      drawStrImg(ctx2, "\u25B7", runtx-6, 135, 34, 160, 70, 40, a);
      drawStrImg(ctx2, "\u25B7", runtx+22, 135, 34, 160, 70, 40, a);
      runbc = 1;
    } else {
      drawStrImg(ctx2, "\u25B7", runtx-6, 135, 34, 40, 110, 240, a);
      drawStrImg(ctx2, "\u25B7", runtx+22, 135, 34, 40, 110, 240, a);
      runbc = 0;
    }
  }
  runty = 103;
  runtw = 56;
  runth = 41;
  if (runcd2 || runcd4 || runcd5) {
    drawStrImg(ctx2, "\u25B7", runtx-6, 135, 34, 200, 200, 200, 0.5*(runcd2?(gts-runcd2)>runcdn2?1:(gts-runcd2)/runcdn2:runcd4?(gts-runcd4)>runcdn4?0:(1-(gts-runcd4)/runcdn4):1));
    drawStrImg(ctx2, "\u25B7", runtx+22, 135, 34, 200, 200, 200, 0.5*(runcd2?(gts-runcd2)>runcdn2?1:(gts-runcd2)/runcdn2:runcd4?(gts-runcd4)>runcdn4?0:(1-(gts-runcd4)/runcdn4):1));
  }
}

function drawNGenButton() {
  var s;
  ngenbx = cwidth - 540;
  if (ngen) {
    drawStrImg(ctx2, "\u2AA2", ngenbx - 3, 138, 60, 170, 170, 255, 1);
  } else if (ngenb || ngencd5) {
    drawStrImg(ctx2, "\u2AA2", ngenbx - 3, 138, 60, 0, 170, 255, 1);
  } else if (genbbl) {
    drawStrImg(ctx2, "\u2AA2", ngenbx - 3, 138, 60, 120, 120, 120, 0.5);
  } else if (histgn > 0 && (hupdc > 0 || cruleb !== histcr[0] || crules !== histcr[1])) {
    drawStrImg(ctx2, "\u2AA2", ngenbx - 3, 138, 60, 160, 70, 40, 1);
  } else {
    drawStrImg(ctx2, "\u2AA2", ngenbx - 3, 138, 60, 40, 110, 240, 1);
  }
  ngenby = 101;
  ngenbw = 40;
  ngenbh = 42;
  if (histgn === 0) {
    ngenfx = 0;
  } else {
    ctx2.font = "17px " + font;
    s = "" + histgn;
    if (!(histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1])) {
      ctx2.fillStyle = "rgba(120, 120, 120, 0.7)";
      s = s + " \u2299";
    } else if ((ffw === 1 || ngenfcd) && ffwm === 0) {
      ctx2.fillStyle = "rgba(0, 170, 255, 1)";
      s = s + " \u21FE";
    } else if ((ffw === 1 || ngenfcd2) && ffwm === -1) {
      ctx2.fillStyle = "rgba(170, 170, 255, 1)";
      s = s + " \u21FE";
    } else {
      ctx2.fillStyle = "rgba(40, 110, 240, 1)";
      s = s + " \u2299";
    }
    ngenfx = ngenbx + ngenbw - (s.length>3?3:s.length) * 10 - 14;
    ctx2.fillText(s, ngenfx - 1, 99);
    ngenfx += 1;
    ngenfy = 83;
    ngenfw = s.length * 9 + 8;
    ngenfh = 27;
  }
}

function drawPGenButton() {
  var s;
  pgenbx = cwidth - 632;
  if (pgen) {
    drawStrImg(ctx2, "\u2AA1", pgenbx - 4, 138, 60, 170, 170, 255, 1);
  } else if (pgenb || pgencd5) {
    drawStrImg(ctx2, "\u2AA1", pgenbx - 4, 138, 60, 0, 170, 255, 1);
  } else if (histgp < 1 || genbbl) {
    drawStrImg(ctx2, "\u2AA1", pgenbx - 4, 138, 60, 120, 120, 120, 0.5);
  } else if (histgn > 0 && hupdc > 0) {
    drawStrImg(ctx2, "\u2AA1", pgenbx - 4, 138, 60, 160, 70, 40, 1);
  } else {
    drawStrImg(ctx2, "\u2AA1", pgenbx - 4, 138, 60, 40, 110, 240, 1);
  }
  pgenby = 104;
  pgenbw = 36;
  pgenbh = 39;
  if (histgp > 0) {
    ctx2.font = "17px " + font;
    s = "" + histgp;
    if (!(histgp > 0 && (histgn === 0 || hupdc === 0))) {
      ctx2.fillStyle = "rgba(120, 120, 120, 0.7)";
      s = "\u2299 " + s;
    } else if ((ffw === -1 || pgenfcd) && ffwm === 0) {
      ctx2.fillStyle = "rgba(0, 170, 255, 1)";
      s = "\u21FD " + s;
    } else if ((ffw === -1 || pgenfcd2) && ffwm === -1) {
      ctx2.fillStyle = "rgba(170, 170, 255, 1)";
      s = "\u21FD " + s;
    } else {
      ctx2.fillStyle = "rgba(40, 110, 240, 1)";
      s = "\u2299 " + s;
    }
    pgenfx = pgenbx + 9;
    if (s.length > 3) {
      pgenfx -= (s.length-3)*10;
    }
    ctx2.fillText(s, pgenfx - 3, 99);
    pgenfx -= 1;
    pgenfy = 83;
    pgenfw = s.length * 9 + 9;
    pgenfh = 27;
  }
}

function drawCapButton() {
  var x, y, sl, sr, p0, pp, sps, q;
  pp = 0;
  p0 = 0;
  if (histp > 0) {
    if ((pp = hist[histq0[0]][0][histq0[1]][11][0]) > 0) {
      p0 = hist[histq0[0]][0][histq0[1]][11][1];
      sps = hist[histq0[0]][0][histq0[1]][11][2] > 0 || hist[histq0[0]][0][histq0[1]][11][3] > 0;
    }
  }
  sl = "";
  sr = "";
  if (p0 > 0 && histp > 0) {
    x = Math.floor(histp/pp);
    if (x > 0) {
      sl += x + "\u00D7" + pp;
      if (x * pp < histp) {
        sl += "\u002B";
      }
    }
    x = histp - x * pp;
    if (x > 0) {
      sl += x;
    }
  }
  if (histp < p0 || hist[histh][0][histi][11][0] > 0) {
    if (histp < p0) {
      y = p0 - histp;
    } else {
      pp = hist[histh][0][histi][11][0];
      y = hist[histh][0][histi][11][1];
    }
    x = Math.floor(y/pp);
    if (x > 0) {
      sr += x + "\u00D7" + pp;
      if (x * pp < y) {
        sr += "\u002B";
      }
    }
    x = y - x * pp;
    if (x > 0) {
      sr += x;
    }
  }
  sr += "";
  osctlw = 0;
  osctrw = 0;
  if (sl.length > 0 || sr.length > 0) {
    if (sps) {
      drawStrImg(ctx2, "S", cwidth - 575, 164, 20, 170, 200, 170, 0.7);
      x = 570;
      y = 566;
    } else {
      drawStrImg(ctx2, "O", cwidth - 577, 163, 21, 170, 200, 170, 0.7);
      x = 571;
      y = 566;
    }
    ctx2.font = "17px " + font;
    if (sl.length > 0) {
      if (!(histgp > 0 && (histgn === 0 || hupdc === 0))) {
        ctx2.fillStyle = "rgba(120, 120, 120, 0.7)";
        sl = "\u2299 " + sl;
      } else if ((ffw === -1 || pgenfcd) && ffwm === 2) {
        ctx2.fillStyle = "rgba(170, 170, 255, 1)";
        sl = "\u21FD " + sl;
      } else if ((ffw === -1 || pgenfcd2) && ffwm === 1) {
        ctx2.fillStyle = "rgba(0, 170, 255, 1)";
        sl = "\u21FD " + sl;
      } else {
        ctx2.fillStyle = "rgba(40, 110, 240, 0.9)";
        sl = "\u2299 " + sl;
      }
      osctlx = cwidth - x - (sl.length+2) * 11;
      ctx2.fillText(sl, osctlx - 2, 165);
      osctlw = sl.length * 11 + 4;
    }
    if (sr.length > 0) {
      if (!(histgn > 0 && hupdc === 0 && cruleb === histcr[0] && crules === histcr[1])) {
        ctx2.fillStyle = "rgba(120, 120, 120, 0.7)";
        sr = sr + " \u2299";
      } else if ((ffw === 1 || ngenfcd) && ffwm === 2) {
        ctx2.fillStyle = "rgba(170, 170, 255, 1)";
        sr = sr + " \u21FE";
      } else if ((ffw === 1 || ngenfcd2) && ffwm === 1) {
        ctx2.fillStyle = "rgba(0, 170, 255, 1)";
        sr = sr + " \u21FE";
      } else {
        ctx2.fillStyle = "rgba(40, 110, 240, 0.9)";
        sr = sr + " \u2299";
      }
      osctrx = cwidth - y + 2 * 11 + 6;
      ctx2.fillText(sr, osctrx - 3, 165);
      osctrw = sr.length * 11 + 3;
    }
    osctly = 151;
    osctlh = 16;
    osctry = osctly;
    osctrh = osctlh;
  }
  if (ffw === 0 && ffwsbf || ffw !== 0 && !ffwsbf) {
    ffwsbf = ffw !== 0;
    if (!ffwsbcd || gts - ffwsbcd > ffwsbcdn) {
      ffwsbcd = gts;
    } else {
      ffwsbcd = gts - (ffwsbcdn - (gts - ffwsbcd));
    }
    if (ffw === 0) {
      ffwsbm = ffwsbm === -1 ? 1 : 2;
    } else {
      ffwsbm = ffwsbm === -1 ? 3 : 4;
    }
  }
  if (!ffwsbcd) {
    ffwsbm = 0;
  }
  if (capcd || histgn > 0 || ffwsbcd || ffw !== 0) {
    x = !ffwsbcd && ffw === 0 ? 0 : ffwsbcd ? gts - ffwsbcd > ffwsbcdn ? 1 : (gts - ffwsbcd) / ffwsbcdn : 1;
    if (ffwsbcd && (ffwsbm === 1 || ffwsbm === 2)) {
      x = 1 - x;
    }
    captx = cwidth - 585;
    capty = 107;
    captw = 35;
    capth = 35;
    if (x < 1 && (capcd || histgn > 0 && ffw === 0 || ffwsbcd && (ffwsbm === 1 || ffwsbm === 3))) {
      if (!ffwsbcd) {
        ffwsbm = -1;
      }
      if (capcd && (gts - capcd)%300>=150) {
        drawStrImg(ctx2, "\u29BB", captx, 137, 49, 240, 0, 0, 0.7 * (1 - x));
      } else {
        drawStrImg(ctx2, "\u29BB", captx, 137, 49, 160, 70, 40, 0.7 * (1 - x));
      }
    }
    captyffw = 67;
    if (x > 0 && (ffw !== 0 || ffwsbcd)) {
      drawStrImg(ctx2, "\u29B5", captx - 6, 100, 49, 40, 110, 240, 0.8 * x);
    }
  }
  x = 0;
  y = 0;
  if (hist[histh][0][histi][2] > 0) {
    y = hist[histh][0][histi][2] + 1;
  } else {
    if (histgp > 1) {
      x = hist[histq0[0]][0][histq0[1]][2] + 1;
    }
  }
  sl = "";
  sr = "";
  if (x > 1) {
    sl = "\u21FD" + x;
  }
  if (y > 1) {
    sr = "" + y + "\u21FE";
  }
  if (sl.length > 0 || sr.length > 0) {
    q = updc();
    if (q[1] > 0) {
      ctx2.fillStyle = "rgba(200, 200, 200, 0.4)";
    } else {
      ctx2.fillStyle = "rgba(200, 200, 200, 0.6)";
    }
    ctx2.font = "13px " + font;
    ctx2.fillText(sl.length > 0 ? sl : sr, cwidth - 568 - ((sl.length > 0 ? sl : sr).length*9/2), 99);
  }
  if (capcd2) {
    ctx2.font = "17px " + font;
    ctx2.fillStyle = "rgba(200, 200, 200, " + (0.7*((gts-capcd2)>capcdn2?0:1-(gts-capcd2)/capcdn2)) + ")";
    ctx2.fillText(capcds2, cwidth - 568 - (capcds2.length/2)*11, 133);
  }
}

function drawInfo() {
  var s, x, z, n, n1, n2, q, m;
  if (genbtcd) {
    z = gts - genbtcd > genbtcdn ? 1 : (gts - genbtcd) / genbtcdn;
    if (genbtl) {
      z = 1 - z;
    }
  } else {
    z = 0;
  }
  x = 80 * z;
  ctx2.font = "13px " + font;
  ctx2.fillStyle = "rgba(" + (170+x) + ", 170, 170, 0.7)";
  x = 30;
  ctx2.fillText("g", x - 10, 60);
  if (z > 0) {
    ctx2.font = "30px " + font;
    ctx2.fillStyle = "rgba(170, 0, 0, " + z + ")";
    ctx2.fillText("\u22C5", x - 7, 68);
  }
  ctx2.font = "43px " + font;
  n = 0;
  if (tickcr1 > 0 && tickcr2 > 0 && tickcr3 / tickcr2 > 0) {
    if (tickcr1 > tickcr3 / tickcr2) {
      n = 100 * tickcr1 / (tickcr3 / tickcr2) - 100;
    } else {
      n = 0 - 100 * (tickcr3 / tickcr2) / tickcr1 + 100;
    }
    if (n > 100) {
      n = 100;
    } else if (n < -100) {
      n = -100;
    }
  }
  ctx2.fillStyle = "rgba(" + (100 - n) + ", " + (100 + n/2) + ", " + (100 + n) + ", 1)";
  ctx2.fillText("" + gennum, x + 1, 67);
  x = 30;
  ctx2.font = "13px " + font;
  ctx2.fillStyle = "rgba(170, 170, 170, 0.7)";
  ctx2.fillText("pop", x, 106);
  x += 28;
  s = "" + cellsn;
  ctx2.font = "30px " + font;
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  ctx2.fillText(s, x + 2, 112);
  if (fpattf === 2) {
    ctx2.font = "25px " + font;
    ctx2.fillStyle = "rgba(170, 200, 170, 0.8)";
    ctx2.fillText("\u21FD" + fpattn, x + 21 * s.length, 109);
  }
  q = updc();
  if (gennum === 0) {
    q[0]++;
  }
  n1 = -1;
  if (q[0] === 0 && q[1] === 0) {
    if (histp > 0) {
      if ((htgen2 < 0 || htgen2 >= hist[histq[2][0]][0][histq[2][1]][15]) && (n2 = htgen2 < 0 ? hist[histq[2][0]][0][histq[2][1]][15] : htgen2) < gennum) {
        n1 = hist[histq[2][0]][0][histq[2][1]][14] + Math.ceil(histp/hist[histq0[0]][0][histq0[1]][11][0]) * hist[histq0[0]][0][histq0[1]][16];
        if (htgen2 >= 0) {
          n1 -= httot2;
        }
        n1 = Math.floor(n1 / (gennum - n2) * 100) / 100;
      }
    } else {
      if ((htgen2 < 0 || htgen2 >= hist[histh][0][histi][15]) && (n2 = htgen2 < 0 ? hist[histh][0][histi][15] : htgen2) < gennum) {
        n1 = hist[histh][0][histi][14];
        if (htgen2 >= 0) {
          n1 -= httot2;
        }
        n1 = Math.floor(n1 / (gennum - n2) * 100) / 100;
      }
    }
  }
  if (n1 < 0) {
    s = "- -";
    htgen2x = 0;
  } else {
    s = "" + n1;
  }
  n = 142;
  ctx2.font = "20px " + font;
  if (htgent || htgencd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 0.7)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 0.7)";
  }
  ctx2.fillText("H", x - 17, n);
  if (htgent || htgencd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 1)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 1)";
  }
  ctx2.fillText(s, x + 5, n);
  htgentx = x - 13;
  htgenty = n - 18;
  htgentw = 23 + s.length * 10;
  htgenth = 19;
  if (htgen2 < 0) {
    htgen2x = 0;
  } else {
    ctx2.font = "15px " + font;
    ctx2.fillStyle = "rgba(160, 160, 160, 0.8)";
    m = x + 5 + s.length * 10 + 20;
    if (m > htgen2x) {
      htgen2x = m;
    }
    ctx2.fillText("(" + htgen2 + ")", htgen2x, n - 2);
  }
  if (histp > 0) {
    n1 = hist[histq[2][0]][0][histq[2][1]][12];
    n2 = hist[histq[2][0]][0][histq[2][1]][13];
  } else {
    n1 = hist[histh][0][histi][12];
    n2 = hist[histh][0][histi][13];
  }
  n = 168;
  if (n1 === n2) {
    ctx2.font = "19px " + font;
    if (q[1] > 0) {
      drawStrImg(ctx2, "\uFF0B", x - 17, n - 4, 16, 160, 160, 160, 0.4);
      drawStrImg(ctx2, "\uFF0D", x - 17, n + 5, 16, 160, 160, 160, 0.4);
    } else {
      drawStrImg(ctx2, "\uFF0B", x - 17, n - 4, 16, 160, 160, 160, 1);
      drawStrImg(ctx2, "\uFF0D", x - 17, n + 5, 16, 160, 160, 160, 1);
    }
    if (q[1] > 0) {
      ctx2.fillStyle = "rgba(150, 150, 150, 0.4)";
    } else {
      ctx2.fillStyle = "rgba(170, 170, 170, 1)";
    }
    ctx2.fillText(""+n1, x + 5, n + 4);
    n += 4;
  } else {
    if (n1 > 0) {
      if (n2 === 0) {
        ctx2.font = "19px " + font;
        if (q[1] > 0) {
          drawStrImg(ctx2, "\uFF0B", x - 17, n - 1, 16, 160, 160, 160, 0.4);
        } else {
          drawStrImg(ctx2, "\uFF0B", x - 17, n - 1, 16, 160, 160, 160, 1);
        }
        n += 4;
      } else {
        ctx2.font = "16px " + font;
        if (q[1] > 0) {
          drawStrImg(ctx2, "\uFF0B", x - 17, n - 3, 16, 160, 160, 160, 0.4);
        } else {
          drawStrImg(ctx2, "\uFF0B", x - 17, n - 3, 16, 160, 160, 160, 1);
        }
      }
      if (q[1] > 0) {
        ctx2.fillStyle = "rgba(150, 150, 150, 0.4)";
      } else {
        ctx2.fillStyle = "rgba(170, 170, 170, 1)";
      }
      ctx2.fillText(""+n1, x + 5, n);
      n = 189;
    }
    if (n2 > 0) {
      if (n1 === 0) {
        ctx2.font = "19px " + font;
        if (q[1] > 0) {
          drawStrImg(ctx2, "\uFF0D", x - 17, n - 1, 16, 160, 160, 160, 0.4);
        } else {
          drawStrImg(ctx2, "\uFF0D", x - 17, n - 1, 16, 160, 160, 160, 1);
        }
        n += 4;
      } else {
        ctx2.font = "16px " + font;
        if (q[1] > 0) {
          drawStrImg(ctx2, "\uFF0D", x - 17, n - 3, 16, 160, 160, 160, 0.4);
        } else {
          drawStrImg(ctx2, "\uFF0D", x - 17, n - 3, 16, 160, 160, 160, 1);
        }
      }
      if (q[1] > 0) {
        ctx2.fillStyle = "rgba(150, 150, 150, 0.4)";
      } else {
        ctx2.fillStyle = "rgba(170, 170, 170, 1)";
      }
      ctx2.fillText(""+n2, x + 5, n);
    }
  }
  ctx2.font = "14px " + font;
  if (dsppxct || dsppxccd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 1)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 1)";
  }
  dsppxctx = 38;
  s = "" + (Math.floor(cellsz*100)/100) + "\u00B2";
  dsppxctw = 8 * s.length + 4;
  ctx2.fillText(s, dsppxctx, 384);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  ctx2.fillText("px/c", dsppxctx + s.length * 8 + 7, 384);
  dsppxcty = 371;
  dsppxctw = 8 * s.length;
  dsppxcth = 16;
  if (fpattf !== 0) {
    ctx2.font = "30px " + font;
    ctx2.fillStyle = "rgba(160, 70, 40, 1)";
    ctx2.fillText("w,h / c : "+fpattw+","+fpatth+" / "+(fpattf===1?fpattn:fpattnx), 190, 330);
  }
  if (fpattf === 1) {
    ctx2.fillStyle = "rgba(160, 70, 40, 1)";
    ctx2.fillText("char : "+fpattpos+" / "+(fpatt?fpatt.length:0), 230, 380);
  }
  if (fpattf === 2) {
    ctx2.fillStyle = "rgba(160, 70, 40, 1)";
    ctx2.fillText("pos : "+fpattzxp+","+fpattzyp, 241, 380);
    ctx2.fillText("on<>off : "+fpattnt, 168, 430);
  }
}

function drawDiamond() {
  var s, x, y, x2, y2, z, a, b, q, cr, cg, cb;
  q = updc();
  a = q[0];
  b = q[1];
  if (!ddiamcd && a === 0 && b === 0 && (ddiama > 0 || ddiamb > 0)) {
    ddiamcd = gts;
  }
  ddiamx = 0;
  ddiamy = 0;
  ddiamw = 0;
  ddiamh = 0;
  if (ddiamcd || a > 0 || b > 0) {
    if (a > 0 || b > 0) {
      ddiama = a;
      ddiamb = b;
      ddiamcd = null;
    }
    x = x2 = 110;
    y = y2 = 325;
    z = ddiamcd?0.7-0.6*(gts-ddiamcd>ddiamcdn?ddiamcdn:gts-ddiamcd)/ddiamcdn:0.7;
    ctx2.fillStyle = "rgba(240, 240, 0,"+z+")";
    if (ddiama > 0 && ddiamb === 0) {
      x += 3;
      y += 6;
      drawStrImg(ctx2, "\u25C7", x, y - 18, 91, 240, 240, 0, z);
    } else if (ddiama > 0 && ddiamb > 0) {
      x += 4;
      y -= 3;
      drawStrImg(ctx2, "\u25C8", x, y - 14, 62, 240, 240, 0, z);
    } else {
      x += 1;
      drawStrImg(ctx2, "\u25C6", x, y - 17, 83, 240, 240, 0, z);
    }
    ddiamx = x + 19;
    ddiamy = y - 48;
    ddiamw = 24;
    ddiamh = 23;
    ctx2.fillStyle = "rgba(170, 200, 170, 1)";
    ctx2.font = "12px " + font;
    if (ddiama > 1) {
      s = "R "+ddiama;
      ctx2.fillStyle = "rgba(120, 150, 120,"+z+")";
      ctx2.fillText(s, x2 - s.length*8 + 22, y2-10);
    }
    if (ddiamb > 1) {
      s = "C "+ddiamb;
      ctx2.fillStyle = "rgba(120, 150, 120,"+z+")";
      ctx2.fillText(s, x2 + 46, y2-10);
    }
    if (!ddiamcd && !ddiamcd2) {
      ddiamf = 0;
    }
    if ((ddiamcd && ddiamf > 0) || ddiamcd2 || !ddiamcd && b > 0) {
      cr = 0;
      cg = 0;
      cb = 0;
      if (ddiamcd2) {
        if ((gts - ddiamcd2)%300>=150) {
          if (ddiamf === 2) {
            cr = 220;
            cg = 0;
            cb = 0;
          } else {
            cr = 180;
            cg = 180;
            cb = 180;
          }
        } else {
          cr = 140;
          cg = 140;
          cb = 140;
        }
      } else if (!ddiamcd && histgn > 0 && hupdc === 0 || ddiamcd && ddiamf === 2) {
        cr = 220;
        cg = 0;
        cb = 0;
        ddiamf = 2;
      } else {
        cr = 50;
        cg = 50;
        cb = 50;
        ddiamf = 1;
      }
      if (ddiama > 0 && ddiamb > 0) {
        drawStrImg(ctx2, "\u29BB", x2+19, y2 - 30, 34, cr, cg, cb, z);
      } else {
        drawStrImg(ctx2, "\u29BB", x2+19, y2 - 29, 34, cr, cg, cb, z);
      }
    }
  }
}

function drawFramesSec() {
  var s, z, x;
  ctx2.font = "16px " + font;
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  s = "" + frpsn;
  x = 38;
  ctx2.fillText(s, x, 293);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  x += 10 * s.length + 6;
  ctx2.fillText("f/s", x + 1, 293);
  if (gnpsd || gnpscd) {
    if (gnpscd) {
      z = gts - gnpscd > gnpscdn ? 1 : (gts - gnpscd) / gnpscdn;
      if (!gnpsd) {
        z = 1 - z;
      }
    } else {
      z = 1;
    }
    ctx2.fillStyle = "rgba(170, 200, 170, " + z + ")";
    s = "" + gnpsn;
    x = 37;
    ctx2.fillText(s, x, 243);
    ctx2.fillStyle = "rgba(170, 170, 170, " + (z*0.6) + ")";
    x += 10 * s.length + 4;
    ctx2.fillText("g/s", x + 2, 243);
  }
}

function drawPos() {
  var x = cellX(posx,true), y = cellY(posy,true), x2, y2, s1, s2, l;
  s1 = ""+(cellsn>0?cellsr-cellsl+1:0);
  s2 = ""+Math.floor(cwidth/(cellsz>grb?cellsz+1:cellsz));
  l = Math.max(s1.length * 12, s2.length * 8) + 5;
  ctx2.font = "18px " + font;
  x2 = cwidth - 652;
  y2 = 37;
  ctx2.fillStyle = "rgba(140, 140, 140, 1)";
  ctx2.fillText("World", x2, y2);
  x2 = cwidth - 584;
  ctx2.fillStyle = "rgba(170, 0, 0, 0.7)";
  ctx2.fillRect(x2-9, y2-10, 3, 3);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  ctx2.fillText("w", x2, y2);
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  ctx2.fillText(s1, x2 + 20, y2);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  ctx2.fillText("h", x2 + 20 + l + 6, y2);
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  ctx2.fillText(""+(cellsn>0?cellst-cellsb+1:0), x2 + 20 + l + 6 + 16, y2);
  ctx2.font = "14px " + font;
  x2 = cwidth - 634;
  y2 = 59;
  ctx2.fillStyle = "rgba(140, 140, 140, 1)";
  ctx2.fillText("View", x2, y2);
  x2 = cwidth - 584;
  ctx2.fillStyle = "rgba(170, 0, 0, 0.7)";
  ctx2.fillRect(x2-9, y2-8, 3, 3);
  ctx2.fillStyle = "rgba(170, 0, 0, 0.5)";
  ctx2.fillText("\u22C5", x2-8, y2);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  ctx2.fillText("w", x2+2, y2);
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  ctx2.fillText(s2, x2 + 19, y2);
  ctx2.fillStyle = "rgba(170, 170, 170, 0.6)";
  ctx2.fillText("h", x2 + 19 + l + 9, y2);
  ctx2.fillStyle = "rgba(170, 200, 170, 1)";
  ctx2.fillText(""+Math.floor(cheight/(cellsz>grb?cellsz+1:cellsz)), x2 + 19 + l + 9 + 14, y2);
  s1 = ""+x;
  s2 = ""+y;
  dsppostx = 37;
  ctx2.font = "18px " + font;
  if (dsppost || dspposcd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 0.7)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 0.7)";
  }
  ctx2.fillText("x", dsppostx, 340);
  if (dsppost || dspposcd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 1)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 1)";
  }
  ctx2.fillText(s1, dsppostx-2 + 17, 340);
  if (dsppost || dspposcd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 0.7)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 0.7)";
  }
  ctx2.fillText("y", dsppostx-2 + 26 + 11 * s1.length, 340);
  if (dsppost || dspposcd) {
    ctx2.fillStyle = "rgba(0, 170, 255, 1)";
  } else {
    ctx2.fillStyle = "rgba(40, 110, 240, 1)";
  }
  ctx2.fillText(s2, dsppostx-2 + 26 + 11 * s1.length + 15, 340);
  dspposty = 322;
  dsppostw = 11 * (s1.length+s2.length+4) - 4;
  dspposth = 21;
}

function drawCRule() {
  var s1b, s1s, s2b, s2s, p, d, z, z2;
  if (hist[histh][0][histi][1] && cruleb === histcr[0] && crules === histcr[1]) {
    s1b = hist[histh][0][histi][1][1][0];
    s1s = hist[histh][0][histi][1][1][1];
    s2b = hist[histh][0][histi][1][0][0];
    s2s = hist[histh][0][histi][1][0][1];
  } else {
    s1b = cruleb;
    s1s = crules;
    if (cruleb === histcr[0] && crules === histcr[1]) {
      s2b = "";
      s2s = "";
    } else {
      s2b = histcr[0];
      s2s = histcr[1];
    }
  }
  if (hlcrcd2 || hlcrcd && s2b.length === 0 && s2s.length === 0 || cruleb !== histcr[0] || crules !== histcr[1]) {
    if (hlcrcd2) {
      z = hlcrcd2?0.8-0.8*(gts-hlcrcd2>hlcrcdn2?hlcrcdn2:gts-hlcrcd2)/hlcrcdn2:0.8;
    } else {
      z = hlcrcd?0.8-0.8*(gts-hlcrcd>hlcrcdn?hlcrcdn:gts-hlcrcd)/hlcrcdn:0.8;
    }
    drawStrImg(ctx2, "\u25C7", 373, cheight - 17, 85, 240, 240, 0, z);
    if (cruleb !== histcr[0] || crules !== histcr[1] || hlcrcd) {
      drawStrImg(ctx2, "\u29BB", 385, cheight - 31, 40, 160, 70, 40, z);
    }
    orulex = 387;
    oruley = cheight - 60;
    orulew = 27;
    oruleh = 32;
  }
  ctx2.font = "22px " + font;
  if (crulem !== crulem2) {
    crulem3 = crulem2;
    crulem2 = crulem;
    hlcrcd4 = gts;
  }
  if (hlcrcd && s2b.length === 0 && s2s.length === 0) {
    z2 = (gts-hlcrcd>hlcrcdn?hlcrcdn:gts-hlcrcd)/hlcrcdn;
    ctx2.fillStyle = "rgba(" + (240 - 100 * z2) + ", " + (240 - 100 * z2) + ", " + (140 * z2) + ", 0.8)";
  } else if (cruleb !== histcr[0] || crules !== histcr[1]) {
    ctx2.fillStyle = "rgba(160, 70, 40, 0.8)";
  } else if (hlcrcd2) {
    z2 = (gts-hlcrcd2>hlcrcdn2?hlcrcdn2:gts-hlcrcd2)/hlcrcdn2;
    if (crulem === 0) {
      ctx2.fillStyle = "rgba(" + (160 - 20 * z2) + ", " + (70 + 70 * z2) + ", " + (40 + 100 * z2) + ", 0.8)";
    } else {
      ctx2.fillStyle = "rgba(" + (160 - 120 * z2) + ", " + (70 + 40 * z2) + ", " + (40 + 200 * z2) + ", 0.8)";
    }
  } else {
    if (hlcrcd4 || crulem !== 0) {
      z = hlcrcd4?(gts-hlcrcd4>hlcrcdn4?hlcrcdn4:gts-hlcrcd4)/hlcrcdn4:1;
      if (crulem === 0) {
        z = 1 - z;
      }
      ctx2.fillStyle = "rgba(" + (140 - 100 * z) + ", " + (140 - 30 * z) + ", " + (140 + 100 * z) + ", 0.8)";
    } else {
      ctx2.fillStyle = "rgba(140, 140, 140, 0.8)";
    }
  }
  z = hlcrcd4?(gts-hlcrcd4>hlcrcdn4?hlcrcdn4:gts-hlcrcd4)/hlcrcdn4:1;
  if (crulem !== 0) {
    drawStrImg(ctx2, "rule", 28, cheight - 69, 0, 75, 75, 130, 0.8 * (1-z));
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 75, 75, 130, 0.8 * (1-z));
    drawStrImg(ctx2, "GoL", 5, cheight - 65, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "???", 30, cheight - 67, 0, 75, 75, 75, 0.8 * z);
    if (crulem === 1) {
      drawStrImg(ctx2, "RB2", 51, cheight - 75, 0, 140, 160, 140, 1 * z);
      if (hlcrcd4) {
        drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 110, 110, 110, 0.8 * (1-z));
      }
    } else {
      drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 110, 110, 110, 0.8 * (crulem3===0?1:z));
      if (hlcrcd4 && crulem3 !== 0) {
        drawStrImg(ctx2, "RB2", 51, cheight - 75, 0, 140, 160, 140, 1 * (1-z));
      }
    }
    if (crulem === 2) {
      drawStrImg(ctx2, "RS2", 51, cheight - 43, 0, 140, 160, 140, 1 * z);
      if (hlcrcd4) {
        drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 110, 110, 110, 0.8 * (1-z));
      }
    } else {
      drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 110, 110, 110, 0.8 * (crulem3===0?1:z));
      if (hlcrcd4 && crulem3 !== 0) {
        drawStrImg(ctx2, "RS2", 51, cheight - 43, 0, 140, 160, 140, 1 * (1-z));
      }
    }
  } else if (hlcrcd && s2b.length === 0 && s2s.length === 0) {
    drawStrImg(ctx2, "rule", 28, cheight - 69, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 160, 70, 40, 0.8 * (1-z2));
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 75, 75, 130, 0.8 * z2);
    drawStrImg(ctx2, "GoL", 5, cheight - 65, 0, 240, 240, 0, 0.8 * (1-z2));
    drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 240, 240, 0, 0.8 * (1-z2));
    drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 240, 240, 0, 0.8 * (1-z2));
    drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 110, 110, 110, 0.8 * z2);
    drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 110, 110, 110, 0.8 * z2);
  } else if (!hlcrcd4 && (cruleb !== histcr[0] || crules !== histcr[1])) {
    drawStrImg(ctx2, "rule", 28, cheight - 69, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "GoL", 5, cheight - 65, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 160, 70, 40, 0.8);
    drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 160, 70, 40, 0.8);
  } else if (hlcrcd2) {
    drawStrImg(ctx2, "rule", 28, cheight - 69, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "GoL", 5, cheight - 65, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 160, 70, 40, 0.8 * (1-z2));
    drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 160, 70, 40, 0.8 * (1-z2));
    drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 110, 110, 110, 0.8 * z2);
    drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 110, 110, 110, 0.8 * z2);
  } else {
    drawStrImg(ctx2, "rule", 28, cheight - 69, 0, 75, 75, 130, 0.8 * z);
    drawStrImg(ctx2, "s", 54, cheight - 55, 0, 75, 75, 130, 0.8 * z);
    drawStrImg(ctx2, "GoL", 5, cheight - 65, 0, 75, 75, 130, 0.8);
    drawStrImg(ctx2, "???", 30, cheight - 67, 0, 75, 75, 75, 0.8 * (1-z));
    if (cruleb !== histcr[0] || crules !== histcr[1]) {
      drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 160, 70, 40, 0.8 * (hlcrcd4&&crulem3===1?z:1));
    } else {
      drawStrImg(ctx2, "RB", 51, cheight - 75, 0, 110, 110, 110, 0.8 * (hlcrcd4&&crulem3===1?z:1));
    }
    if (hlcrcd4 && crulem3 === 1) {
      drawStrImg(ctx2, "RB2", 51, cheight - 75, 0, 140, 160, 140, 1 * (1-z));
    }
    if (cruleb !== histcr[0] || crules !== histcr[1]) {
      drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 160, 70, 40, 0.8 * (hlcrcd4&&crulem3===2?z:1));
    } else {
      drawStrImg(ctx2, "RS", 51, cheight - 43, 0, 110, 110, 110, 0.8 * (hlcrcd4&&crulem3===2?z:1));
    }
    if (hlcrcd4 && crulem3 === 2) {
      drawStrImg(ctx2, "RS2", 51, cheight - 43, 0, 140, 160, 140, 1 * (1-z));
    }
  }
  ctx2.fillText("\u22C5", 41, cheight - 48);
  ctx2.fillText("\u22C5", 26, cheight - 33);
  rbcbx = 53;
  ctx2.fillText("B\u22C5", rbcbx - 2, cheight - 48);
  rbcby = cheight - 67;
  rbcbw = 15;
  rbcbh = 19;
  rbcsx = 24;
  ctx2.fillText("S\u22C5", rbcsx - 2, cheight - 16);
  rbcsy = cheight - 36;
  rbcsw = 14;
  rbcsh = 20;
  p = 0;
  while (p < 9) {
    d = String.fromCharCode(48+p);
    if (p > 0 && (crulem===0&&hlcrcd4||crulem!==0&&(!hlcrcd4||crulem3!==0)?crulebn:s1b).indexOf(d) >= 0) {
      drawStrImg(ctx2, d, 60 + 29 * p, cheight - 52, 20, 100, 150, 220, 0.7);
    }
    if ((crulem===0&&hlcrcd4||crulem!==0&&(!hlcrcd4||crulem3!==0)?crulesn:s1s).indexOf(d) >= 0) {
      drawStrImg(ctx2, d, 60 + 29 * p, cheight - 20, 20, 100, 150, 220, 0.7);
    }
    p++;
  }
  cruleimx = 327;
  if (cruleim || crulem === 0 && cruleimcd) {
    if (cruleim) {
      z2 = 1;
    } else {
      z2 = 1 - (cruleimcd?(gts-cruleimcd>cruleimcdn?cruleimcdn:gts-cruleimcd)/cruleimcdn:1);
    }
    drawStrImg(ctx2, " I ", cruleimx - 5, cheight - 39, 25, 160, 70, 40, 0.9 * z2, 5, 10);
  } else if (crulem !== 0 || hlcrcd4) {
    drawStrImg(ctx2, " I ", cruleimx - 5, cheight - 39, 25, 40, 110, 240, 0.9 * (crulem===0?(1-z):z), 5, 10);
  }
  cruleimy = cheight - 58;
  cruleimw = 21;
  cruleimh = 33;
  cruleb1x = rbcbx + 35;
  drawStrImg(ctx2, "\u25C9", rbcbx + 35, rbcby - 20, 29, 40, 110, 240, 0.8 * (crulem===0?(1-z):z));
  cruleb1y = rbcby - 45;
  cruleb1w = 30;
  cruleb1h = 30;
  cruleb2x = rbcbx + 80 + 1;
  drawStrImg(ctx2, "\u2715", rbcbx + 80 - 1, rbcby - 20, 29, 160, 70, 40, 0.8 * (crulem===0?(1-z):z));
  cruleb2y = rbcby - 40;
  cruleb2w = 26;
  cruleb2h = 25;
  if (s2b.length > 0 || s2s.length > 0) {
    if (hlcrcd3) {
      z = (gts-hlcrcd3>hlcrcdn3?hlcrcdn3:gts-hlcrcd3)/hlcrcdn3;
      ctx2.fillStyle = "rgba(" + (255 - 55 * z) + ", " + (255 - 55 * z) + ", " + (255 - 195 * z) + ", 0.6)";
    } else if (histgn > 0 && cruleb === histcr[0] && crules === histcr[1]) {
      ctx2.fillStyle = "rgba(200, 200, 60, 0.6)";
    } else {
      ctx2.fillStyle = "rgba(120, 120, 120, 0.6)";
    }
    ctx2.font = "18px " + font;
    ctx2.fillText("B " + s2b, 480, cheight - 50);
    ctx2.fillText("S " + s2s, 480, cheight - 19);
  }
}

function drawStpg() {
  var x, y, z, z1, z2, s, n;
  if (!stpgax && !stpge && !stpgcd) {
    return;
  }
  x = 230 + Math.round((cwidth - 1000) / 100 * 20);
  y = 145;
  stpgssx = x + 6;
  stpgssy = y - 27;
  stpgssw = 27;
  stpgssh = 27;
  stpgssx2 = 0;
  stpgssy2 = 0;
  stpgssw2 = 0;
  stpgssh2 = 0;
  stpgdx = 0;
  stpgdy = 0;
  stpgdw = 0;
  stpgdh = 0;
  if (!stpgcd || gts - stpgcd > stpgcdn) {
    z = 1;
  } else {
    z = (gts - stpgcd) / stpgcdn;
  }
  if (!stpge) {
    z = 1 - z;
  }
  ctx2.font = "40px " + font;
  if (stpgax) {
    z1 = 1;
  } else {
    z1 = z;
  }
  if (stpgcd2) {
    if (gts - stpgcd2 > stpgcdn2) {
      z2 = 1;
    } else {
      z2 = (gts - stpgcd2) / stpgcdn2;
    }
    if (stpgsf) {
      z2 = 1 - z2;
    }
    drawStrImg(ctx2, "\u29B5", x, y - 4, 40, 160, 70, 40, (1 - z2) * z1 * 0.9);
    drawStrImg(ctx2, "\u29B5", x, y - 4, 40, 240, 240, 0, z2 * z1 * 0.9);
  } else {
    if (!stpgax && stpgn2 !== -2) {
      z2 = 1;
    } else if (!stpge && stpgn2 === -2) {
      z2 = 0;
    } else {
      z2 = z;
    }
    drawStrImg(ctx2, "\u29B5", x, y - 4, 40, 160, 70, 40, (1 - z2) * z1 * 0.9);
    drawStrImg(ctx2, "\u29B5", x, y - 4, 40, 40, 110, 240, z2 * z1 * 0.9);
  }
  if (stpge || stpgcd && stpgn2 !== -2) {
    stpgssx2 = x + 8;
    stpgssy2 = y + 10;
    stpgssw2 = 25;
    stpgssh2 = 25;
    drawStrImg(ctx2, "\u25C9", x + 3, y + 33, 29, 40, 110, 240, z * 0.9);
  }
  ctx2.font = "25px " + font;
  s = (stpgnm === 1 ? "+" : stpgnm === -1 ? "-" : "") + stpgn;
  stpgdx = x + 60;
  stpgdy = y - 23;
  stpgdw = s.length * 17;
  stpgdh = 25;
  if (stpgax && !stpge && ffw !== 0 && ffwstp) {
    ctx2.fillStyle = "rgba(170, 170, 170, 0.7)";
    if (ffw === -1) {
      ctx2.fillText("\u27F5", stpgdx + 4 * s.length, y - 25);
    } else {
      ctx2.fillText("\u27F6", stpgdx + 4 * s.length, y - 25);
    }
    ctx2.fillStyle = "rgba(170, 170, 255, 1)";
  } else if (stpgcd2) {
    ctx2.fillStyle = "rgba(40, 110, 240, 0.9)";
  } else {
    ctx2.fillStyle = "rgba(" + (40 + Math.round(100 * z2)) + ", " + (110 + Math.round(50 * z2)) + ", " + (240 - Math.round(40 * z2)) +  ", " + (z1 * 0.9) + ")";
  }
  ctx2.fillText(s, stpgdx, y);
  if (!stpge && (stpgax || !stpgax && stpgcd && stpgn2 !== -1) && (n = (stpgnm === 0 ? stpgn : stpgnc + stpgn * stpgnm) - gennum) !== 0 && (stpgnm === 0 || stpgnm !== 0 && stpgnc !== gennum) || stpgcd && stpge && stpgax && (n = (stpgnm2 === 0 ? stpgn2 : stpgnc2 + stpgn2 * stpgnm2) - gennum) !== 0 && (stpgnm2 === 0 || stpgnm2 !== 0 && stpgnc2 !== gennum)) {
    ctx2.font = "15px " + font;
    ctx2.fillStyle = "rgba(140, 140, 140, " + ((!stpge&&!stpgax?z:1-z)*0.8) + ")";
    ctx2.fillText((n > 0 ? "+" : "-") + Math.abs(n), x + 70 + 15 + 16 * s.length, y - 5);
  }
}

function drawHistPnl() {
  var s, x;
  x = histn/(histmax*(histhm+1));
  ctx2.fillStyle = "rgba(30, 90, 50, " + (0.3 * x) + ")";
  fillrr(ctx2, cwidth - 293, cheight - 120, 140, 90, 20);
  if (hpnlcd) {
    ctx2.fillStyle = "rgba(40, 110, 240, " + (0.2 * (gts - hpnlcd > hpnlcdn ? 0 : 1 - (gts - hpnlcd) / hpnlcdn)) + ")";
    fillrr(ctx2, cwidth - 293, cheight - 120, 140, 90, 20);
  }
  ctx2.lineWidth = 1;
  ctx2.setLineDash([3]);
  ctx2.strokeStyle = "rgba(170, 170, 170, 0.6)";
  strokerr(ctx2, cwidth - 293, cheight - 120, 140, 90, 20);
  drawStrImg(ctx2, "GenSlots", cwidth - 290, cheight - 123, 0, 120, 120, 120, 0.7);
  hpnl1x = cwidth - 281;
  drawStrImg(ctx2, "\u2A01", hpnl1x - 3, cheight - 69, 29, 40, 110, 240, 0.5, 3);
  hpnl1y = cheight - 90;
  hpnl1w = 26;
  hpnl1h = 26;
  drawStrImg(ctx2, "+1", hpnl1x + 13, cheight - 64, 11, 145, 145, 145, 0.5);
  hpnl2x = cwidth - 281;
  drawStrImg(ctx2, "\u2A01", hpnl1x - 3, cheight - 39, 29, 40, 110, 240, 0.5, 3);
  hpnl2y = cheight - 60;
  hpnl2h = 26;
  drawStrImg(ctx2, "\u00D72", hpnl1x + 13, cheight - 34, 11, 145, 145, 145, 0.5);
  hpnl3x = cwidth - 250;
  drawStrImg(ctx2, "\u29BB", hpnl3x - 1, cheight - 39, 37, 160, 70, 40, 0.5);
  hpnl3y = cheight - 62;
  hpnl3w = 27;
  hpnl3h = 26;
  ctx2.font = "18px " + font;
  ctx2.fillStyle = "rgba(110, 110, 110, 0.6)";
  s = ""+(Math.round(histmax*(histhm+1)/1000*10)/10)+"k";
  ctx2.fillText(s, cwidth - 165 - s.length*11, cheight - 65);
  ctx2.font = "15px " + font;
  ctx2.fillStyle = "rgba(100, 100, 100, 0.7)";
  s = ""+Math.round(x*100)+"%";
  ctx2.fillText(s, cwidth - 171 - s.length*10, cheight - 45);
  drawStrImg(ctx2, "filled", cwidth - 195, cheight - 35, 11, 100, 100, 100, 0.8);
}

function drawFcidxPnl() {
  var s, x, x2;
  x = 1 - (cidxbc1 ? cidxbc0 !== -1 ? (cidxbc0 + cidxbc2 / cidxbc1) / 2 : cidxbc2 / cidxbc1 : cidxbc0 === -1 ? 0.5 : cidxbc0);
  ctx2.fillStyle = "rgba(30, 90, 50, " + (0.3 * x) + ")";
  fillrr(ctx2, cwidth - 159, cheight - 120, 141, 90, 20);
  ctx2.fillStyle = "rgba(95, 30, 50, " + (0.3 * (1 - x)) + ")";
  fillrr(ctx2, cwidth - 159, cheight - 120, 141, 90, 20);
  if (fpnlcd) {
    ctx2.fillStyle = "rgba(40, 110, 240, " + (0.2 * (gts - fpnlcd > fpnlcdn ? 0 : 1 - (gts - fpnlcd) / fpnlcdn)) + ")";
    fillrr(ctx2, cwidth - 159, cheight - 120, 141, 90, 20);
  }
  ctx2.lineWidth = 1;
  ctx2.setLineDash([3]);
  ctx2.strokeStyle = "rgba(170, 170, 170, 0.6)";
  strokerr(ctx2, cwidth - 159, cheight - 120, 141, 90, 20);
  drawStrImg(ctx2, "CellIdxBlockSz", cwidth - 149, cheight - 123, 0, 120, 120, 120, 0.7);
  fpnl1x = cwidth - 142;
  drawStrImg(ctx2, "\u2A01", fpnl1x - 3, cheight - 39, 29, 40, 110, 240, 0.5, 3);
  fpnl1y = cheight - 60;
  fpnl1w = 26;
  fpnl1h = 26;
  drawStrImg(ctx2, "\u00D72", fpnl1x + 13, cheight - 34, 11, 145, 145, 145, 0.5);
  fpnl2x = cwidth - 111;
  drawStrImg(ctx2, "\u29BB", fpnl2x - 1, cheight - 39, 37, 40, 110, 240, 0.45);
  fpnl2y = cheight - 62;
  fpnl2h = 26;
  ctx2.font = "18px " + font;
  ctx2.fillStyle = "rgba(110, 110, 110, 0.6)";
  s = ""+ (x2 = Math.pow(2,cidxb[cidxbi][0].length+5)) + "\u00B2";
  ctx2.fillText(s, cwidth - 26 - s.length*11, cheight - 65);
  ctx2.font = "15px " + font;
  ctx2.fillStyle = "rgba(100, 100, 100, 0.7)";
  s = ""+Math.round(x*100)+"%";
  ctx2.fillText(s, cwidth - 32 - s.length*10, cheight - 45);
  ctx2.font = "10px " + font;
  s = "" + cibll + "\u00D7" + x2 + "\u00B2\u00D716";
  ctx2.fillText(s, cwidth - 146, cheight - 83);
  ctx2.font = "11px " + font;
  s = "=" + (Math.floor(cibll * x2 * x2 * 16 / 1024 * 100) / 100) + "KB";
  ctx2.fillText(s, cwidth - 145, cheight - 69);
  drawStrImg(ctx2, "hit\u22C5rate", cwidth - 71, cheight - 35, 11, 100, 100, 100, 0.8);
}

function drawFButt() {
  var x, y, px, py;
  px = cwidth - 3, py = 104;
  x = px - 51 - 51 - 51;
  drawFButt0(x -= 51, py, 44, 32, 0, dhlpn > 0, 0, function(/*fb*/) {
    swdhlp();
  });
  drawFButt0(x -= 51, py, 44, 32, 1, dwrld, 0, function(/*fb*/) {
    swdwrld();
  });
  drawFButt0(x -= 51, py, 44, 32, 2, patt, 0, function(/*fb*/) {
    swpatt();
  });
  drawFButt0(x -= 51, py, 44, 32, 3, dspgrd, 0, function(/*fb*/) {
    swdspgrd();
  });
  x = px;
  x -= 51;
  x -= 51;
  x -= 51;
  x -= 51;
  y = py;
  drawFButt0(x, y -= 41, 44, 32, 4, null, 1, function(/*fb*/) {
    swclru();
  });
  drawFButt0(x, y -= 41, 44, 32, 5, !dmsgs, 0, function(/*fb*/) {
    swdmsgs();
  });
  x -= 51;
  y = py;
  drawFButt0(x, y -= 41, 44, 32, 6, null, 0, function(/*fb*/) {
  });
  drawFButt0(x, y -= 41, 44, 32, 7, null, 0, function(/*fb*/) {
  });
  x -= 51;
  y = py;
  drawFButt0(x, y -= 41, 44, 32, 8, stops, 0, function(/*fb*/) {
    swstops();
  });
  drawFButt0(x, y -= 41, 44, 32, 9, null, 0, function(/*fb*/) {
  });
  x -= 51;
  y = py;
  drawFButt0(x, y -= 41, 44, 32, 10, stpge, 0, function(/*fb*/) {
    swstpge();
  });
  drawFButt0(x, y -= 41, 44, 32, 11, trkw, 0, function(/*fb*/) {
    swtrkw();
  });
  x = cwidth - 3, y = 145;
  x -= 51;
  drawFButt0(x, y -= 41, 44, 32, 12, null, 0, function(/*fb*/) {
  });
  drawFButt0(x, y -= 41, 44, 32, 13, vwcrs, 0, function(/*fb*/) {
    swvwcrs();
  });
  drawFButt0(x, y -= 41, 44, 32, 14, frzc, 0, function(/*fb*/) {
    swfrzc();
  });
  y = 145;
  x -= 51;
  drawFButt0(x, y -= 41, 44, 32, 15, null, 0, function(/*fb*/) {
  });
  drawFButt0(x, y -= 41, 44, 32, 16, null, 0, function(/*fb*/) {
  });
  drawFButt0(x, y -= 41, 44, 32, 17, null, 0, function(/*fb*/) {
  });
  y = 145;
  x -= 51;
  drawFButt0(x, y -= 41, 44, 32, 18, null, 0, function(/*fb*/) {
  });
  drawFButt0(x, y -= 41, 44, 32, 19, diamstop, 0, function(/*fb*/) {
    swdiamstop();
  });
  drawFButt0(x, y -= 41, 44, 32, 20, null, 0, function(/*fb*/) {
  });
}

function drawFButt0(x, y, w, h, i, t, r, f) {
  var lw;
  if (i >= fbutt.length) {
    fbutt[i] = [];
    fbutt[i][0] = x;
    fbutt[i][1] = y;
    fbutt[i][2] = w;
    fbutt[i][3] = h;
    fbutt[i][4] = false;
    fbutt[i][5] = false;
    fbutt[i][6] = null;
    fbutt[i][7] = f ? f : null;
  }
  fbutt[i][0] = x;
  fbutt[i][1] = y;
  fbutt[i][5] = t;
  lw = 2;
  if (r) {
    ctx2.fillStyle = "rgba(210, 110, 110, 0.6)";
  } else {
    ctx2.fillStyle = "rgba(150, 110, 110, 0.6)";
  }
  fillrr(ctx2, x, y, w, h, h / 4);
  ctx2.setLineDash([]);
  ctx2.lineWidth = lw;
  ctx2.strokeStyle = "rgba(0, 0, 0, 1)";
  strokerr(ctx2, x + lw, y + lw, w - lw*2, h - lw*2, (h - lw*2) / 4);
  if (fbutt[i][4] || fbutt[i][6]) {
    ctx2.strokeStyle = "rgba(0, 170, 255, 0.8)";
  } else if (fbutt[i][5]) {
    ctx2.strokeStyle = "rgba(180, 180, 250, 0.9)";
  } else {
    ctx2.strokeStyle = "rgba(20, 100, 210, 0.8)";
  }
  strokerr(ctx2, x, y, w, h, h / 4);
  switch (i) {
    case 0:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "?", x + 16, y + 25, 23, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "?", x + 16, y + 25, 23, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "?", x + 16, y + 25, 23, 0, 0, 0, 1);
      }
      break;
    case 1:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "W", x + 11, y + 25, 23, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "W", x + 11, y + 25, 23, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "W", x + 11, y + 25, 23, 0, 0, 0, 1);
      }
      break;
    case 2:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "P", x + 15, y + 25, 23, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "P", x + 15, y + 25, 23, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "P", x + 15, y + 25, 23, 0, 0, 0, 1);
      }
      break;
    case 3:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "\u2317", x + 13, y + 24, 29, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "\u2317", x + 13, y + 24, 29, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "\u2317", x + 13, y + 24, 29, 0, 0, 0, 1);
      }
      break;
    case 4:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "\u29BB", x + 9, y + 27, 35, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "\u29BB", x + 9, y + 27, 35, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "\u29BB", x + 9, y + 27, 35, 0, 0, 0, 1);
      }
      break;
    case 5:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "MSG", x + 5, y + 24, 15, 140, 140, 140, 0.7, 2);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "MSG", x + 5, y + 24, 15, 190, 210, 190, 0.6, 2);
      } else {
        drawStrImg(ctx2, "MSG", x + 5, y + 24, 15, 0, 0, 0, 1, 2);
      }
      break;
    case 8:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, " \u29B5", x + 2, y + 26, 31, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, " \u29B5", x + 2, y + 26, 31, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, " \u29B5", x + 2, y + 26, 31, 0, 0, 0, 1);
      }
      break;
    case 10:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "\u29B5", x + 9, y + 26, 31, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "\u29B5", x + 9, y + 26, 31, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "\u29B5", x + 9, y + 26, 31, 0, 0, 0, 1);
      }
      break;
    case 11:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "Tw", x + 7, y + 24, 22, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "Tw", x + 7, y + 24, 22, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "Tw", x + 7, y + 24, 22, 0, 0, 0, 1);
      }
      break;
    case 13:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "vwcrs", x + 10, y + 5, 0, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "vwcrs", x + 10, y + 5, 0, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "vwcrs", x + 10, y + 5, 0, 0, 0, 0, 1);
      }
      break;
    case 14:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "\u203B", x + 11, y + 28, 31, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "\u203B", x + 11, y + 28, 31, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "\u203B", x + 11, y + 28, 31, 0, 0, 0, 1);
      }
      break;
    case 19:
      if (fbutt[i][4] || fbutt[i][6]) {
        drawStrImg(ctx2, "diamstop", x + 3, y - 2, 0, 140, 140, 140, 0.7);
      } else if (fbutt[i][5]) {
        drawStrImg(ctx2, "diamstop", x + 3, y - 2, 0, 190, 210, 190, 0.6);
      } else {
        drawStrImg(ctx2, "diamstop", x + 3, y - 2, 0, 0, 0, 0, 1);
      }
      break;
  }
}

function drawGrid() {
  var w = cwidth, h = cheight, p, p2;
  p = w/2 - (posx / (cellsz + 1) - Math.floor(posx / (cellsz + 1))) * (cellsz + 1);
  p = p - Math.ceil(p / (cellsz + 1)) * (cellsz + 1);
  p2 = Math.round(cellX(posx+(p-w/2)));
  while (p < w) {
    if (p >= 0) {
      ctx0.beginPath();
      ctx0.lineWidth = 1;
      ctx0.moveTo(Math.round(p), 0);
      ctx0.lineTo(Math.round(p), h-1);
      if (p2 === 0) {
        ctx0.setLineDash([2,2]);
        ctx0.strokeStyle = "rgba(200, 200, 200, 0.9)";
      } else if (p2%10 === 0) {
        ctx0.setLineDash([]);
        ctx0.strokeStyle = "rgba(70, 70, 120, 1)";
      } else {
        ctx0.setLineDash([]);
        ctx0.strokeStyle = "rgba(70, 70, 70, 0.9)";
      }
      ctx0.stroke();
      if (p2 === maxl || p2 === maxr) {
        ctx0.beginPath();
        ctx0.lineWidth = 3;
        ctx0.setLineDash([2,1,4]);
        ctx0.strokeStyle = "rgba(250, 200, 100, 1)";
        if (p2 === maxr) {
          ctx0.moveTo(Math.round(p) + cellsz + 1, 0);
          ctx0.lineTo(Math.round(p) + cellsz + 1, h-1);
        } else {
          ctx0.moveTo(Math.round(p), 0);
          ctx0.lineTo(Math.round(p), h-1);
        }
        ctx0.stroke();
      }
    }
    p += cellsz + 1;
    p2++;
  }
  p = h/2 + (posy / (cellsz + 1) - Math.floor(posy / (cellsz + 1))) * (cellsz + 1);
  p = p + Math.ceil((h - p) / (cellsz + 1)) * (cellsz + 1);
  p2 = Math.round(cellY(posy-(p-h/2)));
  while (p >= 0) {
    if (p < h) {
      ctx0.beginPath();
      ctx0.lineWidth = 1;
      ctx0.moveTo(0, Math.round(p));
      ctx0.lineTo(w-1, Math.round(p));
      if (p2 === 0) {
        ctx0.setLineDash([2,2]);
        ctx0.strokeStyle = "rgba(200, 200, 200, 0.9)";
      } else if (p2%10 === 0) {
        ctx0.setLineDash([]);
        ctx0.strokeStyle = "rgba(70, 70, 120, 1)";
      } else {
        ctx0.setLineDash([]);
        ctx0.strokeStyle = "rgba(70, 70, 70, 0.9)";
      }
      ctx0.stroke();
      if (p2 === maxl || p2 === maxr) {
        ctx0.beginPath();
        ctx0.lineWidth = 3;
        ctx0.setLineDash([2,1,4]);
        ctx0.strokeStyle = "rgba(250, 200, 100, 1)";
        if (p2 === maxt) {
          ctx0.moveTo(0, Math.round(p) - cellsz - 1);
          ctx0.lineTo(w-1, Math.round(p) - cellsz - 1);
        } else {
          ctx0.moveTo(0, Math.round(p));
          ctx0.lineTo(w-1, Math.round(p));
        }
        ctx0.stroke();
      }
    }
    p -= cellsz + 1;
    p2++;
  }
}

function drawFxa() {
  var x, dx, dy, p1, p2;
  if (clrucd) {
    ctx1a.fillStyle = "rgba(160, 70, 40, " + (0.7 * (gts - clrucd > clrucdn ? 0 : 1 - (gts - clrucd) / clrucdn)) + ")";
    ctx1a.fillRect(0, 0, cwidth, cheight);
  }
  x = cellsz+(cellsz>grb?1:cellsz/grb);
  dx = cwidth*(cwidth/1000)*0.2/x;
  dy = cheight*(cheight/500)*0.2/x;
  if (maxl + dx/2 >= vwax && maxl - dx/2 < vwax + vwaw && maxt + dy/2 >= vway && maxb - dy/2 < vway + vwah) {
    ctx1a.fillStyle = "rgba(150, 50, 50, 0.3)";
    if (maxt - dy/2 < vway + vwah) {
      p1 = (vway + vwah - maxt) * x;
    } else {
      p1 = 0;
    }
    if (maxb + dy/2 >= vway) {
      p2 = cheight - (maxb - vway) * x;
    } else {
      p2 = cheight;
    }
    p1 -= x;
    ctx1a.fillRect((maxl - dx/2 - vwax) * x, p1, dx * x, p2 - p1);
  }
  if (maxr + dx/2 >= vwax && maxr - dx/2 < vwax + vwaw && maxt + dy/2 >= vway && maxb - dy/2 < vway + vwah) {
    ctx1a.fillStyle = "rgba(150, 50, 50, 0.3)";
    if (maxt - dy/2 < vway + vwah) {
      p1 = (vway + vwah - maxt) * x;
    } else {
      p1 = 0;
    }
    if (maxb + dy/2 >= vway) {
      p2 = cheight - (maxb - vway) * x;
    } else {
      p2 = cheight;
    }
    p1 -= x;
    ctx1a.fillRect((maxr - dx/2 - vwax) * x, p1, dx * x, p2 - p1);
  }
  if (maxb + dy/2 >= vway && maxb - dy/2 < vway + vwah && maxr + dx/2 >= vwax && maxl - dx/2 < vwax + vwaw) {
    ctx1a.fillStyle = "rgba(150, 50, 50, 0.3)";
    if (maxl + dy/2 >= vwax) {
      p1 = (maxl - vwax) * x;
    } else {
      p1 = 0;
    }
    if (maxr - dx/2 < vwax + vwaw) {
      p2 = cwidth - (vwax + vwaw - maxr) * x;
    } else {
      p2 = cwidth;
    }
    p2 += x;
    ctx1a.fillRect(p1, cheight - (maxb + dy/2 - vway) * x, p2 - p1, dy * x);
  }
  if (maxt + dy/2 >= vway && maxt - dy/2 < vway + vwah && maxr + dx/2 >= vwax && maxl - dx/2 < vwax + vwaw) {
    ctx1a.fillStyle = "rgba(150, 50, 50, 0.3)";
    if (maxl + dy/2 >= vwax) {
      p1 = (maxl - vwax) * x;
    } else {
      p1 = 0;
    }
    if (maxr - dx/2 < vwax + vwaw) {
      p2 = cwidth - (vwax + vwaw - maxr) * x;
    } else {
      p2 = cwidth;
    }
    p2 += x;
    ctx1a.fillRect(p1, cheight - (maxt + dy/2 - vway) * x, p2 - p1, dy * x);
  }
  if (vwcrs) {
    ctx1a.beginPath();
    ctx1a.lineWidth = 1;
    ctx1a.moveTo(0, Math.round(cheight/2));
    ctx1a.lineTo(cwidth, Math.round(cheight/2));
    ctx1a.moveTo(Math.round(cwidth/2), 0);
    ctx1a.lineTo(Math.round(cwidth/2), cheight);
    ctx1a.setLineDash([2,2]);
    ctx1a.strokeStyle = "rgba(240, 240, 180, 1)";
    ctx1a.stroke();
  }
}

function drawFxb() {
  var p, px, py, cx, x;
  if (stopscd) {
    ctx1b.fillStyle = "rgba(240, 240, 0, " + (0.2 * (gts - stopscd > stopscdn ? 0 : 1 - (gts - stopscd) / stopscdn)) + ")";
    ctx1b.fillRect(0, 0, cwidth, cheight);
  }
  if (histcd) {
    ctx1b.fillStyle = "rgba(160, 70, 40, " + (0.2 * (gts - histcd > histcdn ? 0 : 1 - (gts - histcd) / histcdn)) + ")";
    ctx1b.fillRect(0, 0, cwidth, cheight);
  }
  if (frzc || frzccd) {
    if (frzccd) {
      x = gts - frzccd > frzccdn ? 1 : (gts - frzccd) / frzccdn;
      if (!frzc) {
        x = 1 - x;
      }
    } else {
      x = 1;
    }
    ctx1b.fillStyle = "rgba(180, 220, 180, " + (0.1*x) + ")";
    ctx1b.fillRect(0, 0, cwidth, cheight);
  }
  cx = cellsz < 2 ? 2 - cellsz : 0;
  p = chgcqp;
  while (p < chgcql) {
    bmemgE(p++);
    px = cwidth / 2 + (bmemv0 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) - posx;
    py = cheight / 2 - (bmemv1 * (cellsz+(cellsz>grb?1:cellsz/grb)) + (cellsz>grb?1:cellsz/grb)) + posy - cellsz + 1;
    if (px >= 0 - cellsz && px < cwidth + cellsz && py >= 0 - cellsz && py < cheight + cellsz) {
      x = (p - chgcqp) / (chgcql - chgcqp);
      ctx1b.fillStyle = "rgba(" + Math.floor(100+x*120) + ", " + Math.floor(100+x*120) + ", " + Math.floor(100+x*120) + ", 1)";
      ctx1b.fillRect(px - cx/2, py - cx/2, cellsz + cx, cellsz + cx);
    }
  }
}

function drawHelp() {
  var a, i, j, z, x, y, k, n;

  if (dhlpn === dhlpn2) {
    if (dhlpn > 0) {
      if (
             dhlpn === 2 && !stpge
          || dhlpn === 3 && crulem === 0
          ) {
        dhlpn = 1;
      }
    }
  } else if (dhlpn === 0) {
    dhlpcd2 = null;
    dhlpcd3 = null;
  } else {
    dhlpcd2 = gts;
    dhlpcd3 = gts;
    if (divv) {
      canvas3.style.zIndex = "300";
    }
  }

  if (dhlpn !== dhlpn2) {
    if (dhlpql > 0) {
      if (!dhlpq[dhlpql-1][5]) {
        dhlpq[dhlpql-1][5] = gts;
      }
    }
    if (dhlpn > 0) {
      a = drawHelp0(dhlpn);
      dhlpq[dhlpql] = [];
      dhlpq[dhlpql][0] = a[0];
      dhlpq[dhlpql][1] = a[1];
      dhlpq[dhlpql][2] = a[2];
      dhlpq[dhlpql][3] = a[3];
      dhlpq[dhlpql][4] = a[4];
      dhlpq[dhlpql][5] = gts;
      dhlpq[dhlpql][6] = 0;
      dhlpq[dhlpql][7] = a[5];
      dhlpq[dhlpql][8] = divv;
      dhlpql++;
    }
    dhlpn2 = dhlpn;
  }
  if (dhlpn > 0 && dhlpql > 0 && dhlpq[dhlpql-1][5]) {
    dhlpq[dhlpql-1][6] = gts - dhlpq[dhlpql-1][5] > dhlpcdn ? 1 : (gts - dhlpq[dhlpql-1][5]) / dhlpcdn;
  }
  i = 0;
  j = 0;
  while (i < dhlpql) {
    if (dhlpq[i][5] !== null || dhlpn > 0 && i === dhlpql - 1) {
      dhlpq[j++] = (a = dhlpq[i]);
      z = gts - a[5] > dhlpcdn ? 1 : (gts - a[5]) / dhlpcdn;
      if (dhlpn === 0 || i < dhlpql - 1) {
        z = 1 - z;
      }
      x = (cwidth - a[3]) / 2 + a[1];
      y = (cheight - a[4]) / 2 + a[2];
      ctx3.globalAlpha = z;
      if (a[6] >= 1) {
        if (a[8]) {
          ctx3.fillStyle = "rgba(0, 0, 0, 0.7)";
        } else {
          ctx3.fillStyle = "rgba(0, 80, 0, 0.7)";
        }
        fillrr(ctx3, Math.round(x), Math.round(y), Math.round(a[3]), Math.round(a[4]), a[4] / 5);
        ctx3.drawImage(a[0], Math.round(x), Math.round(y));
      } else {
        z = Math.pow(2, 9+3*a[6]) / 4096;
        ctx3.drawImage(a[0], 0, 0, a[3] / 2, a[4] / 2, 0 - a[3] / 2 + (x + a[3] / 2) * z, y, a[3] / 2, a[4] / 2);
        ctx3.drawImage(a[0], a[3] / 2, 0, a[3] / 2, a[4] / 2, x + a[3] / 2, 0 - a[4] / 2 + (y + a[4] / 2) * z, a[3] / 2, a[4] / 2);
        ctx3.drawImage(a[0], a[3] / 2, a[4] / 2, a[3] / 2, a[4] / 2, cwidth - (cwidth - x - a[3] / 2) * z, y + a[4] / 2, a[3] / 2, a[4] / 2);
        ctx3.drawImage(a[0], 0, a[4] / 2, a[3] / 2, a[4] / 2, x, cheight - (cheight - y - a[4] / 2) * z, a[3] / 2, a[4] / 2);
      }
      ctx3.globalAlpha = 1;
      if (dhlpn > 0 && a[6] >= 1 && i === dhlpql - 1) {
        n = 1;
        for (k = 0; k < a[7][0].length; k++) {
          drawHelp1(ctx3, x + (k + 1) * (a[3] / (a[7][0].length + 1)), y, a[7][0][k][0], a[7][0][k][1], n++);
        }
        for (k = 0; k < a[7][1].length; k++) {
          drawHelp1(ctx3, x + a[3], y + (k + 1) * (a[4] / (a[7][1].length + 1)), y, a[7][1][k][0], a[7][1][k][1], n++);
        }
        for (k = 0; k < a[7][2].length; k++) {
          drawHelp1(ctx3, x + a[3] - (k + 1) * (a[3] / (a[7][2].length + 1)), y + a[4], a[7][2][k][0], a[7][2][k][1], n++);
        }
        for (k = 0; k < a[7][3].length; k++) {
          drawHelp1(ctx3, x, y + a[4] - (k + 1) * (a[4] / (a[7][3].length + 1)), a[7][3][k][0], a[7][3][k][1], n++);
        }
      }
    }
    i++;
  }
  for (i = j; i < dhlpql; i++) {
    dhlpq[i] = null;
  }
  dhlpql = j;
  if (dhlpn === 0 && (!divv || dhlpql === 0)) {
    canvas3.style.zIndex = "100";
  }
}

function drawHelp0(n) {
  var w = 0, h = 0, x, y, x2, i, dx, dy, mx, my, l, x3;
  function drw(c, s, x, y) {
    var w2 = c.measureText(s).width;
    c.fillText(s, x, y);
    if (x + w2 > w)
      w = x + w2;
    if (y > h)
      h = y;
    return x + w2;
  }
  canvasos1.width = cwidth;
  canvasos1.height = cheight;
  ctxos1.clearRect(0, 0, cwidth, cheight);
  x = 0;
  y = 0;
  dx = 0;
  dy = 0;
  mx = 15;
  my = 10;
  l = [[],[],[],[]];
  switch (n) {
    case 1:
      dx = 150;
      dy = 100;
      l[0][0] = [function(){return fbutt[0][0]+10}, function(){return fbutt[0][1]+25}];
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(210, 210, 210, 1)";
      drw(ctxos1, "\u22C5  Discover Yagols \u22C5 Poke around and explore  \u22C5", x, y + 15);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, "\u22C5  Help texts like these will be shown when functions are activated  \u22C5", x + 8, y + 39);
      drw(ctxos1, "\u22C5  General Usage :  \u22C5", x + 8, y + 63);
      ctxos1.fillText("\u22C5", x + 22, y + 87);
      ctxos1.fillStyle = "rgba(170, 200, 170, 0.9)";
      ctxos1.fillText("Click", x + 35, y + 87);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 87);
      ctxos1.font = "15px " + font;
      ctxos1.fillStyle = "rgba(40, 110, 240, 0.8)";
      x2 = drw(ctxos1, "blue", x2, y + 87);
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " buttons, symbols or texts to (de)activate functions  \u22C5", x2 + 1, y + 87);
      drw(ctxos1, "\u22C5", x + 53, y + 107);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 107);
      ctxos1.font = "15px " + font;
      ctxos1.fillStyle = "rgba(160, 70, 40, 1)";
      x2 = drw(ctxos1, "red", x2 + 1, y + 108);
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " buttons, symbols or texts to cancel / stop / clear  \u22C5", x2 + 1, y + 107);
      ctxos1.fillText("\u22C5", x + 22, y + 131);
      ctxos1.fillStyle = "rgba(170, 200, 170, 0.9)";
      ctxos1.fillText("Press", x + 35, y + 131);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 131);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Bb", x2, y + 131);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, ", ", x2, y + 131);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Ss", x2, y + 131);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " and/or ", x2, y + 131);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "0", x2, y + 131);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " - ", x2 - 1, y + 131);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "9", x2, y + 131);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to enter a new rule, or the generation to stop at  \u22C5", x2, y + 131);
      drw(ctxos1, "\u22C5", x + 53, y + 151);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 151);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "#", x2, y + 151);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, ", ", x2, y + 151);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Pp", x2, y + 151);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, ", ", x2, y + 151);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Ww", x2, y + 151);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, ", ", x2, y + 151);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "?", x2, y + 151);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to show Grid, Pattern box, World view or Help  \u22C5", x2, y + 151);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 171);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "<,", x2, y + 171);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " or ", x2, y + 171);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, ">.", x2, y + 171);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to go to Previous or Next generation  \u22C5", x2, y + 171);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 191);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x3 = x2;
      x2 = drw(ctxos1, "Ff", x2, y + 191);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " or ", x2, y + 191);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Rr", x2, y + 191);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to Fast-Forward or Rewind  \u22C5", x2, y + 191);
      x2 = drw(ctxos1, "\u22C5  ", x3, y + 211);
      drawStrImg(ctxos1, "\u21FE", x2 - 1, y + 212, 22, 220, 220, 220, 1);
      drw(ctxos1, "1st press is normal speed, 2nd is fast, 3rd is stop  \u22C5", x2 + 22, y + 211);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 231);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Space", x2, y + 231);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to start/stop Play (", x2, y + 231);
      drawStrImg(ctxos1, "\u25B7\u25B7", x2 + 2, y + 233, 13, 40, 110, 240, 1);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, "), or stop Fast-Forward / Rewind  \u22C5", x2 + 30, y + 231);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 251);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Esc", x2, y + 251);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to cancel a function  \u22C5", x2, y + 251);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 271);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "+", x2, y + 271);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " or ", x2, y + 271);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "-", x2, y + 271);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to zoom in or out, ", x2, y + 271);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, " \\ ", x2, y + 271);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to de-activate generation stop (", x2, y + 271);
      drawStrImg(ctxos1, "\u29B5", x2 + 1, y + 273, 20, 200, 200, 200, 0.8);
      drw(ctxos1, ")  \u22C5", x2 + 20, y + 271);
      x2 = drw(ctxos1, "\u22C5  Cursor keys to move the universe  \u22C5", x + 78, y + 291);
      break;
    case 2:
      dx = 150;
      dy = 60;
      l[0][0] = [function(){return fbutt[10][0]+10}, function(){return fbutt[10][1]+25}];
      l[3][0] = [function(){return stpge?stpgssx2+20:null}, function(){return stpge?stpgssy2+20:null}];
      l[3][1] = [function(){return stpge?stpgssx+20:null}, function(){return stpge?stpgssy+20:null}];
      l[3][2] = [function(){return stpge?stpgdx+20:null}, function(){return stpge?stpgdy+15:null}];
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(210, 210, 210, 1)";
      drw(ctxos1, "\u22C5  Set a stop at absolute or relative generation number (> 0)  \u22C5", x, y + 15);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, "\u22C5  Just start typing digits ", x + 8, y + 39);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "(4)", x2, y + 39);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, "  \u22C5", x2, y + 39);
      x2 = drw(ctxos1, "\u22C5  The stop is set and active when the stop sign ", x + 8, y + 63);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "(3)", x2, y + 63);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " is  ", x2, y + 63);
      ctxos1.fillStyle = "rgba(160, 70, 40, 1)";
      ctxos1.font = "16px " + font;
      x2 = drw(ctxos1, "red", x2 - 2, y + 64);
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, "  \u22C5", x2, y + 63);
      ctxos1.fillText("\u22C5", x + 22, y + 87);
      ctxos1.fillStyle = "rgba(170, 200, 170, 0.9)";
      ctxos1.fillText("Press", x + 35, y + 87);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 87);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "0", x2, y + 87);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " - ", x2 - 1, y + 87);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "9", x2, y + 87);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to enter generation number, ", x2, y + 87);
      ctxos1.fillStyle = "rgba(220, 220, 220, 1)";
      x2 = drw(ctxos1, "-", x2, y + 87);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to toggle absolute / minus / plus  \u22C5", x2, y + 87);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 107);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Enter", x2, y + 107);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to set and activate the stop, ", x2, y + 107);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Esc", x2, y + 107);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " or ", x2, y + 107);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "\\", x2, y + 107);
      x2 = drw(ctxos1, " to de-activate the stop  \u22C5", x2, y + 107);
      ctxos1.fillText("\u22C5", x + 61, y + 127);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 127);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "Backspace", x2, y + 127);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, " to remove last digit  \u22C5", x2, y + 127);
      ctxos1.fillText("\u22C5", x + 43, y + 147);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 147);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "0", x2, y + 147);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " first to start with last entered value  \u22C5 ", x2, y + 147);
      ctxos1.fillText("\u22C5", x + 22, y + 171);
      ctxos1.fillStyle = "rgba(170, 200, 170, 0.9)";
      ctxos1.fillText("Click", x + 35, y + 171);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 171);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "(2)", x2, y + 171);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to set and activate the stop  \u22C5", x2, y + 171);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 191);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "(3)", x2, y + 191);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to de-activate the stop  \u22C5", x2, y + 191);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 211);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x3 = x2;
      x2 = drw(ctxos1, "(4)", x2, y + 211);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to start/stop fast-forward / rewind when a stop is activated  \u22C5", x2, y + 211);
      x2 = drw(ctxos1, "\u22C5  ", x3, y + 231);
      drawStrImg(ctxos1, "\u21FE", x2 - 1, y + 232, 22, 220, 220, 220, 1);
      x3 = x2;
      drw(ctxos1, "This is the fastest way to go to any generation  \u22C5", x3 + 22, y + 231);
      drw(ctxos1, "\u22C5   Repeating Oscillators & Spaceships are skipped  \u22C5", x3 + 22, y + 251);
      x2 = drw(ctxos1, "\u22C5   Generation markers (", x3 + 22, y + 271);
      drawStrImg(ctxos1, "\u25C6", x2, y + 275, 27, 240, 240, 0, 0.8);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, ") are ignored  \u22C5", x2 + 20, y + 271);
      drw(ctxos1, "\u22C5   Yagols accellerates until the stop has been reached  \u22C5", x3 + 22, y + 291);
      x2 = drw(ctxos1, "\u22C5  ", x + 78, y + 311);
      ctxos1.fillStyle = "rgba(220, 220, 220, 0.9)";
      x2 = drw(ctxos1, "(1)", x2, y + 311);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, " to show or hide stop entry  \u22C5", x2, y + 311);
      x2 = drw(ctxos1, "\u22C5  Yagols will also respect the stop when playing (", x + 10, y + 335);
      drawStrImg(ctxos1, "\u25B7\u25B7", x2 + 2, y + 337, 13, 40, 110, 240, 1);
      ctxos1.fillStyle = "rgba(200, 200, 200, 0.8)";
      drw(ctxos1, ")  \u22C5", x2 + 30, y + 335);
      drw(ctxos1, "\u22C5  If a relative stop has been set it will be re-set everytime when stopped  \u22C5", x + 10, y + 359);
      drw(ctxos1, "\u22C5  Consecutive generations without changes (a still life) are treated as a whole  \u22C5", x + 10, y + 379);
      drw(ctxos1, "\u22C5  Therefore, Yagols can not stop at one specific such generation unless it's the last one  \u22C5", x + 10, y + 399);
      break;
    case 3:
      dx = 0;
      dy = 0;
      l[2][0] = [function(){return 150}, function(){return cheight-100}];
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(210, 210, 210, 1)";
      drw(ctxos1, "\u22C5  Enter new rule  \u22C5", x, y + 15);
      break;
    default:
      ctxos1.font = "13px " + font;
      ctxos1.fillStyle = "rgba(200, 200, 200, 1)";
      drw(ctxos1, "\u22C5  ?  \u22C5", x, y + 15);
      break;
  }
  h += 7;
  mx = 28;
  my = 20;
  canvasos2.width = w + mx * 2;
  canvasos2.height = h + my * 2;
  ctxos2.clearRect(0, 0, canvasos2.width, canvasos2.height);
  ctxos2.drawImage(canvasos1, 0, 0, w, h, (canvasos2.width - w) / 2, (canvasos2.height - h) / 2, w, h);
  i = new Image();
  i.src = canvasos2.toDataURL("image/png");
  return [i, dx, dy, canvasos2.width, canvasos2.height, l];
}

function drawHelp1(c, fx, fy, tx, ty, n) {
  var a, hl = 15, s, x, y, q = 0.2, l;
  if (!tx || !ty) {
    return;
  }
  tx = tx();
  ty = ty();
  if (!tx || !ty) {
    return;
  }
  a = Math.atan2(ty-fy, tx-fx);
  c.beginPath();
  if (dhlplf === 1) {
    c.setLineDash([0,4,0]);
  } else {
    c.setLineDash([2,0,2]);
  }
  c.lineWidth = 1;
  c.strokeStyle = "rgba(140, 140, 180, 0.7)";
  c.moveTo(fx, fy);
  c.lineTo(tx, ty);
  c.stroke();
  c.beginPath();
  c.moveTo(tx, ty);
  c.setLineDash([]);
  c.lineWidth = 3;
  c.lineTo(tx-hl*Math.cos(a-Math.PI/6),ty-hl*Math.sin(a-Math.PI/6));
  c.stroke();
  c.beginPath();
  c.moveTo(tx, ty);
  c.setLineDash([]);
  c.lineWidth = 3;
  c.lineTo(tx-hl*Math.cos(a+Math.PI/6),ty-hl*Math.sin(a+Math.PI/6));
  c.stroke();
  s = "(" + n +")";
  l = s.length * 3;
  x = fx + (tx - fx) * q - l;
  y = fy - (fy - ty) * q + l;
  c.font = "12px " + font;
  c.fillStyle = "rgba(220, 220, 220, 0.9)";
  c.fillText(s, x, y);
}

function strokerr(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x+r, y);
  c.lineTo(x+w-r, y);
  c.quadraticCurveTo(x+w, y, x+w, y+r);
  c.lineTo(x+w, y+h-r);
  c.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  c.lineTo(x+r, y+h);
  c.quadraticCurveTo(x, y+h, x, y+h-r);
  c.lineTo(x, y+r);
  c.quadraticCurveTo(x, y, x+r, y);
  c.stroke();
}

function fillrr(c, x, y, w, h, r) {
  c.beginPath();
  c.moveTo(x+r, y);
  c.lineTo(x+w-r, y);
  c.quadraticCurveTo(x+w, y, x+w, y+r);
  c.lineTo(x+w, y+h-r);
  c.quadraticCurveTo(x+w, y+h, x+w-r, y+h);
  c.lineTo(x+r, y+h);
  c.quadraticCurveTo(x, y+h, x, y+h-r);
  c.lineTo(x, y+r);
  c.quadraticCurveTo(x, y, x+r, y);
  c.fill();
}

function drawStrImg(c, s, x, y, fs, r, g, b, a, q, q2) {
  var k, d, i = null, w, h, n;
  k = s+"-"+fs+"-"+r+"-"+g+"-"+b;
  if (q) {
    k += "-"+q;
  }
  function draws(s, fs) {
    canvasos0.width = (w = s.length * fs);
    canvasos0.height = (h = fs + (q2||0));
    ctxos0.clearRect(0, 0, w, h);
    ctxos0.font = "" + fs + "px " + font;
    ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
    ctxos0.fillText(s, 0, h - 1 - (q||0));
  }
  if (!(i = strimgt[k])) {
    if (fs > 0) {
      draws(s, fs);
    }
    switch (s) {
      case "MSG":
        ctxos0.beginPath();
        ctxos0.lineWidth = 2;
        ctxos0.setLineDash([]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.moveTo(1,-1);
        ctxos0.lineTo(w,h+5);
        ctxos0.moveTo(w-9, -2);
        ctxos0.lineTo(-12, h+7);
        ctxos0.stroke();
        break;
      case " \u29B5":
        fillrr(ctxos0, 6, 10, 4, 6, 1);
        fillrr(ctxos0, 6, 17, 4, 6, 1);
        fillrr(ctxos0, 6, 24, 4, 6, 1);
        break;
      case "vwcrs":
        canvasos0.width = (w = 24);
        canvasos0.height = (h = 20);
        ctxos0.clearRect(0, 0, w, h);
        ctxos0.beginPath();
        ctxos0.lineWidth = 1;
        ctxos0.setLineDash([]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.moveTo(12,0);
        ctxos0.lineTo(12,20);
        ctxos0.moveTo(0, 10);
        ctxos0.lineTo(24, 10);
        ctxos0.stroke();
        break;
      case "RB":
        canvasos0.width = (w = 300);
        canvasos0.height = (h = 29);
        ctxos0.beginPath();
        ctxos0.lineWidth = 2;
        ctxos0.setLineDash([1]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",0.7)";
        n = 1;
        while (n < 10) {
          ctxos0.moveTo(n * 29 + 1, 10);
          ctxos0.lineTo(n * 29 + 1, h-10);
          n++;
        }
        ctxos0.stroke();
        n = 1;
        while (n < 9) {
          ctxos0.beginPath();
          ctxos0.fillStyle = "rgba(40, 110, 240, 0.4)";
          ctxos0.ellipse(n * 29 + 15, 14, 10, 12, 0, 0, 2 * Math.PI);
          ctxos0.fill();
          ctxos0.font = "20px " + font;
          ctxos0.fillStyle = "rgba(0, 0, 0, 1)";
          ctxos0.fillText(String.fromCharCode(48+n), n * 29 + 8, 22);
          n++;
        }
        break;
      case "RB2":
        canvasos0.width = (w = 300);
        canvasos0.height = (h = 29);
        ctxos0.beginPath();
        ctxos0.lineWidth = 2;
        ctxos0.setLineDash([1]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",1)";
        n = 1;
        while (n < 10) {
          ctxos0.moveTo(n * 29 + 1, 10);
          ctxos0.lineTo(n * 29 + 1, h-10);
          n++;
        }
        ctxos0.stroke();
        n = 1;
        while (n < 9) {
          ctxos0.beginPath();
          ctxos0.fillStyle = "rgba(40, 110, 240, 0.4)";
          ctxos0.ellipse(n * 29 + 15, 14, 10, 12, 0, 0, 2 * Math.PI);
          ctxos0.fill();
          ctxos0.font = "20px " + font;
          ctxos0.fillStyle = "rgba(0, 0, 0, 1)";
          ctxos0.fillText(String.fromCharCode(48+n), n * 29 + 8, 22);
          n++;
        }
        break;
      case "RS":
        canvasos0.width = (w = 300);
        canvasos0.height = (h = 29);
        ctxos0.beginPath();
        ctxos0.lineWidth = 2;
        ctxos0.setLineDash([1]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",0.7)";
        n = 0;
        while (n < 10) {
          ctxos0.moveTo(n * 29 + 1, 10);
          ctxos0.lineTo(n * 29 + 1, h-10);
          n++;
        }
        ctxos0.stroke();
        n = 0;
        while (n < 9) {
          ctxos0.beginPath();
          ctxos0.fillStyle = "rgba(40, 110, 240, 0.4)";
          ctxos0.ellipse(n * 29 + 15, 14, 10, 12, 0, 0, 2 * Math.PI);
          ctxos0.fill();
          ctxos0.font = "20px " + font;
          ctxos0.fillStyle = "rgba(0, 0, 0, 1)";
          ctxos0.fillText(String.fromCharCode(48+n), n * 29 + 8, 22);
          n++;
        }
        break;
      case "RS2":
        canvasos0.width = (w = 300);
        canvasos0.height = (h = 29);
        ctxos0.beginPath();
        ctxos0.lineWidth = 2;
        ctxos0.setLineDash([1]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",1)";
        n = 0;
        while (n < 10) {
          ctxos0.moveTo(n * 29 + 1, 10);
          ctxos0.lineTo(n * 29 + 1, h-10);
          n++;
        }
        ctxos0.stroke();
        n = 0;
        while (n < 9) {
          ctxos0.beginPath();
          ctxos0.fillStyle = "rgba(40, 110, 240, 0.4)";
          ctxos0.ellipse(n * 29 + 15, 14, 10, 12, 0, 0, 2 * Math.PI);
          ctxos0.fill();
          ctxos0.font = "20px " + font;
          ctxos0.fillStyle = "rgba(0, 0, 0, 1)";
          ctxos0.fillText(String.fromCharCode(48+n), n * 29 + 8, 22);
          n++;
        }
        break;
      case "rule":
        canvasos0.width = (w = 25);
        canvasos0.height = (h = 30);
        ctxos0.font = "14px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("r", 0, 14);
        ctxos0.fillText("u", 4, 19);
        ctxos0.fillText("l", 13, 26);
        ctxos0.fillText("e", 17, 28);
        break;
      case "s":
        canvasos0.width = (w = 15);
        canvasos0.height = (h = 15);
        ctxos0.font = "11px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("s", 0, 13);
        break;
      case "GoL":
        canvasos0.width = (w = 25);
        canvasos0.height = (h = 30);
        ctxos0.font = "14px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("G", 0, 22);
        ctxos0.fillText("o", 10, 19);
        ctxos0.fillText("L", 17, 14);
        break;
      case "???":
        canvasos0.width = (w = 25);
        canvasos0.height = (h = 30);
        ctxos0.font = "14px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("?", 0, 16);
        ctxos0.fillText("?", 8, 23);
        ctxos0.fillText("?", 16, 30);
        break;
      case " I ":
        ctxos0.beginPath();
        ctxos0.lineWidth = 3;
        ctxos0.setLineDash([1]);
        ctxos0.strokeStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.ellipse(14, 20, 8, 13, 0, 0, 2 * Math.PI);
        ctxos0.stroke();
        break;
      case "GenSlots":
        canvasos0.width = (w = 140);
        canvasos0.height = (h = 20);
        ctxos0.font = "13px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("\u22C5\u22C5Generation\u22C5Slots\u22C5\u22C5", 0, 20);
        break;
      case "CellIdxBlockSz":
        canvasos0.width = (w = 140);
        canvasos0.height = (h = 20);
        ctxos0.font = "13px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("\u22C5\u22C5CellIdx\u22C5BlockSz\u22C5\u22C5", 0, 20);
        break;
      case "diamstop":
        draws("\u25C8 ", 27);
        ctxos0.font = "bold 24px " + font;
        ctxos0.fillStyle = "rgba("+r+","+g+","+b+",1)";
        ctxos0.fillText("\u29B5", 19, 24);
        break;
    }
    d = canvasos0.toDataURL("image/png");
    console.log("pstrimg(\"" + k + "\", \"" + d + "\");");
    i = new Image();
    i.src = d;
    strimgt[k] = i;
  }
  if (a < 1) {
    c.globalAlpha = a;
  }
  c.drawImage(i, x, y - fs + 1);
  if (a < 1) {
    c.globalAlpha = 1;
  }
}

function pstrimg(k, d) {
  var i = new Image();
  i.src = d;
  strimgt[k] = i;
}

function hupdates() {
  var i, n, a;
  a = [];
  for (i = 0; i < tarr.length; i++) {
    n = tidx[crkey(tarr[i][0],tarr[i][1])];
    if (n < 0 && tarr[i][2] > 0 || Math.abs(n%2) === 1) {
      a.push([tarr[i][0],tarr[i][1],tarr[i][2],1]);
    }
  }
  tarr = [];
  tidx = {};
  hupdc = 0;
  return a;
}

function calcGen(u) {
  var i, u2, q, hi = hist[histh][0][histi], z, c, hf = false, q1, q2, p, pp, dx, dy, cp, cm, x, v0, v1, v2, v3;
  c = cellsn;
  cp = 0;
  cm = 0;
  capHist();
  if ((u2 = u?u:hupdates()).length > 0) {
    hi[3][1]++;
    hf = true;
  }
  appendHUpd(hi[0], u2, hi[3][1]-1);
  cellsf = false;
  if (cruleb !== histcr[0] || crules !== histcr[1]) {
    clrcellsx();
    hf = true;
    crulecomp();
    cellsf = true;
    if (hi[1]) {
      histcr = hi[1][0];
    }
    hi[1] = [histcr, [cruleb,crules]];
    histcr = [cruleb,crules];
    hlcrcd = performance.now();
    hi[3][0]++;
    drawMsgsStm("New Rule", "B"+cruleb+" S"+crules);
  }
  hi[5] = mingen;
  hi[6] = cellst;
  hi[7] = cellsr;
  hi[8] = cellsb;
  hi[9] = cellsl;
  if (hf) {
    hi[14] = httot = 0;
    hi[15] = htgen = gennum;
  }
  hf = hf ? hf : histp > 0 && hi[0].length > 0 && (q = prevHist(histh, histi)) && hist[q[0]][0][q[1]][11][0] > 0 && hist[q[0]][0][q[1]][11][1] === histp;
  if (hbcksll === 0 && (histp === 0 || hf)) {
    hi[10] = hbckhac();
    hbckslf = 0;
    if (!hbcksl) {
      hbcksl = [];
    }
    hbcksm = new Map();
    for (i = hbcksl.length; i < 1000; i++) {
      hbcksl[i] = 0;
    }
    z = histgp;
    p = 0;
    q1 = [histh,histi];
    rclHist0_1();
    while (z-- >= 0 && hbcksll < hbcksl.length) {
      if (p === -1) {
        if (z < 0) {
          break;
        }
        q1 = prevHist(q1[0], q1[1], 2);
        if (!hist[q1[0]][0][q1[1]][0] || hist[q1[0]][0][q1[1]][0].length === 0 || hist[q1[0]][0][q1[1]][2] > 0) {
          break;
        }
        p = 0;
      }
      if (p > 0) {
        rclHist0_2();
        q2 = rlHist(q1[0], q1[1], p--)[2];
        rclHist1_2();
        hbcksl[hbcksll++] = hist[q2[0]][0][q2[1]][10];
        hbcksm.set(hist[q2[0]][0][q2[1]][10], true);
        if (p <= 0) {
          p = -1;
        }
      } else if (p === 0) {
        hbcksl[hbcksll++] = hist[q1[0]][0][q1[1]][10];
        hbcksm.set(hist[q1[0]][0][q1[1]][10], true);
        if (hist[q1[0]][0][q1[1]][3][0] > 0 || hist[q1[0]][0][q1[1]][3][1] > 0) {
          break;
        }
        p = -1;
        if (z >= 0) {
          q2 = prevHist(q1[0], q1[1]);
          if (hist[q2[0]][0][q2[1]][11][0] > 0) {
            p = hist[q2[0]][0][q2[1]][11][1];
          }
        }
      }
    }
    rclHist1_1();
  }
  if (histp === 0) {
    hbckcheck();
  }
  gennum++;
  histgp++;
  if (histp === 0 || hf) {
    mingen = gennum;
    cellsl = maxr + 1;
    cellsr = maxl - 1;
    cellst = maxb - 1;
    cellsb = maxt + 1;
    cellsan = 0;
    if (cellsxf) {
      for (i = 0; i < cellsxl; i++) {
        bmemgC(i);
        v0 = bmemv0;
        v1 = bmemv1;
        if (fcidxg0(v0, v1) === 1 && ccrulesx && !ccrules[fcidxg3(v0, v1)]) {
          x = fcidxg2(v0, v1) - 1;
          bmemgA(x);
          bmemsA(x,bmemv0,bmemv1,bmemv2,9,bmemv4);
          hi[0].push([v0,v1,bmemv2,0]);
          cellsf = true;
          bmemsB(cellsan++,1,v0,v1,x);
        }
      }
      for (i = 0; i < cellslen; i++) {
        bmemgA(i);
        if (bmemv3 === 9) {
          bmemsA(i,bmemv0,bmemv1,bmemv2,1,bmemv4);
        } else if (bmemv3 === 1) {
          mingen = bmemv2 > 0 ? mingen === 0 ? bmemv2 : mingen > bmemv2 ? bmemv2 : mingen : mingen === 0 ? gennum : mingen;
          if (bmemv0 < cellsl) {
            cellsl = bmemv0;
          }
          if (bmemv0 > cellsr) {
            cellsr = bmemv0;
          }
          if (bmemv1 > cellst) {
            cellst = bmemv1;
          }
          if (bmemv1 < cellsb) {
            cellsb = bmemv1;
          }
        }
      }
      for (i = 0; i < cellsxl; i++) {
        bmemgC(i);
        v0 = bmemv0;
        v1 = bmemv1;
        if (fcidxg0(v0, v1) !== 1 && ccrulebx && ccruleb[fcidxg3(v0, v1)]) {
          cellsf = true;
          hi[0].push([v0,v1,-1,0]);
          bmemsB(cellsan++,0,v0,v1,0);
          if (v0 < cellsl) {
            cellsl = v0;
          }
          if (v0 > cellsr) {
            cellsr = v0;
          }
          if (v1 > cellst) {
            cellst = v1;
          }
          if (v1 < cellsb) {
            cellsb = v1;
          }
        }
      }
      clrcellsx(true);
    } else {
      for (i = 0; i < cellslen; i++) {
        bmemgA(i);
        if (bmemv3 === 1) {
          v0 = bmemv0;
          v1 = bmemv1;
          v2 = bmemv2;
          fcidxs3(v0, v1, x = neighbours(v0, v1, true));
          if (ccrulesx && ccrules[x]) {
            mingen = v2 > 0 ? mingen === 0 ? v2 : mingen > v2 ? v2 : mingen : mingen === 0 ? gennum : mingen;
            if (v0 < cellsl) {
              cellsl = v0;
            }
            if (v0 > cellsr) {
              cellsr = v0;
            }
            if (v1 > cellst) {
              cellst = v1;
            }
            if (v1 < cellsb) {
              cellsb = v1;
            }
          } else {
            cellsf = true;
            bmemsB(cellsan++,1,v0,v1,i);
            hi[0].push([v0,v1,v2,0]);
          }
        }
      }
    }
    cellsxf = true;
    for (i = 0; i < cellsan; i++) {
      bmemgB(i);
      v0 = bmemv0;
      v1 = bmemv1;
      v2 = bmemv2;
      v3 = bmemv3;
      if (v0 !== 1 && v3) {
        if (fcidxg1(v1,v2) === 1) {
          fcidxs1(v1,v2,0);
        }
        bmemsB(i,v0,v1,v2,0)
      }
      if (v0 === 0) {
        z = addCell(v1,v2,1);
        fcidx(v1,v2,2,z+1);
        bmemgA(z);
        bmemsA(z,bmemv0,bmemv1,gennum,bmemv3,bmemv4);
        cellsn++;
        cp++;
      } else {
        if (v0 === 1) {
          rmvCell(v3);
          cellsn--;
          cm++;
        }
        fcidx(v1,v2,1);
      }
    }
    calcWrld2();
  } else {
    hbcksll = 0;
  }
  if (hf) {
    histp = 0;
  }
  if (histp > 0) {
    if (hi[11][0] > 0) {
      hi[11][1] = 1;
    } else {
      q = prevHist(histh, histi);
      hist[q[0]][0][q[1]][11][1]++;
      histp++;
    }
  }
  if (!cellsf && hi[4] && histp === 0) {
    q = prevHist(histh, histi);
    hist[q[0]][0][q[1]][2]++;
  } else if (histp === 0 || hi[11][0] > 0) {
    z = hist[histh][0][histi][10];
    nextHist();
    if (!hist[histh][0][histi]) {
      histn++
    }
    hist[histh][0][histi] = [[],null,0,[0,0],histp===0&&!cellsf,mingen,cellst,cellsr,cellsb,cellsl,(histp>0||cellsn===0?0:cellsxl===0?z:hbckhac()),[0,0,0,0],cp,cm,httot+=cp+cm,htgen,0];
  }
  if (histp > 0) {
    q = prevHist(histh, histi);
    pp = hist[q[0]][0][q[1]][11][0];
    dx = hist[q[0]][0][q[1]][11][2];
    dy = hist[q[0]][0][q[1]][11][3];
    rclHist0_2();
    q = rlHist(histh, histi, histp);
    rclHist1_2();
    nextGen2(hist[q[0]][0][q[1]], pp, dx, dy);
    hist[histh][0][histi][10] = hist[q[2][0]][0][q[2][1]][10];
    calcWrld();
    hist[histh][0][histi][5] = mingen;
    hist[histh][0][histi][6] = cellst;
    hist[histh][0][histi][7] = cellsr;
    hist[histh][0][histi][8] = cellsb;
    hist[histh][0][histi][9] = cellsl;
  } else {
    if (cellsn === 0 || cellsxl === 0) {
      hbcksll = 0;
    } else if (hbcksl && hbcksll > 0) {
      if (hbckslf > 0) {
        hbckslf--;
      } else {
        hbckslf = hbcksl.length - 1;
      }
      if (hbcksll < hbcksl.length) {
        hbcksll++;
      } else {
        hbcksm.delete(hbcksl[hbckslf]);
      }
      hbcksl[hbckslf] = hist[histh][0][histi][10];
      hbcksm.set(hist[histh][0][histi][10], true);
    }
    if (cellsn > 0 && cellsxl === 0) {
      if (msgf1 !== 3) {
        dspmsg(["Still      ","\u22C5      \u22C5","      Life"], 4500, true);
        msgf1 = 3;
      }
      if (run && stops) {
        swrun();
        stopscd = performance.now();
      }
    } else if (c === 0 && cellsn === 0) {
      if (msgf1 !== 1 && msgf1 !== 2) {
        dspmsg(["Empty      ","\u22C5      \u22C5","      World"]);
        msgf1 = 1;
      }
      if (run && stops) {
        swrun();
        stopscd = performance.now();
      }
    } else if (c > 0 && cellsn === 0) {
      if (msgf1 !== 2) {
        dspmsg(["Life      ","\u22C5      \u22C5","      Ended"]);
        msgf1 = 2;
      }
      if (run && stops) {
        swrun();
        stopscd = performance.now();
      }
    }
  }
  if (gennum === (stpga ? stpgnm === 0 ? stpgn : stpgnc + stpgn * stpgnm : -1)) {
    if (run) {
      swrun();
      if (stpgnm !== 0) {
        stpgnc = gennum;
      }
      stopscd = performance.now();
    }
    ffw = 0;
    ffwstp = false;
    genbbl = false;
    stpgcd2 = performance.now();
    stpgsf = false;
  }
}

function neighbours(x, y, f) {
  var n = 0, v;
  if ((v = fcidxg0(x,y+1)) === 1) {
    n++;
  } else if (f) {
    newnb(x,y+1,v);
  }
  if ((v = fcidxg0(x+1,y+1)) === 1) {
    n++;
  } else if (f) {
    newnb(x+1,y+1,v);
  }
  if ((v = fcidxg0(x+1,y)) === 1) {
    n++;
  } else if (f) {
    newnb(x+1,y,v);
  }
  if ((v = fcidxg0(x+1,y-1)) === 1) {
    n++;
  } else if (f) {
    newnb(x+1,y-1,v);
  }
  if ((v = fcidxg0(x,y-1)) === 1) {
    n++;
  } else if (f) {
    newnb(x,y-1,v);
  }
  if ((v = fcidxg0(x-1,y-1)) === 1) {
    n++;
  } else if (f) {
    newnb(x-1,y-1,v);
  }
  if ((v = fcidxg0(x-1,y)) === 1) {
    n++;
  } else if (f) {
    newnb(x-1,y,v);
  }
  if ((v = fcidxg0(x-1,y+1)) === 1) {
    n++;
  } else if (f) {
    newnb(x-1,y+1,v);
  }
  return n;
}

function newnb(x, y, v) {
  var x0 = x, y0 = y, n;
  if (v && fcidxg1(x,y) === 1) {
    return;
  }
  if (!v) {
    fcidx(x, y, 4, 0, 2, 1, 0, 0);
  } else {
    fcidxs1(x, y, 1);
  }
  if (x0 < maxl) {
    x0 = maxr - maxl + x0 + 1;
  }
  if (x0 > maxr) {
    x0 = maxl + x0 - maxr - 1;
  }
  if (y0 < maxb) {
    y0 = maxt - maxb + y0 + 1;
  }
  if (y0 > maxt) {
    y0 = maxb + y0 - maxt - 1;
  }
  bmemsB(cellsan++,2,x0,y0,1);
  fcidxs3(x0, y0, n = neighbours(x0, y0, false));
  if (ccrulebx && ccruleb[n]) {
    cellsf = true;
    hist[histh][0][histi][0].push([x0,y0,-1,0]);
    bmemgB(cellsan-1);
    bmemsB(cellsan-1,0,bmemv1,bmemv2,bmemv3);
    if (x0 < cellsl) {
      cellsl = x0;
    }
    if (x0 > cellsr) {
      cellsr = x0;
    }
    if (y0 > cellst) {
      cellst = y0;
    }
    if (y0 < cellsb) {
      cellsb = y0;
    }
  }
}

function fpattbf(mode) {
  if (mode === 3) {
    clrvars();
  }
  fpattm = mode;
  fpatt = document.getElementById("patternt").value;
  fpattf = 1;
  fpattpos = 0;
  fpattd = {};
  fpattn = 0;
  fpatth = 0;
  fpatthx = 1;
  fpattw = 0;
  fpattnl = true;
  fpattnum = 0;
  fpattnr = true;
  fpattx = 0;
  fpattnx = 0;
  fpattnn = true;
  fpatta = [];
  fpattc = 1;
  if (patt) {
    dspdiv(1);
  }
  patt = false;
}

function pattf1() {
  if (!fpatt || fpattpos >= fpatt.length) {
    if (fpattw > 0) {
      fpatth += fpatthx;
    }
    fpattf = 2;
    fpattnt = 0;
    fpattnx = fpattn;
    fpattz = 0;
    fpattzx = Math.floor(fpattw / 2);
    fpattzy = Math.floor(fpatth / 2);
    fpattzxp = cellX(posx,true);
    fpattzyp = cellY(posy,true);
    fpattz2 = 0;
    fpatta.sort(function(a,b) {
      var x1 = a[0] - fpattzx;
      var y1 = a[1] - fpattzy;
      var x2 = b[0] - fpattzx;
      var y2 = b[1] - fpattzy;
      if (Math.abs(x1)*Math.abs(y1) < Math.abs(x2)*Math.abs(y2)) {
        return -1;
      } else if (x1 === x2 && y1 === y2) {
        return 0;
      } else {
        return 1;
      }
    });
    return;
  }
  var c = fpatt[fpattpos], c2 = fpattpos < fpatt.length - 1 ? fpatt.substring(fpattpos,fpattpos+2) : "";
  var x;
  if (!(/^\d+$/.test(c))) {
    fpattnn = true;
  }
  if (c === "\n" || c === "\r") {
    fpattnl = true;
  } else if (fpattnl) {
    if (c.search(/\S|$/) === 0) {
      fpattnl = false;
      if (c === "#" ||  c2 === "x=" || c2 === "x ") {
        fpattpos += fpatt.substring(fpattpos).search(/\n|\r|$/);
        fpattnl = true;
      } else {
        fpattpos--;
      }
    }
  } else if (/^\d+$/.test(c)) {
    if (fpattnn) {
      fpattnum = 0;
      fpattnn = false;
    }
    fpattnum = fpattnum * 10 + parseInt(c);
  } else if (c === "!") {
    fpattpos = fpatt.length - 1;
  } else if (c === "$") {
    fpattnum === 0 ? fpatthx++ : fpatthx += fpattnum;
    fpattnr = true;
    fpattx = 0;
    fpattnum = 0;
  } else if (c === "b" || c === "." || c === "o" || c === "A") {
    if (fpattnr) {
      fpattnr = false;
      fpatth += fpatthx;
      fpatthx = 0;
    }
    x = fpattx;
    fpattnum === 0 ? fpattx++ : fpattx += fpattnum;
    fpattnum = 0;
    if (c === "o" || c === "A") {
      for (; x < fpattx; x++) {
        fpattd[""+x+"-"+(fpatth-1)] = true;
        fpattn++;
        fpatta.push([x,fpatth-1]);
      }
    }
    if (fpattx > fpattw) {
      fpattw = fpattx;
    }
  }
  fpattpos++;
}

function pattf2() {
  var zx = 0, zy = 0;
  if (fpattz2 >= fpatta.length) {
    fpattf = 0;
    var d = new Date();
    document.getElementById("patternt").value =
        "# "
      + d.getFullYear()    + "-"
      + (d.getMonth() + 1) + "-"
      + d.getDate()        + " "
      + d.getHours()       + ":"
      + d.getMinutes()     + ":"
      + d.getSeconds()     + " - "
      + (fpattm===1?"/Add":fpattm===2?"/Replace":"/Reset") + " - grid w" + fpattw + ",h" + fpatth +  " - " + fpattnx + " \"on\" cells - pos " + fpattzxp+","+fpattzyp + " - " + fpattnt + " cells switched on<>off"
      + "\r\n\r\n"
      + document.getElementById("patternt").value;
    return;
  }
  if (fpattm === 2 && fpattz < cellslen) {
    bmemgA(fpattz);
    if (bmemv3 === 1) {
      zx = bmemv0 - fpattzxp;
      zy = fpattzyp - bmemv1;
      if (   fpattzx+zx >= 0 && fpattzx+zx < fpattw && fpattzy+zy >= 0 && fpattzy+zy < fpatth
          && !fpattd[""+(fpattzx+zx)+"-"+(fpattzy+zy)]) {
        chgCellCR(fpattzxp+zx, fpattzyp-zy, 2);
        fpattnt++;
      }
    }
    fpattz++;
  } else if (fpattz2 < fpatta.length) {
    zx = fpatta[fpattz2][0] - fpattzx;
    zy = fpatta[fpattz2][1] - fpattzy;
    if (fcidxg0(fpattzxp+zx,fpattzyp-zy) !== 1) {
      chgCellCR(fpattzxp+zx, fpattzyp-zy, 1);
      fpattnt++;
    }
    fpattn--;
    fpattz2++;
  }
}

function crulecomp() {
  var i;
  if (ccruleb === "") {
    ccrulebx = false;
  } else {
    for (i = 0; i < ccruleb.length; i++) {
      if (cruleb.indexOf(""+i) > -1) {
        ccruleb[i] = true;
      } else {
        ccruleb[i] = false;
      }
    }
  }
  if (ccrules === "") {
    ccrulesx = false;
  } else {
    for (i = 0; i < ccrules.length; i++) {
      if (crules.indexOf(""+i) > -1) {
        ccrules[i] = true;
      } else {
        ccrules[i] = false;
      }
    }
  }
}

function crulebut(f) {
  if (f === 1) {
    cruleb = crulebn;
    crules = crulesn;
  }
  crulem2 = crulem;
  crulem = 0;
}

function capHist() {
  var h, i, hi, n, q, a;
  h = histh;
  i = histi;
  n = histgn;
  if (histp > 0) {
    q = prevHist(histh, histi);
    if (hist[q[0]][0][q[1]][11][0] > 0 && histp < hist[q[0]][0][q[1]][11][1]) {
      histgn -= hist[q[0]][0][q[1]][11][1] - histp;
      hist[q[0]][0][q[1]][11][1] = histp;
      hist[histh][0][histi][0] = [];
      hist[histh][0][histi][1] = null;
      hist[histh][0][histi][3][0] = 0;
      hist[histh][0][histi][3][1] = 0;
    }
  }
  if (histgn > 0) {
    histgn -= hist[histh][0][histi][2];
    if (hist[histh][0][histi][11][0] > 0) {
      histgn -= hist[histh][0][histi][11][1] - 1;
    }
  }
  while (histgn > 0) {
    nextHist();
    histgn -= hist[histh][0][histi][2] + 1;
    if (hist[histh][0][histi][11][0] > 0) {
      histgn -= hist[histh][0][histi][11][1] - 1;
    }
    hist[histh][0][histi] = null;
    histn--;
  }
  q = [histh,histi];
  while (q[0] !== h || q[1] !== i) {
    q = prevHist(q[0],q[1],1);
  }
  histh = h;
  histi = i;
  hi = hist[histh][0][histi];
  if (hi) {
    a = null;
    for (i = 0; i < hi[0].length; i++) {
      if (hi[0][i][3] !== 1) {
        a = [];
        break;
      }
    }
    if (a) {
      for (i = 0; i < hi[0].length; i++) {
        if (hi[0][i][3] === 1) {
          a.push(hi[0][i]);
        }
      }
      hi[0] = a;
    }
    hi[2] = 0;
    hi[11][0] = 0;
    hi[11][1] = 0;
    hi[11][2] = 0;
    hi[11][3] = 0;
  }
  if (n > 0) {
    capcd2 = performance.now();
    capcds2 = ""+n;
  }
}

function prevGen() {
  var i, c, r, g, z, u, q, hi, p0, q0, pp, dx, dy, pg, x;
  if (histgp > 0) {
    clrcellsx();
    pg = gennum;
    x = stpga ? stpgnm === 0 ? stpgn : stpgnc + stpgn * stpgnm : -1;
    cruleb = histcr[0];
    crules = histcr[1];
    hi = hist[histh][0][histi];
    if ((u = hupdates()).length > 0) {
      capHist();
      appendHUpd(hi[0], u, hi[3][1]);
      hi[3][1]++;
      hi[5] = mingen;
      hi[6] = cellst;
      hi[7] = cellsr;
      hi[8] = cellsb;
      hi[9] = cellsl;
      hi[10] = hbckhac();
      hi[14] = httot = 0;
      hi[15] = htgen = gennum;
    }
    pp = 0;
    p0 = 0;
    dx = 0;
    dy = 0;
    if (histp > 0) {
      q = prevHist(histh, histi);
      pp = hist[q[0]][0][q[1]][11][0];
      p0 = hist[q[0]][0][q[1]][11][1];
      dx = hist[q[0]][0][q[1]][11][2];
      dy = hist[q[0]][0][q[1]][11][3];
    }
    if (histp === p0) {
      if (hi[1]) {
        cruleb = hi[1][0][0];
        crules = hi[1][0][1];
        histcr = [cruleb,crules];
        crulecomp();
      }
      i = hi[0].length - 1;
      while (i >= 0) {
        if (hi[0][i][3] === 1) {
          c = hi[0][i][0];
          r = hi[0][i][1];
          g = hi[0][i][2];
          z = fcidxg0(c,r) === 1 ? fcidxg2(c,r) : null;
          if (g >= 0) {
            if (histp > 0 && pp) {
              g += Math.ceil(histp/pp) * pp;
            }
            if (z) {
              z--;
            } else {
              z = addCell(c,r);
              fcidx(c,r,4,0,1,0,z+1,0);
            }
            bmemgA(z);
            if (bmemv3 !== 1) {
              cellsn++;
            }
            bmemsA(z,c,r,g,1,-1);
          } else if (g === -1) {
            if (z) {
              z--;
              fcidx(c,r,1);
              bmemgA(z);
              if (bmemv3 === 1) {
                cellsn--;
              }
              rmvCell(z);
            }
          }
        }
        i--;
      }
    }
    if (ffw === -1 && (ffwm === -1 || ffwm === 1)) {
      while (histp > 1 && (x < 0 || gennum - 1 !== x)) {
        rclHist0_2();
        q = rlHist(histh, histi, histp);
        rclHist1_2();
        prevGen2(hist[q[0]][0][q[1]], pp, dx, dy);
        histp--;
        gennum--;
        histgp--;
        histgn++;
        i++;
      }
    }
    if (histp > 0) {
      rclHist0_2();
      q0 = rlHist(histh, histi, histp);
      rclHist1_2();
    }
    if (histp < 2) {
      q = prevHist(histh, histi, 1);
      histh = q[0];
      histi = q[1];
      hi = hist[histh][0][histi];
      if (hi[1]) {
        hlcrcd3 = performance.now();
        hlcrcd = null;
        hlcrcd2 = null;
        cruleb = hi[1][1][0];
        crules = hi[1][1][1];
        histcr = [cruleb,crules];
        crulecomp();
      }
    }
    if (histp > 0) {
      prevGen2(hist[q0[0]][0][q0[1]], pp, dx, dy);
      if (histp > 1) {
        hi = hist[q0[0]][0][q0[1]];
      }
      histp--;
      if (histp === 0) {
        calcWrld3();
      }
    } else {
      prevGen2(hi, 0, 0, 0);
      mingen = hi[5];
    }
    gennum--;
    histgp--;
    histgn++;
    if (histp === 0) {
      gennum -= hi[2];
      histgp -= hi[2];
      histgn += hi[2];
      cellst = hi[6];
      cellsr = hi[7];
      cellsb = hi[8];
      cellsl = hi[9];
      calcWrld2();
    } else {
      calcWrld();
    }
    if (histp === 0 && histgp > 0) {
      q = prevHist(histh, histi);
      if (hist[q[0]][0][q[1]][11][0] > 0) {
        histp = hist[q[0]][0][q[1]][11][1];
      }
    }
    if (gennum === 0 && msgf1 === 0) {
      swstmsg("G \u22C5 e \u22C5 n  \u22C5 ", "\\ \u22C5 Z \u22C5 /  \u22C5  ");
      msgf1 = 11;
    }
    if (x >= 0 && x < pg && x >= gennum) {
      return true;
    }
  }
  return false;
}

function prevGen2(hi, pp, dx, dy) {
  var i, c, r, g, z;
  i = hi[0].length - 1;
  while (i >= 0) {
    if (hi[0][i][3] !== 1) {
      c = hi[0][i][0] + (histp===0||pp===0?0:Math.ceil(histp/pp)*dx);
      r = hi[0][i][1] + (histp===0||pp===0?0:Math.ceil(histp/pp)*dy);
      if (c < maxl) {
        c = maxr - maxl + c + 1;
      }
      if (c > maxr) {
        c = maxl + c - maxr - 1;
      }
      if (r < maxb) {
        r = maxt - maxb + r + 1;
      }
      if (r > maxt) {
        r = maxb + r - maxt - 1;
      }
      g = hi[0][i][2];
      z = fcidxg0(c,r) === 1 ? fcidxg2(c,r) : null;
      if (g >= 0) {
        if (histp > 0 && pp) {
          g += Math.ceil(histp/pp) * pp;
        }
        if (z) {
          z--;
        } else {
          z = addCell(c,r);
          fcidx(c,r,4,0,1,0,z+1,0);
        }
        bmemgA(z);
        if (bmemv3 !== 1) {
          cellsn++;
        }
        bmemsA(z,c,r,g,1,-1);
      } else if (g === -1) {
        if (z) {
          z--;
          fcidx(c,r,1);
          bmemgA(z);
          if (bmemv3 === 1) {
            cellsn--;
          }
          rmvCell(z);
        }
      }
    }
    i--;
  }
}

function nextGen() {
  var i, c, r, g, z, u, q, hi, p0, pp, dx, dy, pg, x;
  u = null;
  if ((u = hupdates()).length > 0
      || histgn < 1
      || cruleb !== histcr[0]
      || crules !== histcr[1]) {
    calcGen(u);
  } else {
    clrcellsx();
    pg = gennum;
    x = stpga ? stpgnm === 0 ? stpgn : stpgnc + stpgn * stpgnm : -1;
    pp = 0;
    p0 = 0;
    dx = 0;
    dy = 0;
    if (histp > 0) {
      q = prevHist(histh, histi);
      pp = hist[q[0]][0][q[1]][11][0];
      p0 = hist[q[0]][0][q[1]][11][1];
      dx = hist[q[0]][0][q[1]][11][2];
      dy = hist[q[0]][0][q[1]][11][3];
    }
    gennum++;
    histgp++;
    histgn--;
    if (histp === p0) {
      hi = hist[histh][0][histi];
      gennum += hi[2];
      histgp += hi[2];
      histgn -= hi[2];
      cruleb = histcr[0];
      crules = histcr[1];
      if (hi[1]) {
        hlcrcd = performance.now();
        hlcrcd2 = null;
        hlcrcd3 = null;
        cruleb = hi[1][1][0];
        crules = hi[1][1][1];
        histcr = [cruleb,crules];
        crulecomp();
      }
      histp = 0;
      nextGen2(hi, false, 0, 0, 0);
      pp = 0;
      p0 = 0;
      dx = 0;
      dy = 0;
      if ((pp = hi[11][0]) > 0) {
        p0 = hi[11][1];
        dx = hi[11][2];
        dy = hi[11][3];
        histp = 1;
      }
      nextHist();
    } else {
      histp++;
    }
    if (histp > 0) {
      rclHist0_2();
      q = rlHist(histh, histi, histp);
      rclHist1_2();
      hi = hist[q[2][0]][0][q[2][1]];
      nextGen2(hist[q[0]][0][q[1]], pp, dx, dy);
    }
    if (histp > 0 && ffw === 1 && (ffwm === -1 || ffwm === 1)) {
      while (histp < p0 - 1 && x !== gennum) {
        histp++;
        gennum++;
        histgp++;
        histgn--;
        rclHist0_2();
        q = rlHist(histh, histi, histp);
        rclHist1_2();
        hi = hist[q[2][0]][0][q[2][1]];
        nextGen2(hist[q[0]][0][q[1]], pp, dx, dy);
        i++;
      }
    }
    if (histp === p0) {
      hi = hist[histh][0][histi];
      i = 0;
      while (i < hi[0].length) {
        if (hi[0][i][3] === 1) {
          c = hi[0][i][0];
          r = hi[0][i][1];
          g = hi[0][i][2];
          z = fcidxg0(c,r) === 1 ? fcidxg2(c,r) : null;
          if (g >= 0) {
            if (z) {
              z--;
              fcidx(c,r,1);
              bmemgA(z);
              if (bmemv3 === 1) {
                cellsn--;
              }
              rmvCell(z);
            }
          } else if (g === -1) {
            if (z) {
              z--;
            } else {
              z = addCell(c,r);
              fcidx(c,r,4,0,1,0,z+1,0);
            }
            bmemgA(z);
            if (bmemv3 !== 1) {
              cellsn++;
            }
            bmemsA(z,c,r,gennum,1,-1);
          }
        }
        i++;
      }
      mingen = hi[5];
    } else if (histp === 0) {
      calcWrld3();
    }
    if (histp === 0) {
      cellst = hi[6];
      cellsr = hi[7];
      cellsb = hi[8];
      cellsl = hi[9];
      calcWrld2();
    } else {
      calcWrld();
    }
    if (x >= 0 && x > pg && x <= gennum) {
      return true;
    }
  }
  return false;
}

function nextGen2(hi, pp, dx, dy) {
  var i, c, r, g, z;
  i = 0;
  while (i < hi[0].length) {
    if (hi[0][i][3] !== 1) {
      c = hi[0][i][0] + (histp===0||pp===0?0:Math.ceil(histp/pp)*dx);
      r = hi[0][i][1] + (histp===0||pp===0?0:Math.ceil(histp/pp)*dy);
      if (c < maxl) {
        c = maxr - maxl + c + 1;
      }
      if (c > maxr) {
        c = maxl + c - maxr - 1;
      }
      if (r < maxb) {
        r = maxt - maxb + r + 1;
      }
      if (r > maxt) {
        r = maxb + r - maxt - 1;
      }
      g = hi[0][i][2];
      z = fcidxg0(c,r) === 1 ? fcidxg2(c,r) : null;
      if (g >= 0) {
        if (z) {
          z--;
          fcidx(c,r,1);
          bmemgA(z);
          if (bmemv3 === 1) {
            cellsn--;
          }
          rmvCell(z);
        }
      } else if (g === -1) {
        if (z) {
          z--;
        } else {
          z = addCell(c,r);
          fcidx(c,r,4,0,1,0,z+1,0);
        }
        bmemgA(z);
        if (bmemv3 !== 1) {
          cellsn++;
        }
        bmemsA(z,c,r,gennum,1,-1);
      }
    }
    i++;
  }
}

function revert() {
  var q, c, r, g, z;
  if (hupdc === 0 && histp > 0) {
    q = prevHist(histh, histi);
    if (hist[q[0]][0][q[1]][11][0] > 0 && histp < hist[q[0]][0][q[1]][11][1]) {
      return false;
    }
  }
  var u = hupdates(), i, a, hi = hist[histh][0][histi], f;
  if ((f = u.length === 0) && hi[3][1] > 0) {
    hi[3][1]--;
    a = [];
    i = 0;
    while (i < hi[0].length) {
      if (hi[0][i][3] === 1 && hi[0][i][hi[0][i].length-1] === hi[3][1]) {
        u.push(hi[0][i]);
      } else {
        a.push(hi[0][i]);
      }
      i++;
    }
    hi[0] = a;
  }
  if ((i = u.length - 1) >= 0) {
    if (f) {
      capHist();
    }
    clrcellsx();
  }
  while (i >= 0) {
    c = u[i][0];
    r = u[i][1];
    g = u[i][2];
    z = fcidxg0(c,r) === 1 ? fcidxg2(c,r) : null;
    if (g >= 0) {
      if (z) {
        z--;
      } else {
        z = addCell(c,r);
        fcidx(c,r,4,0,1,0,z+1,0);
      }
      bmemgA(z);
      if (bmemv3 !== 1) {
        cellsn++;
      }
      bmemsA(z,c,r,g,1,-1);
    } else if (g === -1) {
      if (z) {
        z--;
        fcidx(c,r,1);
        bmemgA(z);
        if (bmemv3 === 1) {
          cellsn--;
        }
        rmvCell(z);
      }
    }
    i--;
  }
  calcWrld();
  return true;
}

function appendHUpd(a, b, c) {
  for (var i = 0; i < b.length; i++) {
    b[i][b[i].length] = c;
    a.push(b[i]);
  }
}

function fcidxg0(c, r) {
  return fcidx(c, r, 20);
}
function fcidxg1(c, r) {
  return fcidx(c, r, 21);
}
function fcidxg2(c, r) {
  return fcidx(c, r, 22);
}
function fcidxg3(c, r) {
  return fcidx(c, r, 23);
}
function fcidxs0(c, r, v) {
  fcidx(c, r, 10, v);
}
function fcidxs1(c, r, v) {
  fcidx(c, r, 11, v);
}
function fcidxs2(c, r, v) {
  fcidx(c, r, 12, v);
}
function fcidxs3(c, r, v) {
  fcidx(c, r, 13, v);
}

function fcidx(c, r, v, vx, e, f, g, h) {
  var n = Math.pow(2,cidxb[cidxbi][0].length+5), c2, r2, d, c0 = c, r0 = r, u, v20, v21, v22, v23, v0, v1, v2, v3;
  if (c0 < maxl) {
    c0 = maxr - maxl + c0 + 1;
  }
  if (c0 > maxr) {
    c0 = maxl + c0 - maxr - 1;
  }
  if (r0 < maxb) {
    r0 = maxt - maxb + r0 + 1;
  }
  if (r0 > maxt) {
    r0 = maxb + r0 - maxt - 1;
  }
  cidxbc1++;
  c2 = Math.floor(c0/n);
  r2 = Math.floor(r0/n);
  if (v&&v>0&&v<20 && !cidxbb || c0 < cidxbx1 || c0 > cidxbx2 || r0 < cidxby1 || r0 > cidxby2) {
    cidxbb = fcidxb(cidxbi, cidxb[cidxbi][0].length-1, c2, r2, v&&v>0&&v<20?true:false);
    cidxbx1 = c2 * n;
    cidxby1 = r2 * n;
    cidxbx2 = cidxbx1 + n - 1;
    cidxby2 = cidxby1 + n - 1;
    cidxbc2++;
  }
  v21 = 0;
  v22 = 0;
  v23 = 0;
  if ((v20 = cidxbb ? cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+2] : 0) > 0) {
    v21 = cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+1+2];
    v22 = cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+2+2];
    v23 = cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+3+2];
  }
  if (v >= 20) {
    switch (v) {
      case 20:
        return v20;
      case 21:
        return v21;
      case 22:
        return v22;
      case 23:
        return v23;
      default:
        return 0;
    }
  } else if (v >= 10) {
    v0 = v20;
    v1 = v21;
    v2 = v22;
    v3 = v23;
    switch (v) {
      case 10:
        v0 = vx;
        break;
      case 11:
        v1 = vx;
        break;
      case 12:
        v2 = vx;
        break;
      case 13:
        v3 = vx;
        break;
    }
  } else {
    v0 = 0;
  }
  if (v === 4) {
    v0 = e;
    v1 = f;
    v2 = g;
    v3 = h;
  } else if (v === 3) {
    if (v20 === 1) {
      v21 = 0;
      v23 = 0;
      v0 = v20;
      v1 = v21;
      v2 = v22;
      v3 = v23;
    } else {
      v0 = 0;
    }
  }
  if (cellsxf) {
    u = 0;
    if (v === 1) {
      if (v20) {
        u = v20 === 1 ? -1 : 0;
        v20 = 2;
        v22 = 0;
        if (v23 === 0 && v21 !== 2 && v21 !== 3) {
          v21 = 3;
          bmemsD(cellsx2l++,c0,r0);
        }
        v0 = v20;
        v1 = v21;
        v2 = v22;
        v3 = v23;
      } else {
        v0 = 0;
      }
    } else if (v === 2) {
      if (v20) {
        u = v20 === 1 ? 0 : 1;
        v20 = 1;
        v22 = vx;
        v0 = v20;
        v1 = v21;
        v2 = v22;
        v3 = v23;
      } else {
        u = 1;
        v0 = 1;
        v1 = 0;
        v2 = vx;
        v3 = 0;
      }
    }
  }
  cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+0+2] = v0;
  cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+1+2] = v1;
  cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+2+2] = v2;
  cidxbb[(c0-cidxbx1)*n*4+(r0-cidxby1)*4+3+2] = v3;
  if ((d = (v20 === 0 ? v0 === 0 ? 0 : 1 : v0 === 0 ? -1 : 0)) !== 0) {
    cidxbb[1] += d;
    if (cidxbb[1] === 0) {
      freeCib(cidxbb);
      cidxb[cidxbi][0][cidxb[cidxbi][0].length-1].delete(crkey(c2,r2));
      cidxbb = null;
    }
  }
  if (cellsxf && u !== 0) {
    updnb(c0, r0, u);
  }
}

function fcidxb(bi, l, c, r, q) {
  var b, j, k, c2, r2, n, b1, b2, b3, b4, t, n2, k2, i, l2, c3, r3, f, i2, j2;
  t = l === cidxb[bi][0].length - 1 && cidxb[bi][2] === -1;
  if (!t && (!cidxb[bi][0][l] || cidxb[bi][0][l].size < 1)) {
    if (l === 0 && cidxb[bi][1] === -1) {
      cidxb[bi][0][l] = true;
      return null;
    } else if (l > 0) {
      if (cidxb[bi][0][l-1] === true) {
        cidxb[bi][0][l] = true;
        return null;
      } else {
        cidxb[bi][0][l] = null;
      }
    }
  }
  k = crkey(c,r);
  b = cidxb[bi][0][l] && cidxb[bi][0][l] !== true ? cidxb[bi][0][l].get(k) : null;
  if (b) {
    if (!t) {
      cidxb[bi][0][l].delete(k);
      if (cidxb[bi][0][l].size < 1) {
        if (l === 0 && cidxb[bi][1] === -1) {
          cidxb[bi][0][l] = true;
        } else if (l > 0) {
          if (cidxb[bi][0][l-1] === true) {
            cidxb[bi][0][l] = true;
          } else {
            cidxb[bi][0][l] = null;
          }
        }
      }
    }
    return b;
  }
  if (cidxb[bi][0][l] === true) {
    return null;
  }
  b = null;
  n = Math.pow(2, l+6);
  if (l === 0) {
    if (cidxb[bi][1] > -1) {
      l2 = cidxb[cidxb[bi][1]][0].length-1;
      if (cidxb[cidxb[bi][1]][0][l2] === true) {
        cidxb[cidxb[bi][1]][2] = -2;
        cidxb[bi][1] = -1;
        cidxb[bi][3] = null;
      } else {
        n2 = Math.pow(2, l2+6);
        if (!cidxb[bi][3]) {
          cidxb[bi][3] = new Map();
        }
        c2 = c < 0 ? Math.ceil((c + 1) / (n2 / n)) - 1 : Math.floor(c / (n2 / n));
        r2 = r < 0 ? Math.ceil((r + 1) / (n2 / n)) - 1 : Math.floor(r / (n2 / n));
        if (!cidxb[bi][3].has(k2 = crkey(c2,r2))) {
          cidxb[bi][3].set(k2, true);
          b1 = fcidxb(cidxb[bi][1],l2,c2,r2,q);
          if (b1) {
            i = 0;
            while (i < n2) {
              j = 0;
              while (j < n2) {
                c3 = c2 * n2 / n + i / n;
                r3 = r2 * n2 / n + j / n;
                if (!(f = t && q && c3 === c && r3 === r)) {
                  i2 = 0;
                  while (!f && i2 < n) {
                    j2 = 0;
                    while (!f && j2 < n) {
                      if (b1[(i+i2)*n2*4+(j+j2)*4+2]) {
                        f = true;
                      }
                      j2++;
                    }
                    i2++;
                  }
                }
                if (f) {
                  if (t) {
                    b2 = getCib(n);
                  } else {
                    b2 = new Int32Array(n*n*4+2);
                  }
                  fcidxbc2(n2,n,b1,b2,i,j);
                  if (t || c3 !== c || r3 !== r) {
                    if (!cidxb[bi][0][l]) {
                      cidxb[bi][0][l] = new Map();
                    }
                    cidxb[bi][0][l].set(crkey(c3,r3), b2);
                  }
                  if (c3 === c && r3 === r) {
                    b = b2;
                  }
                }
                j += n;
              }
              i += n;
            }
          }
        }
      }
    }
    if (t && q && !b) {
      if (!cidxb[bi][0][l]) {
        cidxb[bi][0][l] = new Map();
      }
      cidxb[bi][0][l].set(k, (b = getCib(n)));
    }
  } else {
    if (cidxb[bi][0][l-1] !== true) {
      c2 = c * 2;
      r2 = r * 2;
      b1 = fcidxb(bi,l-1,c2,r2,q);
      b2 = fcidxb(bi,l-1,c2,r2+1,q);
      b3 = fcidxb(bi,l-1,c2+1,r2+1,q);
      b4 = fcidxb(bi,l-1,c2+1,r2,q);
      if (b1 || b2 || b3 || b4) {
        if (t) {
          b = getCib(n);
        } else {
          b = new Int32Array(n*n*4+2);
        }
        if (b1) {
          fcidxbc(n/2,n,b1,b,0,0);
        }
        if (b2) {
          fcidxbc(n/2,n,b2,b,0,n/2);
        }
        if (b4) {
          fcidxbc(n/2,n,b4,b,n/2,0);
        }
        if (b3) {
          fcidxbc(n/2,n,b3,b,n/2,n/2);
        }
      }
      if (!t && b && b[1] === 0) {
        b = null;
      }
    }
    if (t && b || t && q) {
      if (!b) {
        b = getCib(n);
      }
      if (!cidxb[bi][0][l]) {
        cidxb[bi][0][l] = new Map();
      }
      cidxb[bi][0][l].set(k, b);
    } else if (!t && cidxb[bi][0][l-1] === true && !cidxb[bi][0][l]) {
      cidxb[bi][0][l] = true;
    }
  }
  return b;
}

function fcidxbc(n1, n2, s, t, c, r) {
  var i, j;
  i = 0;
  while (i < n1) {
    j = 0;
    while (j < n1) {
      t[(c+i)*n2*4+(r+j)*4+0+2] = s[i*n1*4+j*4+0+2];
      t[(c+i)*n2*4+(r+j)*4+1+2] = s[i*n1*4+j*4+1+2];
      t[(c+i)*n2*4+(r+j)*4+2+2] = s[i*n1*4+j*4+2+2];
      t[(c+i)*n2*4+(r+j)*4+3+2] = s[i*n1*4+j*4+3+2];
      j++;
    }
    i++;
  }
  t[1] += s[1];
}

function fcidxbc2(n1, n2, s, t, c, r) {
  var i, j;
  i = 0;
  while (i < n2) {
    j = 0;
    while (j < n2) {
      t[i*n2*4+j*4+2] = s[(c+i)*n1*4+(r+j)*4+2];
      if (t[i*n2*4+j*4+2]) {
        t[1]++;
        t[i*n2*4+j*4+1+2] = s[(c+i)*n1*4+(r+j)*4+1+2];
        t[i*n2*4+j*4+2+2] = s[(c+i)*n1*4+(r+j)*4+2+2];
        t[i*n2*4+j*4+3+2] = s[(c+i)*n1*4+(r+j)*4+3+2];
      }
      j++;
    }
    i++;
  }
}

function crkey(c, r) {
  return (c-maxl) * 100000000 + r-maxb;
}

function updnb(c, r, n) {
  if (n !== 0) {
    updnb0(c-1,r+1,n);
    updnb0(c,r+1,n);
    updnb0(c+1,r+1,n);
    updnb0(c+1,r,n);
    updnb0(c+1,r-1,n);
    updnb0(c,r-1,n);
    updnb0(c-1,r-1,n);
    updnb0(c-1,r,n);
  }
}

function updnb0(c, r, n) {
  var c0 = c, r0 = r;
  if (c0 < maxl) {
    c0 = maxr - maxl + c0 + 1;
  }
  if (c0 > maxr) {
    c0 = maxl + c0 - maxr - 1;
  }
  if (r0 < maxb) {
    r0 = maxt - maxb + r0 + 1;
  }
  if (r0 > maxt) {
    r0 = maxb + r0 - maxt - 1;
  }
  if (!fcidxg0(c0, r0)) {
    fcidx(c0, r0, 4, 0, 2, 2, 0, 0);
    bmemsC(cellsxl++,c0,r0);
  } else if (fcidxg1(c0, r0) !== 2) {
    fcidxs1(c0, r0, 2);
    bmemsC(cellsxl++,c0,r0);
  }
  fcidxs3(c0, r0, n + fcidxg3(c0, r0));
}

function fcidxinc() {
  cidxb[cidxbi][0][cidxb[cidxbi][0].length] = null;
  clrCib();
  cidxbx1 = maxr + 1, cidxbx2 = maxl - 1, cidxby1 = maxt + 1, cidxby2 = maxb - 1, cidxbb = null;
  cidxbc0 = -1, cidxbc1 = 0, cidxbc2 = 0;
}

function fcidxrst() {
  var i;
  i = 0;
  while (i < cidxb.length) {
    if (cidxb[i][2] === -2) {
      cidxb[cidxbi][2] = i;
      cidxb[i] = [[],cidxbi,-1,0];
      cidxbi = i;
      fcidxinc();
      return;
    }
    i++;
  }
  cidxb[cidxb.length] = [[],cidxbi,-1,0];
  cidxb[cidxbi][2] = cidxb.length - 1;
  cidxbi = cidxb.length - 1;
  fcidxinc();
}

function getCib(n) {
  var i;
  if (ciblfll === 0) {
    cibl[i = cibll++] = new Int32Array(n*n*4+2);
    cibl[i][0] = i;
  } else {
    cibl[i = ciblfl[--ciblfll]][1] = 0;
  }
  return cibl[i];
}

function freeCib(b) {
  ciblfl[ciblfll++] = b[0];
}

function clrCib() {
  cibl = [];
  cibll = 0;
  ciblfll = 0;
}

function clrcellsx(f) {
  var i, v0, v1;
  if (!f) {
    hbcksll = 0;
  }
  histq = null;
  if (!cellsxf) {
    return;
  }
  cellsxf = false;
  for (i = 0; i < cellsxl; i++) {
    bmemgC(i);
    if (fcidxg0(bmemv0, bmemv1) !== 1 && fcidxg3(bmemv0, bmemv1) === 0) {
      fcidx(bmemv0, bmemv1, 1);
    } else {
      fcidxs1(bmemv0, bmemv1, 0);
    }
  }
  cellsxl = 0;
  for (i = 0; i < cellsx2l; i++) {
    bmemgD(i);
    if (fcidxg1(bmemv0, bmemv1) === 3) {
      if (fcidxg0(bmemv0, bmemv1) !== 1 && fcidxg3(bmemv0, bmemv1) === 0) {
        fcidx(bmemv0, bmemv1, 1);
      } else {
        fcidxs1(bmemv0, bmemv1, 0);
      }
    }
  }
  cellsx2l = 0;
  if (!f) {
    for (i = 0; i < cellslen; i++) {
      bmemgA(i);
      if (bmemv3 === 1) {
        v0 = bmemv0;
        v1 = bmemv1;
        fcidx(v0,v1,3);
        fcidx(v0-1,v1+1,3);
        fcidx(v0,v1+1,3);
        fcidx(v0+1,v1+1,3);
        fcidx(v0+1,v1,3);
        fcidx(v0+1,v1-1,3);
        fcidx(v0,v1-1,3);
        fcidx(v0-1,v1-1,3);
        fcidx(v0-1,v1,3);
      }
    }
  }
}

function nextHist() {
  var x;
  histi++;
  if (histi >= histmax) {
    if (hist[histh][2] !== -1 && (hist[histh][2] !== histod || hist[histod][3] !== histh || hist[histod][1] > 0)) {
      if (hist[hist[histh][2]][6] === -1 || hist[hist[histh][2]][3] === histh) {
        histh = hist[histh][2];
        histi = 0;
      } else {
        histh = hist[histh][2];
        if (hist[histh][6] > 0) {
          hist[histh][6]--;
        } else {
          hist[histh][6] = hist[histh][4].length - 1;
        }
        histi = hist[histh][4][hist[histh][6]];
      }
    } else if (histhm > hist.length - 1) {
      hist[histh][2] = hist.length;
      hist[hist.length] = [[],0,-1,histh,[],[],-1,-1,[]];
      histh = hist.length - 1;
      histi = 0;
    } else {
      hist[histh][2] = histod;
      if (hist[histod][6] === -1 || hist[histod][3] === histh) {
        hist[histod][3] = histh;
      } else {
        if (hist[histod][6] > 0) {
          hist[histod][6]--;
        } else {
          hist[histod][6] = hist[histod][4].length - 1;
        }
        hist[histod][8][hist[histod][6]] = histh;
      }
      histh = histod;
      histi = hist[histh][1];
    }
  } else {
    while (hist[histh][6] !== -1 && histi === hist[histh][4][hist[histh][6]]) {
      x = histh;
      histh = hist[histh][5][hist[histh][6]];
      if (hist[x][6] < hist[x][4].length - 1) {
        hist[x][6]++;
      } else {
        hist[x][6] = 0;
      }
      histi = 0;
    }
  }
  if (histh === histod && histi === hist[histh][1]) {
    if (histhm > hist.length - 1) {
      hist[histh][4].push(histi);
      hist[histh][5].push(hist.length);
      hist[histh][8].push(-1);
      hist[histh][6] = 0;
      if (hist[histh][7] === -1) {
        hist[histh][7] = 0;
      }
      hist[hist.length] = [[],0,-1,histh,[],[],-1,-1,[]];
      histh = hist.length - 1;
      histi = 0;
    } else {
      histgp -= 1 + hist[histh][0][histi][2];
      if (hist[histh][0][histi][11][0] > 0) {
        histgp -= hist[histh][0][histi][11][1] - 1;
      }
      hist[histh][1]++;
      if (hist[histh][1] >= histmax) {
        hist[histh][1] = 0;
        histod = hist[histh][2];
        if (hist[histod][6] !== -1 && hist[histod][3] !== hist[histh][2]) {
          if (hist[histod][7] > 0) {
            hist[histod][7]--;
          } else {
            hist[histod][7] = hist[histod][4].length - 1;
          }
        }
        hist[histh][2] = -1;
      } else {
        while (hist[histod][7] !== -1 && hist[histod][1] === hist[histod][4][hist[histod][7]]) {
          x = histod;
          histod = hist[histod][5][hist[histod][7]];
          if (hist[x][7] < hist[x][4].length - 1) {
            hist[x][7]++;
          } else {
            hist[x][7] = 0;
          }
        }
      }
    }
  }
}

function rclHist0_1() {
  histrcll1 = 0;
}
function rclHist0_2() {
  histrcll2 = 0;
}

function rclHist1_1() {
  for (var i = histrcll1 - 1; i >= 0; i--) {
    hist[histrcl1[i][0]][6] = histrcl1[i][1];
  }
}
function rclHist1_2() {
  for (var i = histrcll2 - 1; i >= 0; i--) {
    hist[histrcl2[i][0]][6] = histrcl2[i][1];
  }
}

function prevHist(h, i, f) {
  var h2, h3, i2, x;
  h2 = h;
  i2 = i;
  if (hist[h2][6] !== -1 && i2 === hist[h2][4][hist[h2][6]]) {
    h3 = hist[h2][8][hist[h2][6]];
    if (f) {
      if (f === 2) {
        if (histrcll1 >= histrcl1.length) {
          histrcl1[histrcll1++] = [h2,hist[h2][6]];
        } else {
          histrcl1[histrcll1][0] = h2;
          histrcl1[histrcll1][1] = hist[h2][6];
          histrcll1++;
        }
      } else if (f === 3) {
        if (histrcll2 >= histrcl2.length) {
          histrcl2[histrcll2++] = [h2,hist[h2][6]];
        } else {
          histrcl2[histrcll2][0] = h2;
          histrcl2[histrcll2][1] = hist[h2][6];
          histrcll2++;
        }
      }
      if (hist[h2][6] < hist[h2][4].length - 1) {
        hist[h2][6]++;
      } else {
        hist[h2][6] = 0;
      }
    }
    h2 = h3;
    i2 = histmax - 1;
  } else if (i2 === 0) {
    if ((h3 = hist[h2][3]) === -1) {
      i2 = histmax - 1;
    } else if (hist[h3][6] === -1 || hist[h3][2] === h2) {
      h2 = h3;
      i2 = histmax - 1;
    } else {
      do {
        if (hist[h3][6] > 0) {
          x = hist[h3][6] - 1;
        } else {
          x = hist[h3][4].length - 1;
        }
        if (f) {
          if (f === 2) {
            if (histrcll1 >= histrcl1.length) {
              histrcl1[histrcll1++] = [h3,hist[h3][6]];
            } else {
              histrcl1[histrcll1][0] = h3;
              histrcl1[histrcll1][1] = hist[h3][6];
              histrcll1++;
            }
          } else if (f === 3) {
            if (histrcll2 >= histrcl2.length) {
              histrcl2[histrcll2++] = [h3,hist[h3][6]];
            } else {
              histrcl2[histrcll2][0] = h3;
              histrcl2[histrcll2][1] = hist[h3][6];
              histrcll2++;
            }
          }
          hist[h3][6] = x;
        }
        h2 = h3;
        i2 = hist[h3][4][x];
      } while (i2 === 0 && (h3 = hist[h2][3]) !== -1 && hist[h3][6] !== -1 && hist[h3][2] !== h2);
      if (i2 === 0) {
        h2 = h3;
        i2 = histmax - 1;
      } else {
        i2--;
      }
    }
  } else {
    i2--;
  }
  return [h2,i2];
}

function rlHist(h, i, p, qx) {
  var q0, q1, q2, pp, m;
  q0 = null;
  q1 = qx ? qx : prevHist(h, i, 3);
  q2 = prevHist(q1[0], q1[1], 3);
  pp = hist[q1[0]][0][q1[1]][11][0];
  m = p%pp;
  if (m > 0) {
    m = pp - m;
  }
  while (m >= 0) {
    if (hist[q2[0]][0][q2[1]][11][0] > 0) {
      q1 = rlHist(0, 0, hist[q2[0]][0][q2[1]][11][1], q2);
      q0 = q1[2];
    } else {
      q0 = q1;
      q1 = q2;
    }
    q2 = prevHist(q1[0], q1[1], 3);
    m--;
  }
  return [q1[0],q1[1],q0];
}

function histinc(f) {
  if (histhm < 1000000) {
    if (f === 1) {
      histhm++;
    } else {
      histhm += histhm + 1;
    }
  }
}

function histrst() {
  var hi, a, x, i;
  hi = hist[histh][0][histi];
  x = hi[3][1];
  a = null;
  for (i = 0; i < hi[0].length; i++) {
    if (hi[0][i][3] !== 1) {
      a = [];
      break;
    }
  }
  if (a) {
    for (i = 0; i < hi[0].length; i++) {
      if (hi[0][i][3] === 1) {
        a.push(hi[0][i]);
      }
    }
  } else {
    a = hi[0];
  }
  capcds2 = ""+(histgp+histgn+1);
  clrvars0();
  hist[histh][0][histi][0] = a;
  hist[histh][0][histi][3][1] = x;
  histhm = 0;
  clrcellsx();
  histcd = performance.now();
  capcd2 = performance.now();
}

function rmvCell(i) {
  var k;
  bmemgA(i);
  k = crkey(bmemv0, bmemv1);
  if (rmvcellsm.has(k)) {
    cellsfs[cellsfsl++] = i;
    bmemv3 = 0 - cellsfsl + 1;
    bmemv4 = 0;
  } else {
    rmvcellsm.set(k, true);
    rmvcellsf = true;
    if (bmemv3 === 1 && bmemv4 !== -2) {
      rmvcellsn++;
    }
    bmemv3 = 0;
    bmemv4 = -2;
  }
  bmemsA(i,bmemv0,bmemv1,bmemv2,bmemv3,bmemv4);
}

function addCell(c, r, f) {
  var i;
  while (cellsfsl > 0 && cellsfs[cellsfsl-1] === -1) {
    cellsfsl--;
  }
  if (cellsfsl === 0) {
    bmemsA(cellslen++,c,r,gennum,f?1:0,-1);
    return cellslen-1;
  } else {
    bmemsA((i=cellsfs[--cellsfsl]),c,r,gennum,f?1:0,-1);
    return i;
  }
}

function dspmsg(m, d, f) {
  var i, j, tm;
  if (!dmsgs || !f && m[0] == msgl1 && m[1] == msgl2 && m[2] == msgl3) {
    drawMsgsStm(m[0], m[2]);
    return;
  }
  msgl1 = m[0];
  msgl2 = m[1];
  msgl3 = m[2];
  i = 0;
  j = 0;
  while (i < msgll) {
    while (i < msgll && msgl[i][0]) {
      i++;
    }
    if (i < msgll) {
      if (j < i) {
        j = i + 1;
      }
      while (j < msgll && !msgl[j][0]) {
        j++;
      }
      if (j < msgll) {
        msgl[i][0] = msgl[j][0];
        msgl[i][1] = msgl[j][1];
        msgl[i][2] = msgl[j][2];
        msgl[i][3] = msgl[j][3];
        msgl[i][4] = msgl[j][4];
        msgl[j][0] = null;
        msgl[j][4] = null;
      }
    }
    while (msgll > 0 && !msgl[msgll-1][0]) {
      msgll--;
    }
  }
  tm = [];
  for (i = 0; i < m.length; i++) {
    tm.push(ctx2.measureText(m[i]));
  }
  if (msgll < msgl.length) {
    msgl[msgll][0] = m;
    msgl[msgll][1] = d?d:3500;
    msgl[msgll][2] = performance.now();
    msgl[msgll][3] = 0;
    msgl[msgll][4] = tm;
    msgll++;
  } else {
    msgl[msgll++] = [m,d?d:3500,performance.now(),0,tm];
  }
}

function hbckhac() {
  var i, k, h, hb = [];
  if (cellsn === 0) {
    return 0;
  }
  for (i = 0; i < 256; i++) {
    hb[i] = 0;
  }
  for (i = 0; i < cellslen; i++) {
    bmemgA(i);
    if (bmemv3 === 1) {
      k = crkey(bmemv0-cellsl,bmemv1-cellsb);
      h = 0;
      h = ((h<<5)-h) + (k & 0xFF);
      h = h & h;
      h = ((h<<5)-h) + ((k>>>8) & 0xFF);
      h = h & h;
      h = ((h<<5)-h) + ((k>>>16) & 0xFF);
      h = h & h;
      h = ((h<<5)-h) + ((k>>>24) & 0xFF);
      h = h & h;
      hb[h & 0xFF] += ((h>>>24) & 0xF);
      hb[(h>>>8) & 0xFF] += ((h>>>16) & 0xF0);
      hb[(h>>>16) & 0xFF] += ((h>>>8) & 0xF);
      hb[(h>>>24) & 0xFF] += (h & 0xF0);
    }
  }
  h = 0;
  for (i = 0; i < hb.length; i++) {
    k = hb[i];
    h = ((h<<5)-h) + (k & 0xFF);
    h = h & h;
    h = ((2<<5)-h) + ((k>>>8) & 0xFF);
    h = h & h;
    h = ((h<<5)-h) + ((k>>>16) & 0xFF);
    h = h & h;
    h = ((h<<5)-h) + ((k>>>24) & 0xFF);
    h = h & h;
  }
  return h;
}

function hbckcheck() {
  var p, i, h, x, n, hi, q, j, c, r, g, z, k, p0, q0, q1, pp, dx, dy, pn, px;
  if (!hbcksl || gennum < 3 || hbcksll < 3 || hbcksm && !hbcksm.has(hbcksl[hbckslf])) {
    return;
  }
  p = 0;
  h = hbcksl[hbckslf];
  i = hbckslf;
  while (p < 2 || p < gennum && p < hbcksll && h !== hbcksl[i]) {
    p++;
    i++;
    if (i >= hbcksl.length) {
      i = 0;
    }
  }
  if (p < gennum && p < hbcksll) {
    x = new Map();
    for (i = 0; i < cellslen; i++) {
      bmemgA(i);
      if (bmemv3 === 1) {
        x.set(crkey(bmemv0,bmemv1), true);
      }
    }
    p0 = 0;
    n = cellsn;
    q = [histh,histi];
    rclHist0_1();
    q0 = prevHist(q[0], q[1], 2);
    pn = 0;
    px = hist[histh][0][histi][14];
    for (j = 1; j <= p; j++) {
      if (p0 > 0) {
        rclHist0_2();
        q1 = rlHist(q[0], q[1], p0--);
        rclHist1_2();
        hi = hist[q1[0]][0][q1[1]];
      } else {
        q = q0;
        q0 = prevHist(q[0], q[1], 2);
        hi = hist[q[0]][0][q[1]];
        if ((pp = hist[q0[0]][0][q0[1]][11][0]) > 0) {
          p0 = hist[q0[0]][0][q0[1]][11][1];
          dx = hist[q0[0]][0][q0[1]][11][2];
          dy = hist[q0[0]][0][q0[1]][11][3];
        }
      }
      pn += px - hi[14];
      px = hi[14];
      i = hi[0].length - 1;
      while (i >= 0) {
        if (hi[0][i][3] !== 1) {
          c = hi[0][i][0] + (p0===0||pp===0?0:Math.ceil(p0/pp)*dx);
          r = hi[0][i][1] + (p0===0||pp===0?0:Math.ceil(p0/pp)*dy);
          if (c < maxl) {
            c = maxr - maxl + c + 1;
          }
          if (c > maxr) {
            c = maxl + c - maxr - 1;
          }
          if (r < maxb) {
            r = maxt - maxb + r + 1;
          }
          if (r > maxt) {
            r = maxb + r - maxt - 1;
          }
          g = hi[0][i][2];
          k = crkey(c,r);
          z = x.get(k);
          if (g >= 0) {
            if (!z) {
              x.set(k, true);
              n++;
            }
          } else if (g === -1) {
            if (z) {
              x.delete(k);
              n--;
            }
          }
        }
        i--;
      }
    }
    rclHist1_1();
    if (n === cellsn) {
      dx = cellsl - hi[9];
      dy = cellsb - hi[8];
      i = 0;
      while (i < cellslen) {
        bmemgA(i);
        if (bmemv3 === 1 && !x.get(crkey(bmemv0-dx,bmemv1-dy))) {
          break;
        }
        i++;
      }
      if (i < cellslen) {
        n = -1;
      }
    } else {
      n = -1;
    }
    if (n === -1) {
      drawMsgsStm("\\  \\  \\  \\  \\", "/  /  /  /  /"); // false positive
      msgf1 = 911;
    } else {
      clrcellsx();
      hist[histh][0][histi][11][0] = p;
      hist[histh][0][histi][11][1] = 0;
      hist[histh][0][histi][11][2] = dx;
      hist[histh][0][histi][11][3] = dy;
      hist[histh][0][histi][16] = pn;
      if (dx === 0 && dy === 0) {
        dspmsg(["Oscillator!   ","\u22C5      \u22C5","p"+p+" "], 4500, true);
        msgf1 = 21;
      } else {
        dspmsg(["Spaceship!        ","\u22C5      \u22C5",spcshtxt(p,dx,dy)+"    "], 4500, true);
        msgf1 = 22;
      }
      histp = 1;
      if (run && stops) {
        swrun();
        stopscd = performance.now();
      }
    }
  }
}

function spcshtxt(p, x, y) {
  var k, x0, y0, p0, n;
  x0 = Math.abs(x);
  y0 = Math.abs(y);
  k = Math.max(x0, y0);
  p0 = p;
  n = Math.min(k, p0);
  while (n > 1) {
    if (k / n === Math.floor(k / n) && p0 / n === Math.floor(p0 / n)) {
      break;
    }
    n--;
  }
  return ((k/n)>1?k/n:"")+"c/"+(p0/n)+" p"+p0+(x===0?"":" "+(x<0?"\u21E0":"\u21E2")+x0)+(y===0?"":(x===0?" ":"")+(y<0?"\u21E3":"\u21E1")+y0);
}

function swstmsg(s1, s2) {
  var i;
  if (!s1 && !s2) {
    s1 = "Y \u22C5 a \u22C5 g \u22C5 o \u22C5 l \u22C5 s  \u22C5";
    if (dstmsgje) {
      s2 = "";
      for (i = 0; i < 7; i++) {
        if (Math.random() < 0.33) {
          s2 += "\u22C5  ";
        } else {
          s2 += "   ";
        }
      }
    } else {
      dstmsgje = false;
      s2 = "\u22C5  \u22C5  \u22C5  \u22C5  \u22C5  \u22C5  \u22C5  \u22C5";
    }
    s2 += "  \u22C5";
  }
  stmsgn1 = s1;
  stmsgn2 = s2;
  stmsgntm1 = null;
  stmsgntm2 = null;
  if (stmsgcd2) {
    stmsgo1 = s1;
    stmsgo2 = s2;
    stmsgotm1 = null;
    stmsgotm2 = null;
  }
  if (!stmsgcd && !stmsgcd2) {
    stmsgcd = performance.now();
    stmsgcd2 = null;
  }
}

function updc() {
  var a, b, q;
  a = 0;
  b = hupdc > 0 ? 1 : 0;
  if (histp > 0) {
    q = prevHist(histh, histi);
  }
  if (histp === 0 || hist[q[0]][0][q[1]][11][0] === 0 || histp === hist[q[0]][0][q[1]][11][1]) {
    a += hist[histh][0][histi][3][0] + (cruleb !== histcr[0] || crules !== histcr[1] ? 1:0);
    b += hist[histh][0][histi][3][1];
  }
  return [a,b];
}

function bmemxA(i) {
  var x;
  if (!bmemmA) {
    bmemmA = new Map();
    bmembA = null;
    bmembiA = -1;
    bmemnA = Math.trunc(60000/5);
  }
  if ((x = Math.trunc(i/bmemnA)) !== bmembiA || !bmembA) {
    if (!(bmembA = bmemmA.get(x))) {
      bmembA = new Int32Array(60000);
      bmemmA.set(x, bmembA);
    }
    bmembiA = x;
  }
}
function bmemsA(i, v0, v1, v2, v3, v4) {
  bmemxA(i);
  bmembA[(i-bmembiA*bmemnA)*5+0] = v0;
  bmembA[(i-bmembiA*bmemnA)*5+1] = v1;
  bmembA[(i-bmembiA*bmemnA)*5+2] = v2;
  bmembA[(i-bmembiA*bmemnA)*5+3] = v3;
  bmembA[(i-bmembiA*bmemnA)*5+4] = v4;
}
function bmemgA(i) {
  bmemxA(i);
  bmemv0 = bmembA[(i-bmembiA*bmemnA)*5+0];
  bmemv1 = bmembA[(i-bmembiA*bmemnA)*5+1];
  bmemv2 = bmembA[(i-bmembiA*bmemnA)*5+2];
  bmemv3 = bmembA[(i-bmembiA*bmemnA)*5+3];
  bmemv4 = bmembA[(i-bmembiA*bmemnA)*5+4];
}
function bmemxB(i) {
  var x;
  if (!bmemmB) {
    bmemmB = new Map();
    bmembB = null;
    bmembiB = -1;
    bmemnB = Math.trunc(60000/4);
  }
  if ((x = Math.trunc(i/bmemnB)) !== bmembiB || !bmembB) {
    if (!(bmembB = bmemmB.get(x))) {
      bmembB = new Int32Array(60000);
      bmemmB.set(x, bmembB);
    }
    bmembiB = x;
  }
}
function bmemsB(i, v0, v1, v2, v3) {
  bmemxB(i);
  bmembB[(i-bmembiB*bmemnB)*4+0] = v0;
  bmembB[(i-bmembiB*bmemnB)*4+1] = v1;
  bmembB[(i-bmembiB*bmemnB)*4+2] = v2;
  bmembB[(i-bmembiB*bmemnB)*4+3] = v3;
}
function bmemgB(i) {
  bmemxB(i);
  bmemv0 = bmembB[(i-bmembiB*bmemnB)*4+0];
  bmemv1 = bmembB[(i-bmembiB*bmemnB)*4+1];
  bmemv2 = bmembB[(i-bmembiB*bmemnB)*4+2];
  bmemv3 = bmembB[(i-bmembiB*bmemnB)*4+3];
}
function bmemxC(i) {
  var x;
  if (!bmemmC) {
    bmemmC = new Map();
    bmembC = null;
    bmembiC = -1;
    bmemnC = Math.trunc(60000/2);
  }
  if ((x = Math.trunc(i/bmemnC)) !== bmembiC || !bmembC) {
    if (!(bmembC = bmemmC.get(x))) {
      bmembC = new Int32Array(60000);
      bmemmC.set(x, bmembC);
    }
    bmembiC = x;
  }
}
function bmemsC(i, v0, v1) {
  bmemxC(i);
  bmembC[(i-bmembiC*bmemnC)*2+0] = v0;
  bmembC[(i-bmembiC*bmemnC)*2+1] = v1;
}
function bmemgC(i) {
  bmemxC(i);
  bmemv0 = bmembC[(i-bmembiC*bmemnC)*2+0];
  bmemv1 = bmembC[(i-bmembiC*bmemnC)*2+1];
}
function bmemxD(i) {
  var x;
  if (!bmemmD) {
    bmemmD = new Map();
    bmembD = null;
    bmembiD = -1;
    bmemnD = Math.trunc(60000/2);
  }
  if ((x = Math.trunc(i/bmemnD)) !== bmembiD || !bmembD) {
    if (!(bmembD = bmemmD.get(x))) {
      bmembD = new Int32Array(60000);
      bmemmD.set(x, bmembD);
    }
    bmembiD = x;
  }
}
function bmemsD(i, v0, v1) {
  bmemxD(i);
  bmembD[(i-bmembiD*bmemnD)*2+0] = v0;
  bmembD[(i-bmembiD*bmemnD)*2+1] = v1;
}
function bmemgD(i) {
  bmemxD(i);
  bmemv0 = bmembD[(i-bmembiD*bmemnD)*2+0];
  bmemv1 = bmembD[(i-bmembiD*bmemnD)*2+1];
}
function bmemxE(i) {
  var x;
  if (!bmemmE) {
    bmemmE = new Map();
    bmembE = null;
    bmembiE = -1;
    bmemnE = Math.trunc(60000/3);
  }
  if ((x = Math.trunc(i/bmemnE)) !== bmembiE || !bmembE) {
    if (!(bmembE = bmemmE.get(x))) {
      bmembE = new Int32Array(60000);
      bmemmE.set(x, bmembE);
    }
    bmembiE = x;
  }
}
function bmemsE(i, v0, v1, v2) {
  bmemxE(i);
  bmembE[(i-bmembiE*bmemnE)*3+0] = v0;
  bmembE[(i-bmembiE*bmemnE)*3+1] = v1;
  bmembE[(i-bmembiE*bmemnE)*3+2] = v2;
}
function bmemgE(i) {
  bmemxE(i);
  bmemv0 = bmembE[(i-bmembiE*bmemnE)*3+0];
  bmemv1 = bmembE[(i-bmembiE*bmemnE)*3+1];
  bmemv2 = bmembE[(i-bmembiE*bmemnE)*3+2];
}
