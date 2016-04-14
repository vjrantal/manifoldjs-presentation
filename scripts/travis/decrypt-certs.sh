#!/bin/bash
set -e

cd `dirname $0`

openssl enc -aes-256-cbc -k "$ENCRYPTION_KEY" -d -p -in apple.cer.enc -out apple.cer -base64
openssl enc -aes-256-cbc -k "$ENCRYPTION_KEY" -d -p -in dist.cer.enc -out dist.cer -base64
openssl enc -aes-256-cbc -k "$ENCRYPTION_KEY" -d -p -in dist.p12.enc -out dist.p12 -base64
openssl enc -aes-256-cbc -k "$ENCRYPTION_KEY" -d -p -in profile/46409712-7cae-49d1-a23a-ed351790750d.mobileprovision.enc -out profile/46409712-7cae-49d1-a23a-ed351790750d.mobileprovision -base64
