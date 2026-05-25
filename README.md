# Site Clone Practice

一个用于前端复刻练习的 React + Vite 项目骨架。

## 目标
- 根据截图、页面观察和交互描述，逐步实现相似的前端页面。
- 重点练习布局、视觉层级、组件拆分、交互状态和响应式适配。
- 不直接复制目标网站的商标、商业图片和受版权保护的文案。

## 工作方式
- 每次只做一个小阶段，例如 Header、Hero、卡片区、响应式修正。
- 每个阶段开始前先做计划，再确认后修改文件。
- 如果截图细节不明确，先记录疑点并确认，不凭空猜测。
- 每完成一个稳定阶段后，再由你决定是否 commit 和 push。

## 目录说明
- `AGENTS.md`: 给 Codex 的长期项目规则
- `prompts/`: 常用 prompt 模板
- `references/screenshots/`: 目标网站截图
- `references/notes/`: 页面细节、尺寸、交互、响应式观察记录
- `src/components/`: 可复用组件
- `src/pages/`: 页面级组件
- `src/styles/`: 全局样式、设计变量、布局样式

## 常用命令
```bash
npm run dev
npm run build
npm run lint
```

## 推荐流程
1. 把目标截图放进 `references/screenshots/`
2. 把观察到的细节写进 `references/notes/`
3. 使用 `prompts/01-project-plan.md` 或 `prompts/02-visual-analysis.md` 开始分析
4. 确认当前阶段目标后，再进入实现
