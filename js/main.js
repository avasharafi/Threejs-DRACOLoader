
import { World } from './world.js';

function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);

  

    document.getElementById('playAnimation').addEventListener('click', ()=>{
        world.start();
    });

    document.getElementById('pauseAnimation').addEventListener('click', ()=>{
        world.stop();
    });


    // hide and show
    document.getElementById('hide/showFirstMesh').addEventListener('click', () =>{
        world.hideFirstMesh();
    });

    document.getElementById('hide/showSecondMesh').addEventListener('click', () =>{
        world.hideSecondMesh();
    });

    document.getElementById('hideAll').addEventListener('click', () =>{
        world.hideAll();
    });

    document.getElementById('showAll').addEventListener('click', () => {
        world.showAll();
    });
  
    world.render();

    

  }

  main();