# oss与bos简单比较

## nodejs流式上传

**阿里oss是支持nodejs的 流式上传**

![image](https://user-images.githubusercontent.com/17688273/151172532-173c344b-9b31-425a-ba35-736bab8c0a89.png)


**百度bos nodejs支持不够完善，nodejs版本不支持流式上传**

## 通过数字签名获取URL

**阿里nodejs支持 数字签名获取URL**

https://help.aliyun.com/document_detail/32077.html?spm=a2c4g.11186623.0.0.d1a53c6bV7TjCK

阿里的nodejs有  获取文件下载URL 的接口
![image](https://user-images.githubusercontent.com/17688273/151175756-fac52d23-6376-4742-b995-ab1f729a4dfe.png)

**百度nodejs支持 获取URL**

generatePresignedUrl 这个生成带签名的url

# 小结

## 局限性分析

（1）百度bos对象存储：

fluent-ffmepg抽帧截图 bos上传功能 bos需要 自行开发 将stream字节流 转为 buffer然后才支持上传。

（2）阿里oss对象存储 支持流式上传。-- oss产品比较成熟


## nodejs 对接 第三方服务非常方便： tob服务sdk-api必须非常成熟才行

nodejs开发电商、社交产品开发效率高。

互联网 接tob的必备功能。 文件，图片 上传 下载必须支持的。

