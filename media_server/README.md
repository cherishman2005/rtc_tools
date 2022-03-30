# stopStreamThread/startStreamThread不符合预期

```
Mar 30 16:38:11 info stream_server_v2_d.t03301606.1287bd6f.r[530]: [stream_handler.cpp::207::stopStreamThread]: stop stream thread: taskId=2786225490-1382736878
```

```
Mar 30 16:38:43 info stream_server_v2_d.t03301606.1287bd6f.r[530]: [stream_handler.cpp::192::startStreamThread]: stream with thread still running, retry later: taskId=2786225490-1382736878
```

定时10s，但是这期间没有定时器触发。同一个taskId的线程停了，但是还没有将Thread-Manager里面的该成员摘掉。
