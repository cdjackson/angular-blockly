// Copyright 2008 The Closure Library Authors. All Rights Reserved.
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

goog.provide('goog.proto2.DescriptorTest');
goog.setTestOnly('goog.proto2.DescriptorTest');

goog.require('goog.proto2.Descriptor');
goog.require('goog.testing.jsunit');

function testDescriptorConstruction() {
  var messageType = {};
  var descriptor = new goog.proto2.Descriptor(messageType, {
    name: 'test',
    fullName: 'this.is.a.test'
  }, []);

  assertEquals('test', descriptor.getName());
  assertEquals('this.is.a.test', descriptor.getFullName());
  assertEquals(null, descriptor.getContainingType());
}

function testParentDescriptor() {
  var parentType = {};
  var messageType = {};

  var parentDescriptor = new goog.proto2.Descriptor(parentType, {
    name: 'parent',
    fullName: 'this.is.a.parent'
  }, []);

  parentType.getDescriptor = function() {
    return parentDescriptor;
  };

  var descriptor = new goog.proto2.Descriptor(messageType, {
    name: 'test',
    fullName: 'this.is.a.test',
    containingType: parentType
  }, []);

  assertEquals(parentDescriptor, descriptor.getContainingType());
}
