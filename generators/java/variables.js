/**
 * @license
 * Visual Blocks Language
 *
 * Copyright 2012 Google Inc.
 * https://blockly.googlecode.com/
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
 * @fileoverview Generating Python for variable blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Java.variables');

goog.require('Blockly.Java');


Blockly.Java['variables_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['variables_set'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var type = "";
  if(isNaN(argument0)){
  	type = "String";
  }else{
  	if(argument0.indexOf('.')>=0){
  		type = "double";
  	}else{
  		type = "int";
  	}
  }
  if(argument0.indexOf('[')>=0){
  	type = type + ' []';
  }
  return type + ' ' +varName + ' = ' + argument0 + ';\n';
};
