        let win=0,lose=0,tie=0;
        let score={win,lose,tie}
        const MovesDiv=document.getElementById('moves')
        const resultDiv=document.getElementById('result')
        const scoreDiv=document.getElementById('scores')
        // console.log(MovesDiv);
        
        function playGame(playerMove) {
            console.log(`Player Move ${playerMove}`)
            const computerMove=generateComputerMove()
            console.log(`Computer Move ${computerMove}`)
            let result
            switch(playerMove)
            {
                case "Rock":
                        switch(computerMove)
                        {
                            case "Rock":  result="Tie"; break;
                            case "Paper": result="Lose"; break;
                            case "Scissors": result="Win"; break;
                        }
                break;
                case "Paper":
                    switch(computerMove)
                        {
                            case "Rock":  result="Win"; break;
                            case "Paper": result="Tie"; break;
                            case "Scissors": result="Lose"; break;
                        }
                break;
                case "Scissors":
                    switch(computerMove)
                        {
                            case "Rock":  result="Lose"; break;
                            case "Paper": result="Win"; break;
                            case "Scissors": result="Tie"; break;
                        }
                break;
            }

             console.log(`Result ${result}`)
             switch(result)
             {
                case "Win": win++;break;
                case "Lose": lose++;break;
                case "Tie": tie++;break;
             }

             console.log(`Scoreboard Wins : ${win} Lose : ${lose}  Tie : ${tie}`)
        }


        function generateComputerMove()
        {
            const random=Math.random()
            //console.log(random)
            if(random<1/3)
            return "Rock"
            else if(random>1/3 && random<=2/3)
            return "Paper"
            else
            return "Scissors"
        }
        function resetScore()
        {
            score={}
        }