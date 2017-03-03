import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as chalk from 'chalk';
import { log } from 'gulp-util';
import { join } from 'path';

import Config from '../../config';

const plugins = <any>gulpLoadPlugins();


/**
 * Executes the build process, compiling Pug files.
 */
export = () => {
    return gulp.src( join( Config.APP_SRC, '**', '*.{jade,pug}' ) )
        .pipe( plugins.plumber() )
        .pipe( plugins.pug( { pretty: true } )
                      .on( 'error',
                            ( error:any ) => {
                                log( chalk.red( 'Pug compiler error:' ), error.message );
                            } ) )
        .pipe( gulp.dest( Config.APP_DEST ) );
};
