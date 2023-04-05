/*
 Navicat Premium Data Transfer

 Source Server         : localhost_3306
 Source Server Type    : MySQL
 Source Server Version : 50717
 Source Host           : localhost:3306
 Source Schema         : lostandfound

 Target Server Type    : MySQL
 Target Server Version : 50717
 File Encoding         : 65001

 Date: 03/01/2023 16:02:05
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for chat
-- ----------------------------
DROP TABLE IF EXISTS `chat`;
CREATE TABLE `chat`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `adminid` bigint(20) NULL DEFAULT NULL COMMENT '管理员id',
  `ask` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '提问',
  `reply` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回复',
  `isreply` int(11) NULL DEFAULT NULL COMMENT '是否回复',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600646442 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '聊天交流' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of chat
-- ----------------------------
INSERT INTO `chat` VALUES (51, '2023-02-06 16:23:33', 1, 1, '提问1', '回复1', 1);
INSERT INTO `chat` VALUES (52, '2023-02-06 16:23:33', 2, 2, '提问2', '回复2', 2);
INSERT INTO `chat` VALUES (53, '2023-02-06 16:23:33', 3, 3, '提问3', '回复3', 3);
INSERT INTO `chat` VALUES (54, '2023-02-06 16:23:33', 4, 4, '提问4', '回复4', 4);
INSERT INTO `chat` VALUES (55, '2023-02-06 16:23:33', 5, 5, '提问5', '回复5', 5);
INSERT INTO `chat` VALUES (56, '2023-02-06 16:23:33', 6, 6, '提问6', '回复6', 6);
INSERT INTO `chat` VALUES (1612600213390, '2023-02-06 16:30:13', 1612600082211, NULL, '你好，请问士大夫撒旦法 ', NULL, 0);
INSERT INTO `chat` VALUES (1612600355096, '2023-02-06 16:32:34', 1612600082211, 1, NULL, '你好，请打发电房 ', 0);
INSERT INTO `chat` VALUES (1612600646441, '2023-02-06 16:37:25', 1612600082211, NULL, '你好按时发生', NULL, 1);

-- ----------------------------
-- Table structure for config
-- ----------------------------
DROP TABLE IF EXISTS `config`;
CREATE TABLE `config`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '配置参数名称',
  `value` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '配置参数值',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '配置文件' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of config
-- ----------------------------
INSERT INTO `config` VALUES (1, 'picture1', 'http://localhost:8080/lostandfound/upload/1612600391084.jpg');
INSERT INTO `config` VALUES (2, 'picture2', 'http://localhost:8080/lostandfound/upload/picture2.jpg');
INSERT INTO `config` VALUES (3, 'picture3', 'http://localhost:8080/lostandfound/upload/picture3.jpg');
INSERT INTO `config` VALUES (6, 'homepage', NULL);

-- ----------------------------
-- Table structure for discusswupinxinxi
-- ----------------------------
DROP TABLE IF EXISTS `discusswupinxinxi`;
CREATE TABLE `discusswupinxinxi`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `refid` bigint(20) NOT NULL COMMENT '关联表id',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '评论内容',
  `reply` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回复内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600548200 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '物品信息评论表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of discusswupinxinxi
-- ----------------------------
INSERT INTO `discusswupinxinxi` VALUES (91, '2023-02-06 16:23:33', 1, 1, '评论内容1', '回复内容1');
INSERT INTO `discusswupinxinxi` VALUES (92, '2023-02-06 16:23:33', 2, 2, '评论内容2', '回复内容2');
INSERT INTO `discusswupinxinxi` VALUES (93, '2023-02-06 16:23:33', 3, 3, '评论内容3', '回复内容3');
INSERT INTO `discusswupinxinxi` VALUES (94, '2023-02-06 16:23:33', 4, 4, '评论内容4', '回复内容4');
INSERT INTO `discusswupinxinxi` VALUES (95, '2023-02-06 16:23:33', 5, 5, '评论内容5', '回复内容5');
INSERT INTO `discusswupinxinxi` VALUES (96, '2023-02-06 16:23:33', 6, 6, '评论内容6', '回复内容6');
INSERT INTO `discusswupinxinxi` VALUES (1612600548199, '2023-02-06 16:35:47', 31, 1612600082211, '第三方个梵蒂冈单方事故第三方', '');

-- ----------------------------
-- Table structure for jubaotousu
-- ----------------------------
DROP TABLE IF EXISTS `jubaotousu`;
CREATE TABLE `jubaotousu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `bianhao` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '编号',
  `jubaoneirong` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '举报内容',
  `xiangguanpingzheng` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '相关凭证',
  `yonghuming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `xingming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `jubaoshijian` date NULL DEFAULT NULL COMMENT '举报时间',
  `sfsh` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '否' COMMENT '是否审核',
  `shhf` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '审核回复',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `bianhao`(`bianhao`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1672732884915 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '举报投诉' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of jubaotousu
-- ----------------------------
INSERT INTO `jubaotousu` VALUES (1672732884914, '2023-01-03 16:01:24', '1672732869496', '11111111111', 'http://localhost:8080/lostandfound/upload/1672732877529.jpg', '123', ' 发发', '2023-01-03', '', '', 1612600082211);

-- ----------------------------
-- Table structure for messages
-- ----------------------------
DROP TABLE IF EXISTS `messages`;
CREATE TABLE `messages`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '留言人id',
  `username` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '留言内容',
  `reply` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '回复内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600653097 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '留言板' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of messages
-- ----------------------------
INSERT INTO `messages` VALUES (81, '2023-02-06 16:23:33', 1, '用户名1', '留言内容1', '回复内容1');
INSERT INTO `messages` VALUES (82, '2023-02-06 16:23:33', 2, '用户名2', '留言内容2', '回复内容2');
INSERT INTO `messages` VALUES (83, '2023-02-06 16:23:33', 3, '用户名3', '留言内容3', '回复内容3');
INSERT INTO `messages` VALUES (84, '2023-02-06 16:23:33', 4, '用户名4', '留言内容4', '回复内容4');
INSERT INTO `messages` VALUES (85, '2023-02-06 16:23:33', 5, '用户名5', '留言内容5', '回复内容5');
INSERT INTO `messages` VALUES (86, '2023-02-06 16:23:33', 6, '用户名6', '留言内容6', '回复内容6');
INSERT INTO `messages` VALUES (1612600224760, '2023-02-06 16:30:24', 1612600082211, '123', '你好去，爱的那个防守打法阿萨德', '电风扇广东佛山更第三方广东省发个第三方感到十分');
INSERT INTO `messages` VALUES (1612600653096, '2023-02-06 16:37:32', 1612600082211, '123', '发撒旦法大佛山大', '');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `title` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '标题',
  `introduction` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '简介',
  `picture` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '图片',
  `content` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '内容',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600439603 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '系统公告' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES (71, '2023-02-06 16:23:33', '标题1电风扇告诉对方给对方是个第三方感到十分', '简介1士大夫广东佛山感到十分广东佛山感到十分', 'http://localhost:8080/lostandfound/upload/news_picture1.jpg', '<p>内容1单方事故的双方各第三方告诉对方公司的风格士大夫公司的手打广东省</p><p>单方事故的双方各的双方各单方事故第三方</p><p>第三方公司的风格范德萨</p><p>单方事故第三方g</p>');
INSERT INTO `news` VALUES (72, '2023-02-06 16:23:33', '标题2', '简介2', 'http://localhost:8080/lostandfound/upload/news_picture2.jpg', '内容2');
INSERT INTO `news` VALUES (73, '2023-02-06 16:23:33', '标题3', '简介3', 'http://localhost:8080/lostandfound/upload/news_picture3.jpg', '内容3');
INSERT INTO `news` VALUES (74, '2023-02-06 16:23:33', '标题4', '简介4', 'http://localhost:8080/lostandfound/upload/news_picture4.jpg', '内容4');
INSERT INTO `news` VALUES (75, '2023-02-06 16:23:33', '标题5', '简介5', 'http://localhost:8080/lostandfound/upload/news_picture5.jpg', '内容5');
INSERT INTO `news` VALUES (76, '2023-02-06 16:23:33', '标题6', '简介6', 'http://localhost:8080/lostandfound/upload/news_picture6.jpg', '内容6');
INSERT INTO `news` VALUES (1612600439602, '2023-02-06 16:33:58', '程序电风扇的双方各第三方gdsfgdfs', ' 士大夫给对方是个的双方各电风扇', 'http://localhost:8080/lostandfound/upload/1612600437037.jpg', '<p>第三方广东佛山个第三方感到十分感到十分广东省法规 </p>');

-- ----------------------------
-- Table structure for storeup
-- ----------------------------
DROP TABLE IF EXISTS `storeup`;
CREATE TABLE `storeup`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `refid` bigint(20) NULL DEFAULT NULL COMMENT '收藏id',
  `tablename` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表名',
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收藏名称',
  `picture` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '收藏图片',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600544002 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '收藏表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of storeup
-- ----------------------------
INSERT INTO `storeup` VALUES (1612600544001, '2023-02-06 16:35:43', 1612600082211, 31, 'wupinxinxi', '物品名称1', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian1.jpg');

-- ----------------------------
-- Table structure for token
-- ----------------------------
DROP TABLE IF EXISTS `token`;
CREATE TABLE `token`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `userid` bigint(20) NOT NULL COMMENT '用户id',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `tablename` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '表名',
  `role` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '角色',
  `token` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '新增时间',
  `expiratedtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '过期时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = 'token表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of token
-- ----------------------------
INSERT INTO `token` VALUES (1, 1612600082211, '123', 'yonghu', '用户', 'k6b0cb5focuitwn85zros5jrztjn0e36', '2023-02-06 16:28:09', '2023-01-03 17:01:01');
INSERT INTO `token` VALUES (2, 1, 'abo', 'users', '管理员', 'vlqo7c0vqe52bw5p3vdrf6auj00nznsc', '2023-02-06 16:31:30', '2023-01-03 16:43:17');
INSERT INTO `token` VALUES (3, 1612600506967, '234', 'yonghu', '用户', '3q3frjvtf394yhk3vxk35milohus71m9', '2023-02-06 16:35:24', '2023-02-06 17:35:25');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `username` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '密码',
  `role` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT '管理员' COMMENT '角色',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '新增时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户表' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (1, 'admin', '123456', '管理员', '2023-02-06 16:23:33');

-- ----------------------------
-- Table structure for wupinfenlei
-- ----------------------------
DROP TABLE IF EXISTS `wupinfenlei`;
CREATE TABLE `wupinfenlei`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `wupinleibie` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物品类别',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600305765 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '物品分类' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wupinfenlei
-- ----------------------------
INSERT INTO `wupinfenlei` VALUES (21, '2023-02-06 16:23:33', '物品类别1');
INSERT INTO `wupinfenlei` VALUES (22, '2023-02-06 16:23:33', '物品类别2');
INSERT INTO `wupinfenlei` VALUES (23, '2023-02-06 16:23:33', '物品类别3');
INSERT INTO `wupinfenlei` VALUES (24, '2023-02-06 16:23:33', '物品类别4');
INSERT INTO `wupinfenlei` VALUES (25, '2023-02-06 16:23:33', '物品类别5');
INSERT INTO `wupinfenlei` VALUES (26, '2023-02-06 16:23:33', '物品类别6');
INSERT INTO `wupinfenlei` VALUES (1612600305764, '2023-02-06 16:31:45', '电子产品');

-- ----------------------------
-- Table structure for wupinxinxi
-- ----------------------------
DROP TABLE IF EXISTS `wupinxinxi`;
CREATE TABLE `wupinxinxi`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `wupinbianhao` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物品编号',
  `wupinmingcheng` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物品名称',
  `wupinleibie` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物品类别',
  `wupintupian` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '物品图片',
  `shiqushijian` datetime(0) NULL DEFAULT NULL COMMENT '拾取时间',
  `shiqudidian` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '拾取地点',
  `lianxidianhua` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '联系电话',
  `yonghuming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '用户名',
  `wupinmiaoshu` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL COMMENT '物品描述',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `wupinbianhao`(`wupinbianhao`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600590354 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '物品信息' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of wupinxinxi
-- ----------------------------
INSERT INTO `wupinxinxi` VALUES (31, '2023-02-06 16:23:33', '物品编号1', '物品名称1', '物品类别1', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian1.jpg', '2023-02-06 16:23:33', '拾取地点1', '13823888881', '用户名1', '物品描述1');
INSERT INTO `wupinxinxi` VALUES (32, '2023-02-06 16:23:33', '物品编号2', '物品名称2', '物品类别2', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian2.jpg', '2023-02-06 16:23:33', '拾取地点2', '13823888882', '用户名2', '物品描述2');
INSERT INTO `wupinxinxi` VALUES (33, '2023-02-06 16:23:33', '物品编号3', '物品名称3', '物品类别3', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian3.jpg', '2023-02-06 16:23:33', '拾取地点3', '13823888883', '用户名3', '物品描述3');
INSERT INTO `wupinxinxi` VALUES (34, '2023-02-06 16:23:33', '物品编号4', '物品名称4', '物品类别4', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian4.jpg', '2023-02-06 16:23:33', '拾取地点4', '13823888884', '用户名4', '物品描述4');
INSERT INTO `wupinxinxi` VALUES (35, '2023-02-06 16:23:33', '物品编号5', '物品名称5', '物品类别5', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian5.jpg', '2023-02-06 16:23:33', '拾取地点5', '13823888885', '用户名5', '物品描述5');
INSERT INTO `wupinxinxi` VALUES (36, '2023-02-06 16:23:33', '物品编号6', '物品名称6', '物品类别6', 'http://localhost:8080/lostandfound/upload/wupinxinxi_wupintupian6.jpg', '2023-02-06 16:23:33', '拾取地点6', '13823888886', '用户名6', '物品描述6');
INSERT INTO `wupinxinxi` VALUES (1612600165759, '2023-02-06 16:29:25', '1612600214639', '都是', '物品类别6', 'http://localhost:8080/lostandfound/upload/1612600138757.jpg', '2023-02-06 16:30:14', 'sad富士达fsad', '13455667788', '123', '范德萨公司的风格第三方广泛地宿管大概的双方各手打发给第三方根深蒂固第三方');
INSERT INTO `wupinxinxi` VALUES (1612600590353, '2023-02-06 16:36:29', '1612600682832', ' 手打发', '物品类别1', 'http://localhost:8080/lostandfound/upload/1612600575834.jpeg', '2023-02-06 16:38:02', '士大夫撒旦法dsa', '13455665566', '123', '号发的规划安抚撒fas');

-- ----------------------------
-- Table structure for yonghu
-- ----------------------------
DROP TABLE IF EXISTS `yonghu`;
CREATE TABLE `yonghu`  (
  `id` bigint(20) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `addtime` timestamp(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0) COMMENT '创建时间',
  `yonghuming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL COMMENT '用户名',
  `mima` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '密码',
  `xingming` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '姓名',
  `nianling` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '年龄',
  `xingbie` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '性别',
  `shouji` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '手机',
  `youxiang` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '邮箱',
  `touxiang` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL COMMENT '头像',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `yonghuming`(`yonghuming`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1612600506968 CHARACTER SET = utf8 COLLATE = utf8_general_ci COMMENT = '用户' ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of yonghu
-- ----------------------------
INSERT INTO `yonghu` VALUES (11, '2023-02-06 16:23:33', '用户1', '123456', '姓名1', '年龄1', '男', '13823888881', '773890001@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang1.jpg');
INSERT INTO `yonghu` VALUES (12, '2023-02-06 16:23:33', '用户2', '123456', '姓名2', '年龄2', '男', '13823888882', '773890002@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang2.jpg');
INSERT INTO `yonghu` VALUES (13, '2023-02-06 16:23:33', '用户3', '123456', '姓名3', '年龄3', '男', '13823888883', '773890003@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang3.jpg');
INSERT INTO `yonghu` VALUES (14, '2023-02-06 16:23:33', '用户4', '123456', '姓名4', '年龄4', '男', '13823888884', '773890004@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang4.jpg');
INSERT INTO `yonghu` VALUES (15, '2023-02-06 16:23:33', '用户5', '123456', '姓名5', '年龄5', '男', '13823888885', '773890005@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang5.jpg');
INSERT INTO `yonghu` VALUES (16, '2023-02-06 16:23:33', '用户6', '123456', '姓名6', '年龄6', '男', '13823888886', '773890006@qq.com', 'http://localhost:8080/lostandfound/upload/yonghu_touxiang6.jpg');
INSERT INTO `yonghu` VALUES (1612600082211, '2023-02-06 16:28:02', '123', '123', ' 发发', '21', '女', '13455445566', '43534534@qq.com', 'http://localhost:8080/lostandfound/upload/1612600255512.jpg');
INSERT INTO `yonghu` VALUES (1612600506967, '2023-02-06 16:35:06', '234', '234', '地方', '23', '女', '13455665544', '4353453@qq.com', NULL);

SET FOREIGN_KEY_CHECKS = 1;
