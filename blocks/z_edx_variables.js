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

goog.provide('Blockly.Blocks.z_edx_variables');

goog.require('Blockly.Blocks');

/*
 * --- STRINGS ---
 *
*/
Blockly.Blocks['variable_declare_string'] = {
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(30);
    var newString = new Blockly.FieldVariableString(null);
    this.interpolateMsg(
      'define String '+
      'called' + ' %1',
      ['VAR', newString],
      Blockly.ALIGN_RIGHT);
      this.appendValueInput('VALUE')
      .setCheck("String");
      this.setInputsInline(true);
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


Blockly.Blocks['variable_get_string'] = {
    /**
    * Block for variable getter.
    * @this Blockly.Block
    */
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
      this.setColour(30);
      var name = Blockly.VariablesString.randomVariablesString();
      this.appendDummyInput()
      .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
      .appendField(new Blockly.FieldVariableString(
        name), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
        this.setOutput(true,'String');
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


Blockly.Blocks['variable_set_string'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(30);
    var name = Blockly.VariablesString.randomVariablesString();
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        'set' + ' %1 ',
        ['VAR', new Blockly.FieldVariableString(name)],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .setCheck("String");
    this.setInputsInline(true);
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




/*
 * --- INTEGER ---
 *
*/
Blockly.Blocks['variable_declare_int'] = {
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
      this.setColour(60);
      this.interpolateMsg(
        'define int '+
        'called' + ' %1' ,//+
        ['VAR', new Blockly.FieldVariableInteger(null)],
        Blockly.ALIGN_RIGHT);
        this.appendValueInput('VALUE')
        .setCheck("Number");
        this.setInputsInline(true);
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


Blockly.Blocks['variable_get_int'] = {
    /**
    * Block for variable getter.
    * @this Blockly.Block
    */
    init: function() {
      this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
      this.setColour(60);
      var name = Blockly.VariablesInteger.randomVariablesInteger();
      this.appendDummyInput()
      .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
      .appendField(new Blockly.FieldVariableInteger(
        name), 'VAR')
        .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
        this.setOutput(true,'Number');
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

Blockly.Blocks['variable_set_int'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(60);
    var name = Blockly.VariablesInteger.randomVariablesInteger();
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        'set' + ' %1 ',
        ['VAR', new Blockly.FieldVariableInteger(name)],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .setCheck("Number");
    this.setInputsInline(true);
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






/*
* --- BOOLEAN ---
*
*/
Blockly.Blocks['variable_declare_boolean'] = {
      init: function() {
        this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
        this.setColour(90);
        this.interpolateMsg(
          'define boolean '+
          'called' + ' %1' ,
          ['VAR', new Blockly.FieldVariableBoolean(null)],
          Blockly.ALIGN_RIGHT);
          this.appendValueInput('VALUE')
          .setCheck("Boolean");
          this.setInputsInline(true);
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

Blockly.Blocks['variable_get_boolean'] = {
  /**
  * Block for variable getter.
  * @this Blockly.Block
  */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_GET_HELPURL);
    this.setColour(90);
    var name = Blockly.VariablesBoolean.randomVariablesBoolean();
    this.appendDummyInput()
    .appendField(Blockly.Msg.VARIABLES_GET_TITLE)
    .appendField(new Blockly.FieldVariableBoolean(
      name), 'VAR')
      .appendField(Blockly.Msg.VARIABLES_GET_TAIL);
      this.setOutput(true,'Boolean');
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

Blockly.Blocks['variable_set_boolean'] = {
  /**
   * Block for variable setter.
   * @this Blockly.Block
   */
  init: function() {
    this.setHelpUrl(Blockly.Msg.VARIABLES_SET_HELPURL);
    this.setColour(90);
    var name = Blockly.VariablesBoolean.randomVariablesBoolean();
    this.interpolateMsg(
        // TODO: Combine these messages instead of using concatenation.
        'set' + ' %1 ',
        ['VAR', new Blockly.FieldVariableBoolean(name)],
        Blockly.ALIGN_RIGHT);
    this.appendValueInput('VALUE')
        .setCheck("Boolean");
    this.setInputsInline(true);
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
