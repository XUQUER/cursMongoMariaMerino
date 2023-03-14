## curs mongoDB maria merino

### mongosh running external javaScript files

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


