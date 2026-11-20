# 纪念币发行目录

该项目整理纪念币发行规格、官方渠道和销售批次公告，供收藏者按条件检索。`fixtures/observations.json` 是合成发行通知及渠道记录，不代表真实销售渠道或实际库存。

本地环境使用 Node.js 22。运行 `npm test` 可检查合成资料是否可解析；容器环境可运行 `docker build -t coin-issue-directory .`，随后运行 `docker run --rm coin-issue-directory`。
