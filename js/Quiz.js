class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    
    //escribe aquí el código para ocultar los elementos de la pregunta
      this.title.hide();
      this.input1.hide();
      this.button.hide();
      this.input2.hide();
    //escribe aquí el código para cambiar el color de fondo 
      background("yellow");
    //escribe el código para mostrar un encabezado que indique el resultado del Cuestionario
     text("resultado del Cuestionario",400,40)
    //llama aquí a getContestantInfo( )
    getPlayerInfo()
    //escribe la condición para comprobar si contestantInfor no está indefinido 
    if(allContestants !== undefined){
    //escribe aquí el código para agregar una nota
    fill("blue");
    textSize(20);
    text("*NOTA: ¡El concursante que respondio correctamente,esta resaltado en color verde!",130,230);
    //escribe el código para resaltar al concursante que respondió correctamente
    for(var plr in allContestants){
      var correctAns = "2";
      if(correctAns === allContestant[plr].answer){
      fill("green");
    }else {
      fill("red");
    }
    }
  }
  }
}
