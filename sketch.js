var fundo, fundoImg;
var chaoInvisivel;
var anna, annaImg;
var score = 0;
var life = 4;
var predio, predio1Img,predio2Img,predio3Img;
var chaoInvisivel

//Pré-carrega imagens, sons e animações
function preload() {
    fundoImg = loadImage("cidade.webp");
    annaImg = loadAnimation("menina1.png", "menina2.png", "menina3.png");

    predio1Img = loadImage("predio1.png");
    predio2Img = loadImage("predio2.png");
    predio3Img = loadImage("predio3.png");
}

//configurar o jogo
function setup() {
    createCanvas(windowWidth,windowHeight);

    fundo = createSprite(width/2-100, height/2-200, width, height);
    fundo.addImage(fundoImg);
    fundo.scale = 2;
    fundo.velocityX = -9;

   // eu quero criar um chao invisivel pra que a "anna" fique sobre ele+
   // sem eu precisar ficar pulando
  // criando chao invisivel
  /* apenas alterei a posição x, y e a largura*/
    chaoInvisivel = createSprite(width/2, height-50, width, 10);
    chaoInvisivel.visible = false;

  //criando personagem: anna
    anna = createSprite(179, 530, 20, 20);
    anna.addAnimation("anna", annaImg);
    anna.scale = 0.9;
   
  // eu preciso criar cada predio (a posição) +
  // ou aquela função 65 faz tudo ?
  //criando predio 1
 
  /*Não precisa, a função gera automaticamente vários prédios */

   /* predio1 = createSprite(179, 530, 20, 20);
    predio1.addAnimation("predio1", predio1Img);
    predio1.scale = 0.9;*/

  
}

function draw() {
 
  background(0)

  if (fundo.x < 0) {
    fundo.x = width/2;
  }
 
  // pular quando a tecla space for tocada
  if (keyDown("space") && anna.y >= 100) {
    anna.velocityY = -12;
  }
  anna.velocityY = anna.velocityY + 0.8;

  //Chamar função para criar obstáculos
  criarObstaculos();

  //Anna não cai, mas colide com o chão invisível
  anna.collide(chaoInvisivel)

  drawSprites();
}

// prof eu quero criar os predios em posições
// diferentes mais nem a imagem aparece
/* Depois de criar a função você deve chamá-la, afinal 
as funções não são intrometidas, elas só executam se forem chamadas */



function criarObstaculos() {
  
  if (World.frameCount % 120 === 0) {
      predio = createSprite(width+50, height-100, 40, 50);
      predio.addImage(predio1Img);
      predio.scale = 0.6;
      predio.velocityX = -4;
  
      //posições y aleatórias para os principais obstáculos
      predio.y = Math.round(random(height-100, height-200));

      var rand = Math.round(random(1,3));
      switch (rand) {
        case 1:
          predio.addImage(predio1Img);
          predio.scale = 0.6;
          break;
        case 2:
          predio.addImage(predio2Img);
          predio.scale = 0.6;
          break;
        case 3:
          predio.addImage(predio3Img);
          predio.scale = 1;
        default:
          break;
      }
  
      //atribuir tempo de vida à variável
      predio.lifetime = width/-4;
      //Profundidade de Anna em relação ao prédio
      predio.depth = anna.depth;
      anna.depth += 1;
      
    }
  }

  // prof eu não sei como que faz pra colocar som no jogo e +
  // eu ja olhei em alguns projetos como o do t rex +
  // mais nao entendo 

  //Para adicionar sons, 
  /**
   * Você precisa criar a variável onde armazerá o som
   * Na função preload você carrega o som nessa variável usanod loadSound
   * Usando os estados de jogo você usa a função .play() para executar o som e .stop() 
   * para parar o som.
   */
  