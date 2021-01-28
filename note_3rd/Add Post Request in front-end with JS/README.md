# Add Post Request in front-end with JS

Call Post method and body is json data, then get response is json data, too.

### References 
References by 

- [Fetch: POST json data](https://stackoverflow.com/questions/29775797/fetch-post-json-data)

### Steps
 1. Define function in App.js in React Project
 
          function testPostAPI(){
            fetch("http://localhost:5000/testpost_api", {
              method: "POST",
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({p1: "p1", p2: "p2"})
            }).then(res => {
              console.log("res = " + JSON.stringify(res));
              return res.json()
            }).then(res => console.log(res.p1 + "\n" + res.p2));
		    //output : Hello p1 Hello p2
	    }

 2. Backend service reference by [backend service](https://github.com/u0652804/CreateFullStackWithJS/tree/main/note_3rd/Add%20Post%20Router%20in%20backend%20with%20JS)
