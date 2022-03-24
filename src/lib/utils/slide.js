import { spring } from "svelte/motion"

export function slide(node) {
    let x;

    const coordinates = spring(
        { x: 0, y: 0},
        {
            stiffness: 0.2,
            damping: 0.4
        }
    )

    coordinates.subscribe(($coords) => {
        node.style.transform = `translate3d(${$coords.x}px, 0, 0)`;
    })

    node.addEventListener("mousedown", handleMouseDown)
    
    function handleMouseDown(event) {
        x = event.clientX;
        window.addEventListener("mousemove", handleMouseMove)
        window.addEventListener("mouseup", handleMouseUp)
    }

    function handleMouseMove(event) {
        const dx = event.clientX - x;
        x = event.clientX;
        coordinates.update(($coords) => {
            return {
                x: $coords.x + dx,
            }
        })
    }

    function handleMouseUp() {
        x = 0
        coordinates.update(() => {
            return {
                x: 0
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