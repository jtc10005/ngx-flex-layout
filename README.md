# ngx-flex-layout

## This is an attempt to port @angular/flex-layout to provide support after EOL

The Angular team has decided to depricate the @angular/flex-layout library after v15.  It seems that this is going to cause issues for some people.
In order to try and alleviate these problems, this clone repo/lib was created. 

if you would like to contribute or help maintain please do so.

[![npm version](https://badge.fury.io/js/%40angular%2Fflex-layout.svg)](https://www.npmjs.com/package/%40angular%2Fflex-layout)
[![Build status](https://circleci.com/gh/angular/flex-layout.svg?style=svg)](https://circleci.com/gh/angular/flex-layout)
[![Gitter](https://badges.gitter.im/angular/flex-layout.svg)](https://gitter.im/angular/flex-layout)

**NOTE: The Angular team no longer publishes new releases of this project. Please review [this blog post](https://blog.angular.io/modern-css-in-angular-layouts-4a259dca9127) 
for alternatives, and [this article](https://medium.com/@caerus.karu/farewell-flex-layout-aaa567023769) for the explanation and next steps.**

Angular Flex Layout provides a sophisticated layout API using Flexbox CSS + mediaQuery.
This module provides Angular developers with component layout features using a
custom Layout API, mediaQuery observables, and injected DOM flexbox-2016 CSS stylings.

The Flex Layout engine intelligently automates the process of applying appropriate
Flexbox CSS to browser view hierarchies. This automation also addresses many of the
complexities and workarounds encountered with the traditional, manual, CSS-only application of box CSS.

The **real** power of Flex Layout, however, is its **responsive** engine. The
[Responsive API](https://github.com/angular/flex-layout/wiki/Responsive-API) enables developers to easily specify
different layouts, sizing, visibilities for different viewport sizes and display devices.