# 附录A　增长黑客应当关注的常用指标  

## 网站类产品常用指标  

* 页面浏览量（Page View，PV）   

在一定统计周期内（通常为24小时）所有访问者浏览的页面总数。  
该指标重复计算，即如果一个访问者浏览同一页面3次，那么PV就计算为3个。  
PV之于网站，就像是收视率之于电视，从某种意义上已成为投资者衡量商业网站表现的最重要尺度之一。  

严格意义上来说， PV只记录了页面被加载显示出的次数，并不能真正确保用户进行了浏览，  
有些网站会利用这一特性“刷”PV，例如在页面中嵌入不可见的iframe。  
还有的网站编辑为了完成PV指标，会将一篇长文（或组图）拆分成多页，从而制造出阅读量大的假象。  

* 独立访问者（Unique Visitor，UV）  

在一定统计周期内访问某站点的不同IP地址的人数。  
通常在同一天内，UV只记录第一次进入网站的具有独立IP的访问者。  
如果某人访问网易首页，又点开了三条新闻，则记作4个PV和1个UV。  

UV反映了网站覆盖的绝对人数，但没有体现出访问者在网站上的全面活动。  
此外，由于校园网络、企业机关等一些部门通常有统一的对外IP出口，  
依靠IP来判断的UV也并不能做到完全准确，更优的做法是结合Cookies。  

* 访问数（Visit）  

访问者从进入网站到离开网站之间的整个交互过程，视作一次Visit。  
它可能包含一组页面浏览行为。  

通常界定同一访问者的两次不同Visit的判定方法是间隔时长，如30分钟。  
这意味着如果同一访问者连续的两次页面访问之间间隔为15分钟，则视作一次Visit；  
如果间隔41分钟（因故暂时离开或阅读了一篇长文），则被切分为两次Visit。  

* 着陆页（Landing Page）  

指访问者浏览网站时所到达的第一个页面，又称用户捕获页。  
针对着陆页的分析追踪可作为判定外部广告或其他营销推广活动效果的依据，因此着陆页应当是经过恰当优化的。  

* 退出页（Exit Page）  

指访问者浏览网站时所访问的最后一个页面。  
退出页数量大，并不等同于网站的黏性差，此时应当参照退出数与页面浏览量的比值，即退出率。  
若某个页面本不该有较高的退出率（如在线购买流程的下单环节），则需要检查该页面，防止其成为整站的流量漏洞。  

* 跳出率（Bounce Rate）  

用于衡量整站或网页的黏性。跳出，指访问者仅仅浏览了一个网页就结束了访问（Visit）。  
整站跳出率＝全站跳出数/全站页面浏览量，它反映了整站的导航效率；  
而针对单独页面计算的跳出率＝该页面跳出数/该页面浏览量，它是对单个网页导航能力的评价。  
一般而言，跳出率越高代表网站的问题越大。  

* 展现数（Impressions）  

又称印象数，指广告在浏览器中被加载的次数。只要广告内容被加载出一次（如刷新了页面），展现数就加1。  

* 服务器打点数（Hit）  

打点指服务器收到一次请求。  
如访问者浏览了一个仅有10张图片的网页，则打点数记作11，其中包括1次网页请求和10次加载图片的请求。  

* **转化率（Conversion Rate）**  

转化，指达成了某种预设的目标，如引导用户完成下载、注册、新闻订阅、走完新手介绍流程等。  
转化率是计量这种转化成效的指标，可用于衡量网站内容对访问者的吸引程度和宣传效果等。  
例如，  
广告条的转化率＝通过广告条点击进入着陆页的流量/广告条的展现数；  
注册的转化率＝完成注册流程的用户数/到达注册页面的流量。  

* 停留时间（Duration）  

指一次访问的持续时长。  
通常较为简单的计算方法是用最后一次访问的时间减去访问第一张页面的时间（但这将无法统计最后一次访问的持续时长）。  

* 初访者（New Visitor）  

初次访问网站的访问者。  
通常用Cookie判断，并以一定时限为统计周期，通常为一个月。  
如果上月某人访问过网站，次月再次访问，则对于次月内的第一次访问行为而言，这个访问者仍视作该月内的一个新的初访者。  

* 回访者（Return Visitor）  

相对初访者而言，如果一个访问者在该月内重复访问，则视作回访者，也就是“回头客”。  
该指标衡量网站内容对访问者的吸引程度和网站实用性。  
统计周期内所有初访者数量＋所有回访者数量＝独立访问者数量。  

* 访问来源（Referrer）  

指一次访问或一个网页浏览的流量来源，又被称作“推荐来源”。  

访问来源可从不同维度进行划分。  
如按来源网站的性质，可划分为来自搜索引擎、网站推荐（如友情链接、广告条、软文植入）、  
无网站来源（用户直接进入网站，如从浏览器收藏夹点入、直接在地址栏输入域名）等；  
按来源网址的形式，可划分为来自域（如fanbing.net）、网站（如www.fanbing.net）或URL（如http://www.fanbing.net/about.html）；  
按照内外部，可划分为站外链接或站内来源。  

* 其他属性  
有的第三方统计工具可结合自身收集的其他数据，获取访问者进一步的信息，  
如地域分布、系统环境、性别比例、年龄分布、学历分布、职业分布等。  