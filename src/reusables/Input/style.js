import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 10
  },

  label: {
    fontSize: 16,
    fontWeight: 500,
    marginBottom: 8
  },

  input: {
    border: '2px solid #7388CE',
    borderRadius: 4,
    padding: '8px 16px',
    fontSize: 14
  },

  error: {
    fontSize: 10,
    marginTop: 6,
    color: 'red'
  }
});

export default useStyles;
