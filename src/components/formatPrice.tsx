import * as React from 'react';

const CURRENCY_FORMATTER = new Intl.NumberFormat(undefined,{
    currency: "IDR",
    style: "currency",
});

const formatCurrency = (number) => {
    return CURRENCY_FORMATTER.format(number);
}
export default formatCurrency;