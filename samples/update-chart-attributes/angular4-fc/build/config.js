System.config({
    transpiler: 'ts',
    typescriptOptions: {
        "target": "es5",
        "module": "commonjs",
        "experimentalDecorators": true
    },
    meta: {
        'typescript': {
            "exports": "ts"
        }
    },
    paths: {
        'npm:': 'https://unpkg.com/',
        'git:': 'https://rawgit.com/'
    },
    map: {
        
        'app': './src',

        '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
        '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
        '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
        '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
        '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
        '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
        '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
        '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',
        '@angular/core/testing': 'npm:@angular/core/bundles/core-testing.umd.js',
        '@angular/common/testing': 'npm:@angular/common/bundles/common-testing.umd.js',
        '@angular/compiler/testing': 'npm:@angular/compiler/bundles/compiler-testing.umd.js',
        '@angular/platform-browser/testing': 'npm:@angular/platform-browser/bundles/platform-browser-testing.umd.js',
        '@angular/platform-browser-dynamic/testing': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic-testing.umd.js',
        '@angular/http/testing': 'npm:@angular/http/bundles/http-testing.umd.js',
        '@angular/router/testing': 'npm:@angular/router/bundles/router-testing.umd.js',

        'rxjs': 'npm:rxjs',
        'typescript': 'npm:typescript@2.0.2/lib/typescript.js',
        'ts': 'npm:plugin-typescript@7.0.6/lib/plugin.js',

        'fusioncharts': 'npm:fusioncharts/',
        'angular4-fusioncharts': 'npm:angular4-fusioncharts'

    },
    packages: {
        app: {
            main: 'main.ts',
            defaultExtension: 'ts'
        },
        rxjs: {
            defaultExtension: 'js'
        },
        fusioncharts: {
            main: 'fusioncharts.js',
            defaultExtension: 'js'
        },
        'angular4-fusioncharts': {
            defaultExtension: 'js'
        }
    }
});