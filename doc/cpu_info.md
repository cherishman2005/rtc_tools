#查看CPU信息（型号）
```
[root@AAA ~]# cat /proc/cpuinfo | grep name | cut -f2 -d: | uniq -c
     24         Intel(R) Xeon(R) CPU E5-2630 0 @ 2.30GHz
```

# 查看物理CPU个数
```
[root@AAA ~]# cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
2
``

# 查看每个物理CPU中core的个数(即核数)
```
[root@AAA ~]# cat /proc/cpuinfo| grep "cpu cores"| uniq
cpu cores    : 6
```

# 查看逻辑CPU的个数
```
[root@AAA ~]# cat /proc/cpuinfo| grep "processor"| wc -l
24
```
