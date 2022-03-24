import { spring } from "svelte/motion"

export function drag(node) {
    let x;
    let y;

    const coordinates = spring(
        { x: 0, y: 0},
        {
            stiffness: 0.2,
            damping: 0.4
        }
    )

    coordinates.subscribe(($coords) => {
        node.style.transform = `translate3d(${$coords.x}px, ${$coords.y}px, 0)`;
    })

    node.addEventListener("mousedown", handleMouseDown)
    
    function handleMouseDown(event) {
        x = event.clientX;
        y = event.clientY;
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
    }

    function handleMouseMove(event) {
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        x = event.clientX;
        y = event.clientY;
        coordinates.update(($coords) => {
            return {
                x: $coords.x + dx,
                y: $coords.y + dy
            }
        })
        console.log(event.clientX, event.clientY);
    }

    function handleMouseUp() {
        const dx = event.clientX - x;
        const dy = event.clientY - y;
        x = event.clientX;
        y = event.clientY;
        coordinates.update(($coords) => {
            return {
                x: $coords.x + dx,
                y: $coords.y + dy
            }
        })
        window.removeEventListener("mousemove", handleMouseMove)
        window.removeEventListener("mouseup", handleMouseUp)
    }

    return {
        destroy() {
            node.removeEventListener("mousedown", () => console.log("clicks"))
        }
    }
}