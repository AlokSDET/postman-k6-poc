// Auto-generated by the Load Impact converter

import "./libs/shim/core.js";
import "./libs/shim/expect.js";
import "./libs/shim/urijs.js";
import URI from "./libs/urijs.js";

export let options = { maxRedirects: 4 };

const Request = Symbol.for("request");
postman[Symbol.for("initial")]({
  options,
  collection: {
    id: "1",
    base_url: "https://postman-rest-api-learner.glitch.me/"
  },
  environment: {
    base_url: "https://sisclientweb-900149.campusnexus.dev"
  }
});

export default function() {
  postman[Request]({
    name: "Get data",
    id: "df246905-a21c-4dc2-8486-6ce60ca4d1a8",
    method: "POST",
    address:
      "https://sisclientweb-900149.campusnexus.dev/api/commands/Academics/ClassSection/Get",
    data: '{\r\n    "payload": {\r\n        "id": 8723\r\n    }\r\n}',
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    post(response) {
      pm.test("Status code is 200", function() {
        pm.response.to.have.status(200);
      });

      var rb = pm.response.json();
      pm.test("Verify response data", function() {
        pm.expect(rb).to.not.equal(null);
        pm.expect(rb.payload).to.not.equal(null);
        pm.expect(rb.payload.data).to.not.equal(null);
      });
      var saveNewBody = { payload: {} };
      saveNewBody.payload = rb.payload.data;
      saveNewBody.payload.finalCountRegisteredStudents = 2;
      saveNewBody.payload.numberRegisteredStudents = 2;

      pm.globals.set("gSaveNewRequestBody", JSON.stringify(saveNewBody));
      //console.log(pm.globals.get('gSaveNewRequestBody'));
      console.log(
        "--------------------------------------------------------------------------------------"
      );

      pm.test("Verify response data and properties", function() {
        var rb = pm.response.json();
        pm.expect(rb).to.not.be.null;
        pm.expect(rb).to.have.property("payload");
        pm.expect(rb.payload).to.have.property("data");
        var data = rb.payload.data;
        pm.expect(data).to.not.be.null;
        pm.expect(data).to.have.property("finalCountRegisteredStudents");
        pm.expect(data).to.have.property("numberRegisteredStudents");
      });

      pm.test("Payload data should exist and be an object", function() {
        const responseData = pm.response.json();

        pm.expect(responseData.payload).to.be.an("object");
        pm.expect(responseData.payload.data).to.be.an("object");
      });

      pm.test("Notifications array should be empty", function() {
        const responseData = pm.response.json();

        pm.expect(responseData.notifications).to.be.an("array").that.is.empty;
      });

      pm.test("Payload data should exist and be an object", function() {
        const responseData = pm.response.json();

        pm.expect(responseData.payload).to.exist.and.to.be.an("object");
      });
    },
    auth(config, Var) {
      const address = new URI(config.address);
      address.username("automationuser@CampusNexus.Dev");
      address.password("XSGLqAGQjgQLn2v");
      config.address = address.toString();
      config.options.auth = "basic";
    }
  });

  postman[Request]({
    name: "Post data",
    id: "085d9ba4-6499-4430-8c7d-9df9cfb8fa22",
    method: "POST",
    address: "{{base_url}}/api/commands/Academics/ClassSection/Save",
    data: "{{gSaveNewRequestBody}}",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    post(response) {
      pm.test("Response status code is 200", function() {
        pm.response.to.have.status(200);
      });

      pm.test(
        "Meeting patterns array is present and has expected number of elements",
        function() {
          const responseData = pm.response.json();

          pm.expect(responseData).to.have.property("payload");
          pm.expect(responseData.payload).to.have.property("data");
          pm.expect(responseData.payload.data)
            .to.have.property("meetingPatterns")
            .that.is.an("array");
          pm.expect(responseData.payload.data.meetingPatterns.length).to.equal(
            0
          ); // Replace 0 with the expected number of elements
        }
      );

      pm.test(
        "Enrollment status clock hours and credit hours are non-negative integers",
        function() {
          const responseData = pm.response.json();

          pm.expect(responseData.payload.data.enrollmentStatusClockHours)
            .to.be.a("number")
            .and.to.be.at.least(0);
          pm.expect(responseData.payload.data.enrollmentStatusCreditHours)
            .to.be.a("number")
            .and.to.be.at.least(0);
        }
      );

      /*
      pm.test("Content-Type header is application/json", function () {
          pm.expect(pm.response.headers.get("Content-Type")).to.include("application/json");
      });
      */

      pm.test("Entity state is a non-negative integer", function() {
        const responseData = pm.response.json();

        pm.expect(responseData).to.have.property("payload");
        pm.expect(responseData.payload).to.have.property("data");
        pm.expect(responseData.payload.data)
          .to.have.property("entityState")
          .that.is.a("number")
          .and.is.at.least(0);
      });

      pm.test("Notifications array is empty", function() {
        const responseData = pm.response.json();

        pm.expect(responseData.notifications).to.be.an("array").that.is.empty;
      });

      pm.test(
        "Enrollment status clock hours and credit hours should not be null",
        function() {
          const responseData = pm.response.json();

          pm.expect(responseData.payload.data.enrollmentStatusClockHours).to.not
            .be.null;
          pm.expect(responseData.payload.data.enrollmentStatusCreditHours).to
            .not.be.null;
        }
      );
    },
    auth(config, Var) {
      const address = new URI(config.address);
      address.username("automationuser@CampusNexus.Dev");
      address.password("XSGLqAGQjgQLn2v");
      config.address = address.toString();
      config.options.auth = "basic";
    }
  });
}


import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";

export function handleSummary(data) {
  return {
    "reports/k6_ClassSchedule_PW.postman_collection.html": htmlReport(data),
    stdout: textSummary(data, { indent: " ", enableColors: true }),
  };
}