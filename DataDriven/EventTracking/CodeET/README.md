# 代码埋点

传统代码埋点
实现方案：Coding阶段手动埋点。
代表解决方案：友盟、百度统计。
优点：灵活、准确，可以定制化。
缺点：业务埋点量非常大，开发成本高，不易维护，如果要修改、新增埋点，需要重新发版。

代码埋点是指在产品开发阶段，PM通过对产品上线后需要做的数据分析的场景，设计数据需求，
撰写数据需求文档，然后交由开发在每个需要采集的数据点写入代码，通过写入的代码进行数据监测与上报。

即在需要埋点的节点调用接口直接上传埋点数据，友盟、百度统计等第三方数据统计服务商大都采用这种方案。

## 特点

代码埋点虽然使用起来灵活，但是开发成本较高，并且一旦上线就很难修改。
如果发生严重的数据问题，只能通过发热修复解决。

代码埋点是一种典型的命令式编程，因此埋点代码常常要侵入具体的业务逻辑，这使埋点代码变得很繁琐并且容易出错。