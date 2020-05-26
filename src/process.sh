#!/bin/bash

cd "$(dirname "$0")"
cd instagram

instaloader assemblique --fast-update --comments --no-videos

cd -
python assemble.py
python index.py