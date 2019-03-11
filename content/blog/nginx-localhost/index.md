---
layout: post
title: "URLs amigables utilizando NGINX y docker"
date: 2018-12-4 21:31:00
categories: nginx docker 
author: sergio
path: "/nginx-docker-first-version/"
draft: false
---

## Introducción

Todos los programadores web conocemos perfectamente el concepto de qué es *localhost*, ya que diariamente trabajamos con el para acceder y probar nuestros sitios web.

> *localhost* es el nombre del equipo local o _"este equipo"_ el cual tiene la dirección IP _127.0.0.1_.

Como todos sabemos, si ingresamos la URL http://localhost/ en el navegador estaremos accediendo al puerto 80 del equipo local y si tenemos un servidor web como [apache][apache] o [nginx][nginx] escuchando en ese puerto es probable que el navegador web nos muestre el sitio web que se encuentre configurado o en su defecto una página de prueba del servidor web.

Y bueno, no es muy común ejecutar aplicaciones en el puerto 80 cuando estamos programando, generalmente utilizamos otro puerto como el 3000 o similares, esto nos proporciona la ventaja de ejecutar varias aplicaciones en el equipo local sin necesidad de tener un servidor remoto para la ejecución de cada aplicación.

Un caso muy común hoy en día es el programar el frontend y el backend como proyectos separados, cada uno ejecutandose en un puerto independiente, lo que nos lleva a tener que utilizar dos URLs del tipo http://localhost:3000, pero, _¿no sería genial poder utilizar algo como http://sergio.com/ para acceder al frontend y http://api.sergio.com para la API/backend?_ Podemos hacerlo 😎.

## Instalar nginx

### Necesitamos

- ubuntu v18.04.2 LTS
- docker v18.09.3
- docker-compose 1.23.2
- git 2.17.1


Vamos a comenzar instalando `nginx` utilizando los siguientes comandos en la terminal.

```shell
sudo apt-get update
sudo apt-get install nginx
```

Después de la instalación procedemos a ingresar en el navegador web la url [http://localhost](http://localhost) donde deberás ver lo siguiente:

> TODO: agregar imagen del resultado de entrar a http://localhost



## Primeros pasos

Como ya lo mencionamos, _localhost_ es el **hostname** del equipo local que direcciona — o utiliza internamente — la dirección IP __127.0.0.1__, este direccionamiento se realiza a nivel sistema operativo gracias a un archivo de configuración de nombre **hosts** que dependiendo de cada sistema operativo se encuentra en [diferente ubicación][host-file-location], este archivo es del tipo texto plano, lo que significa que lo puedes vizualizar y modificar con tu editor de textos preferido.

Minimamente, este archivo contiene algo similar a lo siguiente:

```hosts
127.0.0.1  localhost
::1        localhost
```

La anterior configuración es tan simple como decir que la dirección IP _127.0.0.1_ es utilizada por el hostname _localhost_, si agregamos cualquier hostname después del hostname _localhost_ estaremos mapeando esa palabra hacia la dirección IP local 127.0.0.1.

Vamos, intenta agregar el hostname _mi-pagina-local.com_ y luego ingresa a esa URL en el navegador.

```hosts
127.0.0.1  localhost mi-pagina-local.com
::1        localhost
```

Verás que se muestra lo mismo que al entrar a http://localhost/.

Ahora bien, podemos sacar ventaja de esto para dejar de acceder a las aplicaciones web utilizando http://localhost:3000/ y podemos utilizar algo como lo que mencioné anteriormente. Vamos a agregar una nueva configuración al archivo hosts para mapear la dirección IP local con unos nuevos hostnames:

```hosts
127.0.0.1  localhost mi-pagina-local.com
::1        localhost

# Configuración de host para aplicaciones
127.0.0.1  tiendita.com
127.0.0.1  api.tiendita.com
```

> **NOTA: El archivo hosts es un archivo del sistema operativo, por lo que si quieres modificarlo deberás hacerlo con permisos de administrador o root.**

Probemos acceder a http://tiendita.com:3000/ o http://api.tiendita.com:3001/ en el navegador web, veremos lo mismo que http://localhost/. Los puertos no parecen nada a lo que podamos llamar URLs amigables.


## Proxy Pass — o redireccionando la URL —

NGINX permite redireccionar una URL hacia otra...


![Barra de progreso de npm](./nginx-success.png)

```shell
cd /etc/nginx
```

```conf
user www-data;
worker_processes auto;
pid /run/nginx.pid;
include /etc/nginx/modules-enabled/*.conf;

events {
	worker_connections 768;
	# multi_accept on;
}

http {

	##
	# Basic Settings
	##

	sendfile on;
	tcp_nopush on;
	tcp_nodelay on;
	keepalive_timeout 65;
	types_hash_max_size 2048;
	# server_tokens off;

	# server_names_hash_bucket_size 64;
	# server_name_in_redirect off;

	include /etc/nginx/mime.types;
	default_type application/octet-stream;

	##
	# SSL Settings
	##

	ssl_protocols TLSv1 TLSv1.1 TLSv1.2; # Dropping SSLv3, ref: POODLE
	ssl_prefer_server_ciphers on;

	##
	# Logging Settings
	##

	access_log /var/log/nginx/access.log;
	error_log /var/log/nginx/error.log;

	##
	# Gzip Settings
	##

	gzip on;

	# gzip_vary on;
	# gzip_proxied any;
	# gzip_comp_level 6;
	# gzip_buffers 16 8k;
	# gzip_http_version 1.1;
	# gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;

	##
	# Virtual Host Configs
	##

	include /etc/nginx/conf.d/*.conf;
	include /etc/nginx/sites-enabled/*;
}


#mail {
#	# See sample authentication script at:
#	# http://wiki.nginx.org/ImapAuthenticateWithApachePhpScript
# 
#	# auth_http localhost/auth.php;
#	# pop3_capabilities "TOP" "USER";
#	# imap_capabilities "IMAP4rev1" "UIDPLUS";
# 
#	server {
#		listen     localhost:110;
#		protocol   pop3;
#		proxy      on;
#	}
# 
#	server {
#		listen     localhost:143;
#		protocol   imap;
#		proxy      on;
#	}
#}
```

[apache]: https://httpd.apache.org/
[nginx]: https://nginx.org/
[host-file-location]: https://en.wikipedia.org/wiki/Hosts_(file)#Location_in_the_file_system
