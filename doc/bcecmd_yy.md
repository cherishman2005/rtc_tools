# bos上传下载

bcecmd_yy是定制化的针对百度bos的上传下载工具。

只针对bucket: yy-ai-train

针对百度线上bos bucket: yy-ai-train训练数据集系统。 如有需要上传、下载 自己的新数据，可以暂时试用起来。

bos路径：

（1） bos:/yy-ai-train/dataset/<username>   个人路径

（2） bos:/yy-ai-train/dataset/projects/ai/cv   项目路径

下载指令
```
wget https://yy-ai-train.bj.bcebos.com/seaweedfs/bcecmd/v0.3.1-yy/bcecmd_yy
```

## 配置bos

无需配置ak,sk

示例：

```
export AI_TRAIN_TOKEN=xxx && export BOS_USER=zhangbiwu
```

| Name      |        | Description                 |
| --------- | ------ | --------------------------- |
| BOS_USER |  | 用户名称username      | 
| AI_TRAIN_TOKEN |  | token（待补充）        |

【注】由于李伟、崔启文的鉴权后台功能还未上线；暂时BOS_USER填写自己的名字，AI_TRAIN_TOKEN随便填写一个字符串。


## bos上传

- [bos上传参数说明](https://cloud.baidu.com/doc/BOS/s/hjwvyqds3#object%E4%B8%8A%E4%BC%A0)

### 同步批量上传示例
```
bcecmd bos sync trainset bos:/yy-ai-train/dataset/zhangbiwu/trainset
```

| Name      |        | Description                 |
| --------- | ------ | --------------------------- |
| trainset |  | 本地文件夹路径      |
| bos:/yy-ai-train/dataset/zhangbiwu/trainset |  | bos路径（参看控制台页面）        |


### 上传单个文件示例

```
bcecmd bos cp 2314776959-1280x720.yuv bos:/yy-ai-train/dataset/zhangbiwu
```

| Name      |        | Description                 |
| --------- | ------ | --------------------------- |
| 2314776959-1280x720.yuv|  | 本地文件路径      |
| bos:/yy-ai-train/dataset/zhangbiwu |  | bos路径（参看bos bucket控制台页面）        |


## bos下载
- [bos下载参数说明](https://cloud.baidu.com/doc/BOS/s/hjwvyqds3#object%E4%B8%8B%E8%BD%BD)

### 同步批量下载操作示例
```
bcecmd bos sync bos:/yy-ai-train/dataset/zhangbiwu/third_party/  third_party
```

| Name      |        | Description                 |
| --------- | ------ | --------------------------- |
| bos:/yy-ai-train/dataset/zhangbiwu/third_party/|  | bos路径（参看bucket控制台页面）        |
| third_party|  | 本地文件夹路径      |

### 下载单个文件操作示例

```
bcecmd bos cp bos:/yy-ai-train/dataset/zhangbiwu/2314776959-1280x720.yuv  2314776959-1280x720.yuv
```

| Name      |        | Description                 |
| --------- | ------ | --------------------------- |
| bos:/yy-ai-train/dataset/zhangbiwu/2314776959-1280x720.yuv |  | bos文件路径（参看bos bucket控制台页面）        |
| 2314776959-1280x720.yuv|  | 本地文件路径      |

# FAQ

## cp -r

执行bcecmd bos cp /tmp/dir/ bos:/bucket/prefix[/] -r命令时，本地为目录时bos路径结尾不论是否有”/”都会以prefix为目录名在bos端新建目录； 并将dir中Object全部拷贝到prefix目录下。

## 操作示例

```
wget https://yy-ai-train.bj.bcebos.com/seaweedfs/bcecmd/v0.3.1-yy/bcecmd_yy


chmod 777 bcecmd_yy

export AI_TRAIN_TOKEN=123456 && export BOS_USER=wangpu

./bcecmd_yy bos sync bos:/yy-ai-train/dataset/projects/ai/cv/video-content-security/terrorism-recognition/pic_danger  pic_danger > pic_danger.log 2>&1 &
```
