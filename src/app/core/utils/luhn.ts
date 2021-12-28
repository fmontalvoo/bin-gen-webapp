export class Luhn {
    public static calculateLuhn(value: string = ""): number {
        if (!(/^\d+$/.test(value))) return -1;
        const isEven = (num = 0) => (num % 2 == 0);

        let sum = 0;
        for (let i = 0; i < value.length; i++) {
            let digit = parseInt(value[i]);
            if (isEven(i))
                sum += (digit * 2) >= 10 ? (digit * 2) - 9 : (digit * 2);
            else
                sum += digit;
        }
        let num = (sum % 10) === 0 ? 0 : 10 - (sum % 10);
        return num;
    }

    public static generateCheckDigit(value: string = ""): string {
        if (!(/^\d+$/.test(value))) return '\0';
        let checkDigit = this.calculateLuhn(value);
        return value.concat(checkDigit.toString());
    }
}