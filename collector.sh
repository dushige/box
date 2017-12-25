#!/bin/bash
# author: jarone
# date: 2017-12-25

LOG_PATH=/var/log
LOG_FILE="$LOG_PATH/$1.log"
LOG_GZ_FILE="$LOG_PATH/$1.log.gz"
CUR_LOG=""
USE_ZGREP=true

if [ ! $1 ]
then
  echo 'exec failed: need first param. for example: /tmp/jarone/collector.sh 20170912'
  exit 1
fi

if [[ ! -f $LOG_FILE && ! -f $LOG_GZ_FILE ]]
then
  echo "exec failed: the log of $1 is expired(the log file has been deleted)."
  exit 1
fi

if [[ -f $LOG_FILE && ! -f $LOG_GZ_FILE ]]
then
  CUR_LOG=$LOG_FILE
  USE_ZGREP=false
elif [[ ! -f $LOG_FILE && -f $LOG_GZ_FILE ]]
then
  CUR_LOG=$LOG_GZ_FILE
fi

controllers=(
  'user'
)

actions=(
  'list get craete'
)

index=0
echo
echo '========================================================'
echo "date: $1"
echo "current log: $CUR_LOG"

for controller in ${controllers[*]}
do
  echo "controller: "$controller

  cur_actions=(${actions[$index]})

  for action in ${cur_actions[*]}
  do
    echo " action: ${action}"
    if [ $USE_ZGREP ]
    then
      zgrep "REQUEST: \/api\/v1\/${controller}\/${action} " $CUR_LOG | wc -l
    else
      grep "REQUEST: \/api\/v1\/${controller}\/${action} " $CUR_LOG | wc -l
    fi
  done

  index=`expr $index + 1`
  echo
done
echo '========================================================'
echo
