#!/bin/bash

cd "$(dirname "$0")"
cd instagram
rm -r assemblique

instaloader assemblique --comments

cd -
python assemble.py
python index.py