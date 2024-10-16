# debt-database
A web-based UK debt database and comparison tool. Click on a region to find out the latest published household debt statistics!

## Overview
This project combines Django REST Framework on the backend with React for the frontend. 

debt-database presents a webpage with an interactive map: hover for the region name, click for household debt statistics for that region. 

All data sourced from the Office for National Statistics Wealth and Assets Survey published January 2022, measuring household debt from April 2018 to March 2020. 

## Setup
### Required Packages:
- Django
- Django Rest Framework
- Python
- React

## To Run
### Backend:
`cd debt-database`

`pipenv shell`

`pipenv install`

`python manage.py migrate`

`python manage.py runserver`

  
This will start the Django server on the localhost:8000 port.

### Frontend:
`cd debt-database`

`cd react-frontend`

`npm i`

`npm start`
  
This will start the React server on the localhost:3000 port.
