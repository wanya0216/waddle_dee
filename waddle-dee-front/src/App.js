import React, { useState, useEffect } from 'react';

function App() {
  // 백엔드에서 받아온 데이터를 저장할 공간(state)
  const [backendData, setBackendData] = useState('🎈 와들디가 데이터를 가져오는 중 청소 중...');

  // 페이지가 처음 열릴 때 백엔드에 요청을 보냄
  useEffect(() => {
    fetch('https://waddle-dee.onrender.com/api/waddle') // 백엔드 주소로 요청!
      .then(response => response.json())
      .then(data => {
        // 백엔드가 준 { message: "..." } 에서 message만 쏙 빼서 저장
        setBackendData(data.message);
      })
      .catch(error => {
        console.error('데이터를 가져오는데 실패했어요:', error);
        setBackendData('백엔드 서버와 연결할 수 없어요 😭 (와들디가 넘어졌나봐요)');
      });
  }, []);

  return (
    <div style={{
      textAlign: 'center',
      // 부드러운 파스텔톤 오렌지 그라데이션 background
      background: 'linear-gradient(135deg, #FFF0E5 0%, #FFD1A9 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      // 동글동글한 느낌을 주는 폰트 세팅
      fontFamily: '"Comic Sans MS", "Nanum Gothic Round", sans-serif',
      margin: 0,
      padding: '20px',
      boxSizing: 'border-box'
    }}>
      {/* 메인 타이틀 */}
      <h1 style={{ 
        color: '#E65C00', 
        fontSize: '3.2rem', 
        marginBottom: '5px',
        textShadow: '3px 3px 0px #FFF' // 글씨 뒤에 하얀색 그림자를 주어 입체감 부여
      }}>
        대왕 귀여운 와들디 페이지 🍊
      </h1>
      
      <p style={{ 
        fontSize: '1.2rem', 
        color: '#665544', 
        marginBottom: '40px',
        fontWeight: 'bold',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        padding: '8px 20px',
        borderRadius: '20px'
      }}>
        ✨ 프론트엔드와 백엔드가 성공적으로 연결되었습니다!
      </p>
      
      {/* 백엔드 데이터 상자 (더 말랑말랑한 체크/스티치 느낌) */}
      <div style={{
        backgroundColor: '#FFF8F4',
        padding: '25px 40px',
        borderRadius: '24px',
        boxShadow: '0 8px 24px rgba(230, 92, 0, 0.15)',
        marginBottom: '40px',
        maxWidth: '80%',
        width: '450px',
        fontSize: '1.3rem',
        fontWeight: 'bold',
        color: '#D84315',
        border: '4px dashed #FFB380',
        position: 'relative'
      }}>
        {/* 장식용 미니 귤 아이콘 느낌 */}
        <span style={{ position: 'absolute', top: '-15px', left: '20px', fontSize: '1.5rem' }}>🍊</span>
        <span style={{ position: 'absolute', bottom: '-15px', right: '20px', fontSize: '1.5rem' }}>✨</span>
        
        {backendData}
      </div>

      {/* CSS로 구현한 와들디 캐릭터 캐릭터 몸통 구체화 */}
      <div style={{
        width: '160px',
        height: '145px',
        backgroundColor: '#FF8A50', // 와들디 특유의 살구-오렌지색
        borderRadius: '50% 50% 45% 45%', // 약간 아래가 퍼진 찐빵 모양
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: '0 10px 20px rgba(216, 67, 21, 0.2)',
        border: '4px solid #E65C00',
        position: 'relative',
        transform: 'hover: scale(1.05)',
        transition: 'all 0.3s ease'
      }}>
        
        {/* 와들디 얼굴 하얀 영역 (볼과 입 주변) */}
        <div style={{
          position: 'absolute',
          bottom: '10px',
          width: '120px',
          height: '80px',
          backgroundColor: '#FFF0E5',
          borderRadius: '50% 50% 45% 45%',
          zIndex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          {/* 눈 영역 */}
          <div style={{ display: 'flex', gap: '22px', marginBottom: '25px' }}>
            {/* 왼쪽 눈 */}
            <div style={{ 
              width: '12px', 
              height: '26px', 
              backgroundColor: '#002A54', 
              borderRadius: '50%',
              position: 'relative'
            }}>
              {/* 눈동자 하이라이트 */}
              <div style={{ width: '4px', height: '10px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: '4px' }}></div>
            </div>
            {/* 오른쪽 눈 */}
            <div style={{ 
              width: '12px', 
              height: '26px', 
              backgroundColor: '#002A54', 
              borderRadius: '50%',
              position: 'relative'
            }}>
              <div style={{ width: '4px', height: '10px', backgroundColor: 'white', borderRadius: '50%', position: 'absolute', top: '3px', left: '4px' }}></div>
            </div>
          </div>
        </div>

        {/* 발 (얼굴 뒤/아래 삐죽 나온 노란 발) */}
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          left: '10px',
          width: '50px',
          height: '30px',
          backgroundColor: '#FFCA28',
          border: '3px solid #E65C00',
          borderRadius: '50%',
          zIndex: 0
        }}></div>
        <div style={{
          position: 'absolute',
          bottom: '-12px',
          right: '10px',
          width: '50px',
          height: '30px',
          backgroundColor: '#FFCA28',
          border: '3px solid #E65C00',
          borderRadius: '50%',
          zIndex: 0
        }}></div>

        {/* 텍스트 라벨 */}
        <span style={{ 
          zIndex: 2, 
          fontWeight: 'bold', 
          color: '#E65C00',
          marginTop: '65px',
          fontSize: '1.1rem',
          backgroundColor: 'white',
          padding: '2px 10px',
          borderRadius: '10px',
          border: '2px solid #E65C00'
        }}>
          Waddle Dee!
        </span>
      </div>
    </div>
  );
}

export default App;