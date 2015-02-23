/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Java for variable blocks.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.Java.gimi');

goog.require('Blockly.Java');

Blockly.Java['variable_get'] = function(block) {
  // Variable getter.
  var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};
Blockly.Java['variable_create_int'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeName = Blockly.Java.variableDB_.getName(block.getFieldValue('TYPE'), Blockly.Variables.NAME_TYPE);
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};
Blockly.Java['variable_create_string'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeName = Blockly.Java.variableDB_.getName(block.getFieldValue('TYPE'), Blockly.Variables.NAME_TYPE);
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};
Blockly.Java['variable_create_boolean'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'VALUE',
      Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  var varName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
  var typeName = Blockly.Java.variableDB_.getName(block.getFieldValue('TYPE'), Blockly.Variables.NAME_TYPE);
  return typeName+' '+varName + ' = ' + argument0 + ';\n';
};
Blockly.Java['create_var'] = function(block) {
  var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
  var text_const__name = Blockly.Java.variableDB_.getName(block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);
	  
  var dropdown_const_type = block.getTitleValue('const_type');
  var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';
  
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['create_constant_arith'] = function(block) {
  var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
  var text_const__name = Blockly.Java.variableDB_.getName(
      block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);
	  
  var dropdown_const_type = block.getTitleValue('const_type');
  // TODO: Assemble ' + language + ' into code variable.
  
  var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';
  
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['logic_compare_strings'] = function(block) {
  // Comparison operator strings.
  var OPERATORS = {
    'EQ': '.equals',
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==') ?
      Blockly.Java.ORDER_EQUALITY : Blockly.Java.ORDER_RELATIONAL;
  var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
  var code = argument0+ operator + '(' + argument1 + ')';
  return [code, order];
};
Blockly.Java['logic_compare'] = function(block) {
  // Comparison operator.
  var OPERATORS = {
    'EQ': '==',
    'NEQ': '!=',
    'LT': '<',
    'LTE': '<=',
    'GT': '>',
    'GTE': '>='
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==' || operator == '!=') ?
      Blockly.Java.ORDER_EQUALITY : Blockly.Java.ORDER_RELATIONAL;
  var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
  var code = argument0 + ' ' + operator + ' ' + argument1;
  return [code, order];
};
Blockly.Java['get_int'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble ' + language + ' into code variable.
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};

Blockly.Java['text_print_console'] = function(block) {
  // Print statement.
  var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
      Blockly.Java.ORDER_NONE) || '\'\'';
  return 'System.out.println(' + argument0 + ');\n';
};

Blockly.Java['arith_operation'] = function(block) {
  var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
  var dropdown_operation = block.getFieldValue('operation');
  // TODO: Assemble ' + language + ' into code variable.

  // TODO: Change ORDER_NONE to the correct strength.
  var code = value_op1 +" "+dropdown_operation+" "+value_op2;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['number'] = function(block) {
  var text_number = block.getTitleValue('number');
  // TODO: Assemble ' + language + ' into code variable.
  var code = text_number;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['constant'] = function(block) {
  var dropdown_name = block.getTitleValue('NAME');
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'Math.'+dropdown_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



Blockly.Java['abs'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'Math.abs('+value_name+")";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


Blockly.Java['trigonometric'] = function(block) {
  var dropdown_operation = block.getTitleValue('operation');
  var angle_angle = block.getTitleValue('angle');
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'Math.'+dropdown_operation+'('+angle_angle+'*Math.PI/180)';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['logarithm'] = function(block) {
  var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
  var code = 'Math.log10('+value_op+')/Math.log10('+value_base+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



Blockly.Java['pow'] = function(block) {
  var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'Math.pow('+value_base+', '+value_op+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

Blockly.Java['random'] = function(block) {
  var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
var low;
var high;
	if(value_op1>value_op2){
		high = value_op1;
		low = value_op2;
	  }
	  else {
		high = value_op2;
		low = value_op1;
	  
	  }
  var code = 'Math.random('+high+'-'+low+')+'+low;

  
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};







Blockly.Java['create_constant_boolean'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  var text_name = block.getTitleValue('name');
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'boolean '+text_name+' = '+value_name+';\n';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


Blockly.Java['set_true_false'] = function(block) {
  var dropdown_value = block.getTitleValue('value');
  // TODO: Assemble ' + language + ' into code variable.
  var code = dropdown_value;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


Blockly.Java['not'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  // TODO: Assemble ' + language + ' into code variable.
  var code = '!'+value_name;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



Blockly.Java['and_or_xor'] = function(block) {
  var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
  var dropdown_name = block.getTitleValue('NAME');
  // TODO: Assemble ' + language + ' into code variable.
  var code = value_op1+' '+dropdown_name+' '+value_op2;
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


Blockly.Java['get_boolean'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble ' + language + ' into code variable.
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};







Blockly.Java['create_string'] = function(block) {
  var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
  var text_name = block.getTitleValue('NAME');
  // TODO: Assemble ' + language + ' into code variable.
  var code = 'String '+text_name+' =  '+value_value+';\n';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};

Blockly.Java['string_value'] = function(block) {
  var text_string_value = block.getTitleValue('string_value');
  // TODO: Assemble ' + language + ' into code variable.
  var code = '\"'+text_string_value+ '\"';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};


Blockly.Java['get_string'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  // TODO: Assemble ' + language + ' into code variable.
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};

Blockly.Java['string_length'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
  // TODO: Assemble ' + language + ' into code variable.
  var code = value_name+'.lentgh()';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};


Blockly.Java['string_concat'] = function(block) {
  var value_string1 = Blockly.Java.valueToCode(block, 'string1', Blockly.Java.ORDER_ATOMIC);
  var value_string2 = Blockly.Java.valueToCode(block, 'string2', Blockly.Java.ORDER_ATOMIC);
  // TODO: Assemble ' + language + ' into code variable.
  var code = value_string1+'.concat('+value_string2+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};

Blockly.Java['string_substring'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
  var value_beginindex = Blockly.Java.valueToCode(block, 'beginindex', Blockly.Java.ORDER_ATOMIC);
  var value_endindex = Blockly.Java.valueToCode(block, 'endindex', Blockly.Java.ORDER_ATOMIC);
  // TODO: Assemble ' + language + ' into code variable.
  var code = value_name+'.substring('+value_beginindex+', '+value_endindex+')';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};
/*
Blockly.Java['method_input'] = function(block) {
  var text_inputname = block.getFieldValue('inputName');
  // TODO: Assemble Java into code variable.
  var code = text_inputname;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};
*/


Blockly.Java['procedures_nodefreturn2'] = function(block) {
  // Define a procedure with a return value.
  var funcName = Blockly.Java.variableDB_.getName(
      block.getFieldValue('NAME'), Blockly.Procedures.NAME_TYPE);
  var branch = Blockly.Java.statementToCode(block, 'STACK');
  if (Blockly.Java.STATEMENT_PREFIX) {
    branch = Blockly.Java.prefixLines(
        Blockly.Java.STATEMENT_PREFIX.replace(/%1/g,
        '\'' + block.id + '\''), Blockly.Java.INDENT) + branch;
  }
  if (Blockly.Java.INFINITE_LOOP_TRAP) {
    branch = Blockly.Java.INFINITE_LOOP_TRAP.replace(/%1/g,
        '\'' + block.id + '\'') + branch;
  }
  var returnValue = Blockly.Java.valueToCode(block, 'RETURN',
      Blockly.Java.ORDER_NONE) || '';
	  
  var tipo = 'void';
  
  if (returnValue) {
    tipo = typeof  block.getFieldValue(block, 'RETURN');
    returnValue = '  return ' + returnValue + ';\n';

  }
  var args = [];
  for (var x = 0; x < block.arguments_.length; x++) {
    args[x] = Blockly.Java.variableDB_.getName(block.arguments_[x],
        Blockly.Variables.NAME_TYPE);
		args[x] = (typeof args[x])+' '+args[x];
  }
  var code;
  var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
  var value_value2 = Blockly.Java.valueToCode(block, 'TYPE', Blockly.Java.ORDER_ATOMIC);
	
		code = 'public '+ 'void'+' ' + funcName + '('+value_value  + args.join(', ') + ') {\n' + branch + returnValue + '}';
	
  code = Blockly.Java.scrub_(block, code);
  //Blockly.Java.definitions_[funcName] = code;
  return code;
};

