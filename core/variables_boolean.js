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
 * @fileoverview Utility functions for handling VariablesBoolean and procedure names.
 * Note that VariablesBoolean and procedures share the same name space, meaning that
 * one can't have a variable and a procedure of the same name.
 * @author fraser@google.com (Neil Fraser)
 */
'use strict';

goog.provide('Blockly.VariablesBoolean');

// TODO(scr): Fix circular dependencies
// goog.require('Blockly.Block');
goog.require('Blockly.Workspace');


/**
 * Category to separate variable names from procedures and generated functions.
 */
Blockly.VariablesBoolean.NAME_TYPE = 'VARIABLE';

/**
 * Find all user-created VariablesBoolean.
 * @param {Blockly.Block=} opt_block Optional root block.
 * @return {!Array.<string>} Array of variable names.
 */
Blockly.VariablesBoolean.allVariables = function(opt_block) {
  var blocks;
  if (opt_block) {
    blocks = opt_block.getDescendants();
  } else {
    blocks = Blockly.mainWorkspace.getAllBlocks();
  }
  var variableHash = Object.create(null);
  // Iterate through every block and add each variable to the hash.
  for (var x = 0; x < blocks.length; x++) {
    var func = blocks[x].getVars;
    if (func) {
      var blockVariablesBoolean = func.call(blocks[x]);
      for (var y = 0; y < blockVariablesBoolean.length; y++) {
        var varName = blockVariablesBoolean[y];
        // Variable name may be null if the block is only half-built.
        if (varName) {
          variableHash[varName.toLowerCase()] = varName;
        }
      }
    }
  }
  // Flatten the hash into a list.
  var variableList = [];
  for (var name in variableHash) {
    variableList.push(variableHash[name]);
  }
  return variableList;
};


/**
 * Find all user-created VariablesBoolean.
 * @param {Blockly.Block=} opt_block Optional root block.
 * @return {!Array.<string>} Array of variable names.
 */
Blockly.VariablesBoolean.allVariablesBoolean = function(opt_block) {

	Blockly.VariablesBoolean.clearList();
  // Flatten the hash into a list.
  var variableList = [];

    for (var x = 0; x < boolean_variables.length; x++) {
		variableList.push(boolean_variables[x]);
    }

  return variableList;
};

/**
* return one user created boolean variable
* @return {string} name of first declared integer
*/
Blockly.VariablesBoolean.randomVariablesBoolean = function() {
  var variables = Blockly.VariablesBoolean.allVariablesBoolean();
  var number = Math.floor((Math.random() * variables.length) + 0);
  return variables[number];

};


/**
 * Find all instances of the specified variable and rename them.
 * @param {string} oldName Variable to rename.
 * @param {string} newName New variable name.
 */
Blockly.VariablesBoolean.renameVariable = function(oldName, newName) {

  if(string_variables.indexOf(newName)>=0 || boolean_variables.indexOf(newName)>=0 || int_variables.indexOf(newName)>=0){
	  window.alert("You cannot use the same name for two different variables! Try another one.");
  }else if(newName == "DefaultInt" || newName == "DefaultString"){
	  window.alert("This name is reserverd. Use another one");
  } else {
	  var blocks = Blockly.mainWorkspace.getAllBlocks();
	  // Iterate through every block.
	  for (var x = 0; x < blocks.length; x++) {
		var func = blocks[x].renameVar;
		if (func) {
		  func.call(blocks[x], oldName, newName);
		}
	  }
	  //boolean_variables.indexOf(oldName) = newName;
	  if(boolean_variables.indexOf(oldName) >= 0){
	   boolean_variables[boolean_variables.indexOf(oldName)] = newName;
	  }else{
			if(boolean_variables.indexOf(newName) < 0){
			  boolean_variables[boolean_variables.length] = newName;
			}
	   }
  }
};


Blockly.VariablesBoolean.clearList = function() {
   var lista_completa = Blockly.VariablesBoolean.allVariables();

    for (var x = 0; x < boolean_variables.length; x++) {
		if(lista_completa.indexOf(boolean_variables[x]) < 0){
			boolean_variables.splice(x,1);
		}
	}
}

Blockly.VariablesBoolean.declareIfNot = function(name) {
	if(boolean_variables.indexOf(name) < 0){
		  boolean_variables[boolean_variables.length] = name;
		}
}

/**
 * Construct the blocks required by the flyout for the variable category.
 * @param {!Array.<!Blockly.Block>} blocks List of blocks to show.
 * @param {!Array.<number>} gaps List of widths between blocks.
 * @param {number} margin Standard margin width for calculating gaps.
 * @param {!Blockly.Workspace} workspace The flyout's workspace.
 */
Blockly.VariablesBoolean.flyoutCategory = function(blocks, gaps, margin, workspace) {
  var variableList = Blockly.VariablesBoolean.allVariablesBoolean();
  variableList.sort(goog.string.caseInsensitiveCompare);
  // In addition to the user's VariablesBoolean, we also want to display the default
  // variable name at the top.  We also don't want this duplicated if the
  // user has created a variable of the same name.
  variableList.unshift(null);
  var defaultVariable = undefined;
  for (var i = 0; i < variableList.length; i++) {
    if (variableList[i] === defaultVariable) {
      continue;
    }
    var getBlock = Blockly.Blocks['VariablesBoolean_get'] ?
        Blockly.Block.obtain(workspace, 'VariablesBoolean_get') : null;
    getBlock && getBlock.initSvg();
    var setBlock = Blockly.Blocks['VariablesBoolean_set'] ?
        Blockly.Block.obtain(workspace, 'VariablesBoolean_set') : null;
    setBlock && setBlock.initSvg();
    if (variableList[i] === null) {
      defaultVariable = (getBlock || setBlock).getVars()[0];
    } else {
      getBlock && getBlock.setFieldValue(variableList[i], 'VAR');
      setBlock && setBlock.setFieldValue(variableList[i], 'VAR');
    }
    setBlock && blocks.push(setBlock);
    getBlock && blocks.push(getBlock);
    if (getBlock && setBlock) {
      gaps.push(margin, margin * 3);
    } else {
      gaps.push(margin * 2);
    }
  }
};

/**
* Return a new variable name that is not yet being used. This will try to
* generate single letter variable names in the range 'i' to 'z' to start with.
* If no unique name is located it will try 'i1' to 'z1', then 'i2' to 'z2' etc.
* @return {string} New variable name.
*/
Blockly.VariablesBoolean.generateUniqueName = function() {
  var variableList = Blockly.Variables.allVariables();
  var newName = '';
  if (variableList.length) {
    variableList.sort(goog.string.caseInsensitiveCompare);
    var nameSuffix = 0, potName = 'i', i = 0, inUse = false;
    while (!newName) {
      i = 0;
      inUse = false;
      while (i < variableList.length && !inUse) {
        if (variableList[i].toLowerCase() == potName) {
          // This potential name is already used.
          inUse = true;
        }
        i++;
      }
      if (inUse) {
        // Try the next potential name.
        if (potName[0] === 'z') {
          // Reached the end of the character sequence so back to 'a' but with
          // a new suffix.
          nameSuffix++;
          potName = 'a';
        } else {
          potName = String.fromCharCode(potName.charCodeAt(0) + 1);
          if (potName[0] == 'l') {
            // Avoid using variable 'l' because of ambiguity with '1'.
            potName = String.fromCharCode(potName.charCodeAt(0) + 1);
          }
        }
        if (nameSuffix > 0) {
          potName += nameSuffix;
        }
      } else {
        // We can use the current potential name.
        newName = potName;
      }
    }
  } else {
    newName = 'i';
  }

  /*boolean_variables[boolean_variables.length] = newName;
  if(boolean_variables.indexOf(newName) < 0) {
		boolean_variables[boolean_variables.length] = newName;
	}*/
  return newName;
};
