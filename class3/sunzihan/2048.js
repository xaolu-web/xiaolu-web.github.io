function G2048() {
    this.addEvent();
}

G2048.prototype = {
    constructor: G2048,
    init: function() {
        this.score = 0;
        this.arr = [];
        this.moveAble = false;
        $("#score").html("分数: 0");
        $(".number_cell").remove();
        this.creatArr();
        this.drawAllCells(); 
    },
    creatArr: function() {
        var i, j;
        for (i = 0; i < 4; i++) {
            this.arr[i] = [];
            for (j = 0; j < 4; j++) {
                this.arr[i][j] = { value: 0 };
            }
        }
        var i1, i2, j1, j2;
        do {
            i1 = getRandom(4);
            i2 = getRandom(4);
            j1 = getRandom(4);
            j2 = getRandom(4);
        } while (i1 == i2 && j1 == j2);
        this.arr[i1][j1].value = 2;
        this.arr[i2][j2].value = 2;
        this.moveAble = true; 
    },
    drawCell: function(i, j) {
        var item = '<div class="number_cell p' + i + j + '"><div class="number_cell_con n' + this.arr[i][j].value + '"><span>' + this.arr[i][j].value + '</span></div></div>';
        $(".g2048").append(item);
    },
    drawAllCells: function() {
        $(".number_cell").remove();
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.arr[i][j].value !== 0) {
                    this.drawCell(i, j);
                }
            }
        }
    },
    addEvent: function() {
        var that = this;
        $(document).on('keydown', function(event) {
            var keyCode = event.keyCode;
            that.moveAble = false; 
            switch (keyCode) {
                case 39: // 右
                    that.moveRight();
                    break;
                case 40: // 下
                    that.moveDown();
                    break;
                case 37: // 左
                    that.moveLeft();
                    break;
                case 38: // 上
                    that.moveUp();
                    break;
            }
            if (that.moveAble) {
                that.newCell();
            }
            that.drawAllCells(); // 更新界面
            that.checkLose();
        });
    },
    newCell: function() {
        var ableArr = [];
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (this.arr[i][j].value === 0) {
                    ableArr.push([i, j]);
                }
            }
        }
        if (ableArr.length > 0) {
            var index = getRandom(ableArr.length);
            var pos = ableArr[index];
            this.arr[pos[0]][pos[1]].value = 2;
        }
    },
    moveDown: function() {
        var i, j, k;
        for (i = 0; i < 4; i++) {
            for (j = 3; j >= 0; j--) {
                if (this.arr[i][j].value === 0) continue;
                k = j + 1;
                while (k < 4 && this.arr[i][k].value === 0) k++;
                if (k < 4 && this.arr[i][k].value === this.arr[i][j].value) {
                    this.mergeCells(i, j, i, k);
                } else if (k - 1 !== j) {
                    this.moveCell(i, j, i, k - 1);
                }
            }
        }
    },
    moveUp: function() {
        var i, j, k;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                if (this.arr[i][j].value === 0) continue;
                k = j - 1;
                while (k >= 0 && this.arr[i][k].value === 0) k--;
                if (k >= 0 && this.arr[i][k].value === this.arr[i][j].value) {
                    this.mergeCells(i, j, i, k);
                } else if (k + 1 !== j) {
                    this.moveCell(i, j, i, k + 1);
                }
            }
        }
    },
    moveLeft: function() {
        var i, j, k;
        for (j = 0; j < 4; j++) {
            for (i = 0; i < 4; i++) {
                if (this.arr[i][j].value === 0) continue;
                k = i - 1;
                while (k >= 0 && this.arr[k][j].value === 0) k--;
                if (k >= 0 && this.arr[k][j].value === this.arr[i][j].value) {
                    this.mergeCells(i, j, k, j);
                } else if (k + 1 !== i) {
                    this.moveCell(i, j, k + 1, j);
                }
            }
        }
    },
    moveRight: function() {
        var i, j, k;
        for (j = 0; j < 4; j++) {
            for (i = 3; i >= 0; i--) {
                if (this.arr[i][j].value === 0) continue;
                k = i + 1;
                while (k < 4 && this.arr[k][j].value === 0) k++;
                if (k < 4 && this.arr[k][j].value === this.arr[i][j].value) {
                    this.mergeCells(i, j, k, j);
                } else if (k - 1 !== i) {
                    this.moveCell(i, j, k - 1, j);
                }
            }
        }
    },
    mergeCells: function(i1, j1, i2, j2) {
        this.arr[i2][j2].value *= 2;
        this.arr[i1][j1].value = 0;
        this.moveAble = true;
        this.score += this.arr[i2][j2].value;
        $("#score").html("分数: " + this.score);
        if (this.arr[i2][j2].value === 2048) {
            alert('你赢了！');
            this.init();
        }
    },
    moveCell: function(i1, j1, i2, j2) {
        this.arr[i2][j2].value = this.arr[i1][j1].value;
        this.arr[i1][j1].value = 0;
        this.moveAble = true;
    },
    checkLose: function() {
        var i, j, temp;
        for (i = 0; i < 4; i++) {
            for (j = 0; j < 4; j++) {
                temp = this.arr[i][j].value;
                if (temp === 0) return false;
                if (i < 3 && this.arr[i + 1][j].value === temp) return false;
                if (j < 3 && this.arr[i][j + 1].value === temp) return false;
            }
        }
        alert('你输了！');
        this.init();
        return true;
    }
};

function getRandom(n) {
    return Math.floor(Math.random() * n);
}

var g = new G2048();
g.init();