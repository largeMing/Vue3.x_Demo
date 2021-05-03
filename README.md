# TypeScript + Vite + Vue3 + Vue Router + Vuex + Element Plus + Axios + Stylus

This template should help get you started developing with Vue 3 and Typescript in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

### If Using `<script setup>`

[`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"

#ProjectList

├── publish/  
└── src/  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── assets/ // 静态资源目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── common/ // 通用类库目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── components/ // 公共组件目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── router/ // 路由配置目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── store/ // 状态管理目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── style/ // 通用 CSS 目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── utils/ // 工具函数目录  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── views/ // 页面组件目录  
├── App.vue  
├── main.ts  
├── shims-vue.d.ts  
├── tests/ // 单元测试目录  
├── index.html  
├── tsconfig.json // TypeScript 配置文件  
├── vite.config.ts // Vite 配置文件  
└── package.json


# 格式化所有文件（. 表示所有文件）
npx prettier --write .
