function createTable() {
    const number = document.getElementById('number').value
    const table = `
    <table>
            <thead>
                <tr>
                    <th>Multiplier</th>
                    <th>Result</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>${number * 1}</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>${number * 2}</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>${number * 3}</td>
                </tr>
                <tr>
                    <td>4</td>
                    <td>${number * 4}</td>
                </tr>
                <tr>
                    <td>5</td>
                    <td>${number * 5}</td>
                </tr>
                <tr>
                    <td>6</td>
                    <td>${number * 6}</td>
                </tr>
                <tr>
                    <td>7</td>
                    <td>${number * 7}</td>
                </tr>
                <tr>
                    <td>8</td>
                    <td>${number * 8}</td>
                </tr>
                <tr>
                    <td>9</td>
                    <td>${number * 9}</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>${number * 10}</td>
                </tr>
            </tbody>
        </table>
    `
    const outputNode = document.getElementById('output')
    outputNode.innerHTML = table
}