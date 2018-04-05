Chameleon是基于P5.js实现的web端小游戏，主要使用平台是手机，跑酷类游戏，人物需要在跑道间跳跃的同时要根据跑道的颜色更换自己的颜色，受八分贝游戏的灵感，我们用晃动手机来使人物跳跃（重力传感器），用声音控制人物颜色的变化（声音传感器）

![chameleon](/img/chameleon1.png)
<!--more-->
项目地址：[https://github.com/jiaxuehui95/chameleon](https://github.com/jiaxuehui95/chameleon)

pc端本地运行后无法使用重力传感器，手机访问游戏需要https支持
使用，在同一局域网环境下使用ngrok插件创建tunnel访问
ngrok：[https://ngrok.com/](https://ngrok.com/)

`$ ./ngrok http 80`

![chameleon2](/img/chameleon2.jpeg)

Conception et Utilisation 

Notre projet est est un petit jeu sur portable qui s'appelle Chameleon.

On concentre sur l'interaction pour qu'on puisse utiliser non seulement le son mais aussi la gestion pour jouer le jeu. Le petit garçon ne doit pas tomber dans la piège et la couleur de garçon ne doit pas avoir un conflit avec la couleur du rectangle. Le rectangle apparait par hasard et pour éviter l'obstacle le joueur balance le portable pour que le petit garçon puisse sauter et en même temps, le joueur produis du son pour changer la couleur de petit garçon si la couleur actuelle n'est pas pareil avec la couleur du rectangle prochaine. Et si le joueur échoue, le jeu termine et il peut recommencer.

Technologie 

On utilise P5.js pour réaliser notre projet,sur PC, l'interaction est de taper le touch "UP" pour sauter, et le microphone qui recevoir le son pour changer la couleur du rôle, mais sur portable, P5.js nous permet d'avoir des interactions plus intéressantes, on secouer le portable pour le rôle puisse sauter. pour jouer sur portable, il faut lancer sous HTTPS, sinon l'utilisateur n'a pas de droit d'utiliser le microphone.

Référence 

-"Chameleon": Un jeu vidéo sur App store
