# Russell Snyder's BrandWatch Tag Clouds
### -- Programming Challenge -- 

## Introduction

This github project is my approach to the BrandWatch Tag Cloud challenge.  Following guidelines given in the challenge.md file as closely as possible, I have created a small website with four tag clouds that match the criteria given.  A working copy can be found at http://russellsnyder.io/tag-cloud/

For browser performance, the each tag cloud is rendered using SVG which is a cross browser standard.  

Special mention should be given to Jason Davies for his open source tag cloud examples (https://github.com/jasondavies/d3-cloud) as well as Swizec Teller for writing "Data Visualization with d3.js".  Both sources helped tremendously for this project.

## Personal Approach to Challenge

I don't like static art that is always the same.  I like live jazz and stochastic algormithmic music that is fresh everytime, but consistent on a deeper level.  I took this approach towards this tag cloud challenge.  On each page refresh (or actully, reload through navbar click events), a new tag cloud will be generated that is structured similarily and reads the data to the previous, but will vary in several ways.

Although there are variations each time, I took great care to make sure that the information was conveyed in each design, but allowed variance in colors and placement of text which I felt still lined up with the challenge.md.

For technology, I took this opportunity to dive deep into and explore the potential of D3.js to make interactive, data driven web apps.  I have never used D3 in a professional setting and the learning curve was quite steep.  In exploring what D3 can do, I found that it can almost completely replace Jquery for dom interactions and has several built in data parsing function.  You'll notice that the nav bar is actually being rendered from a data in a CSV files!  



## Running this project

A working version can be found at http://russellsnyder.io/tag-cloud/


#### Download Files

The following are instructions to run on your local machine:

Assuming you have the git CLI installed, the easiest way to download the needed files is to run this from the terminal

`git clone https://github.com/RussellSnyder/brandwatch-tagclouds`

Otherwise you can click this link or paste it into your browser to download:

https://github.com/RussellSnyder/brandwatch-tagclouds/archive/master.zip


Finally, you can also click the "Download ZIP" button on the top right side of https://github.com/RussellSnyder/brandwatch-tagclouds to download the needed files to run locally.

#### Navigating Files And Running

In the downloaded files, the main application can be found in app/index.html

You can use pretty much whatever file serving server you would like to run this application, but I would recommend using a tiny node based server called live-server.  assuming you have the npm CLI installed, you can install live-server by running: 

`[sudo] npm i -g live-server`

once it is installed, you can run this command from the root of this project  

`live-server`

this command will launch your default browser with links to folders in my application.  Also, any changes you make to my code while it is running through live-server will be automatically updated without refreshing your browser.  

To experience the application, run `live-server` (what whatever server you would like) inside the app/ folder, or run it at the root of the project and navigate to app/index.html

#### Tests

Tests were performed using the Jasmine testing framework. To run the tests, run `live-server` at the root of the project and navigate to `test/SpecRunner.html`   

##### A Note on Testing 

I have been working as a professional frontend developer for a while now, but have never been required to test my software using a testing framework.  I actually taught myself jasmine through my personal work with Angular becuase I have heard from a lot of smart people that TDD and BDD are important.  I found the process used for this project really helpful to develop reliable functions. 

## About me

Hi, my name is Russell and I'm super obssessed with javascript.  My background in programming is actually from a combination of LISP and a visual programming language called MaxMSP.  I have a masters of Science from the University of Edinburgh in Digital Composition and Performance, which was all about creating art that treats the computer as the beautiful instrument that it is.  I think code can be beautiful just as the programs that it creates can be beautiful and I am determined to have a career making the most beautiful applications that I can. 

Professionally, I am currently working as a fulltime frontend developer using a combintion of Backbone within Microsoft .Net and .asp systems.  However, in my own free time, and on my own dime, I have studied modern javascript frameworks like Angular, Meteor, Node, and Express.  I am currently diving deep into functional programming style javascript which is very similar to LISP syntax.  I have been studying libraries like underscore, lodash, ramda, and fantasy-land which all implement highly functional style javascript in order to build my own programs in a more functional style.


## Russell and BrandWatch

Where did my obsession with javascript come from you ask?  The BrandWatch Javascript Meetup in Stuttgart!  It was at these meetups when I met real programmers, international and local, who shared their joy of javascript and instilled in me a desire to become a javascript ninja.

It is a goal of mine to present one of the open source projects that I am working on at a SuttgartJS javascript meetup group.  There are some companies who say that education is important to them, but with BrandWatch, I have seen it firsthand.  UX, CoffeeScript, and Javscript meetups free for everybody for the soul purpose of spreading knowledge and sharing ideas.  This is the BrandWatch that I know and is one of the top reasons why I hope to work for BrandWatch.


### side note

Although I was officially given this challenge at the end of February, because of time pressures from my previous employer, I had already accepted a job offer at another company in between the time of my first interview and the deadline for the challenge.  I read over the challenge.md then, but I assure you that I was waaaaayyyy too busy learning new technologies for my new job to have been working on this challenge for the past month.  I began this assignment on Friday, March 26th, 2016 (Holiday here in Germany) and completed it on Sunday, March 28th, 2016.  My wife will attest to this fact :-)  

As stated in the "Russell and BrandWatch" section, I have witnessed and felt the positive effect BrandWatch has had on myself and the javascript community in Stuttgart.  BrandWatch is the only company that I am applying to this time around and I can do another challenge if required (this one was fun actually).  I believe that BrandWatch is a place where I can grow as a developer and digital artist and I hope you will consider me for the next round.  Thank you!
