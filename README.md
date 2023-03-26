## curs mongoDB maria merino

### mongosh running external javaScript files agains virtualiogs mongodb

Examples:
Create a collection and insert two examples
```
mongosh mongodb://5.tcp.eu.ngrok.io:12769/school CreateSchoolSchema.js
```
Find first student (if no order is specified, it shows documents in the order they have been inserted)
```
mongosh mongodb://5.tcp.eu.ngrok.io:12769/school GetStudents.js
```

### execute postman files via newman docker
I've used newman docker from [dannydainton/htmlextra](https://hub.docker.com/r/dannydainton/htmlextra)

```
docker run --name newmanNtt -t -v $(pwd):/etc/newman dannydainton/htmlextra run \
NttData-Student-Gencat.postman_collection.json \
-e NttData-Student-PRO.postman_environment.json \
-r htmlextra
```

### mongosh running external javaScript files agains my Atlas
mongosh &quot;mongodb+srv://cluster0.yuby1a9.mongodb.net/students&quot; --apiVersion 1 --username rmerino CrudStudentsExercise.js

### mongosh using JSON Schema in .js to validate schema
CollectionValidation.js applies validation schema and index restriction to a collection.
  StudentsInsert.js test the validation rules.
  Use mongosh to run them.
  The Scripts uses environtment variables DB_NAME and COL_NAME. They are required. Create them:
  DB_NAME the name of the database in which is the collection
  COLL_NAME the name of the collection on wich you want to apply the validation schema

### RESULTS
You can see the result at [Results page](https://2124-95-129-255-249.eu.ngrok.io)
