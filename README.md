## Unit 4 Project - Materia Medica Application

Introduction 

Every herbalist has their own unique experiences with the herbs that they get familiar with as they expand upon their knowledge base. 

This application allows herbalists to share their personal Materia Medica (kind of like a dictionary of herbs and their uses) with others as well as to continue to add to their own over time. 

Each user will have the ability to login to their own account,or to sign up for an account if they don't already have one. 

Once logged in they'll be able to add information to their Materia Medica, make changes to their previous entries, or delete their information if they wish to do so. 

Each user will be able to view other herbalists' data, but they will not have the ability to make any changes to someone else's data. 

## Technologies Used:

* Full Stack MERN application 
* Deployed on Heroku
* REACT frontend
* Express backend
* MongoDB Atlas - Database
* Node.js 
* Bootstrap? Materialize? - Styling

## ERD

User -|---< Post

## Getting Started:

[Trello] !(https://trello.com/b/2BOOpOao/unit-4-project)
[GitHub] !(https://github.com/jennynm1010/materiamedica)
[Heroku] !(https://materia-medica.herokuapp.com/)

## Screenshots: 

![Homepage](https://i.imgur.com/Gw8fH3U.png)
![About](https://i.imgur.com/2CEPcSu.png)
![NewPost](https://i.imgur.com/nb2nCTh.png)
![Login](https://i.imgur.com/BMjklXt.png)
![Signup](https://i.imgur.com/z14GNys.png)


## Unsolved Problems:

 * There's a slight bug when navigating to the main page when initially opening up the site. 
 * There are some CSS elements that need improvement (buttons, card layout, forms).

## Future Enhancements: 

* I'd spend more time updating the CSS styling
* Include the date to each post
* I'd include the ability to update the posts in the event of new information, or typos 
* Ability to upload images of the herbs on the cards
* adding user chat ability via socket.io