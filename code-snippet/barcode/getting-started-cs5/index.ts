


import { QRCodeGenerator, ValidateEvent } from '@syncfusion/ej2-barcode-generator';

 let barcode = new QRCodeGenerator({
        width: '200px',
        height: '150px',
        displayText: { visibility: false },
        mode: 'SVG',
        value: 'Syncfusion',

    });
    barcode.appendTo('#element');



