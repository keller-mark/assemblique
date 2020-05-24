#!/bin/bash

cd "$(dirname "$0")"
cd instagram

instaloader assemblique --comments --fast-update --no-videos

cd -
python assemble.py
python index.py