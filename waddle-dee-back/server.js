const express = require('express');
const cors = require('cors'); // 방금 설치한 소통 패키지 가져오기
const app = express();
const PORT = 5000;

// 모든 곳에서 오는 요청을 허락해 주는 설정
app.use(cors());
app.use(express.json());

// 기본 주소 확인용
app.get('/', (req, res) => {
  res.send('Waddle Dee Backend Server is Running! 🍊');
});

// 프론트엔드가 "/api/waddle" 주소로 요청하면 보내줄 데이터
app.get('/api/waddle', (req, res) => {
  res.json({
    message: "와냐! 백엔드 서버에서 보낸 와들디의 메시지입니다! 🍊",
    status: "행복함"
  });
});

app.listen(PORT, () => {
  console.log(`백엔드 서버가 http://localhost:${PORT} 에서 돌아가고 있어요!`);
});