#!/bin/bash
set -e

SCRIPTS_FOLDER=`dirname $0`

cd $SCRIPTS_FOLDER/..

if [ -z "$EXCLUDE_ANDROID" ]
then
  export ANDROID_LOCAL_FILE="./ManifoldJS/cordova/platforms/android/build/outputs/apk/android-debug.apk"
  ANDROID_TESTDROID_FILE="$(node -pe 'JSON.parse(process.argv[1]).value.uploads.myAppFile' "$(curl --user "$TESTDROID_KEY": -F myAppFile=@""$ANDROID_LOCAL_FILE"" https://appium.testdroid.com/upload)")"
  node ./tests/tests.js appium android $ANDROID_TESTDROID_FILE
fi
if [ -z "$EXCLUDE_IOS" ]
then
  export IOS_LOCAL_FILE="./ManifoldJS/cordova/platforms/ios/build/device/ManifoldJS.ipa"
  IOS_TESTDROID_FILE="$(node -pe 'JSON.parse(process.argv[1]).value.uploads.myAppFile' "$(curl --user "$TESTDROID_KEY": -F myAppFile=@""$IOS_LOCAL_FILE"" https://appium.testdroid.com/upload)")"
  node ./tests/tests.js appium ios $IOS_TESTDROID_FILE
fi
