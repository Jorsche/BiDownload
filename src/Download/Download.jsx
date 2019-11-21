import React from 'react';

async function download(){

}
var id = 123;
var req = ic.ajax.raw({
    type: 'GET',
    url: '/api/dowloads/'+id,
    beforeSend: function (request) {
        request.setRequestHeader('token', 'token for '+id);
    },
    processData: false
});
req.then(
    function resolve(result) {
        var str = result.response;

        var anchor = $('.vcard-hyperlink');

        /* transform the response into a file */

    }.bind(this),
    function reject(err) {
        console.log(err);
    }
);

    

await download