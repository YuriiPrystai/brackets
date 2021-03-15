module.exports = function check(str, bracketsConfig) {
    let countStr = 0;
    let stage;
    str = str.split('');
    while (countStr < str.length-1) {
        stage = false;
        for (let item of bracketsConfig) {
            if (item[0] === str[countStr] && item[1] === str[countStr+1]) {
                str.splice(countStr, 2);
                stage = true;
                countStr = 0;
                break;
            }
        }
        if ((!stage && countStr >= str.length-2) || str.length % 2 !== 0) {
            return false;
        } else if (!stage && countStr < str.length-2) {
            countStr++;
        }
        if (str.length === 0) {
            return true;
        }
    }
}
