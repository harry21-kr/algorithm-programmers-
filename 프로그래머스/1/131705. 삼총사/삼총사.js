function solution(number) {
    let answer = 0;
    let acc = 0;
    for (let i = 0; i < number.length; i++) {
        for (let j = i + 1; j < number.length; j++) {
            for (let k = j + 1; k < number.length; k++) {
                if (!(number[i] + number[j] + number[k])) {
                    answer++;
                } 
                
            }
        }
    }
    return answer;
}