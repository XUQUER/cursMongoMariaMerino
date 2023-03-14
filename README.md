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

You can see the result at [atlas/crudResultAgainsAtlas.html](https://github.com/XUQUER/cursMongoMariaMerino/blob/main/atlas/crudResultAgainsAtlas.html)

