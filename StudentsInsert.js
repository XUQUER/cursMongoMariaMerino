const COL_NAME = process.env.COL_NAME
var col = db[COL_NAME];

//Works one time:
//print(col.insertOne({name: "Jack", major: "Biology", gpa: 3.5}))
//throw an error and exit
//print(db.students.insertOne({name: "Jack", major: "Biology", gpa: 3.5}))
//print(db.students.insertOne({major: "Biology", gpa: 3.5}))
//print(db.students.insertOne({name: "Not Possible", major: "Biology", gpa: "hola"}))

// Using insertMany and ordered : false, we can continue the inserts when an error occurred
try {
  col.insertMany( [
    {name: "Jack", major: "Biology", gpa: 3.5},
    {name: "Jack", major: "Biology", gpa: 4.8},
    {major: "Biology", gpa: 3.5},
    {name: "nom", major: "Biology", gpa: "no possible"},
    {name: "OK", major: "Computers", gpa: 4.7},
  ],
  {
    ordered: false
  } );
} catch (e) {
  print (e);
}

printjson(col.find());