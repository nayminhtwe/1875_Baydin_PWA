const path = require('path');  
 module.exports = {  
 configureWebpack: {  
     resolve: {  
       alias: {  
         // eslint-disable-next-line no-undef
         '@horo': path.resolve(__dirname, './'),  
         // eslint-disable-next-line no-undef
         '@core': path.resolve(__dirname, 'core/'),  
       },  
     },  
 }
}