
/*
 * Util functions
 */


function logToBrowser(ctx, variable) {
    if (DEBUG) {
        if (variable) {
            console.log('\t', ctx, ': ', variable);
        }
        else {
            console.log(ctx);
        }
    }
}