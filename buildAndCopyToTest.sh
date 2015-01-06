#!/bin/bash

python build.py
cp -f java_compressed.js ../testBlocklyDoppio/blockly/java_compressed.js
cp -f blockly_compressed.js ../testBlocklyDoppio/blockly/blockly_compressed.js
cp -f blocks_compressed.js ../testBlocklyDoppio/blockly/blocks_compressed.js
cp -f msg/js/en.js ../testBlocklyDoppio/blockly/en.js
