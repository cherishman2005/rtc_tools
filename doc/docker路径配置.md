# /etc/docker/daemon.json

**vi /etc/docker/daemon.json**
```
{
    "data-root": "/data/docker",
    "runtimes": {
        "nvidia": {
            "path": "nvidia-container-runtime",
            "runtimeArgs": []
        }
    }
}
```

保存退出，然后重启 docker 服务：
```
systemctl restart docker
```

# 参考链接

- [nvidia-docker安装](https://cloud.tencent.com/developer/article/1541709)
