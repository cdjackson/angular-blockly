// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">ระบบการเขียนโปรแกรมด้วยรูปภาพ</span><span id="blocklyMessage">Blockly</span><span id="codeTooltip">ดูโค้ด JavaScript ที่ถูกสร้างขึ้น</span><span id="linkTooltip">บันทึกและสร้างลิงก์มายังบล็อกเหล่านี้</span><span id="runTooltip">เรียกใช้โปรแกรมตามที่กำหนดไว้ด้วยบล็อกที่อยู่ในพื้นที่ทำงาน</span><span id="runProgram">เรียกใช้โปรแกรม</span><span id="resetProgram">เริ่มใหม่</span><span id="dialogOk">ตกลง</span><span id="dialogCancel">ยกเลิก</span><span id="catLogic">ตรรกะ</span><span id="catLoops">การวนซ้ำ</span><span id="catMath">คณิตศาสตร์</span><span id="catText">ข้อความ</span><span id="catLists">รายการ</span><span id="catColour">สี</span><span id="catVariables">ตัวแปร</span><span id="catProcedures">ฟังก์ชัน</span><span id="httpRequestError">มีปัญหาเกี่ยวกับการร้องขอ</span><span id="linkAlert">แบ่งปันบล็อกของคุณด้วยลิงก์นี้:\n\n%1</span><span id="hashError">เสียใจด้วย \'%1\' ไม่ตรงกับโปรแกรมใดๆ ที่เคยบันทึกเอาไว้เลย</span><span id="xmlError">ไม่สามารถโหลดไฟล์ที่บันทึกไว้ของคุณได้ บางทีมันอาจจะถูกสร้างขึ้นด้วย Blockly รุ่นอื่นที่แตกต่างกัน?</span><span id="listVariable">รายการ</span><span id="textVariable">ข้อความ</span></div>';
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
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyApps.hideDialog(true)">ตกลง</button></div>';
};

;
// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

if (typeof planepage == 'undefined') { var planepage = {}; }


planepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return apps.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Plane_rows">%1 แถว</span><span id="Plane_getRows">จำนวนแถว (%1)</span><span id="Plane_rows1">ชั้นเฟิร์สคลาส %1 แถว</span><span id="Plane_getRows1">จำนวนแถวชั้นเฟิร์สคลาส (%1)</span><span id="Plane_rows2">ชั้นธุรกิจ %1 แถว</span><span id="Plane_getRows2">จำนวนแถวชั้นธุรกิจ (%1)</span><span id="Plane_seats">คำนวณได้ทั้งหมด %1 ที่นั่ง</span><span id="Plane_placeholder">?</span><span id="Plane_setSeats">จำนวนที่นั่ง =</span></div>';
};


planepage.start = function(opt_data, opt_ignored, opt_ijData) {
  var output = planepage.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly</a> : ระบบคำนวณที่นั่งบนเครื่องบิน</span> &nbsp; ';
  var iLimit130 = opt_ijData.maxLevel + 1;
  for (var i130 = 1; i130 < iLimit130; i130++) {
    output += ' ' + ((i130 == opt_ijData.level) ? '<span class="tab" id="selected">' + soy.$$escapeHtml(i130) + '</span>' : (i130 < opt_ijData.level) ? '<a class="tab previous" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a>' : '<a class="tab" href="?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&level=' + soy.$$escapeHtml(i130) + '">' + soy.$$escapeHtml(i130) + '</a>');
  }
  output += '</h1></td><td class="farSide"><select id="languageMenu"></select></td></tr></table><script type="text/javascript" src="../slider.js"><\/script><svg id="plane" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="600" height="256" viewBox="0 142 600 256"><defs><g id="row1st"><rect class="seat1st" width="10" height="10" x="75" y="245" /><rect class="seat1st" width="10" height="10" x="75" y="256" /><rect class="seat1st" width="10" height="10" x="75" y="274" /><rect class="seat1st" width="10" height="10" x="75" y="285" /></g><g id="row2nd"><rect class="seat2nd" width="10" height="8" x="75" y="245" /><rect class="seat2nd" width="10" height="8" x="75" y="253" /><rect class="seat2nd" width="10" height="8" x="75" y="271" /><rect class="seat2nd" width="10" height="8" x="75" y="279" /><rect class="seat2nd" width="10" height="8" x="75" y="287" /></g><linearGradient id="grad1" x1="0%" y1="100%" x2="0%" y2="0%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient><linearGradient id="grad2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#fff;stop-opacity:0" /><stop offset="100%" style="stop-color:#fff;stop-opacity:1" /></linearGradient></defs><path d="M 404,1 373,15 230,244 230,297 373,524 404,542 330,351 330,189 z" id="wing" /><path d="m 577,269 22,-93 -27,6 -44,88 44,88 27,6 z" id="tail" /><path d="m 483,296 h -407 c -38,0 -75,-13 -75,-26 c 0,-13 38,-26 75,-26 h 407 l 94,24 z" id="fuselage" /><rect width="610" height="100" x="-5" y="142" fill="url(#grad1)" /><rect width="610" height="100" x="-5" y="298" fill="url(#grad2)" /><text id="row1stText" x="55" y="380"></text><text id="row2ndText" x="350" y="380"></text><text x="55" y="210"><tspan id="seatText"></tspan><tspan id="seatYes" style="fill: #0c0;" dy="10">&#x2713;</tspan><tspan id="seatNo" style="fill: #f00;" dy="10">&#x2717;</tspan></text>' + ((opt_ijData.level > 1) ? '<rect id="crew_right" class="crew" width="10" height="10" x="35" y="256" /><rect id="crew_left" class="crew" width="10" height="10" x="35" y="274" />' : '') + '</svg><p>';
  switch (opt_ijData.level) {
    case 1:
      output += 'ภายในเครื่องบินประกอบไปด้วยแถวของที่นั่งผู้โดยสาร ในแต่ละแถวจะมี 4 ที่นั่ง';
      break;
    case 2:
      output += 'ภายในเครื่องบินจะมีที่นั่งนักบินอยู่ 2 ที่ (สำหรับนักบิน และผู้ช่วยนักบิน) และมีแถวที่นั่งผู้โดยสารอยู่จำนวนหนึ่ง ในแต่ละแถวจะมี 4 ที่นั่ง';
      break;
    case 3:
      output += 'ภายในเครื่องบินจะมีที่นั่งนักบินอยู่ 2 ที่ (สำหรับนักบิน และผู้ช่วยนักบิน) และจะมีแถวที่นั่งสำหรับผู้โดยสาร "ชั้นเฟิร์สคลาส" และ "ชั้นธุรกิจ" อยู่จำนวนหนึ่ง โดยในชั้นเฟิร์สคลาสจะมีแถวละ 4 ที่นั่ง ส่วนในชั้นธุรกิจจะมีแถวละ 5 ที่นั่ง';
      break;
  }
  output += '</p><p>สร้างสูตรคำนวณ (ด้านล่าง) เพื่อคำนวณหาจำนวนที่นั่งทั้งหมดบนเครื่องบิน ตามจำนวนแถวที่เปลี่ยนไป (ด้านบน)</p><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../blocks_compressed.js"><\/script><script type="text/javascript" src="../../javascript_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script>' + planepage.toolbox(null, null, opt_ijData) + '<div id="blockly"></div>';
  return output;
};


planepage.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none"><block type="math_number"></block><block type="math_arithmetic"></block><block type="math_arithmetic"><field name="OP">MULTIPLY</field></block>' + ((opt_ijData.level <= 2) ? '<block type="plane_get_rows"></block>' : '<block type="plane_get_rows1st"></block><block type="plane_get_rows2nd"></block>') + '</xml>';
};
