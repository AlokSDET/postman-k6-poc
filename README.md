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

```