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


 /**
    block name: variable_get
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: variable getter
    included in final version: YES
  */
Blockly.Java['variable_get'] = function(block) {
  var code = Blockly.Java.variableDB_.getName(block.getFieldValue('VAR'),
      Blockly.Variables.NAME_TYPE);
  return [code, Blockly.Java.ORDER_ATOMIC];
};


 


 /**
    block name: create_var
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: Variable maker
    included in final version: YES
  */
Blockly.Java['create_var'] = function(block) {
  var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
  var text_const__name = Blockly.Java.variableDB_.getName(block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);

  var dropdown_const_type = block.getTitleValue('const_type');
  var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';

  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
Blockly.Java['create_constant_arith'] = function(block) {
  var value_const_value = Blockly.Java.valueToCode(block, 'const_value', Blockly.Java.ORDER_ASSIGNMENT);
  var text_const__name = Blockly.Java.variableDB_.getName(
      block.getFieldValue('const__name'), Blockly.Variables.NAME_TYPE);

  var dropdown_const_type = block.getTitleValue('const_type');

  var code = dropdown_const_type + ' ' +text_const__name+'=' + value_const_value+';\n';

  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
  block name: logic_compare_strings
  authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
  short description: string comparision (different in Java)
  included in final version: YES
  */
Blockly.Java['logic_compare_strings'] = function(block) {
  var OPERATORS = {
    'EQ': '.equals'
  };
  var operator = OPERATORS[block.getFieldValue('OP')];
  var order = (operator == '==') ?
      Blockly.Java.ORDER_EQUALITY : Blockly.Java.ORDER_RELATIONAL;
  var argument0 = Blockly.Java.valueToCode(block, 'A', order) || '0';
  var argument1 = Blockly.Java.valueToCode(block, 'B', order) || '0';
  var code = argument0+ operator + '(' + argument1 + ')';
  return [code, order];
};


/**
    block name: logic_compare
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: eq/ineq/ge/le comparision
    included in final version: YES
  */
Blockly.Java['logic_compare'] = function(block) {
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



 /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
Blockly.Java['get_int'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: text_print_console
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: console print
    included in final version: YES
  */
Blockly.Java['text_print_console'] = function(block) {
  var argument0 = Blockly.Java.valueToCode(block, 'TEXT',
      Blockly.Java.ORDER_NONE) || '\'\'';
  return 'System.out.println(' + argument0 + ');\n';
};



 /**
    block name: arith_operation
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: arithmetic operations like addition substraction etc
    included in final version: YES
  */
Blockly.Java['arith_operation'] = function(block) {
  var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
  var dropdown_operation = block.getFieldValue('operation');

  var code = value_op1 +" "+dropdown_operation+" "+value_op2;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


/**
    block name: number
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: number definition
    included in final version: YES
  */
Blockly.Java['number'] = function(block) {
  var text_number = block.getTitleValue('number');
  var code = text_number;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

/**
    block name: constant
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: pi and e numbers definition
    included in final version: YES
  */
Blockly.Java['constant'] = function(block) {
  var dropdown_name = block.getTitleValue('NAME');
  var code = 'Math.'+dropdown_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


/**
    block name: abs
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: absolute value function
    included in final version: YES
  */
Blockly.Java['abs'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  var code = 'Math.abs('+value_name+")";
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};

 /**
    block name: trigonometric
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: sin/cosine/tangent function
    included in final version: YES
  */
Blockly.Java['trigonometric'] = function(block) {
  var dropdown_operation = block.getTitleValue('operation');
  var angle_angle = block.getTitleValue('angle');
  var code = 'Math.'+dropdown_operation+'('+angle_angle+'*Math.PI/180)';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


/**
    block name: logarithm
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: logarithm function, multiple base
    included in final version: YES
  */
Blockly.Java['logarithm'] = function(block) {
  var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
  var code = 'Math.log10('+value_op+')/Math.log10('+value_base+')';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


/**
    block name: pow
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: "power to" function
    included in final version: YES
  */
Blockly.Java['pow'] = function(block) {
  var value_base = Blockly.Java.valueToCode(block, 'base', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op = Blockly.Java.valueToCode(block, 'op', Blockly.Java.ORDER_ASSIGNMENT);
  var code = 'Math.pow('+value_base+', '+value_op+')';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};


/**
    block name: random
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: random number getter
    included in final version: YES
  */
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


  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
    block name: create_constant_boolean
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */

Blockly.Java['create_constant_boolean'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  var text_name = block.getTitleValue('name');
  var code = 'boolean '+text_name+' = '+value_name+';\n';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
    block name: set_true_false
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: true/false setter
    included in final version: YES
  */
Blockly.Java['set_true_false'] = function(block) {
  var dropdown_value = block.getTitleValue('value');
  var code = dropdown_value;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



  /**
    block name: not
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: not function
    included in final version: YES
  */
Blockly.Java['not'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ASSIGNMENT);
  var code = '!'+value_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
    block name: and_or_xor
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: and/or/xor operations
    included in final version: YES
  */
Blockly.Java['and_or_xor'] = function(block) {
  var value_op1 = Blockly.Java.valueToCode(block, 'op1', Blockly.Java.ORDER_ASSIGNMENT);
  var value_op2 = Blockly.Java.valueToCode(block, 'op2', Blockly.Java.ORDER_ASSIGNMENT);
  var dropdown_name = block.getTitleValue('NAME');
  var code = value_op1+' '+dropdown_name+' '+value_op2;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];
};



 /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
Blockly.Java['get_boolean'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
Blockly.Java['create_string'] = function(block) {
  var value_value = Blockly.Java.valueToCode(block, 'value', Blockly.Java.ORDER_ATOMIC);
  var text_name = block.getTitleValue('NAME');
  var code = 'String '+text_name+' =  '+value_value+';\n';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: string_value
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string setter
    included in final version: YES
  */
Blockly.Java['string_value'] = function(block) {
  var text_string_value = block.getTitleValue('string_value');
  var code = '\"'+text_string_value+ '\"';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
Blockly.Java['get_string'] = function(block) {
  var variable_name = Blockly.Java.variableDB_.getName(block.getFieldValue('NAME'), Blockly.Variables.NAME_TYPE);
  var code = variable_name;
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: string_length
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string length computation
    included in final version: YES
  */
Blockly.Java['string_length'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
  var code = value_name+'.lentgh()';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: string_concat
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string concatenation
    included in final version: YES
  */
Blockly.Java['string_concat'] = function(block) {
  var value_string1 = Blockly.Java.valueToCode(block, 'string1', Blockly.Java.ORDER_ATOMIC);
  var value_string2 = Blockly.Java.valueToCode(block, 'string2', Blockly.Java.ORDER_ATOMIC);
  var code = value_string1+'.concat('+value_string2+')';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: string_substring
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: substring getter
    included in final version: YES
  */
Blockly.Java['string_substring'] = function(block) {
  var value_name = Blockly.Java.valueToCode(block, 'NAME', Blockly.Java.ORDER_ATOMIC);
  var value_beginindex = Blockly.Java.valueToCode(block, 'beginindex', Blockly.Java.ORDER_ATOMIC);
  var value_endindex = Blockly.Java.valueToCode(block, 'endindex', Blockly.Java.ORDER_ATOMIC);
  var code = value_name+'.substring('+value_beginindex+', '+value_endindex+')';
  return [code, Blockly.Java.ORDER_FUNCTION_CALL];;
};



 /**
    block name: procedures_nodefreturn
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method without return
    included in final version: YES
  */
Blockly.Java['procedures_nodefreturn'] = function(block) {
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
  return code;
};



 /**
    block name: procedures_defreturn_Int
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with integer return value
    included in final version: YES
  */
Blockly.Java['procedures_defreturn_Int'] = function(block) {
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

	var tipo = 'int';


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

		code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';

  code = Blockly.Java.scrub_(block, code);
  Blockly.Java.definitions_[funcName] = code;
  return null;
};



 /**
    block name: procedures_defreturn_Boolean
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with boolean return value
    included in final version: YES
  */
Blockly.Java['procedures_defreturn_Boolean'] = function(block) {
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

	var tipo = 'boolean';


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

		code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';

  code = Blockly.Java.scrub_(block, code);
  Blockly.Java.definitions_[funcName] = code;
  return null;
};



 /**
    block name: procedures_defreturn_String
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with string return value
    included in final version: YES
  */
Blockly.Java['procedures_defreturn_String'] = function(block) {
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

	var tipo = 'String';


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

		code = 'public '+ tipo+' ' + funcName + '(' + args.join(', ') + ') {\n' + branch + returnValue + '}';

  code = Blockly.Java.scrub_(block, code);
  Blockly.Java.definitions_[funcName] = code;
  return null;
};
