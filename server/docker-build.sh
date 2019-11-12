npm install
npm run build
cp -r ../dist ./dist
sudo docker build -t koa-ts-api-server .
rm -rf ./dist