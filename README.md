# Ostrich

Ostrich 是一个有力的项目管理工具，支持消息提醒、聊天、任务分组、项目邀请、GTD、日历等功能。

## 技术实现

Ostrich 的实现采用了前后端分离的架构。前端主要采用了 [Angular](https://angular.cn) 框架第 5 版以及一个基于 Angular 的 Material 风格框架 material2，后端采用了 [Spring Boot](https://projects.spring.io/spring-boot/) 框架，版本号为 1.5.9.

后端主要使用的数据库是 [PostgreSQL 10](https://www.postgresql.org/)，支持一系列传统文档数据库的功能。在缓存和临时存储（比如说邀请码）部分，项目使用了 [Redis](https://redis.io/)，一个快速的内存键值对数据库。

由于系统需要异步执行诸如发邮件之类费时操作，项目引用到了著名的消息队列系统 [RabbitMQ](https://www.rabbitmq.com/)，通过消息队列实现解耦。

## 目录结构

整个项目分为三个部分：

* src 目录，存放了后端主体部分的源代码
* frontend 目录，存放了前端部分的源代码
* swift 目录，存放了邮件服务的源代码

其中，src 目录是一个普通的 Spring Boot 应用代码结构。

* annotation，自定义注解，比如用户验证
* config，Spring Boot 配置类
* entity，Spring Data 实体类
* exception，自定义异常类，用以在控制器中返回错误
* repsitory，DAO 层
* request，针对不同的请求类型定义的 Plain Old Java Object
* response，类似 request，为不同的响应所定义
* service，一些通用逻辑
* storage，文件存储部分
* web，主要控制器和拦截器

## 如何运行

生产环境项目的运行并不依赖于 angular cli，只需提前以生产模式编译好（运行 `ng build --aot --prod`）后放入 Spring Boot 的静态文件目录（target/classes/static）。

启动 Ostrich，只需在项目根目录运行 `mvn spring-boot:run -Drun.profiles=local` 命令。要运行 Swift，请至 swift 目录下运行相同命令。请注意，在运行前，可能需要执行 `mvn install` 安装依赖。

如果没有成功安装 RabbitMQ、PostgreSQL 和 Redis，项目无法正常运行。请在两个项目对应的 application-local.properties 文件中修改相关的连接配置参数。发邮件的消息队列名为 mailing.

* PostgreSQL 默认端口 5432
* Redis 默认端口 6379
* RabbitMQ 默认端口 5672

项目成功运行后，在浏览器内打开[本地 8080 端口](http://localhost:8080)即可访问。请确保端口没有被其他应用所占用。
