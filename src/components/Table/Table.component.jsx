import React from 'react';

const Table = props => {
  let headerRow = null;
  let dataRows = null;
  if (props.headerCells) {
    headerRow = (
      <thead>
        <tr>
          {props.headerCells.map((headerText, i) => (
            <th key={i}>{headerText}</th>
          ))}
        </tr>
      </thead>
    );
  }
  if (props.dataRows) {
    dataRows = props.dataRows.map((dataRow, rowIndex) => (
      <tr className={dataRow.status} key={rowIndex}>
        {dataRow.cells.map((cell, i) => (
          <td key={i}>{cell}</td>
        ))}
      </tr>
    ));
  }
  return (
    <table data-test="component-table" className="ui celled table">
      {headerRow}
      {dataRows}
    </table>
  );
};

export default Table;
