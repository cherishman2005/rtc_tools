# rsync

如果本机或者远程计算机没有安装 rsync，可以用下面的命令安装。

ubuntu安装
```
sudo apt-get install rsync
```
注意，传输的双方都必须安装 rsync。

## 源主机和目标机均安装rsync


### 源主机配置

（1）源服务器配置：
修改配置让rsync以守护进程方式运行
```
root@ubuntu1:~# vim /etc/default/rsync 
RSYNC_ENABLE=true
```

（2）/etc/rsyncd.conf配置
vim /etc/rsyncd.conf 
```
uid = www-data
gid = www-data
pid file=/etc/rsyncd.pid
log file = /var/log/rsyncd.log

[zhangbiwu100]
    path=/data12/dataset/chenzenghai
    auth users = zhangbiwu
    read only = no
    strict modes = yes
    secrets file = /etc/rsyncd.scr
    hosts allow= 10.25.66.90 10.20.170.98
    hosts deny = *
```

（3）/etc/rsyncd.scr配置
```
zhangbiwu:123456
```
设置权限
```
chomd 600 /etc/rsyncd.scr
```

（4）源主机启动rsync
```
/etc/init.d/rsync start
```
或者
```
rsync --daemon --config=/etc/rsyncd.conf
```

### 目标主机主机配置
（1）/etc/rsyncd.pass配置
```
123456
```
设置权限
```
chomd 600 /etc/rsyncd.pass
```

### 在目录主机运行 同步指令

执行同步指令：
```
rsync -avzP --password-file=/etc/rsyncd.pass   zhangbiwu@10.20.170.90::zhangbiwu100 /data12/video > rsync.log &
```

# 注意事项

## 开启873端口
```
rsync: failed to connect to 10.10.10.10: Connection timed out (110)
rsync error: error in socket IO (code 10) at clientserver.c(124) [receiver=3.0.6]
```
检查服务端server服务是否正常启动，检查端口防火墙，iptables打开873端口
如果服务端是windows server则在防火墙入站规则中增加873端口
如果服务端是Linux则先检查服务是否启动
```
#ps aux | grep rsync
```
然后开启873端口
```
#iptables -A INPUT -p tcp --dport 873 -j ACCEPT
```
开启873端口

# 参考链接

- [rsync 用法教程](https://www.ruanyifeng.com/blog/2020/08/rsync.html)

- [rsync常见问题及解决办法](https://blog.whsir.com/post-392.html)
