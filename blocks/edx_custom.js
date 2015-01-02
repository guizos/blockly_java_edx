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

goog.provide('Blockly.Blocks.edx_custom');

goog.require('Blockly.Blocks');


Blockly.Blocks['edx_set_variable_zero'] = {
  /**
   * Block for variable declaration and setter to zero.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(null);
    this.setColour(330);
	  this.appendDummyInput().appendField('set variable to 0');
	  this.setTooltip('Creates a variable with initial value 0');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    //this.contextMenuType_ = 'variables_get';

  }
};

Blockly.Blocks['edx_print_variable'] = {
  /**
  * Block for variable declaration and setter to zero.
  * @this Blockly.Block
  */
  init: function() {
    this.setHelpUrl(null);
    this.setColour(330);
    this.appendDummyInput().appendField('print variable');
    this.setTooltip('Shows the value of "variable"');
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    //this.contextMenuMsg_ = Blockly.Msg.VARIABLES_SET_CREATE_GET;
    //this.contextMenuType_ = 'variables_get';

  }
};

Blockly.Blocks['edx_basic_declare_boolean'] = {
  init: function() {
    this.setColour(210);
    this.appendDummyInput().appendField('new boolean');
    var variable = new Blockly.FieldVariable('item');
    this.appendDummyInput().appendField(variable, 'VAR_BOOL');
    this.appendDummyInput().appendField(' = ');
    this.appendValueInput('VALUE').setCheck('Boolean');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
  },
  /**
  * Return all variables referenced by this block.
  * @return {!Array.<string>} List of variable names.
  * @this Blockly.Block
  */
  getVars: function() {
    return [this.getFieldValue('VAR_BOOL')];
  },
  /**
  * Notification that a variable is renaming.
  * If the name matches one of this block's variables, rename it.
  * @param {string} oldName Previous name of variable.
  * @param {string} newName Renamed variable.
  * @this Blockly.Block
  */
  renameVar: function(oldName, newName) {
    if (Blockly.Names.equals(oldName, this.getFieldValue('VAR_BOOL'))) {
      this.setFieldValue(newName, 'VAR_BOOL');
    }
  }
};

Blockly.Blocks['edx_basic_declare_int'] = {
  init: function() {
    this.setColour(230);
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.appendDummyInput().appendField('new integer');
    var variable = new Blockly.FieldVariable('item');
    this.appendDummyInput().appendField(variable, 'VAR');
    this.appendDummyInput().appendField(' = ');
    this.appendValueInput('VALUE').setCheck('Number');
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setTooltip('');
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
      this.setFieldValue(newName, 'VAR_INT');
    }
  }
};


Blockly.Blocks['edx_math_integer'] = {
  /**
  * Block for numeric integer value.
  * @this Blockly.Block
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.MATH_NUMBER_HELPURL);
    this.setColour(230);
    this.appendDummyInput()
    .appendField(new Blockly.FieldTextInput('0',
    Blockly.FieldTextInput.integerValidator), 'NUM');
    this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.MATH_NUMBER_TOOLTIP);
  }
};
