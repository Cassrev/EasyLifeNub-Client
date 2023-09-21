## EasyLifeNub-Client

## Technologies Used

 ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white) 
 [![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-%231572B6.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/) ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Git](https://img.shields.io/badge/git%20-%23F05033.svg?&style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github%20-%23121011.svg?&style=for-the-badge&logo=github&logoColor=white) ![JSON Server](https://img.shields.io/badge/JSON_Server%20-%232a2e2a.svg?&style=for-the-badge&logo=JSON&logoColor=white) 
[![Django](https://img.shields.io/badge/Django%20-%23092E20.svg?&style=for-the-badge&logo=django&logoColor=white)](https://www.djangoproject.com/)
[![Python](https://img.shields.io/badge/Python%20-%233776AB.svg?&style=for-the-badge&logo=python&logoColor=white)](https://www.python.org/) 
![Visual Studio Code](https://img.shields.io/badge/VSCode%20-%23007ACC.svg?&style=for-the-badge&logo=visual-studio-code&logoColor=white)

 
## Getting Started

### Server Side
1. Clone this repository for the server side:
```sh
git@github.com:Cassrev/EasyLifeNub-Server.git
```
2. Initialize virtual environment:
```sh
pipenv shell
```
3. Install third party packages:
```sh
pipenv install django autopep8 pylint djangorestframework django-cors-headers pylint-django
```
1. Get the server running
```sh
python3 manage.py runserver
```


### Client Side
1. Clone this repository for the client side:
```sh

```
2. Install dependencies: 
```sh
npm install
```
3. Run the code 
```sh
npm start
```
4. Login credentials:
```txt
```
```txt
```

## ERD
https://dbdiagram.io/d/64f242d202bd1c4a5ed3904a

## Wireframe
https://www.figma.com/file/UMydgqFY4CfOVg0Axlmu1P/EasyLifeNub%2C-Fullstack-Capstone?type=design&node-id=117%3A1369&mode=design&t=QQHoz9CKUwfUbYUF-1


## Features

As a QA Tester, I should be able to see my ticket’s detail page 
Given the QA tester wants to see their ticket’s detail page
When the QA tester clicks their ticket’s title on their main page
Then they will be directed to their ticket’s detail page

As a QA Tester, I should be able to see a list of tickets page 
Given the QA tester wants to see a list of tickets
When the QA tester clicks “tickets” on side navbar
Then they will be directed to the games list page

As a QA Tester, I should be able to edit my ticket and save changes
Given the QA tester wants to edit their ticket and save changes
When the QA tester clicks the pencil(or edit button)
Then a popup form will show on that page(ticket list or detail page) they are currently on and edit their title or description
When the QA tester clicks the save changes button
Then the form disappears and changes are saved and shown

As a QA Tester, I should be able to cancel ticket edit
Given the QA tester wants to cancel ticket edit
When the QA tester clicks the cancel button on the popup form
Then the form will disappear and no changes are made

As a QA Tester, I should be able to delete my ticket
Given the QA tester wants to delete their ticket on ticket list or detail page
When the QA tester clicks the x(delete button)
Then their ticket is successfully deleted and no longer show

As a QA Tester, I should be able to create a ticket and submit the ticket
Given the QA tester wants to create a ticket on ticket list or detail page
When the QA tester clicks the create ticket button
Then they are directed to create ticket page and fill out the form and upload video proof
When the QA tester is done filling out the form and clicks submit ticket button
Then they are directed to ticket list page

As a QA Tester, I should NOT be able to delete other Tester’s tickets
Given the QA tester feels like they want to be evil and delete other tester’s tickets(if they are on ticket list page or ticket detail page)
When they look for the delete button
Then they will not see anything as there will be no button for them to click


As a QA Tester, I should NOT be able to edit other Tester’s tickets
Given the QA tester feels like they want to be evil and lame and edit other tester’s tickets(if they are on ticket list page or ticket detail page)
When they look for the edit button
Then they will not see anything as there will be no button for them to click
