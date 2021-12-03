#!/bin/bash

list=$1
echo "list: ${list}"

while read line; do
    echo $line
    path=`echo $line | awk -F':' '{print $1}'`
    filename=${line##*/}

    echo "path:${path}"
    echo "file:${filename}"
    echo "${filename}" >> file.txt
done < ${list}
