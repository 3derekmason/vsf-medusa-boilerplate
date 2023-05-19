import {
  Context,
  useFacetFactory,
  FacetSearchResult, Logger
} from '@vue-storefront/core';
import type {
  UseFacetSearchParams as SearchParams
} from '../../types';
import { ListProductSearchQuery } from '@vue-storefront/medusa-api';

export const useFacet = useFacetFactory<ListProductSearchQuery>({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  search: async (context: Context, params: FacetSearchResult<SearchParams>) => {
    Logger.debug('[Medusa]: Loading products list: ', { ...params });

    const products = await context.$medusa.api.listProducts();

    return {
      products,
      limit: 0,
      offset: 0,
      // eslint-disable-next-line camelcase
      is_giftcard: false
    };
  }
});
