exports.somar = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 + num2;
    res.json({ resultado });
}

exports.subtrair = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 - num2;
    res.json({ resultado });
}

exports.multiplicar = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 * num2;
    res.json({ resultado });
}

exports.dividir = (req, res) => {
    const { num1, num2 } = req.body;
    const resultado = num1 / num2;
    res.json({ resultado });
}