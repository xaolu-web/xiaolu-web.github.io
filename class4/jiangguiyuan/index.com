<!DOCTYPE html>
<html>
    <head>
       <meat charset="uf-8">
        <title>设置表格样</title>
        <style type="text/css">
            h2 {
                text-align: center;
            }
            table {
                border: 1px solid #000;
                border-collapse: collapse;
                margin: 0 auto;
                text-align: center;
            }
            th, td {
                border: 1px solid #000;
            }
            tr:first-child {
                background: #dedede;
                height: 40px;
            }
            .redTd {
                background:#F4696B;
            }
        </style>
    </head>
    
    <body>
        <h2>学生成绩表</h2>
        <table border="1">
            <tr>
                <th colspan="4">基本信息</th>
                <th colspan="3">成绩信息</th>
            </tr>
            <tr>
                <th>学号</th>
                <th>姓名</th>
                <th>性别</th>
                <th>班级</th>
                <th>web前端开发</th>
                <th>信息技术基础</th>
                <th>c语言</th>
            </tr>
            <tr>
                <td>2021021506</td>
                <td>王大震</td>
                <td>男</td>
                <td>2021级计应1</td>
                <td>90</td>
                <td class="redTd">47</td>
                <td>88</td>
            </tr>
            <tr>
                <td>2021021507</td>
                <td>于雪</td>
                <td>女</td>
                <td>2021级计应1班</td>
                <td>89</td>
                <td>76</td>
                <td>90</td>
            </tr>
            <tr>
                <td>2021021508</td>
                <td>马丽</td>
                <td>女</td>
                <td>2021级计应1班</td>
                <td>79</td>
                <td>93</td>
                <td class="redTd">53</td>
            </tr>
        </table>
    </body>
    </html>
