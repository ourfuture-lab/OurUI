// 排除某些文件

fis.set('project.ignore', ['README.md','fis-conf.js']);

// 打包
fis.match('::package', {
  postpackager: fis.plugin('loader')
});


// 编译less文件

// npm install -g fis-parser-less-2.x
fis.match('src/less/index.less', {
    rExt: '.css', // from .less to .css
    parser: fis.plugin('less-2.x', {
        // fis-parser-less-2.x option
    }),
    release: 'dist/OurUI.css'
});
