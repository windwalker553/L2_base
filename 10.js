function bingo(ticket, win){
    let count_of_wins = 0;
    for (let i = 0; i < ticket.length; i++)
    {
        let letters = ticket[i][0];
        for (let c = 0; c < letters.length; c++)
        {
            if (letters[c].charCodeAt() == ticket[i][1])
            {
                count_of_wins++;
                break;
            }
        }
    }
    if (count_of_wins >= win)
    {
        return 'Winner!';
    }
    else
    {
        return 'Loser!';
    }
}