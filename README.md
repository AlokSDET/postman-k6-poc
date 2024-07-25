---
runme:
  id: 01HMBGE4D0EX65QAN11F5P197E
  version: v3
---

# postman-k6-poc

```sh {"id":"01HMBGECEV5F5QJT1SR6CZH9YV"}

---------------------------------------------------------------------------------------------------------

Steps to convert postman collection to k6 script and execute k6 script to test 
the performance of api .

it will generate the report in html file.

1. Import all collections from postman to this project under collections folder.
2. Import all enviornments from postman to this project under enviornment folder.
3. Import all test data and keep under testdata folder in csv or json format.
4. Execute below scripts to convert postman collections to k6 script-
'node convert_postman_k6.js uat testdata.json'  // here uat is environment file namewe need to pass as command line argument. testdata.json is test data file .
5. Execute below scripts to execute k6 script to generate the matrix and html report.
'node k6_execution_report_generation.js'
6. If you face any issue in deleting folder , please retry to execute steps 4 multiple time untill you get success.
7. if we have to run collection with data then try to keep only one collection at the same time under collections/collections-with-data folder.
8. if we have to run collection without data then we can keep multiple together under collections/collections-without-data folder.
9. we can create individual script like postman-to-k6:sample and k6:sample.


-------------

Demo 1st Aug:

Hi Everyone Good Evening !

I am Alok Shrivastava working for double verify account , having 13 yrs of experience in testing and test automation.

Today we will deep dive in different technologies and tools for API automation. Will look on the different strategy and approaches for the same.


Expectation - Everyone knows basic API testing and test automation. So its knowledge sharing session , whoever knows its crash course for them and who does know they can get some overview from this session.
Agenda - 

At the broader way Agenda of this session is to Promote shift left testing and in sprint automation:  


In Agile world and if we have to pick shift left testing - we mostly follow test pyramid where major chunk of testing is unit testing , integration or API testing and very less of UI testing.

How we can make use of API testing automation in early days to reduce the cost:

Whatever we talk today, it won’t take much time and coding knowledge but we can achieve very quickly :

API Testing - is not about just testing the functionality , its about testing the security of api, performance of api also: 



Agenda - 

Mock server in postman
Postbot
Postman test cases (faker, env ,global env, authentication bearer token, query param, file upload )automation test strategy - negative and positive test cases
Chaining response
Postman performance 
Postman canary
Newman 
Postman to k6
Bruno 
Postman plugin
Bruno plugin 
Faker lib in postman
Graphql
Playwright API testing 

Functional Testing: Postman, RestAssured, SoapUI.
Load and Performance Testing: JMeter, Gatling, Locust.
Security Testing: OWASP ZAP, Burp Suite.


Load Testing: Evaluate API performance under expected load conditions.
Soak Testing: Assess API performance over an extended period.
Stress Testing: Determine API behavior under extreme load conditions.


Session is kind of overview, not detailed one.lets start , will take up Q&A at the end of the session.

Say API development is not yet started, how QA can involve in testing : 
Mocking the service request 

From PRD/ document- we can create path, what will be verb/option/method, what will be url, body, response code, body.

Strategy - negative test cases (put invalid input, null values and check if api is handling error gracefully).
Talk about status code - 405 , method not supported, 401, 403 , 400

Strategies your performance testing here in postman - performance 

Talk about throughput, response time, 90th percentile, 

* Response Time: How quickly the application responds under load. Ideal should be less than 500 ms
* Throughput: The number of requests the system can handle per second.
* Error Rate: The percentage of requests that fail under load.

Flipkart - 
* Load Testing: Simulate users browsing, searching for products, and making purchases, especially during peak sales periods.
* Soak Testing: Monitor the platform's performance over extended periods, such as during long sales events.
* Stress Testing: Test the platform’s limits during flash sales or significant promotions, where user traffic spikes.

Why newman- command line tool for postman for cicd.

Node project , install npm , 

Create git project , GitHub actions ,/jenkins - Newman run collection name env name 

Performance Testing - 
K6 is performance testing tool from grafana .you don’t have to install k6 or write those scripts separately.

There are some unsupported features like pm.sendrequest …it’s in initial phase so evolving.

vus: 10,
5  duration: '30s',
 

stages: [
6    { duration: '30s', target: 20 },
7    { duration: '1m30s', target: 10 },
8    { duration: '20s', target: 0 },
9  ],

Bruno - 
•We can use git as version control for Bruno if we have to share collection but in postman, we need to take license to share with another team member.
We can install npm lib, create PR, It will be clear what changes we put

 brew install Bruno
Grapql ( if response returns long json, but I don’t want to process for whole, want to retrieve few items then we can query)
https://dashboard.stepzen.com/explorer?endpoint=https://publicb6c3b42f10e2f1eb.stepzen.net/api/typicode/__graphql


Npm install @playwright/test.  Npm init @playwright/test
Create config file
Create speck file - add playwright api tests, with authentication, env file (dot env) ,data from json









```