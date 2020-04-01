document.write(`
  <style>
    body {
      font-family: -apple-system, system-ui, BlinkMacSystemFont;
      text-align:center;
      font-variant-numeric: tabular-nums;
    }
    .butt {
      font-size: 100px;
      background: salmon;
      border-radius: 250px;
      padding: 20px;
      display: inline-block;
      min-width: 200px;
      user-select: none;
    }
    .butt:active {
      background-color: orangered;
    }
    .webpage {
      padding: 100px 0;
    }
  </style>
  <div class="webpage">
    <h1>I love apps!</h1>
    <h3>This number will increase by one upon every click:</h3>
    <div class="butt" onclick="event.target.innerHTML = +event.target.innerHTML + (event.shiftKey ? -1 : 1); event.preventDefault
    ()">0</div>
    <h3>I hope you had fun on this Looker application.</h3>
    <img width="64" src="https://www.archiveteam.org/images/8/8b/Underconstruction.gif" />
  </div>
`)
