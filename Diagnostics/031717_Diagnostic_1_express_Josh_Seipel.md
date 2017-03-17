# Diagnostic Unit 2.1

### Question 1: What is the Request/Response Cycle?  How does it work?

The 'request' is a request by the user that goes to a certain page url.
The response is the result or 'response'/'return' of said page.

The request is sent to a server and that said request, returns the response
to the client for rendering.


### Question 2: What are the differences between a GET request and a POST request?

GET is looking for just a text file that just has data or info.
That file cannot be altered in its current state and must be rerouted to a
diffent page for altering.

POST creates a new post or text file.

### Question 3: What does `npm init` do?

NPM init initializes the directory your in to later accept node packages.

### Question 4: What does CRUD stand for?  What are the HTTP verbs that are associated with each function?

CRUD ----- HTTP Verbs
/////////////////////
Create --- POST
Read --- GET
Update --- PUT
Delete --- Delete

### Question 5: If we have a form where we want to create new data, what type of `method` do we use in our form?

method="POST"


### Question 6: If the following form was submitted, what would `action="myScript.js"` do?

```
<form method="POST" action="myScript.js?_method=PUT">
  <input type="text" value="name"/>
  <button type="submit">Submit</button>
</form>
```

- It would redirect you to the home page to show the latest update.

### Question 7: Write an express route that handles a POST request to the url `/menus` and redirects to the `/homepage`


router.post('/menus', function(req, res){
	res.render('/homepage');

});


### Question 8: In the following express route, write how you would grab the values of `:id` and `:song_id` in javascript.

```
app.get("/artist/:id/song/:song_id"), function(req, res){
  var id = id;
  var songId = song_id;
  	res.render('/artist');
  ?????? Can't remember!!


}
```

### Question 9: What is MVC? How have we been using it so far?

Model View Controller
We are separating our data and views and controllers to dynamically send
back info.


## Bonus Question

### Question 10: Write an express route that handles a GET request to the url `/products` and sends back the JSON object {error: "Bad Request"}

router.get('/products', function(req, res){
	res.render('{{error}}');
});

?????????????



