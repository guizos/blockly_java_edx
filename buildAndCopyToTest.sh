#!/bin/bash

python build.py
cp -f java_compressed.js ../testWeb/java_compressed.js
cp -f javascript_compressed.js ../testWeb/javascript_compressed.js
cp -f blockly_compressed.js ../testWeb/blockly_compressed.js
cp -f blocks_compressed.js ../testWeb/blocks_compressed.js
cp -f msg/js/en.js ../testWeb/en.js
