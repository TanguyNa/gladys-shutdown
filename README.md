Shutdown module for gladysproject
=======================


What is Gladys project
-------------

**Website :** [https://gladysproject.com](http://gladysproject.com) <br>
**Community :** [https://community.gladysproject.com/](https://community.gladysproject.com/)


The Module
-------------

This module add the possibility to Gladys to shutdown and reboot itself, by sending a system command to the OS.

Prerequisites
-------------

- [Gladys](http://gladysproject.com) ( tested with v3.7.1 )

 
Getting Started
---------------
#### Gladys parameters

Add followings parameters in gladys :

For my raspberry I use following parameters but you can change them :
```
SHUTDOWN_CMD=sudo shutdown
```

```
REBOOT_CMD=sudo reboot
```


#### Add sentences to the database

```
mysql -uroot -proot
```

```
use gladys;
```

```
insert into sentence(text, label, service, language, status) values('Gladys éteins-toi', 'shutdown', 'shutdown', 'fr', 'approved');
insert into sentence(text, label, service, language, status) values('Gladys redémarre', 'reboot', 'shutdown', 'fr', 'approved');
```

#### Install the module on gladys

Nom : shutdown 
Version : 0.0.1 
URL git : https://github.com/TanguyNa/gladys-shutdown
slug : shutdown


#### Restart Gladys


####

Links
-------------

- [Twitter](https://twitter.com/TanguyNa)
