const canvas =  document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)

const gravedad = 0.2
class Sprite {
    constructor({position, velocidad}){
        this.position = position
        this.velocidad = velocidad
        this.height = 150

    }
    draw(){
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, 50, 150)
    }
    update(){
        this.draw()
        
        this.position.y += this.velocidad.y

        if(this.position.y + this.height + this.velocidad.y >= canvas.height){
            this.velocidad.y = 0
        } else this.velocidad += gravedad
    }
}

const j1 = new Sprite({
    position: {
    x:0,
    y:0
    },
    velocidad: {
        x: 0,
        y: 0
    }
})
player.draw()

const enemigo = new Sprite({
    position: {
    x:400,
    y:100
    },
    velocidad: {
        x: 0,
        y: 0
    }
})

enemigo.draw()

console.log(player)

function animacion(){
    window.requestAnimationFrame(animacion)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    j1.update()
    enemigo.update()

}
animacion()

window.addEventListener('flechaabajo', (event) => {
    
})