---
layout: post
title: "Una breve historia de Debian"
creation_date: "2020-07-04T12:48:00.00Z"
date: "2020-07-04T12:48:00.00Z"
description: Debian fué uno de los primeros sistemas operativos creado por la frustración de los sistemas operativos actuales.
tags: ['post']
categories: debian operating-system
author: sergio
path: "/una-breve-historia-de-debian/"
permalink: "/una-breve-historia-de-debian/index.html"
prism: []
draft: true
---

Debian es una distribución Linux compuesta de software libre y código abierto,
esta distribución es desarrollada por una comunidad llamada **Proyecto Debian**,
que son un conjunto de voluntarios a nivel mundial cuyo esfuerzo es el de
producir una distribución de un sistema operativo que sea compuesto enteramente
por software libre, de todos los productos en los que la comunidad trabaja, el
principal es la distribución de software Debian GNU/Linux, la cual incluye el
kernel del sistema operativo Linux y miles de aplicaciones pre-empaquetadas[^1].

## Los inicios

Todo se remonta al año de 1993, año en el que la _Softlanding Linux System_
(SLS) era la _"distribución"_ de linux más utilizada, ya que fué una de las
primeras en realmente existir como distribución, fué fundada en Mayo de 1992 por
Peter MacDonald y se ganó la fama de ser muy problemática ya que contenia una
gran cantidad de bugs reportados por sus usuarios. Tiempo después, Patrick
Volkerdin tomó _SLS_ como sistema operativo base para comenzar las primeras
versiones de lo que hoy es la distribución de _Linux Slackware_[^2].

En el mismo año de 1993, un estudiante de ingeniería de nombre Ian Murdock,
frustrado por todos los problemas presentados en _SLS_ descidió crear su propio
sistema operativo _desde cero_. Ian anunció Debian[^3] el 16 de agosto de 1993
donde lo nombró como _The Debian Linux Release_, ya que por aquellos tiempos el
concepto de distribución era prácticamente nuevo.

## Un nombre creativo

En su momento Ian tenía una novia de nombre _Debra Lynn_ con la que tiempo
después se casó. Ian descidió tomar las primeras silabas de ambos nombres para
así formar el icónico nombre del sistema operativo[^4].

> **Deb**ra Lyyn + **Ian** Murdock<br>
> **Deb** + **Ian**<br>
> **DebIan**

## Antes de la versión 1.0

Durante Agosto y Diciembre de 1993 se lanzaron diferentes _releases_ internos
que pasaron desde la versión **0.01** hasta la **0.90**, en ellas se
implementaron mejoras  al sistema operativo pero no fué hasta en Enero de 1994
en la versión **0.91** donde se implementó un manejador de paquetes sencillo que
podía instalar y desinstalar paquetes.

Más de un año después, en Marzo de 1995 la versión **0.93R5** fué lanzada, en
ella la responsabilidad del desarrollo de cada paquete era asignado a un
programador y para este entonces ya se había comenzado a utilizar el manejador
de paquetes (que terminó siendo _dpkg_) para instalar estos paquetes después de
la instalación del sistema operativo base. En Noviembre de 1995 se libera la
versión **0.93R6** que fué la última en utilizar el formáto de archivos
[a.out][a.out] optando por utilizar [ELF][elf], además se implementa
[dselect][dselect], que fué una herramienta _"gráfica"_ basada en texto para
instalar, remover y administrar los paquetes de Debian. Posiblemente la
nombraron por **D**ebian **Select**, no lo sé. Actualmente _dselect_ se
encuentra deprecada debido a que existen mejores herramientas como
[Synaptic][synaptic] que proporciona una interfáz gráfica real y es actualizada
frecuentemente.[^5]

![Interfáz de dselect](/assets/blog/una-breve-historia-de-debian/dselect.png)
*Interfáz de dselect*

## La versión que nunca existío

**Debían 1.0 nunca salío a la luz**, el 11 de Diciembre de 1995, Bruce Perens,
líder del Proyecto Debian que en su momento sucedío a Ian Murdock, en conjunto
con _InfoMagic_, un distribuidor de Discos Compactos, anunciaron que
accidentalmente habían enviado una versión equivocada de Debian etiquetada como
**versión 1.0**, esta era una versión de desarrollo que aún estaba parcialmente
migrada al formato _ELF_, lo cual posiblemente pudiera tener problemas en el
proceso de _boot_ o para ejecutarse de manera correcta, esta versión no
representaba en terminos de calidad lo que un release de Debian debería de ser y
para evitar confusiones entre la versión prematura del CD y la del verdadero
release se descidió nombrar el siguiente release como _"Debian 1.1"_ el cual fué
lanzado el 17 de Junio de 1996 y era completamente en formato _ELF_, utilizaba
el kernel de Linux 2.0 y contenía 474 paquetes disponibles[^6].

![La versión 1.0 de Debian no es lo que parece](/assets/blog/una-breve-historia-de-debian/1.1-not-1.0.jpg)
*La versión 1.0 de Debian no es lo que parece*

## Logotipo

El 26 de Agosto de 1999, como resultado de un concurso realizado por GIMP, Debian
obtubo su logotipo oficial después de la selección de las siguientes propuestas[^7]:

![Ants](/assets/blog/una-breve-historia-de-debian/logo_ants_jeannette-0.png)
*Ants*

![Swirl](/assets/blog/una-breve-historia-de-debian/logo_swirl_raul-0.png)
*Swirl*

![Seal](/assets/blog/una-breve-historia-de-debian/logo_seal_villate.jpg)
*Seal*

![Old Logo](/assets/blog/una-breve-historia-de-debian/logo_old_logo_debianlogo-3.jpg)
*Old Logo*

![Fixed Chicken](/assets/blog/una-breve-historia-de-debian/logo_fixed_chicken_fixed_chicken.jpg)
*Fixed Chicken*

![DG](/assets/blog/una-breve-historia-de-debian/logo_DG_dg.jpg)
*DG*

Y como ya lo saben, el ganador del concurso fué el logotipo de nombre
[_Swirl_][debian-logo] creado por [Raul M. Silva][raul-silva][^8]

![Logotipo oficial de Debian](/assets/blog/una-breve-historia-de-debian/debian-openlogo-smal.png)

El logotipo utiliza una fuente comercial de nombre _Poppl Laudatio Condensed_
donde el punto de la letra **i** fué reemplazado por un diamante color rojo.
Además de que el texto fué condensado horizontalmente y estrechado verticalmente
lo cual hace que luzca un poco diferente a la fuente original[^9].

## Una tradición para toda la vida

_Toy Story_ fué lanzado por Pixar el 22 de Noviembre de 1995. Un año después
Debian 1.1 fué lanzado. Bruce Perens era el líder del proyecto Debian en su 
momento y también trabajaba para Pixar, el comenzó la tradición de nombrar los
releases de Debian utilizando los nombres de los personajes de
_Toy Story_, comenzando con Buzz Lightyear[^10].

## Versiones

### `1.1` _Buzz_ (Junio 17 de 1996)

[!["Buzz" by Attila con la cámara is licensed under CC BY-NC 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc/2.0/](/assets/blog/una-breve-historia-de-debian/buzz.jpg)](https://www.flickr.com/photos/77967821@N00/5037973057)

### `1.2` _Rex_ (Diciembre 12 de 1996)

[!["Rex" by h&b { Lea } is licensed under CC BY-NC-ND 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-nd/2.0/](/assets/blog/una-breve-historia-de-debian/rex.jpg)](https://www.flickr.com/photos/77967821@N00/5037973057)

### `1.3` _Bo_ (Junio 5 de 1997)

### `2.0` _Hamm_ (Julio 24 de 1998)

### `2.1` _Slink _ (Marzo 9 de 1999)

### `2.2` _Potato_ (Agosto 15 del 2000)

### `3.0` _Woody_ (Julio 19 del 2002)

### `3.1` _Sarge_ (Junio 6 del 2005)

### `4.0` _Etch_ (Abril 8 del 2007)

### `5.0` _Lenny_ (Febrero del 2009)

### `6.0` _Squeeze_ (Febrero del 2011)

### `7.0` _Wheezy_ (Mayo del 2013)

### `8` _Stretch_ (Junio del 2017)

### `9` _Buster_ (Julio del 2019)

### `10` _Bullseye_ (Aún sin lanzar)

# Referencias

[1]: https://www.flickr.com/photos/iamurdock/20006308374/
[2]: https://www.debian.org/doc/manuals/project-history/releases.en.html
[3]: https://en.wikipedia.org/wiki/Dselect

[^1]: A Brief History of Debian -- [Chapter 1. Introduction -- What is the Debian Project?](https://www.debian.org/doc/manuals/project-history/intro.en.html)
[^2]: [Softlanding Linux System](https://archiveos.org/sls/)
[^3]: [New release under development; suggestions requested (Aug 16, 1993, 7:05:37 AM
)](https://groups.google.com/forum/message/raw?msg=comp.os.linux.development/Md3Modzg5TU/xty88y5OLaMJ)
[^4]: [Chapter 1. Introduction -- What is the Debian Project? -- 1.2. Pronouncing Debian](https://www.debian.org/doc/manuals/project-history/intro.en.html)
[^5]: A Brief History of Debian -- [Chapter 3. Debian Releases](https://www.debian.org/doc/manuals/project-history/releases.en.html)
[^6]: [Wrong version of Debian on InfoMagic CD](https://lists.debian.org/debian-announce/1995/msg00010.html)
[^7]: [New Logo](https://www.debian.org/vote/1999/vote_0004)
[^8]: Debian logos -- [About the Debian logos](https://www.debian.org/logos/)
[^9]: [Debian Logo](https://wiki.debian.org/DebianLogo)
[^10]: [Toy Story](https://wiki.debian.org/ToyStory)
[^11]: <a href="https://www.flickr.com/photos/77967821@N00/5037973057">"Buzz"</a><span> by <a href="https://www.flickr.com/photos/77967821@N00">Attila con la cámara</a></span> is licensed under <a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" style="margin-right: 5px;">CC BY-NC 2.0</a><a href="https://creativecommons.org/licenses/by-nc/2.0/?ref=ccsearch&atype=html" target="_blank" rel="noopener noreferrer" style="display: inline-block; white-space: none; margin-top: 2px; margin-left: 3px; height: 22px !important;"><img style="height: inherit; margin-right: 3px; display: inline-block;" src="https://search.creativecommons.org/static/img/cc_icon.svg" /><img style="height: inherit; margin-right: 3px; display: inline-block;" src="https://search.creativecommons.org/static/img/cc-by_icon.svg" /><img style="height: inherit; margin-right: 3px; display: inline-block;" src="https://search.creativecommons.org/static/img/cc-nc_icon.svg" /></a>
[^12]: "Buzz" by Attila con la cámara is licensed under CC BY-NC 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc/2.0/ 

[dselect]: https://wiki.debian.org/dselect
[synaptic]: https://wiki.debian.org/Synaptic
[wrong-version]: https://lists.debian.org/debian-announce/1995/msg00010.html
[a.out]: https://www.freebsd.org/cgi/man.cgi?query=a.out&sektion=5
[elf]: https://www.freebsd.org/cgi/man.cgi?query=elf&sektion=5
[debian-logo-contest]: https://www.debian.org/vote/1999/vote_0004
[raul-silva]: http://www.silva.com/
[debian-logo]: https://wiki.debian.org/DebianLogo
[debian-logo-pantone-color]: https://web.archive.org/web/20110215210046/http://small.dropbear.id.au/debian.html
