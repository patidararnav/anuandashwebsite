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
                    'max-width': '100% !important',
                    'margin-left': '0 !important',
                    'margin-bottom': '50px !important',
                  },
                  'text-align': 'left !important',
                },
                title: { 
                  'font-size': '24px !important', 
                  'font-weight': 'bold !important',
                  'margin-bottom': '10px !important',
                },
                button: {
                  ':hover': { 'background-color': '#c13b47 !important' },
                  'background-color': '#d6424f !important',
                  ':focus': { 'background-color': '#c13b47 !important' },
                  color: '#fff !important',
                  'border': 'none !important',
                  'border-radius': '4px !important',
                  'padding': '12px 24px !important',
                  'font-weight': '600 !important'
                },
                price: { 
                  'font-size': '18px !important', 
                  'font-weight': 'bold !important',
                  'margin-bottom': '10px !important',
                },
                compareAt: { 
                  'font-size': '15px !important', 
                },
                unitPrice: { 
                  'font-size': '15px !important', 
                },
                description: { 
                  'margin-bottom': '15px !important',
                },
              },
              layout: 'horizontal',
              contents: {
                img: false,
                imgWithCarousel: true,
                description: true
              },
              width: '100%',
              text: { button: 'Add to cart' },
            },
            cart: {
              styles: {
                button: {
                  ':hover': { 'background-color': '#c13b47 !important' },
                  'background-color': '#d6424f !important',
                  ':focus': { 'background-color': '#c13b47 !important' },
                  color: '#fff !important',
                },
              },
              text: { total: 'Subtotal', button: 'Checkout' },
              popup: false,
            },
            toggle: {
              styles: {
                toggle: {
                  'background-color': '#d6424f !important',
                  ':hover': { 'background-color': '#c13b47 !important' },
                  ':focus': { 'background-color': '#c13b47 !important' },
                  color: '#fff !important',
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