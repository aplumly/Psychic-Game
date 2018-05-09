       
            let wins=0;
            let losses=0;
            
            let guess = "";
            let guesses = new Array();
           
            let num_guess=9;
            
            let winsd = document.getElementById("wins");
            let lossesd = document.getElementById("losses");
            let guesses_leftd = document.getElementById("guesses_left");
            let guessed = document.getElementById("guessed");
            
            let alphabet = "abcdefghijklmnopqrstuvwxyz";
            let letter;
            
            let check;
            let game=true;
            //generate letter
            
            letter = alphabet[Math.floor(Math.random()*26)];//randomly generated letter;
           
            function win()
            {
                //reset variables
                guess = "";
                guesses.length = 0;
                num_guess = 9;
                wins++;
                winsd.innerHTML = "number of wins: " + wins;
                letter = alphabet[Math.floor(Math.random()*26)];
            }


            function lose()
            {   
                
                guess = "";
                guesses.length = 0;
                num_guess = 9;
                losses++;
                lossesd.innerHTML = "number of losses: " + losses;
                letter = alphabet[Math.floor(Math.random()*26)];
            }

            
 
                document.onkeyup = function(event) {
                guess = event.key;
                if(guess===letter){win(); game=false;}

                if(game){check=false;
                for(let i=guesses.length; i>=0; i--)
                {if(guesses[i-1]==guess){check=true;}}
                if(check==false){guesses.push(guess);num_guess--;}
                check=false;
                
                }
                if(num_guess==0 && game){lose(); game=false;}
                game=true;
                guesses_leftd.innerHTML = "guesses left: " + num_guess;
                guessed.innerHTML = "guesses so far: " + guesses;
                
                };


            winsd.innerHTML = "number of wins: " + wins;
            lossesd.innerHTML = "number of losses: " + losses;

            guesses_leftd.innerHTML = "guesses left: " + num_guess;
            guessed.innerHTML = "guesses so far: " + guesses;

            