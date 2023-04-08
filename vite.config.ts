import {fileURLToPath, URL} from 'node:url'

import type {UserConfigExport, ConfigEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ArcoResolver} from 'unplugin-vue-components/resolvers';
import {viteMockServe} from 'vite-plugin-mock'

// https://vitejs.dev/config/
export default ({command}: ConfigEnv): UserConfigExport => {
    return {
        plugins: [
            vue(),
            vueJsx(),
            VueSetupExtend(),
            AutoImport({
                resolvers: [ArcoResolver()],
            }),
            Components({
                resolvers: [
                    ArcoResolver({
                        sideEffect: true
                    })
                ]
            }),
            viteMockServe({
                mockPath: 'mock',
                localEnabled: command === 'serve',
            })
        ],
        resolve: {
            alias: {
                "@": fileURLToPath(new URL('./src', import.meta.url))
            }
        },
    }
}
