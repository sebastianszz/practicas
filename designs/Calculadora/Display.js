class Display{
    constructor(displayPreviousValue,displayCurrentValue){
        this.displayPreviousValue = displayPreviousValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator= new Calculator();
        this.operating = undefined
        this.currentValue = '';
        this.previousValue = '';
        this.signs = {
            sum: '+',
            subtract: '-',
            divide: '÷',
            multiply: '×',
            module: '%',
        }
    }

    clear(){
        this.currentValue = this.currentValue.toString().slice(0,-1)
        this.printingValues();
    }

    clearAll(){
        this.currentValue = '';
        this.previousValue = '';
        this.operating = undefined;
        this.printingValues();
    }

    compute(operator){
        this.operating !== 'equal' && this.calculate();
        this.operating = operator;
        this.previousValue = this.currentValue || this.previousValue;
        this.currentValue = '';
        this.printingValues();
    }

    addNumber(numbers){
        if(numbers == '.' && this.currentValue.includes('.')) return
        this.currentValue = this.currentValue.toString() + numbers.toString();
        this.printingValues();
    }

    printingValues(){
        this.displayCurrentValue.textContent = this.currentValue;
        this.displayPreviousValue.textContent = `${this.previousValue} ${this.signs[this.operating] || ''}`;
    }

    calculate(){
        const previousValue = parseFloat(this.previousValue);
        const currentValue = parseFloat(this.currentValue);
        if(isNaN(currentValue) || isNaN(previousValue)) return
        this.currentValue = this.calculator[this.operating](previousValue, currentValue)
    }
}