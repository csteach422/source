/**
  app.js - js for sqlite test...
**/

(function() {
	//check for page initialisation and #home - page init for jQuery mobile
	$(document).on("pageinit", "#home", function(e) {
		//prevent any bound defaults
		e.preventDefault();
    //properties
    var db;
    var table1 = "test_table";

		//loader function after deviceready event returns
		function onDeviceReady() {
      //open db connection - create db if not available
      db = window.sqlitePlugin.openDatabase(
        {
          name: "testDB.db",
          location: 'default'
        });

      //create table
      createTable(table1);

      //add data to table
      var tableData = {
        title: "test title",
        desc: "test description"
      }
      addData(table1, tableData);
		}

    function createTable(table) {
      //create table for db
      db.transaction(function(transaction) {
        transaction.executeSql('CREATE TABLE IF NOT EXISTS '+table+' (id integer primary key, title text, desc text)', [],
        function(tx, result) {
          console.log("table created successfully");
        },
        function(error) {
          console.log("error creating table.");
        });
      });
    }

    function addData(table, data) {
      var title = data.title;
      console.log(title);
      var desc = data.desc;
      console.log(desc);
      //add data to table - test_table
      db.transaction(function(transaction) {
        var executeQuery = 'INSERT INTO '+table+' (title, desc) VALUES (?,?)';
        transaction.executeSql(executeQuery, [title,desc],
          function(tx, result) {
          console.log('success - data inserted into table');
          },
          function(error){
            console.log('error - data not inserted into table');
        });
      });
    }

    //view all data in table
    function viewDataAll(table) {
      console.log("view data all...");
      db.transaction(function(transaction) {
        transaction.executeSql('SELECT * FROM '+table, [], function (tx, results) {
          var resLen = results.rows.length;
          console.log("table results="+JSON.stringify(results));
          for (i = 0; i < resLen; i++){
            console.log("id="+results.rows.item(i).id+"-title="+results.rows.item(i).title+"-desc="+results.rows.item(i).desc);
            $("#data-output").append("<p>id="+results.rows.item(i).id+" - title="+results.rows.item(i).title+" - desc="+results.rows.item(i).desc)
          }
        }, null);
      });
    }

    //handle button tap for file write
    $("#dataAll").on("tap", function(e) {
      e.preventDefault();
      console.log("all data...");
      viewDataAll(table1);
    });

		//as deviceready returns load onDeviceReady()
		$(document).on("deviceready", onDeviceReady);
	});

})();
