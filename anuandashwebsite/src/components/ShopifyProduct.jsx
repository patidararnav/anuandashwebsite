import { useEffect } from 'react';

const SHOPIFY_DOMAIN = '7exyww-8t.myshopify.com';
const SHOPIFY_TOKEN = '1bdf6bfc41990461dc9fa185e93d7079';

const loadShopifyScript = () => {
  return new Promise((resolve) => {
    if (window.ShopifyBuy) {
      if (window.ShopifyBuy.UI) {
        resolve();
        return;
      }
    }
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js';
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

const ShopifyProduct = ({ productId, nodeId }) => {
  useEffect(() => {
    let isMounted = true;
    loadShopifyScript().then(() => {
      if (!isMounted) return;
      if (!window.ShopifyBuy) return;
      if (!window.ShopifyBuy.UI) return;

      const client = window.ShopifyBuy.buildClient({
        domain: SHOPIFY_DOMAIN,
        storefrontAccessToken: SHOPIFY_TOKEN,
      });

      window.ShopifyBuy.UI.onReady(client).then(function (ui) {
        ui.createComponent('product', {
          id: productId,
          node: document.getElementById(nodeId),
          moneyFormat: '%24%7B%7Bamount%7D%7D',
          options: {
            product: {
              styles: {
                product: {
                  '@media (min-width: 601px)': {
                    'max-width': '100%',
                    'margin-left': '0',
                    'margin-bottom': '50px',
                  },
                  'text-align': 'left',
                  color: '#fff',
                },
                title: { 'font-size': '26px', color: '#fff' },
                button: {
                  ':hover': { 'background-color': '#c13b47' },
                  'background-color': '#d6424f',
                  ':focus': { 'background-color': '#c13b47' },
                  color: '#fff',
                },
                price: { 'font-size': '18px', color: '#fff' },
                compareAt: { 'font-size': '15.3px', color: '#fff' },
                unitPrice: { 'font-size': '15.3px', color: '#fff' },
                description: { color: '#fff' },
              },
              layout: 'horizontal',
              contents: {
                img: false,
                imgWithCarousel: true,
                description: true,
              },
              width: '100%',
              text: { button: 'Add to cart' },
            },
            cart: {
              styles: {
                button: {
                  ':hover': { 'background-color': '#c13b47' },
                  'background-color': '#d6424f',
                  ':focus': { 'background-color': '#c13b47' },
                  color: '#fff',
                },
              },
              text: { total: 'Subtotal', button: 'Checkout' },
              popup: false,
            },
            toggle: {
              styles: {
                toggle: {
                  'background-color': '#d6424f',
                  ':hover': { 'background-color': '#c13b47' },
                  ':focus': { 'background-color': '#c13b47' },
                  color: '#fff',
                },
              },
            },
          },
        });
      });
    });

    return () => {
      isMounted = false;
    };
  }, [productId, nodeId]);

  return <div id={nodeId} />;
};

export default ShopifyProduct; 