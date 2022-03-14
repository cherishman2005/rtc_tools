# /etc/docker/daemon.json

vi /etc/docker/daemon.json 
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
