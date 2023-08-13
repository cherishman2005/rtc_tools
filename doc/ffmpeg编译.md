# ffmpeg编译

ffmpeg4.4编译

## 编译问题记录

### 问题1

```
nasm/yasm not found or too old. Use --disable-x86asm for a crippled build.
```

解决方法
```
wget http://www.tortall.net/projects/yasm/releases/yasm-1.3.0.tar.gz

tar -xzvf yasm-1.3.0.tar.gz

./configure

make

make install
```
