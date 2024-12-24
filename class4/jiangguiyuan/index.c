/* 河北 */
.content1{
	width: 80%;
	height: 600px;
	/* background-color: #defcf9; */
	margin: 100px auto;
	/* box-shadow: 0 0 15px #999; */
	display: flex;
	justify-content: space-between;
}

.content1 img{
	width: 45%;
	height: 100%;
	border: solid 10px white;
	/* box-shadow: 0 0 15px #999; */
}

.content1 div{
	width: 50%;
	height: 100%;
}

.content1 div h1{
	/* text-align: center; */
	margin-top: 20px;
	margin-bottom: 30px;
	/* margin-top: 100px; */
}

.content1 div p{
	font-size: 17px;
	/* color: #6f6f6f; */
	/* text-indent: 2em; */
	margin-top: 30px;
	line-height: 45px;
}


/* 河北概况 */
.content{
	width: 100%;
	height: 700px;
	margin: 150px 0;
	background-color: white;
}

.content h1{
	text-align: center;
	padding-top: 50px;
}

.content .one{
	width: 90%;
	height: 500px;
	margin: 50px auto;
	display: flex;
	justify-content: space-around;
	/* background-color: antiquewhite; */
}

.content .one div{
	width: 23%;
	height: 100%;
	border-radius: 10px;
	background-color: #cbf1f5;
}

.content .one div h2{
	text-align: center;
	margin-top: 50px;
	/* border-bottom: 10px solid #243536; */
}

.content .one div p{
	text-indent: 2em;
	margin: 30px 10px;
	line-height: 40px;
}


/* 图片欣赏 */
.title{
	text-align: center;
	margin-top: 50px;
}

table{
	width: 100%;
	height: 600px;
	margin: 60px 0;
	/* background-color: #cbf1f5; */
	/* overflow: hidden; */
}

td{
	width: 20%;
	height: 40%;
	overflow: hidden;
}

table tr td img{
	width: 100%;
	height: 100%;
	object-fit: cover;
}

table tr td img:hover{
	transform: scale(1.2);
	transition: 0.5s;
}
