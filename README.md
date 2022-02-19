# Rock, Paper, Scissors, Lizard, Spock Game!

![Am I responsive](https://user-images.githubusercontent.com/79532281/154800777-ad18c6a5-3475-4c4e-aa97-3aaae947b3ac.png)

## Introduction

Below are links to the Github repository and the live site:

* [Github](https://github.com/adrian-1990/CI-project-2-JavaScript)


* [Live Site](https://adrian-1990.github.io/CI-project-2-JavaScript/)



## UX - User Experience Design

The site is created for user to have fun and challenge the computer to a game of Rock, Paper, Scissors, Lizard, Spock. The site can be used by new and return users. I want the site to have a bright and welcoming design to encourage users to return.

### Strategy

The site should be easy to use for new and return users. The site should have all the rules clearly visable, the icons should be interactive for users and you should find out the winner of each round.

### Scope

### Structure

The game title will tell users what game they are playing. There is a section for players to select what they want to play, a section to announce the winner and a section that contains the rules so user can know why they won / lost. There is a scoreboard to keep track of who is winning between the user and computer.

### Skeleton

I created my initial design on Balsamiq Wireframes to get an initial idea for the layout of the site on PC and mobile. As I was creating the site my layout changed slightly to what I originally planned.

### Surface

## Features

## Future Features

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

