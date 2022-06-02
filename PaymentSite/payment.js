let footerSVG = document.querySelector(".footer-svg");
let headerSVG = document.querySelector(".header-svg");

function renderSVG() {
  let headerLeftMatgin;
  headerSVG_width(800, 60);

  if (window.innerWidth > 1200) {
    headerLeftMatgin = (document.body.clientWidth - 1170) / 2;
  } else if (window.innerWidth > 992) {
    headerLeftMatgin = 100;
  } else if (window.innerWidth > 768) {
    headerSVG_width(600, 60);
    headerLeftMatgin = 50;
  } else if (window.innerWidth > 500) {
    headerSVG_width(500, 60);
    headerLeftMatgin = 30;
  } else {
    headerSVG_width(296, 26);
    headerLeftMatgin = 30;
  }

  let w = headerLeftMatgin + 270;

  let inner = `<svg
        width="${w}"
        height="73"
        viewBox="0 0 ${w} 73"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ><path
            d="M${w - 27.716} 61.2843
          L${w - 77.284} 11.7157
          C${w - 84.786} 4.21428 ${w - 94.96} 0 ${w - 105.569} 0
          H0
          V73
          H${w}
          C${w - 10.04} 73 ${w - 20.214} 68.7857 ${w - 27.716} 61.2843
          Z"
            fill="#1646FF"
          /></svg><h1 style="left: ${headerLeftMatgin}px">Контакти</h1>`;
  footerSVG.innerHTML = inner;
}

window.onload = () => {
  renderSVG();
};

window.addEventListener("resize", () => {
  renderSVG();
});

function headerSVG_width(width, height) {
  headerSVG.querySelector("svg").setAttribute("width", width);
  headerSVG.querySelector("svg").setAttribute("height", height);
  headerSVG
    .querySelector("svg")
    .setAttribute("viewBox", `0 0 ${width} ${height}`);
}
