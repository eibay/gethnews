#GetHNews 
This is a [hacker news](http://hn.algolia.com/api/v1/search_by_date?query=nodejs) aggregator web application. The main topic to gather was preset initially as "nodejs" and gets fetched once every hour as part of the requirement of this project. It allows user to hover and delete news from the main page or view it in detail on a separate page. The news are being persisted in the database as well. 

For faster simulation of rendering the latest news by Rails API, kindly change the setting of the scheduler to the desired minutes at *config/initializers/aggregator.rb* file at line 36.

This application demonstrates the use of Ruby On Rails API only backend and ReactJS as a separate front-end. 

##Setup the environment:
1. Clone the repository:
  * "git clone https://github.com/eibay/gethnews"   : creates a local copy to your computer

2. Rails API (use port: 3001)
  * open a terminal: $> 
    * $> cd gethnews-api 
    * $> rails db:create db:migrate
    * $> rails s -p 3001
  - open a browser and type "localhost:3001/articles" to view the json output

3. Frontend-UI (runs at port: 3000) 
  * from terminal: $>
    * $> yarn install
    * $> yarn start

  * opens your default browser automatically and renders the page at *localhost:3000*

###Thanks to:

* Ruby 2.4.2
* Rails 5.1.4
* ReactJS
* Postgresql