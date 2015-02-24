/**
* @license
* Visual Blocks Editor
*
* Copyright 2012 Google Inc.
* https://developers.google.com/blockly/
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/**
* @fileoverview Variable blocks for Blockly.
* @author fraser@google.com (Neil Fraser)
*/

/**
* Review by Pablo Caballero, Eugenio Rubio, Sergio Tamurejo and Jorge Blasco (guizos@gmail.com)
*/
'use strict';

goog.provide('Blockly.Java.z_edx_literals');

goog.require('Blockly.Java');

Blockly.Java['literal_text'] = function(block) {
  // Text value.
  var code = Blockly.Java.quote_(block.getFieldValue('TEXT'));
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['literal_integer'] = function(block) {
  // Numeric value.
  var code = parseInt(block.getFieldValue('NUM'));
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['literal_boolean'] = function(block) {
  // Boolean values true and false.
  var code = (block.getFieldValue('BOOL') == 'TRUE') ? 'true' : 'false';
  return [code, Blockly.Java.ORDER_ATOMIC];
};
