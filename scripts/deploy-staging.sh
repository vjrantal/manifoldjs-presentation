#!/bin/bash
set -e

SCRIPTS_FOLDER=`dirname $0`

cd $SCRIPTS_FOLDER/..

# We redirect any output to /dev/null to hide
# any sensitive credential data that might otherwise be exposed.
git push --force --quiet "https://${GIT_USER}:${GIT_PASSWORD}@${GIT_TARGET}" staging:master > /dev/null 2>&1
