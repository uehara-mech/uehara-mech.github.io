#/bin/sh
year=$(date "+%Y")
month=$(date "+%m")
day=$(date "+%d")
hour=$(date "+%H")
minute=$(date "+%M")
second=$(date "+%S")
echo export const date_now = \"$year/$month/$day $hour:$minute:$second\"\; > ./src/date.js