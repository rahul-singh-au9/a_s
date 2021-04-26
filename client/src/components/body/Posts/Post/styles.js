import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({

  border: {
    border: 'solid',
  },

  fullHeightCard: {
    height: '100%',
  },

  card: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: '15px',
    height: '100%',
    position: 'relative',
  },


  grid: {
    display: 'flex',
  },

  details: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '5px',
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
  },

});
