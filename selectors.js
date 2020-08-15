const that = {
    pageHeader : () => '#PageHeader',

    pageHeaderTitle : () => `${that.pageHeader()} .page-header__title`,

    physiology : () => '#mw-content-text > p:nth-child(8)',

    noArticle : () => '.noarticletext'
}

module.exports = that;
