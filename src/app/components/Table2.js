// components/Table2.js

import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Table2 = ({ data }) => {
  const columns = ["Найденный файл", "Найденное слово", "Формат файла", "Облачное хранилище", "Дата и время"];
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index}>{column}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <TableCell key={cellIndex}>{cell}</TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Table2;




// import React from 'react';
// import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

// const Table2 = () => {
//   // Пример данных для таблицы 2
//   const data = [
//     { file: 'example3.txt', word: 'example', dateTime: '2024-03-09 10:30:00' },
//     { file: 'example4.txt', word: 'example', dateTime: '2024-03-09 10:45:00' },
//     // Добавьте больше данных, если нужно
//   ];

//   return (
//     <TableContainer component={Paper}>
//       <Table>
//         <TableHead>
//           <TableRow>
//             <TableCell>Найденный файл</TableCell>
//             <TableCell>Найденное слово</TableCell>
//             <TableCell>Время и дата</TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {data.map((row, index) => (
//             <TableRow key={index}>
//               <TableCell>{row.file}</TableCell>
//               <TableCell>{row.word}</TableCell>
//               <TableCell>{row.dateTime}</TableCell>
//             </TableRow>
//           ))}
//         </TableBody>
//       </Table>
//     </TableContainer>
//   );
// };

// export default Table2;
