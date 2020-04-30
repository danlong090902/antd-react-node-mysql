import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  locale: { antd: true },
  routes: [
    { path: '/', component: '@/pages/login/index' },
    { path: '/products', component: '@/pages/products/index' },
  ],
});
