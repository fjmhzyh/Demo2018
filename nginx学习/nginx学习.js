


// linxu软件安装的规则
--prefix选项是配置安装的路径，如果不配置该选项，
安装后可执行文件默认放在/usr/local/bin，
库文件默认放在/usr/local/lib，
配置文件默认放在/usr/local/etc，
其它的资源文件放在/usr/local/share，


// 查看iptables规则
iptables -L 
iptables -t nat -L 

// 关闭iptables规则
iptables -F
iptables -t nat -F

// 检查yum源，列出所有gcc的包 
yum list | grep gcc 

// 查看 selinux是否开启  disable为关闭
getenforce   


// 关闭 selinux
setenforce 0



// Nginx 
Nginx 是一个开源且高性能，可靠的HTTP中间件、代理服务



// Nginx 优点

	// IO多路复用epoll
	多个描述符的IO操作都能在一个线程里面并发交替地顺序完成。复用指复用一个线程
	epoll 采用回调函数的方式。且没有最大连接数的限制

	// 轻量级
	功能模块少
	代码模块化

	// CPU亲和
	把CPU的核心与nginx的worker绑定在一起。把每个worker进行绑定在一个CPU上。减少CPU切换的消耗

	// sendFile工作机制
	不需要经过用户空间，直接通过内核空间传递静态文件




// Nginx yum 安装
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1

在/etc/yum.repos.d 目录下新建 nginx.repo  输入以上内容



// /etc/logrotate.d/nginx  日志轮询，切割日志的配置
日志目录  // /var/log/nginx
缓存目录	// /var/cache/nginx


// nginx 可执行程序在 usr/local/sbin/nginx



// nginx基本配置
events{
	worker_connections 10000 		// 最大连接数  一般10000足够了
	use	epoll		// 使用的内核模型
}


http {
	server {
		listen 80
		server_name localhost     // 可以写域名

		// 一个斜杠是默认访问的首页
		location / {
				root /home/www/tdbank-node/dist/;
  	    try_files $uri $uri/ /index.html;
  	    index  index.html index.htm;
		}

		// 统一返回一个错误页面
		error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   html;
    }

	}
}



// location 匹配优先级
=     精确匹配
^~    前缀匹配
~\~*  正则匹配     // ~* 不区分大小写   ~区分大小写


// try_files 按顺序检测文件是否存在，如果存在则返回文件
location /{
	try_files $uri $uri/ /index.html    // 如果不存在，则返回index.html 
}

// rewrite  url重定向
rewrite reg replacement [flag]



// 获取用户真实IP
set x_real_ip = $remote_addr      // x_real_ip就是真实IP



// curl http://www.baidu.com   可以看到响应报文

// curl -v http://www.baidu.com > /dev/null   可以看到请求和响应报文



// log_format




// 静态资源
 非服务端动态生成的文件。 如图片，视频，文件。 html,css,js


// 静态资源的web服务  常见于动静分离， CDN


// 作为静态资源服务的配置
sendfile  on/off  默认off



// 正向代理  代理客户端
翻墙  一个公司只有一台电脑能上网


// 反向代理	 代理服务端
服务器



// 代理配置语法  proxy_pass





// 常见恶意行为
爬虫恶意抓取，资源盗用
防盗链
