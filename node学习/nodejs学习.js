

// node适合的场景
Web场景
本地环境的构建   webpack gulp babel
语法优势


// 两个效率
运行效率
开发效率

// web服务的特点
IO密集
高并发

// IO操作的特殊性
CPU处理速度非常的快。
I/O操作是最花时间的。大部分非I/O操作是感受不到阻塞的过程的

// 非阻塞
函数立刻返回，不用等待I/O等操作完成。上一句不会阻塞下一句。


// 事件驱动
I/O等异步操作结束后的通知   emit一个事件，找对应的处理程序。而不是立即调用的
观察者模式


// 高并发解决办法
增加机器数  服务器集群
增加每台机器的CPU核心，多核


// apache的处理方式
每一个请求开启一个进程  CPU分配的最大进程数的有限的
请求过多时，必须排队等待。当有空闲的进程时，才能处理


// 进程
系统进行资源分配和调度的基本单位

// 线程
进程内的一个相对独立的，可调度的执行单元。与同属一个进程的其他线程共享进程资源。
如果一个进程只启用了一个线程。那么这个进程的所有资源就是这个进程的。

// 多线程
启动一个进程，在一个进程内启动多个线程，这样多个线程可以一起执行多个任务


// node单线程
单线程只是针对主进程，I/O操作系统底层多线程调度。 node是服务员，厨师怎么做菜它不管
单线程并不是单进程



// commonjs 
每个文件是一个模块，有自己的作用域。 一个文件有两个模块是不允许的
在模块内部 module 变量代表模块本身
module.exports 代表模块对外的接口


// require
/代表绝对路径  ./代表相对当前文件的路径
支持 js json node 扩展名。 不写时，依次查找
module被加载的时候执行，加载后缓存



// exports  module.exports   
const exports = module.exports   // exports 是 module.exports的快捷方式

exports.test = 100;    // 相当于在 module.exports下挂载了test属性

exports = { a:1, b:2, test:100 }   // 改变了exports的指向。此时exports和一个普通的对象没有区别。外部无法引用该文件 
module.exports = { a:1, b:2, test:100 }  	// 正确的写法   在commonjs中 模块对外的输出永远是module.exports


// global
global.test = 100;	// test将变成全局变量


// 标准IO 和 console
process.stdin.resume()   // 从操作系统中读入
process.stdin.setEncoding('utf8');
process.stdin.on('data',function(text){
	process.stdin.write(text.toUpperCase())  // 输出到操作系统进程
})

// 平台信息
process.arch  // x64 / ia32  系统架构
process.platform  // win32   平台信息
process.memoryUsage()   // {ress:常住内存大小,heapTotal:动态分配的可用内存,heapUsed:已使用的堆大小}
process.pid  // 当前进程的进程号

// 传递命令行 参数
process.argv  // 数组  如果有,前两个参数是node和这个脚本的名字
[ 
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\115A\\Desktop\\git\\node\\test.js',
  '2007',
  '0403'
]

// 退出程序,指定退出码
process.exit(1)  // node默认返回0的退出状态,非0的状态被认为是一个错误


process.cwd()  // current working directory  当前工作目录   linux中的pwd Print Working Directory

process.env  // 返回一个包含用户环境的 对象

// 设置process.env 的值 将 隐式的被转换成 字符串 类型


// cmd中的用户环境变量
set   // 查看所有环境变量
set port=1000   // 不要有空格 

// Linux中的用户环境变量
export   // 查看所有环境变量
echo port=1000     // 设置环境变量


// 路径
__filename   //  当前文件 
__dirname    //  当前文件的绝对路径   C:\Users\115A\Desktop\git\node
var index = __dirname + 'index.js';  //拼接路径   windows 和 UNIX 支持
var index = path.join(__dirname,'index.js')  // 更安全




// inspect 调试
node --inspect-brk app.js 	// 在刚开始的时候就停下来



//  promisify
const util = require('util');
const fs = require('fs');

const stat = util.promisify(fs.stat);
stat('.').then((stats) => {
  // Do something with `stats`
}).catch((error) => {
  // Handle the error.
});

const read = util.promisify(fs.readFile);
read('./a.txt').then( res => {
	console.log(res.tosString())
}).catch(error => {
	console.log(error)
})


// async 版本
async function test() {
	try {
		const content = await read('./a.txt');
		console.log(content.tosString())
	} catch(ex) {
		console.log(ex)
	}
}



// babel 
presets: []		// 各种插件的组合套餐
plugins: []		// preset里面处理不了的，需要安装plugin来解决。比如object.assign



// 单元测试  覆盖率  持续集成
尽早发现错误
防止分支偏离主干



// 反爬虫
User-Agent  Referer 验证码
单位时间访问次数，访问量
关键信息图片混淆
异步加载   // 返回一个空的HTML 核心内容使用html加载
懒加载	   // 用户滚动才会获取内容	
