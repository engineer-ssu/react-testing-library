import { render, screen } from '@testing-library/react';
import App from './App';

// 3개의 인자를 받는다. 테스트명, 함수, timeout
// test('renders learn react link', () => {
//   // render 는 특정 컴퍼넌트를 받아서 Virtual Dom을 생성해준다. screen 객체의 특정 메소드를 이용해서 객체에 접근할 수 있다.
//   // 대소문자 구분이 없다.
//   render(<App />);
//   // 
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


test('로고 이미지가 잘 나온다.', () => {
  render(<App />);
  const logoEl = screen.getByAltText('logo');
  expect(logoEl).toBeInTheDocument();
});