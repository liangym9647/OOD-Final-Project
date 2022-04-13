# OOD-Final-Project
About Front End: (vueAdmin-template document)
Vue+JavaScript (node.js 14.0)

Download Visual Studio Code.

In Google Cloud Platform, you need to download Geocoding API, Maps JavaScript API and Places API.
To use google map, you should download:
•	npm install vue2-google-maps@0.10.7

note that:
1.	The key to Maps JavaScript API is in src/main.js (“key” attribute), you need to use your api key to gain location, otherwise the google map of trip and takeout section will not be worked.
2.	Domain names are in config/index.js.
3.	The api functions which connects between front end and back end are in document src/api.


About the back end: (groupthree.sql and ROOT.war)
We already packaged our backend program as a .war file, which name is ROOT.war. 
Tomcat 8.5.31 and MySQL 5.6.22 are required to run this ROOT.war file. 
Running Instruction:
1. Go to the tomcat installation folder.
2. Put the ROOT.war file in the webapps folder under the tomcat installation folder.
3. Execute “mysql -u root -p” in the terminal.
4. Input the password created in the installation process.
4. Execute “create database groupthree;” in the terminal to create a database.
5. Execute “use groupthree;” to enter the database created at the above step.
6. Copy the commands in the groupthree.sql file and paste in the terminal. Run these commands to create the tables needed for this project.
7. Use the terminal to enter the bin folder under the tomcat installation directory.
8. Run “startup.bat” to start the tomcat.


When all processes are finished, type “npm run dev” in Visual Studio Code terminal to run.

