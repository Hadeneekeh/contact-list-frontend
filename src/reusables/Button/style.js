import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  btn: {
    width: ({ width }) => width,
    color: '#EFEFEB',
    padding: 14,
    fontWeight: 500,
    backgroundColor: ({ color }) => (color === 'primary' ? '#374BBF' : '#878DA4'),
    cursor: 'pointer',
    borderRadius: 8,
    border: 'none',

    '&:hover': {
      backgroundColor: ({ color }) => (color === 'primary' ? '#7388CE' : '#3d4255'),
    }
  }
});

export default useStyles;
