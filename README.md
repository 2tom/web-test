react, webpack, es6, redux, material-ui
============


# プロジェクト作成

### プロジェクトディレクトリ作成

```
$ mkdir [dir]
$ cd [dir]
$ npm init -y
$ vi package.json
{
  "name": "web-test",
  "version": "1.0.0",
  "description": "react, webpack, es6, redux, material-ui ============",
  "main": "index.js",
  "private": true,
  "scripts": {
    "build": "tsc",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

### typescriptをプロジェクトへインストール

```
$ npm install typescript@latest --save-dev
$ node_modules/.bin/tsc --init
```

### typescript型定義を持ったreactのインストール
```
$ npm install @types/react @types/react-dom --save-dev
$ npm install react react-dom --save
```

### reduxのインストール
```
$ npm install @types/redux @types/react-redux --save-dev
$ npm install redux react-redux --save
```


### material-uiのインストール
```
$ npm install @types/material-ui @types/react-tap-event-plugin --save-dev
$ npm install material-ui react-tap-event-plugin
```

### webpackのインストール
```
$ npm install webpack ts-loader webpack-dev-server --save-dev
```

- ts-loaderはwebpackを使う場合に必要なtypescript用モジュール
- typescriptにES6->ES5を変換させるので、babelはインストールしない

### package.jsonの設定
```
$ vi package.json

  "scripts": {
    "dev": "webpack-dev-server --progress --color --config ./webpack.config.dev.js", 
    "build": "webpack --progress --colors --config ./webpack.config.dev.js",
    "build:prod": "webpack --config ./webpack.config.prod.js",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

### tsconfig
```
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "es5",
        "noImplicitAny": true,
        "sourceMap": true,
        "sourceRoot": "./src",
        "outDir": "./dist",
        "jsx": "react"
    },
    "files": [
        "./src/Index.tsx"
    ],
    "exclude": [
        "node_modules"
    ]
}
```

### webpackコンフィグ
```
$ vi webpack.config.dev.js
var webpack = require('webpack');
module.exports = {
  entry: "./src/Index.tsx",
  output: {
    filename: "./dist/bundle.js",
    publicPath: "./dist"
  },
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: "ts-loader"}
        ]
      }
    ],
  },
  devServer: {
    contentBase: "./dist",
    inline: true,
    hot:true
  }
};

$ vi webpack.config.prod.js
var webpack = require('webpack');

module.exports = {
  entry: "./src/Index.tsx",
  output: {
    filename: "./dist/bundle.js"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env':{
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {loader: "ts-loader"}
        ]
      }
    ]
  },
  performance: {
    hints:false
  }
};
```

---------

### syntax check , test

```
$ npm install -g eslint
$ eslint -v
$ eslint --init

? How would you like to configure ESLint? Answer questions about your style
? Are you using ECMAScript 6 features? Yes
? Are you using ES6 modules? Yes
? Where will your code run? Browser
? Do you use CommonJS? No
? Do you use JSX? Yes
? Do you use React? Yes
? What style of indentation do you use? Spaces
? What quotes do you use for strings? Double
? What line endings do you use? Unix
? Do you require semicolons? Yes
? What format do you want your config file to be in? JSON

$ ls -l .eslintrc.json

$ vi .eslintignore 
node_modules/
test/
webpack.config.js
dist/
server/
```

