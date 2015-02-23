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

goog.provide('Blockly.Blocks.gimi');

goog.require('Blockly.Blocks');

Blockly.Blocks['logic_compare_strings'] = {
  /**
   * Block for comparison operator.
   * @this Blockly.Block
   */
  init: function() {
    var OPERATORS = Blockly.RTL ? [
          ['is equal to(strings)', 'EQ'],
        ] : [
          ['is equal to(strings)', 'EQ'],
        ];
    this.setColour(77);
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
   * Block for comparison operator.
   * @this Blockly.Block
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
Blockly.Blocks['text_print_console'] = {
  /**
   * Block for print statement.
   * @this Blockly.Block
   */
  init: function() {
    this.setColour(77);
    this.appendValueInput('TEXT')
        .setCheck('String')
	.appendField('print_console');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.contextMenu = false;
  }
};
Blockly.Blocks['variable_get'] = {
  /**
   * Block for variable getter.
   * @this Blockly.Block
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



Blockly.Blocks['variable_create_string'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(30);
    this.interpolateMsg(
        'define'+ ' %1' +
        'called' + ' %2',// +
        //Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['TYPE', new Blockly.FieldDropdown([["String", "string"]])],
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        //['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput("const_value")
        .setCheck("String")	
    this.setPreviousStatement(true);
    this.setNextStatement(true);
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
Blockly.Blocks['variable_create_int'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(60);
    this.interpolateMsg(
        'define'+ ' %1' +
        'called' + ' %2',// +
        //Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['TYPE', new Blockly.FieldDropdown([["Int", "int"]])],
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        //['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput("const_value")
        .setCheck("Number")	
    this.setPreviousStatement(true);
    this.setNextStatement(true);
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
Blockly.Blocks['variable_create_boolean'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(90);
    this.interpolateMsg(
        'define'+ ' %1' +
        'called' + ' %2',// +
        //Blockly.Msg.VARIABLES_SET_TAIL + ' %3',
        ['TYPE', new Blockly.FieldDropdown([["Boolean", "boolean"]])],
        ['VAR', new Blockly.FieldVariable(Blockly.Msg.VARIABLES_SET_ITEM)],
        //['VALUE', null, Blockly.ALIGN_RIGHT],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput("const_value")
        .setCheck("Boolean")	
    this.setPreviousStatement(true);
    this.setNextStatement(true);
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


Blockly.Blocks['arith_operation'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(330);
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
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("0"), "number");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};



Blockly.Blocks['constant'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
    this.appendDummyInput()
        .appendTitle("constant")
        .appendTitle(new Blockly.FieldDropdown([["PI", "PI"], ["e", "E"]]), "NAME");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['abs'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendTitle("return the absolute value of");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};


Blockly.Blocks['trigonometric'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
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
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
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
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
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
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(275);
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



Blockly.Blocks['create_constant_boolean'] = {
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


Blockly.Blocks['set_true_false'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldDropdown([["true", "true"], ["false", "false"]]), "value");
    this.setInputsInline(true);
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};



Blockly.Blocks['not'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendValueInput("NAME")
        .setCheck("Boolean")
        .appendTitle("not");
    this.setOutput(true, "Boolean");
    this.setTooltip('');
  }
};


Blockly.Blocks['and_or_xor'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
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


Blockly.Blocks['get_boolean'] = {
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






Blockly.Blocks['create_string'] = {
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

Blockly.Blocks['string_value'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendDummyInput()
        .appendTitle(new Blockly.FieldTextInput("Hola mundo!"), "string_value");
    this.setOutput(true, "String");
    this.setTooltip('');
  }
};


Blockly.Blocks['get_string'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
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

Blockly.Blocks['string_length'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendTitle("length of");
    this.setOutput(true, "Number");
    this.setTooltip('');
  }
};

Blockly.Blocks['string_concat'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
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
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(181);
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

Blockly.Blocks['method_input'] = {
  init: function() {
    this.setHelpUrl('http://www.example.com/');
    this.setColour(120);
    this.appendDummyInput()
        .appendField("input name")
        .appendField(new Blockly.FieldTextInput("input1"), "inputName");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  }
};

*/


	
Blockly.Blocks['procedures_nodefreturn2'] = {
  /**
   * Block for defining a procedure with a return value.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.PROCEDURES_DEFRETURN_HELPURL);
    this.setColour(290);
    var name = Blockly.Procedures.findLegalName(
        Blockly.Msg.PROCEDURES_DEFRETURN_PROCEDURE, this);
    this.appendValueInput("value")
        .appendField(Blockly.Msg.PROCEDURES_DEFRETURN_TITLE)
        .appendField(new Blockly.FieldTextInput(name,
        Blockly.Procedures.rename), 'NAME')
        .appendField('', 'PARAMS')
        .appendField('input:');
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
