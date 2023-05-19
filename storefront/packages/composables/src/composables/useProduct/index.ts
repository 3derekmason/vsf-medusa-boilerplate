import {
  Context, Logger,
  useProductFactory,
  UseProductFactoryParams
} from '@vue-storefront/core';
import type { Product } from '@vue-storefront/medusa-api';

const params: UseProductFactoryParams<Product, { id: string }> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  productsSearch: async (context: Context, params) => {
    Logger.debug('[Medusa]: Loading product details: ', { ...params });

    return await context.$medusa.api.productDetails(params.id);
  }
};

export const useProduct = useProductFactory<Product, { id: string }>(params);
