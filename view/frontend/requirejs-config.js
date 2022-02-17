var config = {
    map: {
        '*': {
            'AjaxCart': 'Magelearn_AjaxShoppingCartUpdate/js/cartValueIncDec',
            'CartQtyUpdate': 'Magelearn_AjaxShoppingCartUpdate/js/cartQtyUpdate'
        }
    },
    shim: {
        AjaxCart: {
            deps: ['jquery']
        },
        CartQtyUpdate: {
            deps: ['jquery']
        }
    }
};