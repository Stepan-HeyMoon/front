import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

const Table1 = ({ data }) => {
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

export default Table1;


// import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

// const Table1 = () => {
//   // Пример данных для таблицы 1
//   const data = [
//     { file: 'example1.txt', word: 'example', dateTime: '2024-03-09 10:00:00' },
//     { file: 'example2.txt', word: 'example', dateTime: '2024-03-09 10:15:00' },
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

// export default Table1;