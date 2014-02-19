    $(function(){
        var testObj = {msg: "Hello, world!"};
        var myTest = $(HandlebarsTemplates.test(testObj));
        console.log(myTest)
          $("#testCon").append(myTest);
    });