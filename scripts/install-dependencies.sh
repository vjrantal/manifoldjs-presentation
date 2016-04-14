#!/bin/bash
set -e

SCRIPTS_FOLDER=`dirname $0`

cd $SCRIPTS_FOLDER/..
npm install
./node_modules/.bin/selenium-standalone install --silent
