const request = require('request');
const colors  = require('colors');
const emoji   = require('node-emoji');



request('https://salyangoz.me/recent.json', (error, response, body) => {

    let parse = JSON.parse(body)

    parse.posts.forEach( (post,index) => {

      let username = emoji.get(':bust_in_silhouette:') + ' ' + post.user.user_name
      let time     = emoji.get(':clock1:') + ' ' + post.updated_at + ' ago'
      let views    = emoji.get(':dart:') + '  ' + post.visit_count + ' views'

      console.log(colors.grey.bold(post.title));
      console.log(colors.cyan.underline(post.url));
      console.log(username + '  ' + time + ' ' + views);
      console.log('\n');

    })

})
