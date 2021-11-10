# netcat传输文件


开启目标机监听
```
nc -lp 8888 > test.mp4
```

发送到目标机
```
nc -nv 10.20.170.98  8888 <test.mp4 -q 1
```
