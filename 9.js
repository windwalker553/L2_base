function solution(str){
    const result = [];
    for (let i = 0; i < str.length; i += 2)
    {
        result.push(str.substring(i, i + 2));
    }

    if (result.length > 0 && result[result.length - 1].length < 2)
    {
        result[result.length - 1] += "_";
    }
    return result;
}