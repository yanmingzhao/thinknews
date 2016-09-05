'use strict';var _inherits = require('babel-runtime/helpers/inherits')['default'];var _classCallCheck = require('babel-runtime/helpers/class-call-check')['default'];var _regeneratorRuntime = require('babel-runtime/regenerator')['default'];var _interopRequireDefault = require('babel-runtime/helpers/interop-require-default')['default'];exports.__esModule = true;var _qiniu = require(
'qiniu');var _qiniu2 = _interopRequireDefault(_qiniu);var _default = (function (_think$service$base) {_inherits(_default, _think$service$base);function _default() {_classCallCheck(this, _default);_think$service$base.apply(this, arguments);}

    /**
     * init
     * @return {}         []
     */_default.prototype.
    init = function init() {
        _think$service$base.prototype.init.call(this);};



    /**
     * 七牛上传
     * @param filePath 要上传文件的本地路径
     * @param key 上传到七牛后保存的文件名
     * @returns {*}
     */_default.prototype.
    uploadpic = function uploadpic(filePath, key) {var istoken = arguments.length <= 2 || arguments[2] === undefined ? false : arguments[2];var 



        bucket, 

        putPolicy, 


        uptoken, 



        token, 




        uploadFile;return _regeneratorRuntime.async(function uploadpic$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:uploadFile = function uploadFile(uptoken, key, localFile) {
                        var deferred = think.defer();
                        var extra = new _qiniu2['default'].io.PutExtra();
                        _qiniu2['default'].io.putFile(uptoken, key, localFile, extra, function (err, ret) {
                            if (!err) {
                                // 上传成功， 处理返回值
                                console.log(ret.hash, ret.key, ret.persistentId);
                                deferred.resolve(ret);} else 
                            {
                                // 上传失败， 处理返回代码
                                console.log(err);
                                deferred.resolve(false);}});


                        return deferred.promise;};uptoken = function uptoken(bucket, key) {var putPolicy = new _qiniu2['default'].rs.PutPolicy(bucket + ":" + key);return putPolicy.token();};_qiniu2['default'].conf.ACCESS_KEY = "WHiDm1RC1M2Tu8YaKISZ7oGQ_rCSYANssvzbJNoH";_qiniu2['default'].conf.SECRET_KEY = "5IcItq-zdJiEdtuU5SrR5TbeRmZxXLhDG5NtwADh";bucket = 'ming';if (!(istoken && filePath == null)) {context$2$0.next = 8;break;}putPolicy = new _qiniu2['default'].rs.PutPolicy(bucket);return context$2$0.abrupt('return', putPolicy.token());case 8:token = uptoken(bucket, key);console.log(token); //构造上传函数
                    //noinspection JSAnnotator
                    context$2$0.next = 12;return _regeneratorRuntime.awrap(uploadFile(token, key, filePath));case 12:return context$2$0.abrupt('return', context$2$0.sent);case 13:case 'end':return context$2$0.stop();}}, null, this);};

    //删除资源
    _default.prototype.remove = function remove(key) {var 

        setup, 


        bucket, 
        delfile;return _regeneratorRuntime.async(function remove$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:delfile = function delfile() {
                        var deferred = think.defer();
                        //构建bucketmanager对象
                        var client = new _qiniu2['default'].rs.Client();
                        //删除资源
                        client.remove(bucket, key, function (err, ret) {
                            if (!err) {
                                // ok
                                deferred.resolve(true);} else 
                            {
                                console.log(err);
                                deferred.resolve(false);}});


                        return deferred.promise;};context$2$0.next = 3;return _regeneratorRuntime.awrap(think.cache("setup"));case 3:setup = context$2$0.sent;_qiniu2['default'].conf.ACCESS_KEY = setup.QINIU_AK;_qiniu2['default'].conf.SECRET_KEY = setup.QINIU_SK;bucket = setup.QINIU_BUCKET;context$2$0.next = 9;return _regeneratorRuntime.awrap(


                    delfile());case 9:return context$2$0.abrupt('return', context$2$0.sent);case 10:case 'end':return context$2$0.stop();}}, null, this);};


    //获取文件信息
    _default.prototype.stat = function stat(key) {var 
        setup, 


        bucket, 


        stat;return _regeneratorRuntime.async(function stat$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:stat = function stat() {
                        var deferred = think.defer();
                        //构建bucketmanager对象
                        var client = new _qiniu2['default'].rs.Client();
                        //获取文件信息
                        client.stat(bucket, key, function (err, ret) {
                            if (!err) {
                                console.log(ret.hash, ret.fsize, ret.putTime, ret.mimeType);
                                deferred.resolve(ret);} else 
                            {
                                console.log(err);
                                deferred.resolve(err);}});


                        return deferred.promise;};context$2$0.next = 3;return _regeneratorRuntime.awrap(think.cache("setup"));case 3:setup = context$2$0.sent;_qiniu2['default'].conf.ACCESS_KEY = setup.QINIU_AK;_qiniu2['default'].conf.SECRET_KEY = setup.QINIU_SK;bucket = setup.QINIU_BUCKET;context$2$0.next = 9;return _regeneratorRuntime.awrap(

                    stat());case 9:return context$2$0.abrupt('return', context$2$0.sent);case 10:case 'end':return context$2$0.stop();}}, null, this);};

    //音视频转码
    _default.prototype.pfop = function pfop() {var 
        setup, 





        bucket, 
        key, 


        pipeline, 


        fops, 


        saveas_key, 


        opts, 



        PFOP;return _regeneratorRuntime.async(function pfop$(context$2$0) {while (1) switch (context$2$0.prev = context$2$0.next) {case 0:context$2$0.next = 2;return _regeneratorRuntime.awrap(think.cache("setup"));case 2:setup = context$2$0.sent;_qiniu2['default'].conf.ACCESS_KEY = setup.QINIU_AK;_qiniu2['default'].conf.SECRET_KEY = setup.QINIU_SK; //要转码的文件所在的空间和文件名
                    bucket = setup.QINIU_BUCKET;key = 'thinkjs-create-project.mp4';pipeline = 'abc';fops = "avthumb/mp4/s/640x360/vb/1.25m";saveas_key = _qiniu2['default'].util.urlsafeBase64Encode(saved_bucket + ':' + saved_key);fops = fops + '|saveas/' + saveas_key; // console.log(saveas_key);
                    opts = { pipeline: pipleline };PFOP = _qiniu2['default'].fop.pfop(bucket, key, fops, opts, function (err, ret) {if (!err) {console.log(ret);
                            // 上传成功， 处理返回值
                            console.log('curl ' + 'http://api.qiniu.com/status/get/prefop?id=' + ret.persistentId);} else 
                        {
                            // 上传失败， 处理返回代码
                            console.log(err);}});case 13:case 'end':return context$2$0.stop();}}, null, this);};return _default;})(think.service.base);exports['default'] = _default;module.exports = exports['default']; //转码所使用的队列名称。
//要进行转码的转码操作。
//可以对转码后的文件进行使用saveas参数自定义命名，当然也可以不指定文件会默认命名并保存在当前空间