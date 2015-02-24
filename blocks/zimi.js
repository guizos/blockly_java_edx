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
'use strict';

goog.provide('Blockly.Blocks.zimi');

goog.require('Blockly.Blocks');

/*
Arithmetic
__________________________________________________________________________
*/
Blockly.Blocks['arith_operation'] = {
  /**
    block name: arith_operation
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: operations: addition substraction etc
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendValueInput("op1")
        .setCheck("Number");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["+", "+"], ["-", "-"], ["/", "/"], ["*", "*"]]), "operation");
    this.appendValueInput("op2")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['number'] = {
   /**
    block name: number
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: number definition
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("0"), "number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['constant'] = {
   /**
    block name: constant
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: pi and e numbers definition
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendTitle("constant")
        .appendTitle(new Blockly.FieldDropdown([["PI", "PI"], ["e", "E"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['abs'] = {
   /**
    block name: abs
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: absolute value function
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendTitle("return the absolute value of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['trigonometric'] = {
   /**
    block name: trigonometric
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: sin/cosine/tangent function
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["sine", "sin"], ["cosine", "cos"], ["tangent", "tan"]]), "operation")
        .appendTitle("of")
        .appendTitle(new Blockly.FieldAngle("90"), "angle");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['logarithm'] = {
   /**
    block name: logarithm
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: logarithm function, multiple base
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendValueInput("base")
        .setCheck("Number")
        .appendTitle("logarithm in base");
    this.appendValueInput("op")
        .setCheck("Number")
        .appendTitle("of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['pow'] = {
   /**
    block name: pow
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: "power to" function
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendValueInput("base")
        .setCheck("Number")
        .appendTitle("return");
    this.appendValueInput("op")
        .setCheck("Number")
        .appendTitle("raised to the power of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['random'] = {
   /**
    block name: random
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: random number getter
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(60);
    this.appendValueInput("op1")
        .setCheck("Number")
        .appendTitle("get random value between");
    this.appendValueInput("op2")
        .setCheck("Number")
        .appendTitle("(inclusive) an");
    this.appendDummyInput()
        .appendTitle("(exclusive)");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
/*
Boolean
__________________________________________________________________________
*/
Blockly.Blocks['set_true_false'] = {
   /**
    block name: set_true_false
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: true/false setter
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "value");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Blocks['not'] = {
   /**
    block name: not
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: not function
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendTitle("not");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
Blockly.Blocks['and_or_xor'] = {
   /**
    block name: and_or_xor
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: and/or/xor operations
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(90);
    this.appendValueInput("op1")
        .setCheck("Boolean");
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["equals", "=="],["and", "&&"], ["or", "||"], ["xor", "^"]]), "NAME");
    this.appendValueInput("op2")
        .setCheck("Boolean");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};
/*
String
*/
Blockly.Blocks['string_value'] = {
   /**
    block name: string_value
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string setter
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("Hola mundo!"), "string_value");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Blocks['string_length'] = {
   /**
    block name: string_length
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string length computation
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendTitle("length of");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};
Blockly.Blocks['string_concat'] = {
   /**
    block name: string_concat
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: string concatenation
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendValueInput("string1")
        .setCheck("String")
        .appendTitle("concat");
    this.appendValueInput("string2")
        .setCheck("String")
        .appendTitle("with");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};
Blockly.Blocks['string_substring'] = {
   /**
    block name: string_substring
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: substring getter
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendTitle("substring");
    this.appendValueInput("beginindex")
        .setCheck("Number")
        .appendTitle("from position");
    this.appendValueInput("endindex")
        .setCheck("Number")
        .appendTitle("to position");
    this.setInputsInline(true);
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};

/*
Comparision
*/
Blockly.Blocks['logic_compare_strings'] = {
  /**
  block name: logic_compare_strings
  authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
  short description: string comparision (different in Java)
  included in final version: YES
  */
  init: function() {
    var OPERATORS = Blockly.RTL ? [
          ['is equal to(strings)', 'EQ']
        ] : [
          ['is equal to(strings)', 'EQ']
        ];
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A')
        .setCheck('String');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP')
        .setCheck('String');
    this.setInputsInline(true);
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ
      };
      return TOOLTIPS[op];
    });
  }
};
Blockly.Blocks['logic_compare'] = {
  /**
    block name: logic_compare
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: eq/ineq/ge/le comparision
    included in final version: YES
  */
  init: function() {
    var OPERATORS = Blockly.RTL ? [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['>', 'LT'],
          ['\u2265', 'LTE'],
          ['<', 'GT'],
          ['\u2264', 'GTE']
        ] : [
          ['=', 'EQ'],
          ['\u2260', 'NEQ'],
          ['<', 'LT'],
          ['\u2264', 'LTE'],
          ['>', 'GT'],
          ['\u2265', 'GTE']
        ];
    this.setHelpUrl(Blockly.Msg.LOGIC_COMPARE_HELPURL);
    this.setColour(210);
    this.setOutput(true, 'Boolean');
    this.appendValueInput('A');
    this.appendValueInput('B')
        .appendField(new Blockly.FieldDropdown(OPERATORS), 'OP');
    this.setInputsInline(true);
    // Assign 'this' to a variable for use in the tooltip closure below.
    var thisBlock = this;
    this.setTooltip(function() {
      var op = thisBlock.getFieldValue('OP');
      var TOOLTIPS = {
        'EQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_EQ,
        'NEQ': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_NEQ,
        'LT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LT,
        'LTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_LTE,
        'GT': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GT,
        'GTE': Blockly.Msg.LOGIC_COMPARE_TOOLTIP_GTE
      };
      return TOOLTIPS[op];
    });
  }
};

/*
Console
__________________________________________________________________________
*/
Blockly.Blocks['text_print_console'] = {
  /**
    block name: text_print_console
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: console print
    included in final version: YES
  */
  init: function() {
    this.setColour(250);
    this.appendValueInput('TEXT')
        .setCheck('String')
	.appendField('print_console');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
/*
Methods
__________________________________________________________________________
*/
Blockly.Blocks['procedures_nodefreturn2'] = {
   /**
    block name: procedures_nodefreturn2
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method without return
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(290);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};
Blockly.Blocks['procedures_defreturn_String'] = {
   /**
    block name: procedures_defreturn_String
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with string return value
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(30);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"String")
		.setCheck('String');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};
Blockly.Blocks['procedures_defreturn_Int'] = {
   /**
    block name: procedures_defreturn_Int
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with integer return value
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(60);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"int")
		.setCheck('Number');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};
Blockly.Blocks['procedures_defreturn_Boolean'] = {
  /**
    block name: procedures_defreturn_Boolean
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: method with boolean return value
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(90);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendDummyInput()
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS');
    this.appendValueInput('RETURN')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_RETURN +" "+"boolean")
		.setCheck('Boolean');
    this.setMutator(new Blockly.Mutator(['procedures_mutatorarg']));
    this.setTooltip(Blockly.Msg.PROCEDURES_DEFRETURN_TOOLTIP);
    this.arguments_ = [];
    this.setStatements_(true);
    this.statementConnection_ = null;
  },
  setStatements_: Blockly.Blocks['procedures_defnoreturn'].setStatements_,
  updateParams_: Blockly.Blocks['procedures_defnoreturn'].updateParams_,
  mutationToDom: Blockly.Blocks['procedures_defnoreturn'].mutationToDom,
  domToMutation: Blockly.Blocks['procedures_defnoreturn'].domToMutation,
  decompose: Blockly.Blocks['procedures_defnoreturn'].decompose,
  compose: Blockly.Blocks['procedures_defnoreturn'].compose,
  dispose: Blockly.Blocks['procedures_defnoreturn'].dispose,
  /**
   * Return the signature of this procedure definition.
   * @return {!Array} Tuple containing three elements:
   *     - the name of the defined procedure,
   *     - a list of all its arguments,
   *     - that it DOES have a return value.
   * @this Blockly.Block
   */
  getProcedureDef: function() {
    return [this.getFieldValue('NAME'), this.arguments_, true];
  },
  getVars: Blockly.Blocks['procedures_defnoreturn'].getVars,
  renameVar: Blockly.Blocks['procedures_defnoreturn'].renameVar,
  customContextMenu: Blockly.Blocks['procedures_defnoreturn'].customContextMenu,
  callType_: 'procedures_callreturn'
};


Blockly.Blocks['variable_get'] = {
   /**
    block name: variable_get
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    short description: variable getter
    included in final version: YES
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(330);
    this.appendDummyInput()
        .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
        .appendField(new Blockly.FieldVariable(
        Blockly.Msg.VARIABLES_GET_ITEM), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
    this.setOutput(true);
    this.setTooltip(Blockly.Msg.VARIABLES_GET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_GET_CREATE_SET;
    this.contextMenuType_ = 'variables_set';
  },
  /**
   * Return all variables referenced by this block.
   * @return {!Array.<string>} List of variable names.
   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**
   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.
   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  /**
   * Add menu option to create getter/setter block for this setter/getter.
   * @param {!Array} options List of menu options to add to.
   * @this Blockly.Block
   */
  customContextMenu: function(options) {
    var option = {enabled: true};
    var name = this.getFieldValue('VAR');
    option.text = this.contextMenuMsg_.replace('%1', name);
    var xmlField = goog.dom.createDom('field', null, name);
    xmlField.setAttribute('name', 'VAR');
    var xmlBlock = goog.dom.createDom('block', null, xmlField);
    xmlBlock.setAttribute('type', this.contextMenuType_);
    option.callback = Blockly.ContextMenu.callbackFactory(this, xmlBlock);
    options.push(option);
  }
};


/*
__________________________________________________________________________
__________________________________________________________________________

Others: Non included, tests.
__________________________________________________________________________
__________________________________________________________________________
*/
Blockly.Blocks['variable_input'] = {
   /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(30);
    this.appendDummyInput()
        .appendTitle("input")
    	.appendTitle(new Blockly.FieldDropdown([["String", "String"],["int", "int"],["boolean", "boolean"]]), "const_type");
    this.interpolateMsg(
        'called' + ' %1',// +
        //Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        //['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
     this.setOutput(true);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.VARIABLES_SET_TOOLTIP);
    this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    this.contextMenuType_ = 'variables_get';
  },
  /**
   * Return all variables referenced by this block.

   * @return {!Array.<string>} List of variable names.

   * @this Blockly.Block
   */
  getVars: function() {
    return [this.getFieldValue('VAR')];
  },
  /**

   * Notification that a variable is renaming.
   * If the name matches one of this block's variables, rename it.
   * @param {string} oldName Previous name of variable.
   * @param {string} newName Renamed variable.

   * @this Blockly.Block
   */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR'))) {
      this.setFieldValue(newName, 'VAR');
    }
  },
  customContextMenu: Blockly.Blocks['variables_get'].customContextMenu
};
Blockly.Blocks['create_constant_arith'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(247);
    this.appendValueInput("const_value")
        .setCheck("Number")
        .appendTitle("create number named")
        .appendTitle(new Blockly.FieldTextInput("var_name"), "const__name")
        .appendTitle("as")
        .appendTitle(new Blockly.FieldDropdown([["integer", "int"], ["float", "float"]]), "const_type")
		.appendTitle("with value");
    this.setTooltip('');
  }
};
Blockly.Blocks['get_int'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(20);
    this.appendDummyInput()
        .appendTitle("return number named")
        .appendTitle(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, "Number");
    this.setTooltip('');
  },
   renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  }
};
Blockly.Blocks['create_constant_boolean'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendTitle("create boolean variable named")
        .appendTitle(new Blockly.FieldTextInput("boolean_var"), "name")
        .appendTitle("with value");
    this.setTooltip('');
  }
};
Blockly.Blocks['get_boolean'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendDummyInput()
        .appendTitle("return boolean named")
        .appendTitle(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  },
   renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  }
};
Blockly.Blocks['get_string'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(30);
    this.appendDummyInput()
        .appendTitle("return string named")
        .appendTitle(new Blockly.FieldVariable("item"), "NAME");
    this.setOutput(true, "String");
    this.setTooltip('');
  },
   renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('NAME'))) {
      this.setFieldValue(newName, 'NAME');
    }
  }
};
Blockly.Blocks['create_string'] = {
  /**
    authors: Pablo Caballero, Eugenio Rubio, Sergio Tamurejo.
    included in final version: NO
  */
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendValueInput("value")
        .setCheck("String")
        .appendTitle("create String named")
        .appendTitle(new Blockly.FieldTextInput("default"), "NAME")
        .appendTitle("with value");
    this.setTooltip('');
  }
};
