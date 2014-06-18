// Copyright 2014 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.provide('goog.format.InternationalizedEmailAddressTest');
goog.setTestOnly('goog.format.InternationalizedEmailAddressTest');

goog.require('goog.array');
goog.require('goog.format.InternationalizedEmailAddress');
goog.require('goog.testing.jsunit');


/**
 * Asserts that the given validation function generates the expected outcome for
 * a set of expected valid and a second set of expected invalid addresses.
 * containing the specified address strings, irrespective of their order.
 * @param {function(string):boolean} testFunc Validation function to be tested.
 * @param {!Array.<string>} valid List of addresses that should be valid.
 * @param {!Array.<string>} invalid List of addresses that should be invalid.
 * @private
 */
function doIsValidTest(testFunc, valid, invalid) {
  goog.array.forEach(valid, function(str) {
    assertTrue('"' + str + '" should be valid.', testFunc(str));
  });
  goog.array.forEach(invalid, function(str) {
    assertFalse('"' + str + '" should be invalid.', testFunc(str));
  });
}


/**
 * Asserts that parsing the inputString produces a list of email addresses
 * containing the specified address strings, irrespective of their order.
 * @param {string} inputString A raw address list.
 * @param {!Array.<string>} expectedList The expected results.
 * @param {string=} opt_message An assertion message.
 * @return {string} the resulting email address objects.
 */
function assertParsedList(inputString, expectedList, opt_message) {
  var message = opt_message || 'Should parse address correctly';
  var result = goog.format.InternationalizedEmailAddress.parseList(inputString);
  assertEquals(
      'Should have correct # of addresses', expectedList.length, result.length);
  for (var i = 0; i < expectedList.length; ++i) {
    assertEquals(message, expectedList[i], result[i].getAddress());
  }
  return result;
}

function testParseList() {
  // Test only the new cases added by EAI (other cases covered in parent
  // class test)
  assertParsedList('<me.みんあ@me.xn--l8jtg9b>', ['me.みんあ@me.xn--l8jtg9b']);
}

function testIsEaiValid() {
  var valid = [
    'e@b.eu',
    '<a.b+foo@c.com>',
    'eric <e@b.com>',
    '"e" <e@b.com>',
    'a@FOO.MUSEUM',
    'bla@b.co.ac.uk',
    'bla@a.b.com',
    'o\'hara@gm.com',
    'plus+is+allowed@gmail.com',
    '!/#$%&\'*+-=~|`{}?^_@expample.com',
    'confirm-bhk=modulo.org@yahoogroups.com',
    'み.ん-あ@みんあ.みんあ',
    'みんあ@test.com',
    'test@test.みんあ',
    'test@みんあ.com',
    'me.みんあ@me.xn--l8jtg9b',
    'みんあ@me.xn--l8jtg9b'
  ];
  var invalid = [
    null,
    undefined,
    'e',
    '',
    'e @c.com',
    'a@b',
    'foo.com',
    'foo@c..com',
    'test@gma=il.com',
    'aaa@gmail',
    'has some spaces@gmail.com',
    'has@three@at@signs.com',
    '@no-local-part.com'
  ];
  doIsValidTest(
      goog.format.InternationalizedEmailAddress.isValidAddress, valid, invalid);
}

function testIsValidLocalPart() {
  var valid = [
    'e',
    'a.b+foo',
    'o\'hara',
    'user+someone',
    '!/#$%&\'*+-=~|`{}?^_',
    'confirm-bhk=modulo.org',
    'me.みんあ',
    'みんあ'
  ];
  var invalid = [
    null,
    undefined,
    'A@b@c',
    'a"b(c)d,e:f;g<h>i[j\\k]l',
    'just"not"right',
    'this is"not\\allowed',
    'this\\ still\"not\\\\allowed',
    'has some spaces'
  ];
  doIsValidTest(goog.format.InternationalizedEmailAddress.isValidLocalPartSpec,
      valid, invalid);
}

function testIsValidDomainPart() {
  var valid = [
    'example.com',
    'dept.example.org',
    'long.domain.with.lots.of.dots',
    'me.xn--l8jtg9b',
    'me.みんあ',
    'sld.looooooongtld'
  ];
  var invalid = [
    null,
    undefined,
    '',
    '@has.an.at.sign',
    '..has.leading.dots',
    'gma=il.com',
    'DoesNotHaveADot',
    'aaaaaaaaaabbbbbbbbbbccccccccccddddddddddeeeeeeeeeeffffffffffgggggggggg'
  ];
  doIsValidTest(goog.format.InternationalizedEmailAddress.isValidDomainPartSpec,
      valid, invalid);
}
