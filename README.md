# rtc_tools

## ffmpeg

April 8th, 2021, FFmpeg 4.4 "Rao"

解压
```
tar -xf ffmpeg-4.4.tar.xz
```

## ffmpeg+gpu

```
watch -n 1 nvidia-smi
```

```
nvidia-smi topo -m
```

### 查看显卡型号

```
# lspci | grep -i vga
03:00.0 VGA compatible controller: ASPEED Technology, Inc. ASPEED Graphics Family (rev 41)
```

```
# nvidia-smi -L
GPU 0: Tesla T4 (UUID: GPU-53812c38-f053-fa77-e7d0-bc49d38d0e4a)
GPU 1: Tesla T4 (UUID: GPU-05ce936f-203b-6231-b92b-37c7e9b02ece)
```

## nvidia驱动卸载

```
sudo apt-get purge nvidia*
```
如果nvidia-smi还能查询到，表明卸载不成功。

```
sh nvidia.run --uninstall
```
其中nvidia.run代表是安装驱动时的.run文件，然后根据提示进行操作就行。

## oss与bos

- [oss与bos简单比较](./doc/oss与bos简单比较.md)
- 
- [bos上传下载](https://github.com/cherishman2005/rtc_tools/wiki/bos%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD)


## 查询cpu信息

- [查询cpu信息](doc/cpu_info.md)

## linux top查询

- [Linux - top命令查看服务器CPU与内存占用](https://blog.csdn.net/J080624/article/details/80526310)

## libcurl编译出libcurl.a

- [https://github.com/cherishman2005/rtc_tools/issues/17](https://github.com/cherishman2005/rtc_tools/issues/17)

# thunder-sdk错误日志

Thunder_4536_2022-03-18_11-55-35_504.zip

# FAQ

## md5检测二进制文件是否相同

```
md5sum libyy_audio_mixer_static.a
```

## tar解压到指定路径

```
tar -C /data9/dataset -xzvf jiangmingchao.tar.gz > jiangmingchao_tar.log &
```

## rsync同步工具

- [rsync同步工具](./doc/rsync.md)


## 应用中的 stream

在深入了解 http 模块内部的基本原理后，可以想想我们在应用场景中，可以利用 stream（流）做到哪些事情可以尝试自己实现一下平时接触到的一些应用，如：

* http-proxy-middleware转发中间件
* 大文件流式上传
* 服务流媒体播放服务

## 主机除了有防火墙，还有iptables

iptables清空指令：
```
iptables -F
```

## 查询域名对应的ip

linux环境查询dns指令： nslookup
```
nslookup www.**.com    
```

```
Server:         10.254.254.254
Address:        10.254.254.254#53

Non-authoritative answer:
Name:   www.**.com
Address: *.*.109.66
```

# 参考链接

- [https://github.com/yingchengpa/nginx-http-flv-module](https://github.com/yingchengpa/nginx-http-flv-module)

