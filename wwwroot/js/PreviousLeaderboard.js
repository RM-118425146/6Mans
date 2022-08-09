function loadClient() {
    gapi.client.setApiKey("AIzaSyCMTmKWgb0Ox0PJsaYh0uC29jzDGUnin0k");
    return gapi.client.load("https://sheets.googleapis.com/$discovery/rest?version=v4")
        .then(function() { console.log("GAPI client loaded for API"); },
              function(err) { console.error("Error loading GAPI client for API", err); });
  }
  // Make sure the client is loaded and sign-in is complete before calling this method.
  function execute1() {
    return gapi.client.sheets.spreadsheets.values.get({
      "spreadsheetId": "1NiEV_4su7zp38TeUDGx63HORvWTZEOWzh6XQCW89r1Y",
      "range": "'Elite'!B3"
    })
        .then(function(response) {
                // Handle the results here (response.result has the parsed body).
                console.log("Response", response);
                document.getElementById('EliteWinner').textContent = response.result.values[0].toString();
              },
              function(err) { console.error("Execute error", err); });
  }
  function execute2(){
    return gapi.client.sheets.spreadsheets.values.get({
            "spreadsheetId": "1NiEV_4su7zp38TeUDGx63HORvWTZEOWzh6XQCW89r1Y",
            "range": "'Premier'!B3"
          })
              .then(function(response) {
                      // Handle the results here (response.result has the parsed body).
                      console.log("Response", response);
                      document.getElementById('PremWinner').textContent = response.result.values[0].toString();
                    },
                    function(err) { console.error("Execute error", err); });
  }
  function execute3(){
    return gapi.client.sheets.spreadsheets.values.get({
              "spreadsheetId": "1NiEV_4su7zp38TeUDGx63HORvWTZEOWzh6XQCW89r1Y",
              "range": "'Championship'!B3"
            })
                .then(function(response) {
                        // Handle the results here (response.result has the parsed body).
                        console.log("Response", response);
                        document.getElementById('champWinner').textContent = response.result.values[0].toString();
                      },
                      function(err) { console.error("Execute error", err); });
  }
  gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "1004677156648-kftf2851sr1h4rsv43uqkrffmcmcle07.apps.googleusercontent.com"});
  });