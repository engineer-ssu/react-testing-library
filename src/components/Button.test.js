import { render, screen } from "@testing-library/react";
import Button from './Button';

test("비활성화된 버튼 테스트", () => {
    render(<Button disabled={true} />);
    const buttonEl = screen.getByTestId("button");
    expect(buttonEl).toBeDisabled();
});


test("활성화된 버튼 테스트", () => {
    render(<Button disabled={false} />);
    const buttonEl = screen.getByTestId("button");
    expect(buttonEl).not.toBeDisabled();
});