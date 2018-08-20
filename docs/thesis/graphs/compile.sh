#!/bin/bash

$1 $2.dot -Tpng -o $2.png && feh -Z $2.png
