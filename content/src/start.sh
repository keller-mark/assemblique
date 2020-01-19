#!/bin/bash

cd "$(dirname "$0")"
cd instagram
rm -r assemblique

instaloader assemblique --comments --count 10

cd -
python assemble.py