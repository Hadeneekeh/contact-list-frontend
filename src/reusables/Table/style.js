import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapper: {
    border: '1px solid #ddd',
    borderRadius: 4,
    width: '100%'
  },

  table: {
    'borderCollapse': 'collapse',
    'width': '100%',

    '& td': {
      border: '1px solid #ddd',
      padding: 8
    },

    '& th': {
      backgroundColor: '#7388CE',
      border: '1px solid #ddd',
      padding: '12px 8px',
      fontSize: 20,
      fontWeight: 500,
      textAlign: 'left',
      color: '#fff'
    },

    '& tr': {
      '&:nth-child(even)': {
        backgroundColor: '#f2f2f2'
      },

      '&:hover': {
        backgroundColor: '#878DA4',
        cursor: 'pointer',
      }
    }
  },

  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 25
  }
});

export default useStyles;
