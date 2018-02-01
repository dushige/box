#!/bin/bash
# author: jarone
# date: 2018-01-31

YOUR_PATH=yourpath

ALL_MODULES=`ls $YOUR_PATH`

# checks if branch has something pending
function parse_git_dirty() {
  git diff --quiet --ignore-submodules HEAD 2>/dev/null; [ $? -eq 1 ] && echo "*"
}

# gets the current git branch
function parse_git_branch() {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
}

for module in ${ALL_MODULES[*]}
do
  echo "=== $module === begin:"
  cd $YOUR_PATH$module

  GIT_BRANCH=$(parse_git_branch)

  if [ $GIT_BRANCH != 'master' ]
  then
    git checkout master
  fi

  git pull
  cd $YOUR_PATH
  echo "done."
  echo ''
done
