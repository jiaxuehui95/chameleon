Chameleon是基于P5.js实现的web端小游戏，主要使用平台是手机，跑酷类游戏，人物需要在跑道间跳跃的同时要根据跑道的颜色更换自己的颜色，受八分贝游戏的灵感，我们用晃动手机来使人物跳跃（重力传感器），用声音控制人物颜色的变化（声音传感器）

![chameleon](/img/chameleon1.png)
<!--more-->
项目地址：[https://github.com/jiaxuehui95/chameleon](https://github.com/jiaxuehui95/chameleon)

pc端本地运行后无法使用重力传感器，手机访问游戏需要https支持
使用，在同一局域网环境下使用ngrok插件创建tunnel访问
ngrok：[https://ngrok.com/](https://ngrok.com/)

`$ ./ngrok http 80`

![chameleon2](/img/chameleon2.jpeg)
