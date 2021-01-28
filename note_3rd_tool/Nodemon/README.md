# Nodemon
Auto update backend project when changed.

### References 
References by 

- [Nodemon](https://www.npmjs.com/package/nodemon)

- https://ithelp.ithome.com.tw/articles/10189283
 

### Steps
 1. Install : 
 
     npm install -g nodemon
 
 2. Edit package.json 
 
        ...
         "scripts": {
           "start": "node ./bin/www",
           "dev": "nodemon ./bin/www"// <-add this line
         },
        ...
	
 3. Start project by command
     
	 npm run dev