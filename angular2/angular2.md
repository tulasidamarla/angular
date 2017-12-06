Angular is a javascript framework for building client-side applications using html,css and languages like javascript.

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
Ans: By using typescript type definition files(*.d.ts). These files contain the definition of each type in a library. These files are named as library_name.d.ts. Typescript implements ES 2015 class based object orientation. so developers from object oriented languages like c++,java feel it very familiar.

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
2)Typescript also has modules that help keeping the variables out of the global namespace.
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
Consider the following example. Create a file with name app.component.ts. 

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

Note: There are disadvantages also with inline template. When defining view with in backticks most of the tools don't provide intelligence, automatic formatting and syntax checking. The alternative for this is Linked Template.

Linked Template
---------------
Linked template defined like this.
templateUrl:'./product-list.component.html'

Note: The products is a feature in this demo. Let's create a folder named products in side app directory and then create product-list.component.html file inside products folder.

Consider the following example, which is a tabular display of the products using twitter bootstrap table classes. Table body left empty because we don't want to hard code values.

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

Building the component
----------------------
	
	import {Component} from "@angular/core";
	@Component({
	  'selector': 'pm-products',
	  'templateUrl':'./product-list.component.html'
	})
	export class ProductListComponent{
	}

We have built the component, but how to use this?
Using this component as a directive. That means we can insert this component's template into any other component's template by using the selector as an html tag.

Here are the steps to use a component as a directive.
1)Let's include <pm-products> into the app components template. i.e. into app.component.ts like below.

	@Component({
	  'selector': 'pm-root',
	  'template':`
			<div><h1>{{pageTitle}}</h1>
			  <pm-products></pm-products>
			</div>
		  `
	})

Note: When the above template is displayed, angular looks for the component that has the selector with this name. i.e. <pm-products>. 

We may have hundreds of components in the application, how does angular knows where to look for the selector?
Ans: The application looks for the angular module that owns this component. So, we need to defined this component in applications AngularModule.

As we know every angular application must have atleast one angular module, the root application module. commonly called AppModule. Currently our AppModule declares only one component i.e. our AppComponent. A component must belong to only one module. Also, this module bootstraps the application with this component. i.e. This is the first component that is loaded for our application. Our AppModule also imports the System BrowserModule, to load the features needed to run this application within a browser. 

So, an AngularModule defines the boundaries within which our component resolves it's directives and dependencies. so, when a component contains a directive, angular looks to the component's module to determine which directives are visible to that component.

2)There are two ways to import a component. 
i)If it is part of an external module, then we need to add to the imports array in AppModule. 
ii)If a component is part of the same module, then we need to add this to declarations array. Consider the following code.
	
	import {ProductListComponent} from './products/product-list.component';

	@NgModule({
	  declarations: [
		AppComponent,ProductListComponent
	  ],
	  imports: [
		BrowserModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

Binding with Interpolation
--------------------------
Binding coordinates the communication between the component's class and its template and often involve passing data. We can provide values from the class to the template for display.Template raises events to pass user actions or user entered values to the class. 

Note: The binding syntax is always defined in the template. Angular provides several types of bindings. We will first see Interpolation type.

Consider the following example.

	<h1>{{pageTitle}}</h1>

The above double curly braces indicates interpolation. This pageTitle in the above example is bound to a class property. Consider the following class.

	export class AppComponent{
		pageTitle: string='Acme product management';
		getTitle: string{...};
	}

Note: Interpolation is a one-way binding from the class property to the template. 

Interpolation supports much more than simple properties. We can perform operations like concatenation, simple calculation or we can even call a class method. Consider the following examples.

1) {{'Title' + pageTitle}} 
2) {{2*10+1}}
3) {{'Title' + getTitle()}}

Note: we can even use interpolation with html element properties like below.
	
	<h1 innerText={{pageTitle}}></h1>

*****	
Note: The template expression {{pageTitle}} used in html element and with html element attribute above gives same result. The template expression is evaluated by angular using component as the context. It then evaluates the expression to a string. So, anytime we want to display read-only data we define a property in the class and template expression in an html element or attribute like above.

Directives
----------
A Directive is nothing but custom HTML element or attribute used to powerup or extend HTML.
We can build our own Directives(Custom) or Angular Built-in directives. In the above example, we have created Custom directive <pm-products>. Let's see some of the angular built-in directives.

Let's see the Angular's structural built-in directives like *ngIf,*ngFor. These are called structural because these will modify the structure of the template or view by adding,removing and manipulating child elements. Structural directives start with a '*'.

*ngIf
-----
*ngIf is a structural directive that removes or recreates the portion of a DOM tree based on an expression. If the expression evaluates to a false value, the element and it's children are removed from the DOM. If evaluates to true, a copy of the element and it's children are inserted into the DOM. Consider the following example.

	<div class='table-responsive'>
		<table class='table' *ngIf='products && products.length'>
			<thead>...
			</thead>
			<tbody>...
			</tbody>
		</table>
	</div>

Note: In the above example, if products variable has a value and the products list has length the table appears in the DOM. If not, table header,body and all of its children are removed from DOM.

***
As we know, angular module defines the boundary within which the component resolves its directives and dependencies. Where is this *ngIf comes from?
Ans: *ngIf comes from BrowserModule. Luckily, we have already imported this in our applications module file.

Consider the following example for displaying 'show Image' text if products are present.

Let's create variable products in product-list.component.ts file.

	export class ProductListComponent{
	  pageTitle: string='Product List';
	  products: any[]=[{
		"productId": 1,
		"productName": "Leaf Rake",
		"productCode": "GDN-0011",
		"releaseDate": "March 19, 2016",
		"description": "Leaf rake with 48-inch wooden handle.",
		"price": 19.95,
		"starRating": 3.2,
		"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
	  },
		{
		  "productId": 2,
		  "productName": "Garden Cart",
		  "productCode": "GDN-0023",
		  "releaseDate": "March 18, 2016",
		  "description": "15 gallon capacity rolling garden cart",
		  "price": 32.99,
		  "starRating": 4.2,
		  "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
		}]
	}
	
Note: In typescript we define a variable type 'any' if we don't know it's type.	

Let's revisit portion of our HTML in product-list.component.html

	<div class="table-responsive">
	    <table class="table" *ngIf="products && products.length">
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

Note: you can test this code by making emptying products json array and then filling with some fields like above.

*ngFor
------
*ngFor repeats the portion of the DOM tree once for each item in an iterable list. For example, we want to display each product in a row of a table.  Consider the below code snippet.

	<tr *ngFor='let product of products'>
		<td></td>
		<td>{{product.productName}}</td>
		<td>{{product.productCode}}</td>
		<td>{{product.releaseDate}}</td>
		<td>{{product.price}}</td>
		<td>{{product.starRating}}</td>
	</tr>

why 'product of products' instead of 'product in products'?
Ans: ES 2015 has bot 'for... of' and 'for... in' loops. Let's consider the following example to know the difference. 
	
	let names=['tulasi','ram','damarla'];
	
for... of loop iterates over the iterable objects like an array. So, the below code produces
o/p: 'tulasi','ram','damarla'.
	
	for(let name of names){
		console.log(name);
	}
	
unlike for...of, for... in iterates over the properties of iterable object like index. so, the below code produces o/p:0,1,2.
	
	for(let name in names){
		console.log(name);
	} 

Note: Since *ngFor is designed to iterate over the object, not their properties angular chooses to go with 'for... of'.

Other ways of Databinding
-------------------------

Property Binding
----------------
Property binding allows us to set the property(or attribute) of an HTML element to the value of a template expression. Consider the following example.
	
	<img [src]='product.imageUrl']>

Note: In the above example, product is not the component name, it is the property of a variable in the statement like 'let product of products'.

Note: In the above example, [src] is called Binding target, mostly enclosed in angular brackets specifies the property of an HTML element, where as 'product.imageUrl' is called Binding source, always enclosed in quotes, specifies a template expression.
*****
Note:We can write the above property binding example using interpolation like below.
	
	<img src={{product.imageUrl}}>

Which one is better Property Binding or Interpolation?
Ans: The general guideline is to prefer Property Binding over interploation. But, sometimes when you use larger template expression like below, interploation is preferred.

	<img src='http://openclipart.org/{{product.imageUrl}}'>

Let's consider the above property binding example in the table data to display images.

        <tr *ngFor='let product of products'>
          <td>
            <img [src]="product.imageUrl"
                   [title]="product.productName"
                   [style.width.px]="width"
                   [style.margin.px]="margin">
          </td>
          <td>{{product.productName}}</td>
          <td>{{product.productCode}}</td>
          <td>{{product.releaseDate}}</td>
          <td>{{product.price}}</td>
          <td>{{product.starRating}}</td>
        </tr>

Note: width and margin are the properties of the component, not the product object.

Event Binding
-------------
So far all the databinding is one way. But, there are other times where we need to respond to user events.

An angular component listens to user actions using Event Binding. To findout the list of all user events go through the below link.

	https://developer.mozilla.org/en-US/docs/Web/Events

Consider the following example of event binding. 
	
	<button (click)='toggleImage()'>

Note: In Event binding, Binding target is written in parenthesis like above. The Binding source is the template expression, usually a method in the component.

Consider the following demo, to display or hide images based on user action on the button 'show image'. Consider the above click event and make the change for the component.

Let's define the boolean property, which keep track of the current state.

	export class ProductListComponent{
	  pageTitle: string='Product List';
	  width: number=50;
	  margin: number=2;
	  showImage: boolean=false;
	  toggleImage(){
		this.showImage = !this.showImage;
	  }
	}
	
Note: showImage variable is to keep track of current state of show image click status.It is set to a default value of false, so that the images are not displayed when page is loaded.

Note: The body of the method toggleImage is simply to toggle the state of the showImage property.

Let's modify the img tag to display images based on the state of showImage property of the component.

	<img *ngIf="showImage"
		   [src]="product.imageUrl"
		   [title]="product.productName"
		   [style.width.px]="width"
		   [style.margin.px]="margin">

Note: The button text always displayed as 'Show Image'. Let's change this 'Hide Image' when the image is currently displaying, by adding a ternary operation using interpolation like below.

    <button (click)="toggleImage()"  class="btn btn-primary">
        {{showImage ? 'Hide Image' : 'Show Image'}}
    </button>


Two way Binding
---------------
When working with UI element such as HTML input we often want to display a component class property in the template and update that property when user makes a change. This requires two way binding. To do that in angular, we use ngModel directive. Consider the below template and component class snippets.

	<input [(ngModel)]='listFilter'>

	export class ProductListComponent{
		listFilter: string='cart';
	}

Note:[(ngModel)] the angular brackets indicates property binding and parenthesis indicate the event binding. It is assigned to the template expression. 
***
Note: The directive ngModel is part of 'FormsModule', which we need to import like our BrowserModule.

Consider the below demo example for displaying FilterBy text.

1)Template change is required as below.

    <div class="row">
      <div class="col-md-2">Filter By:</div>
      <div class="cold-md-4">
        <input type="text" [(ngModel)]="listFilter"/>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6">Filter By: {{listFilter}}</div>
    </div>

2)Add listFilter property to the component class as mentioned above.
3)Add FormsModule to our application's module file.

	import {FormsModule} from "@angular/forms";
	@NgModule({
	  declarations: [
		AppComponent,ProductListComponent
	  ],
	  imports: [
		BrowserModule,FormsModule
	  ],
	  providers: [],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

Data Transformation with Pipes
------------------------------
With Angular's data binding displaying data is easy. But, sometimes data is not in a format appropriate for display. This where Pipes are useful. Pipes transform bound properties before they are displayed. So, we can alter the property values to make them more user friendly or more locale appropriate. Angular provides some built-in pipes for formatting values, such as data,number,decimal,percent,currency,uppercase,lowercase etc. It also has some piepes tow work with objects to be displayed as json string, which is useful for debugging. It also has a slice pipe which selects the specific subset of elements from a list. we can also build our custom pipes.

Consider the below examples.
1)Displaying productCode in lowercase.
	
	{{product.productCode | lowercase}}
	
2)pipes can also be specified in HTML element properties. For ex,

	<img *ngIf="showImage"
		   [src]="product.imageUrl"
		   [title]="product.productName | uppercase"
		   [style.width.px]="width"
		   [style.margin.px]="margin">

3)pipes can be chained as well. For ex,
	
	{{product.price | currency | lowercase}}

Note: By default currency abbreviation is displayed in uppercase.
4)Some pipes support parameters. parameters are defined by specifying a colon and the parameter value. For ex,
	{{product.price | currency:'USD':true:'1.2-2'}}
	
Note: currency pipe has three parameters. The first parameter is desired currency code, second 
parameter is a boolean value indicating whether to display currency symbol and the third parameter is the digit info. Digit info indicates minimum no of integer digits(1), minimum no of fractional digits(2) and the maximum no of fractional digits(2).

Defining Interfaces
-------------------
We know typescript is strongly typed, so it helps in syntax checking and better tooling. But, sometimes we can't have a specific type. For ex, products in the ProductListComponent component we have defined as any[]. This will negate the benifits of strong typing. To specify custom types we define Interfaces. 

An interface identifies a related set of properties and methods. A class commits to supporting the specification by implementing the interface.
ES 5 and ES 2015 still don't support Interfaces. When the code is traspiled you can't see interfaces. These are just development time only for strong typing. Let's create the IProduct interface. Note we don't have any methods for our requirement.

	export interface IProduct{
		productId: number;
		productName: string;
		productCode: string;
		releaseDate: string;
		description: string;
		price: number;
		starRating: number;
		imageUrl: string;
	}

Note: Interfaces are prefixed with 'I' by convention. Many developers ignore this, but it is easy to distinguish by looking at the name.

Defining Component Styles
-------------------------
There are multiple ways to define styles.<br>
1)we can inline the styles directly into HTML.<br>
2)Define an external stylesheet and link it in index.html.<br>
3)Encapsulating styles in component decorator itself. 

Note: With inline css and external stylesheet approaches, it is harder to see, reuse and maintain.

Component decorator provides two properties to define styles. They are <br>
1)styles
2)styleUrls

Note: styles and styleUrls both take array of strings. styleUrls takes external stylesheet links. 

Let's create a sample css file product list header in a file 'product-list.component.css'. Consider the below snippet.

	thead{
		color: #337AB7
	}

Add the above stylesheet link in product-list.component.ts file. Consider the below snippet.

	@Component({
	  selector: 'pm-products',
	  templateUrl: './product-list.component.html',
	  styleUrls:['./product-list.component.css']
	})

Component Lifecycle Hooks
-------------------------
A component has lifecycle managed by angular. Here are the steps.<br>
1)Angular creates a component<br>
2)Render the component<br>
3)Create the children components and render them<br>
4)process changes when it's databound properties change<br>
5)Destroy it before removing it from DOM

Angular provides a set of lifecycle hooks we can use to tap into these lifecycle and perform operations as needed. Here is the list.

1)ngOnChanges()	
Respond when Angular (re)sets data-bound input properties. The method receives a SimpleChanges object of current and previous property values.
Called before ngOnInit() and whenever one or more data-bound input properties change.
2)ngOnInit()	
Initialize the directive/component after Angular first displays the data-bound properties and sets the directive/component's input properties.
Called once, after the first ngOnChanges().
3)ngDoCheck()	
Detect and act upon changes that Angular can't or won't detect on its own.
Called during every change detection run, immediately after ngOnChanges() and ngOnInit().
4)ngAfterContentInit()	
Respond after Angular projects external content into the component's view.
Called once after the first ngDoCheck().
A component-only hook.
5)ngAfterContentChecked()	
Respond after Angular checks the content projected into the component.
Called after the ngAfterContentInit() and every subsequent ngDoCheck().
A component-only hook.
6)ngAfterViewInit()	
Respond after Angular initializes the component's views and child views.
Called once after the first ngAfterContentChecked().
A component-only hook.
7)ngAfterViewChecked()	
Respond after Angular checks the component's views and child views.
Called after the ngAfterViewInit and every subsequent ngAfterContentChecked().
A component-only hook.
8)ngOnDestroy()	
Cleanup just before Angular destroys the directive/component. Unsubscribe Observables and detach event handlers to avoid memory leaks.
Called just before Angular destroys the directive/component.

OnInit Demo
-----------
OnInit performs any component initialization after angular has initialized the data bound properties. This a good place to retrieve the data for the template from backend service. 

Note: As we can see from the above list, first method in the lifecycle is OnChange, which is called first when input properties(discussed next) are bound. OnInit is the second in the list, which will be called after data bound properties are initialized.

Since, angular itself is written in typescript, it provided with a set of interfaces our component classes has to implement. Consider the below snippet.

	
	import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
	export class ProductListComponent implements OnInit{
		    ngOnInit(): void {
				console.log('on init');
			}
	}

note: As we know ES 5 and ES 2015 supports no interfaces. So, these interfaces are traspiled out of the resulting javascript. We can actually ignore the OnInit in the component declaration and can simply implement the method ngOnInit(). But, it's a good practice to declarte it in the component declaration.

Custom Pipes
------------
Let's build a custom pipe to replace '-' with a space in the productCode. Building a pipe needs the following changes.

1)Create a pipe decorator like this.
	@Pipe({name:'convertToSpaces'})

2)create a class which should implement PipeTransform interface.
	export class ConvertToSpacesPipe implements PipeTransform{
	}
	
3)Implement the transform method of PipeTransform interface.
	transform(input: string, key: string): string{
	}

4)import Pipe and PipeTransform from angular core libraries.
	import {Pipe, PipeTransform} from '@angular/core';
	
5)Modify the view to use the above created pipe.
	<td>{{product.productCode | convertToSpaces:'-'}}</td>

Note: convertToSpaces should match the name defined in Pipe decorator. As seen with built-in pipes, any arguments to the pipe have to be sepearated with a colon.

6)Add the pipe to the angular module in declarations array.

Filtering a list
----------------
There is no built-in pipe that angular provides for flitering a list. Angular team strongly suggests moving filtering/sorting logic to the component class. Let's add a property in ProductListComponent class component which gives filtered products. Consider the below example.

	export class ProductListComponent implements OnInit{
		_listFilter: string;
		filteredProducts: IProduct[];
		    get listFilter(): string{
				return this._listFilter;
			}

			set listFilter(value: string){
			  this._listFilter= value;
			}
	}	

Note: hardcoded listFilter property is removed and modified _listFilter so that filter criteria can be modified by the user.

Note: Everytime user modifies the filter criteria text, set listFilter() method is called. So, lets write the filtering logic in the method. Consider the below snippet.

		set listFilter(value: string){
		  this._listFilter= value;
		  this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
		}
			
		performFilter(filterBy: string): IProduct[]{
		  filterBy=filterBy.toLocaleLowerCase();
		  return this.products.filter(
			(product: IProduct) => product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1) ;
		}

Note: Change the view to display filteredProducts instead of products. Consider the below snippet.

        <tr *ngFor='let product of filteredProducts'>

Note: In typescript private fields start with '_'.

Nested Components
-----------------
In angular components can be nested. As we know each component is fully encapsulated, we expose specific inputs and outputs for communication between a nested component and it's container allowing them to pass data back and forth. There are two ways to use a component and to display the components template.<br>
1)We can use the component as a directive
2)We can use the component as a routing target. It appears to the user that is moved a to new page.

Note: Any component in angular can be nested, if they have a selector defined in the component decorator.

Building a nested component
---------------------------
When building a nested component, it often needs to communicate to the parent(or container) component. consider the below flow. <br>
1)The nested component receives the information from its container using input properties.<br>
2)The nested component outputs the information back to its container by raising events.

Example:
In the example we are currently working, The star rating currently displays numbers. Let's display stars instead of numbers using nested component. Consider the below steps.<br>
1)The container component has to send the rating number to the nested component as input. <br>
2)If the user clicks on the stars, we want to raise an event to notify the container.

Building a star component
-------------------------
1)Let's create the star component and its css file in a shared folder so that it can be reused across different components. Let's name the html file as star.component.html and write the below snippet.

	<div class="crop" 
		[style.width.px]="starWidth"
		[title]="rating">
		<div style="width: 86px">
			<span class="glyphicon glyphicon-star"></span>
			<span class="glyphicon glyphicon-star"></span>
			<span class="glyphicon glyphicon-star"></span>
			<span class="glyphicon glyphicon-star"></span>
			<span class="glyphicon glyphicon-star"></span>
		</div>
	</div>
	
Note: To display 4.5 rating, we can use percentage logic with start width. i.e. 86px in this example. rating and starWidth properties have to be defined in the component.	

2)Add the styles in a file, lets name it as star.component.css and add the below snippet.

	.crop {
		overflow: hidden;
	}
	div {
		cursor: pointer;
	}

3)Let's create the component file as start.component.ts. It should implement OnChanges interface method ngOnChanges() to recalculate star rating everytime the container change the rating number. Consider the below component code.

	export class StarComponent implements OnChanges{
		rating: number = 4;
		starWdith: number;
		ngOnChanges(): void {
			this.starWdith = this.rating*86/5;
		}
	}

Nesting the star component
--------------------------
1)Use the nested component as a directive in the container component. Lets replace the starRating(<td>{{product.starRating}}</td>) in product-list.component.html with <pm-star></pm-star>.

2)Declare the star component in the angular module.i.e. add it to the declarations array.

Note: With the above changes, we can see all 5 stars in the UI. But, it should display only 4. This is because ngOnchanges will only be called when a change occurs to the input properties. Lets see in the next section how to pass data to a nested component using input properties.

Passing Data using input properties
-----------------------------------
1)If a nested component wants to receive input from its container it must expose a property to the container. This property should be decorated with @Input() decorator. Consider the below snippet.

	export class StarComponent{
		@Input() rating: number = 4;
	}

2)The above property must be binded in product-list.component.html using property binding. i.e. <pm-star [rating]='product.starRating'></pm-star>.

Note: This nested component property rating is the binding target here. This is the only time a property is used as binding target.

Passing Data using output properties
------------------------------------
Lets take the use case of displaying the rating in the container template when user clicked on stars.

1)If the nested component wants to send the information back to its container it can raise an event. The nested component exposes an event it can use to pass output to the container using the decorator @Output(). The property type of an output property must be an event. The data to be passed becomes the event payload. In angular an event is defined with EventEmitter object. Consider the below snippet.

	export class StarComponent{
		@Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();
	}

Note: In the above example, payload if of type string. we can pass any payload type like number, object etc. 

2)When clicked on stars, the star component receives an event. Lets define event binding in the star.component.html file like below.
	<div (click)='onClick()'>...stars..</div>

3)Add the onClick() method in star component. Consider the below snippet.

	export class StarComponent{
		onClick(){
			this.ratingClicked.emit('clicked');
		}
	}

Note: In the onClick() we call the emit method on the notify event property to raise an event to the container. If we want to pass the data, then we pass that data to the emit method. In the above example, it just send a string message 'clicked'.

4)container component template receives the payload of the event generated in the above step. In the container component template we use event binding to bind to the notify event. Consider the below snippet.

	<pm-star [rating]='product.starRating' (ratingClicked)='onRatingClicked($event)'></pm-star>

Note: This is the only time a components property is used as event binding target.

5)We need to define the action that needs to performed when an event is raised. As mention in the above step, lets define the method onNotify() in the container component. Consider the below snippet.
	
	export class ProductListComponent{
		onRatingClicked(message: string): void{
			this.pageTitle = 'Product List: ' + message;
		}
	}

Services and Dependency Injection
---------------------------------
Service is a class with a focused purpose. They are used for features that 
1)independent from any particular component.
2)provide shared data and logic across components.
3)encapsulate external interactions like rest, database etc.

By moving these responibilities from component to service, the code is easier to test, debug and reuse. 

Working with Services
---------------------

Consider the below service class.
	
	export class MyService{}

There are two ways that a component work with service. 	
1)A component can create an instance of the service class and use it like below.
	
	let service = new MyService();

Note: The above instance is local to the component. This instance cannot be shared across components. Also, it is difficult to mock the service for testing.
	
2)Register the service with angular. Angular then creates a single instance of the service, called singleton instance. Angular provides a built-in injector to do this. We register our service with angular injector, which maintains a container of created service instances. Injector maintains a singleton instance of each registered service. To access, service Component class has to define the service as a dependency like below.
	export class MyComponent{
		constructor(private _MyService){
		}
	}

Note: Angular injects the MyService instance into the constructor as shown above. This process is called dependency injection.

Building a Service
------------------
Let's take an example of reading data into a service class instead of hardcoding in productlist.component.ts.

When building a service we often use @Injectable() decorator. This is really required if the service itself has an injected dependency. But it's a good practice to this dependency for consistency. For ex,

	@Injectable()
	export class ProductService{
		getProducts(): IProduct[]{
			//return the products json here
		}
	}

Note: Let's move the above service class to a file say product.service.ts and then you can move the products json from product-list.component.ts to the above getProducts() method.	

Registering the service
-----------------------
For registering the service we need to add the Service to providers list the angular module. Consider the below code.
	
	import { ProductService } from './products/product.service';
	
	@NgModule({
	  declarations: [
		AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent
	  ],
	  imports: [
		BrowserModule,FormsModule
	  ],
	  providers: [ProductService],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

Injecting the service
---------------------
Injecting the service into ProductListComponent is done through constructor injection. Consider the below code snippet.

	export class ProductListComponent implements OnInit{
	  _productService: ProductService;

	  constructor(productService: ProductService){
		this._productService = productService;
	  }
	}
	
Let's modify the onInit() method to load the products from service during initialization. Consider the below snippet.

    ngOnInit(): void {
      this.products=this._productService.getProducts();
      this.filteredProducts = this.products;
    }	

Retrieving data using http
--------------------------
As we know most applications retrieve data using http. UI apps interact with webservices over http to retrieve data. Let's take an example of replacing the hard coded products json data in the service class with a http call.

Observables and Reactive extensions
-----------------------------------
Observables help us manage asynchronous data. Observables treat events as a collection. We can think of an observable as an array whose items arrive asynchronously over time. Observables are proposed feature for ES 2016. To use observables now in angular 2, angular uses reactive extensions(rxjs). Don't confuse this with react UI library. 

Observables manage set of events with operators. Operators process each value as it is emitted asynchronously. Few examples of operators include map,filter,take,merge etc.

A method in the code can subscribe to observable to receive asynchronous notification when data arrives. The method can then react as data is pushed to it. The method is notified when there is no data or when an error occurs.

Observables vs Promises
-----------------------
1)A Promise returns a single future value, whereas an observable emits multiple values over time.
2)A promise is not lazy (By the time we have a promise, it is on its way to being resolveed), whereas observable is lazy until they are subscribed to.
3)A promise is not cancellable, it is resolved or rejected and only once, whereas an observable can be cancelled by unsubscribing.

Note: A promise can also be used with angular, but unlike promise an observable supports operators like map, filter.

Sending a http request
----------------------
We have hard coded products json into the service. Instead We can access data using angulars http request and response protocols from a web server. In our case we don't have a web server, so let's read from products.json file we have in our starter project in api folder using angular http.
Consider the below code snippet.

	import {HttpClient} from '@angular/common/http';
	import {Observable} from 'rxjs/Observable';
	
	@Injectable()
	export class ProductService{
		private _productURL = '../api/products.json';
		constructor(private _http: HttpClient){
		}
		
		getProducts(): Observable<IProduct[]>{
			this._http.get<IProduct[]>(this._productURL);
		}
	}

Note: http get method and Observable both supports generics.
	
Registering the Http Service provider
-------------------------------------
Registering Http service provider needs to add it imports array. Consider the below snippet.

	import { HttpClientModule } from '@angular/common/http';
	
	@NgModule({
	  declarations: [
		AppComponent,
		ProductListComponent,
		ConvertToSpacesPipe,
		StarComponent
	  ],
	  imports: [
		BrowserModule,FormsModule,HttpClientModule
	  ],
	  providers: [ProductService],
	  bootstrap: [AppComponent]
	})
	export class AppModule { }

Exception Handling
------------------
When communicating with backend server many things can go wrong like connection issues, data issues etc. Let's add some exception handling. Let's consider the below code snippet.

	import { IProduct } from "./product";
	import { Injectable } from "@angular/core";
	import { Observable } from "rxjs/Observable";
	import { HttpClient,HttpErrorResponse } from "@angular/common/http";

	import 'rxjs/add/observable/throw';
	import 'rxjs/add/operator/do';
	import 'rxjs/add/operator/catch';

	@Injectable()
	export class ProductService{

		private _productURL = '../api/products/products.json'
		constructor(private _http: HttpClient){

		}
		getProducts(): Observable<IProduct[]>{
			return this._http.get<IProduct[]>(this._productURL)
					.do(data => console.log(JSON.stringify(data)))
					.catch(this.handleError);    
		}

		private handleError(err: HttpErrorResponse){
			return Observable.throw(err.message);
		}
	}

Note: throw,do,catch are loaded directly without importing them locally.

Subscribing to an Observable
----------------------------
If you are familiar with Promises, result of a calculation say x, is received by calling then method. For ex,

		x.then(valueFn,errorFn);
		
Note: valueFn is called when function completes successfully and errorFn incase of failure.

Similary, Observable has the below methods.
		
		let sub=x.subscribe(valueFn, errorFn);
		let sub=x.subscribe(valueFn,errorFn,completeFn);
		
Note: unlike promise, valueFn is called each time a value is emitted. In somecases, we want to know when the values are completed. In this case, use the second method with the parameter of completeFn.

we can use the variable 'sub' to call unsubscribe and cancel if needed.	

Consider the below ngOnInit() change in product-list.component.ts for subscribing to the Observable returning from product service.

    ngOnInit(): void {
      this._productService.getProducts()
        .subscribe(products => {
						this.products = products;
						this.filteredProducts=products;
						},
                    error => this.errorMessage = <any>error);
      console.log('on init');
    }

Note: By the time products are fetched asynchronously, filteredProducts variable is loaded. That's why we moved filteredProducts also inside subscribe.