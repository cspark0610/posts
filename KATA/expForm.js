function expandedForm(num){
let rem;
let str_out = "";
        for (let i = 10; i < num; i *= 10) {
            rem = num % i;
            str_out = (rem > 0) ? " + " + rem + str_out : str_out;
            num -= rem;
        }
        str_out = num + str_out;
        console.log(str_out);
        return str_out;
}
expandedForm(7030405);