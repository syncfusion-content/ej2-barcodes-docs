
var barcode = new ej.barcodegenerator.BarcodeGenerator(
    {
        type: 'Code128',
        value: 'SYNCFUSION',
        width: '200px', height: '150px',
        mode: 'SVG',
        displayText:{text:'text'},
    }
);
barcode.appendTo('#element');

