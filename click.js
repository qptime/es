// ==UserScript==
// @name         养牛自动点击脚本
// @namespace    https://github.com/qptime/es/
// @version      1.1
// @description  养牛自动点击脚本
// @author       qptime
// @match        https://tap.eclipse.xyz/*
// @icon         https://www.englishok.com.tw/wp-content/uploads/2021/02/210208-%E7%89%9B%E5%B9%B4%E8%8B%B1%E6%96%87_%E5%9C%961.jpg
// @downloadURL  https://raw.githubusercontent.com/qptime/es/main/click.js
// @updateURL    https://raw.githubusercontent.com/qptime/es/main/click.js
// @homepage     https://github.com/qptime
// ==/UserScript==

function randomCenterClick() {
    // 获取屏幕尺寸
    const screenWidth = window.innerWidth || document.documentElement.clientWidth;
    const screenHeight = window.innerHeight || document.documentElement.clientHeight;

    // 计算中心80%区域的边界
    const margin = 0.1; // 10% margin on each side
    const minX = screenWidth * margin;
    const maxX = screenWidth * (1 - margin);
    const minY = screenHeight * margin;
    const maxY = screenHeight * (1 - margin);

    // 生成随机位置（在中心80%区域内）
    const x = Math.floor(minX + Math.random() * (maxX - minX));
    const y = Math.floor(minY + Math.random() * (maxY - minY));

    // 创建并触发点击事件
    const clickEvent = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: x,
        clientY: y
    });
    document.elementFromPoint(x, y).dispatchEvent(clickEvent);

    // 生成随机延迟（1到5秒之间）
    const delay = 30 + Math.random() * 200;

    // 在控制台输出点击信息
    console.log(`点击位置: (${x}, ${y}), 下次点击延迟: ${delay.toFixed(2)}ms`);

    // 安排下一次点击
    setTimeout(randomCenterClick, delay);
}

// 开始点击循环
randomCenterClick();
