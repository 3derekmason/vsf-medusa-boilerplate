# Vue Storefront + Medusa Monorepo

## Overview

This application combines Vue Storefront with MedusaJS. Decoupling the frontend and backend to allow the flexibility to choose and integrate with other services and platforms as needed.

### [Vue Storefront 2 Docs](https://docs.vuestorefront.io/v2/)

### [MedusaJS Docs](https://docs.medusajs.com/)

---

## Getting Started

## Development

- 1. Fork and clone:

```bash
    git clone https://github.com/<your-username>/vsf-medusa-boilerplate.git
```

- 2. Navigate into the project and insall dependencies:

```bash
    cd vsf-medusa-boilerplate

    yarn install

```

- 3. Build the storefront. From the `/storefront` directory, run:

```bash
    yarn build
```

- 4. Start medusa backend. From the `/medusa-backend` directory, run:

```bash
    yarn start
```

You can verify that the medusa server is running correctly by visiting [http://localhost:9000/store/products](http://localhost:9000/store/products)

- 5. Start storefront. In a separate terminal, from the `/storefront` directory, run:

```bash
    yarn dev
```

- 6. With both the Medusa and Storefront servers running, visit [http://localhost:3000](http://localhost:3000) to view the boilerplate store!
