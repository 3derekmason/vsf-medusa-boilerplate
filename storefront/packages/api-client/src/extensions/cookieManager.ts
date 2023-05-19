import { ApiClientExtension } from '@vue-storefront/core';
import { defaultSettings } from '../helpers/defaultSettings';

export const cookieManager: ApiClientExtension = {
  name: 'cookieManager',
  hooks: (req, res) => ({
    beforeCreate: ({ configuration }) => {
      const cartCookieName: string = configuration.cookies?.cartCookieName || defaultSettings.cookies.cartCookieName;
      const customerCookieName: string = configuration.cookies?.customerCookieName || defaultSettings.cookies.customerCookieName;
      const storeCookieName: string = configuration.cookies?.storeCookieName || defaultSettings.cookies.storeCookieName;
      const currencyCookieName: string = configuration.cookies?.currencyCookieName || defaultSettings.cookies.currencyCookieName;

      return {
        ...configuration,
        state: {
          getCartId: () => req.cookies[cartCookieName],
          setCartId: (id) => {
            if (!id) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies[cartCookieName];
              return;
            }
            res.cookie(cartCookieName, JSON.stringify(id));
          },
          getCustomerToken: () => req.cookies[customerCookieName],
          setCustomerToken: (token) => {
            if (!token) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies[customerCookieName];
              return;
            }
            res.cookie(customerCookieName, JSON.stringify(token));
          },
          getStore: () => req.cookies[storeCookieName],
          setStore: (id) => {
            if (!id) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies[storeCookieName];
              return;
            }
            res.cookie(storeCookieName, JSON.stringify(id));
          },
          getCurrency: () => req.cookies[currencyCookieName],
          setCurrency: (id) => {
            if (!id) {
              // eslint-disable-next-line no-param-reassign
              delete req.cookies[currencyCookieName];
              return;
            }
            res.cookie(currencyCookieName, JSON.stringify(id));
          }
        }
      };
    }
  })
};
