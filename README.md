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

## bos
- [bos上传下载](https://github.com/cherishman2005/rtc_tools/wiki/bos%E4%B8%8A%E4%BC%A0%E4%B8%8B%E8%BD%BD)


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
