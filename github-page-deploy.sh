#!/bin/bash

github() {
   git config --global user.name sunnnychan
   git config --global user.email sunnnychan@gmail.com
   git config core.ignorecase false
   git $@
}

cd .vuepress/dist && rm -rf .git && github init && github add . && github commit -m "sunnychan" && github push -f https://github.com/SC-CS-KS/KS-GrowthHacking master:gh-pages 