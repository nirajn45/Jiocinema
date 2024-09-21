// import React, { useState, useCallback } from 'react';
// import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

// const initialData = [
//   {
//     id: 1,
//     views: 15000,
//     prog_name: 'Movie A',
//     date_telecast: '2024-09-01',
//     income_of_ad: 5000,
//     expenses: 3000,
//   },
//   {
//     id: 2,
//     views: 22000,
//     prog_name: 'IPL 2024 Match 1',
//     date_telecast: '2024-04-05',
//     income_of_ad: 12000,
//     expenses: 4000,
//   },
//   {
//     id: 3,
//     views: 18000,
//     prog_name: 'Drama Series B',
//     date_telecast: '2024-08-15',
//     income_of_ad: 8000,
//     expenses: 2000,
//   },
//   {
//     id: 4,
//     views: 50000,
//     prog_name: 'IPL 2024 Final',
//     date_telecast: '2024-05-29',
//     income_of_ad: 20000,
//     expenses: 7000,
//   },
// ];

// const JioCinema = () => {
//   const [data, setData] = useState(initialData);
//   const [filteredData, setFilteredData] = useState(initialData);

//   // Show all records
//   const showAllRecords = useCallback(() => {
//     setFilteredData([...data]);
//   }, [data]);

//   // Filter IPL records
//   const showIPLRecords = useCallback(() => {
//     const iplRecords = data.filter(record => record.prog_name.includes('IPL'));
//     setFilteredData(iplRecords);
//   }, [data]);

//   // Find record with max views
//   const showMaxViewRecord = useCallback(() => {
//     const maxViewRecord = data.reduce((max, record) =>
//       record.views > max.views ? record : max
//     , data[0]);
//     setFilteredData([maxViewRecord]);
//   }, [data]);

//   // Filter records with loss (expenses > income)
//   const showLossRecords = useCallback(() => {
//     const lossRecords = data.filter(record => record.expenses > record.income_of_ad);
//     setFilteredData(lossRecords);
//   }, [data]);

//   // Add a new record
//   const addNewRecord = useCallback(() => {
//     const newRecord = {
//       id: data.length + 1,
//       views: 70000,
//       prog_name: 'New Program',
//       date_telecast: '2024-09-15',
//       income_of_ad: 4000,
//       expenses: 3000,
//     };
//     const updatedData = [...data, newRecord];
//     setData(updatedData);
//     setFilteredData(updatedData);
//   }, [data]);

//   // Delete the third record
//   const deleteThirdRecord = useCallback(() => {
//     const updatedData = data.filter((_, index) => index !== 2);
//     setData(updatedData);
//     setFilteredData(updatedData);
//   }, [data]);

//   // Update expenses by 10%
//   const updateExpensesBy10Percent = useCallback(() => {
//     const updatedData = data.map(record => ({
//       ...record,
//       expenses: record.expenses * 1.1,
//     }));
//     setData(updatedData);
//     setFilteredData(updatedData);
//   }, [data]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>JioCinema Records</Text>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity style={styles.button} onPress={showAllRecords}>
//           <Text style={styles.buttonText}>Show All Records</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={showIPLRecords}>
//           <Text style={styles.buttonText}>Show IPL Records</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={showMaxViewRecord}>
//           <Text style={styles.buttonText}>Show Max View Record</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={showLossRecords}>
//           <Text style={styles.buttonText}>Show Loss Records</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={addNewRecord}>
//           <Text style={styles.buttonText}>Add New Record</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={deleteThirdRecord}>
//           <Text style={styles.buttonText}>Delete 3rd Record</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.button} onPress={updateExpensesBy10Percent}>
//           <Text style={styles.buttonText}>Update Expenses by 10%</Text>
//         </TouchableOpacity>
//       </View>

//       <FlatList
//         data={filteredData}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <View style={styles.card}>
//             <Text style={styles.cardTitle}>{item.prog_name}</Text>
//             <Text>Views: {item.views}</Text>
//             <Text>Date Telecast: {item.date_telecast}</Text>
//             <Text>Income of Ad: {item.income_of_ad}</Text>
//             <Text>Expenses: {item.expenses.toFixed(2)}</Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f8f8f8',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   buttonContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//     marginBottom: 20,
//   },
//   button: {
//     backgroundColor: '#6200ea',
//     padding: 10,
//     margin: 5,
//     borderRadius: 5,
//     width: '30%',
//   },
//   buttonText: {
//     color: 'white',
//     fontSize: 16,
//     textAlign: 'center',
//     fontWeight: 'bold',
//   },
//   card: {
//     backgroundColor: 'white',
//     padding: 15,
//     marginBottom: 10,
//     borderRadius: 8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 3,
//     elevation: 3,
//   },
//   cardTitle: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginBottom: 5,
//   },
// });

// export default JioCinema;

import React, { useState, useCallback } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

const initialData = [
  {
    id: 1,
    views: 11000,
    prog_name: 'Stree2',
    date_telecast: '2024-09-01',
    income_of_ad: 5000,
    expenses: 3000,
  },
  {
    id: 2,
    views: 22000,
    prog_name: 'IPL 2024 Match 1',
    date_telecast: '2024-04-05',
    income_of_ad: 12000,
    expenses: 4500,
  },
  {
    id: 3,
    views: 18000,
    prog_name: 'Football',
    date_telecast: '2024-08-15',
    income_of_ad: 8000,
    expenses: 2000,
  },
  {
    id: 4,
    views: 50000,
    prog_name: 'IPL 2024 Final',
    date_telecast: '2024-05-29',
    income_of_ad: 20000,
    expenses: 7300,
  },
  {
    id: 5,
    views: 32000,
    prog_name: 'Basketball',
    date_telecast: '2024-05-29',
    income_of_ad: 2300,
    expenses: 7900,
  },
];

const JioCinema = () => {
  const [data, setData] = useState(initialData);
  const [filteredData, setFilteredData] = useState(initialData);
  const [nextId, setNextId] = useState(data.length + 1); // Track the next ID for new records

  // Show all records
  const showAllRecords = useCallback(() => {
    setFilteredData([...data]);
  }, [data]);
  // Show IPL records
  const showIPLRecords = useCallback(() => {
    const iplRecords = data.filter(record => record.prog_name.includes('IPL'));
    setFilteredData(iplRecords);
  }, [data]);

  // Show max view record
  const showMaxViewRecord = useCallback(() => {
    const maxViewRecord = data.reduce((max, record) => (record.views > max.views ? record : max), data[0]);
    setFilteredData([maxViewRecord]);
  }, [data]);

  // Show loss records
  const showLossRecords = useCallback(() => {
    const lossRecords = data.filter(record => record.expenses > record.income_of_ad);
    setFilteredData(lossRecords);
  }, [data]);

  // Add new record
  const addNewRecord = useCallback(() => {
    const newRecord = {
      id: nextId,
      views: Math.floor(Math.random() * 150000), 
      prog_name: `New Program ${nextId}`,
      date_telecast: '2024-09-15',
      income_of_ad: Math.floor(Math.random() * 10000), 
      expenses: Math.floor(Math.random() * 10000), 
    };

    const updatedData = [...data, newRecord];
    console.log('New Data:', updatedData); 

    setData(updatedData);
    setFilteredData(updatedData);
    setNextId(nextId + 1); 
  }, [data, nextId]);

  


  const deleteThirdRecord = useCallback(() => {
    const updatedData = data.filter((_, index) => index !== 2);
    setData(updatedData);
    setFilteredData(updatedData);
  }, [data]);

  const updateExpensesBy10Percent = useCallback(() => {
    const updatedData = data.map(record => ({
      ...record,
      expenses: record.expenses * 1.1,
    }));
    setData(updatedData);
    setFilteredData(updatedData);
  }, [data]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>JioCinema </Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={showAllRecords}>
          <Text style={styles.buttonText}>Show All Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showIPLRecords}>
           <Text style={styles.buttonText}>Show IPL Records</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={showMaxViewRecord}>
          <Text style={styles.buttonText}>Show Max View Record</Text>
         </TouchableOpacity>
         <TouchableOpacity style={styles.button} onPress={showLossRecords}>
           <Text style={styles.buttonText}>Show Loss Records</Text>
         </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addNewRecord}>
          <Text style={styles.buttonText}>Add New Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={deleteThirdRecord}>
          <Text style={styles.buttonText}>Delete 3rd Record</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={updateExpensesBy10Percent}>
          <Text style={styles.buttonText}>Update Expenses by 10%</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.prog_name}</Text>
            <Text>Views: {item.views}</Text>
            <Text>Date Telecast: {item.date_telecast}</Text>
            <Text>Income of Ad: {item.income_of_ad}</Text>
            <Text>Expenses: {item.expenses.toFixed(2)}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 22,
    textAlign: 'center',
    color: 'black',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'yellow',
    padding: 12,
    margin: 5,
    borderRadius: 5,
    width: '30%',
    
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: 'white',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: 'black',
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
    color:'black'
  },
});

export default JioCinema;
