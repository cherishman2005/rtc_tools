#!/bin/bash

filelist="file.txt"
pathlist="zengbaoming.txt"
echo "filelist: ${filelist}  pathlist: ${pathlist}"

exec 3<"${filelist}"
exec 4<"${pathlist}"
while read file<&3 && read path<&4
do
        #echo $file $path
        
        echo "bcecmd_yy bos cp $file bos:/yy-ai-train/$path >> ${pathlist}_bcecmd.log 2>&1 &" >> cmd.sh
done

