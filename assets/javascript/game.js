var randomNumber = Math.floor(Math.random() * 101); 
var playersTotalScore = 0;
var wins = 0;
var loses = 0;

$( document ).ready(function() {
    
    $('#randomNumber').text(randomNumber);

    $('#crystalOne').click(function(){
       
        playersTotalScore += 20;
        if ( playersTotalScore > randomNumber ){
            alert('You lose!');
            $('#totalScore').empty();
            loses++;
            $('#loses').text('Loses : ' + loses);
        } else if ( playersTotalScore === randomNumber ) {
            alert('You win!');
            wins++;
            $('#wins').text('Wins : ' + wins);
        } else if ( playersTotalScore < randomNumber ){
            $('#totalScore').text(playersTotalScore);
        }
       
    });

    $('#crystalTwo').click(function(){
       playersTotalScore += 30;
        if ( playersTotalScore > randomNumber ){
            alert('You lose!');
            $('#totalScore').empty();
            loses++;
            $('#loses').text('Loses : ' + loses);
        } else if ( playersTotalScore === randomNumber ) {
            alert('You win!');
            wins++;
            $('#wins').text('Wins : ' + wins);
        } else if ( playersTotalScore < randomNumber ){
            $('#totalScore').text(playersTotalScore);
        }
      
    });

    $('#crystalThree').click(function(){
        playersTotalScore += 17;
        if ( playersTotalScore > randomNumber ){
            alert('You lose!');
            $('#totalScore').empty();
            loses++;
            $('#loses').text('Loses : ' + loses);
        } else if ( playersTotalScore === randomNumber ) {
            alert('You win!');
            
            wins++;
            $('#wins').text('Wins : ' + wins);
        } else if ( playersTotalScore < randomNumber ){
            $('#totalScore').text(playersTotalScore);
        }
       
    });

    $('#crystalFour').click(function(){
        playersTotalScore += 5;
        if ( playersTotalScore > randomNumber ){
            alert('You lose!');
            $('#totalScore').empty();
            loses++;
            $('#loses').text('Loses : ' + loses);
        } else if ( playersTotalScore === randomNumber ) {
            alert('You win!');
           
            wins++;
            $('#wins').text('Wins : ' + wins);
        } else if ( playersTotalScore < randomNumber ){
            $('#totalScore').text(playersTotalScore);
        }
    });

});