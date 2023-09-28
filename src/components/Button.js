
const Button = ({ disabled }) => {
    return (
        <button data-testid="button" disabled={disabled}>
            {disabled ? (
                <>비활성화된 버튼</>
            ) : (
                <>활성화된 버튼</>
            )}         
        </button>
    );    
}

export default Button;