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

goog.provide('Blockly.Java.z_edx_variables');

goog.require('Blockly.Java');


/*
* --- STRINGS ---
*
*/
Blockly.Java['variable_declare_string'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
  Blockly.Java.ORDER_ASSIGNMENT) || '""';
  var varName = Blockly.Java.variableDB_.getName(
    block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    if(string_variables.indexOf(varName) < 0) {
      string_variables[string_variables.length] = varName;
    }
    var typeName = 'String';
    return typeName+' '+varName + ' = ' + argument0 + ';\n';
  };

  Blockly.Java['variable_get_string'] = function(block) {
    // Variable getter.
    var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
    Blockly.Variables.NAME_TYPE);
    return [code, Blockly.Java.ORDER_ATOMIC];
  };

  Blockly.Java['variable_set_string'] = function(block) {
    // Variable setter.
    var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
        Blockly.Java.ORDER_ASSIGNMENT) || '""';
    var varName = Blockly.Java.variableDB_.getName(
        block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' = ' + argument0 + ';\n';
  };

/*
* --- INTEGER ---
*
*/
Blockly.Java['variable_declare_int'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  if(int_variables.indexOf(varName) < 0) {
      int_variables[int_variables.length] = varName;
  }
  var typeName = 'int';
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['variable_get_int'] = function(block) {
  // Variable getter.
  var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
  Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['variable_set_int'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};




/*
* --- BOOLEAN ---
*
*/
Blockly.Java['variable_declare_boolean'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || 'true';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  if(boolean_variables.indexOf(varName) < 0) {
      boolean_variables[boolean_variables.length] = varName;
  }
  var typeName = 'boolean';
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};

Blockly.Java['variable_get_boolean'] = function(block) {
  // Variable getter.
  var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
  Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};

Blockly.Java['variable_set_boolean'] = function(block) {
  // Variable setter.
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.Java.ORDER_ASSIGNMENT) || 'true';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  return varName + ' = ' + argument0 + ';\n';
};
