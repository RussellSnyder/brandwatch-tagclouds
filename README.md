# Russell Snyder's BrandWatch Tag Clouds
### programming challenge 

## Introduction

This github project is my approach to the BrandWatch Tag Cloud challenge.  Following the challenge.md file as closely as possible, I have created a small website with four tag clouds that match the criteria given.  

## Personal Approach to Challenge

I don't like Music that is always the same everytime you hear it.  I like live jazz and stochastic algormithmic music that can go wrong but doesn't because its well made.  I took this approach towards this tag cloud project.  On each page refresh (or ajax reload though navbar click events), a new tag cloud will be generated that is structured similarily to the previous, but will vary in several ways.  

I took great care to make sure that the information was conveyed in each design, but allowed variance in colors and placement of text which I felt still lined up with the challenge.md.

For technology, I took this opportunity to dive deep into and explore the potential of D3.js to make interactive, data driven web apps.  I have never used D3 in a professional setting and the learning curve is quite steep.  In exploring what D3 can do, I found that it can almost completely replace Jquery for dom interactions and has several built in data parsing function.  You'll notice that the nav bar is actually being rendered from a data in a CSV files!  Having recently completed several training in GSAP, I was surprised to find the tweening capabilities of D3 able to compete with GSAP. 

## Running this project

assuming you have the git CLI installed, the easiest way to run this from the terminal

git clone https://github.com/RussellSnyder/brandwatch-tagclouds

otherwise you can download the zip from https://github.com/RussellSnyder/brandwatch-tagclouds

In the downloaded files, the main application can be found in app/index.html

You can use pretty much whatever file serving server you would like to run this application (you can even drag the file into the chrome browser window and it will work bc it's all javascript), but I would recommend using a tiny node based server called live-server.  assuming you have the npm CLI installed, you can install live-server by running: 

[sudo] npm i -g live-server

once it is installed, you can run the commend from the root of this project  

live-server

this command will launch your default browser with links to folder in my application.  Also, any changes you make to my code while it is running will be automatically updated.  

To experience the application, run live-server (what whatever server you use) inside the app/ folder, or run it at the root of the project and navigate to app/index.html

## Tests ##

Tests were performed using the Jasmine testing framework. To run the tests, run live-server at the root of the project and navigate to test/SpecRunner.html   

## A Note on Testing 

I have been working as a professional frontend developer for a while now, but have never been required to test my software using a testing framework.  I actually taught myself jasmine through my personal work with Angular becuase I have heard from a lot of smart people that TDD and BDD are important.  I found the process used for this project really helpful to develop reliable functions. 

## About me

Hi, my name is Russell and I'm super obssessed with javascript.  My background in programming is actually from a combination of LISP and a visual programming language called MaxMSP.  I have a masters of Science from the University of Edinburgh in Digital Composition and Performnace, which was all about creating art that treats the computer as the beautiful instrument that it is.  I think code can be beautiful just as the programs that it creates can be beautiful and I am determined to have a career making the most beautiful applications that I can. 

Professionally, I am currently working as a fulltime frontend developer using a combintion of Javascript Frameworks within microsoft .Net and .asp systems.  However, in my own free time, and on my own dime, I have studied modern javascript frameworks like Angular, Meteor, Node, and Express  


## Russell and BrandWatch

Where did my obsession with javascript come from you ask?  The BrandWatch Javascript Meetup in Stuttgart!  It was at these meetups when I met real programmers, internationally and locally, who shared their javascript ideas and projects and instilled in me a desire to become a javascript ninja.

It is a goal of mine to present one of the open source projects that I am working on at a SuttgartJS javascript meetup group.  There are some companies you say that education is important to them, but with BrandWatch, I have seen it firsthand.  UX, CoffeeScript, and Javscript meetups free for everybody for the soul purpose of spreading knowledge and sharing ideas.  This is the BrandWatch that I know.


### note

Although I was officially given this challenge at the end of February, I had already accepted a job offer at another company (in between the time of my interview and receiving the challenge).  I assure you that I was waaaaayyyy too busy learning Backbone, GSAP, Handlebars, and Underscore (just to name a few) to have been working on this for the whole time.  I began this assignment on Friday, March 26th, 2016 and completed it on Sunday, March 28th, 2016.  My wife will attest to this fact :-)  

I felt bad about this long gap and I hope it will not detract from my suitability to be considered a prospective employee at Brandwatch.  I decided to make 4 data-driven animated tag clouds to make up for this time gap, but I really did not work on this for more than three days.  Really, I just wanted to see what D3 can do....its a great little visualization framework!