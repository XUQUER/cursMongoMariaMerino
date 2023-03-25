// The script apply a Schema validation on a collection of a database.
// 
// To use this script, the environment variables DB_NAME and COL_NAME should exist.
// DB_NAME should contain the name of the database.
// COL_NAME should contain the name of the collection to which 
// you want to apply the validation Schema.
//
// If any of the names stored in DB_NAME or COL_NAME doesn't exist they will be created. 
// https://www.mongodb.com/docs/v4.4/tutorial/write-scripts-for-the-mongo-shell/

const DB_NAME = process.env.DB_NAME
const COL_NAME = process.env.COL_NAME

checkEnvironment();
checkDataBase();
createCollection(COL_NAME)

var col = db[COL_NAME];
printInitialInfo(col);
// restrict duplication of name and major
db.students.createIndex( { name: 1, major: 1 }, { unique: true } )
// apply JSON validation Schema
applyValidation(col);
// https://www.mongodb.com/docs/manual/reference/method/db.getCollectionInfos/
printjson(db.getCollectionInfos({ name: col.getName() }));


function checkEnvironment(){
    var missing = "";
    if(!DB_NAME){
    missing = 'DB_NAME';
    }

    if (!COL_NAME) {
    missing = missing + ' COL_NAME';
    }

    if(missing){
    missing = 'Nothing has been done, please set the following environment vbles: ' + missing;
    throw missing;
    }
}

function printInitialInfo(col){
  console.log("Create Validation Schema on:")
  console.log("Data Base Name: ", db.getName())
  console.log("Collection Name: ", col.getName())
}

function checkDataBase(){
  var dbList = JSON.stringify(db.adminCommand('listDatabases'));
  var dbExists = dbList.search(DB_NAME);

  if(!dbExists){
    console.log("Database ", DB_NAME, " will be created");
    console.log("Connected to: ", DB_NAME);
    db = db.getSiblingDB(DB_NAME);
  }
  else{
    console.log("Database ", DB_NAME, " already exists,");
    if(db.getName() == DB_NAME){
      console.log("And you are alread connected to it.");
    }
    else{
      console.log("It will be created and connected.");
      db = db.getSiblingDB(DB_NAME);
    }
  }
}

function createCollection() {
  var myArray = db.getCollectionNames();
  console.log(myArray);
  var col = db[COL_NAME];
  const collectionExists = myArray.includes(col.getName());
  
  if (!collectionExists) {
    console.log("Collection \'", col.getName(), "\' will be created");
    db.createCollection(col.getName())
  }
  else{
    console.log("Collection '", col.getName(), "' already exists");
  }
}

function applyValidation(col) {
  db.runCommand({
    "collMod": col.getName(),
    "validator": {
      $jsonSchema: {
        "bsonType": "object",
        "description": "Document describing a student",
        "required": ["name"],
        "properties": {
          name: {
            bsonType: "string",
            description: "'name' must be a string and is required"
          },
          gpa: {
            bsonType: ["double"],
            description: "'gpa' must be a double if the field exists"
          }
        },
      }
    }
  })
}