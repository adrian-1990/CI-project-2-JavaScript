# Rock, Paper, Scissors, Lizard, Spock Game!

This is the classic game of Rock, Paper, Scissors but with the added twist of two new options, Lizard and Spock. This version game was made popular by the tv show The Big Bang Theory and with the introduction of two new options it decreases the chances of draws occuring. The site is created using HTML, CSS and JavaScript.

Below are links to the Github repository and the live site:

* [Github](https://github.com/adrian-1990/CI-project-2-JavaScript)


* [Live Site](https://adrian-1990.github.io/CI-project-2-JavaScript/)

![Am I responsive](https://user-images.githubusercontent.com/79532281/154800777-ad18c6a5-3475-4c4e-aa97-3aaae947b3ac.png)


## UX - User Experience Design

### User Stories

* The site is created for user to have fun and pass some time challenging the computer to a game of Rock, Paper, Scissors, Lizard, Spock. 

* The site can be used by new and return users. 

* I want the site to have a bright and welcoming design to encourage return visits.

### Strategy

* The site should be easy to use for new and return users. 

* The site should have all the rules clearly visable, the icons should be interactive for users and you should find out the winner of each round.

### Scope

### Structure

* The games hero image tell users what game they are playing. 

* Below the title will be the rules area, this will allow the players to know all the differant ways they can win and lose during the game. 

* The five game icons will be below the rules area and this will be interactive. 

* When a player selects an icon there selection and the computer selection will appear and the winner will be announced. There will a scoreboard to keep track of who is winning.

### Skeleton

#### Wireframes

* I created my initial design on Balsamiq Wireframes to get an initial idea for the layout of the site on PC and mobile. 

* As I was creating the site my layout changed slightly to what I originally planned. I want the user to know what game they are playing as soon as the arrive at the site, to know the rules of the game before they started playing and area to keep track of the score as they were playing.

* **Game Layout**

![pc wireframe](https://user-images.githubusercontent.com/79532281/154800977-eca5f3ea-dbec-4aab-814c-a1adda3c3e2b.png)

* **Winner Screen**

![winner-modal-screen](https://user-images.githubusercontent.com/79532281/155028609-dca04448-e0e7-4f8e-8e95-e251ae41991b.png)


### Surface

* The site has is bright and colourful and encourages user interaction. I wanted the colors to be welcoming and fun so the user would want to stay on the site and play a few rounds of the game.

#### Typography

* I chose two fonts for the site. I wanted there to be a differance between the page header and the body of the game.

* Header
  * For the header I chose **Bebas Neue** as my main font with **cursive** as the backup.
 
* Body
  * For the rules and scoreboard area I chose **Yanone Kaffeesatz** as my main font with **sans-serif** as the backup.

* These fonts give the site a modern look and grabs the users attention.

#### Colour Scheme

* The colour scheme was influenced by the hero image. I like the colour of the hero image and wanted to use this type of color through out.

* For the background I chose to use a liner gradient to add more colour to the site. I chose the below colours for my background

![color-scheme](https://user-images.githubusercontent.com/79532281/154999716-3fbe3a0b-cbcd-442b-8a85-4dd1b325b44a.png)


## Features

### Site Structure

The site consists of one main page with differant sections. The differant sections of the page are:

* Hero image
* Rules
* Game Icons
* Scoreboard

#### Hero Image

When the user logs onto the site the first element they come across is the Hero Image. I found this image on [I love free software](https://www.ilovefreesoftware.com/26/featured/play-rock-paper-scissors-online-10-free-websites.html). This is a bright and colorful and I really like the images they had for each game element.

![hero image](https://user-images.githubusercontent.com/79532281/155001340-3691bee8-2ce3-4be8-9de6-0c803141b71b.png)

#### Game Rules

This area details all the differant way the player can win and how the computer can beat the players choice. 

#### Game Buttons

This area is where the player can make their selection. I really like the icons on the hero image so I copied these for the game buttons and this continues the same style throughout the page.

**Rock**

![rock-icon](https://user-images.githubusercontent.com/79532281/155001922-f3b94ed3-992e-431e-a2c0-ecbecb884a1f.png)

**Paper**

![paper-icon](https://user-images.githubusercontent.com/79532281/155001951-a7ac93ad-1a4e-415e-a588-d1199063154f.png)

**Scissors**

![scissors-icon](https://user-images.githubusercontent.com/79532281/155001978-fa51abf8-2169-4e48-9395-f63402337df5.png)

**Lizard**

![lizard-icon](https://user-images.githubusercontent.com/79532281/155002004-4d6e393a-d26f-4452-a047-555999eb4834.png)

**Spock**

![spock-icon](https://user-images.githubusercontent.com/79532281/155002036-352e215a-1a03-4e7e-9340-343d90dca1e7.png)

#### Scoreboard

At the bottom of the page is a scoreboard for the player to keep track of how they are getting on against the computer.

![score-board](https://user-images.githubusercontent.com/79532281/155002190-f1ef8bb8-4382-4a9f-a5d0-86b288d42e66.png)


## Technologies Used

* Balsamiq
  * A wireframe was created to get the original deisgn layout.

* [Github](https://github.com/)
  * This was used as the host site for the code for the site.

* HTML
  * This was used to create the basic structure of the site

* CSS
  * This was used to add style to the site

* JavaScript
  * This was used to create the logic behind the game

## Testing

#### HTML

#### CSS

#### JavaScript

#### Lighthouse

#### Bugs

When playing the early version of the game the users choice would not appear, you would only see the computers choice and result. After investigating through Google dev tools I discovered this was because you could not select the button correctly.

![early in game bug](https://user-images.githubusercontent.com/79532281/154544324-8c60658f-3613-4669-9be9-455c89d6ae99.png)

I found that the buttons had a white border around the image that you could click and create an empty string choice, this was causing the players choice not to be selected. To fix this I removed the images from inside the button in my HTML and added the images as a background-image in CSS.

![new html](https://user-images.githubusercontent.com/79532281/154545774-a65f22b5-105a-4bd3-ae96-db170e23c914.png)

![new css](https://user-images.githubusercontent.com/79532281/154545787-95724dce-5a1c-46b4-9da7-bc4785579e96.png)

This removed the border around the button image and fixed the bug. Players choices are now selected with no issue.

![new buttons](https://user-images.githubusercontent.com/79532281/154545903-f9b0c6b8-70f0-4970-a4a7-02775bbdbb1d.png)


## Deployment

The site was deployed through Github. The steps to deploy the site are:
1. In the Github repository, select the **Settings** tab.
2. Once in the setting, select the **Pages** tab on the left hand side.
3. Under **Source**, change the branch to master, the click **save**.
4. Once the master branch has been selected and saved a link for your live page will be created.

![github pages link](https://user-images.githubusercontent.com/79532281/154527663-a9c9afc0-af33-45fb-adab-e0b72cf88bcf.png)


## Credits

### Content
* The background color used created suing [ColorSpace](https://mycolor.space/)
* The responsive layout at the top of the README was created with [Am I Responsive](http://ami.responsivedesign.is/)
* The hero image on the site was taken from [I love free software](https://www.ilovefreesoftware.com/26/featured/play-rock-paper-scissors-online-10-free-websites.html)
* The fonts came from [Google Fonts](https://fonts.google.com/)
* The if statement in the JavaScript code was created with assistance from [w3schools](https://www.w3schools.com/js/js_if_else.asp)
* I got the Spock favicon icon from [Icons8](https://icons8.com/icons/set/characters)

