import { useEffect } from 'react';
import { Linking } from 'react-native';
import { useAuthStore } from '@/store/useAuthStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '@/navigation/Navigation';
import { SCREEN } from '@/constants/screen';

interface KakaoAuthResult {
  access_token: string;
  expires_in: string;
  nickname: string;
}

const BACKEND_URL = 'http://localhost:8000'; // 실제 백엔드 URL로 변경 필요

export const useKakaoLogin = () => {
  const { login, setUserInfo } = useAuthStore();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // 딥링크 리스너 설정
  useEffect(() => {
    const handleDeepLink = (url: string) => {
      console.log('딥링크 수신:', url);
      
      if (url.startsWith('myapp://auth')) {
        const params = parseUrlParams(url);
        
        if (params.access_token) {
          // 로그인 성공
          setUserInfo({
            accessToken: params.access_token,
            nickname: params.nickname || '사용자',
            expiresIn: params.expires_in,
          });
          
          login();
          navigation.replace(SCREEN.Home);
          
          console.log('카카오 로그인 성공!', params);
        } else if (params.error) {
          // 사용자가 취소했거나 에러 발생
          console.log('카카오 로그인 취소 또는 에러:', params.error);
          
          if (params.error === 'user_cancelled') {
            // 사용자가 X 버튼을 눌러 취소한 경우
            console.log('사용자가 로그인을 취소했습니다.');
            // 별도 알림 없이 그냥 로그인 화면에 머물러 있음
          } else {
            // 다른 에러의 경우
            alert('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
          }
        } else {
          // access_token도 error도 없는 경우 (예상치 못한 상황)
          console.log('예상치 못한 로그인 응답:', params);
          alert('로그인 처리 중 문제가 발생했습니다.');
        }
      }
    };

    // 딥링크 리스너 등록
    const subscription = Linking.addEventListener('url', ({ url }) => {
      handleDeepLink(url);
    });

    // 앱이 종료된 상태에서 딥링크로 실행된 경우
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink(url);
      }
    });

    return () => {
      subscription?.remove();
    };
  }, [login, setUserInfo, navigation]);

  // URL 파라미터 파싱 함수
  const parseUrlParams = (url: string): Record<string, string> => {
    const params: Record<string, string> = {};
    const urlParts = url.split('?');
    
    if (urlParts.length > 1) {
      const queryString = urlParts[1];
      const pairs = queryString.split('&');
      
      pairs.forEach(pair => {
        const [key, value] = pair.split('=');
        if (key && value) {
          params[key] = decodeURIComponent(value);
        }
      });
    }
    
    return params;
  };

  // 카카오 로그인 시작
  const startKakaoLogin = () => {
    const kakaoLoginUrl = `${BACKEND_URL}/auth/login`;
    
    // 브라우저에서 카카오 로그인 페이지 열기
    Linking.openURL(kakaoLoginUrl).catch((err) => {
      console.error('카카오 로그인 URL 열기 실패:', err);
      alert('로그인 페이지를 열 수 없습니다.');
    });
  };

  return {
    startKakaoLogin,
  };
}; 