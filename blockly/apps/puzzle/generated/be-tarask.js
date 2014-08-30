// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

if (typeof apps == 'undefined') { var apps = {}; }


apps.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="subtitle">Асяродзьдзе віртуальнага праграмаваньня</span><span id="blocklyMessage">Blockly (Блоклі)</span><span id="codeTooltip">Глядзі згенераваны код JavaScript.</span><span id="linkTooltip">Захаваць і зьвязаць з блёкамі.</span><span id="runTooltip">Запусьціце праграму, вызначаную блёкамі ў працоўнай вобласьці.</span><span id="runProgram">Запусьціць праграму</span><span id="resetProgram">Скасаваць</span><span id="dialogOk">OK</span><span id="dialogCancel">Скасаваць</span><span id="catLogic">Лёгіка</span><span id="catLoops">Петлі</span><span id="catMath">Матэматычныя формулы</span><span id="catText">Тэкст</span><span id="catLists">Сьпісы</span><span id="catColour">Колер</span><span id="catVariables">Зьменныя</span><span id="catProcedures">Функцыі</span><span id="httpRequestError">Узьнікла праблема з запытам.</span><span id="linkAlert">Падзяліцца Вашым блёкам праз гэтую спасылку:\n\n%1</span><span id="hashError">Прабачце, \'%1\' не адпавядае ніводнай захаванай праграме.</span><span id="xmlError">Не атрымалася загрузіць захаваны файл. Магчыма, ён быў створаны з іншай вэрсіяй Блёклі?</span><span id="listVariable">сьпіс</span><span id="textVariable">тэкст</span></div>';
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

if (typeof puzzlepage == 'undefined') { var puzzlepage = {}; }


puzzlepage.messages = function(opt_data, opt_ignored, opt_ijData) {
  return '<div style="display: none"><span id="Puzzle_country1">Аўстралія</span><span id="Puzzle_country1Flag">flag_au.png</span><span id="Puzzle_country1FlagHeight">50</span><span id="Puzzle_country1FlagWidth">100</span><span id="Puzzle_country1Language">ангельская</span><span id="Puzzle_country1City1">Мэльбурн</span><span id="Puzzle_country1City2">Сыднэй</span><span id="Puzzle_country1HelpUrl">https://be-x-old.wikipedia.org/wiki/Аўстралія</span><span id="Puzzle_country2">Нямеччына</span><span id="Puzzle_country2Flag">flag_de.png</span><span id="Puzzle_country2FlagHeight">60</span><span id="Puzzle_country2FlagWidth">100</span><span id="Puzzle_country2Language">нямецкая</span><span id="Puzzle_country2City1">Бэрлін</span><span id="Puzzle_country2City2">Мюнхэн</span><span id="Puzzle_country2HelpUrl">https://be-x-old.wikipedia.org/wiki/Нямеччына</span><span id="Puzzle_country3">Кітай</span><span id="Puzzle_country3Flag">flag_cn.png</span><span id="Puzzle_country3FlagHeight">66</span><span id="Puzzle_country3FlagWidth">100</span><span id="Puzzle_country3Language">кітайская</span><span id="Puzzle_country3City1">Пэкін</span><span id="Puzzle_country3City2">Шанхай</span><span id="Puzzle_country3HelpUrl">https://be-x-old.wikipedia.org/wiki/Кітай</span><span id="Puzzle_country4">Бразылія</span><span id="Puzzle_country4Flag">flag_br.png</span><span id="Puzzle_country4FlagHeight">70</span><span id="Puzzle_country4FlagWidth">100</span><span id="Puzzle_country4Language">партугальская</span><span id="Puzzle_country4City1">Рыё-дэ-Жанэйра</span><span id="Puzzle_country4City2">Сан-Паўлу</span><span id="Puzzle_country4HelpUrl">https://be-x-old.wikipedia.org/wiki/Бразылія</span><span id="Puzzle_flag">сьцяг:</span><span id="Puzzle_language">мова:</span><span id="Puzzle_languageChoose">выберыце...</span><span id="Puzzle_cities">гарады:</span><span id="Puzzle_error0">Выдатна!\nУсе блёкі (%1) зьмешчаныя правільна.</span><span id="Puzzle_error1">Бязмала! Адзін блёк зьмешчаны няправільна.</span><span id="Puzzle_error2">Некалькі блёкаў (%1) зьмешчаныя няправільна.</span><span id="Puzzle_tryAgain">Вылучаны блёк зьмешчаны няправільна.\nСпрабуйце яшчэ.</span></div>';
};


puzzlepage.start = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<table id="header" width="100%"><tr><td valign="bottom"><h1><span id="title"><a href="../index.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '">Blockly (Блоклі)</a> : Мазгатня</span></h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp; &nbsp;<button id="helpButton">Дапамога</button>&nbsp; &nbsp;<button id="checkButton" class="primary">Праверыць адказы</button></td></tr></table><script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>' + apps.dialog(null, null, opt_ijData) + '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Далучыце да кожнай краіны (зялёны) яе сьцяг, выберыце яе афіцыйную мову і вызначыце гарады, што ёсьць у гэтай краіне.</div><iframe style="height: 200px; width: 100%; border: none;" src="readonly.html?lang=' + soy.$$escapeHtml(opt_ijData.lang) + '&xml=%3Cblock+type%3D%22country%22+x%3D%225%22+y%3D%225%22%3E%3Cmutation+country%3D%221%22%3E%3C%2Fmutation%3E%3Ctitle+name%3D%22LANG%22%3E1%3C%2Ftitle%3E%3Cvalue+name%3D%22FLAG%22%3E%3Cblock+type%3D%22flag%22%3E%3Cmutation+country%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fvalue%3E%3Cstatement+name%3D%22CITIES%22%3E%3Cblock+type%3D%22city%22%3E%3Cmutation+country%3D%221%22+city%3D%222%22%3E%3C%2Fmutation%3E%3Cnext%3E%3Cblock+type%3D%22city%22%3E%3Cmutation+country%3D%221%22+city%3D%221%22%3E%3C%2Fmutation%3E%3C%2Fblock%3E%3C%2Fnext%3E%3C%2Fblock%3E%3C%2Fstatement%3E%3C%2Fblock%3E"></iframe>' + apps.ok(null, null, opt_ijData) + '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' + apps.ok(null, null, opt_ijData) + '</div>';
};


puzzlepage.readonly = function(opt_data, opt_ignored, opt_ijData) {
  return puzzlepage.messages(null, null, opt_ijData) + '<script type="text/javascript" src="../../blockly_compressed.js"><\/script><script type="text/javascript" src="../../' + soy.$$escapeHtml(opt_ijData.langSrc) + '"><\/script><script type="text/javascript" src="blocks.js"><\/script><div id="blockly"></div>';
};
