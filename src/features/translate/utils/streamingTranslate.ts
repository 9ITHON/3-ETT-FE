const API_BASE_URL = 'http://localhost:8000'; // 실제 백엔드 URL로 변경 필요

export const streamingTranslate = (
  text: string,
  onChunk: (chunk: string) => void,
  onComplete: (fullText: string) => void,
  onError: (error: string) => void
) => {
  // 간단한 콜백 기반 구현
  const request = new XMLHttpRequest();
  request.open('POST', `${API_BASE_URL}/easy_translate/streaming`);
  request.setRequestHeader('Content-Type', 'application/json');
  
  let buffer = '';
  let fullText = '';
  
  request.onreadystatechange = function() {
    if (request.readyState === 3 || request.readyState === 4) {
      const newData = request.responseText.substring(buffer.length);
      buffer = request.responseText;
      
      if (newData) {
        const lines = newData.split('\n');
        for (const line of lines) {
          if (line.indexOf('data: ') === 0) {
            try {
              const data = JSON.parse(line.substring(6));
              if (data.translated_text_chunk) {
                const chunk = data.translated_text_chunk;
                fullText += chunk;
                onChunk(chunk);
              }
            } catch (e) {
              console.warn('JSON 파싱 오류:', e);
            }
          }
        }
      }
      
      if (request.readyState === 4) {
        if (request.status === 200) {
          onComplete(fullText);
        } else {
          onError(`HTTP ${request.status}`);
        }
      }
    }
  };
  
  request.onerror = function() {
    onError('네트워크 오류가 발생했습니다.');
  };
  
  request.send(JSON.stringify({ content: text }));
}; 