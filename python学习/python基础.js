
// 基本数据类型
int			// 整数   不区分short int long
float		// 浮点数 不区分单精度和双精度（double）


// 除法 会得到float类型
type(2/2)  		// float
type(2//2)		// int


// 双斜杠
1//2    // 0   会自动转成整数，自动保留整数部分



// 0B表示二进制  bin方法实现其他进制转换成二进制
0b10   // 2
bin(2)		//0b10 


// 0o表示八进制


// 0x表示十六进制  hex方法实现其他进制转换成十六进制
hex(10)		// 0xa


// int方法实现其他进制转换成十进制
int(True)		// 1


// 布尔值 首字母必须大写
True
False


// bool方法 把非0的数字转成True，把0转成False


// 字符串截取		字符串对象是无可变的
'hello'[0:5]			// hello
'hello world'[0,-1]		// hello worl

a = 'hello'
a.replace('h','a')		// replace方法返回一个新字符串，但不会改变原来的字符串



//数组 list
a = ['first', 'second', 'third', 'forth'];
a[0]    	// first  返回字符串
a[0:2] 		// ['first', 'second']   带冒号返回数组
a[-1:] 		// ['forth']  带冒号返回数组


L = list(range(100))
L[:10]		//  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]   取前十个
L[-10:]		//  [90, 91, 92, 93, 94, 95, 96, 97, 98, 99]	取后十个




['first'] + ['second']  	// concat	
['first'].append('second')	// push		没有返回值
['first','second'].pop()	// pop	 	返回之后一个值
a.pop(3)  		// 删除索引3的元素
['first'] * 2	// ['first', 'first']



// 元祖  (1,2,3)   元祖一旦定义了就无法修改，没有append,pop等操作。也更安全
(1,)	//带上逗号才是一个元素的tuple
(1,2,3)[0]			// 1  		访问
(1,2,3)[0:2]		// (1,2)    截取
(1,2,3) + (4,5)		// concat
(1,2) * 2 			// (1, 2, 1, 2)


type((1))		// int
type((1,))		// tuple


// in   indexOf
3 in [1,2,3,4,5]	// True
8 not in [1,2,3,4,5]	// True


// len   length
len('hello')		// 5
len((1,2,3))		// 3


// max   min
max((1,2,3,4,5))



// 序列 和 集合
序列是有序的, 可以用下标，切片访问		// 字符串, list , tuple
集合是无序的，没有加法					// set


// set   {}		集合没有重复 
set()			// 定义空集合
type({})		// dict
type({1,2,3})	// <class 'set'>
{1,1,2,2}		//	{1,2}	集合没有重复


// 集合的操作
len({1,2,3})	//	3
1 in {1,2,3}	// True

a = (1,2,3)
a.add(4)   		// 增加
a.remove(4)   	// 删除


{1,2,3,4,5} - {1,2}		// {3, 4, 5}    差集
{1,2,3,4,5} & {1,2}		// {1,2}		交集
{1,2,3} | {1,2,5}		// {1,2,3,5}	合集	 没有加法




// dict 字典	key value   查找和插入的速度极快，不会随着key的增加而变慢；需要占用大量的内存
type({})		// dict

a = {'b': '1'}   a.age  	// key不存在则会报错  js则返回undefined
a.get('age')				// 返回none
a.get('age', -1)			// 通过get方法可以避免报错  返回-1

a.pop('b')		// 删除一个





// 基本类型
int str tuple


// 引用类型
list set dict




// for in 循环
a = (1,2,3,4,5)
sum = 0
for x in a:
	sum = sum + x
print(sum)





// 常用函数
input('age:')		// 返回str类型


print('hello', end = '|')	// 默认换行


range(0,10)			// 从 0 - 9
range(0,10, 2)		// 步长是2
range(10,0, -2)		// 递减
range(10,10)			// 从10开始

list(range(10,20))	// [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]




// 数据类型转换
int('123')
float('1.23')
bool(12)
str(100)





// 函数  def开头   pass什么都不做	默认返回值是None
def nop():
    pass


// 返回多个值   tuple
def test(x=3):   	// 默认参数是3
	return	x, x+5

res = test(5)
print(res) 		//	(5, 10)



// 关键字参数  接收必填参数name和age之外。接收任意其他参数。以Map的形式展示
def person(name, age, **kw):
    if 'city' in kw:
        # 有city参数
        pass
    if 'job' in kw:
        # 有job参数
        pass
    print('name:', name, 'age:', age, 'other:', kw)



// 限定关键词参数的名字
def person(name, age, *, city='Beijing', job):
    print(name, age, city, job)





 