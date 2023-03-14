//Insert one student with insertOne instruction
print("Insert one student with insertOne instruction")
printjson(db.students.insertOne(
  {name: "John Doe", major: "Computer Science", gpa: 3.5}
  )
)

//Insert multiple students with insertMany instruction
// If you want to insert only the documents that don't raise errors, you can use the "ordered" option and set it to false:
print("Insert multiple students with insertMany instruction")
db.students.insertMany([
  {name: "Sandra Doe", major: "Computer Science", gpa: 3.5},
  {name: "Jane Smith", major: "Mathematics", gpa: 3.8},
  {name: "Lola Power", major: "Artist", gpa: 5.0},  
  {name: "Sarah Johnson", major: "Biology", gpa: 3.2}
], { ordered: false })

//Find all students
print("Find all students")
printjson(db.students.find({}))

print("Find all students and limit to one student ")
printjson(db.students.find({}).limit(1))

//Find first student according insertion order
print("Find first student according insertion order")
printjson(db.students.findOne({}))

//Find all students ordered by name
print("Find all students ordered by name")
printjson(db.students.find().sort({name: 1}))

//
//Update a student with updateOne instruction
//
print("Updating a student with updateOne instruction")
printjson(db.students.updateOne({ name: "Sandra Doe" },{ $set: { gpa: 3.9 } } ) )
//
//Update multiple students with updateMany instruction
//
print("Updating multiple students with updateMany instruction")
printjson(db.students.updateMany(
    { major: "Biology" },
    { $set: { status: "active" } } ) )
//
//Delete multiple students with deleteMany instruction
//
print("Deleting multiples students with deleteMany instruction")
printjson(db.students.deleteMany({ gpa: { $eq: 3.2 } } ) )

//drop students collection
print("drop students collection")
printjson(db.students.drop())
