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

Setting up an angular application
---------------------------------
we can setup an angular application in multiple ways like below.

Manual 
------
Setting up an angular application requires the following steps.
1)Create an application folder
2)add package definition(package.json) and configuration files(tsconfig.json,tslint.json etc.).
3)install the packages using npm.
4)create the app's angular module, because every angular app requires atleast one angular module.
5)create main.ts file to load that angular module.
6)create the host webpage, normally index.html

Angular Quick start
-------------------
Note: The above manual steps are time consuming and error prone. Luckily, angular team has provided some template for quick starting your angular application, which you can get at the following git link.
https://github.com/angular/quickstart

Angular CLI
-----------
Angular CLI is the command line tool for generating the set of files and boilerplate code. It also generates components,modules,services and other files it scafolds and executes your unit and end to end tests. It also provides options to minimize package and the files needed for deployment. Angular CLI can be found here.
https://github.com/angular/angular-cli

Note: Angular CLI is the recommonded tool for build,running and deploying angular apps.

The getting started application is available in the below repository:
https://github.com/tulasidamarla/Angular-GettingStarted

Modules
-------
Javascript always has the problem of namespaces. If we are not careful,we end up with variables and functions in global namespace. In addition to this, javascript did not provide features to help with code organization. Modules help in resolving these issues.

1)Angularjs has modules to help us organize our code and resolve some namespacing issues. 
2)Typescript also shas modules that help keeping the variables out of the global namespace.
3)ES 2015 set a standard for defining modules. As per ES 2015 a module is a file. So, when you code in ES 2015, we don't need to define a module. i.e. create a file, write some code, then export or import something. that's it. A file becomes a module.

Note: Angular levarages ES 2015 standars. so, when we create code files and then import or export something we create modules for our application.

Note: But angular also has modules. Angular's implementation of modules is different from ES 2015 modules. 

Let's see how angular uses ES 2015 modules. consider the following example.

product.ts
----------
export class Product{
}

product-list.ts
---------------
import {Product} from './product';

Note: Both product.ts and product-list.ts become modules as per ES 2015. The above import statement indicates that it is importing the class 'Product' from product.js. product.js file is the javascript file that will be generated after transpiling.

Angular Modules
---------------
As mentioned before, angular modules help in organize an application into cohesive blocks of functionality. Every application needs atleast one module. By convention it is called app module. We can think of each angular module as one application feature, like microservices architecture where in each microservice contains one feature. Unlike, microservices angular applications contains code in different packages of the same code base.

Here are the key diffrences b/w ES modules and angular modules

1)ES Modules organize code files, whereas Angular organize application<br>
2)ES Modules, modularize our code, whereas Angular modularize application<br>
3)ES Modules, promote code reuse, whereas Angular promote application boundaries in the app.<br>

Component
---------
As mentioned in the beginning, component contains template,class and metadata.

Creating component
------------------
Consider the following example, where the name of the component is app.component.ts. 

Creating the component class
----------------------------
export class AppComponent{
	pageTile: string = 'Acme product management';
}

Note: In the above example we only have one property. No methods are defined.

Creating metadata
-----------------

	@Component({
		selector: 'pm-root',
		template: `
			<div><h1>{{pageTitle}}</h1>
			<div>My First Component</div>
		`
	})

Note: AppComponent class becomes angular component when we give it component metadata. Angular needs this metadata to understand how to instantiate the component, construct the view and interact with the component. We define component with angular component function. In typescript we attach that function to the class as a decorator.

*****
Note: A decorator is a function that adds metadata to a class, its members, or its method arguments. A decorator is a javascript language feature that is implmented in typescript. The scope of the decorator is limited to the feature that it decorates. A decorator is always prefiexed with @.

Note: Angular provides built-in decorators like @Component. we can define custom decorators.

Note:We apply the decorator by positioning immediately above the class definition. Notice that there is no semicolon at the end of @Component() decorator. This is like annotations defined in java. Like java annotation, this @Component() tells angular to identify the AppComponent class as a Component.

Note:Since the decorator is a function, it is present inside the parenthesis(). we pass an object to the decorator by indicating it inside curly braces {}. The object that is passed in has many parameters, but in the above example we have used just two.i.e. 'selector' and 'template'.

selector
--------
If we plan to reference the component in any html, we specify a selector. A selector specifies the component's directive name. A directive is nothing but a custom html tag. whenever this directive is used in html, angular renders this component's template.

template
--------
A component should always define a template. Here the template defines the layout for the UI fragment. {{pageTitle}} indicates data binding. i.e. we bind h1 element value to the pageTitle property of the class.

Importing libraries
-------------------
Angular is modular. we need to import the libraries we need. Angular has set of modules like @angular/core,@angular/animate,@angular/http,@angular/router etc. when we need something we need to import like any other external module. In the above example we used @Component function. we need to tell angular where to import this from. Consider the below code.
	import {Component} from '@angular/core';

Bootstrapping App component
---------------------------
Most of the angular applications have an index.html that contains the main page for the application. This is often the only webpage for the application. Hence an angular application is called a single page application. But, angular inserts html into this single page in bits and pieces. Let's see how it works.

Our Component contains the selector. It is the name of the component that we use as a directive in html and template defines the html we want to display. Here is the index.html which contains the directive 'pm-root'.

index.html
----------

	<body>
		<pm-root></pm-root>
	</body>

How does angular knows about this custom html element <pm-root>?.
Ans: Angular module. As we know angular module helps in organize our application into cohesive blocks of functionality and provides boundaries with in application and also provide template resolution environment. That means, when an angular compiler sees a directive and a template it looks for the angular module for definition.

Note: We generally define AppComponent in an angular module, so the compiler can find it. We also use angular module to bootstrap our AppComponent. We also want our application to work correctly in browser, so we add angular's browser module in to our angular module's import. Let's see the code of our app's angular module.

app.module.ts
-------------
	import { BrowserModule } from '@angular/platform-browser';
	import { NgModule } from '@angular/core';

	import { AppComponent } from './app.component';

	@NgModule({
	  declarations: [
	    AppComponent
	  ],
	  imports: [
	    BrowserModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

Note: Our AppModule is identified as angular module using @NgModule() decorator. For the NgModule decorator, the properties are arrays. 
1)In the declarations we have defined which components are part of this module.i.e. AppComponent. <br>
2)In the imports array we define the external modules that we want to available for all of the components that belong tho this angular module. External modules are modules provided by angular or 3rd party or our custom modules. Here we used BrowserModule, which every browser application must import. BrowserModule registers important application service providers such as error handling.
3)bootstrap array defines the startup component of the application. It should contain the selector we used in the index.html.

Templates,Interpolation and Directives
--------------------------------------
To Build UI for our application in angular we create template with HTML. To really powerup that HTML we need angular's data binding and directives.

Angular gives data binding using which we can display information and respond to user action.
With directives we can add logic to our HTML such as if statements and for loops etc.
With Angular components we build nested UI fragments such as image rotator or rating stars etc.

Building a Template
-------------------
Template can be inline or linked. Consider the following examples:

Single line inline Template
----------------------------
	template:"<h1>{{pageTitle}}</h1>"

Multiline inline Template
-------------------------
This uses ES 2015 standard by enclosing HTML inside backtick symbols to define the template like below.

		template: `
			<div><h1>{{pageTitle}}</h1>
			<div>My First Component</div>
		`

Note: The advantage of using inline template is that the template is defined with in the same component, keeping view and the code for the view within the same file. It is then easy to match up our data binding with class properties.

Note: There are disadvantages aswell with inline template. When defining view with in backticks most of the tools don't provide intelligence, automatic formatting and syntax checking. The alternative for this is Linked Template.

Linked Template
---------------
Linked template defined like this.
templateUrl:'./product-list.component.html'

Note: The products is a feature in this demo. Let's create a folder named products in side app directory and then create product-list.component.html file inside products folder.

product-list.component.html
---------------------------
	<div class="panel panel-primary">
	  <div class="panel-heading">
	    Product List
	  </div>
	  <div class="panel-body">
	    <div class="row">
	      <div class="col-md-2">Filter By:</div>
	      <div class="cold-md-4">
		<input type="text"/>
	      </div>
	    </div>
	    <div class="row">
	      <div class="col-md-6">Filter By:</div>
	    </div>
	  </div>
	  <div class="table-responsive">
	    <table class="table">
	      <thead>
		<tr>
		  <th>
		    <button class="btn btn-primary">
		      Show Image
		    </button>
		  </th>
		  <th>Product</th>
		  <th>Code</th>
		  <th>Available</th>
		  <th>Price</th>
		  <th>5 Star Rating</th>
		</tr>
	      </thead>
	      <tbody>

	      </tbody>
	    </table>
	  </div>
	</div>


