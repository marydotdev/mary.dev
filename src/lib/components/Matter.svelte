<script>
    import Matter from 'matter-js';
    import { onMount } from 'svelte';
    
    onMount(() => {
      createScene();
    });
    
    function createScene() {
      // module aliases
      var Engine = Matter.Engine,
          Render = Matter.Render,
          Runner = Matter.Runner,
          Composite = Matter.Composite,
          Composites = Matter.Composites,
          Constraint = Matter.Constraint,
          MouseConstraint = Matter.MouseConstraint,
          Mouse = Matter.Mouse,
          Bodies = Matter.Bodies;
    
      // create an engine
      var engine = Engine.create();
      var world = engine.world;
    
      // create a renderer
      var render = Render.create({
          element: document.getElementById("matter-js"),
          engine: engine,
          options: {
              width: 800,
              height: 450,
              pixelRatio: 1,
              background: 'rgba(0, 0, 0, 0)',
              hasBounds: false,
              enabled: true,
              wireframes: false,
              showSleeping: true,
          }
      });
    
      // run the renderer
      Render.run(render);
    
      // create runner
      var runner = Runner.create();
    
      // run the engine
      Runner.run(runner, engine);
    
      // add bodies
          var rows = 10,
              yy = 500 - 25 - 40 * rows;
          
          var stack = Composites.stack(400, yy, 9, rows, 0, 0, function(x, y) {
              return Bodies.rectangle(x, y, 30, 30);
          });
          
          Composite.add(world, [
              stack,
              // walls
              // Bodies.rectangle(400, 0, 800, 50, { isStatic: true }),
              Bodies.rectangle(400, 400, 600, 20, { isStatic: true }),
              // Bodies.rectangle(800, 300, 50, 600, { isStatic: true }),
              // Bodies.rectangle(0, 300, 50, 600, { isStatic: true })
          ]);
          
          var ball = Bodies.circle(280, 250, 50, { density: 0.04, frictionAir: 0.005});
          
          Composite.add(world, ball);
          Composite.add(world, Constraint.create({
              pointA: { x: 300, y: 50 },
              bodyB: ball
          }));
    
      // add mouse control
      var mouse = Mouse.create(render.canvas),
          mouseConstraint = MouseConstraint.create(engine, {
              mouse: mouse,
              constraint: {
                  stiffness: 0.2,
                  render: {
                      visible: false
                  }
              }
          });
    
      Composite.add(world, mouseConstraint);
    
      // keep the mouse in sync with rendering
      render.mouse = mouse;
    
    };
    
    </script>
    
    <div class="relative w-full pb-8">
        <div class="absolute w-36 sm:w-64 inset-x-1/2 top-12 text-center">
            <h2 class="z-0 text-xl sm:text-4xl uppercase font-display font-bold">
            I create interactive <span class="text-3xl sm:text-6xl tracking-wide">user</span> experiences       
            </h2>
        </div>
    
        <div class="flex justify-center">
            <div id="matter-js" class="z-10"></div>
        </div>
        
    </div>
    
