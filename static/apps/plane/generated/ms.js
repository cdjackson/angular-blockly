// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">persekitaran pengaturcaraan visual</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">Lihat kod JavaScript yang dihasilkan.</span><span id="linkTooltip">Simpan dan pautkan kepada blok.</span><span id="runTooltip">Jalankan aturcara yang ditetapkan oleh blok-blok di dalam ruang kerja.</span><span id="runProgram">Jalankan Program</span><span id="resetProgram">Reset</span><span id="dialogOk">OK</span><span id="dialogCancel">Batalkan</span><span id="catLogic">Logik</span><span id="catLoops">Gelung</span><span id="catMath">Matematik</span><span id="catText">Teks</span><span id="catLists">Senarai</span><span id="catColour">Warna</span><span id="catVariables">Pemboleh ubah</span><span id="catProcedures">Fungsi</span><span id="httpRequestError">Permintaan itu terdapat masalah.</span><span id="linkAlert">Kongsikan blok-blok anda dengan pautan ini:\n\n%1</span><span id="hashError">Maaf, \'%1\' tidak berpadanan dengan sebarang aturcara yang disimpan.</span><span id="xmlError">Fail simpanan anda tidak dapat dimuatkan. Jangan-jangan ia dicipta dengan versi Blockly yang berlainan?</span><span id="listVariable">senarai</span><span id="textVariable">teks</span></div>';
};


apps.dialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div>';
};


apps.codeDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogCode" class="dialogHiddenContent"><pre id="containerCode"></pre>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.storageDialog = function(opt_data, opt_ignored, opt_ijData) {
  return '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


apps.ok = function(opt_data, opt_ignored, opt_ijData) {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">OK</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Plane_rows">Baris: %1</span><span id="Plane_getRows">baris (%1)</span><span id="Plane_rows1">Baris kelas pertama: %1</span><span id="Plane_getRows1">baris kelas pertama (%1)</span><span id="Plane_rows2">Baris kelas ke-2: %1</span><span id="Plane_getRows2">baris kelas ke-2 (%1)</span><span id="Plane_seats">Tempat duduk: %1</span><span id="Plane_placeholder">?</span><span id="Plane_setSeats">tempat duduk =</span></div>';
};


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly</a> : Pengira Tempat Duduk Kapal Terbang</span> &nbsp; ';
  var iLimit130 = opt_ijData.maxLevel + 1;
  for (var i130 = 1; i130 < iLimit130; i130++) {
    output += ' ' + ((i130 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i130) + '</span>' : (i130 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><script type="text/javascript" src="../slider.js"><\/script><svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="600" height="256" viewBox="0 142 600 256"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="245" /><rect class="seat1st" width="10" height="10" x="75" y="256" /><rect class="seat1st" width="10" height="10" x="75" y="274" /><rect class="seat1st" width="10" height="10" x="75" y="285" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="245" /><rect class="seat2nd" width="10" height="8" x="75" y="253" /><rect class="seat2nd" width="10" height="8" x="75" y="271" /><rect class="seat2nd" width="10" height="8" x="75" y="279" /><rect class="seat2nd" width="10" height="8" x="75" y="287" /></g><linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient></defs><path d="M 404,1 373,15 230,244 230,297 373,524 404,542 330,351 330,189 z" id="wing" /><path d="m 577,269 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 483,296 h -407 c -38,0 -75,-13 -75,-26 c 0,-13 38,-26 75,-26 h 407 l 94,24 z" id="fuselage" /><rect width="610" height="100" x="-5" y="142" fill="url(#grad1)" /><rect width="610" height="100" x="-5" y="298" fill="url(#grad2)" /><text id="row1stText" x="55" y="380"></text><text id="row2ndText" x="350" y="380"></text><text x="55" y="210"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="10">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="10">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="256" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="274" />' : '') + '</svg><p>';
  switch (opt_ijData.level) {
    case 1:
      output += 'Sebuah kapal terbang mempunyai sebilangan baris tempat duduk penumpang. Setiap baris mengandungi empat tempat duduk.';
      break;
    case 2:
      output += 'Sebuah kapal terbnag mempunyai tempat duduk di kokpit (untuk juruterbang dan pembantunya) dan sebilangan baris tempat duduk penumpang. Setiap baris mengandungi empat tempat duduk.';
      break;
    case 3:
      output += 'Sebuah kapal terbnag mempunyai tempat duduk di kokpit (untuk juruterbang dan pembantunya) dan sebilangan baris tempat duduk penumpang kelas pertama dan kelas kedua. Setiap baris kelas pertama mengandungi empat tempat duduk. Setiap baris kelas pertama mengandungi lima tempat duduk.';
      break;
  }
  output += '</p><p>Wujudkan formula (di bawah) yang mengira jumlah tempat duduk di dalam kapal terbang sedangkan baris-barisnya diubah (di atas).</p><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
