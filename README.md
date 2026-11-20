# 纪念币发行目录

该项目整理纪念币发行规格、销售渠道和会员预订过程，供收藏者俱乐部查询各项受理状态。`fixtures/observations.json` 是合成发行通知、渠道批次与预约记录，不代表真实销售渠道、会员或实际库存。

本地环境使用 Node.js 22。运行 `npm test` 可检查合成资料是否可解析；容器环境可运行 `docker build -t coin-issue-directory .`，随后运行 `docker run --rm coin-issue-directory`。
