#!/bin/bash
set -e

SCRIPTS_FOLDER=`dirname $0`

cd $SCRIPTS_FOLDER/..

rm -rf ManifoldJS

STAGING_URL=https://manifoldjs-presentation-staging.azurewebsites.net

node node_modules/manifoldjs/manifoldjs.js -p ios,android $STAGING_URL

# A hackish workaround to build directly with cordova commands
# because manifoldjs builds only emulator builds
cd ManifoldJS/cordova
if [ -z "$EXCLUDE_ANDROID" ]
then
  ../../node_modules/manifoldjs/node_modules/manifoldjs-cordova/node_modules/.bin/cordova build android --device
fi
if [ -z "$EXCLUDE_IOS" ]
then
  ../../node_modules/manifoldjs/node_modules/manifoldjs-cordova/node_modules/.bin/cordova build ios --device
fi
