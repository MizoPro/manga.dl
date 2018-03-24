/*!
 * Manga,dl
 * Manga Downloader CLI for many famous manga sites around the globe.
 *
 * Author: MizoPro
 * License: MIT <https://github.com/mizopro/manga.dl/blob/master/LICENSE>
 */

const dl = require(".");
const pkg = require("./package.json");
const program = require("commander");

program
    .version( pkg.version )
    .description( pkg.description )
    .usage( 'Not available yet' )
    .parse( process.argv );
