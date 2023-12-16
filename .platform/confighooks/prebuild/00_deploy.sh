#!/bin/sh

cd /var/app/staging

npm install next@latest react@latest react-dom@latest

sudo -u webapp npm install

npm run build