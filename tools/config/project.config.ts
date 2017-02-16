import { join } from 'path';
import * as slash from 'slash';
import { argv } from 'yargs';

import { BuildType, ExtendPackages, InjectableDependency } from './seed.config.interfaces';

import * as SeedConfig from './seed.config';

/**
 * This class extends the basic seed configuration, allowing for project specific overrides. A few examples can be found
 * below.
 */
export class ProjectConfig extends SeedConfig.SeedConfig {

  PROJECT_TASKS_DIR = join(process.cwd(), this.TOOLS_DIR, 'tasks', 'project');

  JS_SRC = `${this.APP_SRC}/js`;

  FONTS_SRC :any = [];

  VENDOR_SRC = `${this.APP_SRC}/vendor`;

  FONTS_DEST = `${this.APP_DEST}/fonts`;

  constructor() {
    super();

    this.APP_TITLE = 'Angular Skeleton';
    
    this.PORT = argv['port'] || 10000;

    this.PROJECT_ROOT = this.PROJECT_ROOT;

    this.BUILD_TYPE = this.BUILD_TYPE;

    this.DEBUG = this.DEBUG;

    this.DOCS_PORT = argv['docs-port'] || 10001;

    this.COVERAGE_PORT = argv['coverage-port'] || 10002;

    this.COVERAGE_DIR = this.COVERAGE_DIR;

    this.COVERAGE_TS_DIR = this.COVERAGE_TS_DIR;

    this.APP_BASE = this.APP_BASE;

    this.NPM_BASE = this.NPM_BASE;

    this.TYPED_COMPILE_INTERVAL = this.TYPED_COMPILE_INTERVAL;

    this.BOOTSTRAP_DIR = 'js/angular';

    this.APP_CLIENT = this.APP_CLIENT;

    this.BOOTSTRAP_MODULE = this.BOOTSTRAP_MODULE;

    this.BOOTSTRAP_PROD_MODULE = this.BOOTSTRAP_MODULE;

    this.NG_FACTORY_FILE = this.NG_FACTORY_FILE;

    this.BOOTSTRAP_FACTORY_PROD_MODULE = this.BOOTSTRAP_FACTORY_PROD_MODULE;

    this.APP_SRC = this.APP_SRC;

    this.APP_PROJECTNAME = this.APP_PROJECTNAME;

    this.ASSETS_SRC = this.ASSETS_SRC;

    this.CSS_SRC = this.CSS_SRC;

    this.E2E_SRC = this.E2E_SRC;

    this.SCSS_SRC = this.SCSS_SRC;

    this.TOOLS_DIR = this.TOOLS_DIR;

    this.SEED_TASKS_DIR = this.SEED_TASKS_DIR;

    this.SEED_COMPOSITE_TASKS = this.SEED_COMPOSITE_TASKS;

    this.PROJECT_COMPOSITE_TASKS = this.PROJECT_COMPOSITE_TASKS;

    this.DOCS_DEST = this.DOCS_DEST;

    this.DIST_DIR = this.DIST_DIR;

    this.DEV_DEST = this.DEV_DEST;

    this.PROD_DEST = this.PROD_DEST;

    this.E2E_DEST = this.E2E_DEST;

    this.TMP_DIR = this.TMP_DIR;

    this.APP_DEST = this.APP_DEST;

    this.CSS_DEST = this.CSS_DEST;

    this.JS_DEST = this.JS_DEST;

    this.VERSION = this.VERSION;

    this.CSS_BUNDLE_NAME = this.CSS_BUNDLE_NAME;

    this.JS_PROD_SHIMS_BUNDLE = this.JS_PROD_SHIMS_BUNDLE;

    this.JS_PROD_APP_BUNDLE = this.JS_PROD_APP_BUNDLE;

    this.VERSION_NPM = this.VERSION_NPM;

    this.VERSION_NODE = this.VERSION_NODE;

    this.ENABLE_SCSS = true;

    this.FORCE_TSLINT_EMIT_ERROR = this.FORCE_TSLINT_EMIT_ERROR;

    this.EXTRA_WATCH_PATHS = this.EXTRA_WATCH_PATHS;

    this.NPM_DEPENDENCIES = [
      ...this.NPM_DEPENDENCIES,
      // {src: 'jquery/dist/jquery.min.js', inject: 'libs'},
      // {src: 'lodash/lodash.min.js', inject: 'libs'},
    ];

    this.APP_ASSETS = [
      ...this.APP_ASSETS,
      // {src: `${this.APP_SRC}/your-path-to-lib/libs/jquery-ui.js`, inject: true, vendor: false}
      // {src: `${this.CSS_SRC}/path-to-lib/test-lib.css`, inject: true, vendor: false},
      {src: `${this.JS_SRC}/google-analytics/google-analytics.js`, inject: true, vendor: false},
    ];

    this.TEMP_FILES = this.TEMP_FILES;

    this.SYSTEM_CONFIG_DEV = this.SYSTEM_CONFIG_DEV;
    this.SYSTEM_CONFIG.paths.primeng = 'npm:primeng';

    this.SYSTEM_CONFIG = this.SYSTEM_CONFIG_DEV;

    this.SYSTEM_BUILDER_CONFIG = this.SYSTEM_BUILDER_CONFIG;

    this.BROWSER_LIST = this.BROWSER_LIST;

    this.COLOR_GUARD_WHITE_LIST = this.COLOR_GUARD_WHITE_LIST;

    /* Add proxy middleware */
    // this.PROXY_MIDDLEWARE = [
    //   require('http-proxy-middleware')({ ws: false, target: 'http://localhost:3003' })
    // ];
    this.PROXY_MIDDLEWARE = this.PROXY_MIDDLEWARE;

    /* Add to or override NPM module configurations: */
    // this.PLUGIN_CONFIGS['browser-sync'] = { ghostMode: false };
    this.PLUGIN_CONFIGS = this.PLUGIN_CONFIGS;

    // Add packages (e.g. ng2-translate)
    let additionalPackages: ExtendPackages[] = [
      // {
      //   name: 'ng2-translate',
      //   // Path to the package's bundle
      //   path: 'node_modules/ng2-translate/bundles/ng2-translate.umd.js'
      // },
      {
        name: 'primeng',
        packageMeta: { defaultExtension: 'js' }
      },
      {
        name: '@angular/material',
        path: 'node_modules/@angular/material/bundles/material.umd.js'
      }
    ];
    
    this.addPackagesBundles(additionalPackages);
  }
}