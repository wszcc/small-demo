//这是webpack的配置文件
var path=require("path")
//使用html-webpack-plugin插件必须先引入
var htmlWebpackPlugin=require("html-webpack-plugin")
const { Template } = require("webpack")
const { Hash } = require("crypto")
module.exports={
    //入口起点
    entry:'./src/js/index.js',
    //输出
    output:{
        //输出文件名
        filename:'js/built.js',
        //输出路径
        path:path.join(__dirname,'build')
    },
    //loader的配置
    module:{
        rules:[
            //详细loader配置
            //不同文件要配置不同loader
            {
                //匹配哪些文件
                test:/\.css$/,
                //使用那些loader进行处理
                //use数组中执行顺序从右到左，在这里是从下到上
                use:[
                    //添加style标签，将js中的样式添加到head中执行。
                    'style-loader',
                    //将css文件变成commonjs模块加载到js中，里面内容都是样式字符串。
                    'css-loader'
                ]
            },{
                test:/\.less$/,
                use:[
                    
                    'style-loader',
                    'css-loader',
                    //将less文件编译成css文
                    'less-loader'
                ]
            },{
                //这种方法默认是处理不了HTML中的图片的
                //搜索结尾时png|jpg|gif的图片
                test:/\.(png|jpg|gif)$/,
                //这里要下载两个包，url-loader和file-loader，因为url-loader是依赖于file-loader的
                loader:'url-loader',
                options:{
                    //图片大小是8kb就就会被base64处理
                    limit:8*1024,
                    //缩短文件名字
                    name:'[hash:10],[ext]',
                    esModule:false,
                    outputPath:'imgs'   
                }
            },{
                //问题：url-loader默认是es6模块解析，html-loader是commonjs解析，会报错。
                //所以要关闭url-loader的es6模块解析，换成commonjs解析
                test:/\.html$/, 
                
                //这个是处理HTML中img图片，（负责引入名然后被urlloader进行处理）
                loader:'html-loader',
              
                
            },{
                //打包其他资源
                exclude:/\.(css|html|less|js|png|gif|jpg)$/,
                //打包其他资源用到的是file-loader
                loader:'file-loader'       
            },{
                test: /\.js$/,
                //排除node模块的js和bower的js
                exclude: /(node_modules|bower_components)/,
                use: {
                  loader: 'babel-loader',
                  options: {
                    //如果要使用@babel/preset-env这里需要在根目录新建一个babel的文件
                    // presets: ['@babel/preset-env']
                    //这里直接使用指定
                    presets: ['es2015']
                  }
                }
            },{
                 test:/\.vue$/,
                 loader:'vue-loader'
                }
        ]
    },
    resolve: {
        // alias:别名
        alias: {
            //指定vue使用vue.esm.js
          'vue$':'vue/dist/vue.esm.js'
        }
      },
    //plugins配置
    plugins:[
        //详细plugins配置
        //html-webpack-plugin会创建一个空的html文件然后银土打包输出的所有资源。。
        //以构造函数的方式调用html-webpack-plugin插件
        new htmlWebpackPlugin({
            //复制index.html里面的内容并自动引入我们打包的所有资源
            template:'./src/index.html'
        })
    ],
    //模式
    mode:'development',//开发模式
    // mode:'production'//生产模式
    //开发deserver来实现自动化
    //启动debserver指令为： npx webpack-dev-server
    devServer:{
        contentBase:path.join(__dirname,'build'),
        //启动自动编译
        compress:true,
        //端口号
        port:3000,
        //自动打开浏览器
        open:true
    }
}