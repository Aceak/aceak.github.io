/* global hexo */
const js = hexo.extend.helper.get('js').bind(hexo);

hexo.extend.injector.register('head_end', () => {
    return js('https://analyz.stxwer.top/api/script.js');
});