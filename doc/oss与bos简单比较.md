# oss与bos简单比较


阿里oss是支持nodejs的 流式上传

![image](https://user-images.githubusercontent.com/17688273/151172532-173c344b-9b31-425a-ba35-736bab8c0a89.png)


百度bos nodejs支持不够完善，nodejs版本不支持流式上传

# 局限性分析

（1）百度bos对象存储：

fluent-ffmepg抽帧截图 bos上传功能 bos需要 自行开发 将stream字节流 转为 buffer然后才支持上传。

（2）阿里oss对象存储 支持流式上传。-- oss产品比较成熟
