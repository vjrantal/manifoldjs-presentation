#!/bin/bash
set -e

function finish {
  for job in `jobs -p`; do
    kill $job
  done
}

trap finish SIGINT SIGTERM EXIT

SCRIPTS_FOLDER=`dirname $0`

$SCRIPTS_FOLDER/../node_modules/.bin/selenium-standalone start &
node $SCRIPTS_FOLDER/../server.js &

node $SCRIPTS_FOLDER/../tests/tests.js selenium
