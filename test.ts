basic.forever(function () {
    serial.writeLine("O:" + MLX90614.temperature(TemperatureLocation.Object))
    serial.writeLine("A:" + MLX90614.temperature(TemperatureLocation.Ambiant))
    serial.writeLine("")
    basic.pause(500)
})
