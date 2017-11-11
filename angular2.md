Angular is a javascript framework for building client-side applications using html,css and language like javascript.

Why Angular
-----------
There are lots of javascript frameworks out there. Here are few reasons for choosing angular.

1)Expressive HTML: Angular makes our html more expressive. It powers our html with features like if conditions,for loops and local variables etc.<br>
2)Powerful Data binding: We can easily display fields from our data model, track changes and process updates from the user.<br>
3)Modular by design: our applications become a set of building blocks making it easier to create and reusing content.<br>
4)Built-in backend integration: It has built-in support for communicating with backend services. This makes it easy for webapplication to integrate with backend services.

Why new Angular
---------------
With so many developers already using angular why new angular. Here are few reasons.<br>
1)Angular is built for speed. It has faster initial loads, faster change detection and improved rendering times.
2)Angular is modern, so it has to take advantage of modern javascript standards such as classes, ,modules and decorators etc, yet it supports both greenfield and legacy browsers.
3)Angular has a simplied api. It has few built-in directives to learn, simpler bindings and lower overall concept count.
4)Angular enhances productivity to improve day to day workflow. 

Anatomy of an Angular applications
----------------------------------
An angular application consists of a set of components and services that provide functionality across those components.

Component
---------
A component consists of a Template, Class and Metadata.<br>
1)Template is nothing but html fragment used to define view for the application.<br>
2)Class consists of properties(or datafields) used in the view and methods which perform action for the view such as button click etc.
3)Metadata provides additional information about the component to Angular. It is this metadata that identifies the class as angular component.

Angular Modules
---------------
Angular Module is nothing but a group of components. We can think of an Angular module as a package in java. Angular Modules help us in organizing our applications into cohesive blocks of functionality. Every application will have atleast one module called application's root angular module. An application can have any no of additional angular modules including feature modules that consolidate the components for specific application feature.

Selecting a language
--------------------
When building an angular application we have few language choices available. The most obvious choice is javascript. Let's see some background about javascript language specification.

Javascript language specification standard is officially called as ECMAScript(ES). Until recently ES versions were defined using a sequential number. Consider the following versions.<br>
1)ES 3 was supported by older browsers.
2)ES 5 is currently supported by most modern browsers.
3)ES 6 specification was recently approved. It was renamed to ES 2015. 

*****
Note: Most browsers not yet support ES 2015. So, ES 2015 code must be transpiled to ES 5 code. That means code written in ES 2015 must be compiled by a tool that converts ES 2015 syntax to ES 5 syntax, before the browser executes it. This way developers get the benefit of new ES 2015 productivity features and the browsers still get the code they understand.

so, Here are the choices of language for an angular application.
1)ES 5 -> Runs in browser, no compile required.
2)ES 2015 -> Lots of new features like classes,let, arrow etc. But transpiler needed.
3)Typescript -> Typescript is a superset of javascript. This also needs to be transpiled. One of the key benefits of typescript over others is it's strong typing.i.e. everything has a data type. 
4)Dart --> It is a non-javascript based language for building angular applications.

Note: Because of the strong typing it has great tooling including inline documentation,syntax checking, code navigation and advanced refactorings etc. Angular team has taken all these benefits and infact angular2 was developed using typescript. Most of the demo code in angular documentation also uses typescript code. For this reasons, typescript is the language of choice for many angular developers.

Typescript
----------
Typescript is an open source language. As mentioned above, it is a superset of javascript and compiles(or transpiles) to plain javascript. It is strongly typed. so every variable,function and function parameter will have a data type. 

How does typescript determines the type, when using javascript libraries that are not strongly typed?
Ans: By using typescript type definition files(*.d.ts). These files contain the definition of each type in a library. These files are named as library_name.d.ts. Typescript implements ES 2015 
class based object orientation. so developers from object oriented languages like c++,java feel it very familiar.

Environment setup
-----------------
For setting up the angular application, we need NPM.

NPM
---
NPM or node package manager is a command line utility that interact with repository of open source projects. npm has become the package manager for javascript. Using npm we can install libraries,packages and applications along with their dependencies.

We need npm to install all of the libraries for angular and to execute scripts that transpile our code and launch the application.


