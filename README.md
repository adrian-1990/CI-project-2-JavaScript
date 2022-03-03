# Rock, Paper, Scissors, Lizard, Spock Game!

This is the classic game of Rock, Paper, Scissors but with the added twist of two new options, Lizard and Spock. This version game was made popular by the tv show The Big Bang Theory and with the introduction of two new options it decreases the chances of draws occuring. The site is created using HTML, CSS and JavaScript.

Below are links to the Github repository and the live site:

* [Github](https://github.com/adrian-1990/CI-project-2-JavaScript)


* [Live Site](https://adrian-1990.github.io/CI-project-2-JavaScript/)

![Am I responsive](https://user-images.githubusercontent.com/79532281/156548154-95f33795-73e2-4106-925b-64d86999fe9d.png)


## UX - User Experience Design

### User Stories

* The site is created for users to have fun and pass some time challenging the computer to a game of Rock, Paper, Scissors, Lizard, Spock. 

* The site can be used by new and returning users. 

* I want the site to have a bright and welcoming design to encourage return visits.

### Strategy

* The site should be easy to use for new and return users. 

* The site should have all the rules clearly visable, the icons should be interactive for users and you should find out the winner of each round.

### Scope

* When new users log onto the site they should know exactly what the game is, what each object can defeat and be defeated by, and finally an area for the player to play the game. The style and colour scheme should carry through the entire page to give the site a uniformed look and improve user experience.

### Structure

* The title lets the user know what game they are playing.

* Below the title will be the game rules button. If players are intrested in finding out the rules of the game they can press the button and a modal will appear with the rules of the game and how a winner is declared.

* Below the game rules button will be the game area. This will contain the game buttons, a result area to declare the winner and a scoreboard to keep track of who is winning. 

* When a player selects an icon, their selection and the computers selection will appear in the players choice / opp choice and the winner will be announced. The first player to 5 points wins the round. When a player has 5 points a modal will appear letting the user know if they won or lost and a button to play again.

### Skeleton

#### Wireframes

* I created my initial design on Balsamiq Wireframes to get an idea for the layout of the site on PC and mobile. 

* As I was creating the site my layout changed to what I originally planned. I felt the site did not provide a positive UX when veiwed on a mobile screen so I decided to put the game rules in a modal that can be accessed by a button. This reduced the amount of information that was appearing and if the user wants to know the rules they can still access them. When a user arrives on the site they will see the game title, game rules button and the game area. This will provide a positive UX as they can start playing the game straight away without having to scroll through the rules area first.

* **Game Layout**

* This was my original layout.

![pc wireframe](https://user-images.githubusercontent.com/79532281/154800977-eca5f3ea-dbec-4aab-814c-a1adda3c3e2b.png)

* **Winner Screen**

![winner-modal-screen](https://user-images.githubusercontent.com/79532281/155029187-33297d5c-1648-43cf-b36b-5f236c9ba5ee.png)

* **Mobile Layout**

![mobile layout](https://user-images.githubusercontent.com/79532281/155029459-fad4ee59-2677-484a-9572-927fdf2822f1.png)

* As I neared completion of my project I was not happy with how the site looked on a mobile device so I decided to create a game rules button and change the image to a title. This reduced the amount of elements appearing on the screen and gives the site a cleaner look when viewed on desktop and mobile. Below is my final layout design

* **Game Layout**

![new layout](https://user-images.githubusercontent.com/79532281/156570312-0d304e8f-1936-4577-8297-c48eb2f278cd.png)

* **Game Rules**

![new layout with rules modal](https://user-images.githubusercontent.com/79532281/156570410-6eafd169-b70f-42a1-b8e9-329bea418461.png)

* **Winner Modal**

![new layout winner modal](https://user-images.githubusercontent.com/79532281/156570464-a1e9e39a-93ee-43a5-8d62-740cdb35ce08.png)

### Surface

* The site is bright and colourful and encourages user interaction. The site is a game so the user should want to stay on the site and have fun playing the game. When doing research for the project I came across the below image. I really liked the colour and the images used for each game element. I decided to use this as the base for my style and colour choices.

![hero-image](https://user-images.githubusercontent.com/79532281/156570739-c437d28a-0c1c-4c73-be17-f3098f178ad8.png)

#### Typography

* I chose to use two differant fonts for the site.

* Title / Headers / Result
  * For the game title, headers in my modal and result area I chose to use **Bebas Neue** as my main font with **cursive** as the backup.
 
* Body
  * For the game rules and scoreboard  I chose to use **Yanone Kaffeesatz** as my main font with **sans-serif** as the backup.

* These fonts give the site a modern look and grabs the users attention.

#### Colour Scheme

* The colour scheme was influenced by the image I found online. I like the background colour of the image and decided to use this as the background color for the site. Because the site is a game, I wanted the colour scheme to be bright and fun and the user to get a UX. To help with a colour scheme I used [Colormind](http://colormind.io/). I inputted the the background colour as my main colour and generated a colour scheme that I liked and felt had good contrast to help with accesibility on the site. 

* Below is the colour palette I chose:

![color pallette 2](https://user-images.githubusercontent.com/79532281/156571894-17920185-3c4a-4c46-88cb-6a4a8caa95c1.png)

## Features

### Site Structure

The site consists of one main page with four differant sections. Some areas of the site are only accessibly by interacting with a button or reaching the target game score.
The differant sections of the site are:

* Games title
* Game Rules button / modal
* Game Area
* Winners modal

#### Game Title

At the top of the screen is the games title. This will let the player know what game they are playing. The game icons will appear in the title, for example Rock will include the Rock icon. These images will be used as the game buttons so the user will know what each choice is from the title.

![game title](https://user-images.githubusercontent.com/79532281/156549093-90f150cd-f944-4c7c-81fe-6f243eb2a502.png)

#### Game Rules

Under the title is the Game Rules button. New users can click the button and a modal will appear and informs the user what score they must reach to win / lose the round and what each game element can defeat / be defeated by. Return users can use it to brush up on the rules or how to win the game. Users can return to the home screen by clicking the X in the top right hand corner.

![game rules button](https://user-images.githubusercontent.com/79532281/156573669-120dacf1-71cf-4abc-ae2c-49674be1e801.png)

![rules modal](https://user-images.githubusercontent.com/79532281/156573784-8c79b83a-d23f-408e-84d8-aadeea88fede.png)

#### Game Area

![game area](https://user-images.githubusercontent.com/79532281/156575970-c4a41426-167c-44a6-81dd-98242e926db2.png)

#### Game Buttons

This area is where the player can make their selection. I find these images really unique to the other icons you can find online and help. The player interacts with the game buttons by clicking on them, the mouse cursor will change to a pointer to let the user know the buttons can be interacted with and let the user know to click the button to make a selection.

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

#### Result Area

After the user makes their selection below the game buttons is the result area. This will let the user know if they won, lost or it's a draw. The user can see their choice, what the computer choose and the outcome of these choises.

![winning choice](https://user-images.githubusercontent.com/79532281/156574822-5d6d09cc-49a7-484e-b0ff-b598a7ec2d04.png)

![you lose](https://user-images.githubusercontent.com/79532281/156574837-4b994d9f-84d8-45ee-81fb-f9ef502e8c23.png)

![It's a draw](https://user-images.githubusercontent.com/79532281/156574868-fb12a273-7989-4c33-b6b9-3ed3c0bc6377.png)


#### Scoreboard

Below the result Area is the scoreboard. This keeps track on if the player won a round or the computer did. Depending on the winner the score is incremented, if it is a draw nobodys score will increase. This adds tension and excitment to the game as the user and computer could be level on score, 4 points each, and the next decision could be the winning or losing choice.

![score-board](https://user-images.githubusercontent.com/79532281/156576088-66c08803-765a-42b3-84d7-55bf98df4132.png)

####  Winner Modal

When the player or computer score reaches 5 they win the game and a winner modal appear. This lets the user know if they won or lost and what the score was. The Play Again button that will take the user back to the home screen and reset the game. This will encourage users to stay on the site longer and help get return users. They could want to continue a winning streak against the computer or finally break out of their losing streak.

![winner modal](https://user-images.githubusercontent.com/79532281/156576953-1da0ecf8-f488-42ff-b7e8-ee17f0e1e1ea.png)


### Future Features

Below are the future feature I would like to implement on the site.

* I would like to add animation to my game buttons. When the user makes their selection the button will have an animation to change the image.

* I would like to add images to the winnder modal. For example, if the player won an image of spock would appear congratulating them and if they lost maybe an image of Scissors cutting paper to tie in with the differant way the player can lose.


## Technologies Used

* Balsamiq
  * A wireframe was created to get the original deisgn layout.

* [Github](https://github.com/)
  * This was used as the host site for the code for the site.

* HTML
  * This was used to create the basic structure of the site.

* CSS
  * This was used to add style to the site.

* JavaScript
  * This was used to create the logic behind the game.

## Testing

#### HTML

* I tested my HTML in the HTML Validator. I fixed the warnings that were appearing and now the site passes with no issues.

![HTML Validation](https://user-images.githubusercontent.com/79532281/155358125-7d4aeaad-b0d1-4090-8649-4115537c004a.png)


#### CSS

* I tested my CSS in the CSS validator. I fixed the warnings that appeared and now the site passes with no issue.

![CSS validation](https://user-images.githubusercontent.com/79532281/155358540-53c5fbeb-4618-446e-99a9-d0ff1f89f8d8.png)


#### JavaScript

* I tested my JavaScript in JSHint. I fixed the errors and warnings that were appearing and there are no issues appearing now.

![JS Testing](https://user-images.githubusercontent.com/79532281/156577051-62eed5d5-64c0-461c-a3e2-ea13c903e4dc.png)


#### Lighthouse

I tested the site with Lighthouse and checked for both desktop and mobile. All catergories scored over 90 so I was happy with the result.

* **Desktop**

![lighthouse result new layout](https://user-images.githubusercontent.com/79532281/156577187-4031090c-dc21-4cda-a7a5-8280eae7dde0.png)

* **Mobile**

![lighthouse testing mobile](https://user-images.githubusercontent.com/79532281/156577272-2a05e59b-dc8d-49ac-bb24-d1cb103835b2.png)


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
* The colour pallette was created with [Colormind](http://colormind.io/)
* The responsive layout at the top of the README was created with [Am I Responsive](http://ami.responsivedesign.is/)
* The image the icons and background colour on the site was taken from [I love free software](https://www.ilovefreesoftware.com/26/featured/play-rock-paper-scissors-online-10-free-websites.html)
* The fonts came from [Google Fonts](https://fonts.google.com/)
* The if statement in the JavaScript code was created using W3schools as a guide [W3Schools](https://www.w3schools.com/js/js_if_else.asp)
* I got the Spock favicon icon from [Icons8](https://icons8.com/icons/set/characters)
* The modals on the site were created using W3schools as a guide [W3Schools - How to make a modal box](https://www.w3schools.com/howto/howto_css_modals.asp)
