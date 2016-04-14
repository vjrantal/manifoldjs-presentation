#!/bin/bash
set -ev

./scripts/install-dependencies.sh
# Do not run with Selenium in AppVeyor due
# having getting an error when doing so.
if [ -z "$APPVEYOR" ]
then
  ./scripts/test-selenium.sh
fi
./scripts/deploy-staging.sh
./scripts/build-manifoldjs.sh
./scripts/test-appium.sh
