#!/bin/bash


github() {
   git config --global user.name sunnychan
   git config --global user.email sunnnychan@gmail.com
   git config core.ignorecase false
   git $@
}
github add . && github commit -m "sunnychan" && github push
