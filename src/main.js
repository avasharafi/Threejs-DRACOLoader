
import { World } from './world/World.js';
//import { DracoWorld } from './DracoWorld';

function main() {

    const container = document.querySelector('#scene-container');

    const world = new World(container);
    //const dracoWorld = new World(container);

  

    document.getElementById('playAnimation').addEventListener('click', ()=>{
        world.start();
       //dracoWorld.start();
    });

    document.getElementById('pauseAnimation').addEventListener('click', ()=>{
        world.stop();
      //  dracoWorld.stop();
    });


    // hide and show
    document.getElementById('hide/showFirstMesh').addEventListener('click', () =>{
        world.hideFirstMesh();
       // dracoWorld.hideFirstMesh();
    });

    document.getElementById('hide/showSecondMesh').addEventListener('click', () =>{
        world.hideSecondMesh();
    });

    document.getElementById('hideAll').addEventListener('click', () =>{
        world.hideAll();
        //dracoWorld.hideAll();
    });

    document.getElementById('showAll').addEventListener('click', () => {
        world.showAll();
       //dracoWorld.showAll();
    });
  
    world.render();
    //dracoWorld.render();

    

  }

  main();