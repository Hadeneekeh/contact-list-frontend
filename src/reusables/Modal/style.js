import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'absolute'
  },

  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    height: 'auto',
    backgroundColor: 'white',
    zIndex: 10,
    borderRadius: 8,
    boxShadow: '0 5px 20px 0 rgba(0, 0, 0, 0.04)',
    padding: 20
  },

  title: {
    margin: 0,
    padding: 10,
    color: '#3d4255',
    fontWeight: 500,
    fontSize: 18,
    textAlign: 'left'
  },

  content: {
    padding: 10,
    fontSize: 14,
    color: '#3d4255',
    textAlign: 'center'
  },

  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center'
  }
});

export default useStyles;
