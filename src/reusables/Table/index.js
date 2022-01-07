import Button from '../Button';
import PropTypes from 'prop-types';
import useStyles from './style';

const TableHead = ({ columns }) => {
  return (
    <thead>
      <tr>
        {columns.map((head, i) => (
          <th key={i}>{head}</th>
        ))}
      </tr>
    </thead>
  );
};

const TableBody = ({ tableData }) => {
  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={i}>
          {row.map((data, index) => (
            <td key={index}>{data}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Pagination = ({ page, totalPages, handleNext, handlePrev, }) => {
  const classes = useStyles();

  return (
    <div className={classes.pagination}>
      <p>{`Page ${page} of ${totalPages} pages`}</p>
      <div>
        <Button label="Prev" handleClick={handlePrev} color="secondary" />
        <Button label="Next" handleClick={handleNext} color="secondary" />
      </div>
    </div>
  );
};

const Table = ({ columns, dataSource, page, totalPages, handleNext, handlePrev }) => {
  const classes = useStyles()
  return (
    <div className={classes.wrapper}>
      <table className={classes.table}>
        <TableHead columns={columns} />
        <TableBody tableData={dataSource} />
      </table>
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePrev={handlePrev}
        handleNext={handleNext}
      />
    </div>
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataSource: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  page: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func
};
