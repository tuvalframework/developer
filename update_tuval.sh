
npm uninstall @tuval/core
npm install @tuval/core --save-dev

npm uninstall @tuval/cg
npm install @tuval/cg --save-dev

npm uninstall @tuval/graphics
npm install @tuval/graphics --save-dev

npm uninstall @tuval/forms
npm install @tuval/forms --save-dev

docker-compose down
docker rmi bpmgenesis/portal:1.0 --force
docker rmi bpmgenesis/realm-broker:1.0 --force
docker-compose up