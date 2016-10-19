## Create API Quickly

>
在前后端分离情况下，后端提供接口的速度往往无法满足个人的需求，为了方便前端开发，总需要有一套API接口提前开发出来；该程序就是为了方便前端开发提供通用的`API`接口。

## Requirements

- [mongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [npm](https://www.npmjs.com/)

## Getting Started

```
git clone https://github.com/xQuotes/CreateAPIQuickly.git
cd CreateAPIQuickly
npm install
npm install -g nodemon

// 启动 mongoDB
sudo mongod --dbpath=/path/mongodb

// 启动 server API
npm run dev
```

NOW! You can use the Server API at 
```
localhost:4444
```

## API CURD

url:
```
/api/[:db]/collection/[:collection]
/api/[:db]/collection/[:collection]/[:id]
```

#### 增加(Create)

- url: `/api/ali/collection/user`

- method: post

- request

```json
{
    "username": "",
    "email": "",
    "password": ""
}
```

- response

```json
{
    "code": 200,
    "message": "成功",
    "data": {
        "token": "",
        "username": ""
    }
}
```

#### 读取查询(Retrieve)

获取所有

- url: `/api/ali/collection/user`

- method: get

- request

```json
{
}
```

- response

```json
{
    "code": 200,
    "message": "成功",
    "data": [...]
}
```

获取单个

- url: `/api/ali/collection/user/31212sasasa`

- method: get

- request

```json
{
}
```

- response

```json
{
    "code": 200,
    "message": "成功",
    "data": {...}
}
```

#### 更新(Update)

#### 删除(Delete)




## Features

* webpack
* babel
