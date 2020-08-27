const that = {
    pageHeader : () => '#PageHeader',

    pageHeaderTitle : () => `${that.pageHeader()} .page-header__title`,

    physiology : () => '#mw-content-text h3 + p',

    noArticle : () => '.noarticletext'
}

module.exports = that;
