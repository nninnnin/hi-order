const PORT = 8080;

const fs = require("fs");
const http = require("http");

// 노드 서버를 시작한다
console.log(http);

const server = http.createServer((req, res) => {
  const url = res.url;

  if (url === "/order") {
    // 주문을 받아서 데이터베이스에 저장한다
    res.writeHead(200, {
      "Content-Type": "text/plain; charset=utf-8",
    });

    res.end("주문이 완료되었습니다.");

    return;
  }

  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8",
  });

  // read index.html and send it to the client
  fs.readFile("index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();

      return;
    }

    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// 루트라우트에서는 index.html을 보여준다

// `/order` 에서는 주문을 받아서 데이터베이스(미믹스)에 저장한다
