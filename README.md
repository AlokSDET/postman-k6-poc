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
3. Rename the imported enviornment files in uat or sit or prod 
4. Execute below scripts to convert postman collections to k6 script-
'node convert_postman_k6.js uat'  // here uat is environment we need to pass as command line argument.
you can pass sit or prod or any name which matches with your enviornment file.
5. Execute below scripts to execute k6 script to generate the matrix and html report.
'node k6_execution_report_generation.js'
6. If you face any issue in deleting folder , please retry to execute steps 4 multiple time untill you get success.






```