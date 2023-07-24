<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body style="margin:50px;">
    <input type="text" id="input" value="">
    <table border="1" class="table">
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Nik</td>
                <td>nik@y.com</td>
            </tr>
            <tr>
                <td>ashu</td>
                <td>ashu@g.com</td>
            </tr>
            <tr>
                <td>pinky</td>
                <td>pinky@y.com</td>
            </tr>
            <tr>
                <td>Niklesh</td>
                <td>niklesh@y.com</td>
            </tr>
            <tr>
                <td>Ashvini</td>
                <td>Ashvini@y.com</td>
            </tr>
            <tr>
                <td>Rahul</td>
                <td>Rahul@y.com</td>
            </tr>

            <tr>
                <td>Rani</td>
                <td>Rani@y.com</td>
            </tr>
        </tbody>
    </table>
    <script>
        let inputVal = document.querySelector('#input');
        let tableTr = document.getElementsByTagName('tr');
        inputVal.addEventListener('keyup', function (e) {
            inputVal = e.target.value.toLowerCase();
            for (let i = 0; i < tableTr.length; i++) {
                let ele = tableTr[i].getElementsByTagName('td')[0];
                let name = tableTr[i].getElementsByTagName('td')[1];
                if (ele) {
                    if (ele.textContent.toLowerCase().includes(inputVal) || name.textContent.toLowerCase().includes(inputVal)) {
                        console.log("first")
                        tableTr[i].style.display = ''
                    }
                    else {
                        tableTr[i].style.display = 'none'
                    }

                }

            }
        })
    </script>
</body>

</html>