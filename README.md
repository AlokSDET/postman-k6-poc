---
runme:
  id: 01HMBGE4D0EX65QAN11F5P197E
  version: v3
---

# postman-k6-poc

```sh {"id":"01HMBGECEV5F5QJT1SR6CZH9YV"}
Refer ppt for readme.

create node project 
sign up in influx db 
create organisation and bucket name
create a js file and paste code 
run file using 'node node.js'

-----------------
Signup in Grafana Cloud and K6 cloud
install k6
create file.js
run 'k6 run k6.ks'
login in cloud 'k6 login cloud -t token'  https://app.k6.io/tests/new/cli
run in cloud 'k6 cloud k6.js'
run and stream result in k6 cloud - 'k6 run -o cloud k6.js'

we can create test cases in Test Builder grafana, can record test using k6 plugin in Chrome.
K6 is for dashboard
Grafana is to create new test cases  by test script or builder or even recorded tests will be saved in grafana default project.
Out in json file  - 'k6 run k6_script.js --out json=file.json'
Out in json file  - 'k6 run k6_script.js --out csv=file.csv'
Debug in http mode - '--http-debug ="full"'

---------------------------------------------------------------------------------------------------------

Steps to convert postman collection to k6 script and execute k6 script to test 
the performance of api .

it will generate the report in html file.

1. Import all collections from postman to this project under collections folder.
2. Import all enviornments from postman to this project under enviornment folder.
3. Rename the imported enviornment files in uat or sit or prod 
4. Execute below scripts to convert postman collections to k6 script-
'node convert_postman_k6.js uat'  // here uat is environment we need to pass as command line argument.
you can pass sit or prod or any name which matches with your enviornment file.
5. Execute below scripts to execute k6 script to generate the matrix and html report.
'node k6_execution_report_generation.js'
6. If you face any issue in deleting folder , please retry to execute steps 4 multiple time untill you get success.






```