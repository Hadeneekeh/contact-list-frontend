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

const TableBody = ({ tableData, type, onRowClick }) => {
  const getRowId = (row) => {
    const id = type === 'details' ? row[4] : row[row.length - 1];
    return id;
  };

  const getRowData = (row) => {
    const newRow = type !== 'details' ? row.slice(0, 4) : row.slice(0, 5);
    return newRow;
  };

  return (
    <tbody>
      {tableData.map((row, i) => (
        <tr key={getRowId(row)} onClick={() => onRowClick(getRowId(row))}>
          {getRowData(row).map((data, index) => (
            <td key={index}>{data}</td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

const Pagination = ({ page, totalPages, handleNext, handlePrev }) => {
  const classes = useStyles();

  return (
    <div className={classes.pagination}>
      <p>{`Page ${page} of ${totalPages}`}</p>
      <div>
        {handlePrev && <Button label="Prev" handleClick={handlePrev} color="secondary" />}
        {handleNext && <Button label="Next" handleClick={handleNext} color="secondary" />}{' '}
      </div>
    </div>
  );
};

const Table = ({
  columns,
  dataSource,
  page,
  totalPages,
  handleNext,
  handlePrev,
  loading,
  tableType = 'details',
  onRowClick = null
}) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      {loading ? (
        <p>Fetching records...</p>
      ) : (
        <>
          <table className={classes.table}>
            <TableHead columns={columns} />
            <TableBody tableData={dataSource} type={tableType} onRowClick={onRowClick} />
          </table>
          <Pagination
            page={page}
            totalPages={totalPages}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </>
      )}
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
  handlePrev: PropTypes.func,
  loading: PropTypes.bool.isRequired
};
