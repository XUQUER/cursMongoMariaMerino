docker run --name newmanVirtualio -t -v $(pwd):/etc/newman dannydainton/htmlextra run \
NttData-Student-Gencat.postman_collection.json \
-e NttData-Student-PRO.postman_environment.json \
-r htmlextra

docker run --name newmanAPI -t -v $(pwd):/etc/newman dannydainton/htmlextra run \
MongoDB-Data-API-Maria.postman_collection.json \
-e DataAPI_students.postman_environment.json \
-r htmlextra
