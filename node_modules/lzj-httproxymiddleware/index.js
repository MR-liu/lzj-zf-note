const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = (proxy) => {
  const proxyMiddlewares = [];
  // Avoid 'proxy' declaration with const
  let _proxy = proxy;


  if (_proxy) {
    /**
     * Assume a proxy configuration specified as:
     * proxy: 'a url'
     */
    if (typeof _proxy === 'string') {
      _proxy = [{
        context: _proxy,
      }];
    }

    /**
     * Assume a proxy configuration specified as:
     * proxy: {
     *   'context': { options }
     * }
     * OR
     * proxy: {
     *   'context': 'target'
     * }
     */
    if (!Array.isArray(_proxy)) {
      _proxy = Object.keys(_proxy).map((context) => {
        let proxyOptions;
        // For backwards compatibility reasons.
        const correctedContext = context.replace(/^\*$/, '**').replace(/\/\*$/, '');

        if (typeof _proxy[context] === 'string') {
          proxyOptions = {
            context: correctedContext,
            target: _proxy[context],
          };
        } else {
          proxyOptions = _proxy[context];
          proxyOptions.context = correctedContext;
        }

        return proxyOptions;
      });
    }

    // console.log('_proxy', _proxy)

    /**
     * Assume a proxy configuration specified as:
     * proxy: [
     *   {
     *     context: ...,
     *     ...options...
     *   }
     * ]
     */
    _proxy.forEach((proxyConfig) => {
      const context = proxyConfig.context || proxyConfig.path;
      if (proxyConfig.target) {
        proxyMiddlewares.push(createProxyMiddleware(context, proxyConfig));
      }
    });
  }

  if (!proxyMiddlewares.length) {
    return null;
  }
  return proxyMiddlewares;
};
